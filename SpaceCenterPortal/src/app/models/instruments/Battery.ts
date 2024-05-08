import { EventEmitter } from "@angular/core";
import { IEnergySource } from "../../interfaces/IEnergySource";
import { formatValue } from "../../utils/Utils";
import { Message, MessageType } from "../../controls/instruments/log/log.component";

export class Battery {
    private _chargePercentage: number = 100;
    private _source: IEnergySource;
    isCharging: boolean = true;
    private batterWarningShown = false;
    private lowBatteryWarningShown = false;

    readonly LOW_BATTERY_TRESHOLD: number = 95;

    onLogMessage = new EventEmitter<Message>();
    
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

    private constructor() {}

    update() {
        if (this._source == null || !this._source.isOperational || this._source.getEnergy() == 0) this.isCharging = false;
        else this.isCharging = true;

        if (this._source != null && this._source.isOperational && this._chargePercentage < 100) {
            let chargeValue = this._source.getEnergy();

            if (chargeValue > 0) {
                let newValue = formatValue(this._chargePercentage + chargeValue);
                this._chargePercentage = +Math.min(newValue, 100).toFixed(2);
            }
        }

        this.handleWarnings();
    }
    
    handleWarnings() {
        if (!this.isCharging && !this.batterWarningShown) {
            this.batterWarningShown = true;
            this.onLogMessage.emit({text: "Warning! Battery not charging!", type: MessageType.Warning});
        }
    
        if (this.isCharging && this.batterWarningShown) {
            this.batterWarningShown = false;
            this.onLogMessage.emit({text: "Battery charging restored.", type: MessageType.Default});
        }

        if (!this.isCharging && !this.lowBatteryWarningShown && this.chargePercentage <= this.LOW_BATTERY_TRESHOLD) {
            this.lowBatteryWarningShown = true;
            this.onLogMessage.emit({text: "Warning! Battery level low!", type: MessageType.Alert});
        }

        if (this.isCharging && this.lowBatteryWarningShown && this.chargePercentage > this.LOW_BATTERY_TRESHOLD) {
            this.lowBatteryWarningShown = false;
        }
    }

    consume(value: number): boolean {
        if (this._chargePercentage - value >= 0) {
            this._chargePercentage = formatValue(this._chargePercentage - value);
            return true;
        }

        return false;
    }

    // formatValue(value: number): number {
    //     return +value.toFixed(2);
    // }
}

