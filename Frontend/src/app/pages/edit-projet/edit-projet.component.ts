import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from 'src/app/service/projetService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-projet',
  templateUrl: './edit-projet.component.html',
  styleUrls: ['./edit-projet.component.scss']
})



export class EditProjetComponent implements OnInit {

  projectToEdit: any = {};

  constructor(private route: ActivatedRoute, private projetService: ProjetService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectId = +params['idprojet'];
      this.projetService.getProjectById(projectId).subscribe(projectData => {
        this.projectToEdit = projectData;
      });
    });

  }

  onSubmit() {
    this.projetService.updateProjet(this.projectToEdit, this.projectToEdit.idprojet).subscribe(
      updatedProject => {
        console.log('Project updated:', updatedProject);
        this.router.navigate(['projet'])
      },
      error => {
        console.error('Error updating project:', error);
      }
    );
  }









}
