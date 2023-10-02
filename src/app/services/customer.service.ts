import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = "http://eagle-hotel-management.eu-central-1.elasticbeanstalk.com/api"
  newPath:string = ""

  constructor(private httpClient:HttpClient) { }

  getAllCustomers():Observable<Customer[]>{
    this.newPath = this.apiUrl + "/getAllCustomers"
    return this.httpClient.get<Customer[]>(this.newPath)
  }

  getByActiveCustomers():Observable<Customer[]>{
    this.newPath = this.apiUrl + "/getByActiveCustomers?active=true"
    return this.httpClient.get<Customer[]>(this.newPath)
  }

  addCustomer(customer:Customer){
    this.newPath = this.apiUrl + "/addCustomer"
    return this.httpClient.post(this.newPath,customer)
  }

  getByIdCustomer(id:number){
    this.newPath = this.apiUrl + "/getByIdCustomer?id=" + id
    return this.httpClient.get<Customer>(this.newPath)
  }

  updateCustomer(customer:Customer){
    this.newPath = this.apiUrl + "/updateCustomer"
    return this.httpClient.put(this.newPath,customer)
  }

  makeCustomerActive(customerId:number){
    this.newPath = this.apiUrl + "/makeActiveCustomer?id=" + customerId
    return this.httpClient.put(this.newPath,customerId)
  }

  makeCustomerPassive(customerId:number){
    this.newPath = this.apiUrl + "/makePassiveCustomer?id=" + customerId
    return this.httpClient.put(this.newPath,customerId)
  }
}