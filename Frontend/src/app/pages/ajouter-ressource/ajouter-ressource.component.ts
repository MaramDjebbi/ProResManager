import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-ajouter-ressource',
  templateUrl: './ajouter-ressource.component.html',
  styleUrls: ['./ajouter-ressource.component.scss']
})



export class AjouteRessourceComponent  {

  newRessource: any = {};

  constructor(private httpClient: HttpClient,  private router: Router, private toastr: ToastrService) {}

  onSubmit() {
    this.httpClient.post('http://localhost:8082/Ressource/addressource/1', this.newRessource)
    .subscribe(
        (response: any) => {
          this.newRessource = {};
          this.router.navigate(['ressource']);
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
