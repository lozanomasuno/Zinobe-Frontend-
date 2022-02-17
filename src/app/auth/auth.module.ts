import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//componentes
//import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { AuthRoutingModule  } from './auth-routing.module';

//routes
import { ListComponent } from './pages/list/list.component';
import { NoListComponent } from './pages/no-list/no-list.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    ListComponent,
    NoListComponent,
    //SignUpComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
