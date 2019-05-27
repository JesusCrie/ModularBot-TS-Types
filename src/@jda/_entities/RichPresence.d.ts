import { Game } from './Game';

export declare class RichPresence extends Game {
    public getApplicationIdLong(): number;

    public getApplicationId(): string;

    public getSessionId(): string;

    public getSyncId(): string;

    public getFlags(): number;

    // No appropriate type
    //getFlagSet(): EnumSet<ActivityFlag>;

    public getState(): string;

    public getDetails(): string;

    public getParty(): Party;

    public getLargeImage(): Image;

    public getSmallImage(): Image;
}

export declare class Image {
    public getKey(): string;

    public getText(): string;

    public getUrl(): string
}

export declare class Timestamps {
    public getStart(): number;

    public getEnd(): number;
}

export declare class Party {
    public getId(): string;

    public getSize(): number;

    public getMax(): number;
}
