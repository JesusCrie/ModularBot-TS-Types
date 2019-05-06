import { JDA } from '../JDA';
import { TimeUnit } from '../../../TimeUnit';

export interface RestAction<T> {
    getJDA(): JDA;

    setCheck(checks: () => boolean): this;

    queue(): void;

    queue(success: (obj: T) => void, failure?: (err: Error) => void): void;

    // Do not use
    submit(shouldQueue?: boolean): any;

    complete(shouldQueue?: boolean): T;

    completeAfter(delay: number, unit: TimeUnit): T;

    // Complex return type
    queueAfter(delay: number, unit: TimeUnit, success?: (val: T) => void, failure?: (err: Error) => void): any;
}

export interface AuditableRestAction<T> extends RestAction<T> {
    reason(reason: string): this;
}