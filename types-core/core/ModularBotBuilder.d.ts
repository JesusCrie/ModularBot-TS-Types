import { StateProvider } from './StateProvider';
import { Module } from './module/Module';

export declare class ModularBotBuilder {

    public setShardAmount(shards: number): this;

    public setStateProvider(stateProvider: StateProvider): this;

    public setEnableVoice(enableVoice: boolean): this;

    public useVoice(): this;

    public setEnableBulkDeleteSplit(enableBulkDeleteSplitting: boolean): this;

    public disableBulkDeleteSplitting(): this;

    public setUseShutdownNow(useShutdownNow: boolean): this;

    public useShutdownNow(): this;

    public setMaxReconnectDelay(maxReconnectDelay: number): this;

    public setCorePoolSize(poolSize: number): this;

    public addListeners(listenerProvider: (shardId: number) => any): this;

    public addListeners(...listeners: Array<any>): this;

    public requestModules(...requests: Array<any>): this;

    public provideBuiltModules(...modules: Array<Module>): this;

    public configureModules(moduleClass: any, ...settings: Array<any>): this;
}
