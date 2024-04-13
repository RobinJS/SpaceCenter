import { IDevice } from "../../interfaces/IDevice";
import { SolarPanel } from "../instruments/SolarPanel";
import { Device, DeviceType } from "./Device";

export class Rover extends Device implements IDevice {
    solarPanel: SolarPanel;

    constructor(id: number, name: string, type: DeviceType) {
        super(id, name, type);
        
        this.solarPanel = new SolarPanel();
        this.solarPanel.open(); // temp

        this.battery.source = this.solarPanel;
    }
}