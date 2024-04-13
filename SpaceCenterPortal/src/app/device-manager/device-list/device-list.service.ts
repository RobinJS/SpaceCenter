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
    onDeviceChosen = new EventEmitter<Device>();

    private selectedDevice: Device;
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

        switch(deviceType) {
            case DeviceType.Rover: device = new Rover(1, deviceName, deviceType); break;
            case DeviceType.Satellite: device = new Satellite(2, deviceName, deviceType); break;
        }

        return device;
    }

    deviceSelected(device: Device) {
        this.onDeviceChosen.emit(device);
    }

    setSelectedDevice(device: Device) {
        this.selectedDevice = device;
    }

    getSelectedDevice(): Device {
        return this.selectedDevice;
    }
}
