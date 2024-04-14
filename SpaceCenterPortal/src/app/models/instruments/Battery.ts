import { IEnergySource } from "../../interfaces/IEnergySource";

export class Battery {
    private _chargePercentage: number = 100;
    private _source: IEnergySource;
    private updateTimer;
    isCharging:boolean = false;
    readonly idleEnergyConsumtion:number = 0.2;
    
    set source(value: IEnergySource) {
        this._source = value;
    }
    
    get chargePercentage(): number {
        return this._chargePercentage;
    }
    
    constructor() {
        this.startDischarging();
    }
    
    private startDischarging() {
        this.updateTimer = setInterval(() => this.update(), 1000);
    }

    private update() {
        this.isCharging = false;
        
        if (this._chargePercentage > 0) this._chargePercentage = +(this._chargePercentage - this.idleEnergyConsumtion).toFixed(2);
        
        if (this._source != null && this._source.isOperational && this._chargePercentage < 100) {
            let newValue = +(this._chargePercentage + this._source.getEnergy()).toFixed(2);
            this._chargePercentage = Math.min(newValue, 100);
            this.isCharging = true;
        }
    }

    consume(value:number):boolean {
        if (this._chargePercentage - value >= 0) {
            this._chargePercentage -= value;
            return true;
        }

        return false;
    }
}

