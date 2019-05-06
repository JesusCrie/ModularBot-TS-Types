import { ISnowflake } from './_markers';
import { Guild } from './Guild';
import { Category } from './Category';
import { Role } from './Role';
import { Member } from './Member';
import { ChannelAction } from '../_core/restactions/ChannelAction';
import { AuditableRestAction } from '../_core/restactions/restactions';

export enum ChannelType {
    TEXT, PRIVATE, VOICE, GROUP, CATEGORY, NEWS, STORE, UNKNOWN
}

export interface Channel extends ISnowflake {
    getType(): ChannelType;

    getName(): string;

    getGuild(): Guild;

    getParent(): Category | null;

    getMembers(): Array<Member>;

    getPosition(): number;

    getPositionRaw(): number;

    // TODO type
    getPermissionOverride(member: Member | Role): any;

    // TODO type
    getPermissionOverrides(): Array<any>;

    // TODO type
    getMemberPermissionOverrides(): Array<any>;

    // TODO type
    getRolePermissionOverrides(): Array<any>;

    createCopy(guild?: Guild): ChannelAction;

    // TODO type
    getManager(): any;

    delete(): AuditableRestAction<void>;

    // TODO type
    createPermissionOverride(member: Member): any;

    // TODO type
    createPermissionOverride(role: Role): any;

    // TODO type
    putPermissionOverride(member: Member): any;

    // TODO type
    putPermissionOverride(role: Role): any;

    // TODO when better rest action
    createInvite(): any;

    // TODO type
    // TODO when better rest action
    getInvites(): Promise<Array<any>>;
}