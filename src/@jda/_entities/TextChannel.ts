import { Channel } from './Channel';
import { MessageChannel } from './MessageChannel';
import { IMentionable } from './_markers';
import { Message } from './Message';
import { User } from './User';
import { Emote } from './Emote';
import { Member } from './Member';
import { AuditableRestAction, RestAction } from '../_core/restactions/restactions';

// @ts-ignore
export interface TextChannel extends Channel, MessageChannel, IMentionable {
    getTopic(): string;

    isNSFW(): boolean;

    getSlowmode(): number;

    // TODO type
    getWebhooks(): RestAction<Array<any>>;

    // TODO type
    // TODO when better rest action
    createWebhook(): Promise<any>;

    deleteMessages(...messages: Array<Message>): RestAction<void>;

    deleteMessagesByIds(...messages: Array<string>): RestAction<void>;

    deleteWebhookById(id: string): AuditableRestAction<void>;

    clearReactionsById(messageId: string): RestAction<void>;

    // TODO when better rest action
    // tsc is not good with that one
    // removeReactionById(messageId: string, emote: Emote | string, user: User): Promise<void>;

    canTalk(member?: Member): boolean;
}
