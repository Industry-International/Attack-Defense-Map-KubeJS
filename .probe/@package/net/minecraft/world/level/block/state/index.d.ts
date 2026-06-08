import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $EntityType_, $EntityType, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $CustomBlockState, $CustomBlock } from "@package/com/moulberry/axiom/custom_blocks";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $IBlockStateExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $NoteBlockInstrument, $Property, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $DerivedBlock$Settings } from "@package/eu/ha3/presencefootsteps/api";
import { $RenderShape, $Mirror_, $SoundType_, $SoundType, $Block, $Block_, $Rotation_, $SupportType_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $BlockStateKJS, $BlockBehaviourKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $HitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $FastMap } from "@package/malte0811/ferritecore/fastmap";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $PhysicsBlockPropertiesDefinition_, $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_ } from "@package/dev/ryanhcode/sable/physics/config/block_properties";
import { $BlockStateExtension } from "@package/dev/ryanhcode/sable/mixinterface/block_properties";
import { $AbstractBlockSettingsAccessor, $AbstractBlockAccessor } from "@package/net/fabricmc/fabric/mixin/object/builder";
import { $BlockBehaviourAccessor, $StateHolderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Map, $Map$Entry, $List, $Map_, $Collection_, $Collection } from "@package/java/util";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $ToIntFunction, $Function_, $ToIntFunction_ } from "@package/java/util/function";
import { $Reference2ObjectArrayMap, $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $PathType, $PathType_, $PathComputationType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerPlayer$RespawnPosAngle, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $IState } from "@package/com/ishland/c2me/base/mixin/access";
import { $LootTable, $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockBehaviourInvoker } from "@package/org/embeddedt/modernfix/common/mixin/perf/reduce_blockstate_cache_rebuilds";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $BlockGetter, $SignalGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $FluidState, $Fluid_, $PushReaction_, $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $ImmutableList, $Table } from "@package/com/google/common/collect";
import { $Pattern } from "@package/java/util/regex";
import { $FastMapStateHolder, $BlockStateCacheAccess } from "@package/malte0811/ferritecore/ducks";
import { $IBlockState } from "@package/org/embeddedt/modernfix/duck";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StateCache, $IStateCacheAccessor } from "@package/xfacthd/framedblocks/api/block/cache";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $AccessorStateDefinitionBuilder } from "@package/xfacthd/framedblocks/mixin";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$1 } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker } from "@package/net/minecraft/world/level/block/entity";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
export * as pattern from "@package/net/minecraft/world/level/block/state/pattern";
export * as properties from "@package/net/minecraft/world/level/block/state/properties";
export * as predicate from "@package/net/minecraft/world/level/block/state/predicate";

declare module "@package/net/minecraft/world/level/block/state" {
    export class $BlockBehaviour$OffsetType extends $Enum<$BlockBehaviour$OffsetType> {
        static values(): $BlockBehaviour$OffsetType[];
        static valueOf(arg0: string): $BlockBehaviour$OffsetType;
        static XZ: $BlockBehaviour$OffsetType;
        static XYZ: $BlockBehaviour$OffsetType;
        static NONE: $BlockBehaviour$OffsetType;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetType}.
     */
    export type $BlockBehaviour$OffsetType_ = "none" | "xz" | "xyz";
    export class $StateDefinition<O, S extends $StateHolder<O, S>> {
        getProperty(arg0: string): $Property<never>;
        getProperties(): $Collection<$Property<never>>;
        getOwner(): O;
        any(): S;
        getPossibleStates(): $ImmutableList<S>;
        static appendPropertyCodec<S extends $StateHolder<never, S>, T extends $Comparable<T>>(arg0: $MapCodec_<S>, arg1: $Supplier_<S>, arg2: string, arg3: $Property<T>): $MapCodec<S>;
        static NAME_PATTERN: $Pattern;
        constructor(arg0: $Function_<O, S>, arg1: O, arg2: $StateDefinition$Factory_<O, S>, arg3: $Map_<string, $Property<never>>);
        get properties(): $Collection<$Property<never>>;
        get owner(): O;
        get possibleStates(): $ImmutableList<S>;
    }
    export class $BlockBehaviour$BlockStateBase$Cache implements $BlockStateCacheAccess {
        isFaceSturdy(arg0: $Direction_, arg1: $SupportType_): boolean;
        getCollisionShape(): $VoxelShape;
        setOcclusionShapes(arg0: $VoxelShape[]): void;
        setFaceSturdy(arg0: boolean[]): void;
        getFaceSturdy(): boolean[];
        setCollisionShape(arg0: $VoxelShape): void;
        getOcclusionShapes(): $VoxelShape[];
        largeCollisionShape: boolean;
        lightBlock: number;
        isCollisionShapeFullBlock: boolean;
        collisionShape: $VoxelShape;
        solidRender: boolean;
        occlusionShapes: $VoxelShape[];
        propagatesSkylightDown: boolean;
        constructor(arg0: $BlockState_);
    }
    export class $StateDefinition$Builder<O, S extends $StateHolder<O, S>> implements $AccessorStateDefinitionBuilder {
        add(...arg0: $Property<never>[]): $StateDefinition$Builder<O, S>;
        create(arg0: $Function_<O, S>, arg1: $StateDefinition$Factory_<O, S>): $StateDefinition<O, S>;
        framedblocks$getProperties(): $Map<string, $Property<never>>;
        constructor(arg0: O);
    }
    export class $BlockBehaviour implements $FeatureElement, $BlockBehaviourInvoker, $AbstractBlockAccessor, $BlockBehaviourAccessor$1, $BlockBehaviourKJS, $BlockBehaviourAccessor {
        properties(): $BlockBehaviour$Properties;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        getSeed(arg0: $BlockState_, arg1: $BlockPos_): number;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        static propertiesCodec<B extends $Block>(): $RecordCodecBuilder<B, $BlockBehaviour$Properties>;
        codec(): $MapCodec<$Block>;
        updateIndirectNeighbourShapes(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: number, arg4: number): void;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getRenderShape(arg0: $BlockState_): $RenderShape;
        getFluidState(arg0: $BlockState_): $FluidState;
        requiredFeatures(): $FeatureFlagSet;
        asItem(): $Item;
        triggerEvent(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: number, arg4: number): boolean;
        getMaxVerticalOffset(): number;
        isOcclusionShapeFullBlock(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        setExplosionResistance(arg0: number): void;
        getMaxHorizontalOffset(): number;
        setRandomTickCallback(callback: $Consumer_<any>): void;
        setHasCollision(arg0: boolean): void;
        setIsRandomlyTicking(arg0: boolean): void;
        asBlock(): $Block;
        isRandomlyTicking(arg0: $BlockState_): boolean;
        getOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getMenuProvider(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): $MenuProvider;
        getDirectSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        canBeReplaced(arg0: $BlockState_, arg1: $Fluid_): boolean;
        canBeReplaced(arg0: $BlockState_, arg1: $BlockPlaceContext): boolean;
        getShadeBrightness(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        getLightBlock(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        getVisualShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        spawnAfterBreak(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $ItemStack_, arg4: boolean): void;
        isPathfindable(arg0: $BlockState_, arg1: $PathComputationType_): boolean;
        skipRendering(arg0: $BlockState_, arg1: $BlockState_, arg2: $Direction_): boolean;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        isSignalSource(arg0: $BlockState_): boolean;
        useWithoutItem(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $BlockHitResult): $InteractionResult;
        onProjectileHit(arg0: $Level_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $Projectile): void;
        getDestroyProgress(arg0: $BlockState_, arg1: $Player, arg2: $BlockGetter, arg3: $BlockPos_): number;
        attack(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): void;
        useItemOn(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        isAir(arg0: $BlockState_): boolean;
        getLootTable(): $ResourceKey<$LootTable>;
        /**
         * @deprecated
         */
        getSoundType(arg0: $BlockState_): $SoundType;
        isCollisionShapeFullBlock(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getDrops(arg0: $BlockState_, arg1: $LootParams$Builder): $List<$ItemStack>;
        randomTick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        entityInside(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): void;
        onExplosionHit(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Explosion, arg4: $BiConsumer_<$ItemStack, $BlockPos>): void;
        useShapeForLightOcclusion(arg0: $BlockState_): boolean;
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        propagatesSkylightDown(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        getBlockSupportShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getInteractionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        static simpleCodec<B extends $Block>(arg0: $Function_<$BlockBehaviour$Properties, B>): $MapCodec<B>;
        setSpeedFactor(arg0: number): void;
        setJumpFactor(arg0: number): void;
        setSoundType(arg0: $SoundType_): void;
        defaultDestroyTime(): number;
        defaultMapColor(): $MapColor;
        setFriction(arg0: number): void;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        getKey(): $ResourceKey<$Block>;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getId(): string;
        getTypeData(): $Map<string, $Object>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<$Block>>;
        getIdLocation(): $ResourceLocation;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getProperties(): $BlockBehaviour$Properties;
        invokeGetFluidState(arg0: $BlockState_): $FluidState;
        invokeIsRandomlyTicking(arg0: $BlockState_): boolean;
        create$getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getHasCollision(): boolean;
        explosionResistance: number;
        drops: $ResourceKey<$LootTable>;
        dynamicShape: boolean;
        static UPDATE_SHAPE_ORDER: $Direction[];
        speedFactor: number;
        hasCollision: boolean;
        soundType: $SoundType;
        friction: number;
        jumpFactor: number;
        constructor(arg0: $BlockBehaviour$Properties);
        get maxVerticalOffset(): number;
        get maxHorizontalOffset(): number;
        set randomTickCallback(value: $Consumer_<any>);
        get lootTable(): $ResourceKey<$LootTable>;
        get key(): $ResourceKey<$Block>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get id(): string;
        get typeData(): $Map<string, $Object>;
        get tags(): $List<$ResourceLocation>;
        get tagKeys(): $List<$TagKey<$Block>>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
    }
    export class $BlockState extends $BlockBehaviour$BlockStateBase implements $IBlockStateExtension, $BlockStateExtension, $CustomBlockState {
        getProperty(property: $Property<any>): $Comparable<any>;
        getCustomBlock(): $CustomBlock;
        getVanillaState(): $BlockState;
        sable$getProperty(arg0: $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_<any>): $Object;
        axiomHasProperty(property: $Property<any>): boolean;
        setPropertyUnsafe(property: $Property<any>, value: $Comparable_<any>): $CustomBlockState;
        sable$loadProperties(arg0: $StateDefinition<any, any>, arg1: $PhysicsBlockPropertiesDefinition_): void;
        isEmpty(): boolean;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Rotation_): $BlockState;
        shouldHideAdjacentFluidFace(arg0: $Direction_, arg1: $FluidState): boolean;
        getCloneItemStack(arg0: $HitResult, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): $ItemStack;
        onBlockExploded(arg0: $Level_, arg1: $BlockPos_, arg2: $Explosion): void;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): void;
        getLightEmission(arg0: $BlockGetter, arg1: $BlockPos_): number;
        isSlimeBlock(): boolean;
        getAppearance(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_, arg4: $BlockPos_): $BlockState;
        isFireSource(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getWeakChanges(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        canHarvestBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Player): boolean;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        onCaughtFire(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $LivingEntity): void;
        onNeighborChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): void;
        isStickyBlock(): boolean;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        canBeHydrated(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockPos_): boolean;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        getRespawnPosition(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_, arg3: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        ignitedByLava(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        isPortalFrame(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isConduitFrame(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob): $PathType;
        addLandingEffects(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $LivingEntity, arg4: number): boolean;
        getSoundType(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): $SoundType;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): number;
        isScaffolding(arg0: $LivingEntity): boolean;
        setBedOccupied(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: boolean): void;
        getBedDirection(arg0: $LevelReader, arg1: $BlockPos_): $Direction;
        collisionExtendsVertically(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        handler$zjg000$fabric_rendering_fluids_v1$shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $CallbackInfoReturnable<any>): void;
        isBed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        onTreeGrow(arg0: $LevelReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $TreeConfiguration): boolean;
        canStickTo(arg0: $BlockState_): boolean;
        isFertile(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getExpDrop(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $Entity, arg4: $ItemStack_): number;
        isBurning(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        isLadder(arg0: $LevelReader, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        addRunningEffects(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): boolean;
        getStateAtViewpoint(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Vec3_): $BlockState;
        hasDynamicLightEmission(): boolean;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        getEnchantPowerBonus(arg0: $LevelReader, arg1: $BlockPos_): number;
        shouldCheckWeakPower(arg0: $SignalGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        getToolModifiedState(arg0: $UseOnContext, arg1: $ItemAbility_, arg2: boolean): $BlockState;
        canRedstoneConnectTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        supportsExternalFaceHiding(): boolean;
        getBubbleColumnDirection(): $BubbleColumnDirection;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        onDestroyedByPlayer(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: boolean, arg4: $FluidState): boolean;
        onDestroyedByPushReaction(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $FluidState): void;
        canDropFromExplosion(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): boolean;
        static PROPERTIES_TAG: string;
        owner: $Block;
        cache: $BlockBehaviour$BlockStateBase$Cache;
        static CODEC: $Codec<$BlockState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$BlockState>;
        constructor(arg0: $Block_, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<$BlockState_>);
        get customBlock(): $CustomBlock;
        get vanillaState(): $BlockState;
        get empty(): boolean;
        get slimeBlock(): boolean;
        get stickyBlock(): boolean;
        get bubbleColumnDirection(): $BubbleColumnDirection;
    }
    /**
     * Values that may be interpreted as {@link $BlockState}.
     */
    export type $BlockState_ = $Block_;
    export class $StateDefinition$Factory<O, S> {
    }
    export interface $StateDefinition$Factory<O, S> {
        create(arg0: O, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<S>): S;
    }
    /**
     * Values that may be interpreted as {@link $StateDefinition$Factory}.
     */
    export type $StateDefinition$Factory_<O, S> = ((arg0: O, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable<never>>, arg2: $MapCodec<S>) => S);
    export class $BlockBehaviour$BlockStateBase extends $StateHolder<$Block, $BlockState> implements $IBlockState, $BlockStateKJS, $IStateCacheAccessor {
        is(arg0: $TagKey_<$Block>, arg1: $Predicate_<$BlockBehaviour$BlockStateBase>): boolean;
        is(arg0: $HolderSet_<$Block>): boolean;
        is(arg0: $Holder_<$Block>): boolean;
        is(arg0: $ResourceKey_<$Block>): boolean;
        is(arg0: $Block_): boolean;
        is(arg0: $TagKey_<$Block>): boolean;
        getOffset(arg0: $BlockGetter, arg1: $BlockPos_): $Vec3;
        /**
         * @deprecated
         */
        rotate(arg0: $Rotation_): $BlockState;
        tick(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $RandomSource): void;
        initCache(): void;
        clearCache(): void;
        getSeed(arg0: $BlockPos_): number;
        getShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        getShape(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CollisionContext): $VoxelShape;
        mirror(arg0: $Mirror_): $BlockState;
        getBlock(): $Block;
        handler$jag000$axiom$useWithoutItemHead(level: $Level_, player: $Player, res: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$jag000$axiom$updateShapeRet(direction: $Direction_, blockState: $BlockState_, levelAccessor: $LevelAccessor, blockPos: $BlockPos_, blockPos2: $BlockPos_, cir: $CallbackInfoReturnable<any>): void;
        handler$jag000$axiom$useWithoutItemReturn(level: $Level_, player: $Player, res: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$iin000$ferritecore$cacheStateHead(arg0: $CallbackInfo): void;
        handler$bcp000$iris$getShadeBrightness(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CallbackInfoReturnable<any>): void;
        handler$iin000$ferritecore$cacheStateTail(arg0: $CallbackInfo): void;
        handler$jag000$axiom$updateShapeHead(direction: $Direction_, blockState: $BlockState_, levelAccessor: $LevelAccessor, blockPos: $BlockPos_, blockPos2: $BlockPos_, cir: $CallbackInfoReturnable<any>): void;
        modifyReturnValue$jag001$axiom$getShape(shape: $VoxelShape, context: $CollisionContext): $VoxelShape;
        getDestroySpeed(arg0: $BlockGetter, arg1: $BlockPos_): number;
        updateIndirectNeighbourShapes(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number, arg3: number): void;
        updateIndirectNeighbourShapes(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number): void;
        shouldSpawnTerrainParticles(): boolean;
        onRemove(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean): void;
        getRenderShape(): $RenderShape;
        getFluidState(): $FluidState;
        triggerEvent(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: number): boolean;
        hasBlockEntity(): boolean;
        /**
         * @deprecated
         */
        getLightEmission(): number;
        hasPostProcess(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        isRandomlyTicking(): boolean;
        isViewBlocking(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        emissiveRendering(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        ignitedByLava(): boolean;
        getMapColor(arg0: $BlockGetter, arg1: $BlockPos_): $MapColor;
        getOcclusionShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        getMenuProvider(arg0: $Level_, arg1: $BlockPos_): $MenuProvider;
        getDirectSignal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        canBeReplaced(): boolean;
        canBeReplaced(arg0: $Fluid_): boolean;
        canBeReplaced(arg0: $BlockPlaceContext): boolean;
        getBlockHolder(): $Holder<$Block>;
        isFaceSturdy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $SupportType_): boolean;
        isFaceSturdy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getShadeBrightness(arg0: $BlockGetter, arg1: $BlockPos_): number;
        getLightBlock(arg0: $BlockGetter, arg1: $BlockPos_): number;
        getVisualShape(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CollisionContext): $VoxelShape;
        updateShape(arg0: $Direction_, arg1: $BlockState_, arg2: $LevelAccessor, arg3: $BlockPos_, arg4: $BlockPos_): $BlockState;
        spawnAfterBreak(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $ItemStack_, arg3: boolean): void;
        isPathfindable(arg0: $PathComputationType_): boolean;
        skipRendering(arg0: $BlockState_, arg1: $Direction_): boolean;
        isCacheInvalid(): boolean;
        isSignalSource(): boolean;
        isSolidRender(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        useWithoutItem(arg0: $Level_, arg1: $Player, arg2: $BlockHitResult): $InteractionResult;
        onProjectileHit(arg0: $Level_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $Projectile): void;
        getDestroyProgress(arg0: $Player, arg1: $BlockGetter, arg2: $BlockPos_): number;
        entityCanStandOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        hasOffsetFunction(): boolean;
        isValidSpawn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $EntityType_<never>): boolean;
        attack(arg0: $Level_, arg1: $BlockPos_, arg2: $Player): void;
        useItemOn(arg0: $ItemStack_, arg1: $Level_, arg2: $Player, arg3: $InteractionHand_, arg4: $BlockHitResult): $ItemInteractionResult;
        isAir(): boolean;
        /**
         * @deprecated
         */
        getSoundType(): $SoundType;
        /**
         * @deprecated
         */
        blocksMotion(): boolean;
        isCollisionShapeFullBlock(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getPistonPushReaction(): $PushReaction;
        canSurvive(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        getTags(): $Stream<$TagKey<$Block>>;
        instrument(): $NoteBlockInstrument;
        asState(): $BlockState;
        getSignal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        /**
         * @deprecated
         */
        liquid(): boolean;
        /**
         * @deprecated
         */
        isSolid(): boolean;
        onPlace(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean): void;
        getDrops(arg0: $LootParams$Builder): $List<$ItemStack>;
        getTicker<T extends $BlockEntity>(arg0: $Level_, arg1: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        randomTick(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $RandomSource): void;
        getCollisionShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        getCollisionShape(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CollisionContext): $VoxelShape;
        entityInside(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): void;
        onExplosionHit(arg0: $Level_, arg1: $BlockPos_, arg2: $Explosion, arg3: $BiConsumer_<$ItemStack, $BlockPos>): void;
        isSuffocating(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        useShapeForLightOcclusion(): boolean;
        hasAnalogOutputSignal(): boolean;
        updateNeighbourShapes(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number, arg3: number): void;
        updateNeighbourShapes(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number): void;
        entityCanStandOnFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity, arg3: $Direction_): boolean;
        propagatesSkylightDown(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        framedblocks$initCache(arg0: $StateCache): void;
        hasLargeCollisionShape(): boolean;
        getBlockSupportShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        getFaceOcclusionShape(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): $VoxelShape;
        getInteractionShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        framedblocks$getCache(): $StateCache;
        handleNeighborChanged(arg0: $Level_, arg1: $BlockPos_, arg2: $Block_, arg3: $BlockPos_, arg4: boolean): void;
        setDestroySpeed(arg0: number): void;
        setLightEmission(arg0: number): void;
        isRedstoneConductor(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getAnalogOutputSignal(arg0: $Level_, arg1: $BlockPos_): number;
        setRequiresTool(arg0: boolean): void;
        requiresCorrectToolForDrops(): boolean;
        canOcclude(): boolean;
        handler$dfl000$immersiveengineering$onBlockCollision(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity, arg3: $CallbackInfo): void;
        getKey(): $ResourceKey<$Block>;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getWebIconURL(size: number): $RelativeURL;
        toString(): string;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getId(): string;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<$Block>>;
        getIdLocation(): $ResourceLocation;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        static PROPERTIES_TAG: string;
        owner: $Block;
        cache: $BlockBehaviour$BlockStateBase$Cache;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$BlockState>;
        constructor(arg0: $Block_, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<$BlockState_>);
        get block(): $Block;
        get renderShape(): $RenderShape;
        get fluidState(): $FluidState;
        get randomlyTicking(): boolean;
        get blockHolder(): $Holder<$Block>;
        get cacheInvalid(): boolean;
        get signalSource(): boolean;
        get air(): boolean;
        get soundType(): $SoundType;
        get pistonPushReaction(): $PushReaction;
        get solid(): boolean;
        set requiresTool(value: boolean);
        get key(): $ResourceKey<$Block>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get id(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
    }
    export class $BlockBehaviour$OffsetFunction {
    }
    export interface $BlockBehaviour$OffsetFunction {
        evaluate(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetFunction}.
     */
    export type $BlockBehaviour$OffsetFunction_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => $Vec3_);
    export class $BlockBehaviour$StatePredicate {
    }
    export interface $BlockBehaviour$StatePredicate {
        test(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StatePredicate}.
     */
    export type $BlockBehaviour$StatePredicate_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
    export class $BlockBehaviour$Properties implements $AbstractBlockSettingsAccessor, $DerivedBlock$Settings {
        static of(): $BlockBehaviour$Properties;
        strength(arg0: number, arg1: number): $BlockBehaviour$Properties;
        strength(arg0: number): $BlockBehaviour$Properties;
        requiredFeatures(...arg0: $FeatureFlag[]): $BlockBehaviour$Properties;
        explosionResistance(arg0: number): $BlockBehaviour$Properties;
        friction(arg0: number): $BlockBehaviour$Properties;
        jumpFactor(arg0: number): $BlockBehaviour$Properties;
        forceSolidOn(): $BlockBehaviour$Properties;
        hasPostProcess(arg0: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        forceSolidOff(): $BlockBehaviour$Properties;
        pushReaction(arg0: $PushReaction_): $BlockBehaviour$Properties;
        replaceable(): $BlockBehaviour$Properties;
        destroyTime(arg0: number): $BlockBehaviour$Properties;
        isViewBlocking(arg0: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        emissiveRendering(arg0: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        ignitedByLava(): $BlockBehaviour$Properties;
        isValidSpawn(arg0: $BlockBehaviour$StateArgumentPredicate_<$EntityType<never>>): $BlockBehaviour$Properties;
        sound(arg0: $SoundType_): $BlockBehaviour$Properties;
        air(): $BlockBehaviour$Properties;
        instrument(arg0: $NoteBlockInstrument_): $BlockBehaviour$Properties;
        liquid(): $BlockBehaviour$Properties;
        mapColor(arg0: $DyeColor_): $BlockBehaviour$Properties;
        mapColor(arg0: $Function_<$BlockState, $MapColor>): $BlockBehaviour$Properties;
        mapColor(arg0: $MapColor): $BlockBehaviour$Properties;
        isSuffocating(arg0: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        isRedstoneConductor(arg0: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        requiresCorrectToolForDrops(): $BlockBehaviour$Properties;
        noLootTable(): $BlockBehaviour$Properties;
        getBaseBlock(): $Block;
        speedFactor(arg0: number): $BlockBehaviour$Properties;
        dynamicShape(): $BlockBehaviour$Properties;
        lootFrom(arg0: $Supplier_<$Block>): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        dropsLike(arg0: $Block_): $BlockBehaviour$Properties;
        instabreak(): $BlockBehaviour$Properties;
        offsetType(arg0: $BlockBehaviour$OffsetType_): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        static ofLegacyCopy(arg0: $BlockBehaviour): $BlockBehaviour$Properties;
        noOcclusion(): $BlockBehaviour$Properties;
        randomTicks(): $BlockBehaviour$Properties;
        noTerrainParticles(): $BlockBehaviour$Properties;
        setBaseBlock(arg0: $Block_): void;
        noCollission(): $BlockBehaviour$Properties;
        lightLevel(arg0: $ToIntFunction_<$BlockState>): $BlockBehaviour$Properties;
        static ofFullCopy(arg0: $BlockBehaviour): $BlockBehaviour$Properties;
        getMapColor(): $Function<$BlockState, $MapColor>;
        getSoundType(): $SoundType;
        getFriction(): number;
        getLuminance(): $ToIntFunction<$BlockState>;
        getLiquid(): boolean;
        getDrops(): $ResourceKey<$LootTable>;
        getJumpFactor(): number;
        getSpeedFactor(): number;
        getExplosionResistance(): number;
        getHasCollision(): boolean;
        setLiquid(arg0: boolean): void;
        getIsAir(): boolean;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        setIsAir(arg0: boolean): void;
        isRequiresCorrectToolForDrops(): boolean;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        getSpawnTerrainParticles(): boolean;
        getRequiredFeatures(): $FeatureFlagSet;
        setIsRandomlyTicking(arg0: boolean): void;
        getIsRandomlyTicking(): boolean;
        setSpawnTerrainParticles(arg0: boolean): void;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getCanOcclude(): boolean;
        getDestroyTime(): number;
        getDynamicShape(): boolean;
        getInstrument(): $NoteBlockInstrument;
        getReplaceable(): boolean;
        setCanOcclude(arg0: boolean): void;
        setReplaceable(arg0: boolean): void;
        setDynamicShape(arg0: boolean): void;
        setForceSolidOn(arg0: boolean): void;
        getPushReaction(): $PushReaction;
        getIgnitedByLava(): boolean;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        setIgnitedByLava(arg0: boolean): void;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getForceSolidOff(): boolean;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        setHasCollision(arg0: boolean): void;
        setForceSolidOff(arg0: boolean): void;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        getForceSolidOn(): boolean;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        offsetFunction: $BlockBehaviour$OffsetFunction;
        canOcclude: boolean;
        lightEmission: $ToIntFunction<$BlockState>;
        drops: $ResourceKey<$LootTable>;
        soundType: $SoundType;
        static CODEC: $Codec<$BlockBehaviour$Properties>;
        isRandomlyTicking: boolean;
        spawnTerrainParticles: boolean;
        isAir: boolean;
        hasCollision: boolean;
        constructor();
        get luminance(): $ToIntFunction<$BlockState>;
    }
    export class $BlockBehaviour$StateArgumentPredicate<A> {
    }
    export interface $BlockBehaviour$StateArgumentPredicate<A> {
        test(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: A): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StateArgumentPredicate}.
     */
    export type $BlockBehaviour$StateArgumentPredicate_<A> = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: A) => boolean);
    export class $StateHolder<O, S> implements $StateHolderAccessor<any, any>, $FastMapStateHolder<any>, $IState<any> {
        getValue<T extends $Comparable<T>>(arg0: $Property<T>): T;
        getProperties(): $Collection<$Property<never>>;
        setValue<T extends $Comparable<T>, V extends T>(arg0: $Property<T>, arg1: V): $Object;
        static findNextInCollection<T>(arg0: $Collection_<T>, arg1: T): T;
        getVanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        getStateMap(): $FastMap<any>;
        setStateMap(arg0: $FastMap<any>): void;
        populateNeighbours(arg0: $Map_<any, any>): void;
        trySetValue<T extends $Comparable<T>, V extends T>(arg0: $Property<T>, arg1: V): $Object;
        setStateIndex(arg0: number): void;
        getNeighborTable(): $Table<any, any, any>;
        setNeighborTable(arg0: $Table<any, any, any>): void;
        getOptionalValue<T extends $Comparable<T>>(arg0: $Property<T>): (T) | undefined;
        getStateIndex(): number;
        hasProperty<T extends $Comparable<T>>(arg0: $Property<T>): boolean;
        static codec<O, S extends $StateHolder<O, S>>(arg0: $Codec<O>, arg1: $Function_<O, S>): $Codec<S>;
        cycle<T extends $Comparable<T>>(arg0: $Property<T>): $Object;
        getValues(): $Map<$Property<never>, $Comparable<never>>;
        replacePropertyMap(arg0: $Reference2ObjectMap<any, any>): void;
        redirect$iij000$ferritecore$getNeighborFromFastMap(arg0: $Table<any, any, any>, arg1: $Object, arg2: $Object): $Object;
        getCodec(): $MapCodec<$Object>;
        getOwner(): $Object;
        static PROPERTIES_TAG: string;
        owner: $Object;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$Object>;
        constructor(arg0: $Object, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<$Object>);
        get properties(): $Collection<$Property<never>>;
        get vanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        get values(): $Map<$Property<never>, $Comparable<never>>;
    }
}
