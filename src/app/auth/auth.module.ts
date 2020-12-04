import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { VendorsComponent } from './vendors/vendors.component';
import { LoginComponent } from './vendors/login/login.component';
import { RegisterComponent } from './vendors/register/register.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AuthComponent,
    VendorsComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent, 
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FontAwesomeModule,
    
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
