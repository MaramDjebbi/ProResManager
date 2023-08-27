import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { userService } from 'src/app/service/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor( private router: Router, private userService: userService) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  login(loginForm: NgForm){
    this.userService.login(loginForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }



}
