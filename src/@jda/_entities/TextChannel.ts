import { Channel } from './Channel';
import { MessageChannel } from './MessageChannel';
import { IMentionable } from './_markers';
import { Message } from './Message';
import { User } from './User';
import { Emote } from './Emote';
import { Member } from './Member';

// @ts-ignore
export interface TextChannel extends Channel, MessageChannel, IMentionable {
    getTopic(): string;

    isNSFW(): boolean;

    getSlowmode(): number;

    // TODO type
    // TODO when better rest action
    getWebhooks(): Promise<Array<any>>;

    // TODO type
    // TODO when better rest action
    createWebhook(): Promise<any>;

    // TODO when better rest action
    deleteMessages(...messages: Array<Message>): Promise<void>;

    // TODO when better rest action
    deleteMessagesByIds(...messages: Array<string>): Promise<void>;

    // TODO when better rest action
    deleteWebhookById(id: string): Promise<void>;

    // TODO when better rest action
    clearReactionsById(messageId: string): Promise<void>;

    // TODO when better rest action
    removeReactionById(messageId: string, emote: Emote | string, user: User): Promise<void>;

    canTalk(member?: Member): boolean;
}
