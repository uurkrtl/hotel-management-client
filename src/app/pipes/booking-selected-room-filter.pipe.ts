import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../models/room';
import { RoomService } from '../services/room.service';

@Pipe({
  name: 'bookingSelectedRoomFilter'
})
export class BookingSelectedRoomFilterPipe implements PipeTransform {

  constructor(private roomService:RoomService){}

  roomSelect:Room

  getByIdRoom(id:number){
    this.roomService.getByIdRoom(id).subscribe(response=>{
      this.roomSelect=response
    })
  }

  transform(value: Room[], selectedRoom: number): Room[] {
    

    this.roomService.getByIdRoom(selectedRoom).subscribe((response:Room) => {
      this.roomSelect = response;
  });

  return selectedRoom?value.filter((r:Room)=>r.id):null;
    
  }

}
