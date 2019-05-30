import { GenericMessageEvent } from './GenericMessageEvent';
import { Member, Message, User } from '../../entities';

export declare class MessageReceivedEvent extends GenericMessageEvent {

    public getMessage(): Message;

    public getAuthor(): User;

    public getMember(): Member | null;

    public isWebhookMessage(): boolean;
}
