import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Set, $UUID_, $Set_ } from "@package/java/util";
import { $WarpRequirement } from "@package/net/blay09/mods/waystones/api/requirement";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as event from "@package/net/blay09/mods/waystones/api/event";
export * as requirement from "@package/net/blay09/mods/waystones/api/requirement";

declare module "@package/net/blay09/mods/waystones/api" {
    export class $WaystoneTeleportContext {
    }
    export interface $WaystoneTeleportContext {
        addFlag(arg0: $ResourceLocation_): $WaystoneTeleportContext;
        getFlags(): $Set<$ResourceLocation>;
        getEntity(): $Entity;
        addFlags(arg0: $Set_<$ResourceLocation_>): $WaystoneTeleportContext;
        hasFlag(arg0: $ResourceLocation_): boolean;
        playsSound(): boolean;
        setWarpItem(arg0: $ItemStack_): $WaystoneTeleportContext;
        getTargetWaystone(): $Waystone;
        getFromWaystone(): ($Waystone) | undefined;
        setFromWaystone(arg0: $Waystone): $WaystoneTeleportContext;
        playsEffect(): boolean;
        setPlaysEffect(arg0: boolean): $WaystoneTeleportContext;
        getRequirements(): $WarpRequirement;
        setPlaysSound(arg0: boolean): $WaystoneTeleportContext;
        getWarpItem(): $ItemStack;
        appliesModifiers(): boolean;
        isDimensionalTeleport(): boolean;
        getAdditionalEntities(): $List<$Entity>;
        setAppliesModifiers(arg0: boolean): $WaystoneTeleportContext;
        getLeashedEntities(): $List<$Mob>;
        setRequirements(arg0: $WarpRequirement): $WaystoneTeleportContext;
        addAdditionalEntity(arg0: $Entity): $WaystoneTeleportContext;
        removeFlag(arg0: $ResourceLocation_): $WaystoneTeleportContext;
        get flags(): $Set<$ResourceLocation>;
        get entity(): $Entity;
        get targetWaystone(): $Waystone;
        get dimensionalTeleport(): boolean;
        get additionalEntities(): $List<$Entity>;
        get leashedEntities(): $List<$Mob>;
    }
    export class $Waystone {
    }
    export interface $Waystone {
        getName(): $Component;
        isTransient(): boolean;
        isValid(): boolean;
        isOwner(arg0: $Player): boolean;
        getOrigin(): $WaystoneOrigin;
        getPos(): $BlockPos;
        getDimension(): $ResourceKey<$Level>;
        getVisibility(): $WaystoneVisibility;
        hasOwner(): boolean;
        getWaystoneType(): $ResourceLocation;
        hasName(): boolean;
        isValidInLevel(arg0: $ServerLevel): boolean;
        getOwnerUid(): $UUID;
        wasGenerated(): boolean;
        getWaystoneUid(): $UUID;
        get name(): $Component;
        get transient(): boolean;
        get valid(): boolean;
        get origin(): $WaystoneOrigin;
        get pos(): $BlockPos;
        get dimension(): $ResourceKey<$Level>;
        get visibility(): $WaystoneVisibility;
        get waystoneType(): $ResourceLocation;
        get ownerUid(): $UUID;
        get waystoneUid(): $UUID;
    }
    export class $WaystoneVisibility extends $Enum<$WaystoneVisibility> {
        static values(): $WaystoneVisibility[];
        static valueOf(arg0: string): $WaystoneVisibility;
        isSupportedForWaystoneType(arg0: $ResourceLocation_): boolean;
        static fromWaystoneType(arg0: $ResourceLocation_): $WaystoneVisibility;
        static ORANGE_SHARESTONE: $WaystoneVisibility;
        static ACTIVATION: $WaystoneVisibility;
        static BROWN_SHARESTONE: $WaystoneVisibility;
        static GREEN_SHARESTONE: $WaystoneVisibility;
        static YELLOW_SHARESTONE: $WaystoneVisibility;
        static MAGENTA_SHARESTONE: $WaystoneVisibility;
        static LIGHT_GRAY_SHARESTONE: $WaystoneVisibility;
        static LIME_SHARESTONE: $WaystoneVisibility;
        static SHARD_ONLY: $WaystoneVisibility;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WaystoneVisibility>;
        static RED_SHARESTONE: $WaystoneVisibility;
        static BLUE_SHARESTONE: $WaystoneVisibility;
        static LIST_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$WaystoneVisibility>>;
        static LIGHT_BLUE_SHARESTONE: $WaystoneVisibility;
        static BLACK_SHARESTONE: $WaystoneVisibility;
        static GLOBAL: $WaystoneVisibility;
        static PINK_SHARESTONE: $WaystoneVisibility;
        static PURPLE_SHARESTONE: $WaystoneVisibility;
        static GRAY_SHARESTONE: $WaystoneVisibility;
        static CYAN_SHARESTONE: $WaystoneVisibility;
    }
    /**
     * Values that may be interpreted as {@link $WaystoneVisibility}.
     */
    export type $WaystoneVisibility_ = "activation" | "global" | "shard_only" | "orange_sharestone" | "magenta_sharestone" | "light_blue_sharestone" | "yellow_sharestone" | "lime_sharestone" | "pink_sharestone" | "gray_sharestone" | "light_gray_sharestone" | "cyan_sharestone" | "purple_sharestone" | "blue_sharestone" | "brown_sharestone" | "green_sharestone" | "red_sharestone" | "black_sharestone";
    export class $WaystoneManager {
    }
    export interface $WaystoneManager {
        findWaystoneByName(arg0: string): ($Waystone) | undefined;
        getWaystoneById(arg0: $UUID_): ($Waystone) | undefined;
        getWaystoneAt(arg0: $BlockGetter, arg1: $BlockPos_): ($Waystone) | undefined;
        getWaystonesByType(arg0: $ResourceLocation_): $Stream<$Waystone>;
        getWaystones(): $Stream<$Waystone>;
        getGlobalWaystones(): $List<$Waystone>;
        get waystones(): $Stream<$Waystone>;
        get globalWaystones(): $List<$Waystone>;
    }
    export class $WaystoneOrigin extends $Enum<$WaystoneOrigin> implements $StringRepresentable {
        static values(): $WaystoneOrigin[];
        static valueOf(arg0: string): $WaystoneOrigin;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static VILLAGE: $WaystoneOrigin;
        static PLAYER: $WaystoneOrigin;
        static DUNGEON: $WaystoneOrigin;
        static UNKNOWN: $WaystoneOrigin;
        static WILDERNESS: $WaystoneOrigin;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WaystoneOrigin}.
     */
    export type $WaystoneOrigin_ = "unknown" | "wilderness" | "dungeon" | "village" | "player";
}
