import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  room:Room
  errorMessage:string
  successMessage:string

  roomId:number
  name:string
	floor:string
	price:number
  isActive:boolean

  constructor(private roomService:RoomService, private formBuilder:FormBuilder, private route:ActivatedRoute){}

  ngOnInit():void{
    this.roomId= this.route.snapshot.queryParamMap.get('roomId') as unknown as number
    this.getByIdRoom(this.roomId)
  }

  getByIdRoom(roomId:number){
    this.roomService.getByIdRoom(roomId).subscribe(response=>{
      this.name=response.name
      this.floor=response.floor
      this.price=response.price
      this.isActive=response.active
    })
  }

  makeCustomerActive(roomId:number){
    this.roomService.makeRoomActive(roomId).subscribe(response=>{
      this.errorMessage=""
      this.successMessage="Der Status des Zimmers wurde erfolgreich aktulisiert"
    },responseError=>{
      this.errorMessage=responseError.error.message
      this.successMessage=""
    })
  }

  makeCustomerPassive(roomId:number){
    this.roomService.makeRoomPassive(roomId).subscribe(response=>{
      this.errorMessage=""
      this.successMessage="Der Status des Zimmers wurde erfolgreich aktulisiert"
    },responseError=>{
      this.errorMessage=responseError.error.message
      this.successMessage=""
    })
  }

}