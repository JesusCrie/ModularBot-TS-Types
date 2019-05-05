import { Guild } from './Guild';
import { Permission } from '../_core/Permission';
import { Channel } from './Channel';
import { Call } from './Call';

export interface IFakeable {
    isFake(): boolean;
}

export interface IMentionable {
    getAsMention(): string;
}

export interface ISnowflake {
    getId(): string;

    getIdLong(): number;

    getCreationTime(): Date;
}

export interface IPermissionHolder {
    getGuild(): Guild;

    getPermissions(): Array<Permission>;

    hasPermission(channel?: Channel, ...permissions: Array<Permission>): boolean;
}

export interface CallableChannel extends ISnowflake {
    // TODO when better rest action
    startCall(): Promise<Call>;

    getCurrentCall(): Call;
}