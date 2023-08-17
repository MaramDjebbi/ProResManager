import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor( private router: Router) {}

  ngOnInit() {
  }


  ngOnDestroy() {
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }

}
