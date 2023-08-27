import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
  })

 
export class userService {

    readonly API_URL = 'http://localhost:8082';
    requestHeader = new HttpHeaders(
        {"No-Auth": "True"}
    );
    constructor(private httpClient: HttpClient){}

    public login(loginData){
        return this.httpClient.post(`${this.API_URL}/authenticate`, loginData,{headers: this.requestHeader});
    }
}