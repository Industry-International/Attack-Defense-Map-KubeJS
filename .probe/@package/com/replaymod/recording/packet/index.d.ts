import { $ReplayMod } from "@package/com/replaymod/core";
import { $Packet } from "@package/com/replaymod/replaystudio/protocol";
import { $ReplayFile, $ReplayMetaData } from "@package/com/replaymod/replaystudio/replay";
import { $Path_ } from "@package/java/nio/file";
import { $Channel, $ChannelInboundHandlerAdapter } from "@package/io/netty/channel";
import { $Connection } from "@package/net/minecraft/network";
import { $Packet as $Packet$1 } from "@package/net/minecraft/network/protocol";
import { $UUID_ } from "@package/java/util";
import { $ClientboundResourcePackPushPacket, $ClientboundResourcePackPushPacket_ } from "@package/net/minecraft/network/protocol/common";

declare module "@package/com/replaymod/recording/packet" {
    export class $PacketListener extends $ChannelInboundHandlerAdapter {
        save(packet: $Packet$1<any>): void;
        save(packet: $Packet): void;
        addMarker(name: string, timestamp: number): void;
        addMarker(name: string): void;
        setServerWasPaused(): void;
        getResourcePackRecorder(): $ResourcePackRecorder;
        getCurrentDuration(): number;
        static DECOMPRESS_KEY: string;
        static DECODED_RECORDER_KEY: string;
        static DECODER_KEY: string;
        static RAW_RECORDER_KEY: string;
        constructor(core: $ReplayMod, channel: $Channel, outputPath: $Path_, replayFile: $ReplayFile, metaData: $ReplayMetaData);
        get resourcePackRecorder(): $ResourcePackRecorder;
        get currentDuration(): number;
    }
    export class $ResourcePackRecorder {
        recordResourcePack(file: $Path_, requestId: number): void;
        recordResourcePack(file: $Path_, uuid: $UUID_): void;
        handleResourcePack(netManager: $Connection, packet: $ClientboundResourcePackPushPacket_): $ClientboundResourcePackPushPacket;
        constructor(replayFile: $ReplayFile);
    }
}
