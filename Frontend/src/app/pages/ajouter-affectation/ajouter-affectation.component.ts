import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { natureAffectationService } from '../../service/natureAffectationService';
import { statutAffectationService } from '../../service/statutAffectationService';
import { ToastrService } from 'ngx-toastr';
import { AffectationService } from 'src/app/service/affectationService';

@Component({
  selector: 'app-ajouter-affectation',
  templateUrl: './ajouter-affectation.component.html',
  styleUrls: ['./ajouter-affectation.component.scss']
})



export class AjouterAffectationComponent  implements OnInit {

  newAffectation: any = {};
  statutAffectations: any[] = []; 
  natureAffectations: any[] = []; 


  constructor(private router: Router, private natureAffectationService: natureAffectationService, private statutAffectationService: statutAffectationService,  private toastr: ToastrService, private affectationService : AffectationService) { }

  

  ngOnInit() {
    this.fetchNatureAffectations();
    this.fetchStatutAffectations();
  }

  onSubmit() {
    this.affectationService.addAffectationWithIdUser(this.newAffectation)
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
