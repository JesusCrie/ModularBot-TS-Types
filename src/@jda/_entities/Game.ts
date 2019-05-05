import { RichPresence } from './RichPresence';

export enum GameType {
    DEFAULT = 0,
    STREAMING = 1,
    LISTENING = 2,
    WATCHING = 3
}

export abstract class Game {
    abstract isRich(): boolean;

    abstract asRichPresence(): RichPresence;

    abstract getName(): string;

    abstract getUrl(): string;

    abstract getType(): GameType;

    // TODO after RichPresence
    // abstract getTimestamps(): Timestamps;

    static playing(name: string): Game {
        throw Error;
    }

    static streaming(name: string): Game {
        throw Error;
    }

    static listening(name: string): Game {
        throw Error;
    }

    static watching(name: string): Game {
        throw Error;
    }

    static of(type: GameType, name: string, url?: string): Game {
        throw Error;
    }

    static isValidStreamingUrl(url: string): boolean {
        throw Error;
    }
}

