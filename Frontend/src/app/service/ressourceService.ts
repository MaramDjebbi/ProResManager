 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ressource } from 'src/models/ressource';


@Injectable({

  providedIn: 'root'

})

export class RessourceService {


  readonly API_URL = 'http://localhost:8082/Ressource';
  constructor(private httpClient: HttpClient) { }

  getAllRessources(): Observable<Ressource[]> {
    return this.httpClient.get<Ressource[]>(`${this.API_URL}/getallRessources`);
  }

  /*removeRessouce(Ressource : any) {
    return this.httpClient.delete(`${this.API_URL}/removeRessource/{{iduser}}/{{idressource}}`, Ressource)
  }*/

  /*updateRessource(Ressource : any) {
    return this.httpClient.put(`${this.API_URL}/update/{{idRessource}}`, Ressource)
  }*/

  updateRessource(ressource: Ressource, ressourceId: number) {
    const url = `${this.API_URL}/update/${ressourceId}`;
    return this.httpClient.put(url, ressource);
  }


  addRessourcewithIdUser(Ressource : any) {
    return this.httpClient.post(`${this.API_URL}/addressource/{idUser}`, Ressource)
  }

 
  getRessourceById(ressourcetId: any): Observable<any> {
    const url = `${this.API_URL}/GetRessource/${ressourcetId}`; 
    return this.httpClient.get(url);
  }

  

 

}

