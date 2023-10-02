import { Pipe, PipeTransform } from '@angular/core';
import { BookingStatus } from '../models/bookingStatus';

@Pipe({
  name: 'bookingStatusFilter'
})
export class BookingStatusFilterPipe implements PipeTransform {

  transform(value: BookingStatus[], filterBookingStatusNameText: string): BookingStatus[] {
    filterBookingStatusNameText = filterBookingStatusNameText?filterBookingStatusNameText.toLocaleLowerCase():""
    return filterBookingStatusNameText?value.filter((bs:BookingStatus)=>bs.name.toLocaleLowerCase().indexOf(filterBookingStatusNameText)!==-1):value;
  }

}
