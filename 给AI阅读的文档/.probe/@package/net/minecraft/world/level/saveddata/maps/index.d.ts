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
        name(): ($Component) | undefined;
        getId(): string;
        pos(): $BlockPos;
        color(): $DyeColor;
        getDecoration(): $Holder<$MapDecorationType>;
        static fromWorld(level: $BlockGetter, pos: $BlockPos_): $MapBanner;
        static CODEC: $Codec<$MapBanner>;
        static LIST_CODEC: $Codec<$List<$MapBanner>>;
        constructor(arg0: $BlockPos_, arg1: $DyeColor_, arg2: ($Component_) | undefined);
        get id(): string;
        get decoration(): $Holder<$MapDecorationType>;
    }
    export class $MapItemSavedData$MapPatch extends $Record {
        width(): number;
        height(): number;
        startX(): number;
        startY(): number;
        applyToMap(savedData: $MapItemSavedData): void;
        mapColors(): number[];
        static STREAM_CODEC: $StreamCodec<$ByteBuf, ($MapItemSavedData$MapPatch) | undefined>;
        constructor(startX: number, startY: number, width: number, height: number, mapColors: number[]);
    }
    export class $MapFrame {
        static load(compoundTag: $CompoundTag_): $MapFrame;
        getId(): string;
        save(): $CompoundTag;
        getPos(): $BlockPos;
        getRotation(): number;
        getEntityId(): number;
        static frameId(pos: $BlockPos_): string;
        constructor(pos: $BlockPos_, rotation: number, entityId: number);
        get id(): string;
        get pos(): $BlockPos;
        get rotation(): number;
        get entityId(): number;
    }
    export class $MapIndex extends $SavedData {
        static load(tag: $CompoundTag_, registries: $HolderLookup$Provider): $MapIndex;
        static factory(): $SavedData$Factory<$MapIndex>;
        getFreeAuxValueForMap(): $MapId;
        static FILE_NAME: string;
        constructor();
        get freeAuxValueForMap(): $MapId;
    }
    export class $MapDecorationTypes {
        static bootstrap(registry: $Registry<$MapDecorationType_>): $Holder<$MapDecorationType>;
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
        static addTargetDecoration(stack: $ItemStack_, pos: $BlockPos_, type: string, mapDecorationType: $Holder_<$MapDecorationType>): void;
        static load(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): $MapItemSavedData;
        static factory(): $SavedData$Factory<$MapItemSavedData>;
        setColor(x: number, z: number, color: number): void;
        getUpdatePacket(mapId: $MapId_, player: $Player): $Packet<never>;
        locked(): $MapItemSavedData;
        ml$getVanillaDecorationSize(): number;
        ml$addCustomMarker(arg0: $MLMapMarker<any>): void;
        getDecorations(): $Iterable<$MapDecoration>;
        scaled(): $MapItemSavedData;
        /**
         * Whether this `SavedData` needs saving to disk.
         */
        isExplorationMap(): boolean;
        removedFromFrame(pos: $BlockPos_, entityId: number): void;
        framedblocks$removeMapMarker(arg0: $BlockPos_): void;
        handler$gja000$moonlight$locked(arg0: $CallbackInfoReturnable<any>): void;
        handler$gja000$moonlight$scaled(arg0: $CallbackInfoReturnable<any>): void;
        handler$gja000$moonlight$save(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $CallbackInfoReturnable<any>): void;
        /**
         * Marks this `SavedData` dirty, to be saved to disk when the level next saves.
         */
        ml$setCustomDecorationsDirty(): void;
        static createForClient(scale: number, locked: boolean, dimension: $ResourceKey_<$Level>): $MapItemSavedData;
        isTrackedCountOverLimit(trackedCount: number): boolean;
        checkBanners(reader: $BlockGetter, x: number, z: number): void;
        static createFresh(x: number, arg1: number, z: number, arg3: boolean, scale: boolean, trackingPosition: $ResourceKey_<$Level>): $MapItemSavedData;
        getHoldingPlayer(player: $Player): $MapItemSavedData$HoldingPlayer;
        updateColor(x: number, z: number, color: number): boolean;
        /**
         * Adds the player passed to the list of visible players and checks to see which players are visible
         */
        tickCarriedBy(player: $Player, mapStack: $ItemStack_): void;
        toggleBanner(accessor: $LevelAccessor, pos: $BlockPos_): boolean;
        ml$getCustomData(): $Map<any, any>;
        toggleStation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $StationBlockEntity): boolean;
        getBanners(): $Collection<$MapBanner>;
        ml$getCustomDecorations(): $Map<any, any>;
        handler$gja000$moonlight$initCustomData(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ResourceKey_<any>, arg7: $CallbackInfo): void;
        handler$gja000$moonlight$tickCarriedBy(arg0: $Player, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        handler$gam000$create$onCheckBanners(arg0: $BlockGetter, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        handler$gja000$moonlight$checkCustomDeco(arg0: $BlockGetter, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        modifyReturnValue$gja000$moonlight$ml$isExplorationMap(arg0: boolean): boolean;
        addStationMarker(arg0: $StationMarker): void;
        addDecoration(decorationType: $Holder_<$MapDecorationType>, level: $LevelAccessor | null, id: string, x: number, arg4: number, z: number, arg6: $Component_ | null): void;
        removeDecoration(identifier: string): void;
        ml$setCustomDataDirty(arg0: $CustomMapData$Type_<any, any>, arg1: $Consumer_<any>): void;
        ml$copy(): $MapItemSavedData;
        addClientSideDecorations(decorations: $List_<$MapDecoration_>): void;
        /**
         * Marks this `SavedData` dirty, to be saved to disk when the level next saves.
         */
        ml$resetCustomDecoration(): void;
        ml$getCustomMarkers(): $Map<any, any>;
        ml$removeCustomMarker(arg0: string): boolean;
        ml$toggleCustomDecoration(accessor: $LevelAccessor, pos: $BlockPos_): boolean;
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
        get explorationMap(): boolean;
        get banners(): $Collection<$MapBanner>;
    }
    export class $MapDecorationType extends $Record {
        trackCount(): boolean;
        mapColor(): number;
        explorationMapElement(): boolean;
        assetId(): $ResourceLocation;
        showOnItemFrame(): boolean;
        hasMapColor(): boolean;
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
        rot(): number;
        getSpriteLocation(): $ResourceLocation;
        renderOnFrame(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MapDecoration>;
        constructor(type: $Holder_<$MapDecorationType>, x: number, y: number, rot: number, name: ($Component_) | undefined);
        get spriteLocation(): $ResourceLocation;
    }
    export class $MapItemSavedData$HoldingPlayer implements $IHoldingPlayerExtension {
        handler$ghl000$moonlight$checkLocked(arg0: $MapId_, arg1: $CallbackInfoReturnable<any>): void;
        handler$ghl000$moonlight$sanityCheck(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        handler$ghl000$moonlight$initializeDirty(arg0: $MapItemSavedData, arg1: $Player, arg2: $CallbackInfo): void;
        moonlight$setCustomDataDirty(arg0: $CustomMapData$Type_<any, any>, arg1: $Consumer_<any>): void;
        moonlight$setCustomMarkersDirty(): void;
        markColorsDirty(x: number, z: number): void;
        nextUpdatePacket(mapId: $MapId_): $Packet<never>;
        handler$ghl000$moonlight$lockData(arg0: number, arg1: number, arg2: $CallbackInfo): void;
        modifyReturnValue$ghl000$moonlight$addExtraPacketData(arg0: $Packet<any>, arg1: $MapId_): $Packet<any>;
        this$0: $MapItemSavedData;
        step: number;
        player: $Player;
        constructor(player: $MapItemSavedData, arg1: $Player);
    }
    export interface $MapDecorationType extends RegistryMarked<RegistryTypes.MapDecorationTypeTag, RegistryTypes.MapDecorationType> {}
}
