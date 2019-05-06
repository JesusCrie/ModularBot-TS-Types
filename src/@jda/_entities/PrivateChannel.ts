import { CallableChannel, IFakeable } from './_markers';
import { User } from './User';
import { JDA } from '../_core/JDA';
import { RestAction } from '../_core/restactions/restactions';

export interface PrivateChannel extends MessageChannel, CallableChannel, IFakeable {
    getUser(): User;

    getJDA(): JDA;

    close(): RestAction<void>;
}