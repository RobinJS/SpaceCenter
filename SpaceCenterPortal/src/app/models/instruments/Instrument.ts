import { IInstrument } from "../../interfaces/IInstrument";
import { Battery } from "./Battery";

export class Instrument {
    protected _isOperational:boolean = true;
    protected consumption:number;
    private battery:Battery;

    get isOperational(): boolean {
        return this._isOperational;
    }

    constructor(battery: Battery) {
        this.battery = battery;
    }
}