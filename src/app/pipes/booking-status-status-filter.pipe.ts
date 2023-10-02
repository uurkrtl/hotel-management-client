import { Pipe, PipeTransform } from '@angular/core';
import { BookingStatus } from '../models/bookingStatus';

@Pipe({
  name: 'bookingStatusStatusFilter'
})
export class BookingStatusStatusFilterPipe implements PipeTransform {

  transform(value: BookingStatus[], bookingStatusStatusFilterText: string): BookingStatus[] {
    if (bookingStatusStatusFilterText=="true"){
    return value.filter((bs:BookingStatus)=>bs.active);
    } 
    else if (bookingStatusStatusFilterText=="false"){
    return value.filter((bs:BookingStatus)=>!bs.active);
    }
    else{
    return value;
    }
  }
}