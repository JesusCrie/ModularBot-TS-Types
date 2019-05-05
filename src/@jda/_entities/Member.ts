import { IMentionable, IPermissionHolder } from './_markers';
import { User } from './User';
import { JDA } from '../_core/JDA';
import { Game } from './Game';
import { OnlineStatus } from '../_core/Presence';
import { Role } from './Role';
import { Emote } from './Emote';
import { TextChannel } from './TextChannel';

export interface Member extends IMentionable, IPermissionHolder {
    getUser(): User;

    getJDA(): JDA;

    getJoinDate(): Date;

    // TODO type
    getVoiceState(): any;

    getGame(): Game;

    getOnlineStatus(): OnlineStatus;

    getNickname(): string;

    getEffectiveName(): string;

    getRoles(): Array<Role>;

    // No equivalent
    // getColor(): any;

    getColorRaw(): number;

    canInteract(entity: Member | Role | Emote): boolean;

    isOwner(): boolean;

    getDefaultChannel(): TextChannel | null;
}