import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserWithApprovedLoanService } from 'src/app/services/user-with-approved-loan.service';
import { UserListLoad } from 'src/app/models/reqres-reponse';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private usersApprovedService: UserWithApprovedLoanService) {}
  @Output() public addingTotal: any = new EventEmitter<number>();
  public users: UserListLoad[] = [];
  public idNumber: string = '';
  private loanTotalDeb: number[] = [];
  

  priceListFormat(formatedNumber: number) {
    return new Intl.NumberFormat().format(formatedNumber);
  }

  userPayLoan() {
    this.usersApprovedService
      .setPayment(this.idNumber)
      .subscribe((resp: any) => {
        this.users = resp;
      });
  }

  setAllTotals(alltotal: number[]) {     
    return this.addingTotal = alltotal.reduce((a, b) => a + b, 0);
  }

  getTotalLoan(allUserTotal: any[]) {
    for (let i = 0; i < allUserTotal.length; i++) {
      this.loanTotalDeb.push(allUserTotal[i].cantidad);
    }
    this.setAllTotals(this.loanTotalDeb);
  }

  ngOnInit(): void {
    this.usersApprovedService.loadUsersData().subscribe((resp: any) => {
      this.users = resp;
      this.getTotalLoan(this.users);
    });
  }
}
