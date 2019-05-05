import { ISnowflake } from './_markers';
import { ChannelType } from './Channel';
import { JDA } from '../_core/JDA';
import { Emote } from './Emote';
import { Message } from './Message';
import { MessageEmbed } from './MessageEmbed';

export interface MessageChannel extends ISnowflake {
    getLatestMessageId(): string;

    // TODO when better rest action
    purgeMessagesById(...messageIds: Array<string>): Array<Promise<void>>;

    // TODO when better rest action
    purgeMessages(...messages: Array<Message>): Array<Promise<void>>;

    hasLatestMessage(): boolean;

    getName(): string;

    getType(): ChannelType;

    getJDA(): JDA;

    // TODO when better rest action
    sendMessage(text: string): Promise<Message>;

    // TODO when better rest action
    sendMessageFormat(text: string, ...args: Array<any>): Promise<Message>;

    // TODO when better rest action
    sendMessage(msg: MessageEmbed | Message): Promise<Message>;

    // TODO type
    // TODO when better rest action
    sendFile(file: any, fileName?: string, message?: Message): Promise<Message>;

    // TODO when better rest action
    getMessageById(messageId: string): Promise<Message>;

    // TODO when better rest action
    deleteMessageById(messageId: string): Promise<void>;

    // TODO type
    getHistory(): any;

    // TODO type
    getIterableHistory(): any;

    // TODO type
    // TODO when better rest action
    getHistoryAround(message: Message | string, limit: number): Promise<any>;

    // TODO type
    // TODO when better rest action
    getHistoryAfter(message: Message | string, limit: number): Promise<any>;

    // TODO type
    // TODO when better rest action
    getHistoryBefore(message: Message | string, limit: number): Promise<any>;

    // TODO when better rest action
    sendTyping(): Promise<void>;

    // TODO when better rest action
    addReactionById(messageId: string, emote: Emote | string): Promise<void>;

    // TODO when better rest action
    removeReactionById(messageId: string, emote: Emote | string): Promise<void>;

    // TODO when better rest action
    pinMessageById(messageId: string): Promise<void>;

    // TODO when better rest action
    unpinMessageById(messageId: string): Promise<void>;

    // TODO when better rest action
    getPinnedMessages(): Promise<Array<Message>>;

    // TODO when better rest action
    editMessageById(messageId: string, message: MessageEmbed | Message | string): Promise<Message>;

    // TODO when better rest action
    editMessageFormatById(messageId: string, message: string, ...args: Array<any>): Promise<Message>;


}