import { Java } from '../../graal-compatibility';

let _Region = Java.type('net.dv8tion.jda.core.Region');

export abstract class Region {
    static AMSTERDAM: Region = _Region.AMSTERDAM;
    static BRAZIL: Region = _Region.BRAZIL;
    static EU_CENTRAL: Region = _Region.EU_CENTRAL;
    static EU_WEST: Region = _Region.EU_WEST;
    static FRANKFURT: Region = _Region.FRANKFURT;
    static HONG_KONG: Region = _Region.HONG_KONG;
    static JAPAN: Region = _Region.JAPAN;
    static LONDON: Region = _Region.LONDON;
    static RUSSIA: Region = _Region.RUSSIA;
    static SINGAPORE: Region = _Region.SINGAPORE;
    static SOUTH_AFRICA: Region = _Region.SOUTH_AFRICA;
    static US_CENTRAL: Region = _Region.US_CENTRAL;
    static US_EAST: Region = _Region.US_EAST;
    static US_SOUTH: Region = _Region.US_SOUTH;
    static US_WEST: Region = _Region.US_WEST;
    static VIP_AMSTERDAM: Region = _Region.VIP_AMSTERDAM;
    static VIP_BRAZIL: Region = _Region.VIP_BRAZIL;
    static VIP_EU_CENTRAL: Region = _Region.VIP_EU_CENTRAL;
    static VIP_EU_WEST: Region = _Region.VIP_EU_WEST;
    static VIP_FRANKFURT: Region = _Region.VIP_FRANKFURT;
    static VIP_JAPAN: Region = _Region.VIP_JAPAN;
    static VIP_LONDON: Region = _Region.VIP_LONDON;
    static VIP_SINGAPORE: Region = _Region.VIP_SINGAPORE;
    static VIP_SOUTH_AFRICA: Region = _Region.VIP_SOUTH_AFRICA;
    static VIP_SYDNEY: Region = _Region.VIP_SYDNEY;
    static VIP_US_CENTRAL: Region = _Region.VIP_US_CENTRAL;
    static VIP_US_EAST: Region = _Region.VIP_US_EAST;
    static VIP_US_SOUTH: Region = _Region.VIP_US_SOUTH;
    static VIP_US_WEST: Region = _Region.VIP_US_WEST;
    static UNKNOWN: Region = _Region.UNKNOWN;

    abstract getName(): string;

    abstract getKey(): string;

    abstract getEmoji(): string;

    abstract isVip(): boolean;
}