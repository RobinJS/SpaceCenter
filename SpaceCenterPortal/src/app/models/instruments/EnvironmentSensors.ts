import { formatValue } from "../../utils/Utils";
import { Battery } from "./Battery";
import { Instrument } from "./Instrument";

export class EnvironmentSensors extends Instrument {
    private readonly minLight = 0.0;
    private readonly maxLight = 1.0;
    private readonly minTemp = 84;
    private readonly maxTemp = 86;
    private readonly minWind = 0;
    private readonly maxWind = 5;

    private _illumination:number;
    private _temperature:number;
    private _wind:number;
    get illumination():number { return this._illumination; }
    get temperature():number { return this._temperature; }
    get wind():number { return this._wind; }

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
        this._wind = formatValue(Math.random() * (this.maxWind - this.minWind) + this.minWind);

        this.battery.consume(this.consumption);
    }
}