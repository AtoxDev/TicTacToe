import { Injectable } from '@angular/core';
import {WebsocketService} from "./websocket.service";

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(
    public wsService: WebsocketService
  ) { }

  public sendMessage(message: String) {
    const payload = {
      'de': 'Aitor',
      'sms': message
    }

    this.wsService.emit('message', payload);
  }

  public getMessage() {
    return this.wsService.listen('mensaje-nuevo');
  }
}
