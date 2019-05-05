export abstract class Permission {
    static CREATE_INSTANT_INVITE: Permission;
    static KICK_MEMBERS: Permission;
    static BAN_MEMBERS: Permission;
    static ADMINISTRATOR: Permission;
    static MANAGE_CHANNEL: Permission;
    static MANAGE_SERVER: Permission;
    static MESSAGE_ADD_REACTION: Permission;
    static VIEW_AUDIT_LOGS: Permission;
    static PRIORITY_SPEAKER: Permission;

    // Applicable to all channel types
    static VIEW_CHANNEL: Permission;

    // Text Permissions
    static MESSAGE_READ: Permission;
    static MESSAGE_WRITE: Permission;
    static MESSAGE_TTS: Permission;
    static MESSAGE_MANAGE: Permission;
    static MESSAGE_EMBED_LINKS: Permission;
    static MESSAGE_ATTACH_FILES: Permission;
    static MESSAGE_HISTORY: Permission;
    static MESSAGE_MENTION_EVERYONE: Permission;
    static MESSAGE_EXT_EMOJI: Permission;

    // Voice Permissions
    static VOICE_CONNECT: Permission;
    static VOICE_SPEAK: Permission;
    static VOICE_MUTE_OTHERS: Permission;
    static VOICE_DEAF_OTHERS: Permission;
    static VOICE_MOVE_OTHERS: Permission;
    static VOICE_USE_VAD: Permission;

    static NICKNAME_CHANGE: Permission;
    static NICKNAME_MANAGE: Permission;

    static MANAGE_ROLES: Permission;
    static MANAGE_PERMISSIONS: Permission;
    static MANAGE_WEBHOOKS: Permission;
    static MANAGE_EMOTES: Permission;

    static UNKNOWN: Permission;

    static EMPTY_PERMISSIONS: Array<Permission>;
    static ALL_PERMISSIONS: Array<Permission>;
    static ALL_CHANNEL_PERMISSIONS: Array<Permission>;
    static ALL_GUILD_PERMISSIONS: Array<Permission>;
    static ALL_TEXT_PERMISSIONS: Array<Permission>;
    static ALL_VOICE_PERMISSIONS: Array<Permission>;

    abstract getName(): string

    abstract getOffset(): number;

    abstract getRawValue(): number;

    abstract isGuild(): boolean;

    abstract isChannel(): boolean;

    abstract isText(): boolean;

    abstract isVoice(): boolean;

    static getFromOffset(offset: number): Permission {
        throw Error;
    }

    static getPermissions(permissions: number): Array<Permission> {
        throw Error;
    }

    static toEnumSet(permissions: number): Array<Permission> {
        throw Error;
    }

    static getRaw(...permissions: Array<Permission>): number {
        throw Error;
    }
}