import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $DyeColor_, $ItemStack_, $DyeColor } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $List, $List_, $Collection, $Map } from "@package/java/util";
import { $StationMapData, $StationBlockEntity, $StationMarker } from "@package/com/simibubi/create/content/trains/station";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $IHoldingPlayerExtension } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $FramedMap$MarkerRemover } from "@package/xfacthd/framedblocks/common/data/component";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record, $Iterable } from "@package/java/lang";
import { $CustomMapData$Type_, $ExpandedMapData } from "@package/net/mehvahdjukaar/moonlight/api/map";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $MLMapMarker } from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";

declare module "@package/net/minecraft/world/level/saveddata/maps" {
    export class $MapBanner extends $Record {
        static fromWorld(arg0: $BlockGetter, arg1: $BlockPos_): $MapBanner;
        name(): ($Component) | undefined;
        getId(): string;
        pos(): $BlockPos;
        color(): $DyeColor;
        getDecoration(): $Holder<$MapDecorationType>;
        static CODEC: $Codec<$MapBanner>;
        static LIST_CODEC: $Codec<$List<$MapBanner>>;
        constructor(arg0: $BlockPos_, arg1: $DyeColor_, arg2: ($Component_) | undefined);
        get id(): string;
        get decoration(): $Holder<$MapDecorationType>;
    }
    export class $MapItemSavedData$MapPatch extends $Record {
        mapColors(): number[];
        width(): number;
        height(): number;
        applyToMap(arg0: $MapItemSavedData): void;
        startX(): number;
        startY(): number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, ($MapItemSavedData$MapPatch) | undefined>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]);
    }
    export class $MapFrame {
        static load(arg0: $CompoundTag_): $MapFrame;
        getId(): string;
        save(): $CompoundTag;
        getPos(): $BlockPos;
        getRotation(): number;
        getEntityId(): number;
        static frameId(arg0: $BlockPos_): string;
        constructor(arg0: $BlockPos_, arg1: number, arg2: number);
        get id(): string;
        get pos(): $BlockPos;
        get rotation(): number;
        get entityId(): number;
    }
    export class $MapIndex extends $SavedData {
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $MapIndex;
        static factory(): $SavedData$Factory<$MapIndex>;
        getFreeAuxValueForMap(): $MapId;
        static FILE_NAME: string;
        constructor();
        get freeAuxValueForMap(): $MapId;
    }
    export class $MapDecorationTypes {
        static bootstrap(arg0: $Registry<$MapDecorationType_>): $Holder<$MapDecorationType>;
        static BLUE_MARKER: $Holder<$MapDecorationType>;
        static TARGET_POINT: $Holder<$MapDecorationType>;
        static BLUE_BANNER: $Holder<$MapDecorationType>;
        static LIGHT_BLUE_BANNER: $Holder<$MapDecorationType>;
        static SWAMP_HUT: $Holder<$MapDecorationType>;
        static FRAME: $Holder<$MapDecorationType>;
        static BLACK_BANNER: $Holder<$MapDecorationType>;
        static MAGENTA_BANNER: $Holder<$MapDecorationType>;
        static PLAINS_VILLAGE: $Holder<$MapDecorationType>;
        static PINK_BANNER: $Holder<$MapDecorationType>;
        static WOODLAND_MANSION: $Holder<$MapDecorationType>;
        static YELLOW_BANNER: $Holder<$MapDecorationType>;
        static RED_MARKER: $Holder<$MapDecorationType>;
        static DESERT_VILLAGE: $Holder<$MapDecorationType>;
        static TRIAL_CHAMBERS: $Holder<$MapDecorationType>;
        static PLAYER_OFF_LIMITS: $Holder<$MapDecorationType>;
        static ORANGE_BANNER: $Holder<$MapDecorationType>;
        static PURPLE_BANNER: $Holder<$MapDecorationType>;
        static TARGET_X: $Holder<$MapDecorationType>;
        static BROWN_BANNER: $Holder<$MapDecorationType>;
        static RED_X: $Holder<$MapDecorationType>;
        static RED_BANNER: $Holder<$MapDecorationType>;
        static GRAY_BANNER: $Holder<$MapDecorationType>;
        static JUNGLE_TEMPLE: $Holder<$MapDecorationType>;
        static OCEAN_MONUMENT: $Holder<$MapDecorationType>;
        static LIGHT_GRAY_BANNER: $Holder<$MapDecorationType>;
        static CYAN_BANNER: $Holder<$MapDecorationType>;
        static GREEN_BANNER: $Holder<$MapDecorationType>;
        static PLAYER: $Holder<$MapDecorationType>;
        static PLAYER_OFF_MAP: $Holder<$MapDecorationType>;
        static WHITE_BANNER: $Holder<$MapDecorationType>;
        static LIME_BANNER: $Holder<$MapDecorationType>;
        static SAVANNA_VILLAGE: $Holder<$MapDecorationType>;
        static SNOWY_VILLAGE: $Holder<$MapDecorationType>;
        static TAIGA_VILLAGE: $Holder<$MapDecorationType>;
        constructor();
    }
    export class $MapId extends $Record {
        id(): number;
        key(): string;
        static CODEC: $Codec<$MapId>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MapId>;
        constructor(arg0: number);
    }
    export class $MapItemSavedData extends $SavedData implements $StationMapData, $FramedMap$MarkerRemover, $ExpandedMapData {
        ml$copy(): $MapItemSavedData;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $MapItemSavedData;
        static factory(): $SavedData$Factory<$MapItemSavedData>;
        setColor(arg0: number, arg1: number, arg2: number): void;
        handler$gna000$moonlight$tickCarriedBy(arg0: $Player, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        handler$gna000$moonlight$initCustomData(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ResourceKey_<any>, arg7: $CallbackInfo): void;
        handler$gna000$moonlight$checkCustomDeco(arg0: $BlockGetter, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        handler$gek000$create$onCheckBanners(arg0: $BlockGetter, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        locked(): $MapItemSavedData;
        getDecorations(): $Iterable<$MapDecoration>;
        getUpdatePacket(arg0: $MapId_, arg1: $Player): $Packet<never>;
        static createForClient(arg0: number, arg1: boolean, arg2: $ResourceKey_<$Level>): $MapItemSavedData;
        modifyReturnValue$gna000$moonlight$ml$isExplorationMap(arg0: boolean): boolean;
        ml$getVanillaDecorationSize(): number;
        ml$getCustomDecorations(): $Map<any, any>;
        getBanners(): $Collection<$MapBanner>;
        updateColor(arg0: number, arg1: number, arg2: number): boolean;
        toggleBanner(arg0: $LevelAccessor, arg1: $BlockPos_): boolean;
        static createFresh(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: $ResourceKey_<$Level>): $MapItemSavedData;
        tickCarriedBy(arg0: $Player, arg1: $ItemStack_): void;
        ml$getCustomData(): $Map<any, any>;
        getHoldingPlayer(arg0: $Player): $MapItemSavedData$HoldingPlayer;
        checkBanners(arg0: $BlockGetter, arg1: number, arg2: number): void;
        scaled(): $MapItemSavedData;
        static addTargetDecoration(arg0: $ItemStack_, arg1: $BlockPos_, arg2: string, arg3: $Holder_<$MapDecorationType>): void;
        addDecoration(arg0: $Holder_<$MapDecorationType>, arg1: $LevelAccessor, arg2: string, arg3: number, arg4: number, arg5: number, arg6: $Component_): void;
        addStationMarker(arg0: $StationMarker): void;
        removeDecoration(arg0: string): void;
        framedblocks$removeMapMarker(arg0: $BlockPos_): void;
        handler$gna000$moonlight$scaled(arg0: $CallbackInfoReturnable<any>): void;
        handler$gna000$moonlight$save(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $CallbackInfoReturnable<any>): void;
        handler$gna000$moonlight$locked(arg0: $CallbackInfoReturnable<any>): void;
        ml$setCustomDecorationsDirty(): void;
        isTrackedCountOverLimit(arg0: number): boolean;
        removedFromFrame(arg0: $BlockPos_, arg1: number): void;
        isExplorationMap(): boolean;
        toggleStation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $StationBlockEntity): boolean;
        ml$addCustomMarker(arg0: $MLMapMarker<any>): void;
        ml$setCustomDataDirty(arg0: $CustomMapData$Type_<any, any>, arg1: $Consumer_<any>): void;
        ml$getCustomMarkers(): $Map<any, any>;
        ml$removeCustomMarker(arg0: string): boolean;
        addClientSideDecorations(arg0: $List_<$MapDecoration_>): void;
        ml$resetCustomDecoration(): void;
        ml$toggleCustomDecoration(arg0: $LevelAccessor, arg1: $BlockPos_): boolean;
        centerZ: number;
        static TRACKED_DECORATION_LIMIT: number;
        centerX: number;
        moonlight$customData: $Map<any, any>;
        moonlight$customDecorations: $Map<any, any>;
        scale: number;
        decorations: $Map<string, $MapDecoration>;
        static MAX_SCALE: number;
        dimension: $ResourceKey<$Level>;
        colors: number[];
        get banners(): $Collection<$MapBanner>;
        get explorationMap(): boolean;
    }
    export class $MapDecorationType extends $Record {
        mapColor(): number;
        explorationMapElement(): boolean;
        assetId(): $ResourceLocation;
        hasMapColor(): boolean;
        showOnItemFrame(): boolean;
        trackCount(): boolean;
        static CODEC: $Codec<$Holder<$MapDecorationType>>;
        static NO_MAP_COLOR: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MapDecorationType>>;
        constructor(arg0: $ResourceLocation_, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $MapDecorationType}.
     */
    export type $MapDecorationType_ = RegistryTypes.MapDecorationType;
    export class $MapDecoration extends $Record {
        name(): ($Component) | undefined;
        type(): $Holder<$MapDecorationType>;
        x(): number;
        y(): number;
        getSpriteLocation(): $ResourceLocation;
        rot(): number;
        renderOnFrame(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MapDecoration>;
        constructor(arg0: $Holder_<$MapDecorationType>, arg1: number, arg2: number, arg3: number, arg4: ($Component_) | undefined);
        get spriteLocation(): $ResourceLocation;
    }
    export class $MapItemSavedData$HoldingPlayer implements $IHoldingPlayerExtension {
        handler$gll000$moonlight$sanityCheck(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        handler$gll000$moonlight$checkLocked(arg0: $MapId_, arg1: $CallbackInfoReturnable<any>): void;
        handler$gll000$moonlight$initializeDirty(arg0: $MapItemSavedData, arg1: $Player, arg2: $CallbackInfo): void;
        nextUpdatePacket(arg0: $MapId_): $Packet<never>;
        markColorsDirty(arg0: number, arg1: number): void;
        moonlight$setCustomDataDirty(arg0: $CustomMapData$Type_<any, any>, arg1: $Consumer_<any>): void;
        moonlight$setCustomMarkersDirty(): void;
        modifyReturnValue$gll000$moonlight$addExtraPacketData(arg0: $Packet<any>, arg1: $MapId_): $Packet<any>;
        handler$gll000$moonlight$lockData(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        this$0: $MapItemSavedData;
        step: number;
        player: $Player;
        constructor(arg0: $MapItemSavedData, arg1: $Player);
    }
    export interface $MapDecorationType extends RegistryMarked<RegistryTypes.MapDecorationTypeTag, RegistryTypes.MapDecorationType> {}
}
