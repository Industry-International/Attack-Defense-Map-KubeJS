import { $Level } from "@package/net/minecraft/world/level";
import { $PositionSource, $GameEvent } from "@package/net/minecraft/world/level/gameevent";
import { $UUID, $List, $UUID_, $Set_, $List_, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $ConnectionProtocol_, $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketFlow_ } from "@package/net/minecraft/network/protocol";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamMemberEncoder_, $StreamCodec, $StreamDecoder_ } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/common/custom" {
    export class $BrainDebugPayload$BrainDump extends $Record {
        name(): string;
        id(): number;
        write(buffer: $FriendlyByteBuf): void;
        pos(): $Vec3;
        path(): $Path;
        xp(): number;
        gossips(): $List<string>;
        memories(): $List<string>;
        uuid(): $UUID;
        profession(): string;
        health(): number;
        inventory(): string;
        pois(): $Set<$BlockPos>;
        wantsGolem(): boolean;
        angerLevel(): number;
        activities(): $List<string>;
        behaviors(): $List<string>;
        maxHealth(): number;
        hasPoi(pos: $BlockPos_): boolean;
        potentialPois(): $Set<$BlockPos>;
        hasPotentialPoi(pos: $BlockPos_): boolean;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $UUID_, arg1: number, arg2: string, arg3: string, arg4: number, arg5: number, arg6: number, arg7: $Vec3_, arg8: string, arg9: $Path | null, arg10: boolean, arg11: number, arg12: $List_<string>, arg13: $List_<string>, arg14: $List_<string>, arg15: $List_<string>, arg16: $Set_<$BlockPos_>, arg17: $Set_<$BlockPos_>);
    }
    export class $BrainDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$BrainDebugPayload>;
        brainDump(): $BrainDebugPayload$BrainDump;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$BrainDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $BrainDebugPayload>;
        constructor(arg0: $BrainDebugPayload$BrainDump_);
    }
    export class $RaidsDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$RaidsDebugPayload>;
        raidCenters(): $List<$BlockPos>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$RaidsDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $RaidsDebugPayload>;
        constructor(arg0: $List_<$BlockPos_>);
    }
    export class $BeeDebugPayload$BeeInfo extends $Record {
        id(): number;
        write(buffer: $FriendlyByteBuf): void;
        pos(): $Vec3;
        path(): $Path;
        uuid(): $UUID;
        flowerPos(): $BlockPos;
        hasHive(pos: $BlockPos_): boolean;
        hivePos(): $BlockPos;
        goals(): $Set<string>;
        travelTicks(): number;
        generateName(): string;
        blacklistedHives(): $List<$BlockPos>;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $UUID_, arg1: number, arg2: $Vec3_, arg3: $Path | null, arg4: $BlockPos_ | null, arg5: $BlockPos_ | null, arg6: number, arg7: $Set_<string>, arg8: $List_<$BlockPos_>);
    }
    export class $PathfindingDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$PathfindingDebugPayload>;
        path(): $Path;
        entityId(): number;
        maxNodeDistance(): number;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$PathfindingDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $PathfindingDebugPayload>;
        constructor(arg0: number, arg1: $Path, arg2: number);
    }
    export class $WorldGenAttemptDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$WorldGenAttemptDebugPayload>;
        scale(): number;
        pos(): $BlockPos;
        red(): number;
        green(): number;
        blue(): number;
        alpha(): number;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$WorldGenAttemptDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $WorldGenAttemptDebugPayload>;
        constructor(arg0: $BlockPos_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $HiveDebugPayload$HiveInfo extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        pos(): $BlockPos;
        sedated(): boolean;
        honeyLevel(): number;
        hiveType(): string;
        occupantCount(): number;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $BlockPos_, arg1: string, arg2: number, arg3: number, arg4: boolean);
    }
    export class $BreezeDebugPayload$BreezeInfo extends $Record {
        id(): number;
        write(buffer: $FriendlyByteBuf): void;
        uuid(): $UUID;
        jumpTarget(): $BlockPos;
        generateName(): string;
        attackTarget(): number;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $UUID_, arg1: number, arg2: number, arg3: $BlockPos_);
    }
    export class $GameTestClearMarkersDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$GameTestClearMarkersDebugPayload>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$GameTestClearMarkersDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $GameTestClearMarkersDebugPayload>;
        constructor();
    }
    export class $VillageSectionsDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$VillageSectionsDebugPayload>;
        notVillageChunks(): $Set<$SectionPos>;
        villageChunks(): $Set<$SectionPos>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$VillageSectionsDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $VillageSectionsDebugPayload>;
        constructor(arg0: $Set_<$SectionPos>, arg1: $Set_<$SectionPos>);
    }
    export class $BeeDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$BeeDebugPayload>;
        beeInfo(): $BeeDebugPayload$BeeInfo;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$BeeDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $BeeDebugPayload>;
        constructor(arg0: $BeeDebugPayload$BeeInfo_);
    }
    export class $StructuresDebugPayload$PieceInfo extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        isStart(): boolean;
        boundingBox(): $BoundingBox;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $BoundingBox, arg1: boolean);
        get start(): boolean;
    }
    export class $GameTestAddMarkerDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$GameTestAddMarkerDebugPayload>;
        pos(): $BlockPos;
        color(): number;
        text(): string;
        durationMs(): number;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$GameTestAddMarkerDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $GameTestAddMarkerDebugPayload>;
        constructor(arg0: $BlockPos_, arg1: number, arg2: string, arg3: number);
    }
    export class $CustomPacketPayload$TypeAndCodec<B extends $FriendlyByteBuf, T extends $CustomPacketPayload> extends $Record {
        type(): $CustomPacketPayload$Type<T>;
        codec(): $StreamCodec<B, T>;
        constructor(type: $CustomPacketPayload$Type_<T>, codec: $StreamCodec<B, T>);
    }
    export class $NeighborUpdatesDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$NeighborUpdatesDebugPayload>;
        time(): number;
        pos(): $BlockPos;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$NeighborUpdatesDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $NeighborUpdatesDebugPayload>;
        constructor(arg0: number, arg1: $BlockPos_);
    }
    export class $StructuresDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$StructuresDebugPayload>;
        dimension(): $ResourceKey<$Level>;
        pieces(): $List<$StructuresDebugPayload$PieceInfo>;
        static readBoundingBox(buffer: $FriendlyByteBuf): $BoundingBox;
        static writeBoundingBox(buffer: $FriendlyByteBuf, boundingBox: $BoundingBox): void;
        mainBB(): $BoundingBox;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$StructuresDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $StructuresDebugPayload>;
        constructor(arg0: $ResourceKey_<$Level>, arg1: $BoundingBox, arg2: $List_<$StructuresDebugPayload$PieceInfo_>);
    }
    export class $PoiAddedDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$PoiAddedDebugPayload>;
        pos(): $BlockPos;
        freeTicketCount(): number;
        poiType(): string;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$PoiAddedDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $PoiAddedDebugPayload>;
        constructor(arg0: $BlockPos_, arg1: string, arg2: number);
    }
    export class $PoiTicketCountDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$PoiTicketCountDebugPayload>;
        pos(): $BlockPos;
        freeTicketCount(): number;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$PoiTicketCountDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $PoiTicketCountDebugPayload>;
        constructor(arg0: $BlockPos_, arg1: number);
    }
    export class $CustomPacketPayload$Type<T extends $CustomPacketPayload> extends $Record {
        id(): $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $PoiRemovedDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$PoiRemovedDebugPayload>;
        pos(): $BlockPos;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$PoiRemovedDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $PoiRemovedDebugPayload>;
        constructor(arg0: $BlockPos_);
    }
    export class $BreezeDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$BreezeDebugPayload>;
        breezeInfo(): $BreezeDebugPayload$BreezeInfo;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$BreezeDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $BreezeDebugPayload>;
        constructor(arg0: $BreezeDebugPayload$BreezeInfo_);
    }
    export class $DiscardedPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$DiscardedPayload>;
        id(): $ResourceLocation;
        static codec<T extends $FriendlyByteBuf>(id: $ResourceLocation_, maxSize: number): $StreamCodec<T, $DiscardedPayload>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        constructor(arg0: $ResourceLocation_);
    }
    export class $GoalDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$GoalDebugPayload>;
        pos(): $BlockPos;
        entityId(): number;
        goals(): $List<$GoalDebugPayload$DebugGoal>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$GoalDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $GoalDebugPayload>;
        constructor(arg0: number, arg1: $BlockPos_, arg2: $List_<$GoalDebugPayload$DebugGoal_>);
    }
    export class $GameEventDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$GameEventDebugPayload>;
        pos(): $Vec3;
        gameEventType(): $ResourceKey<$GameEvent>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$GameEventDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $GameEventDebugPayload>;
        constructor(arg0: $ResourceKey_<$GameEvent>, arg1: $Vec3_);
    }
    export class $BrandPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$BrandPayload>;
        brand(): string;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$BrandPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $BrandPayload>;
        constructor(arg0: string);
    }
    export class $GoalDebugPayload$DebugGoal extends $Record {
        name(): string;
        priority(): number;
        write(buffer: $FriendlyByteBuf): void;
        isRunning(): boolean;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: number, arg1: boolean, arg2: string);
        get running(): boolean;
    }
    export class $GameEventListenerDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$GameEventListenerDebugPayload>;
        listenerPos(): $PositionSource;
        listenerRange(): number;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$GameEventListenerDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GameEventListenerDebugPayload>;
        constructor(arg0: $PositionSource, arg1: number);
    }
    export class $HiveDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$HiveDebugPayload>;
        hiveInfo(): $HiveDebugPayload$HiveInfo;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$HiveDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $HiveDebugPayload>;
        constructor(arg0: $HiveDebugPayload$HiveInfo_);
    }
    export class $CustomPacketPayload$FallbackProvider<B extends $FriendlyByteBuf> {
    }
    export interface $CustomPacketPayload$FallbackProvider<B extends $FriendlyByteBuf> {
        create(id: $ResourceLocation_): $StreamCodec<B, $CustomPacketPayload>;
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload$FallbackProvider}.
     */
    export type $CustomPacketPayload$FallbackProvider_<B> = ((arg0: $ResourceLocation) => $StreamCodec<B, $CustomPacketPayload>);
    export class $CustomPacketPayload {
        static codec<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider_<B>, arg1: $List_<$CustomPacketPayload$TypeAndCodec_<B, never>>, arg2: $ConnectionProtocol_, arg3: $PacketFlow_): $StreamCodec<B, $CustomPacketPayload>;
        static codec<B extends $ByteBuf, T extends $CustomPacketPayload>(encoder: $StreamMemberEncoder_<B, T>, decoder: $StreamDecoder_<B, T>): $StreamCodec<B, T>;
        static createType<T extends $CustomPacketPayload>(id: string): $CustomPacketPayload$Type<T>;
    }
    export interface $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload}.
     */
    export type $CustomPacketPayload_ = (() => $CustomPacketPayload$Type_<$CustomPacketPayload>);
}
