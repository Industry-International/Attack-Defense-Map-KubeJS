import { $Level } from "@package/net/minecraft/world/level";
import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $ItemTooltipData, $ItemTooltipData_ } from "@package/dev/latvian/mods/kubejs/text/tooltip";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload_, $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID, $List, $UUID_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $IPayloadContext } from "@package/net/neoforged/neoforge/network/handling";
import { $RegisterPayloadHandlersEvent } from "@package/net/neoforged/neoforge/network/event";
import { $RecipeViewerData, $RecipeViewerData_ } from "@package/dev/latvian/mods/kubejs/recipe/viewer/server";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $NotificationToastData, $NotificationToastData_ } from "@package/dev/latvian/mods/kubejs/util";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record, $Object } from "@package/java/lang";
import { $ConsoleLine } from "@package/dev/latvian/mods/kubejs/script";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/net" {
    export class $SyncServerDataPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        data(): $KubeServerData;
        handle(ctx: $IPayloadContext): void;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SyncServerDataPayload>;
        constructor(data: $KubeServerData_);
    }
    export class $SetActivePostShaderPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        id(): ($ResourceLocation) | undefined;
        handle(ctx: $IPayloadContext): void;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SetActivePostShaderPayload>;
        constructor(id: ($ResourceLocation_) | undefined);
    }
    export class $RequestEntityKubedexPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        flags(): number;
        handle(ctx: $IPayloadContext): void;
        entityId(): number;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RequestEntityKubedexPayload>;
        constructor(entityId: number, flags: number);
    }
    export class $SyncStagesPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        handle(ctx: $IPayloadContext): void;
        stages(): $Collection<string>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SyncStagesPayload>;
        constructor(stages: $Collection_<string>);
    }
    export class $NotificationPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        data(): $NotificationToastData;
        handle(ctx: $IPayloadContext): void;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $NotificationPayload>;
        constructor(data: $NotificationToastData_);
    }
    export class $RequestInventoryKubedexPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        flags(): number;
        slots(): $List<number>;
        handle(ctx: $IPayloadContext): void;
        stacks(): $List<$ItemStack>;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RequestInventoryKubedexPayload>;
        constructor(slots: $List_<number>, stacks: $List_<$ItemStack_>, flags: number);
    }
    export class $NetworkKubeEvent implements $KubePlayerEvent {
        /**
         * The channel of the packet.
         */
        getChannel(): string;
        /**
         * The data of the packet.
         */
        getData(): $CompoundTag;
        /**
         * The player that sent the packet. Always `Minecraft.player` in `client_scripts`.
         */
        getEntity(): $Player;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(p: $Player, c: string, d: $CompoundTag_);
        get channel(): string;
        get data(): $CompoundTag;
        get entity(): $Player;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $RemoveStagePayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        handle(ctx: $IPayloadContext): void;
        stage(): string;
        player(): $UUID;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RemoveStagePayload>;
        constructor(player: $UUID_, stage: string);
    }
    export class $FirstClickPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        handle(ctx: $IPayloadContext): void;
        clickType(): number;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FirstClickPayload>;
        constructor(clickType: number);
    }
    export class $ReloadStartupScriptsPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        handle(ctx: $IPayloadContext): void;
        dedicated(): boolean;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ReloadStartupScriptsPayload>;
        constructor(dedicated: boolean);
    }
    export class $RequestBlockKubedexPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        flags(): number;
        pos(): $BlockPos;
        handle(ctx: $IPayloadContext): void;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RequestBlockKubedexPayload>;
        constructor(pos: $BlockPos_, flags: number);
    }
    export class $WebServerUpdateJSONPayload extends $Record implements $CustomPacketPayload {
        payload(): $JsonElement;
        type(): $CustomPacketPayload$Type<never>;
        event(): string;
        handle(ctx: $IPayloadContext): void;
        requiredTag(): string;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WebServerUpdateJSONPayload>;
        constructor(event: string, requiredTag: string, payload: $JsonElement_);
    }
    export class $KubeServerData extends $Record {
        static collect(): $KubeServerData;
        recipeViewerData(): ($RecipeViewerData) | undefined;
        itemTooltipData(): $List<$ItemTooltipData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $KubeServerData>;
        constructor(recipeViewerData: ($RecipeViewerData_) | undefined, itemTooltipData: $List_<$ItemTooltipData_>);
    }
    export class $WebServerUpdateNBTPayload extends $Record implements $CustomPacketPayload {
        payload(): ($Tag) | undefined;
        type(): $CustomPacketPayload$Type<never>;
        event(): string;
        handle(ctx: $IPayloadContext): void;
        requiredTag(): string;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WebServerUpdateNBTPayload>;
        constructor(event: string, requiredTag: string, payload: ($Tag_) | undefined);
    }
    export class $KubeJSNet$Kubedex {
        static REQUEST_BLOCK: $CustomPacketPayload$Type<$RequestBlockKubedexPayload>;
        static REQUEST_INVENTORY: $CustomPacketPayload$Type<$RequestInventoryKubedexPayload>;
        static REQUEST_ENTITY: $CustomPacketPayload$Type<$RequestEntityKubedexPayload>;
    }
    export interface $KubeJSNet$Kubedex {
    }
    export class $KubeJSNet {
        static register(event: $RegisterPayloadHandlersEvent): void;
        static sendToAllPlayers(payload: $CustomPacketPayload_, ...payloads: $CustomPacketPayload_[]): void;
        static safeSendToPlayer(player: $ServerPlayer, payload: $CustomPacketPayload_, ...payloads: $CustomPacketPayload_[]): void;
        static WEB_SERVER_NBT_UPDATE: $CustomPacketPayload$Type<$WebServerUpdateNBTPayload>;
        static DISPLAY_CLIENT_ERRORS: $CustomPacketPayload$Type<$DisplayClientErrorsPayload>;
        static REMOVE_STAGE: $CustomPacketPayload$Type<$RemoveStagePayload>;
        static ADD_STAGE: $CustomPacketPayload$Type<$AddStagePayload>;
        static RELOAD_STARTUP_SCRIPTS: $CustomPacketPayload$Type<$ReloadStartupScriptsPayload>;
        static SEND_DATA_FROM_CLIENT: $CustomPacketPayload$Type<$SendDataFromClientPayload>;
        static NOTIFICATION: $CustomPacketPayload$Type<$NotificationPayload>;
        static WEB_SERVER_JSON_UPDATE: $CustomPacketPayload$Type<$WebServerUpdateJSONPayload>;
        static DISPLAY_SERVER_ERRORS: $CustomPacketPayload$Type<$DisplayServerErrorsPayload>;
        static SYNC_SERVER_DATA: $CustomPacketPayload$Type<$SyncServerDataPayload>;
        static SEND_DATA_FROM_SERVER: $CustomPacketPayload$Type<$SendDataFromServerPayload>;
        static SET_ACTIVE_POST_SHADER: $CustomPacketPayload$Type<$SetActivePostShaderPayload>;
        static FIRST_CLICK: $CustomPacketPayload$Type<$FirstClickPayload>;
        static SYNC_STAGES: $CustomPacketPayload$Type<$SyncStagesPayload>;
    }
    export interface $KubeJSNet {
    }
    export class $SendDataFromClientPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        data(): $CompoundTag;
        handle(ctx: $IPayloadContext): void;
        channel(): string;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SendDataFromClientPayload>;
        constructor(channel: string, data: $CompoundTag_);
    }
    export class $AddStagePayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        handle(ctx: $IPayloadContext): void;
        stage(): string;
        player(): $UUID;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $AddStagePayload>;
        constructor(player: $UUID_, stage: string);
    }
    export class $DisplayServerErrorsPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        handle(ctx: $IPayloadContext): void;
        errors(): $List<$ConsoleLine>;
        warnings(): $List<$ConsoleLine>;
        scriptType(): number;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $DisplayServerErrorsPayload>;
        constructor(scriptType: number, errors: $List_<$ConsoleLine>, warnings: $List_<$ConsoleLine>);
    }
    export class $SendDataFromServerPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        data(): $CompoundTag;
        handle(ctx: $IPayloadContext): void;
        channel(): string;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SendDataFromServerPayload>;
        constructor(channel: string, data: $CompoundTag_);
    }
    export class $DisplayClientErrorsPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        handle(ctx: $IPayloadContext): void;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DisplayClientErrorsPayload>;
        constructor();
    }
}
