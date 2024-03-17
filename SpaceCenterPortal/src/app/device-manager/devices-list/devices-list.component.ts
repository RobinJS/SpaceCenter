import { Component } from '@angular/core';
import { Device, DeviceType } from '../../models/devices/Device';
import { Rover } from '../../models/devices/Rover';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrl: './devices-list.component.css'
})
export class DevicesListComponent {
    devices: Device[] = [
        // new Rover("Curiosity", DeviceType.Rover, []),
        // new Rover("Curiosity", DeviceType.Rover, []),
        // new Rover("Curiosity", DeviceType.Rover, []),
        // new Rover("Curiosity", DeviceType.Rover, []),
        // new Rover("Curiosity", DeviceType.Rover, [])
    ];
    
    onAddDevice() {
        throw new Error('Method not implemented.');
    }
}
