import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public userValueRangeLoan: number = 10000;

  constructor() {}

  ngOnInit(): void {}

  aproveLoanValueUser(loanFinalValue: number) {
    console.log(loanFinalValue);
  }
}
