import { RestActions } from './restactions';
import { Message } from '../../_entities/Message';
import { MessageEmbed } from '../../_entities/MessageEmbed';
import { PaginationAction } from './PaginationAction';
import { ChannelType } from '../../_entities/Channel';
import { MessageChannel } from '../../_entities/MessageChannel';

export interface MessageAction extends RestActions<Message> {
    isEmpty(): boolean;

    isEdit(): boolean;

    apply(message: Message): this;

    tts(isTTS: boolean): this;

    reset(): this;

    nonce(nonce: string): this;

    content(content: string): this;

    embed(embed: MessageEmbed): this;

    append(csq: string, start?: number, end?: number): this;

    appendFormat(format: string, ...args: Array<any>): this;

    // TODO type IS/byte[]/File
    addFile(file: any, name: string): this;

    // TODO type
    clearFiles(finalizer: ((name: string, is: any) => void) | ((is: any) => void)): this;

    override(bool: boolean): this;
}

export interface MessagePaginationAction extends PaginationAction<Message, MessagePaginationAction> {
    getType(): ChannelType;

    getChannel(): MessageChannel;
}