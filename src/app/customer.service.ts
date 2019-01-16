import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  formData  : Customer;
  list : Customer[];
  readonly rootURL ="https://localhost:44384/api"
  constructor(private http:HttpClient) { }
  refreshList(){
    this.http.get(this.rootURL+'/Customers')
    .toPromise().then(res => this.list = res as Customer[]);
  }
  
}
