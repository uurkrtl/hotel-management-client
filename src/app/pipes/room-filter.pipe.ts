import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../models/room';

@Pipe({
  name: 'roomFilter'
})
export class RoomFilterPipe implements PipeTransform {

  transform(value: Room[], filterRoomText: string): Room[] {
    filterRoomText = filterRoomText?filterRoomText.toLocaleLowerCase():""
    return filterRoomText?value.filter((r:Room)=>r.name.toLocaleLowerCase().indexOf(filterRoomText)!==-1):value;
  }
}