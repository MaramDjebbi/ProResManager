import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from 'src/models/projet';

 

@Injectable({
  providedIn: 'root'
})

export class ProjetService  {


  readonly API_URL = 'http://localhost:8082/projet';
  constructor(private httpClient: HttpClient) { }
  
  getAllProjet(): Observable<Projet[]> {
    return this.httpClient.get<Projet[]>(`${this.API_URL}/GetallProject`);
  }

  /*removeProjet(Projet : any) {
    return this.httpClient.delete(`${this.API_URL}/removeProjet/1/{idprojet}`, Projet)
  }*/

  /*updateProjet(Projet : any) {
    return this.httpClient.put(`${this.API_URL}/updates/{idprojet}`, Projet)
  }*/

  updateProjet(projet: Projet, projectId: number) {
    const url = `${this.API_URL}/updates/${projectId}`;
    return this.httpClient.put(url, projet);
  }

  addProjetwithIdUser(Projet : any) {
    return this.httpClient.post(`${this.API_URL}/addprojet/{idUser}`, Projet)
  }

  getProjectById(projectId: any): Observable<any> {
    const url = `${this.API_URL}/GetProjet/${projectId}`; 
    return this.httpClient.get(url);
  }

}

