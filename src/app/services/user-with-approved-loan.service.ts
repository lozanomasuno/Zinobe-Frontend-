import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserWithApprovedLoanService {

  constructor(private  http: HttpClient) {  }

  loadUsersData(){
    const url = '';
    return this.http.get(url); 
  }
}
