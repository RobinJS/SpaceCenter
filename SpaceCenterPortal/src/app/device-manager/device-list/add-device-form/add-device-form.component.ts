import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeviceListService } from '../device-list.service';
import { Device } from '../../../models/devices/Device';

@Component({
  selector: 'add-device-form',
  templateUrl: './add-device-form.component.html',
  styleUrl: './add-device-form.component.css'
})
export class AddDeviceFormComponent {
    @ViewChild('f', { static: false }) addDeviceForm:NgForm;

    constructor(private deviceListService: DeviceListService) {}

    onAddDevice() {
        const device = new Device(
            this.addDeviceForm.value.formDeviceName, 
            this.addDeviceForm.value.formDeviceType, null
        );
        this.deviceListService.addDevice(device);
        this.addDeviceForm.reset();
    }
}
