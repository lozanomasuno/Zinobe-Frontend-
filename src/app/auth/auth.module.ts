import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
//componentes
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { PrestamosValorComponent } from '../components/prestamos-valor/prestamos-valor.component';
import { AuthRoutingModule } from './auth-routing.module';

//routes
import { ListComponent } from './pages/list/list.component';
import { NoListComponent } from './pages/no-list/no-list.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    ListComponent,
    PrestamosValorComponent,
    NoListComponent,
    SignUpComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
