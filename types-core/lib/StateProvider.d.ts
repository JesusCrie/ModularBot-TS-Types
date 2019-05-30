// @ts-ignore
import { Game, OnlineStatus } from '@modularbot/types-jda';

export declare interface StateProvider {

    getIdleProvider(): (shardId: number) => boolean;

    getGameProvider(): (shardId: number) => Game;

    getOnlineStatusProvider(): (shardId: number) => OnlineStatus;
}
