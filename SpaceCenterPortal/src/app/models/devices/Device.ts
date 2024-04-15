import { IDevice } from "../../interfaces/IDevice";
import { Battery } from "../instruments/Battery";
import { Instrument } from "../instruments/Instrument";

export class Device implements IDevice {
    id: number;
    name: string;
    type: DeviceType;
    _battery: Battery;
    _instruments: Instrument[];
    private connected: boolean = false;

    public get instruments() {
        return this.connected ? this._instruments : null;
    }

    public get battery(): Battery {
        return this._battery;
    }

    constructor(id: number, name: string, type: DeviceType) {
        this.id = id;
        this.name = name;
        this.type = type;

        // this._battery = Battery.Instance;
    }

    connect(): void {
        throw new Error("Method not implemented.");
    }
    diconnect(): void {
        throw new Error("Method not implemented.");
    }
    
}

export enum DeviceType {
    Rover = "Rover",
    Satellite = "Satellite"
}