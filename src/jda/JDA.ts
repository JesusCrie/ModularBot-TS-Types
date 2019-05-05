import {User} from "./User";
import {Guild} from "./Guild";
import {Role} from "./Role";
import {Category} from "./Category";

export enum JDAStatus {
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

export abstract class JDA {

    abstract getStatus(): JDAStatus;

    abstract getPing(): number;

    abstract awaitStatus(status: JDAStatus): JDA;

    abstract awaitReady(): JDA;

    abstract getCloudflareRays(): Array<string>;

    abstract getWebSocketTrace(): Array<string>;

    // TODO right type
    abstract setEventManager(manager: any): void;

    abstract addEventListener(...listeners: Array<any>): void;

    abstract removeEventListener(...listeners: Array<any>): void;

    abstract getRegisteredListeners(): Array<any>;

    // TODO right ret type
    abstract createGuild(name: string): any;

    // TODO right ret type
    abstract getAudioManagerCache(): any;

    // TODO ret type
    abstract getAudioManagers(): Array<any>;

    // TODO type
    abstract getUserCache(): any;

    abstract getUsers(): Array<User>;

    abstract getUserById(id: string): User;

    abstract getUsersByName(name: string, ignoreCase: boolean): Array<User>;

    abstract getMutualGuilds(...users: Array<User>): Array<Guild>;

    // TODO wrap rest action
    abstract retrieveUserById(id: string): Promise<User>;

    // TODO ret type
    abstract getGuildCache(): Array<Guild>;

    abstract getGuilds(): Array<Guild>;

    abstract getGuildById(id: string): Guild;

    abstract getGuildsByName(name: string, ignoreCase: boolean): Array<Guild>;

    abstract getRoleCache(): Array<Role>;

    abstract getRoleById(id: string): Role;

    abstract getRolesByName(name: string, ignoreCase: boolean): Array<Role>;

    // TODO type
    abstract getCategoryCache(): Array<Category>;

    abstract getCategoryById(id: string): Category;
}

