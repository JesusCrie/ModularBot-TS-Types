import { Channel } from './Channel';
import { TextChannel } from './TextChannel';
import { VoiceChannel } from './VoiceChannel';

export interface Category extends Channel {
    getChannels(): Array<Channel>;

    getTextChannels(): Array<TextChannel>;

    getVoiceChannels(): Array<VoiceChannel>;

    // TODO better rest action
    createTextChannel(): Promise<TextChannel>;

    // TODO better rest action
    createVoiceChannel(): Promise<VoiceChannel>;

    // TODO type
    modifyTextChannelPositions(): any;

    // TODO type
    modifyVoiceChannelPositions(): any;
}