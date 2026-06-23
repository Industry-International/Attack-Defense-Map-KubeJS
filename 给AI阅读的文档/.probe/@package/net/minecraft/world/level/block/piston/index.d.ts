import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Map_, $List_ } from "@package/java/util";
import { $DirectionProperty, $EnumProperty, $PistonType, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $IExtendedPistonTile } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $IBlockHolder } from "@package/net/mehvahdjukaar/moonlight/api/block";
import { $BaseEntityBlock, $SoundType, $DirectionalBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/piston" {
    export class $PistonBaseBlock extends $DirectionalBlock {
        handler$zdl000$openpartiesandclaims$onMoveBlocks(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: boolean, arg4: $CallbackInfoReturnable<any>, arg5: $BlockPos_, arg6: $PistonStructureResolver, arg7: $Map_<any, any>, arg8: $List_<any>): void;
        /**
         * Checks if the piston can push the given BlockState.
         */
        static isPushable(state: $BlockState_, level: $Level_, pos: $BlockPos_, movementDirection: $Direction_, allowDestroy: boolean, pistonFacing: $Direction_): boolean;
        static SOUTH_AABB: $VoxelShape;
        explosionResistance: number;
        static DOWN_AABB: $VoxelShape;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UP_AABB: $VoxelShape;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static EAST_AABB: $VoxelShape;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static TRIGGER_EXTEND: number;
        static PLATFORM_THICKNESS: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        static NORTH_AABB: $VoxelShape;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$PistonBaseBlock>;
        static EXTENDED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static TRIGGER_CONTRACT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static TRIGGER_DROP: number;
        static WEST_AABB: $VoxelShape;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(isSticky: boolean, properties: $BlockBehaviour$Properties);
    }
    export class $PistonMath {
        static getMovementArea(bounds: $AABB_, dir: $Direction_, delta: number): $AABB;
        constructor();
    }
    export class $MovingPistonBlock extends $BaseEntityBlock {
        static newMovingBlockEntity(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean): $BlockEntity;
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
        static TYPE: $EnumProperty<$PistonType>;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$MovingPistonBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PistonHeadBlock extends $DirectionalBlock {
        explosionResistance: number;
        static DOWN_AABB: $VoxelShape;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static PLATFORM: number;
        static EAST_AABB: $VoxelShape;
        static UPDATE_LIMIT: number;
        static SHORT_EAST_ARM_AABB: $VoxelShape;
        static UPDATE_KNOWN_SHAPE: number;
        static NORTH_AABB: $VoxelShape;
        static TYPE: $EnumProperty<$PistonType>;
        static SHORT_WEST_ARM_AABB: $VoxelShape;
        soundType: $SoundType;
        item: $Item;
        static CODEC: $MapCodec<$PistonHeadBlock>;
        static SHORT_DOWN_ARM_AABB: $VoxelShape;
        static WEST_ARM_AABB: $VoxelShape;
        static SHORT_NORTH_ARM_AABB: $VoxelShape;
        static UPDATE_ALL_IMMEDIATE: number;
        static NORTH_ARM_AABB: $VoxelShape;
        static SHORT_SOUTH_ARM_AABB: $VoxelShape;
        static WEST_AABB: $VoxelShape;
        static INSTANT: number;
        static EDGE_MAX: number;
        static EAST_ARM_AABB: $VoxelShape;
        static SOUTH_AABB: $VoxelShape;
        static SOUTH_ARM_AABB: $VoxelShape;
        static DOWN_ARM_AABB: $VoxelShape;
        static EDGE_MIN: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UP_AABB: $VoxelShape;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UP_ARM_AABB: $VoxelShape;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static SHORT: $BooleanProperty;
        static AABB_OFFSET: number;
        static SHORT_UP_ARM_AABB: $VoxelShape;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PistonStructureResolver {
        resolve(): boolean;
        getPushDirection(): $Direction;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToPush(): $List<$BlockPos>;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToDestroy(): $List<$BlockPos>;
        static MAX_PUSH_DEPTH: number;
        constructor(level: $Level_, pistonPos: $BlockPos_, pistonDirection: $Direction_, extending: boolean);
        get pushDirection(): $Direction;
        get toPush(): $List<$BlockPos>;
        get toDestroy(): $List<$BlockPos>;
    }
    export class $PistonMovingBlockEntity extends $BlockEntity implements $IExtendedPistonTile, $IBlockHolder {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $PistonMovingBlockEntity): void;
        getDirection(): $Direction;
        handler$gjd000$moonlight$onFinishedShortPulse(arg0: $CallbackInfo): void;
        getMovementDirection(): $Direction;
        getMovedState(): $BlockState;
        getZOff(progress: number): number;
        getYOff(progress: number): number;
        getXOff(progress: number): number;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        /**
         * Removes the piston's BlockEntity and stops any movement
         */
        finalTick(): void;
        /**
         * @return whether this piston is extending
         */
        isExtending(): boolean;
        getLastTicked(): number;
        getProgress(progress: number): number;
        /**
         * @return whether this piston is extending
         */
        isSourcePiston(): boolean;
        setHeldBlock(arg0: $BlockState_): boolean;
        getHeldBlock(): $BlockState;
        tickMovedBlock(arg0: $Level_, arg1: $BlockPos_): void;
        worldPosition: $BlockPos;
        static TICK_MOVEMENT: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean);
        get direction(): $Direction;
        get movementDirection(): $Direction;
        get movedState(): $BlockState;
        get extending(): boolean;
        get lastTicked(): number;
        get sourcePiston(): boolean;
    }
}
