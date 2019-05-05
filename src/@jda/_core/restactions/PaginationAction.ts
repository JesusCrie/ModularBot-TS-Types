import { RestActions } from './restactions';

export interface PaginationAction<T, M extends PaginationAction<T, M>> extends RestActions<Array<T>>, Iterable<T> {
    cacheSize(): number;

    isEmpty(): boolean;

    getCached(): Array<T>;

    getLast(): T;

    getFirst(): T;

    limit(limit: number): M;

    cache(enableCache: boolean): M;

    isCacheEnabled(): boolean;

    getMaxLimit(): number;

    getMinLimit(): number;

    getLimit(): number;

    // Complex return type
    takeAsync(amount: number): any;

    // Complex return type
    takeRemainingAsync(amount: number): any;

    iterator(): Iterator<T>;

    forEachAsync(action: (value: T) => boolean, failure?: (err: Error) => void): any;

    forEachRemainingAsync(action: (value: T) => boolean, failure?: (err: Error) => void): any;

    forEachRemaining(action: (value: T) => boolean): any;
}