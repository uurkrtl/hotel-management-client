import { Component, OnInit } from '@angular/core';
import { BookingstatusService } from 'src/app/services/bookingstatus.service';
import { BookingStatus } from 'src/app/models/bookingStatus';

@Component({
  selector: 'app-booking-statuses-list',
  templateUrl: './booking-statuses-list.component.html',
  styleUrls: ['./booking-statuses-list.component.css']
})
export class BookingStatusesListComponent implements OnInit {
  bookingStatuses:BookingStatus[] = []
  filterBookingStatusNameText:string = ""
  bookingStatusStatusFilterText:string = ""

  constructor(private bookingStatusService:BookingstatusService){}

  ngOnInit(): void {
    this.getAllBookingStatuses()
  }

  getAllBookingStatuses(){
    this.bookingStatusService.getAllBookingStatuses().subscribe(response=>{
      this.bookingStatuses = response
    })
  }

}