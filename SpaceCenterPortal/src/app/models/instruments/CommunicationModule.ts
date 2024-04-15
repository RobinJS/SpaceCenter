import { Instrument } from "./Instrument";

export class CommunicationModule extends Instrument {
    protected consumption: number = 0.2;

    override update(): void {
        this.battery.consume(this.consumption);
    }
}