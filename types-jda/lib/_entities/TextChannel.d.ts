import { Channel } from './Channel';
import { MessageChannel } from './MessageChannel';
import { IMentionable } from './_markers';
import { Message } from './Message';
import { Member } from './Member';
import { AuditableRestAction, RestAction } from '../_core/restactions/RestAction';
import { User } from './User';
import { Emote } from './Emote';

export declare interface TextChannel extends Channel, MessageChannel, IMentionable {
    getTopic(): string;

    isNSFW(): boolean;

    getSlowmode(): number;

    // TODO type
    getWebhooks(): RestAction<Array<any>>;

    // TODO type
    createWebhook(): RestAction<any>;

    deleteMessages(...messages: Array<Message>): RestAction<void>;

    deleteMessagesByIds(...messages: Array<string>): RestAction<void>;

    deleteWebhookById(id: string): AuditableRestAction<void>;

    clearReactionsById(messageId: string): RestAction<void>;

    removeReactionById(messageId: string, emote: Emote | string, user?: User): RestAction<void>;

    canTalk(member?: Member): boolean;
}
