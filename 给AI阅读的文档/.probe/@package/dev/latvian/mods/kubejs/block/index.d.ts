import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $LevelBlock, $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $Map, $List, $List_ } from "@package/java/util";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ItemPredicate_, $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$LeftClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Consumer_, $Predicate_, $Function, $Consumer, $ToIntFunction, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Registry, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockBehaviour$OffsetFunction, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $RandomTickCallback, $BlockStateRotateCallback, $AfterEntityFallenOnBlockCallback, $BlockStateModifyPlacementCallback, $BlockStateModifyCallback, $BlockStateMirrorCallback, $CanBeReplacedCallback, $EntityFallenOnBlockCallback, $BlockExplodedCallback, $EntityBlockCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEvent$FarmlandTrampleEvent, $BlockEvent$BreakEvent, $BlockEvent$EntityPlaceEvent, $BlockDropsEvent } from "@package/net/neoforged/neoforge/event/level";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $SpecialPlantable } from "@package/net/neoforged/neoforge/common";
import { $BlockEntityInfo } from "@package/dev/latvian/mods/kubejs/block/entity";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $BlockAndTintGetter, $LevelAccessor, $LevelReader, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockStatePredicate_ } from "@package/dev/latvian/mods/kubejs/block/state";
import { $KubeAssetGenerator, $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $VariantBlockStateGenerator } from "@package/dev/latvian/mods/kubejs/client";
import { $Item, $ItemNameBlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapColor } from "@package/net/minecraft/world/level/material";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $KubeRayTraceResult, $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $Property, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $TypeWrapperFactory } from "@package/dev/latvian/mods/rhino/util/wrap";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModelledBuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $SoundType_, $SoundType, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $HitResult, $AABB_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockDropSupplier_ } from "@package/dev/latvian/mods/kubejs/block/drop";
import { $Vector3f } from "@package/org/joml";
export * as entity from "@package/dev/latvian/mods/kubejs/block/entity";
export * as custom from "@package/dev/latvian/mods/kubejs/block/custom";
export * as state from "@package/dev/latvian/mods/kubejs/block/state";
export * as callback from "@package/dev/latvian/mods/kubejs/block/callback";
export * as drop from "@package/dev/latvian/mods/kubejs/block/drop";
export * as predicate from "@package/dev/latvian/mods/kubejs/block/predicate";

declare module "@package/dev/latvian/mods/kubejs/block" {
    export class $DetectorBlock$Builder extends $BlockBuilder {
        detectorId(id: string): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $BlockPlacedKubeEvent implements $KubeEntityEvent {
        /**
         * The level of the block that was placed.
         */
        getLevel(): $Level;
        /**
         * The entity that placed the block. Can be `null`, e.g. when a block is placed by a dispenser.
         */
        getEntity(): $Entity;
        /**
         * The block that is placed.
         */
        getBlock(): $LevelBlock;
        getPlayer(): $Player;
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
        constructor(event: $BlockEvent$EntityPlaceEvent);
        get level(): $Level;
        get entity(): $Entity;
        get block(): $LevelBlock;
        get player(): $Player;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $DetectorBlock extends $Block {
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(b: $DetectorBlock$Builder);
    }
    export class $BlockTintFunction$Mapped implements $BlockTintFunction {
        getColor(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, index: number): $KubeColor;
        map: $Int2ObjectMap<$BlockTintFunction>;
        constructor();
    }
    export class $MapColorHelper extends $Record implements $Function<$BlockState, $MapColor> {
        name(): string;
        static reverse(c: $MapColor): $MapColorHelper;
        static wrap(o: $Object): $MapColor;
        apply(blockState: $BlockState_): $MapColor;
        id(): number;
        color(): $MapColor;
        rgb(): $Vector3f;
        static findClosest(rgbi: number): $MapColorHelper;
        compose<V>(arg0: $Function_<V, $BlockState>): $Function<V, $MapColor>;
        andThen<V>(arg0: $Function_<$MapColor, V>): $Function<$BlockState, V>;
        static ID_MAP: $Map<number, $MapColorHelper>;
        static NAME_MAP: $Map<string, $MapColorHelper>;
        static NONE: $MapColorHelper;
        constructor(id: number, name: string, color: $MapColor, rgb: $Vector3f);
    }
    /**
     * Values that may be interpreted as {@link $MapColorHelper}.
     */
    export type $MapColorHelper_ = string | number;
    export class $KubeJSBlockEventHandler {
        static drops(event: $BlockDropsEvent): void;
        static leftClick(event: $PlayerInteractEvent$LeftClickBlock): void;
        static rightClick(event: $PlayerInteractEvent$RightClickBlock): void;
        static blockPlace(event: $BlockEvent$EntityPlaceEvent): void;
        static farmlandTrample(event: $BlockEvent$FarmlandTrampleEvent): void;
        static blockBreak(event: $BlockEvent$BreakEvent): void;
        constructor();
    }
    export class $BlockLeftClickedKubeEvent implements $KubePlayerEvent {
        /**
         * The item that was used to left click the block.
         */
        getItem(): $ItemStack;
        /**
         * The block that was left clicked.
         */
        getBlock(): $LevelBlock;
        /**
         * The face of the block that was left clicked.
         */
        getFacing(): $Direction;
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
        getEntity(): $LivingEntity;
        constructor(event: $PlayerInteractEvent$LeftClickBlock);
        get item(): $ItemStack;
        get block(): $LevelBlock;
        get facing(): $Direction;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $KubeJSBlockProperties extends $BlockBehaviour$Properties {
        offsetFunction: $BlockBehaviour$OffsetFunction;
        canOcclude: boolean;
        lightEmission: $ToIntFunction<$BlockState>;
        drops: $ResourceKey<$LootTable>;
        soundType: $SoundType;
        static CODEC: $Codec<$BlockBehaviour$Properties>;
        isRandomlyTicking: boolean;
        spawnTerrainParticles: boolean;
        blockBuilder: $BlockBuilder;
        isAir: boolean;
        hasCollision: boolean;
        constructor(blockBuilder: $BlockBuilder, copyPropertiesFrom: $Block_);
    }
    export class $BlockBrokenKubeEvent implements $KubePlayerEvent {
        /**
         * The block that was broken.
         */
        getBlock(): $LevelBlock;
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
        getEntity(): $LivingEntity;
        constructor(event: $BlockEvent$BreakEvent);
        get block(): $LevelBlock;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $BlockTintFunction$Fixed extends $Record implements $BlockTintFunction {
        color(): $KubeColor;
        getColor(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, index: number): $KubeColor;
        constructor(color: $KubeColor_);
    }
    export class $BlockTintFunction {
        static wrap(o: $Object): $BlockTintFunction;
        static REDSTONE: $BlockTintFunction;
        static BIRCH_FOLIAGE: $BlockTintFunction$Fixed;
        static TYPE_INFO: $TypeInfo;
        static GRASS: $BlockTintFunction;
        static MANGROVE_FOLIAGE: $BlockTintFunction$Fixed;
        static FOLIAGE: $BlockTintFunction;
        static EVERGREEN_FOLIAGE: $BlockTintFunction$Fixed;
        static REDSTONE_COLORS: $KubeColor[];
        static DEFAULT_FOLIAGE_COLOR: $KubeColor;
        static WATER: $BlockTintFunction;
    }
    export interface $BlockTintFunction {
        getColor(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, index: number): $KubeColor;
    }
    /**
     * Values that may be interpreted as {@link $BlockTintFunction}.
     */
    export type $BlockTintFunction_ = $BlockTintFunction_[] | string | ((state: $BlockState, level: $BlockAndTintGetter, pos: $BlockPos_, index: number) => $KubeColor_) | ((state: $BlockState, level: $BlockAndTintGetter, pos: $BlockPos, index: number) => $KubeColor_);
    export class $SeedItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(i: $ResourceLocation_);
    }
    export class $SoundTypeWrapper implements $TypeWrapperFactory<$SoundType> {
        wrap(o: $Object, target: $TypeInfo_): $Object;
        getMap(): $Map<string, $SoundType>;
        static INSTANCE: $SoundTypeWrapper;
        constructor();
        get map(): $Map<string, $SoundType>;
    }
    export class $BlockRotationType extends $Enum<$BlockRotationType> implements $StringRepresentable {
        static values(): $BlockRotationType[];
        static valueOf(name: string): $BlockRotationType;
        getSerializedName(): string;
        generateBlockModelJsons(gen: $KubeAssetGenerator): void;
        generateBlockStateJson(bs: $VariantBlockStateGenerator, block: $BlockBuilder): void;
        getRemappedEnumConstantName(): string;
        static VERTICAL: $BlockRotationType;
        static WALL_ATTACHED: $BlockRotationType;
        static HORIZONTAL: $BlockRotationType;
        static NONE: $BlockRotationType;
        static FACING: $BlockRotationType;
        properties: $List<$Property<never>>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockRotationType}.
     */
    export type $BlockRotationType_ = "none" | "horizontal" | "vertical" | "facing" | "wall_attached";
    export class $RandomTickKubeEvent implements $KubeLevelEvent {
        getBlock(): $LevelBlock;
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
        getLevel(): $Level;
        random: $RandomSource;
        constructor(level: $ServerLevel, pos: $BlockPos_, state: $BlockState_, random: $RandomSource);
        get block(): $LevelBlock;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get level(): $Level;
    }
    export class $BlockItemBuilder extends $ItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(i: $ResourceLocation_);
    }
    export class $BlockStoppedFallingKubeEvent implements $KubeEntityEvent {
        getLevel(): $Level;
        getEntity(): $Entity;
        getPlayer(): $Player;
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
        fallSpeed: number;
        replacedBlock: $LevelBlock;
        block: $LevelBlock;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $FallingBlockEntity, fallSpeed: number, replacedState: $BlockState_);
        get level(): $Level;
        get entity(): $Entity;
        get player(): $Player;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $BlockPickedKubeEvent implements $KubePlayerEvent {
        getTarget(): $KubeRayTraceResult;
        getLevel(): $Level;
        getPlayer(): $Player;
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
        getEntity(): $LivingEntity;
        level: $Level;
        block: $LevelBlock;
        player: $Player;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_, player: $Player, hitResult: $HitResult);
        get target(): $KubeRayTraceResult;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $BlockModificationKubeEvent implements $KubeEvent {
        /**
         * Modifies blocks that match the given predicate.
         * 
         * **NOTE**: tag predicates are not supported at this time.
         */
        modify(predicate: $BlockStatePredicate_, c: $Consumer_<$BlockModificationKubeEvent$BlockModifications>): void;
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
        constructor();
    }
    export class $BlockRightClickedKubeEvent implements $KubePlayerEvent {
        /**
         * The position of the block that was right clicked.
         */
        getItem(): $ItemStack;
        /**
         * The player that right clicked the block.
         */
        getEntity(): $Player;
        /**
         * The block that was right clicked.
         */
        getBlock(): $LevelBlock;
        getHitResult(): $BlockHitResult;
        /**
         * The face of the block being right clicked.
         */
        getFacing(): $Direction;
        /**
         * The hand that was used to right click the block.
         */
        getHand(): $InteractionHand;
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
        constructor(item: $ItemStack_, player: $Player, hand: $InteractionHand_, pos: $BlockPos_, direction: $Direction_, hitResult: $BlockHitResult);
        get item(): $ItemStack;
        get entity(): $Player;
        get block(): $LevelBlock;
        get hitResult(): $BlockHitResult;
        get facing(): $Direction;
        get hand(): $InteractionHand;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $BlockRenderType extends $Enum<$BlockRenderType> {
        static values(): $BlockRenderType[];
        static valueOf(name: string): $BlockRenderType;
        static CUTOUT: $BlockRenderType;
        static TRANSLUCENT: $BlockRenderType;
        static CUTOUT_MIPPED: $BlockRenderType;
        static SOLID: $BlockRenderType;
    }
    /**
     * Values that may be interpreted as {@link $BlockRenderType}.
     */
    export type $BlockRenderType_ = "solid" | "cutout" | "cutout_mipped" | "translucent";
    export class $BlockStartedFallingKubeEvent implements $KubeEntityEvent {
        getLevel(): $Level;
        getEntity(): $Entity;
        getBlock(): $LevelBlock;
        getPlayer(): $Player;
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
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $FallingBlockEntity);
        get level(): $Level;
        get entity(): $Entity;
        get block(): $LevelBlock;
        get player(): $Player;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $BlockModificationKubeEvent$BlockModifications extends $Record {
        block(): $Block;
        setNameKey(key: string): void;
        setIsRandomlyTicking(v: boolean): void;
        setHasCollision(v: boolean): void;
        setRandomTickCallback(callback: $Consumer_<$RandomTickCallback>): void;
        setExplosionResistance(v: number): void;
        setSoundType(v: $SoundType_): void;
        setLightEmission(v: number): void;
        setSpeedFactor(v: number): void;
        setDestroySpeed(v: number): void;
        setJumpFactor(v: number): void;
        setRequiresTool(v: boolean): void;
        setFriction(v: number): void;
        constructor(block: $Block_);
        set nameKey(value: string);
        set isRandomlyTicking(value: boolean);
        set hasCollision(value: boolean);
        set randomTickCallback(value: $Consumer_<$RandomTickCallback>);
        set explosionResistance(value: number);
        set soundType(value: $SoundType_);
        set lightEmission(value: number);
        set speedFactor(value: number);
        set destroySpeed(value: number);
        set jumpFactor(value: number);
        set requiresTool(value: boolean);
        set friction(value: number);
    }
    export class $FarmlandTrampledKubeEvent implements $KubeEntityEvent {
        /**
         * The level that the farmland and the entity are in.
         */
        getLevel(): $Level;
        /**
         * The entity that is attempting to trample the farmland.
         */
        getEntity(): $Entity;
        /**
         * The distance of the entity from the block.
         */
        getDistance(): number;
        /**
         * The farmland block.
         */
        getBlock(): $LevelBlock;
        getPlayer(): $Player;
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
        constructor(event: $BlockEvent$FarmlandTrampleEvent);
        get level(): $Level;
        get entity(): $Entity;
        get distance(): number;
        get block(): $LevelBlock;
        get player(): $Player;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $BlockBuilder extends $ModelledBuilderBase<$Block> {
        createProperties(): $BlockBehaviour$Properties;
        /**
         * Add a blockstate property to the block.
         * 
         * For example, facing, lit, etc.
         */
        property(property: $Property<never>): this;
        /**
         * Set the shape of the block.
         */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, scale16: boolean): this;
        /**
         * Set the shape of the block.
         */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): this;
        /**
         * Set the color of a specific layer of the block.
         */
        color(color: $BlockTintFunction_): this;
        /**
         * Set the color of a specific layer of the block.
         */
        color(index: number, color: $BlockTintFunction_): this;
        /**
         * Tags both the block and the item with the given tag.
         */
        tag(tag: $ResourceLocation_[]): this;
        /**
         * Modifies the block's item representation.
         */
        item(i: $Consumer_<$ItemBuilder>): this;
        /**
         * Note block instrument.
         */
        instrument(i: $NoteBlockInstrument_): this;
        noSoundType(): this;
        woodSoundType(): this;
        /**
         * Makes the block view blocking.
         */
        viewBlocking(b: boolean): this;
        stoneSoundType(): this;
        /**
         * Helper method for setting the render type of the block to `cutout` correctly.
         */
        defaultCutout(): this;
        gravelSoundType(): this;
        /**
         * Makes the block require a tool to have drops when broken.
         */
        requiresTool(f: boolean): this;
        /**
         * Makes the block require a tool to have drops when broken.
         */
        requiresTool(): this;
        /**
         * Makes mobs not spawn on the block.
         */
        noValidSpawns(b: boolean): this;
        copyPropertiesFrom(block: $Block_): this;
        /**
         * Set how slippery the block is.
         */
        slipperiness(f: number): this;
        /**
         * Makes the block a redstone conductor.
         */
        redstoneConductor(b: boolean): this;
        generateLootTable(generator: $KubeDataGenerator): $LootTable;
        /**
         * @deprecated
         */
        generateLootTable(): $LootTable;
        /**
         * Checks if the block can be waterlogged.
         */
        canBeWaterlogged(): boolean;
        /**
         * Set how this block bounces/moves entities that land on top of this. Do not use this to modify the block, use fallOn instead!
         * Use ctx.bounce(height) or ctx.setVelocity(x, y, z) to change the entities velocity.
         */
        afterFallenOn(callbackJS: $Consumer_<$AfterEntityFallenOnBlockCallback>): this;
        /**
         * Makes the block can be waterlogged.
         */
        waterlogged(): this;
        /**
         * Sets the blast resistance of the block. Defaults to 3.
         */
        resistance(r: number): this;
        /**
         * Makes the block transparent.
         */
        transparent(b: boolean): this;
        /**
         * Makes the block unbreakable.
         */
        unbreakable(): this;
        /**
         * Sets random tick callback for this black.
         */
        randomTick(randomTickCallback: $Consumer_<$RandomTickCallback>): this;
        /**
         * Sets the block's map color. Defaults to NONE.
         */
        mapColor(m: $MapColor): this;
        /**
         * Set how fast you can walk on the block.
         * 
         * Any value above 1 will make you walk insanely fast as your speed is multiplied by this value each tick.
         * 
         * Recommended values are between 0.1 and 1, useful for mimicking soul sand or ice.
         */
        speedFactor(f: number): this;
        /**
         * Sets the render type of the block. Can be `cutout`, `cutout_mipped`, `translucent`, or `basic`.
         */
        renderType(l: $BlockRenderType_): this;
        /**
         * Sets the light level of the block. Defaults to 0 (no light).
         */
        lightLevel(light: number): this;
        /**
         * Change drops of this block
         */
        drops(drops: $BlockDropSupplier_): this;
        /**
         * Bounces entities that land on this block by bounciness * their fall velocity.
         * Do not make bounciness negative, as that is a recipe for a long and laggy trip to the void
         */
        bounciness(bounciness: number): this;
        /**
         * Sets the hardness of the block. Defaults to 1.5.
         * 
         * Setting this to -1 will make the block unbreakable like bedrock.
         */
        hardness(h: number): this;
        /**
         * Makes the block suffocating.
         */
        suffocating(b: boolean): this;
        /**
         * Set the default state of the block.
         */
        defaultState(callbackJS: $Consumer_<$BlockStateModifyCallback>): this;
        /**
         * Makes the block not collide with entities.
         */
        noCollision(): this;
        /**
         * Set what happens when an entity is inside the block
         * This is called every tick for every entity inside the block, so be careful what you do here.
         * This will only be called if the entity's bounding box overlaps with the block's collision.
         */
        entityInside(callbackJS: $Consumer_<$EntityBlockCallback>): this;
        /**
         * Sets the block's map color dynamically per block state. If unset, defaults to NONE.
         */
        dynamicMapColor(m: $Function_<$BlockState, $Object>): this;
        static createShape(boxes: $List_<$AABB_>): $VoxelShape;
        cropSoundType(): this;
        /**
         * @deprecated
         */
        setWaterlogged(waterlogged: boolean): this;
        /**
         * Set the callback used for determining how the block rotates
         */
        rotateState(callbackJS: $Consumer_<$BlockStateRotateCallback>): this;
        /**
         * @deprecated
         */
        getWaterlogged(): boolean;
        grassSoundType(): this;
        sandSoundType(): this;
        /**
         * Helper method for setting the render type of the block to `translucent` correctly.
         */
        defaultTranslucent(): this;
        /**
         * Set the callback used for determining how the block is mirrored
         */
        mirrorState(callbackJS: $Consumer_<$BlockStateMirrorCallback>): this;
        glassSoundType(): this;
        /**
         * Set the callback for determining the blocks state when placed.
         */
        placementState(callbackJS: $Consumer_<$BlockStateModifyPlacementCallback>): this;
        /**
         * Set if the block can be replaced by something else.
         */
        canBeReplaced(callbackJS: $Predicate_<$CanBeReplacedCallback>): this;
        /**
         * Sets the opacity of the block. Opaque blocks do not let light through.
         */
        opaque(o: boolean): this;
        /**
         * Set how high you can jump on the block.
         */
        jumpFactor(f: number): this;
        /**
         * Sets the block's sound type. Defaults to wood.
         */
        soundType(m: $SoundType_): this;
        /**
         * Creates a Block Entity for this block
         */
        blockEntity(callback: $Consumer_<$BlockEntityInfo>): this;
        /**
         * Set the callback used for right-clicking on the block
         */
        rightClick(callbackJS: $Consumer_<$BlockRightClickedKubeEvent>): this;
        transformObject(obj: $Block_): $Block;
        /**
         * Sets the block should be a full block or not, like cactus or doors.
         */
        fullBlock(f: boolean): this;
        /**
         * Set how this block reacts after an explosion. Note the block has already been destroyed at this point
         */
        exploded(callbackJS: $Consumer_<$BlockExplodedCallback>): this;
        /**
         * Tags the item with the given tag.
         */
        tagItem(tag: $ResourceLocation_[]): this;
        /**
         * Tags the block with the given tag.
         */
        tagBlock(tag: $ResourceLocation_[]): this;
        /**
         * Makes the block not be solid.
         */
        notSolid(): this;
        /**
         * Tags both the block and the item with the given tag.
         */
        tagBoth(tag: $ResourceLocation_[]): this;
        /**
         * Clears all drops for the block.
         */
        noDrops(): this;
        /**
         * Set what happens when an entity falls on the block. Do not use this for moving them, use bounce instead!
         */
        fallenOn(callbackJS: $Consumer_<$EntityFallenOnBlockCallback>): this;
        /**
         * Set the block to have no corresponding item.
         */
        noItem(): this;
        /**
         * Set what happens when an entity steps on the block
         * This is called every tick for every entity standing on the block, so be careful what you do here.
         */
        steppedOn(callbackJS: $Consumer_<$EntityBlockCallback>): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(id: $ResourceLocation_);
    }
    export class $DetectorBlockKubeEvent implements $KubeLevelEvent {
        /**
         * The level where the detector block is located.
         */
        getLevel(): $Level;
        /**
         * The detector block.
         */
        getBlock(): $LevelBlock;
        /**
         * If the detector block is powered.
         */
        isPowered(): boolean;
        /**
         * The id of the detector block when it was registered.
         */
        getDetectorId(): string;
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
        constructor(i: string, l: $Level_, p: $BlockPos_, pow: boolean);
        get level(): $Level;
        get block(): $LevelBlock;
        get powered(): boolean;
        get detectorId(): string;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $BlockDropsKubeEvent implements $KubeEntityEvent {
        getEntity(): $Entity;
        removeItem(item: $ItemPredicate_): void;
        addItem(item: $ItemStack_): $ItemEntity;
        /**
         * The block that was broken.
         */
        getBlock(): $LevelBlock;
        /**
         * The experience dropped by the block.
         */
        getXp(): number;
        /**
         * Sets the experience dropped by the block.
         */
        setXp(xp: number): void;
        /**
         * The tool used when breaking this block. May be null.
         */
        getTool(): $ItemStack;
        /**
         * Dropped items. Immutable.
         */
        getItems(): $List<$ItemStack>;
        /**
         * Dropped item entities.
         */
        getItemEntities(): $List<$ItemEntity>;
        containsItem(item: $ItemPredicate_): boolean;
        getPlayer(): $Player;
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
        getLevel(): $Level;
        constructor(event: $BlockDropsEvent);
        get entity(): $Entity;
        get block(): $LevelBlock;
        get tool(): $ItemStack;
        get items(): $List<$ItemStack>;
        get itemEntities(): $List<$ItemEntity>;
        get player(): $Player;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get level(): $Level;
    }
    export class $SeedItemBuilder$SeedKubeItem extends $ItemNameBlockItem implements $SpecialPlantable {
        villagerCanPlantItem(villager: $Villager): boolean;
        spawnPlantAtPosition(stack: $ItemStack_, level: $LevelAccessor, pos: $BlockPos_, direction: $Direction_): void;
        canPlacePlantAtPosition(stack: $ItemStack_, level: $LevelReader, pos: $BlockPos_, direction: $Direction_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(b: $SeedItemBuilder);
    }
}
