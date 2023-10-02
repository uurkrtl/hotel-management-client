import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';
import { BookingStatus } from 'src/app/models/bookingStatus';
import { BookingstatusService } from 'src/app/services/bookingstatus.service';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-booking-update',
  templateUrl: './booking-update.component.html',
  styleUrls: ['./booking-update.component.css']
})
export class BookingUpdateComponent {
  bookingUpdateForm:FormGroup
  errorMessage:string = ""
  successMessage:string = ""
  bookingId:number = 0

  activeRooms:Room[]
  activeBookingStatuses:BookingStatus[]

  checkInDate:Date
  checkOutDate:Date
  bookingStatusId:number
  customerId:number
  customerName:string
  roomId:number
  roomName:string
  payment:number
  roomPrice:number
  debt:number
  discountRate:number
  discountedPrice:number

  constructor(private bookingervice:BookingService, private roomService:RoomService, private bookingStatusService:BookingstatusService,
     private route:ActivatedRoute, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.bookingId= this.route.snapshot.queryParamMap.get('bookingId') as unknown as number
    if(this.bookingId>0) this.getByIdBooking(this.bookingId)
    this.getActiveRooms();
    this.getActiveBookingStatus();
    this.createBookingUpdateForm()
  }

  createBookingUpdateForm(){
    this.bookingUpdateForm = this.formBuilder.group({
      id: this.bookingId,  
      checkInDate: ["",Validators.required],
      checkOutDate: ["",Validators.required],
      discountRate: ["",Validators.required],
      payment: ["",Validators.required],
      roomId: ["",Validators.required],
      customerName: this.customerName,
      roomPrice: this.roomPrice,
      discountedPrice:this.discountedPrice,
      debt:this.debt,
      bookingStatusId:this.bookingStatusId
    })
  }

  updateBooking(){
    if(this.bookingUpdateForm.valid){
      let bookingUpdateModel = Object.assign({},this.bookingUpdateForm.value)
      this.bookingervice.updateBooking(bookingUpdateModel).subscribe(response=>{
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
      this.roomPrice=response.roomPrice
      this.debt = response.debt
      this.discountRate = response.discountRate
      this.discountedPrice = response.discountedPrice
    })
  }

  getActiveRooms(){
    this.roomService.getByActiveRooms().subscribe(response=>{
      this.activeRooms = response
    })
  }

  getActiveBookingStatus(){
    this.bookingStatusService.getActiveBookingStatuses().subscribe(response=>{
      this.activeBookingStatuses = response
    })
  }

}
