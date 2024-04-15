export interface IInstrument {
    get isOperational(): boolean;
    update(): void;
}