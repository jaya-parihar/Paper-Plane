import { RegisterComponent } from './vendors/register/register.component';
import { LoginComponent } from './vendors/login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';



const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'vendors/login',
    component: LoginComponent,
  },
  {
    path: 'vendors/register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
