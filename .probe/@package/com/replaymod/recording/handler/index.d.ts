import { $BlockPos_ } from "@package/net/minecraft/core";
import { $PacketListener } from "@package/com/replaymod/recording/packet";
import { $EventRegistrations } from "@package/de/johni0702/minecraft/gui/utils";
import { $Packet } from "@package/net/minecraft/network/protocol";

declare module "@package/com/replaymod/recording/handler" {
    export class $RecordingEventHandler$RecordingEventSender {
    }
    export interface $RecordingEventHandler$RecordingEventSender {
        setRecordingEventHandler(arg0: $RecordingEventHandler): void;
        getRecordingEventHandler(): $RecordingEventHandler;
    }
    export class $RecordingEventHandler extends $EventRegistrations {
        onBlockBreakAnim(breakerId: number, pos: $BlockPos_, progress: number): void;
        spawnRecordingPlayer(): void;
        onClientEffect(type: number, pos: $BlockPos_, data: number): void;
        onPacket(packet: $Packet<never>): void;
        constructor(packetListener: $PacketListener);
    }
}
