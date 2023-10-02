import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-create-update',
  templateUrl: './customer-create-update.component.html',
  styleUrls: ['./customer-create-update.component.css']
})
export class CustomerCreateUpdateComponent implements OnInit {
  customerAddUpdateForm:FormGroup
  errorMessage:string = ""
  successMessage:string = ""
  customerId:number = 0
  selectedCustomer:Customer
  id:number=0

  firstName:string
  lastName:string
  address:string
  postCode:string
  city:string
  phone:string

  constructor(private customerService:CustomerService, private route:ActivatedRoute, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.customerId= this.route.snapshot.queryParamMap.get('customerId') as unknown as number
    if(this.customerId>0) this.getByIdCustomer(this.customerId)
    this.createCustomerAddUpdateForm()
  }

  createCustomerAddUpdateForm(){
    this.customerAddUpdateForm = this.formBuilder.group({
      id: this.customerId,
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
      address: ["",Validators.required],
      postCode: ["",Validators.required],
      city: ["",Validators.required],
      phone: ["",Validators.required]
    })
  }

  addCustomer(){
    if(this.customerAddUpdateForm.valid){
      let customerModel = Object.assign({},this.customerAddUpdateForm.value)
      this.customerService.addCustomer(customerModel).subscribe(response=>{
        this.errorMessage=""
        this.successMessage="Der Gast wurde erfolgreich hinzugefügt"
      },responseError=>{
        this.errorMessage=responseError.error.message
        this.successMessage=""
      })
    }else{
      this.errorMessage="Der Gast konnte nicht hinzugefügt werden"
      this.successMessage=""
    }
  }

  updateCustomer(){
    if(this.customerAddUpdateForm.valid){
      let customerModel = Object.assign({},this.customerAddUpdateForm.value)
      this.customerService.updateCustomer(customerModel).subscribe(response=>{
        this.errorMessage=""
        this.successMessage="Der Gast wurde erfolgreich aktuelisiert"
      },responseError=>{
        this.errorMessage=responseError.error.message
        this.successMessage=""
      })
    }else{
      this.errorMessage="Der Gast konnte nicht aktuelisiert werden"
      this.successMessage=""
    }
  }

  getByIdCustomer(customerId:number){
    this.customerService.getByIdCustomer(customerId).subscribe(response=>{
      this.selectedCustomer=response
      this.firstName=response.firstName
      this.lastName=response.lastName
      this.address=response.address
      this.postCode=response.postCode
      this.city=response.city
      this.phone=response.phone
    })
  }

}