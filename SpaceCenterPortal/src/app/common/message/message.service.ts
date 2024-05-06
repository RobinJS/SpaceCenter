import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Message, MessageType } from '../../controls/instruments/log/log.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
    onLogMessage = new EventEmitter<Message>();

    newMessage(message: Message) {
        this.onLogMessage.emit(message);
    }
}
