import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingStatus } from 'src/app/models/bookingStatus';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';
import { BookingstatusService } from 'src/app/services/bookingstatus.service';

@Component({
  selector: 'app-booking-create-update',
  templateUrl: './booking-create-update.component.html',
  styleUrls: ['./booking-create-update.component.css']
})
export class BookingCreateUpdateComponent {
  bookingAddUpdateForm:FormGroup
  errorMessage:string = ""
  successMessage:string = ""
  bookingId:number = 0
  id:number=0

  checkInDate:Date
  checkOutDate:Date
  payment:number
  bookingStatusId:number
  bookingStatusName:string
  customerId:number
  customerName:string
  roomId:number
  roomName:string
  discountRate:number

  customers:Customer[]
  rooms:Room[]
  activeBookingStatuses:BookingStatus[]

  constructor(private bookingervice:BookingService, private customerService:CustomerService, private roomService:RoomService,
    private bookingStatusService:BookingstatusService, private route:ActivatedRoute, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.bookingId= this.route.snapshot.queryParamMap.get('bookingId') as unknown as number
    if(this.bookingId>0) this.getByIdBooking(this.bookingId)
    this.getActiveCustomers();
    this.getActiveRooms();
    this.getActiveBookingStatus();
    this.createBookingAddUpdateForm()
  }

  createBookingAddUpdateForm(){
    this.bookingAddUpdateForm = this.formBuilder.group({
      id: this.bookingId,  
      checkInDate: ["",Validators.required],
      checkOutDate: ["",Validators.required],
      payment: 0,
      bookingStatusId: ["",Validators.required],
      customerId: ["",Validators.required],
      roomId: ["",Validators.required],
      discountRate: ["",Validators.required]
    })
  }

  addBooking(){
    if(this.bookingAddUpdateForm.valid){
      let bookingModel = Object.assign({},this.bookingAddUpdateForm.value)
      this.bookingervice.addBooking(bookingModel).subscribe(response=>{
        this.errorMessage=""
        this.successMessage="Die Buchung wurde erfolgreich hinzugefügt"
      },responseError=>{
        this.errorMessage=responseError.error.message
        this.successMessage=""
      })
    }else{
      this.errorMessage="Die Buchung konnte nicht hinzugefügt werden"
      this.successMessage=""
    }
  }

  updateBooking(){
    if(this.bookingAddUpdateForm.valid){
      let bookingModel = Object.assign({},this.bookingAddUpdateForm.value)
      this.bookingervice.updateBooking(bookingModel).subscribe(response=>{
        this.errorMessage=""
        this.successMessage="Die Buchung wurde erfolgreich aktuelisiert"
      },responseError=>{
        this.errorMessage=responseError.error.message
        this.successMessage=""
      })
    }else{
      this.errorMessage="Die Buchung konnte nicht aktuelisiert werden"
      this.successMessage=""
    }
  }

  getByIdBooking(bookingId:number){
    this.bookingervice.getByIdBooking(bookingId).subscribe(response=>{
      this.checkInDate=response.checkInDate
      this.checkOutDate=response.checkOutDate
      this.payment=response.payment
      this.bookingStatusId=response.bookingStatusId
      this.customerId=response.customerId
      this.customerName=response.customerFirstName + " " + response.customerLastName
      this.roomId=response.roomId
      this.roomName=response.roomName
    })
  }

  getActiveCustomers(){
    this.customerService.getByActiveCustomers().subscribe(response=>{
      this.customers = response
    })
  }

  getActiveRooms(){
    this.roomService.getByActiveRooms().subscribe(response=>{
      this.rooms = response
    })
  }

  getActiveBookingStatus(){
    this.bookingStatusService.getActiveBookingStatuses().subscribe(response=>{
      this.activeBookingStatuses = response
    })
  }

}