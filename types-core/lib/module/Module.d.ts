import { ModularBot } from '../ModularBot';

export declare class Module {

    public getInfo(): ModuleInfo;

    public getState(): LifecycleState;

    public getBot(): ModularBot;
}

export declare class ModuleInfo {

    public getName(): string;

    public getAuthor(): string;

    public getUrl(): string;

    public getVersionName(): string;

    public getBuildNumber(): number;
}

export declare enum LifecycleState {
    STOPPED, LOADED, INITIALIZED, OFFLINE, STARTED
}
