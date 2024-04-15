import { Battery } from "./Battery";
import { Instrument } from "./Instrument";

export class EnvironmentSensors extends Instrument {
    private readonly minLight = 0.0;
    private readonly maxLight = 1.0;

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
        // to do
        this._illumination = +(Math.random() * (this.maxLight - this.minLight) + this.minLight).toFixed(2);
    }
}