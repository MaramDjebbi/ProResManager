import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { sessionService } from 'src/app/service/sessionService';
import { userAuthService } from 'src/app/service/user-auth';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})


export class SessionComponent {


  activeSession : any ;

  constructor(private router: Router, private sessionService : sessionService, private userAuthService : userAuthService ) { }

  ngOnInit() {
    this.fetchActiveSession();
  }

  isAdmin():boolean{
    return this.userAuthService.isAdmin();
  }

  isManager():boolean{
    return this.userAuthService.isManager();
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
