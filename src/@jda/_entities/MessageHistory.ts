import { JDA } from '../_core/JDA';
import { MessageChannel } from './MessageChannel';
import { RestAction } from '../_core/restactions/restactions';
import { Message } from './Message';

export interface MessageHistory {
    getJDA(): JDA;

    size(): number;

    isEmpty(): boolean;

    getChannel(): MessageChannel;

    retrievePast(amount: number): RestAction<Array<Message>>;

    retrieveFuture(amount: number): RestAction<Array<Message>>;

    getRetrievedHistory(): Array<Message>;

    getMessageById(id: number): Message;

    getHistoryAfter(channel: MessageChannel, messageId: number): MessageRetrieveAction;

    getHistoryBefore(channel: MessageChannel, messageId: number): MessageRetrieveAction;

    getHistoryAround(channel: MessageChannel, messageId: number): MessageRetrieveAction;
}

export interface MessageRetrieveAction extends RestAction<MessageHistory> {
    limit(limit: number): this;
}
