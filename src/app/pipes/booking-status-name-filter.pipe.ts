import { Pipe, PipeTransform } from '@angular/core';
import { Booking } from '../models/booking';

@Pipe({
  name: 'bookingStatusNameFilter'
})
export class BookingStatusNameFilterPipe implements PipeTransform {

  transform(value: Booking[], filterBookingStatusNameText: string): Booking[] {
    //filterBookingStatusNameText = filterBookingStatusNameText?filterBookingStatusNameText.toLocaleLowerCase():""
    return filterBookingStatusNameText?value.filter((b:Booking)=>b.bookingStatusName.indexOf(filterBookingStatusNameText)!==-1):value;
  }

}
