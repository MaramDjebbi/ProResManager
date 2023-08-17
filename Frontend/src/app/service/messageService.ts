// message.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class MessageService {
  private messages: string[] = [];
  private messageSubject = new Subject<string[]>();

  constructor() {}

  get messageStream() {
    return this.messageSubject.asObservable();
  }

  addMessage(message: string) {
    this.messages.push(message);
    this.messageSubject.next(this.messages);
  }

  clearMessages() {
    this.messages = [];
    this.messageSubject.next(this.messages);
  }
}
