import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { session } from 'src/models/session';

 

@Injectable({
  providedIn: 'root'
})

export class sessionService {

    readonly API_URL = 'http://localhost:8082/Session';
    constructor(private httpClient: HttpClient) { }

    getAllSession(): Observable<session[]>{
        return this.httpClient.get<session[]>(`${this.API_URL}/GetallSession`);
    }

    getSessionById(sessionId: any): Observable<any> {
        const url = `${this.API_URL}/GetSession/${sessionId}`; 
        return this.httpClient.get(url);
    }

    getActiveSession() {
        return this.httpClient.get(`${this.API_URL}/getActiveSession`);
    }
    
    updateSession(session: session, sessionId: number) {
        const url = `${this.API_URL}/update/${sessionId}`;
        return this.httpClient.put(url, session);
    }



}
