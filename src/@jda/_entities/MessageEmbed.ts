import { AccountType } from '../_core/JDA';

export interface MessageEmbed {
    getUrl(): string;

    getTitle(): string;

    getDescription(): string;

    getType(): EmbedType;

    getThumbnail(): Thumbnail;

    // TODO type? who cares
    getSiteProvider(): any;

    getAuthor(): AuthorInfo;

    getVideoInfo(): VideoInfo;

    getFooter(): Footer;

    getImage(): ImageInfo;

    getFields(): Array<Field>;

    // Not supported
    // getColor(): any;

    getColorRaw(): number;

    getTimestamp(): Date;

    isEmpty(): boolean;

    getLength(): number;

    isSendable(type: AccountType): boolean;
}

export enum EmbedType {
    IMAGE, VIDEO, LINK, RICH, UNKNOWN
}

export interface Thumbnail {
    getUrl(): string;

    getProxyUrl(): string;

    getWidth(): number;

    getHeight(): number;
}

export interface AuthorInfo {
    getName(): string | null;

    getUrl(): string | null;

    getIconUrl(): string | null;

    getProxyIconUrl(): string | null;
}

export interface VideoInfo {
    getUrl(): string;

    getWidth(): number;

    getHeight(): number;
}

export interface Footer {

    getText(): string | number;

    getIconUrl(): string | number;

    getProxyIconUrl(): string | number;
}

export interface ImageInfo {
    getUrl(): string;

    getProxyUrl(): string;

    getWidth(): number;

    getHeight(): number;
}

export interface Field {
    getName(): string;

    getValue(): string;

    isInline(): boolean;
}