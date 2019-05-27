import { Channel } from './Channel';
import { AudioChannel } from './Call';

export declare interface VoiceChannel extends Channel, AudioChannel {
    getUserLimit(): number;

    getBitrate(): number;
}
