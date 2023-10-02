import { Component, OnInit } from '@angular/core';
import { BookingStatus } from 'src/app/models/bookingStatus';
import { BookingstatusService } from 'src/app/services/bookingstatus.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-status-detail',
  templateUrl: './booking-status-detail.component.html',
  styleUrls: ['./booking-status-detail.component.css']
})
export class BookingStatusDetailComponent implements OnInit {
  bookingStatus:BookingStatus
  errorMessage:string
  successMessage:string

  bookingStatusId:number
  name:string
  isActive:boolean

  constructor(private bookingStatusService:BookingstatusService, private formBuilder:FormBuilder, private route:ActivatedRoute){}

  ngOnInit():void{
    this.bookingStatusId= this.route.snapshot.queryParamMap.get('bookingStatusId') as unknown as number
    this.getByIdBookingStatus(this.bookingStatusId)
  }

  getByIdBookingStatus(bookingStatusId:number){
    this.bookingStatusService.getByIdBookingStatus(bookingStatusId).subscribe(response=>{
      this.name=response.name
      this.isActive=response.active
    })
  }

  makeBookingStatusActive(bookingStatusId:number){
    this.bookingStatusService.makeBookingStatusActive(bookingStatusId).subscribe(response=>{
      this.errorMessage=""
      this.successMessage="Der Status des BookingStatuses wurde erfolgreich aktulisiert"
    },responseError=>{
      this.errorMessage=responseError.error.message
      this.successMessage=""
    })
  }

  makeBookingStatusPassive(bookingStatusId:number){
    this.bookingStatusService.makeBookingStatusPassive(bookingStatusId).subscribe(response=>{
      this.errorMessage=""
      this.successMessage="Der Status des BookingStatuses wurde erfolgreich aktulisiert"
    },responseError=>{
      this.errorMessage=responseError.error.message
      this.successMessage=""
    })
  }
}