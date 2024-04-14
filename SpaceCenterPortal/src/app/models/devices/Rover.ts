import { IDevice } from "../../interfaces/IDevice";
import { Battery } from "../instruments/Battery";
import { SolarPanel } from "../instruments/SolarPanel";
import { Device, DeviceType } from "./Device";

export class Rover extends Device implements IDevice {
    solarPanel: SolarPanel;

    constructor(id: number, name: string, type: DeviceType) {
        super(id, name, type);
        
        this._battery = new Battery();
        this.solarPanel = new SolarPanel(this._battery);
        this._battery.source = this.solarPanel;

        this.solarPanel.open(); // temp

        this.battery.source = this.solarPanel;
    }
}