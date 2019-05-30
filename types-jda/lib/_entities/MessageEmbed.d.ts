import { AccountType } from '../_core/JDA';

export declare class MessageEmbed {
    public getUrl(): string;

    public getTitle(): string;

    public getDescription(): string;

    public getType(): EmbedType;

    public getThumbnail(): Thumbnail;

    // TODO type? who cares
    public getSiteProvider(): any;

    public getAuthor(): AuthorInfo;

    public getVideoInfo(): VideoInfo;

    public getFooter(): Footer;

    public getImage(): ImageInfo;

    public getFields(): Array<MessageEmbedField>;

    // Not supported
    // getColor(): any;

    public getColorRaw(): number;

    public getTimestamp(): Date;

    public isEmpty(): boolean;

    public getLength(): number;

    public isSendable(type: AccountType): boolean;
}

export declare enum EmbedType {
    IMAGE, VIDEO, LINK, RICH, UNKNOWN
}

export declare class Thumbnail {
    public getUrl(): string;

    public getProxyUrl(): string;

    public getWidth(): number;

    public getHeight(): number;
}

export declare class AuthorInfo {
    public getName(): string | null;

    public getUrl(): string | null;

    public getIconUrl(): string | null;

    public getProxyIconUrl(): string | null;
}

export declare class VideoInfo {
    public getUrl(): string;

    public getWidth(): number;

    public getHeight(): number;
}

export declare class Footer {
    public getText(): string | number;

    public getIconUrl(): string | number;

    public getProxyIconUrl(): string | number;
}

export declare class ImageInfo {
    public getUrl(): string;

    public getProxyUrl(): string;

    public getWidth(): number;

    public getHeight(): number;
}

export declare class MessageEmbedField {

    public constructor(name: string | null, value: string | null, inline: boolean);

    public getName(): string;

    public getValue(): string;

    public isInline(): boolean;
}
