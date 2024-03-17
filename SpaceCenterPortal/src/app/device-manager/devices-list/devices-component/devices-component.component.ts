import { Component, Input } from '@angular/core';
import { Device } from '../../../models/devices/Device';

@Component({
  selector: 'app-devices-component',
  templateUrl: './devices-component.component.html',
  styleUrl: './devices-component.component.css'
})
export class DevicesComponentComponent {
    @Input() device: Device;
}
