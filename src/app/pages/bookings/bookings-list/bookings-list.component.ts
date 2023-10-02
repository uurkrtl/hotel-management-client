import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingStatus } from 'src/app/models/bookingStatus';
import { BookingService } from 'src/app/services/booking.service';
import { BookingstatusService } from 'src/app/services/bookingstatus.service';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css']
})
export class BookingsListComponent implements OnInit {
  bookings:Booking[] = []
  filterBookingCustomerNameText:string=""
  filterBookingRoomNameText:string=""
  bookingStatuses:BookingStatus[]
  filterBookingStatusNameText:string = ""

  constructor(private bookingService:BookingService, private bookingStatusService:BookingstatusService){}

  ngOnInit(): void {
    this.getAllBookings()
    this.getStatusesName()
  }

  getAllBookings(){
    this.bookingService.getAllBookings().subscribe(response=>{
      this.bookings=response
    })
  }

  getStatusesName(){
    this.bookingStatusService.getAllBookingStatuses().subscribe(response=>{
      this.bookingStatuses = response
    })
  }

}