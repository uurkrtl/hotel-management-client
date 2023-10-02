import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customers:Customer[]
  errorMessage:string
  successMessage:string

  customerId:number
	firstName:string
	lastName:string
	address:string
	postCode:string
	city:string
	phone:string
  isActive:boolean

  constructor(private customerService:CustomerService, private route:ActivatedRoute, private formBuilder:FormBuilder){}

  ngOnInit():void{
    this.customerId= this.route.snapshot.queryParamMap.get('customerId') as unknown as number
    this.getByIdCustomer(this.customerId)
  }

  getByIdCustomer(customerId:number){
    this.customerService.getByIdCustomer(customerId).subscribe(response=>{
      this.firstName=response.firstName
      this.lastName=response.lastName
      this.address=response.address
      this.postCode=response.postCode
      this.city=response.city
      this.phone=response.phone
      this.isActive=response.active
    })
  }

  makeCustomerActive(customerId:number){
    this.customerService.makeCustomerActive(customerId).subscribe(response=>{
      this.errorMessage=""
      this.successMessage="Der Status des Gastes wurde erfolgreich aktulisiert"
    },responseError=>{
      this.errorMessage=responseError.error.message
      this.successMessage=""
    })
  }

  makeCustomerPassive(customerId:number){
    this.customerService.makeCustomerPassive(customerId).subscribe(response=>{
      this.errorMessage=""
      this.successMessage="Der Status des Gastes wurde erfolgreich aktulisiert"
    },responseError=>{
      this.errorMessage=responseError.error.message
      this.successMessage=""
    })
  }

}
