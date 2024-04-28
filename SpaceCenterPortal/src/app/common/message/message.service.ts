import { EventEmitter, Injectable } from '@angular/core';
import { Message, MessageType } from '../../controls/instruments/log/log.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
    onLogMessage = new EventEmitter<Message>();

    constructor() { }

    alert(text:string) {
        this.onLogMessage.emit({text: text, type: MessageType.Warning});
    }
}
