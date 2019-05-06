import { IMentionable, IPermissionHolder, ISnowflake } from './_markers';
import { Guild } from './Guild';
import { JDA } from '../_core/JDA';
import { RoleAction } from '../_core/restactions/RoleAction';
import { AuditableRestAction } from '../_core/restactions/restactions';

export interface Role extends ISnowflake, IMentionable, IPermissionHolder {
    getPosition(): number;

    getPositionRaw(): number;

    getName(): string;

    isManaged(): boolean;

    isHoisted(): boolean;

    isMentionable(): boolean;

    getPermissionsRaw(): number;

    // Not supported
    // getColor(): any;

    getColorRaw(): number;

    isPublicRole(): boolean;

    canInteract(role: Role): boolean;

    getGuild(): Guild;

    createCopy(guild?: Guild): RoleAction;

    // TODO type
    getManager(): any;

    delete(): AuditableRestAction<void>;

    getJDA(): JDA;
}