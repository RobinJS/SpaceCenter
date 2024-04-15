import { IEnergySource } from "../../interfaces/IEnergySource";

export class Battery {
    private _chargePercentage: number = 100;
    private _source: IEnergySource;
    isCharging: boolean = true;
    readonly idleEnergyConsumtion: number = 0.2;
    
    set source(value: IEnergySource) {
        this._source = value;
    }
    
    get chargePercentage(): number {
        return this._chargePercentage;
    }
    
    private static _instance: Battery;
    static get Instance() {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        
    }

    update() {
        if (this._source == null || !this._source.isOperational || this._source.getEnergy() == 0) this.isCharging = false;
        else this.isCharging = true;

        if (this._source != null && this._source.isOperational && this._chargePercentage < 100) {
            let chargeValue = this._source.getEnergy();

            if (chargeValue > 0) {
                let newValue = +(this._chargePercentage + chargeValue).toFixed(2);
                this._chargePercentage = Math.min(newValue, 100);
            }
        }
    }

    consume(value: number): boolean {
        if (this._chargePercentage - value >= 0) {
            this._chargePercentage -= value;
            return true;
        }

        return false;
    }
}

