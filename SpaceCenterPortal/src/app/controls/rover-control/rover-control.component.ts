import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device, DeviceType } from '../../models/devices/Device';
import { Rover } from '../../models/devices/Rover';
import { DeviceListService } from '../../device-manager/device-list/device-list.service';

@Component({
  selector: 'app-rover-control',
  templateUrl: './rover-control.component.html',
  styleUrl: './rover-control.component.css'
})
export class RoverControlComponent implements OnInit {
    device: Rover;
    iconPath: string = "../assets/images/icons/";

    constructor(private route: ActivatedRoute, private deviceListService: DeviceListService) {}

    ngOnInit() {
        this.device = this.deviceListService.getSelectedDevice() as Rover;
        this.setTitleIcon();
    }

    onDeviceChoose(device: Device) {
        
    }

    onOpenSolarPanel(event: Event) {
        const isChecked: boolean = event.target['checked'];
        isChecked ? this.device.solarPanel.open() : this.device.solarPanel.close();
    }

    private setTitleIcon() {
        switch (this.device.type) {
            case DeviceType.Rover: this.iconPath += "icons8-space-rover-48.png"; break;
            case DeviceType.Satellite: this.iconPath += "icons8-satelite-99.png"; break;
        }
    }
}
