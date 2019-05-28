import { Module } from './Module';

export declare class ModuleManager {

    public getModule(clazz: any): Module;

    public reset(): void;

    public dispatch(action: (module: Module) => void): void;
}
