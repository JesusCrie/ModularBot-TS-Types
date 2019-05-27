import { JDA } from './JDA';
import { Game } from '../_entities/Game';

export declare enum OnlineStatus {
    ONLINE = 'online',
    IDLE = 'idle',
    DO_NOT_DISTURB = 'dnd',
    INVISIBLE = 'invisible',
    OFFLINE = 'offline',
    UNKNOWN = ''
}

export declare interface Presence {
    getJDA(): JDA;

    getStatus(): OnlineStatus;

    getGame(): Game | null;

    isIdle(): boolean;

    setStatus(status: OnlineStatus | null): void;

    setGame(game: Game | null): void;

    setIdle(idle: boolean): void;

    setPresence(status?: OnlineStatus | null, game?: Game | null, idle?: boolean): void;
}
