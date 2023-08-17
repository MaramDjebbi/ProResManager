import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { natureAffectation } from 'src/models/natureAffectation';

@Injectable({
    providedIn: 'root'
})

export class natureAffectationService {

    readonly API_URL = 'http://localhost:8082/NatureDaffectation';
  constructor(private httpClient: HttpClient) { }

    getAllNatureAffectation(): Observable<natureAffectation[]> {
        return this.httpClient.get<natureAffectation[]>(`${this.API_URL}/GetallNatureDaffectation`);
    }

    addNatureAffectation(natureAffectation : any) {
        return this.httpClient.post(`${this.API_URL}/addNatureDaffectation`, natureAffectation)
      }

}