import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $RegistrySnapshot } from "@package/net/neoforged/neoforge/registries";
import { $CheckExtensibleEnums$EnumEntry_, $CheckExtensibleEnums$EnumEntry } from "@package/net/neoforged/neoforge/network/configuration";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $ClientboundContainerSetDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $List, $Map_, $Set_, $Collection_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $AttachmentType, $AttachmentType_ } from "@package/net/neoforged/neoforge/attachment";
import { $BlockPos, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $ConnectionProtocol_, $RegistryFriendlyByteBuf, $FriendlyByteBuf, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PayloadRegistration_, $NetworkPayloadSetup, $NetworkPayloadSetup_ } from "@package/net/neoforged/neoforge/network/registration";
import { $PacketFlow, $PacketFlow_ } from "@package/net/minecraft/network/protocol";
import { $MenuType_, $MenuType } from "@package/net/minecraft/world/inventory";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/network/payload" {
    export class $CommonVersionPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CommonVersionPayload>;
        versions(): $List<number>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$CommonVersionPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $CommonVersionPayload>;
        constructor();
        constructor(versions: $List_<number>);
    }
    export class $ClientboundCustomSetTimePayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$ClientboundCustomSetTimePayload>;
        dayTimeFraction(): number;
        dayTimePerTick(): number;
        dayTime(): number;
        gameTime(): number;
        gameRule(): boolean;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$ClientboundCustomSetTimePayload>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCustomSetTimePayload>;
        constructor(gameTime: number, dayTime: number, gameRule: boolean, dayTimeFraction: number, dayTimePerTick: number);
    }
    export class $FrozenRegistryPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$FrozenRegistryPayload>;
        snapshot(): $RegistrySnapshot;
        registryName(): $ResourceLocation;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$FrozenRegistryPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $FrozenRegistryPayload>;
        constructor(registryName: $ResourceLocation_, snapshot: $RegistrySnapshot);
    }
    export class $AuxiliaryLightDataPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$AuxiliaryLightDataPayload>;
        entries(): $Map<$BlockPos, number>;
        pos(): $ChunkPos;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$AuxiliaryLightDataPayload>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AuxiliaryLightDataPayload>;
        constructor(pos: $ChunkPos, entries: $Map_<$BlockPos_, number>);
    }
    export class $ModdedNetworkPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$ModdedNetworkPayload>;
        setup(): $NetworkPayloadSetup;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$ModdedNetworkPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ModdedNetworkPayload>;
        constructor(setup: $NetworkPayloadSetup_);
    }
    export class $DinnerboneProtocolUtils {
        static CHANNELS_CODEC: $StreamCodec<$FriendlyByteBuf, $Set<$ResourceLocation>>;
        static LOGGER: $Logger;
    }
    export class $MinecraftRegisterPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$MinecraftRegisterPayload>;
        newChannels(): $Set<$ResourceLocation>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$MinecraftRegisterPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $MinecraftRegisterPayload>;
        constructor(newChannels: $Set_<$ResourceLocation_>);
    }
    export class $RegistryDataMapSyncPayload<T> extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$RegistryDataMapSyncPayload<never>>;
        static decode<T>(arg0: $RegistryFriendlyByteBuf): $RegistryDataMapSyncPayload<T>;
        write(arg0: $RegistryFriendlyByteBuf): void;
        registryKey(): $ResourceKey<$Registry<T>>;
        dataMaps(): $Map<$ResourceLocation, $Map<$ResourceKey<T>, never>>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$RegistryDataMapSyncPayload<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RegistryDataMapSyncPayload<never>>;
        constructor(registryKey: $ResourceKey_<$Registry<T>>, dataMaps: $Map_<$ResourceLocation_, $Map_<$ResourceKey_<T>, never>>);
    }
    export class $KnownRegistryDataMapsReplyPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$KnownRegistryDataMapsReplyPayload>;
        dataMaps(): $Map<$ResourceKey<$Registry<never>>, $Collection<$ResourceLocation>>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$KnownRegistryDataMapsReplyPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $KnownRegistryDataMapsReplyPayload>;
        constructor(dataMaps: $Map_<$ResourceKey_<$Registry<never>>, $Collection_<$ResourceLocation_>>);
    }
    export class $SyncAttachmentsPayload$ChunkTarget extends $Record implements $SyncAttachmentsPayload$Target {
        pos(): $ChunkPos;
        constructor(pos: $ChunkPos);
    }
    export class $ModdedNetworkQueryComponent extends $Record {
        version(): string;
        id(): $ResourceLocation;
        optional(): boolean;
        flow(): ($PacketFlow) | undefined;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ModdedNetworkQueryComponent>;
        constructor(arg0: $PayloadRegistration_<never>);
        constructor(id: $ResourceLocation_, version: string, flow: ($PacketFlow_) | undefined, optional: boolean);
    }
    export class $AdvancedOpenScreenPayload extends $Record implements $CustomPacketPayload {
        name(): $Component;
        type(): $CustomPacketPayload$Type<$AdvancedOpenScreenPayload>;
        menuType(): $MenuType<never>;
        additionalData(): number[];
        windowId(): number;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$AdvancedOpenScreenPayload>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AdvancedOpenScreenPayload>;
        constructor(windowId: number, menuType: $MenuType_<never>, name: $Component_, additionalData: number[]);
    }
    export class $SyncAttachmentsPayload$LevelTarget extends $Record implements $SyncAttachmentsPayload$Target {
        constructor();
    }
    export class $ExtensibleEnumAcknowledgePayload implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$ExtensibleEnumAcknowledgePayload>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static INSTANCE: $ExtensibleEnumAcknowledgePayload;
        static TYPE: $CustomPacketPayload$Type<$ExtensibleEnumAcknowledgePayload>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ExtensibleEnumAcknowledgePayload>;
    }
    export class $SyncAttachmentsPayload$Target {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SyncAttachmentsPayload$Target>;
    }
    export interface $SyncAttachmentsPayload$Target {
    }
    export class $FrozenRegistrySyncStartPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$FrozenRegistrySyncStartPayload>;
        toAccess(): $List<$ResourceLocation>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$FrozenRegistrySyncStartPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $FrozenRegistrySyncStartPayload>;
        constructor(toAccess: $List_<$ResourceLocation_>);
    }
    export class $SyncAttachmentsPayload$EntityTarget extends $Record implements $SyncAttachmentsPayload$Target {
        entity(): number;
        constructor(entity: number);
    }
    export class $MinecraftUnregisterPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$MinecraftUnregisterPayload>;
        forgottenChannels(): $Set<$ResourceLocation>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$MinecraftUnregisterPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $MinecraftUnregisterPayload>;
        constructor(forgottenChannels: $Set_<$ResourceLocation_>);
    }
    export class $ConfigFilePayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$ConfigFilePayload>;
        fileName(): string;
        contents(): number[];
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$ConfigFilePayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ConfigFilePayload>;
        constructor(fileName: string, contents: number[]);
    }
    export class $FeatureFlagAcknowledgePayload implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$FeatureFlagAcknowledgePayload>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static INSTANCE: $FeatureFlagAcknowledgePayload;
        static TYPE: $CustomPacketPayload$Type<$FeatureFlagAcknowledgePayload>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FeatureFlagAcknowledgePayload>;
    }
    export class $ModdedNetworkSetupFailedPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$ModdedNetworkSetupFailedPayload>;
        failureReasons(): $Map<$ResourceLocation, $Component>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$ModdedNetworkSetupFailedPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ModdedNetworkSetupFailedPayload>;
        constructor(failureReasons: $Map_<$ResourceLocation_, $Component_>);
    }
    export class $FeatureFlagDataPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$FeatureFlagDataPayload>;
        moddedFlags(): $Set<$ResourceLocation>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$FeatureFlagDataPayload>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FeatureFlagDataPayload>;
        constructor(moddedFlags: $Set_<$ResourceLocation_>);
    }
    export class $AdvancedAddEntityPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$AdvancedAddEntityPayload>;
        entityId(): number;
        customPayload(): number[];
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$AdvancedAddEntityPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $AdvancedAddEntityPayload>;
        constructor(arg0: $Entity);
        constructor(entityId: number, customPayload: number[]);
    }
    export class $SyncAttachmentsPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        target(): $SyncAttachmentsPayload$Target;
        types(): $List<$AttachmentType<never>>;
        syncPayload(): number[];
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$SyncAttachmentsPayload>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SyncAttachmentsPayload>;
        constructor(target: $SyncAttachmentsPayload$Target, types: $List_<$AttachmentType_<never>>, syncPayload: number[]);
    }
    export class $KnownRegistryDataMapsPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$KnownRegistryDataMapsPayload>;
        dataMaps(): $Map<$ResourceKey<$Registry<never>>, $List<$KnownRegistryDataMapsPayload$KnownDataMap>>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$KnownRegistryDataMapsPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $KnownRegistryDataMapsPayload>;
        constructor(dataMaps: $Map_<$ResourceKey_<$Registry<never>>, $List_<$KnownRegistryDataMapsPayload$KnownDataMap_>>);
    }
    export class $SyncAttachmentsPayload$BlockEntityTarget extends $Record implements $SyncAttachmentsPayload$Target {
        pos(): $BlockPos;
        constructor(pos: $BlockPos_);
    }
    export class $ModdedNetworkComponent extends $Record {
        version(): (string) | undefined;
        id(): $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ModdedNetworkComponent>;
        constructor(id: $ResourceLocation_, version: (string) | undefined);
    }
    export class $ExtensibleEnumDataPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$ExtensibleEnumDataPayload>;
        enumEntries(): $Map<string, $CheckExtensibleEnums$EnumEntry>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$ExtensibleEnumDataPayload>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ExtensibleEnumDataPayload>;
        constructor(enumEntries: $Map_<string, $CheckExtensibleEnums$EnumEntry_>);
    }
    export class $CommonRegisterPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CommonRegisterPayload>;
        version(): number;
        protocol(): $ConnectionProtocol;
        channels(): $Set<$ResourceLocation>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$CommonRegisterPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $CommonRegisterPayload>;
        constructor(version: number, protocol: $ConnectionProtocol_, channels: $Set_<$ResourceLocation_>);
    }
    export class $FrozenRegistrySyncCompletedPayload implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$FrozenRegistrySyncCompletedPayload>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static INSTANCE: $FrozenRegistrySyncCompletedPayload;
        static TYPE: $CustomPacketPayload$Type<$FrozenRegistrySyncCompletedPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $FrozenRegistrySyncCompletedPayload>;
    }
    export class $KnownRegistryDataMapsPayload$KnownDataMap extends $Record {
        id(): $ResourceLocation;
        mandatory(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $KnownRegistryDataMapsPayload$KnownDataMap>;
        constructor(id: $ResourceLocation_, mandatory: boolean);
    }
    export class $ModdedNetworkQueryPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$ModdedNetworkQueryPayload>;
        queries(): $Map<$ConnectionProtocol, $Set<$ModdedNetworkQueryComponent>>;
        static fromRegistry(arg0: $Map_<$ConnectionProtocol_, $Map_<$ResourceLocation_, $PayloadRegistration_<never>>>): $ModdedNetworkQueryPayload;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static ID: $ResourceLocation;
        static TYPE: $CustomPacketPayload$Type<$ModdedNetworkQueryPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ModdedNetworkQueryPayload>;
        constructor(queries: $Map_<$ConnectionProtocol_, $Set_<$ModdedNetworkQueryComponent_>>);
    }
    export class $AdvancedContainerSetDataPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$AdvancedContainerSetDataPayload>;
        value(): number;
        containerId(): number;
        dataId(): number;
        toVanillaPacket(): $ClientboundContainerSetDataPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$AdvancedContainerSetDataPayload>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AdvancedContainerSetDataPayload>;
        constructor(containerId: number, dataId: number, value: number);
    }
    export class $SplitPacketPayload extends $Record implements $CustomPacketPayload {
        payload(): number[];
        type(): $CustomPacketPayload$Type<$SplitPacketPayload>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$SplitPacketPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $SplitPacketPayload>;
        constructor(payload: number[]);
    }
}
