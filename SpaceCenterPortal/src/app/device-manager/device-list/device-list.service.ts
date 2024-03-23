import { EventEmitter, Injectable } from '@angular/core';
import { Device } from '../../models/devices/Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceListService {
    deviceAdded = new EventEmitter<Device>();
    deviceDeleted = new EventEmitter<Device>();

    addDevice(device: Device) {
        this.deviceAdded.emit(device);
    }

    delete(device: Device) {
        this.deviceDeleted.emit(device);
    }
}
