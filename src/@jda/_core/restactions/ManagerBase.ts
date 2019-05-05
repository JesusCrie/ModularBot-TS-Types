import { AuditableRestAction } from './restactions';

export interface ManagerBase extends AuditableRestAction<void> {
    reset(...fields: Array<number>): this;
}
