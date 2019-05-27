import { AuditableRestAction } from './RestAction';
import { PermissionOverride } from '../../_entities/PermissionOverride';
import { Permission } from '../Permission';

export declare class PermissionOverrideAction extends AuditableRestAction<PermissionOverride> {

    public getAllow(): number;

    public getAllowedPermissions(): Array<Permission>;

    public getDeny(): number;

    public getDeniedPermissions(): Array<Permission>;

    public getInherited(): number;

    public getInheritedPermissions(): Array<Permission>;

    public isMember(): boolean;

    public isRole(): boolean;

    public setAllow(allowBits: number): this;

    public setAllow(...permissions: Array<Permission>): this;

    public setDeny(denyBits: number): this;

    public setDeny(...permissions: Array<Permission>): this;

    public setPermissions(allowBits: number, denyBits: number): this;

    public setPermissions(grantPermissions: Array<Permission> | null, denyPermissions: Array<Permission> | null): this;
}
