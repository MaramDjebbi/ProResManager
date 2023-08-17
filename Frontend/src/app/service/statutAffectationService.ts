import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { statutAffectation } from 'src/models/statutAffectation';

@Injectable({
    providedIn: 'root'
})

export class statutAffectationService {

    readonly API_URL = 'http://localhost:8082/StatuDaff';
  constructor(private httpClient: HttpClient) { }

    getAllStatutAffectation(): Observable<statutAffectation[]> {
        return this.httpClient.get<statutAffectation[]>(`${this.API_URL}/GetallStatudaffectation`);
    }

    addStatutAffectation(statutAffectation : any) {
        return this.httpClient.post(`${this.API_URL}/addStatuDaffectation`, statutAffectation)
      }

}