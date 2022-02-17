import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public userListApproved: [] = [];
  public userValueRangeLoan: number = 10000;
  public formLoadRequest: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formLoadRequest = this.fb.group({
      userName: ['', Validators.required],
      userSurename: ['', Validators.required],
      userIdNumber: ['', Validators.required],
      userEmail: ['', Validators.required],
    });
  }

  submmitToUserLoan() {
    console.log(this.randomAleatoryApprovement());
    if (this.randomAleatoryApprovement() === 1) {
      console.log('not aproved!');
    } else if (this.randomAleatoryApprovement() === 0) {
      console.log('is aproved!');
      location.reload();
    }
  }

  randomAleatoryApprovement() {
    return Math.floor(Math.random() * 2);
  }
  ngOnInit(): void {}
}
