import { Channel } from './Channel';
import { TextChannel } from './TextChannel';
import { VoiceChannel } from './VoiceChannel';
import { RestAction } from '../_core/restactions/restactions';

export interface Category extends Channel {
    getChannels(): Array<Channel>;

    getTextChannels(): Array<TextChannel>;

    getVoiceChannels(): Array<VoiceChannel>;

    createTextChannel(): RestAction<TextChannel>;

    createVoiceChannel(): RestAction<VoiceChannel>;

    // TODO type
    modifyTextChannelPositions(): any;

    // TODO type
    modifyVoiceChannelPositions(): any;
}