import { IFakeable, IMentionable, ISnowflake } from './_markers';
import { Guild } from './Guild';
import { Role } from './Role';
import { JDA } from '../_core/JDA';
import { Member } from './Member';
import { User } from './User';
import { MessageChannel } from './MessageChannel';
import { AuditableRestAction } from '../_core/restactions/restactions';

export interface Emote extends ISnowflake, IMentionable, IFakeable {
    getGuild(): Guild;

    getRoles(): Array<Role>;

    canProvideRoles(): boolean;

    getName(): string;

    isManaged(): boolean;

    getJDA(): JDA;

    delete(): AuditableRestAction<void>;

    // TODO type
    getManager(): any;

    isAnimated(): boolean;

    getImageUrl(): string;

    canInteract(issuer: Member): boolean;

    canInteract(issuer: User, channel: MessageChannel, botOverride?: boolean): boolean;
}

export interface ListedEmote extends Emote {
    getUser(): User;

    hasUser(): boolean;
}