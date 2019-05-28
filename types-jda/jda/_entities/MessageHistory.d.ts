import { JDA } from '../_core/JDA';
import { MessageChannel } from './MessageChannel';
import { RestAction } from '../_core/restactions/RestAction';
import { Message } from './Message';

export declare class MessageHistory {
    public getJDA(): JDA;

    public size(): number;

    public isEmpty(): boolean;

    public getChannel(): MessageChannel;

    public retrievePast(amount: number): RestAction<Array<Message>>;

    public retrieveFuture(amount: number): RestAction<Array<Message>>;

    public getRetrievedHistory(): Array<Message>;

    public getMessageById(id: number): Message;

    public getHistoryAfter(channel: MessageChannel, messageId: number): MessageRetrieveAction;

    public getHistoryBefore(channel: MessageChannel, messageId: number): MessageRetrieveAction;

    public getHistoryAround(channel: MessageChannel, messageId: number): MessageRetrieveAction;
}

export declare class MessageRetrieveAction extends RestAction<MessageHistory> {
    public limit(limit: number): this;
}
