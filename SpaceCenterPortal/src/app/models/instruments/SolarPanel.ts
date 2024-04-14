import { IEnergySource } from "../../interfaces/IEnergySource";
import { Battery } from "./Battery";
import { Instrument } from "./Instrument";

export class SolarPanel extends Instrument implements IEnergySource {
    readonly minEnergyToDeliver:number = 0.0;
    readonly maxEnergyToDeliver:number = 2.0;

    constructor(battery:Battery) {
        super(battery);
        this.consumption = 3;
    }

    open() {
        this._isOperational = true;
    }

    close() {
        this._isOperational = false;
    }

    getEnergy():number {
        return +(Math.random() * (this.maxEnergyToDeliver - this.minEnergyToDeliver) + this.minEnergyToDeliver).toFixed(2);
    }

}