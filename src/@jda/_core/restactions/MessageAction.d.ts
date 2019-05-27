import { RestAction } from './RestAction';
import { Message } from '../../_entities/Message';
import { MessageEmbed } from '../../_entities/MessageEmbed';
import { PaginationAction } from './PaginationAction';
import { ChannelType } from '../../_entities/Channel';
import { MessageChannel } from '../../_entities/MessageChannel';

export declare class MessageAction extends RestAction<Message> {
    public isEmpty(): boolean;

    public isEdit(): boolean;

    public apply(message: Message | null): this;

    public tts(isTTS: boolean): this;

    public reset(): this;

    public nonce(nonce: string | null): this;

    public content(content: string | null): this;

    public embed(embed: MessageEmbed | null): this;

    public append(csq: string | null, start?: number, end?: number): this;

    public appendFormat(format: string, ...args: Array<any>): this;

    // TODO type IS/byte[]/File
    public addFile(file: any, name: string): this;

    // TODO type
    public clearFiles(finalizer: ((name: string, is: any) => void) | ((is: any) => void)): this;

    public override(bool: boolean): this;
}

export declare class MessagePaginationAction extends PaginationAction<Message, MessagePaginationAction> {
    public getType(): ChannelType;

    public getChannel(): MessageChannel;
}
