import { EventEmitter } from "@angular/core";
import { formatValue } from "../../utils/Utils";
import { Battery } from "./Battery";
import { Instrument } from "./Instrument";
import { Message, MessageType } from "../../controls/instruments/log/log.component";

export class EnvironmentSensors extends Instrument {
    private readonly minLight = 0.0;
    private readonly maxLight = 1.0;
    private readonly minWind = 0;
    private readonly maxWind = 5;
    private readonly minTemp = -125;
    private readonly maxTemp = 85;
    readonly minOperationalTemp = -125;
    readonly maxOperationalTemp = 85;

    private _illumination:number;
    private _temperature:number;
    private _wind:number;
    private lowTempWarningShown = false;
    private highTempWarningShown = false;
    get illumination():number { return this._illumination; }
    get temperature():number { return this._temperature; }
    get wind():number { return this._wind; }

    onLogMessage = new EventEmitter<Message>();

    constructor(battery: Battery) {
        super(battery);
        this.consumption = 0.01;

        this._illumination = 1;
        this._temperature = 85;
        this._wind = 5;
    }

    getLightIntensity(): number {
        return this._illumination;
    }
    
    update() {
        // to do: get data from server
        this._illumination = formatValue(Math.random() * (this.maxLight - this.minLight) + this.minLight);
        this._temperature = formatValue(Math.random() * (this.maxTemp - this.minTemp) + this.minTemp);
        
        let extremeTempChance = Math.random() * 100;
        if (extremeTempChance < 5) this._temperature = this.minTemp - 1;
        else if (extremeTempChance < 10) this._temperature = this.maxTemp + 1;

        this._wind = formatValue(Math.random() * (this.maxWind - this.minWind) + this.minWind);

        this.battery.consume(this.consumption);

        this.handleWarnings();
    }

    handleWarnings() {
        if (this.temperature <= this.minOperationalTemp && !this.lowTempWarningShown) {
            this.lowTempWarningShown = true;
            this.onLogMessage.emit({text: "Warning! Low temperature!", type: MessageType.Warning});
        }

        if (this.temperature > this.minOperationalTemp && this.lowTempWarningShown) {
            this.lowTempWarningShown = false;
            this.onLogMessage.emit({text: "Temperature normalized.", type: MessageType.Default});
        }

        if (this.temperature >= this.maxOperationalTemp && !this.highTempWarningShown) {
            this.highTempWarningShown = true;
            this.onLogMessage.emit({text: "Warning! High temperature!", type: MessageType.Warning});
        }

        if (this.temperature < this.maxOperationalTemp && this.highTempWarningShown) {
            this.highTempWarningShown = false;
            this.onLogMessage.emit({text: "Temperature normalized.", type: MessageType.Default});
        }
    }
}