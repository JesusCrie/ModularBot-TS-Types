import { CallableChannel, ISnowflake } from './_markers';
import { PrivateChannel } from './PrivateChannel';
import { User } from './User';
import { Region } from '../_core/Region';

export interface AudioChannel extends ISnowflake {

}

export interface Call extends AudioChannel {
    getRegion(): Region;

    isGroupCall(): boolean;

    getCallableChannel(): CallableChannel;

    // No client feature
    // getGroup(): any;

    getPrivateChannel(): PrivateChannel;

    getMessageId(): string;

    getRingingUsers(): Array<CallUser>;

    getConnectedUsers(): Array<CallUser>;

    getCallUserHistory(): Array<CallUser>;

    getAllCallUsers(): Array<CallUser>;
}

export interface CallUser {
    getUser(): User;

    getCall(): Call;

    // TODO type
    getVoiceState(): any;

    isRinging(): boolean;
}