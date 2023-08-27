import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { role } from 'src/models/role';



@Injectable({
    providedIn: 'root'
  })

 
export class userAuthService {

    constructor(private httpClient: HttpClient){}

    public setUserInfo(firstName: string, lastName: string){
        localStorage.setItem('firstName',firstName);
        localStorage.setItem('lastName',lastName);
    }

    public setEmail(email: string){
        localStorage.setItem('email',email);
    }

    public getFirstName(){
        return localStorage.getItem('firstName');
    }

    public getLastName(){
        return localStorage.getItem('lastName');
    }

    public getEmail(){
        return localStorage.getItem('email');
    }

    public setRole(role: role){
        localStorage.setItem('role',JSON.stringify(role));
    }

    public  getRole(): any {
        return JSON.parse(localStorage.getItem('role'));
    }

    public setToken(jwtToken: string){
        localStorage.setItem("jwtToken",jwtToken);
    }

    public getToken(): string {
        return localStorage.getItem('jwtToken');
    }

    public clear(){
        localStorage.clear();
    }

    public isLoggedIn(){
        return this.getRole() && this.getToken();
    }
}