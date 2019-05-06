import { Category } from '../../_entities/Category';
import { IPermissionHolder } from '../../_entities/_markers';
import { Permission } from '../Permission';
import { AuditableRestAction } from './restactions';
import { Channel } from '../../_entities/Channel';

export interface ChannelAction extends AuditableRestAction<Channel> {
    setName(name: string): this;

    setParent(category: Category): this;

    setPosition(position: number): this;

    setTopic(topic: string): this;

    setNSFW(nsfw: boolean): this;

    setSlowmode(slowmode: number): this;

    addPermissionOverride(target: IPermissionHolder, allow: number | Array<Permission>, deny: number | Array<Permission>): this;

    setBitrate(bitrate: number): this;

    setUserlimit(userLimit: number): this;
}