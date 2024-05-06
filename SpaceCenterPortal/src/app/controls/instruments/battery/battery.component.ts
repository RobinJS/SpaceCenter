import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DeviceListService } from '../../../device-manager/device-list/device-list.service';
import { Battery } from '../../../models/instruments/Battery';
import { MessageService } from '../../../common/message/message.service';
import { Message } from '../log/log.component';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrl: './battery.component.css'
})
export class BatteryComponent implements OnInit {
    battery:Battery;

    constructor(private deviceListService: DeviceListService, private messageService: MessageService) {
        this.battery = this.deviceListService.getSelectedDevice().battery;
        this.battery.onLogMessage.subscribe((message: Message)=>{
            messageService.newMessage(message);
        });

    }

    ngOnInit(): void {
    }
}
