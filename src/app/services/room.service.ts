import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  apiUrl = "http://eagle-hotel-management.eu-central-1.elasticbeanstalk.com/api"
  newPath:string = ""

  constructor(private httpClient:HttpClient) { }

  getAllRooms():Observable<Room[]>{
    this.newPath = this.apiUrl + "/getAllRooms"
    return this.httpClient.get<Room[]>(this.newPath)
  }

  getByActiveRooms():Observable<Room[]>{
    this.newPath = this.apiUrl + "/getByActiveRooms?active=true"
    return this.httpClient.get<Room[]>(this.newPath)
  }

  getByIdRoom(id:number){
    this.newPath = this.apiUrl + "/getByIdRoom?id="+id
    return this.httpClient.get<Room>(this.newPath)
  }

  addRoom(room:Room){
    this.newPath = this.apiUrl + "/addRoom"
    return this.httpClient.post(this.newPath,room)
  }

  updateRoom(room:Room){
    this.newPath = this.apiUrl + "/updateRoom"
    return this.httpClient.put(this.newPath,room)
  }

  makeRoomActive(roomId:number){
    this.newPath = this.apiUrl + "/makeActiveRoom?id=" + roomId
    return this.httpClient.put(this.newPath,roomId)
  }

  makeRoomPassive(roomId:number){
    this.newPath = this.apiUrl + "/makePassiveRoom?id=" + roomId
    return this.httpClient.put(this.newPath,roomId)
  }
}
