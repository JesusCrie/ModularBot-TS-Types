import { JDA } from './JDA';
import { Permission } from './Permission';
import { ShardManager } from './ShardManager';
import { RestAction } from './restactions/RestAction';
import { ApplicationInfo } from '../_entities/ApplicationInfo';

export declare interface JDABot {
    getJDA(): JDA;

    getApplicationInfo(): RestAction<ApplicationInfo>;

    getInviteUrl(permissions: Array<Permission>): string;

    getShardManager(): ShardManager;
}
