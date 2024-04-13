import { DeviceType } from "../models/devices/Device";
import { Battery } from "../models/instruments/Battery";
import { Instrument } from "../models/instruments/Instrument";

export interface IDevice {
    readonly name: string;
    readonly type: DeviceType;
    readonly instruments: Instrument[];
    readonly battery:Battery;

    connect(): void;
    diconnect(): void;
}