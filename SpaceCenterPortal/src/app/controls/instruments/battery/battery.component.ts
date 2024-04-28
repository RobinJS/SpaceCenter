import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DeviceListService } from '../../../device-manager/device-list/device-list.service';
import { Battery } from '../../../models/instruments/Battery';
import { MessageService } from '../../../common/message/message.service';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrl: './battery.component.css'
})
export class BatteryComponent implements OnInit {
    battery:Battery;

    constructor(private deviceListService: DeviceListService, private messageService: MessageService) {}

    ngOnInit(): void {
        this.battery = this.deviceListService.getSelectedDevice().battery;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.battery.isCharging) this.messageService.alert("Warning! Battery not charging!");
    }
}
