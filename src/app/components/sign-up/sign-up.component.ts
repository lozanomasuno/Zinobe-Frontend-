import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
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
  submmitToUserLoan(){
    
    console.log('Succesfully');
  }
  ngOnInit(): void {}

  aproveLoanValueUser(loanFinalValue: number) {
    console.log(this.formLoadRequest);
  }
}
