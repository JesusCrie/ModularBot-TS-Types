import { Event } from './Event';
import { MessageChannel } from '../../_entities/MessageChannel';
import { ChannelType } from '../../_entities/Channel';
import { Guild } from '../../_entities/Guild';
import { TextChannel } from '../../_entities/TextChannel';
import { PrivateChannel } from '../../_entities/PrivateChannel';

export declare abstract class GenericMessageEvent extends Event {

    public getChannel(): MessageChannel;

    public getMessageId(): string;

    public isFromType(type: ChannelType): boolean;

    public getChannelType(): ChannelType;

    public getGuild(): Guild | null;

    public getTextChannel(): TextChannel | null;

    public getPrivateChannel(): PrivateChannel | null;
}
