import { Component, Input, OnInit } from '@angular/core';
import { Chat } from '../models/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() chat: Chat = new Chat();
  constructor() { }

  ngOnInit(): void {
  }

}
