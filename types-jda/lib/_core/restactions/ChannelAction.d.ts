import { Category } from '../../_entities/Category';
import { IPermissionHolder } from '../../_entities/_markers';
import { Permission } from '../Permission';
import { AuditableRestAction } from './RestAction';
import { Channel } from '../../_entities/Channel';

export declare class ChannelAction extends AuditableRestAction<Channel> {
    public setName(name: string): this;

    public setParent(category: Category): this;

    public setPosition(position: number): this;

    public setTopic(topic: string): this;

    public setNSFW(nsfw: boolean): this;

    public setSlowmode(slowmode: number): this;

    public addPermissionOverride(target: IPermissionHolder, allow: number | Array<Permission> | null, deny: number | Array<Permission> | null): this;

    public setBitrate(bitrate: number | null): this;

    public setUserlimit(userLimit: number | null): this;
}
