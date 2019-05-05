import { JDA } from './JDA';
import { Game } from '../_entities/Game';

export enum OnlineStatus {
    ONLINE = 'online',
    IDLE = 'idle',
    DO_NOT_DISTURB = 'dnd',
    INVISIBLE = 'invisible',
    OFFLINE = 'offline',
    UNKNOWN = ''
}

export interface Presence {
    getJDA(): JDA;

    getStatus(): OnlineStatus;

    getGame(): Game;

    isIdle(): boolean;

    setStatus(status: OnlineStatus): void;

    setGame(game: Game): void;

    setIdle(idle: boolean): void;

    setPresence(status?: OnlineStatus, game?: Game, idle?: boolean): void;
}