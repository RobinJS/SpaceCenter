import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../common/message/message.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent implements OnInit {
    messageList: MessageItem[] = [];
    // private messageService;

    constructor(messageService: MessageService) {
        // this.messageService = messageService;
        messageService.onLogMessage.subscribe((message: Message)=>{
            this.logMessage(message);
        });
    }

    ngOnInit(): void {
        // this.messageService.onLogMessage.subscribe(this.logMessage);
        // this.messageService.onLogMessage.subscribe((message: Message)=>{
        //     this.logMessage(message);
        // });
    }

    private logMessage(message: Message) {
        let dateTime = new Date().toLocaleString();
        message.text += ` ${dateTime}`;
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