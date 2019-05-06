import { JDA } from './JDA';
import { Permission } from './Permission';
import { ShardManager } from './ShardManager';
import { RestAction } from './restactions/restactions';

export interface JDABot {
    getJDA(): JDA;

    // TODO type
    getApplicationInfo(): RestAction<any>;

    getInviteUrl(permissions: Array<Permission>): string;

    getShardManager(): ShardManager;
}