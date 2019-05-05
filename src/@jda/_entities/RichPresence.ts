import { Game } from './Game';

// TODO Finish this
export interface RichPresence extends Game {
    getApplicationIdLong(): number;

    getApplicationId(): string;

    getSessionId(): string;

    getSyncId(): string;

    getFlags(): number;

    // TODO
}