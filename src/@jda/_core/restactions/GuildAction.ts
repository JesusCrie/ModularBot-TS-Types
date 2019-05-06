import { RestAction } from './restactions';
import { Region } from '../Region';
import { Icon } from '../../_entities/Icon';
import { ExplicitContentLevel, NotificationLevel, VerificationLevel } from '../../_entities/Guild';
import { Permission } from '../Permission';
import { ChannelType } from '../../_entities/Channel';

export interface GuildAction extends RestAction<void> {
    setRegion(region: Region): this;

    setIcon(icon: Icon): this;

    setName(name: string): this;

    setVerificationLevel(level: VerificationLevel): this;

    setNotificationLevel(level: NotificationLevel): this;

    setExplicitContentLevel(level: ExplicitContentLevel): this;

    addChannel(channel: ChannelData): this;

    getChannel(index: number): ChannelData;

    removeChannel(index: number): ChannelData;

    removeChannel(data: ChannelData): this;

    newChannel(type: ChannelType, name: string): this;

    getPublicRole(): RoleData;

    getRole(index: number): RoleData;

    newRole(): RoleData;
}

export interface ChannelData {
    setTopic(topic: string): this;

    setNSFW(nsfw: boolean): this;

    setBitrate(bitrate: number): this;

    setUserLimit(userLimit: number): this;

    setPosition(position: number): this;

    addPermissionOverride(role: RoleData, allow: number | Array<Permission> | null, deny: number | Array<Permission> | null): this;
}

export interface RoleData {
    setPermissionsRaw(rawPermissions: number): this;

    addPermissions(...permissions: Array<Permission>): this;

    setName(name: string): this;

    setColor(color: number): this;

    setPosition(position: number): this;

    setMentionable(mentionable: boolean): this;

    setHoisted(hoisted: boolean): this;
}