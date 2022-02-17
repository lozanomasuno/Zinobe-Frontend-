import { Component, OnInit } from '@angular/core';
import { UserWithApprovedLoanService } from 'src/app/services/user-with-approved-loan.service';
import { UserListLoad } from 'src/app/models/reqres-reponse';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private usersApprovedService: UserWithApprovedLoanService) {}
  public users: UserListLoad[] = [];

  priceListFormat(formatedNumber: number) {
    return new Intl.NumberFormat().format(formatedNumber);
  }

  ngOnInit(): void {
    this.usersApprovedService.loadUsersData().subscribe((resp: any) => {
      this.users = resp;
      console.log(resp)
    });
  }
}
