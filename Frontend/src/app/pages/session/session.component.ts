import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { sessionService } from 'src/app/service/sessionService';
import { HttpClient } from '@angular/common/http';
import { session } from 'src/models/session';


@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})


export class SessionComponent {


  activeSession : any ;

  constructor(private router: Router, private httpClient: HttpClient, private sessionService : sessionService ) { }

  ngOnInit() {
    this.fetchActiveSession();
    //console.log(this.activeSession);
  }

  fetchActiveSession(): void {
    this.sessionService.getActiveSession().subscribe(
      (activeSession: any) => {
        activeSession.dateDebutSession = new Date(activeSession.dateDebutSession).toISOString().split('T')[0];
        activeSession.dateFinSession = new Date(activeSession.dateFinSession).toISOString().split('T')[0];
        console.log(activeSession);
        this.activeSession = activeSession; 
      },
      (error) => {
        console.error('Error fetching active session:', error);
      }
    );
  }


  navigateToTarget() {
    console.log("test ajout session");
    this.router.navigate(['/addsession']);
  }

  navigateToEdit(sessionId: Number){
    this.router.navigate(['/editsession', sessionId]);
  }

  
}
