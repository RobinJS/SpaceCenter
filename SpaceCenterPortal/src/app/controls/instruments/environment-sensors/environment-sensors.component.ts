import { Component, OnInit } from '@angular/core';
import { DeviceListService } from '../../../device-manager/device-list/device-list.service';
import { EnvironmentSensors } from '../../../models/instruments/EnvironmentSensors';
import { Rover } from '../../../models/devices/Rover';
import { Message } from '../log/log.component';
import { MessageService } from '../../../common/message/message.service';

@Component({
  selector: 'app-environment-sensors',
  templateUrl: './environment-sensors.component.html',
  styleUrl: './environment-sensors.component.css'
})
export class EnvironmentSensorsComponent implements OnInit {
    environmentSensors: EnvironmentSensors;
    
    constructor(private deviceListService: DeviceListService, private messageService: MessageService) {}

    ngOnInit(): void {
        this.environmentSensors = (this.deviceListService.getSelectedDevice() as Rover).environmentSensors;
        this.environmentSensors.onLogMessage.subscribe((message: Message)=>{
            this.messageService.newMessage(message);
        });
    }
}
