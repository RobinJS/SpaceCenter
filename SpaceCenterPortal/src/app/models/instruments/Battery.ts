import { IEnergySource } from "../../interfaces/IEnergySource";

export class Battery {
    private _value: number = 100;
    private _source: IEnergySource;
    private timer;
    
    public set source(value: IEnergySource) {
        this._source = value;
    }
    
    public get value(): number {
        return this._value;
    }

    private set value(v:number) {
        this._value = v;
    }
    
    constructor() {
        this.startDischarging();
    }
    
    startDischarging() {
        this.timer = setInterval(() => this.discharge(), 1000);
    }

    charge() {

    }

    discharge() {
        if (this.value > 0 &&
            (this._source == null || (this._source != null && !this._source.isOperational)))
             this.value--;
    }
}

