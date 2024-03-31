import { IDevice } from "../../interfaces/IDevice";
import { Instrument } from "../instruments/Instrument";

export class Device implements IDevice {
    id: number;
    name: string;
    type: DeviceType;
    _instruments: Instrument[];
    private connected: boolean = false;

    public get instruments() {
        return this.connected ? this._instruments : null;
    }

    constructor(id: number, name: string, type: DeviceType, instruments: Instrument[]) {
        this.id = id;
        this.name = name;
        this.type = type;
        this._instruments = instruments;
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