import { AuditableRestAction } from './RestAction';

export declare abstract class ManagerBase extends AuditableRestAction<void> {
    public reset(...fields: Array<number>): this;
}
