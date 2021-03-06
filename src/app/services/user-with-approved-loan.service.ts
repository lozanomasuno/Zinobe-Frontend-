import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserListLoad } from '../models'; 

@Injectable({
  providedIn: 'root'
})
export class UserWithApprovedLoanService {
  private urlUsers = 'http://localhost:3000/posts/';
  constructor(private  http: HttpClient) {  }

  loadUsersData(){   
    return this.http.get<UserListLoad[]>(this.urlUsers) 
  }

  recordUserData(data: UserListLoad){
    return this.http.post<UserListLoad>(this.urlUsers, data)
  }

  setPayment(id:string){
    return this.http.delete<UserListLoad>(this.urlUsers + id)
  }
}
