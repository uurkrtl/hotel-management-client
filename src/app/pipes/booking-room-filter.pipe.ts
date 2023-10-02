import { Pipe, PipeTransform } from '@angular/core';
import { Booking } from '../models/booking';

@Pipe({
  name: 'bookingRoomFilter'
})
export class BookingRoomFilterPipe implements PipeTransform {

  transform(value: Booking[], filterBookingRoomNameText: string): Booking[] {
    // filterBookingRoomNameText = filterBookingRoomNameText?filterBookingRoomNameText.toLocaleLowerCase():""
    return filterBookingRoomNameText?value.filter((b:Booking)=>b.roomName.indexOf(filterBookingRoomNameText)!==-1):value;
  }

}
