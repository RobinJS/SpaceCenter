import { IDevice } from "../../interfaces/IDevice";
import { Battery } from "../instruments/Battery";
import { CommunicationModule } from "../instruments/CommunicationModule";
import { EnvironmentSensors } from "../instruments/EnvironmentSensors";
import { SolarPanel } from "../instruments/SolarPanel";
import { Device, DeviceType } from "./Device";

export class Rover extends Device implements IDevice {
    solarPanel: SolarPanel;
    readonly environmentSensors: EnvironmentSensors;
    readonly communicationsModule: CommunicationModule;

    private updateTimer;

    constructor(id: number, name: string, type: DeviceType) {
        super(id, name, type);
        
        this.environmentSensors = new EnvironmentSensors(this._battery);
        this.solarPanel = new SolarPanel(this._battery, this.environmentSensors);
        this._battery = Battery.Instance;
        this._battery.source = this.solarPanel;
        this.communicationsModule = new CommunicationModule(this._battery);

        this.solarPanel.open(); // temp

        this.startUpdateSequence();
    }
    
    private startUpdateSequence() {
        this.updateTimer = setInterval(() => this.updateInstruments(), 1000);
    }

    updateInstruments() {
        this._battery.update();
        this.environmentSensors.update();
        this.solarPanel.update();
    }
}