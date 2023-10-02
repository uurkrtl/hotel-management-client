import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
import { BookingStatus } from 'src/app/models/bookingStatus';
import { BookingstatusService } from 'src/app/services/bookingstatus.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  booking:Booking
  successMessage:string = ""
  errorMessage:string = ""

  bookingStatuses:BookingStatus[]

  bookingId:number
  checkInDate:Date
	checkOutDate:Date
	roomPrice:number
	discountRate:number
	discountedPrice:number
	payment:number
	debt:number
  bookingStatusId:number
	bookingStatusName:string
  customerFirstName:string
  customerLastName:string
	roomName:string

  constructor(private bookingService:BookingService, private bookingStatusService:BookingstatusService, private formBuilder:FormBuilder, private route:ActivatedRoute){}

  ngOnInit():void{
    this.bookingId= this.route.snapshot.queryParamMap.get('bookingId') as unknown as number
    this.getActiveBookingStatuses()
    this.getByIdBooking(this.bookingId)
  }

  getByIdBooking(bookingId:number){
    this.bookingService.getByIdBooking(bookingId).subscribe(response=>{
      this.checkInDate=response.checkInDate
      this.checkOutDate=response.checkOutDate
      this.roomPrice=response.roomPrice
      this.discountRate=response.discountRate
      this.discountedPrice=response.discountedPrice
      this.payment=response.payment
      this.debt=response.debt
      this.bookingStatusName=response.bookingStatusName
      this.customerFirstName=response.customerFirstName
      this.customerLastName=response.customerLastName
      this.roomName=response.roomName
      this.bookingStatusId=response.bookingStatusId
    })
  }

  updateStatusBooking(bookingId:number,statusId:number){
    this.bookingService.updateStatusBooking(bookingId,statusId).subscribe(response=>{
      this.errorMessage=""
      this.successMessage="Der Status der Buchung wurde erfolgreich aktulisiert"
    },responseError=>{
      this.errorMessage=responseError.error.message
      this.successMessage=""
    })
  }

  getActiveBookingStatuses(){
    this.bookingStatusService.getActiveBookingStatuses().subscribe(response=>{
      this.bookingStatuses=response
    })
  }
}