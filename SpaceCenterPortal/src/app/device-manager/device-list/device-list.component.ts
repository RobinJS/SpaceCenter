import { Component, OnInit } from '@angular/core';
import { Device, DeviceType } from '../../models/devices/Device';
import { Rover } from '../../models/devices/Rover';
import { DeviceListService } from './device-list.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css'
})
export class DeviceListComponent implements OnInit {
    devices: Device[] = [
        new Rover(1, "Curiosity", DeviceType.Rover, []),
        new Rover(2, "Sat TV", DeviceType.Satellite, []),
        // new Rover("Curiosity", DeviceType.Rover, []),
        // new Rover("Curiosity", DeviceType.Rover, []),
        // new Rover("Curiosity", DeviceType.Rover, [])
    ];

    constructor(private deviceListService: DeviceListService) {}

    ngOnInit() {
        this.deviceListService.deviceAdded.subscribe((device: Device) => {
            this.devices.push(device);
        });

        this.deviceListService.deviceRemoved.subscribe((device: Device) => {
            const index = this.devices.indexOf(device);
            if (index != -1) this.devices.splice(index, 1);
        });

        this.deviceListService.onDeletePrompt.subscribe(() => {
            
        });
    }
}
