import { IMentionable, ISnowflake } from './_markers';
import { User } from './User';
import { TextChannel } from './TextChannel';
import { Role } from './Role';
import { Guild } from './Guild';
import { Member } from './Member';
import { ChannelType } from './Channel';
import { MessageChannel } from './MessageChannel';
import { PrivateChannel } from './PrivateChannel';
import { Category } from './Category';
import { JDA } from '../_core/JDA';
import { Icon } from './Icon';

export interface Message extends ISnowflake {
    getMentionedUsers(): Array<User>;

    getMentionedChannels(): Array<TextChannel>;

    getMentionedRoles(): Array<Role>;

    getMentionedMembers(guild?: Guild): Array<Member>;

    getMentions(...types: Array<MentionType>): Array<IMentionable>;

    isMentioned(mentionable: IMentionable, ...types: Array<MentionType>): boolean;

    mentionsEveryone(): boolean;

    isEdited(): boolean;

    getEditedTime(): Date;

    getAuthor(): User;

    getMember(): Member;

    getJumpUrl(): string;

    getContentDisplay(): string;

    getContentRaw(): string;

    getContentStripped(): string;

    getInvites(): Array<string>;

    getNonce(): string;

    isFromType(type: ChannelType): boolean;

    getChannelType(): ChannelType;

    isWebhookMessage(): boolean;

    getChannel(): MessageChannel;

    getPrivateChannel(): PrivateChannel;

    // No client support
    // getGroup(): any;

    getTextChannel(): TextChannel;

    getCategory(): Category;

    getGuild(): Guild;

    getAttachments(): Array<Attachment>;
}

export enum MentionType {
    USER, ROLE, CHANNEL, EMOTE, HERE, EVERYONE
}

export interface Attachment {
    getJDA(): JDA;

    getIdLong(): number;

    getUrl(): string;

    getProxyUrl(): string;

    getFileName(): string;

    getAsIcon(): Icon;

    // TODO type
    download(file: any): boolean;

    // TODO type
    getInputStream(): any;

    // TODO type
    withInputStream(then: (is: any) => void): void;

    // forget about that
    // openConnection(): any;

    getSize(): number;

    getHeight(): number;

    getWidth(): number;

    isImage(): boolean;
}