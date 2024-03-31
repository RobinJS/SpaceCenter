import { Component, Input, OnInit } from '@angular/core';
import { Device, DeviceType } from '../../../models/devices/Device';
import { DeviceListService } from '../device-list.service';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrl: './device-item.component.css'
})
export class DeviceItemComponent implements OnInit {
    @Input() device: Device;
    iconPath: string = "../assets/images/icons/";

    constructor(private deviceListService: DeviceListService) {}

    ngOnInit() {
        switch (this.device.type) {
            case DeviceType.Rover: this.iconPath += "icons8-space-rover-48.png"; break;
            case DeviceType.Satellite: this.iconPath += "icons8-satelite-99.png"; break;
        }
    }

    onRemoveDeviceBtn() {
        this.deviceListService.beforeRemove(this.device);
    }

    getPath(): string {
        // return "/" + this.device.type.toLowerCase() + "-controls/";
        return `/${this.device.type.toLowerCase()}-controls/${this.device.id}/${this.device.name}`;
    }

    onDeviceClick() {
        this.deviceListService.setSelectedDevice(this.device);
    }
}
