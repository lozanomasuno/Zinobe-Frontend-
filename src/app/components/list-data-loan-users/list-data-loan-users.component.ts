import { Component, OnInit } from '@angular/core';
import { UserWithApprovedLoanService } from 'src/app/services/user-with-approved-loan.service';

@Component({
  selector: 'app-list-data-loan-users',
  templateUrl: './list-data-loan-users.component.html',
  styleUrls: ['./list-data-loan-users.component.css']
})
export class ListDataLoanUsersComponent implements OnInit {

  constructor(private usersLoanApproved : UserWithApprovedLoanService) { }

  ngOnInit(): void {

    this.usersLoanApproved.loadUsersData()
      .subscribe( answ =>{
        console.log(answ)
      })
  }

}
