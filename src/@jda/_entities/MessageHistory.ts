import { JDA } from '../_core/JDA';
import { MessageChannel } from './MessageChannel';
import { RestActions } from '../_core/restactions/restactions';
import { Message } from './Message';

export interface MessageHistory {
    getJDA(): JDA;

    size(): number;

    isEmpty(): boolean;

    getChannel(): MessageChannel;

    retrievePast(amount: number): RestActions<Array<Message>>;

    retrieveFuture(amount: number): RestActions<Array<Message>>;

    getRetrievedHistory(): Array<Message>;

    getMessageById(id: number): Message;

    getHistoryAfter(channel: MessageChannel, messageId: number): MessageRetrieveAction;

    getHistoryBefore(channel: MessageChannel, messageId: number): MessageRetrieveAction;

    getHistoryAround(channel: MessageChannel, messageId: number): MessageRetrieveAction;
}

export interface MessageRetrieveAction extends RestActions<MessageHistory> {
    limit(limit: number): this;
}
