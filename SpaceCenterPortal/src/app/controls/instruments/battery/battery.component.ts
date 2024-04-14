import { Component, OnInit } from '@angular/core';
import { DeviceListService } from '../../../device-manager/device-list/device-list.service';
import { Battery } from '../../../models/instruments/Battery';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrl: './battery.component.css'
})
export class BatteryComponent implements OnInit {
    battery:Battery;

    // show charging/discharging

    constructor(private deviceListService: DeviceListService) {}

    ngOnInit(): void {
        this.battery = this.deviceListService.getSelectedDevice().battery;
        
    }
}
