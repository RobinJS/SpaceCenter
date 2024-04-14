import { IInstrument } from "./IInstrument";

export interface IEnergySource extends IInstrument {
    getEnergy():number;
}