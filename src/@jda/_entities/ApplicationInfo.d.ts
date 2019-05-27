import { Permission } from '../_core/Permission';
import { JDA } from '../_core/JDA';
import { User } from './User';

export declare interface ApplicationInfo {

    doesBotRequireCodeGrant(): boolean;

    getDescription(): string;

    getIconId(): string;

    getIconUrl(): string;

    getInviteUrl(guildId?: string, ...perms: Array<Permission>): string;

    getJDA(): JDA;

    getName(): string;

    getOwner(): User;

    isBotPublic(): boolean;
}
