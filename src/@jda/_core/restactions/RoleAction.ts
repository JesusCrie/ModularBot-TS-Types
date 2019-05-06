import { AuditableRestAction } from './restactions';
import { Role } from '../../_entities/Role';
import { Permission } from '../Permission';

export interface RoleAction extends AuditableRestAction<Role> {
    setName(name: string): this;

    setHoisted(hoisted: boolean): this;

    setMentionable(mentionable: boolean): this;

    setColor(color: number): this;

    setPermissions(...permissions: Array<Permission>): this;

    setPermissions(permissions: number): this;
}