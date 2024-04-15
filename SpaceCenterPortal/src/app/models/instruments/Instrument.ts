import { IInstrument } from "../../interfaces/IInstrument";
import { Battery } from "./Battery";

export class Instrument implements IInstrument {
    protected _isOperational: boolean = true;
    protected consumption: number;
    protected battery: Battery;

    get isOperational(): boolean {
        return this._isOperational;
    }

    constructor(battery: Battery) {
        this.battery = battery;
    }

    update(): void {
        
    }
}