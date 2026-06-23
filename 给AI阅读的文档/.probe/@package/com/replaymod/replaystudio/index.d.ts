import { $Packet } from "@package/com/replaymod/replaystudio/protocol";
import { $Cloneable } from "@package/java/lang";
export * as protocol from "@package/com/replaymod/replaystudio/protocol";
export * as data from "@package/com/replaymod/replaystudio/data";
export * as stream from "@package/com/replaymod/replaystudio/stream";
export * as lib from "@package/com/replaymod/replaystudio/lib";
export * as util from "@package/com/replaymod/replaystudio/util";
export * as io from "@package/com/replaymod/replaystudio/io";
export * as pathing from "@package/com/replaymod/replaystudio/pathing";
export * as replay from "@package/com/replaymod/replaystudio/replay";

declare module "@package/com/replaymod/replaystudio" {
    export class $PacketData implements $Cloneable {
        copy(): $PacketData;
        release(): boolean;
        getTime(): number;
        retain(): $PacketData;
        getPacket(): $Packet;
        constructor(time: number, packet: $Packet);
        get time(): number;
        get packet(): $Packet;
    }
}
