import { AuditableRestAction } from './RestAction';
import { Invite } from '../../_entities/Invite';

export declare class InviteAction extends AuditableRestAction<Invite> {

    public setMaxAge(maxAge: number | null): this;

    public setMaxUses(maxUses: number | null): this;

    public setTemporary(temporary: boolean | null): this;

    public setUnique(unique: boolean | null): this;
}
