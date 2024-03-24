import { Component } from '@angular/core';
import { DeviceListService } from '../device-list.service';

@Component({
  selector: 'app-remove-device-prompt',
  templateUrl: './remove-device-prompt.component.html',
  styleUrl: './remove-device-prompt.component.css'
})
export class RemoveDevicePromptComponent {

    constructor(private deviceListService: DeviceListService) {}

    onCancelDeviceRemoval() {
        this.deviceListService.clearDeviceRemoval();
    }

    onRemoveDevice() {
        this.deviceListService.removeSelectedDevice();
    }
}
