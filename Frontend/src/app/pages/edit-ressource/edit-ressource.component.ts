import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RessourceService } from 'src/app/service/ressourceService';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-edit-ressource',
  templateUrl: './edit-ressource.component.html',
  styleUrls: ['./edit-ressource.component.scss']
})



export class EditRessourceComponent implements OnInit {

  ressourceToEdit: any = {};

  constructor(private route: ActivatedRoute, private ressourceService: RessourceService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const ressourceId = +params['idRessource'];
      this.ressourceService.getRessourceById(ressourceId).subscribe(ressourceData => {
        this.ressourceToEdit = ressourceData;
      });
    });

  }

  onSubmit() {
    console.log(this.ressourceToEdit);
    this.ressourceService.updateRessource(this.ressourceToEdit, this.ressourceToEdit.idRessource).subscribe(
      updatedRessource => {
        console.log('Ressource updated:', updatedRessource);
        this.router.navigate(['ressource'])
      },
      error => {
        console.error('Error updating ressource:', error);
      }
    );
  }

}
