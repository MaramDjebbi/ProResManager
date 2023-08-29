import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/service/userService';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})


export class EditUserComponent implements OnInit{

  userToEdit: any = {};

  constructor(private route: ActivatedRoute,private userService: userService, private toastr: ToastrService,private router: Router){}

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      console.log("hh",params['iduser']);
      const userId = params['iduser'];
      this.userService.getUserById(userId).subscribe(userData => {
        this.userToEdit = userData;
      });
    });
  }

  onSubmit() {
    this.userService.updateUser(this.userToEdit, this.userToEdit.iduser).subscribe(
      updatedUser => {
        console.log('user updated:', updatedUser);
        this.router.navigate(['user-profile'])
        const messageFromApi = "Profile updated successfully ";
        this.toastr.success(messageFromApi);
      },
      (error: any) => {
        console.error('Error updating user:', error);
        const messageFromApi = error.error.message;
        this.toastr.error(messageFromApi);
      }
    );
  }

  

}
