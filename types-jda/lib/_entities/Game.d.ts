import { RichPresence, Timestamps } from './RichPresence';

export declare enum GameType {
    DEFAULT = 0,
    STREAMING = 1,
    LISTENING = 2,
    WATCHING = 3
}

export declare class Game {
    isRich(): boolean;

    asRichPresence(): RichPresence;

    getName(): string;

    getUrl(): string;

    getType(): GameType;

    getTimestamps(): Timestamps;

    static playing(name: string): Game;

    static streaming(name: string): Game;

    static listening(name: string): Game;

    static watching(name: string): Game;

    static of(type: GameType, name: string, url?: string): Game;

    static isValidStreamingUrl(url: string): boolean;
}

