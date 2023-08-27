import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { sessionService } from 'src/app/service/sessionService';
@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.scss']
})
export class EditSessionComponent {

  sessionToEdit: any = {};

  constructor(private route: ActivatedRoute, private sessionService: sessionService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const sessionId = +params['idsession'];
      this.sessionService.getSessionById(sessionId).subscribe(sessionData => {
        this.sessionService = sessionData;
      });
    });
  }


  onSubmit() {
    this.sessionService.updateSession(this.sessionToEdit, this.sessionToEdit.idsession).subscribe(
      updatedSession => {
        console.log('session updated:', updatedSession);
        this.router.navigate(['session'])
      },
      error => {
        console.error('Error updating session:', error);
      }
    );
  }



}
