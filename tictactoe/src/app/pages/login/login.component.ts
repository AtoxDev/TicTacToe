import { Component, OnInit } from '@angular/core';
import {WebsocketService} from "../../services/websocket.service";
import {ChatServiceService} from "../../services/chat-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public chatService: ChatServiceService) { }

  ngOnInit(): void {
    this.chatService.sendMessage("Hola desde Angular");
  }

}
