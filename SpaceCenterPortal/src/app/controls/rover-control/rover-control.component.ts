import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../../models/devices/Device';
import { Rover } from '../../models/devices/Rover';
import { DeviceListService } from '../../device-manager/device-list/device-list.service';

@Component({
  selector: 'app-rover-control',
  templateUrl: './rover-control.component.html',
  styleUrl: './rover-control.component.css'
})
export class RoverControlComponent implements OnInit {
    device: Rover;

    constructor(private route: ActivatedRoute, private deviceListService: DeviceListService) {}

    ngOnInit() {
        this.device = this.deviceListService.getSelectedDevice() as Rover;
    }

    onDeviceChoose(device: Device) {
        
    }
}
