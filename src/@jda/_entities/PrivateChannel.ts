import { CallableChannel, IFakeable } from './_markers';
import { User } from './User';
import { JDA } from '../_core/JDA';

export interface PrivateChannel extends MessageChannel, CallableChannel, IFakeable {
    getUser(): User;

    getJDA(): JDA;

    // TODO when better rest action
    close(): Promise<void>;
}