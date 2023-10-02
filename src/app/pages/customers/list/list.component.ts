import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customers: Customer[] = []
  filterText:string= ""
  statusFilterText:string=""

  constructor(private customerService:CustomerService){}

  ngOnInit(): void {
    this.getAllCustomers()
  }

  getAllCustomers(){
    this.customerService.getAllCustomers().subscribe(response=>{
      this.customers = response
    })
  }

}
