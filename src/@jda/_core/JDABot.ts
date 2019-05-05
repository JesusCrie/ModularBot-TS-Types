import { JDA } from './JDA';
import { Permission } from './Permission';
import { ShardManager } from './ShardManager';

export interface JDABot {
    getJDA(): JDA;

    // TODO when better rest action
    // getApplicationInfo(): any;

    getInviteUrl(permissions: Array<Permission>): string;

    getShardManager(): ShardManager;
}