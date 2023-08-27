import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})


export class AddSessionComponent {

  newSession: any = {};

  constructor(private httpClient: HttpClient,  private router: Router, private toastr: ToastrService) {}

  onSubmit(){
    this.httpClient.post('http://localhost:8082/Session/addSession/1', this.newSession).subscribe(
      (response: any) => {
        this.newSession = {};
        this.router.navigate(['session']);
        const messageFromApi = response.message;
          this.toastr.success(messageFromApi);
        },
        (error: any) => {
          const messageFromApi = error.error.message;
          this.toastr.error(messageFromApi);
        }
    );
  }
  
}
