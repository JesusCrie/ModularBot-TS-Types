import { Guild } from './Guild';
import { Permission } from '../_core/Permission';
import { Channel } from './Channel';
import { Call } from './Call';
import { RestAction } from '../_core/restactions/RestAction';

export declare interface IFakeable {
    isFake(): boolean;
}

export declare interface IMentionable {
    getAsMention(): string;
}

export declare interface ISnowflake {
    getId(): string;

    getIdLong(): number;

    getCreationTime(): Date;
}

export declare interface IPermissionHolder {
    getGuild(): Guild;

    getPermissions(): Array<Permission>;

    hasPermission(channel?: Channel, ...permissions: Array<Permission>): boolean;
}

export declare interface CallableChannel extends ISnowflake {
    startCall(): RestAction<Call>;

    getCurrentCall(): Call;
}
