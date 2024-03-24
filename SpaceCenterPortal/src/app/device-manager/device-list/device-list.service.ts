import { EventEmitter, Injectable } from '@angular/core';
import { Device, DeviceType } from '../../models/devices/Device';
import { Rover } from '../../models/devices/Rover';
import { Satellite } from '../../models/devices/Satellite';

@Injectable({
  providedIn: 'root'
})
export class DeviceListService {
    deviceAdded = new EventEmitter<Device>();
    deviceRemoved = new EventEmitter<Device>();
    onDeletePrompt = new EventEmitter<Device>();

    private toBeRemoved: Device;

    addDevice(deviceName: string, deviceType: string) {
        const device = this.createDevice(deviceName, deviceType);
        if (device != null) this.deviceAdded.emit(device);
    }

    beforeRemove(device :Device) {
        this.toBeRemoved = device;
    }

    clearDeviceRemoval() {
        this.toBeRemoved = null;
    }

    removeSelectedDevice() {
        if (this.toBeRemoved != null) this.deviceRemoved.emit(this.toBeRemoved);
    }

    private createDevice(deviceName: string, deviceType: string): Device {
        let device: Device = null;

        // factory pattern

        switch(deviceType) {
            case DeviceType.Rover: device = new Rover(deviceName, deviceType, null); break;
            case DeviceType.Satellite: device = new Satellite(deviceName, deviceType, null); break;
        }

        return device;
    }
}
