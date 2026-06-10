import { $InputStream, $OutputStream } from "@package/java/io";
import { $PacketTypeRegistry, $Packet } from "@package/com/replaymod/replaystudio/protocol";
import { $ReplayMetaData } from "@package/com/replaymod/replaystudio/replay";
import { $PacketStream } from "@package/com/replaymod/replaystudio/stream";
import { $PacketData } from "@package/com/replaymod/replaystudio";
import { $ProtocolVersion } from "@package/com/replaymod/replaystudio/lib/viaversion/api/protocol/version";

declare module "@package/com/replaymod/replaystudio/io" {
    export class $ReplayInputStream extends $InputStream {
        getRegistry(): $PacketTypeRegistry;
        readPacket(): $PacketData;
        asPacketStream(): $PacketStream;
        constructor(registry: $PacketTypeRegistry, arg1: $InputStream, fileFormatVersion: number, fileProtocol: number);
        get registry(): $PacketTypeRegistry;
    }
    export class $ReplayOutputStream extends $OutputStream {
        write(time: number, packet: $Packet): void;
        write(data: $PacketData): void;
        nextEntry(name: string): void;
        constructor(out: $OutputStream);
        constructor(version: $ProtocolVersion, out: $OutputStream, metaData: $ReplayMetaData);
    }
}
