import { Battery } from "./Battery";

export interface Instrument {
    isOperational:boolean;

    setBattery(battery: Battery): void;
}