import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/messageService';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})


export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
