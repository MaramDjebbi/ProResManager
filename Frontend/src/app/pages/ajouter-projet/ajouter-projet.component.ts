import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { userAuthService } from 'src/app/service/user-auth';



@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.scss']
})


export class AjouterProjetComponent  {

  newProject: any = {}; 

  constructor(private httpClient: HttpClient,  private router: Router, private toastr: ToastrService,private userAuthService: userAuthService) {}

  private createHeaders(): HttpHeaders {
    const jwtToken = this.userAuthService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`
    });
    return headers;
  }

  onSubmit() {
    const headers = this.createHeaders();
    this.httpClient.post('http://localhost:8082/projet/addprojet/admin123', this.newProject, { headers })
    .subscribe(
        (response: any) => {
          this.newProject = {}; 
          this.router.navigate(['projet']);
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
