import { Instrument } from "../models/instruments/Instrument";

export interface IDevice {
    name: string;
    readonly instruments: Instrument[];
    connect(): void;
    diconnect(): void;
}