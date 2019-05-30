import { ModuleManager } from './module/ModuleManager';
import {
    ApplicationInfo,
    Category,
    Emote,
    Game,
    Guild,
    JDA,
    JDAStatus,
    OnlineStatus,
    PrivateChannel,
    RestAction,
    Role,
    ShardManager,
    TextChannel,
    User,
    VoiceChannel
    // @ts-ignore
} from '@modularbot/types-jda';

export declare class ModularBot implements ShardManager {

    public getModuleManager(): ModuleManager;

    public login(): void;

    // Well, another time
    // TODO java async
    //public getMainPool(): ScheduledExecutorService;

    // Interface impl

    public addEventListener(...listeners: Array<any>): void;

    public addEventListeners(eventListenerProvider: (shardId: number) => any): void;

    public getApplicationInfo(): RestAction<ApplicationInfo>;

    public getAveragePing(): number;

    public getCategories(): Array<Category>;

    public getCategoriesByName(name: string, ignoreCase: boolean): Array<Category>;

    public getCategoryById(id: string): Category;

    public getEmoteById(id: string): Emote;

    public getEmotes(): Array<Emote>;

    public getEmotesByName(name: string, ignoreCase: boolean): Array<Emote>;

    public getGuildById(id: string): Guild;

    public getGuilds(): Array<Guild>;

    public getGuildsByName(name: string, ignoreCase: boolean): Array<Guild>;

    public getMutualGuilds(...users: Array<User>): Array<Guild>;

    public getPrivateChannelById(id: string): Array<PrivateChannel>;

    public getPrivateChannels(): Array<PrivateChannel>;

    public getRoleById(id: string): Role;

    public getRoles(): Array<Role>;

    public getRolesByName(name: string, ignoreCase: boolean): Array<Role>;

    public getShardById(id: number): JDA;

    public getShards(): Array<JDA>;

    public getShardsQueued(): number;

    public getShardsRunning(): number;

    public getShardsTotal(): number;

    public getStatus(shardId: number): JDAStatus;

    public getStatuses(): Map<JDA, JDAStatus>;

    public getTextChannelById(id: string): TextChannel;

    public getTextChannels(): Array<TextChannel>;

    public getUserById(id: string): User;

    public getUsers(): Array<User>;

    public getVoiceChannelById(id: string): VoiceChannel;

    public getVoiceChannels(): Array<VoiceChannel>;

    public removeEventListener(...listeners: Array<any>): void;

    public removeEventListenerProvider(eventListenerProvider: (shardId: number) => any): void;

    public removeEventListeners(eventListenerProvider: (shardId: number) => Array<any>): void;

    public restart(id?: number): void;

    public retrieveUserById(id: string): RestAction<User>;

    public setGame(game: Game): void;

    public setGameProvider(gameProvider: (shardId: number) => Game): void;

    public setIdle(idle: boolean): void;

    public setIdleProvider(idleProvider: (shardId: number) => boolean): void;

    public setPresence(status: OnlineStatus, game: Game): void;

    public setPresenceProvider(statusProvider: (shardId: number) => OnlineStatus, gameProvider: (shardId: number) => Game): void;

    public setStatus(status: OnlineStatus): void;

    public setStatusProvider(statusProvider: (shardId: number) => OnlineStatus): void;

    public shutdown(shardId?: number): void;

    public start(shardId: number): void;
}
