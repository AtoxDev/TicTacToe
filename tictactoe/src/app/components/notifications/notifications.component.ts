import { Component, OnInit } from '@angular/core';
import { WebsocketService } from "../../services/websocket.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent{

  constructor(
    public wsService: WebsocketService
  ) {
  }


}
