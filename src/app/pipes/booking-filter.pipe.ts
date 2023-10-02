import { Pipe, PipeTransform } from '@angular/core';
import { Booking } from '../models/booking';

@Pipe({
  name: 'bookingFilter'
})
export class BookingFilterPipe implements PipeTransform {

  transform(value: Booking[], filterBookingCustomerNameText: string): Booking[] {
    filterBookingCustomerNameText = filterBookingCustomerNameText?filterBookingCustomerNameText.toLocaleLowerCase():""
    return filterBookingCustomerNameText?value.filter((b:Booking)=>b.customerLastName.toLocaleLowerCase().indexOf(filterBookingCustomerNameText)!==-1):value;
  }

}