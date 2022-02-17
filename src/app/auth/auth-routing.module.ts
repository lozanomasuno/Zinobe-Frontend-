import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { NoListComponent } from './pages/no-list/no-list.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    children:[
      { path: 'list', component: ListComponent},
      { path: 'nolist', component: NoListComponent},
      { path: 'home', component: MainComponent},      
      { path: '**', redirectTo: 'list'}
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class AuthRoutingModule { }
