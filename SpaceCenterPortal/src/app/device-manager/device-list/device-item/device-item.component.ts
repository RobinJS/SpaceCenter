import { Component, Input } from '@angular/core';
import { Device } from '../../../models/devices/Device';
import { DeviceListService } from '../device-list.service';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrl: './device-item.component.css'
})
export class DeviceItemComponent {
    @Input() device: Device;

    constructor(private deviceListService: DeviceListService) {}

    onDelete() {
        this.deviceListService.delete(this.device);
    }
}
