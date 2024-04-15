import { Component, OnInit } from '@angular/core';
import { DeviceListService } from '../../../device-manager/device-list/device-list.service';
import { EnvironmentSensors } from '../../../models/instruments/EnvironmentSensors';
import { Rover } from '../../../models/devices/Rover';

@Component({
  selector: 'app-environment-sensors',
  templateUrl: './environment-sensors.component.html',
  styleUrl: './environment-sensors.component.css'
})
export class EnvironmentSensorsComponent implements OnInit {
    environmentSensors: EnvironmentSensors;
    
    constructor(private deviceListService: DeviceListService) {}

    ngOnInit(): void {
        this.environmentSensors = (this.deviceListService.getSelectedDevice() as Rover).environmentSensors;
        
    }
}
