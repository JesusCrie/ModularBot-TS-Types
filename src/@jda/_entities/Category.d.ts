import { Channel } from './Channel';
import { TextChannel } from './TextChannel';
import { VoiceChannel } from './VoiceChannel';
import { RestAction } from '../_core/restactions/RestAction';
import { CategoryOrderAction } from '../_core/restactions/ChannelOrderAction';

export declare interface Category extends Channel {
    getChannels(): Array<Channel>;

    getTextChannels(): Array<TextChannel>;

    getVoiceChannels(): Array<VoiceChannel>;

    createTextChannel(): RestAction<TextChannel>;

    createVoiceChannel(): RestAction<VoiceChannel>;

    modifyTextChannelPositions(): CategoryOrderAction<Category>;

    modifyVoiceChannelPositions(): CategoryOrderAction<VoiceChannel>;
}
