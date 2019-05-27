import { User } from '../_entities/User';
import { Guild } from '../_entities/Guild';
import { Role } from '../_entities/Role';
import { Category } from '../_entities/Category';
import { TextChannel } from '../_entities/TextChannel';
import { VoiceChannel } from '../_entities/VoiceChannel';
import { PrivateChannel } from '../_entities/PrivateChannel';
import { Emote } from '../_entities/Emote';
import { SelfUser } from '../_entities/SelfUser';
import { Presence } from './Presence';
import { GuildAction } from './restactions/GuildAction';
import { RestAction } from './restactions/RestAction';
import { JDABot } from './JDABot';

export declare enum JDAStatus {
    INITIALIZING,
    INITIALIZED,
    LOGGING_IN,
    CONNECTING_TO_WEBSOCKET,
    IDENTIFYING_SESSION,
    AWAITING_LOGIN_CONFIRMATION,
    LOADING_SUBSYSTEMS,
    CONNECTED,
    DISCONNECTED,
    RECONNECT_QUEUED,
    WAITING_TO_RECONNECT,
    ATTEMPTING_TO_RECONNECT,
    SHUTTING_DOWN,
    SHUTDOWN,
    FAILED_TO_LOGIN
}

export declare enum AccountType {
    BOT, CLIENT
}

export declare class ShardInfo {
    public getShardId(): number;

    public getShardTotal(): number;

    public getShardString(): string;
}

export declare interface JDA {

    getStatus(): JDAStatus;

    getPing(): number;

    awaitStatus(status: JDAStatus): JDA;

    awaitReady(): JDA;

    getCloudflareRays(): Array<string>;

    getWebSocketTrace(): Array<string>;

    // Should not be able to access it
    // setEventManager(manager: any): void;

    addEventListener(...listeners: Array<any>): void;

    removeEventListener(...listeners: Array<any>): void;

    getRegisteredListeners(): Array<any>;

    createGuild(name: string): GuildAction;

    // Hide caches
    // getAudioManagerCache(): any;

    // TODO ret type
    getAudioManagers(): Array<any>;

    // Hide caches
    // getUserCache(): Array<User>;

    getUsers(): Array<User>;

    getUserById(id: string): User;

    getUsersByName(name: string, ignoreCase: boolean): Array<User>;

    getMutualGuilds(...users: Array<User>): Array<Guild>;

    retrieveUserById(id: string): RestAction<User>;

    // Hide caches
    // getGuildCache(): Array<Guild>;

    getGuilds(): Array<Guild>;

    getGuildById(id: string): Guild;

    getGuildsByName(name: string, ignoreCase: boolean): Array<Guild>;

    // Hide caches
    // getRoleCache(): Array<Role>;

    getRoleById(id: string): Role;

    getRolesByName(name: string, ignoreCase: boolean): Array<Role>;

    // Hide caches
    // getCategoryCache(): Array<Category>;

    getCategoryById(id: string): Category;

    getCategories(): Array<Category>;

    getCategoriesByName(name: string, ignoreCase: boolean): Array<Category>;

    // Hide caches
    // getTextChannelCache(): Array<TextChannel>;

    getTextChannels(): Array<TextChannel>;

    getTextChannelById(id: string): TextChannel;

    getTextChannelsByName(name: string, ignoreCase: boolean): Array<TextChannel>;

    // Hide caches
    // getVoiceChannelCache(): Array<VoiceChannel>;

    getVoiceChannels(): Array<VoiceChannel>;

    getVoiceChannelById(id: string): VoiceChannel;

    getVoiceChannelByName(name: string, ignoreCase: boolean): Array<VoiceChannel>;

    // Hide caches
    // getPrivateChannelCache(): Array<PrivateChannel>;

    getPrivateChannels(): Array<PrivateChannel>;

    getPrivateChannelById(id: string): Array<PrivateChannel>;

    // Hide caches
    // getEmoteCache(): Array<Emote>;

    getEmotes(): Array<Emote>;

    getEmoteById(id: string): Emote;

    getEmotesByName(name: string, ignoreCase: boolean): Array<Emote>;

    // Should not be able to access it
    // getEventManager(): any;

    getSelfUser(): SelfUser;

    getPresence(): Presence;

    getShardInfo(): ShardInfo;

    getToken(): string;

    getResponseTotal(): number;

    getMaxReconnectDelay(): number;

    setAutoReconnect(reconnect: boolean): void;

    setRequestTimeoutRetry(retryOnTimeout: boolean): void;

    isAutoReconnect(): boolean;

    isAudioEnabled(): boolean;

    isBulkDeleteSplittingEnabled(): boolean;

    shutdown(): void;

    shutdownNow(): void;

    getAccountType(): AccountType;

    // JDA doesn't allow client bots anyway
    // asClient(): any;

    asBot(): JDABot

    // TODO type
    getWebhookById(id: string): any;
}
