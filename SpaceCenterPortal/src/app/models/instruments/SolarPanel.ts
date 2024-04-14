import { IEnergySource } from "../../interfaces/IEnergySource";
import { Battery } from "./Battery";
import { EnvironmentSensors } from "./EnvironmentSensors";
import { Instrument } from "./Instrument";

export class SolarPanel extends Instrument implements IEnergySource {
    private readonly panelEnergyCoeficient = 2;
    private environmentSensors: EnvironmentSensors;

    constructor(battery: Battery, sensors: EnvironmentSensors) {
        super(battery);
        this.consumption = 3;
        this.environmentSensors = sensors;
    }

    open() {
        this._isOperational = true;
    }

    close() {
        this._isOperational = false;
    }

    getEnergy(): number {
        let energyToDeliver = this.environmentSensors.getLightIntensity() * this.panelEnergyCoeficient;
        this._isOperational = energyToDeliver > 0 ? true : false;
        return energyToDeliver;
    }

}