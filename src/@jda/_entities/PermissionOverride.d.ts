import { Permission } from '../_core/Permission';
import { JDA } from '../_core/JDA';
import { Role } from './Role';
import { Guild } from './Guild';
import { Channel } from './Channel';
import { AuditableRestAction } from '../_core/restactions/RestAction';

export declare interface PermissionOverride {

    getAllowedRaw(): number;

    getInheritRaw(): number;

    getDeniedRaw(): number;

    getAllowed(): Array<Permission>;

    getInherit(): Array<Permission>;

    getDenied(): Array<Permission>;

    getJDA(): JDA;

    getRole(): Role;

    getChannel(): Channel;

    getGuild(): Guild;

    isMemberOverride(): boolean;

    isRoleOverride(): boolean;

    // TODO type
    getManager(): any;

    delete(): AuditableRestAction<void>;
}
