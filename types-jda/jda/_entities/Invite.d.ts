import { JDA } from '../_core/JDA';
import { AuditableRestAction, RestAction } from '../_core/restactions/RestAction';
import { ISnowflake } from './_markers';
import { User } from './User';
import { ChannelType } from './Channel';
import { VerificationLevel } from './Guild';

export declare enum InviteType {
    GUILD, GROUP, UNKNOWN
}

export declare interface Invite {

    resolve(api: JDA, code: string, withCounts?: boolean): RestAction<Invite>;

    delete(): AuditableRestAction<void>;

    expand(): RestAction<Invite>;

    getType(): InviteType;

    getChannel(): Channel;

    getCode(): string;

    getGroup(): Group;

    getURL(): string;

    // getCreationTime(): OffsetDateTime;

    getGuild(): Guild;

    getInviter(): User;

    getJDA(): JDA;

    getMaxAge(): number;

    getMaxUses(): number;

    getUses(): number;

    isExpanded(): boolean;

    isTemporary(): boolean;
}

export declare interface Channel extends ISnowflake {

    getName(): string;

    getType(): ChannelType;
}

export declare interface Guild extends ISnowflake {

    getIconId(): string;

    getIconUrl(): string;

    getName(): string;

    getSplashId(): string;

    getSplashUrl(): string;

    getVerificationLevel(): VerificationLevel;

    getOnlineCount(): number;

    getMemberCount(): number;

    getFeatures(): Set<String>;
}

export declare interface Group extends ISnowflake {

    getIconId(): string;

    getIconUrl(): string;

    getName(): string;

    getUsers(): Array<User> | null;
}
