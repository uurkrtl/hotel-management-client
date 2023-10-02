import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  apiUrl = "http://eagle-hotel-management.eu-central-1.elasticbeanstalk.com/api"
  newPath:string = ""

  constructor(private httpClient:HttpClient) { }

  getAllBookings():Observable<Booking[]>{
    this.newPath = this.apiUrl + "/getAllBookings"
    return this.httpClient.get<Booking[]>(this.newPath)
  }

  addBooking(booking:Booking){
    this.newPath = this.apiUrl + "/addBooking"
    return this.httpClient.post(this.newPath,booking)
  }

  updateBooking(booking:Booking){
    this.newPath = this.apiUrl + "/updateBooking"
    return this.httpClient.put(this.newPath,booking)
  }

  getByIdBooking(id:number){
    this.newPath = this.apiUrl + "/getByIdBooking?id="+id
    return this.httpClient.get<Booking>(this.newPath)
  }

  updateStatusBooking(bookingId:number,statusId:number){
    this.newPath = this.apiUrl + "/updateStatusBooking?id="+bookingId+"&statusId=" + statusId
    return this.httpClient.put(this.newPath,{bookingId,statusId})
  }
}