import { Component, OnInit } from '@angular/core';
import { RessourceService } from 'src/app/service/ressourceService';
import { Ressource } from 'src/models/ressource';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resource',
  template: '<button (click)="navigateToTarget()">Ajouter</button>',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.scss']
})



export class RessourceComponent implements OnInit {

  ressources: Ressource[]= [];

  constructor(private RessourceService : RessourceService, private router: Router, private httpClient: HttpClient ){}

  ngOnInit(): void {
    this.fetchRessources();
  }


  
  fetchRessources(): void {
    this.RessourceService.getAllRessources().subscribe(
      (ressources: Ressource[]) => {
        this.ressources = ressources; 
      },
      (error) => {
        console.error('Error fetching resources:', error);
      }
    );
  }


  navigateToTarget() {
    console.log("test ajout ressoure");
    this.router.navigate(['/addresource']);
  }


  navigateToEdit(ressourceId: Number){
    this.router.navigate(['/editressource', ressourceId]);
  }


  
  deleteRessource(resourceId: Number): void {
    const url = `http://localhost:8082/Ressource/removeRessource/1/${resourceId}`;
    this.httpClient.delete(url)
      .subscribe(
        () => {
          console.log('Ressource deleted successfully');
          this.fetchRessources();
        },
        (error) => {
          console.error('Error deleting Ressource', error);
        }
      );
  }
}
