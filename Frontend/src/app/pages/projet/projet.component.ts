import { Component, OnInit } from '@angular/core';
import { ProjetService  } from 'src/app/service/projetService'; 
import { Projet } from 'src/models/projet';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-projet',
  template: '<button (click)="navigateToTarget()">Ajouter</button>',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})

export class ProjetComponent implements OnInit {


  projects: Projet[]= [];

  constructor(private projetService : ProjetService  ,private router: Router, private httpClient: HttpClient, ){}



  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.projetService.getAllProjet().subscribe(
      (projects: Projet[]) => {
        this.projects = projects; 
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }




  navigateToTarget() {
    console.log("test ajout projet");
    this.router.navigate(['/addproject']);
  }


  
  navigateToEdit(projectId: Number){
    this.router.navigate(['/editprojet', projectId]);
  }


  




  deleteProject(projectId: Number): void {
    const url = `http://localhost:8082/projet/removeProjet/admin123/${projectId}`;
    this.httpClient.delete(url)
      .subscribe(
        () => {
          console.log('Project deleted successfully');
          this.fetchProjects();
        },
        (error) => {
          console.error('Error deleting project', error);
        }
      );
  }




}