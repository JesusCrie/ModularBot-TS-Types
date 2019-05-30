import { MessageEmbed, MessageEmbedField } from '../_entities/MessageEmbed';
// @ts-ignore
import { StringBuilder } from '@modularbot/types-graal';

export declare class EmbedBuilder {

    public static ZERO_WIDTH_SPACE: string;
    public static URL_PATTERN: any; // TODO java regex

    public constructor(builder?: EmbedBuilder);
    public constructor(embed?: MessageEmbed);

    public build(): MessageEmbed;

    public clear(): this;

    public isEmpty(): boolean;

    public length(): number;

    public isValidLength(): boolean;

    public setTitle(title: string | null, url?: string): this;

    public getDescriptionBuilder(): StringBuilder;

    public setDescription(description: string | null): this;

    public appendDescription(description: string): this

    // TODO type
    // TODO java time
    public setTimestamp(temporal: any | null): this;

    public setColor(color: number | null): this;

    public setThumbnail(url: string): this;

    public setImage(url: string | null): this;

    public setAuthor(name: string | null, url?: string | null, iconUrl?: string | null): this;

    public setFooter(text: string | null, iconUrl: string | null): this;

    public addField(field: MessageEmbedField): this;

    public addField(name: string | null, value: string | null, inline: boolean): this;

    public addBlankField(inline: boolean): this;

    public clearFields(): this;

    public getFields(): Array<MessageEmbedField>;
}
