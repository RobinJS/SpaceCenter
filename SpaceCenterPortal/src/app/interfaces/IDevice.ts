import { Instrument } from "../models/instruments/Instrument";

export interface IDevice {
    readonly name: string;
    readonly type: string;
    readonly instruments: Instrument[];
    connect(): void;
    diconnect(): void;
}