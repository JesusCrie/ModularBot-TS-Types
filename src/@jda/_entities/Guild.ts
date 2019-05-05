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

export interface Guild extends ISnowflake {
    // TODO type
    // TODO when better rest action
    retrieveRegions(includeDeprecated?: boolean): Promise<Array<any>>;

    // TODO better rest action
    addMember(accessToken: string, user: User | string | number): Promise<void>;

    getName(): string;

    getIconId(): string;

    getIconUrl(): string;

    getFeatures(): Array<string>;

    getSplashId(): string;

    getSplashUrl(): string;

    // TODO when better rest action
    getVanityUrl(): Promise<string>;

    getAfkChannel(): VoiceChannel;

    getSystemChannel(): TextChannel;

    getOwner(): Member;

    getOwnerId(): string;

    getAfkTimeout(): Timeout;

    // TODO type
    getRegion(): any;

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

    // TODO when better rest action
    retrieveEmotes(): Promise<Array<ListedEmote>>

    // TODO when better rest action
    retrieveEmoteById(id: string): Promise<ListedEmote>;

    // TODO when better rest action
    retrieveEmote(emote: Emote): Promise<ListedEmote>;

    // TODO when better rest action
    getBanList(): Promise<Array<Ban>>;

    // TODO when better rest action
    getBanById(user: User | string): Promise<Ban>;

    // TODO when better rest action
    getPrunableMemberCount(days: number): Promise<number>;

    getPublicRole(): Role;

    getDefaultChannel(): TextChannel | null;

    // TODO type
    getManager(): any;

    // TODO type
    getController(): any;

    // Client method
    // getRecentMentions(): any;

    // TODO type
    getAuditLogs(): any;

    // TODO when better rest action
    leave(): Promise<void>;

    // TODO when better rest action
    delete(mfaCode?: string): Promise<void>;

    // TODO type
    getAudioManager(): any;

    getJDA(): JDA;

    // TODO type
    // TODO when better rest action
    getInvites(): Promise<Array<any>>;

    // TODO type
    // TODO when better rest action
    getWebhooks(): Promise<Array<any>>;

    // TODO type
    getVoiceStates(): Array<any>;

    getVerificationLevel(): VerificationLevel;

    getDefaultNotificationLevel(): NotificationLevel;

    getRequiredMFALevel(): MFALevel;

    getExplicitContentLevel(): ExplicitContentLevel;

    checkVerification(): boolean;

    isAvailable(): boolean;
}

export abstract class Timeout {
    static SECONDS_60: Timeout;
    static SECONDS_300: Timeout;
    static SECONDS_900: Timeout;
    static SECONDS_1800: Timeout;
    static SECONDS_3600: Timeout;

    abstract getSeconds(): number;
}

export interface Ban {
    getUser(): User;

    getReason(): string;
}

export enum VerificationLevel {
    NONE, LOW, MEDIUM, HIGH, VERY_HIGH, UNKNOWN
}

export enum NotificationLevel {
    ALL_MESSAGES, MENTIONS_ONLY, UNKNOWN
}

export enum MFALevel {
    NONE, TWO_FACTOR_AUTH, UNKNOWN
}

export enum ExplicitContentLevel {
    OFF, NO_ROLE, ALL, UNKNOWN
}