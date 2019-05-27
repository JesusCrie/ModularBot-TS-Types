import { ISnowflake } from './_markers';
import { Guild } from './Guild';
import { Category } from './Category';
import { Role } from './Role';
import { Member } from './Member';
import { ChannelAction } from '../_core/restactions/ChannelAction';
import { AuditableRestAction, RestAction } from '../_core/restactions/RestAction';
import { PermissionOverride } from './PermissionOverride';
import { PermissionOverrideAction } from '../_core/restactions/PermissionOverrideAction';
import { InviteAction } from '../_core/restactions/InviteAction';
import { Invite } from './Invite';

export declare enum ChannelType {
    TEXT, PRIVATE, VOICE, GROUP, CATEGORY, NEWS, STORE, UNKNOWN
}

export declare interface Channel extends ISnowflake {
    getType(): ChannelType;

    getName(): string;

    getGuild(): Guild;

    getParent(): Category | null;

    getMembers(): Array<Member>;

    getPosition(): number;

    getPositionRaw(): number;

    getPermissionOverride(member: Member | Role): PermissionOverride;

    getPermissionOverrides(): Array<PermissionOverride>;

    getMemberPermissionOverrides(): Array<PermissionOverride>;

    getRolePermissionOverrides(): Array<PermissionOverride>;

    createCopy(guild?: Guild): ChannelAction;

    // TODO type
    getManager(): any;

    delete(): AuditableRestAction<void>;

    createPermissionOverride(member: Member): PermissionOverrideAction;

    createPermissionOverride(role: Role): PermissionOverrideAction;

    putPermissionOverride(member: Member): PermissionOverrideAction;

    putPermissionOverride(role: Role): PermissionOverrideAction;

    createInvite(): InviteAction;

    getInvites(): RestAction<Array<Invite>>;
}
