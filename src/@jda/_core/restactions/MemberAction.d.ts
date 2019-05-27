import { RestAction } from './RestAction';
import { User } from '../../_entities/User';
import { Guild } from '../../_entities/Guild';
import { Role } from '../../_entities/Role';

export declare class MemberAction extends RestAction<void> {

    public getAccessToken(): string;

    public getUserId(): string

    public getUser(): User |null;

    public getGuild(): Guild;

    public setNickname(nick: string|null): this;

    public setRoles(...roles: Array<Role>): this;

    public setMute(mute: boolean): this;

    public setDeafen(deaf: boolean): this;
}
