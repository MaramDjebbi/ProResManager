import { Component, OnInit } from '@angular/core';
import { affectation } from 'src/models/affectation';
import { AffectationService } from 'src/app/service/affectationService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})


export class TablesComponent implements OnInit {



  affectations: affectation[] = [];

  

  constructor(private affectationService : AffectationService  ,private router: Router){}

  
  ngOnInit() {
    this.fetchProjects();
  }

  



  fetchProjects(): void {
    this.affectationService.getAllAffectations().subscribe(
      (affectations: affectation[]) => {
        this.affectations = affectations; 

      },
      (error) => {
        console.error('Error fetching affectations:', error);
      }
    );
  }



  navigateToTarget() {
    console.log("test ajout affectation");
    this.router.navigate(['/addaffectation']);
  }

  navigateToEdit(affectationId: Number){
    this.router.navigate(['/editaffectation', affectationId]);
  }


  deleteAffectation(affectationId: Number) {
    this.affectationService.deleteAffectation(affectationId)
      .subscribe(
        () => {
          console.log('Affectation deleted successfully');
          this.fetchProjects();        
        },
        (error) => {
          console.error('Error deleting affectation', error);
        }
      );
  }  

}
