import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../models/room';

@Pipe({
  name: 'roomStatusFilter'
})
export class RoomStatusFilterPipe implements PipeTransform {

  transform(value: Room[], roomStatusFilter: string): Room[] {
    if (roomStatusFilter=="true"){
    return value.filter((r:Room)=>r.active);
    } 
    else if (roomStatusFilter=="false"){
    return value.filter((r:Room)=>!r.active);
    }
    else{
    return value;
    }
  }
}