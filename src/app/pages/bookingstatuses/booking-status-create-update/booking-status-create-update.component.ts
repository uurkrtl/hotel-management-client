import { Component, OnInit } from '@angular/core';
import { BookingStatus } from 'src/app/models/bookingStatus';
import { BookingstatusService } from 'src/app/services/bookingstatus.service';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-status-create-update',
  templateUrl: './booking-status-create-update.component.html',
  styleUrls: ['./booking-status-create-update.component.css']
})
export class BookingStatusCreateUpdateComponent implements OnInit {
  bookingStatusAddUpdateForm:FormGroup
  errorMessage:string = ""
  successMessage:string = ""
  bookingStatusId:number = 0
  selectedBookingStatus:BookingStatus
  id:number=0

  name:string = ""

  constructor(private bookingStatusService:BookingstatusService, private route:ActivatedRoute, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.bookingStatusId= this.route.snapshot.queryParamMap.get('bookingStatusId') as unknown as number
    if(this.bookingStatusId>0) this.getByIdBookingStatus(this.bookingStatusId)
    this.createBookingStatusAddUpdateForm()
  }

  createBookingStatusAddUpdateForm(){
    this.bookingStatusAddUpdateForm = this.formBuilder.group({
      id: this.bookingStatusId,
      name: ["",Validators.required]
    })
  }

  addBookingStatus(){
    if(this.bookingStatusAddUpdateForm.valid){
      let bookingStatusModel = Object.assign({},this.bookingStatusAddUpdateForm.value)
      this.bookingStatusService.addBookingStatus(bookingStatusModel).subscribe(response=>{
        this.errorMessage=""
        this.successMessage="Der Buchungsstatus wurde erfolgreich hinzugefügt"
      },responseError=>{
        this.errorMessage=responseError.error.message
        this.successMessage=""
      })
    }else{
      this.errorMessage="Der Buchungsstatus konnte nicht hinzugefügt werden"
      this.successMessage=""
    }
  }

  updateBookingStatus(){
    if(this.bookingStatusAddUpdateForm.valid){
      let bookingStatusModel = Object.assign({},this.bookingStatusAddUpdateForm.value)
      this.bookingStatusService.updateBookingStatus(bookingStatusModel).subscribe(response=>{
        this.errorMessage=""
        this.successMessage="Der Buchungsstatus wurde erfolgreich aktuelisiert"
      },responseError=>{
        this.errorMessage=responseError.error.message
        this.successMessage=""
      })
    }else{
      this.errorMessage="Der Buchungsstatus konnte nicht aktuelisiert werden"
      this.successMessage=""
    }
  }

  getByIdBookingStatus(bookingStatusId:number){
    this.bookingStatusService.getByIdBookingStatus(bookingStatusId).subscribe(response=>{
      this.selectedBookingStatus=response
      this.name=response.name
    })
  }
}