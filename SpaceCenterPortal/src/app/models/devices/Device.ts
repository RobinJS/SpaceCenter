import { IDevice } from "../../interfaces/IDevice";
import { Instrument } from "../instruments/Instrument";

export class Device implements IDevice {
    name: string;
    _instruments: Instrument[];
    private connected: boolean = false;

    public get instruments() {
        return this.connected ? this._instruments : null;
    }

    connect(): void {
        throw new Error("Method not implemented.");
    }
    diconnect(): void {
        throw new Error("Method not implemented.");
    }
    
}