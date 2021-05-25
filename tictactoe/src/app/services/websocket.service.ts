import { Injectable } from '@angular/core';
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus: boolean = false;

  constructor(
    private socket: Socket
  ) {
    this.checkStatus();
  }

  public checkStatus() {
    this.socket.on('connect', () => {
      console.log('This App is connect with the server');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('This App is disconnect with the server');
      this.socketStatus = false;
    });
  }

  public emit ( event: string, payload?: any, callback?: Function) {
    // emit('Evento', payload, callback)
    this.socket.emit(event, payload, callback);
  }

  public listen ( event: string) {
    return this.socket.fromEvent( event );
  }
}
