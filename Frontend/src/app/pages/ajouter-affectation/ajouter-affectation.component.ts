import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { natureAffectationService } from '../../service/natureAffectationService';
import { statutAffectationService } from '../../service/statutAffectationService';
import { natureAffectation } from 'src/models/natureAffectation';
import { statutAffectation } from 'src/models/statutAffectation';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ajouter-affectation',
  templateUrl: './ajouter-affectation.component.html',
  styleUrls: ['./ajouter-affectation.component.scss']
})



export class AjouterAffectationComponent  implements OnInit {

  newAffectation: any = {};
  statutAffectations: any[] = []; 
  natureAffectations: any[] = []; 


  constructor(private httpClient: HttpClient, private router: Router, private natureAffectationService: natureAffectationService, private statutAffectationService: statutAffectationService,  private toastr: ToastrService) { }

  

  ngOnInit() {
    this.fetchNatureAffectations();
    this.fetchStatutAffectations();
  }

  onSubmit() {
    this.httpClient.post('http://localhost:8082/affectation/addaffectation/1', this.newAffectation)
    .subscribe(
        (response: any) => {
          this.newAffectation = {}; 
          this.router.navigate(['tables']);
          const messageFromApi = response.message;
          this.toastr.success(messageFromApi);
        },
        (error: any) => {
          const messageFromApi = error.error.message;
          this.toastr.error(messageFromApi);
        }
      );
  }


  fetchNatureAffectations() {
    this.natureAffectationService.getAllNatureAffectation().subscribe((data: any[]) => {
      this.natureAffectations = data;
    },
    error => {
      console.error('Error fetching nature affectations', error);
    }
    
    );
  }
  

  fetchStatutAffectations() {
    this.statutAffectationService.getAllStatutAffectation().subscribe((data: any[]) => {
      this.statutAffectations = data;
    },
    error => {
      console.error('Error fetching staut affectations', error);
    });
  }

}
