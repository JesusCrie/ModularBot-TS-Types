import { JDA } from '../JDA';
import { TimeUnit } from '../../../TimeUnit';

export declare abstract class RestAction<T> {
    public getJDA(): JDA;

    public setCheck(checks: () => boolean): this;

    public queue(): void;

    public queue(success: ((obj: T) => void) | null, failure?: ((err: Error) => void) | null): void;

    // Do not use
    public submit(shouldQueue?: boolean): any;

    public complete(shouldQueue?: boolean): T;

    public completeAfter(delay: number, unit: TimeUnit): T;

    // Complex return type
    public queueAfter(delay: number, unit: TimeUnit, success?: ((val: T) => void) | null, failure?: ((err: Error) => void) | null): any;
}

export declare abstract class AuditableRestAction<T> extends RestAction<T> {
    public reason(reason: string): this;
}
