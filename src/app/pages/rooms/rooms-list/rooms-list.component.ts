import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {
  rooms:Room[] = []
  filterRoomText:string=""
  roomStatusFilterText:string=""

  constructor(private roomService:RoomService){}

  ngOnInit(): void {
    this.getAllRooms()
  }

  getAllRooms(){
    this.roomService.getAllRooms().subscribe(response=>{
      this.rooms = response
    })
  }

}
