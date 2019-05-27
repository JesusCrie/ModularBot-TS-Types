import { RestAction } from './RestAction';

export declare abstract class PaginationAction<T, M extends PaginationAction<T, M>> extends RestAction<Array<T>> {
    public cacheSize(): number;

    public isEmpty(): boolean;

    public getCached(): Array<T>;

    public getLast(): T;

    public getFirst(): T;

    public limit(limit: number): M;

    public cache(enableCache: boolean): M;

    public isCacheEnabled(): boolean;

    public getMaxLimit(): number;

    public getMinLimit(): number;

    public getLimit(): number;

    // Complex return type
    public takeAsync(amount: number): any;

    // Complex return type
    public takeRemainingAsync(amount: number): any;

    public forEachAsync(action: (value: T) => boolean, failure?: (err: Error) => void): any;

    public forEachRemainingAsync(action: (value: T) => boolean, failure?: (err: Error) => void): any;

    public forEachRemaining(action: (value: T) => boolean): any;
}
