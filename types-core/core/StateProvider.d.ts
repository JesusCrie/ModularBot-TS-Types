import { Game } from '../../types-jda/jda/entities';
import { OnlineStatus } from '../../types-jda/jda/core';

export declare interface StateProvider {

    getIdleProvider(): (shardId: number) => boolean;

    getGameProvider(): (shardId: number) => Game;

    getOnlineStatusProvider(): (shardId: number) => OnlineStatus;
}
