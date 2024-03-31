import { Component } from '@angular/core';
import { DeviceListService } from '../device-list.service';

@Component({
  selector: 'app-device-connecting',
  templateUrl: './device-connecting.component.html',
  styleUrl: './device-connecting.component.css'
})
export class DeviceConnectingComponent {

    constructor(private deviceListService: DeviceListService) {}

    getDeviceName(): string {
        return this.deviceListService.getSelectedDevice() != null ? this.deviceListService.getSelectedDevice().name : "";
    }
}
