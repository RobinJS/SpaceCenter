import { Battery } from "./Battery";
import { Instrument } from "./Instrument";

export class EnvironmentSensors extends Instrument {
    private readonly minLight = 0.0;
    private readonly maxLight = 1.0;

    constructor(battery: Battery) {
        super(battery);
        this.consumption = 0.01;
    }

    getLightIntensity(): number {
        return +(Math.random() * (this.maxLight - this.minLight) + this.minLight).toFixed(2);
    }
}