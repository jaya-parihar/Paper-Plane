import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate(active: string): void{
    if(active == 'register')
    {
      this.router.navigateByUrl('/auth/vendors/register');
    }
    else{
      this.router.navigateByUrl('/auth/vendors/login');
    }
  }
}
