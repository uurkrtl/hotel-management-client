import { Injectable } from '@angular/core';
import { BookingStatus } from '../models/bookingStatus';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingstatusService {
  apiUrl = "http://eagle-hotel-management.eu-central-1.elasticbeanstalk.com/api"
  newPath:string = ""

  constructor(private httpClient:HttpClient) { }

  getAllBookingStatuses():Observable<BookingStatus[]>{
    this.newPath = this.apiUrl+"/getAllBookingStatuses"
    return this.httpClient.get<BookingStatus[]>(this.newPath)
  }

  getActiveBookingStatuses():Observable<BookingStatus[]>{
    this.newPath = this.apiUrl+"/getByActiveBookingStatuses?active=true"
    return this.httpClient.get<BookingStatus[]>(this.newPath)
  }

  getByIdBookingStatus(id:number){
    this.newPath = this.apiUrl + "/getByIdBookingStatus?id=" + id
    return this.httpClient.get<BookingStatus>(this.newPath)
  }

  addBookingStatus(bookingStatus:BookingStatus){
    this.newPath = this.apiUrl+"/addBookingStatus"
    return this.httpClient.post(this.newPath,bookingStatus)
  }

  updateBookingStatus(bookingStatus:BookingStatus){
    this.newPath = this.apiUrl+"/updateBookingStatus"
    return this.httpClient.put(this.newPath,bookingStatus)
  }

  makeBookingStatusActive(bookingStatusId:number){
    this.newPath = this.apiUrl + "/makeActiveBookingStatus?id=" + bookingStatusId
    return this.httpClient.put(this.newPath,bookingStatusId)
  }

  makeBookingStatusPassive(bookingStatusId:number){
    this.newPath = this.apiUrl + "/makePassiveBookingStatus?id=" + bookingStatusId
    return this.httpClient.put(this.newPath,bookingStatusId)
  }
}