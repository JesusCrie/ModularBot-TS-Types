import { RestAction } from './RestAction';
import { Region } from '../Region';
import { Icon } from '../../_entities/Icon';
import { ExplicitContentLevel, NotificationLevel, VerificationLevel } from '../../_entities/Guild';
import { Permission } from '../Permission';
import { ChannelType } from '../../_entities/Channel';

export declare class GuildAction extends RestAction<void> {
    public setRegion(region: Region): this;

    public setIcon(icon: Icon): this;

    public setName(name: string): this;

    public setVerificationLevel(level: VerificationLevel): this;

    public setNotificationLevel(level: NotificationLevel): this;

    public setExplicitContentLevel(level: ExplicitContentLevel): this;

    public addChannel(channel: ChannelData): this;

    public getChannel(index: number): ChannelData;

    public removeChannel(index: number): ChannelData;

    public removeChannel(data: ChannelData): this;

    public newChannel(type: ChannelType, name: string): this;

    public getPublicRole(): RoleData;

    public getRole(index: number): RoleData;

    public newRole(): RoleData;
}

export declare class ChannelData {
    public setTopic(topic: string): this;

    public setNSFW(nsfw: boolean): this;

    public setBitrate(bitrate: number): this;

    public setUserLimit(userLimit: number): this;

    public setPosition(position: number): this;

    public addPermissionOverride(role: RoleData, allow: number | Array<Permission> | null, deny: number | Array<Permission> | null): this;
}

export declare class RoleData {
    public setPermissionsRaw(rawPermissions: number): this;

    public addPermissions(...permissions: Array<Permission>): this;

    public setName(name: string): this;

    public setColor(color: number): this;

    public setPosition(position: number): this;

    public setMentionable(mentionable: boolean): this;

    public setHoisted(hoisted: boolean): this;
}
