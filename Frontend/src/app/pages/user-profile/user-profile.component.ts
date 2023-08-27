import { Component, OnInit } from '@angular/core';
import { userAuthService } from 'src/app/service/user-auth';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userFirstName: String;
  userLastName: String;
  userEmail: String;
  userName: String;

  constructor(private userAuthService: userAuthService) { }

  ngOnInit() {
    this.userFirstName=this.userAuthService.getFirstName();
    this.userLastName=this.userAuthService.getLastName();
    this.userEmail=this.userAuthService.getEmail();
      //this.userName=this.userAuthService.getEmail();
    console.log(this.userFirstName , this.userLastName , this.userEmail ,  this.userName);

  }

}
