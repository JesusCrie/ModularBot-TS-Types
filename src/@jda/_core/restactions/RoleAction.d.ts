import { AuditableRestAction } from './RestAction';
import { Role } from '../../_entities/Role';
import { Permission } from '../Permission';

export declare class RoleAction extends AuditableRestAction<Role> {
    public setName(name: string): this;

    public setHoisted(hoisted: boolean): this;

    public setMentionable(mentionable: boolean): this;

    public setColor(color: number | null): this;

    public setPermissions(...permissions: Array<Permission>): this;

    public setPermissions(permissions: number): this;
}
