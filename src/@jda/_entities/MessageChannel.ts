import { ISnowflake } from './_markers';
import { ChannelType } from './Channel';
import { JDA } from '../_core/JDA';
import { Emote } from './Emote';
import { Message } from './Message';
import { MessageEmbed } from './MessageEmbed';
import { AuditableRestAction, RestAction } from '../_core/restactions/restactions';
import { MessageAction } from '../_core/restactions/MessageAction';
import { MessageRetrieveAction } from './MessageHistory';

export interface MessageChannel extends ISnowflake {
    getLatestMessageId(): string;

    purgeMessagesById(...messageIds: Array<string>): Array<RestAction<void>>;

    purgeMessages(...messages: Array<Message>): Array<RestAction<void>>;

    hasLatestMessage(): boolean;

    getName(): string;

    getType(): ChannelType;

    getJDA(): JDA;

    sendMessage(text: string): MessageAction;

    sendMessageFormat(text: string, ...args: Array<any>): MessageAction;

    sendMessage(msg: MessageEmbed | Message): MessageAction;

    // TODO type
    sendFile(file: any, fileName?: string, message?: Message): MessageAction;

    getMessageById(messageId: string): RestAction<Message>;

    deleteMessageById(messageId: string): AuditableRestAction<void>;

    // TODO type
    getHistory(): any;

    // TODO type
    getIterableHistory(): any;

    // TODO type
    getHistoryAround(message: Message | string, limit: number): MessageRetrieveAction;

    // TODO type
    getHistoryAfter(message: Message | string, limit: number): MessageRetrieveAction;

    // TODO type
    getHistoryBefore(message: Message | string, limit: number): MessageRetrieveAction;

    sendTyping(): RestAction<void>;

    addReactionById(messageId: string, emote: Emote | string): RestAction<void>;

    removeReactionById(messageId: string, emote: Emote | string): RestAction<void>;

    pinMessageById(messageId: string): RestAction<void>;

    unpinMessageById(messageId: string): RestAction<void>;

    getPinnedMessages(): RestAction<Array<Message>>;

    editMessageById(messageId: string, message: MessageEmbed | Message | string): MessageAction;

    editMessageFormatById(messageId: string, message: string, ...args: Array<any>): MessageAction;


}