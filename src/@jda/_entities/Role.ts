import { IMentionable, IPermissionHolder, ISnowflake } from './_markers';
import { Guild } from './Guild';
import { JDA } from '../_core/JDA';

export interface Role extends ISnowflake, IMentionable, IPermissionHolder {
    getPosition(): number;

    getPositionRaw(): number;

    getName(): string;

    isManaged(): boolean;

    isHoisted(): boolean;

    isMentionable(): boolean;

    getPermissionsRaw(): number;

    // Not supported
    // getColor(): any;

    getColorRaw(): number;

    isPublicRole(): boolean;

    canInteract(role: Role): boolean;

    getGuild(): Guild;

    // TODO when better rest action
    createCopy(guild?: Guild): Promise<Role>;

    // TODO type
    getManager(): any;

    // TODO when better rest action
    delete(): Promise<void>;

    getJDA(): JDA;
}