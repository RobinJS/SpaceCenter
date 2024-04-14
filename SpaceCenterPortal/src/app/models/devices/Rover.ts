import { IDevice } from "../../interfaces/IDevice";
import { Battery } from "../instruments/Battery";
import { EnvironmentSensors } from "../instruments/EnvironmentSensors";
import { SolarPanel } from "../instruments/SolarPanel";
import { Device, DeviceType } from "./Device";

export class Rover extends Device implements IDevice {
    solarPanel: SolarPanel;
    private environmentSensors: EnvironmentSensors;

    constructor(id: number, name: string, type: DeviceType) {
        super(id, name, type);
        
        this._battery = new Battery();
        this.environmentSensors = new EnvironmentSensors(this._battery);
        this.solarPanel = new SolarPanel(this._battery, this.environmentSensors);
        this._battery.source = this.solarPanel;

        this.solarPanel.open(); // temp

        this.battery.source = this.solarPanel;
    }
}