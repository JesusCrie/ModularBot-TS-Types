import { IFakeable, IMentionable, ISnowflake } from './_markers';
import { Guild } from './Guild';
import { JDA } from '../_core/JDA';
import { PrivateChannel } from './PrivateChannel';
import { RestAction } from '../_core/restactions/RestAction';

export declare interface User extends ISnowflake, IMentionable, IFakeable {
    getName(): string;

    getDiscriminator(): string;

    getAvatarId(): string;

    getAvatarUrl(): string;

    getDefaultAvatarId(): string;

    getDefaultAvatarUrl(): string;

    getEffectiveAvatarUrl(): string;

    getAsTag(): string;

    hasPrivateChannel(): boolean;

    openPrivateChannel(): RestAction<PrivateChannel>;

    getMutualGuilds(): Array<Guild>;

    isBot(): boolean;

    getJDA(): JDA;
}
