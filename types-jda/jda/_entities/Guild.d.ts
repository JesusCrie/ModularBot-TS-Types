import { ISnowflake } from './_markers';
import { User } from './User';
import { VoiceChannel } from './VoiceChannel';
import { TextChannel } from './TextChannel';
import { Member } from './Member';
import { Role } from './Role';
import { Category } from './Category';
import { Channel } from './Channel';
import { Emote, ListedEmote } from './Emote';
import { JDA } from '../_core/JDA';
import { RestAction } from '../_core/restactions/RestAction';
import { Region } from '../_core/Region';
import { MemberAction } from '../_core/restactions/MemberAction';
import { Invite } from './Invite';

export declare interface Guild extends ISnowflake {
    retrieveRegions(includeDeprecated?: boolean): RestAction<Array<Region>>;

    addMember(accessToken: string, user: User | string | number): MemberAction;

    getName(): string;

    getIconId(): string;

    getIconUrl(): string;

    getFeatures(): Array<string>;

    getSplashId(): string;

    getSplashUrl(): string;

    getVanityUrl(): RestAction<string>;

    getAfkChannel(): VoiceChannel;

    getSystemChannel(): TextChannel;

    getOwner(): Member;

    getOwnerId(): string;

    getAfkTimeout(): Timeout;

    getRegion(): Region;

    getRegionRaw(): string;

    isMember(user: User): boolean;

    getSelfMember(): Member;

    getMember(user: User): Member;

    getMemberById(id: string): Member;

    getMembers(): Array<Member>;

    getMembersByName(name: string, ignoreCase: boolean): Array<Member>;

    getMembersByNickname(nickname: string, ignoreCase: boolean): Array<Member>;

    getMembersByEffectiveName(name: string, ignoreCase: boolean): Array<Member>;

    getMembersWithRoles(...roles: Array<Role>): Array<Member>;

    // Hide caches
    // getMemberCache(): Array<Member>;

    getCategoryById(id: string): Category;

    getCategories(): Array<Category>;

    getCategoriesByName(name: string, ignoreCase: boolean): Array<Category>;

    // Hide caches
    // getCategoryCache(): Array<Category>;

    getTextChannelById(id: string): TextChannel;

    getTextChannels(): Array<TextChannel>;

    getTextChannelsByName(name: string, ignoreCase: boolean): Array<TextChannel>;

    // Hide caches
    // getTextChannelCache(): Array<TextChannel>;

    getVoiceChannelById(id: string): VoiceChannel;

    getVoiceChannels(): Array<VoiceChannel>;

    getVoiceChannelByName(name: string, ignoreCase: boolean): Array<VoiceChannel>;

    // Hide caches
    // getVoiceChannelCache(): Array<VoiceChannel>;

    getChannels(includeHidden?: boolean): Array<Channel>;

    getRoleById(id: string): Role;

    getRoles(): Array<Role>;

    getRolesByName(name: string, ignoreCase: boolean): Array<Role>;

    // Hide caches
    // getRoleCache(): Array<Role>;

    getEmoteById(id: string): Emote;

    getEmotes(): Array<Emote>;

    getEmotesByName(name: string, ignoreCase: boolean): Array<Emote>;

    // Hide caches
    // getEmoteCache(): Array<Emote>;

    retrieveEmotes(): RestAction<Array<ListedEmote>>

    retrieveEmoteById(id: string): RestAction<ListedEmote>;

    retrieveEmote(emote: Emote): RestAction<ListedEmote>;

    getBanList(): RestAction<Array<Ban>>;

    getBanById(user: User | string): RestAction<Ban>;

    getPrunableMemberCount(days: number): RestAction<number>;

    getPublicRole(): Role;

    getDefaultChannel(): TextChannel | null;

    // TODO type
    getManager(): any;

    // TODO type
    getController(): any;

    // Client method
    // getRecentMentions(): any;

    // TODO type
    // TODO when better rest actions
    getAuditLogs(): any;

    leave(): RestAction<void>;

    delete(mfaCode?: string): RestAction<void>;

    // TODO type
    getAudioManager(): any;

    getJDA(): JDA;

    // TODO type
    getInvites(): RestAction<Array<Invite>>;

    // TODO type
    getWebhooks(): RestAction<Array<any>>;

    // TODO type
    getVoiceStates(): Array<any>;

    getVerificationLevel(): VerificationLevel;

    getDefaultNotificationLevel(): NotificationLevel;

    getRequiredMFALevel(): MFALevel;

    getExplicitContentLevel(): ExplicitContentLevel;

    checkVerification(): boolean;

    isAvailable(): boolean;
}

export declare abstract class Timeout {
    static SECONDS_60: Timeout;
    static SECONDS_300: Timeout;
    static SECONDS_900: Timeout;
    static SECONDS_1800: Timeout;
    static SECONDS_3600: Timeout;

    abstract getSeconds(): number;
}

export declare interface Ban {
    getUser(): User;

    getReason(): string;
}

export declare enum VerificationLevel {
    NONE, LOW, MEDIUM, HIGH, VERY_HIGH, UNKNOWN
}

export declare enum NotificationLevel {
    ALL_MESSAGES, MENTIONS_ONLY, UNKNOWN
}

export declare enum MFALevel {
    NONE, TWO_FACTOR_AUTH, UNKNOWN
}

export declare enum ExplicitContentLevel {
    OFF, NO_ROLE, ALL, UNKNOWN
}
