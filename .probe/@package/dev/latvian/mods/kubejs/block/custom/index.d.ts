import { $LevelAccessor, $LevelReader, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Map } from "@package/java/util";
import { $Consumer, $ToDoubleFunction_, $Consumer_, $ToIntFunction_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $DirectionProperty, $BlockSetType, $BlockSetType_, $EnumProperty, $IntegerProperty, $BooleanProperty, $WoodType_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $Holder_, $BlockPos_, $Direction$Axis, $Registry, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FallingBlock, $PressurePlateBlock, $EntityBlock, $SoundType, $CropBlock, $SimpleWaterloggedBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $BlockEntityTicker, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/latvian/mods/kubejs/block/custom" {
    export class $CropBlockBuilder$SurviveCallback {
    }
    export interface $CropBlockBuilder$SurviveCallback {
        survive(state: $BlockState_, reader: $LevelReader, pos: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CropBlockBuilder$SurviveCallback}.
     */
    export type $CropBlockBuilder$SurviveCallback_ = ((state: $BlockState, reader: $LevelReader, pos: $BlockPos) => boolean);
    export class $PillarBlockBuilder extends $BlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $BasicKubeBlock$Builder extends $BlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $PressurePlateBlockBuilder extends $ShapedBlockBuilder implements $ButtonOrPressurePlateBuilder {
        ticksToStayPressed(ticks: $TickDuration_): this;
        behaviour(behaviour: $BlockSetType_): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        static PRESSURE_PLATE_TAGS: $ResourceLocation[];
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $TrapdoorBlockBuilder extends $ShapedBlockBuilder {
        behaviour(wt: $BlockSetType_): this;
        static TRAPDOOR_TAGS: $ResourceLocation[];
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $ShapedBlockBuilder extends $BlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_, ...suffixes: string[]);
    }
    export class $FallingBlockBuilder$KubeJSFallingBlock extends $FallingBlock {
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
    }
    export class $BasicKubeBlock$WithEntity extends $BasicKubeBlock implements $EntityBlock {
        newBlockEntity(pos: $BlockPos_, state: $BlockState_): $BlockEntity;
        getTicker<T extends $BlockEntity>(level: $Level_, state: $BlockState_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        shape: $VoxelShape;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        blockBuilder: $BlockBuilder;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(p: $BlockBuilder);
    }
    export class $FenceGateBlockBuilder extends $ShapedBlockBuilder {
        behaviour(wt: $WoodType_): this;
        behaviour(wt: string): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static FENCE_GATE_TAGS: $ResourceLocation[];
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $CarpetBlockBuilder extends $ShapedBlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static CARPET_TAGS: $ResourceLocation[];
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $BasicCropBlockJS extends $CropBlock {
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static MAX_AGE: number;
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
        static AGE: $IntegerProperty;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$CropBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(builder: $CropBlockBuilder);
    }
    export class $ButtonBlockBuilder extends $ShapedBlockBuilder implements $ButtonOrPressurePlateBuilder {
        behaviour(behaviour: $BlockSetType_): this;
        ticksToStayPressed(ticks: $TickDuration_): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static BUTTON_TAGS: $ResourceLocation[];
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $CardinalBlockBuilder$WithEntity extends $CardinalBlockBuilder$CardinalKubeBlock implements $EntityBlock {
        newBlockEntity(pos: $BlockPos_, state: $BlockState_): $BlockEntity;
        getTicker<T extends $BlockEntity>(level: $Level_, state: $BlockState_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        shapes: $Map<$Direction, $VoxelShape>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        shape: $VoxelShape;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        blockBuilder: $BlockBuilder;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(p: $BlockBuilder);
    }
    export class $CardinalBlockBuilder extends $BlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $DoorBlockBuilder extends $ShapedBlockBuilder {
        wooden(): this;
        behaviour(wt: $BlockSetType_): this;
        static DOOR_TAGS: $ResourceLocation[];
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        static WOODEN_DOOR_TAGS: $ResourceLocation[];
        constructor(i: $ResourceLocation_);
    }
    export class $PressurePlateBlockBuilder$KubePressurePlateBlock extends $PressurePlateBlock {
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        type: $BlockSetType;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static PRESSED_AABB: $VoxelShape;
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
        static CODEC: $MapCodec<$PressurePlateBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static POWERED: $BooleanProperty;
        static TOUCH_AABB: $AABB;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AABB: $VoxelShape;
        hasCollision: boolean;
    }
    export class $SlabBlockBuilder extends $ShapedBlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        static SLAB_TAGS: $ResourceLocation[];
        constructor(i: $ResourceLocation_);
    }
    export class $WallBlockBuilder extends $ShapedBlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static WALL_TAGS: $ResourceLocation[];
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $StairBlockBuilder extends $ShapedBlockBuilder {
        static STAIR_TAGS: $ResourceLocation[];
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $BasicKubeBlock extends $Block implements $SimpleWaterloggedBlock {
        canPlaceLiquid(player: $Player, blockGetter: $BlockGetter, blockPos: $BlockPos_, blockState: $BlockState_, fluid: $Fluid_): boolean;
        pickupBlock(player: $Player, levelAccessor: $LevelAccessor, blockPos: $BlockPos_, blockState: $BlockState_): $ItemStack;
        placeLiquid(levelAccessor: $LevelAccessor, blockPos: $BlockPos_, blockState: $BlockState_, fluidState: $FluidState): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
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
        shape: $VoxelShape;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        blockBuilder: $BlockBuilder;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(p: $BlockBuilder);
    }
    export class $ButtonOrPressurePlateBuilder {
    }
    export interface $ButtonOrPressurePlateBuilder {
        ticksToStayPressed(ticks: $TickDuration_): this;
        behaviour(behaviour: $BlockSetType_): this;
    }
    export class $PillarBlockBuilder$WithEntity extends $PillarBlockBuilder$PillarKubeBlock implements $EntityBlock {
        newBlockEntity(pos: $BlockPos_, state: $BlockState_): $BlockEntity;
        getTicker<T extends $BlockEntity>(level: $Level_, state: $BlockState_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        shape: $VoxelShape;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        blockBuilder: $BlockBuilder;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        shapeX: $VoxelShape;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        shapeY: $VoxelShape;
        shapeZ: $VoxelShape;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(p: $BlockBuilder);
    }
    export class $CropBlockBuilder$ShapeBuilder {
        /**
         * Describe the shape of the crop at a specific age.
         * min/max coordinates are double values between 0 and 16.
         */
        shape(age: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): $CropBlockBuilder$ShapeBuilder;
        /**
         * Makes the block to have a box like beetroot for each stage.
         */
        beetroot(): $CropBlockBuilder$ShapeBuilder;
        /**
         * Makes the block to have a box like carrot for each stage.
         */
        carrot(): $CropBlockBuilder$ShapeBuilder;
        /**
         * Makes the block to have a box like potato for each stage.
         */
        potato(): $CropBlockBuilder$ShapeBuilder;
        /**
         * Makes the block to have a box like wheat for each stage.
         */
        wheat(): $CropBlockBuilder$ShapeBuilder;
        getShapes(): $List<$VoxelShape>;
        constructor(age: number);
        get shapes(): $List<$VoxelShape>;
    }
    export class $PillarBlockBuilder$PillarKubeBlock extends $BasicKubeBlock {
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
        shape: $VoxelShape;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        blockBuilder: $BlockBuilder;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        shapeX: $VoxelShape;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        shapeY: $VoxelShape;
        shapeZ: $VoxelShape;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(p: $BlockBuilder);
    }
    export class $CropBlockBuilder extends $BlockBuilder {
        /**
         * Set the age of the crop and the shape of the crop at that age.
         */
        age(age: number, builder: $Consumer_<$CropBlockBuilder$ShapeBuilder>): this;
        /**
         * Set the age of the crop. Note that the box will be the same for all ages (A full block size).
         */
        age(age: number): this;
        /**
         * Add a crop output with a specific amount.
         */
        crop(output: $Holder_<$Item>, chance: $NumberProvider_): this;
        /**
         * Add a crop output with exactly one output.
         */
        crop(output: $Holder_<$Item>): this;
        growTick(growSpeedCallback: $ToDoubleFunction_<$RandomTickCallback>): this;
        /**
         * Remove seed drops from the loot table, does not prevent seed item from creating.
         */
        noSeeds(): this;
        bonemeal(bonemealCallback: $ToIntFunction_<$RandomTickCallback>): this;
        survive(surviveCallback: $CropBlockBuilder$SurviveCallback_): this;
        farmersCanPlant(): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static CROP_ITEM_TAGS: $ResourceLocation[];
        static CROP_BLOCK_TAGS: $ResourceLocation[];
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(id: $ResourceLocation_);
    }
    export class $CardinalBlockBuilder$CardinalKubeBlock extends $BasicKubeBlock {
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        shapes: $Map<$Direction, $VoxelShape>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        shape: $VoxelShape;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        blockBuilder: $BlockBuilder;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(p: $BlockBuilder);
    }
    export class $FenceBlockBuilder extends $ShapedBlockBuilder {
        static FENCE_TAGS: $ResourceLocation[];
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $FallingBlockBuilder extends $BlockBuilder {
        dustColor(color: $KubeColor_): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
}
