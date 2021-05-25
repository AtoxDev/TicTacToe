import { ChatServiceService } from './../../services/chat-service.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  public texto: string;
  public messageSubscriptions: Subscription;
  public message: any[];
  @ViewChild('chatBox') chatBox: ElementRef;

  constructor(public chat: ChatServiceService) {
    this.texto = '';
    this.messageSubscriptions = new Subscription;
    this.message = [];
    this.chatBox = ElementRef;
  }

  ngOnInit(): void {
    console.log('chatBox: ', this.chatBox);
    this.messageSubscriptions = this.chat.getMessage().subscribe( msg => {
      this.message.push( msg );
      console.log(this.message);
    });
  }

  ngOnDestroy(): void {
    this.messageSubscriptions.unsubscribe();
  }

  enviar() {
    console.log('emitiendo mensaje');
    this.chat.sendMessage(this.texto);
    this.texto = '';
  }
}
