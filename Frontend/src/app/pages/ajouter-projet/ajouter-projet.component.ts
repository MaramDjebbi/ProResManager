import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.scss']
})


export class AjouterProjetComponent  {

  newProject: any = {}; 

  constructor(private httpClient: HttpClient,  private router: Router, private toastr: ToastrService) {}

  onSubmit() {
    this.httpClient.post('http://localhost:8082/projet/addprojet/1', this.newProject)
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
