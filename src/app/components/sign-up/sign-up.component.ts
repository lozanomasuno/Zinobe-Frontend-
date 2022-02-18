import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserWithApprovedLoanService } from 'src/app/services/user-with-approved-loan.service';
import { UserListLoad } from 'src/app/models/reqres-reponse';

//Angular Material
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public userValueRangeLoan: number = 10000;
  public formLoadRequest: FormGroup;
  public name: string = '';
  public surname: string = '';
  public userIdNumber: string = '';
  public email: string = '';

  public newUser: UserListLoad = {
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    cantidad: 0,
  };

  private horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private durationInSeconds = 0;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private usersApprovedService: UserWithApprovedLoanService
  ) {
    this.formLoadRequest = this.fb.group({
      userName: ['', Validators.required],
      userSurename: ['', Validators.required],
      userIdNumber: ['', Validators.required],
      userEmail: ['', Validators.required],
    });
  }

  saveNew() {
    const newUser = {
      nombre: this.formLoadRequest.value.userName,
      apellido: this.formLoadRequest.value.userSurename,
      cedula: this.formLoadRequest.value.userIdNumber,
      correo: this.formLoadRequest.value.userEmail,
      cantidad: this.userValueRangeLoan,
    };

    this.usersApprovedService
      .recordUserData(newUser)
      .subscribe((newUser: UserListLoad) => console.log(newUser));
  }

  notApprovedLoan() {
    this.durationInSeconds = 5;
    this._snackBar.open('No aprobado', 'Lo sentimos', {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  approvedLoanMessage() {
    this._snackBar.open('Aprobado', 'Felicidades', {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  submmitToUserLoan() {
    if (this.randomAleatoryApprovement() === 1) {
      this.notApprovedLoan();      
    } else if (this.randomAleatoryApprovement() === 0) {
      this.approvedLoanMessage();
      this.saveNew();      
    }
    location.reload();
  }

  randomAleatoryApprovement() {
    return Math.floor(Math.random() * 2);
  }
  ngOnInit(): void {}
}
