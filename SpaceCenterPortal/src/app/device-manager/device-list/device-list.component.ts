import { Component } from '@angular/core';
import { Device, DeviceType } from '../../models/devices/Device';
import { Rover } from '../../models/devices/Rover';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css'
})
export class DeviceListComponent {
    devices: Device[] = [
        new Rover("Curiosity", DeviceType.Rover, []),
        new Rover("Curiosity", DeviceType.Rover, []),
        new Rover("Curiosity", DeviceType.Rover, []),
        new Rover("Curiosity", DeviceType.Rover, []),
        new Rover("Curiosity", DeviceType.Rover, [])
    ];
    
    onAddDevice() {
        throw new Error('Method not implemented.');
    }
}
