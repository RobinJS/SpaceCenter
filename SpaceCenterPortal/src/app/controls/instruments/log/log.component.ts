import { Component } from '@angular/core';
import { MessageService } from '../../../common/message/message.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
    messageList: MessageItem[] = [];

    constructor(messageService: MessageService) {
        messageService.onLogMessage.subscribe(this.logMessage);
    }

    private logMessage(message: Message) {
        switch(message.type) {
            case MessageType.Warning: { this.logWarning(message); break; }
            case MessageType.Alert: { this.logAlert(message); break; }
            default: { this.logDefault(message); break; }
        }
    }

    logDefault(message: Message) {
        this.messageList.unshift({text: message.text, styleClasses: "list-group-item list-group-item-light"});
    }

    logWarning(message: Message) {
        this.messageList.unshift({text: message.text, styleClasses: "list-group-item list-group-item-warning"});
    }

    logAlert(message: Message) {
        this.messageList.unshift({text: message.text, styleClasses: "list-group-item list-group-item-danger"});
    }
}

type MessageItem = {
    text: string;
    styleClasses: string;
}

export type Message = {
    text: string;
    type: MessageType;
};

export enum MessageType {
    Default,
    Warning,
    Alert
}