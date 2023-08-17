import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { affectation } from 'src/models/affectation';


@Injectable({
    providedIn: 'root'
  })

export class AffectationService{


    readonly API_URL = 'http://localhost:8082/affectation';
    constructor(private httpClient: HttpClient) { }

    getAllAffectations(): Observable<affectation[]>{
        return this.httpClient.get<affectation[]>(`${this.API_URL}/getallaffectations`);
    }

    getAffectationById(affectationId: any): Observable<any> {
        const url = `${this.API_URL}/GetAffectation/${affectationId}`; 
        return this.httpClient.get(url);
      }


      updateAffectation(projet: affectation, affectationId: number) {
        const url = `${this.API_URL}/update/${affectationId}`;
        return this.httpClient.put(url, projet);
      }


      deleteAffectation(affectationId: Number) {
        const url = `${this.API_URL}/deleteaffectation/${affectationId}`;
        return this.httpClient.delete(url)
      }



}