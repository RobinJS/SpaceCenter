import { IEnergySource } from "../../interfaces/IEnergySource";
import { Battery } from "./Battery";
import { Instrument } from "./Instrument";

export class SolarPanel implements IEnergySource {
    isOperational: boolean;

    open() {
        this.isOperational = true;
    }

    close() {
        this.isOperational = false;
    }

}