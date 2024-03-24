import { DeviceType } from "../models/devices/Device";
import { Instrument } from "../models/instruments/Instrument";

export interface IDevice {
    readonly name: string;
    readonly type: DeviceType;
    readonly instruments: Instrument[];
    connect(): void;
    diconnect(): void;
}