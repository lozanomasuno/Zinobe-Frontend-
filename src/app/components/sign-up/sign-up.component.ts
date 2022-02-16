import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public userValueRangeLoan: number = 10000;

  constructor() { }

  ngOnInit(): void {
  }

  aproveLoanValueUser() {
    console.log(this.userValueRangeLoan);
  }

}
