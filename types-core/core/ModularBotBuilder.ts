export declare class ModularBotBuilder {

    public setShardAmount(shards: number): this;

    public setStateProvider(stateProvider: StateProvider): this;

    public setEnableVoice(enableVoice: boolean): this;

    public useVoice(): this;

    public setEnableBulkDeleteSplit(enableBulkDeleteSplitting: boolean): this;

    public disableBulkDeleteSplitting(): this;

    public setUseShutdownNow(useShutdownNow: boolean): this;

    public useShutdownNow(): this;

    // TODO
}
