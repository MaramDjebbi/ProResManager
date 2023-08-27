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


  activeSession : session

  constructor(private router: Router, private httpClient: HttpClient, private sessionService : sessionService ) { }

  ngOnInit() {
    this.fetchActiveSession
  }

  fetchActiveSession(): void {
    this.sessionService.getActiveSession().subscribe(
      (activeSession: session) => {
        this.activeSession = activeSession; 
      },
      (error) => {
        console.error('Error fetching projects:', error);
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
