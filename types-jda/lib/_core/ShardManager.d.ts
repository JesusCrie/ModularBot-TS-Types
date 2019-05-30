import { Category } from '../_entities/Category';
import { Emote } from '../_entities/Emote';
import { Guild } from '../_entities/Guild';
import { User } from '../_entities/User';
import { PrivateChannel } from '../_entities/PrivateChannel';
import { Role } from '../_entities/Role';
import { JDA, JDAStatus } from './JDA';
import { TextChannel } from '../_entities/TextChannel';
import { VoiceChannel } from '../_entities/VoiceChannel';
import { Game } from '../_entities/Game';
import { OnlineStatus } from './Presence';
import { RestAction } from './restactions/RestAction';
import { ApplicationInfo } from '../_entities/ApplicationInfo';

export declare interface ShardManager {
    addEventListener(...listeners: Array<any>): void;

    removeEventListener(...listeners: Array<any>): void;

    addEventListeners(eventListenerProvider: (shardId: number) => any): void;

    removeEventListeners(eventListenerProvider: (shardId: number) => Array<any>): void;

    removeEventListenerProvider(eventListenerProvider: (shardId: number) => any): void;

    getShardsQueued(): number;

    getShardsRunning(): number;

    getShardsTotal(): number;

    getApplicationInfo(): RestAction<ApplicationInfo>;

    getAveragePing(): number;

    getCategories(): Array<Category>;

    getCategoriesByName(name: string, ignoreCase: boolean): Array<Category>;

    getCategoryById(id: string): Category;

    // Hide caches
    // getCategoryCache(): Array<Category>;

    getEmoteById(id: string): Emote;

    // Hide caches
    // getEmoteCache(): Array<Emote>;

    getEmotes(): Array<Emote>;

    getEmotesByName(name: string, ignoreCase: boolean): Array<Emote>;

    getGuildById(id: string): Guild;

    getGuildsByName(name: string, ignoreCase: boolean): Array<Guild>;

    // Hide caches
    // getGuildCache(): Array<Guild>;

    getGuilds(): Array<Guild>;

    getMutualGuilds(...users: Array<User>): Array<Guild>;

    retrieveUserById(id: string): RestAction<User>;

    getPrivateChannelById(id: string): Array<PrivateChannel>;

    // Hide caches
    // getPrivateChannelCache(): Array<PrivateChannel>;

    getPrivateChannels(): Array<PrivateChannel>;

    getRoleById(id: string): Role;

    // Hide caches
    // getRoleCache(): Array<Role>;

    getRoles(): Array<Role>;

    getRolesByName(name: string, ignoreCase: boolean): Array<Role>;

    getShardById(id: number): JDA;

    // Hide caches
    // getShardCacheView(): Array<JDA>;

    getShards(): Array<JDA>;

    getStatus(shardId: number): JDAStatus;

    getStatuses(): Map<JDA, JDAStatus>;

    getTextChannelById(id: string): TextChannel;

    // Hide caches
    // getTextChannelCache(): Array<TextChannel>;

    getTextChannels(): Array<TextChannel>;

    getUserById(id: string): User;

    // Hide caches
    // getUserCache(): Array<User>;

    getUsers(): Array<User>;

    getVoiceChannelById(id: string): VoiceChannel;

    // Hide caches
    // getVoiceChannelCache(): Array<VoiceChannel>;

    getVoiceChannels(): Array<VoiceChannel>;

    restart(id?: number): void;

    setGame(game: Game): void;

    setGameProvider(gameProvider: (shardId: number) => Game): void;

    setIdle(idle: boolean): void;

    setIdleProvider(idleProvider: (shardId: number) => boolean): void;

    setPresence(status: OnlineStatus, game: Game): void;

    setPresenceProvider(statusProvider: (shardId: number) => OnlineStatus, gameProvider: (shardId: number) => Game): void;

    setStatus(status: OnlineStatus): void;

    setStatusProvider(statusProvider: (shardId: number) => OnlineStatus): void;

    shutdown(shardId?: number): void;

    start(shardId: number): void;
}
