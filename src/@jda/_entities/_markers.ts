import { Guild } from './Guild';
import { Permission } from '../_core/Permission';
import { Channel } from './Channel';
import { Call } from './Call';
import { RestAction } from '../_core/restactions/restactions';

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
    startCall(): RestAction<Call>;

    getCurrentCall(): Call;
}