import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/customer';

@Pipe({
  name: 'customerStatusFilter'
})
export class CustomerStatusFilterPipe implements PipeTransform {

  transform(value: Customer[], statusFilterText: string): Customer[] {
    if (statusFilterText=="true"){
    return value.filter((c:Customer)=>c.active);
  } 
    else if (statusFilterText=="false"){
    return value.filter((c:Customer)=>!c.active);
  }
    else{
    return value;
  }

  }

}
