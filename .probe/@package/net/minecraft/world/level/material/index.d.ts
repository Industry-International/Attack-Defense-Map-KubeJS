import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $FluidVariantCache } from "@package/net/fabricmc/fabric/impl/transfer/fluid";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FlowingFluidAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Map, $Map$Entry } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function } from "@package/java/util/function";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $HolderSet_, $Holder, $BlockPos_, $Direction_, $Registry, $Holder$Reference, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Reference2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $IFluidStateExtension, $IFluidExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $StateDefinition, $StateDefinition$Builder, $BlockState_, $StateHolder, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $IFlowableFluid } from "@package/com/ishland/c2me/base/mixin/access";
import { $Short2BooleanMap, $Short2ObjectMap } from "@package/it/unimi/dsi/fastutil/shorts";
import { $Explosion, $LevelAccessor, $LevelReader, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item } from "@package/net/minecraft/world/item";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $FlowingFluidAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $Property, $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $InjectedFluidExtension } from "@package/dev/architectury/extensions/injected";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FluidVariant } from "@package/net/fabricmc/fabric/api/transfer/v1/fluid";
import { $FluidKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/material" {
    export class $EmptyFluid extends $Fluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $LavaFluid$Flowing extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export interface $Fluid extends RegistryMarked<RegistryTypes.FluidTag, RegistryTypes.Fluid> {}
    export class $LavaFluid$Source extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $WaterFluid extends $FlowingFluid {
        wrapOperation$hef000$sable$addUnderwaterParticle(arg0: $Level_, arg1: $ParticleOptions_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $MapColor$Brightness extends $Enum<$MapColor$Brightness> {
        static values(): $MapColor$Brightness[];
        static valueOf(arg0: string): $MapColor$Brightness;
        static byIdUnsafe(arg0: number): $MapColor$Brightness;
        static byId(arg0: number): $MapColor$Brightness;
        static LOWEST: $MapColor$Brightness;
        static HIGH: $MapColor$Brightness;
        static LOW: $MapColor$Brightness;
        modifier: number;
        id: number;
        static NORMAL: $MapColor$Brightness;
    }
    /**
     * Values that may be interpreted as {@link $MapColor$Brightness}.
     */
    export type $MapColor$Brightness_ = "low" | "normal" | "high" | "lowest";
    export class $Fluid implements $IFluidExtension, $InjectedFluidExtension, $FluidVariantCache, $FluidKJS {
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        is(arg0: $TagKey_<$Fluid>): boolean;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState): void;
        getShape(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getDripParticle(): $ParticleOptions;
        getTickDelay(arg0: $LevelReader): number;
        canBeReplacedWith(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Fluid_, arg4: $Direction_): boolean;
        getOwnHeight(arg0: $FluidState): number;
        getPickupSound(): ($SoundEvent) | undefined;
        defaultFluidState(): $FluidState;
        getFlow(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState): $Vec3;
        getAmount(arg0: $FluidState): number;
        registerDefaultState(arg0: $FluidState): void;
        createFluidStateDefinition(arg0: $StateDefinition$Builder<$Fluid_, $FluidState>): void;
        handler$fmj000$fabric_transfer_api_v1$hookGetBucketFillSound(arg0: $CallbackInfoReturnable<any>): void;
        getFluidType(): $FluidType;
        isSame(arg0: $Fluid_): boolean;
        isSource(arg0: $FluidState): boolean;
        getBucket(): $Item;
        randomTick(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $RandomSource): void;
        getHeight(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): number;
        getExplosionResistance(): number;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$Fluid>;
        createLegacyBlock(arg0: $FluidState): $BlockState;
        isRandomlyTicking(): boolean;
        asHolder(): $Holder<any>;
        getKey(): $ResourceKey<any>;
        fabric_getCachedFluidVariant(): $FluidVariant;
        getId(): string;
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $RandomSource): void;
        getStateDefinition(): $StateDefinition<$Fluid, $FluidState>;
        move(arg0: $FluidState, arg1: $LivingEntity, arg2: $Vec3_, arg3: number): boolean;
        canConvertToSource(arg0: $FluidState, arg1: $Level_, arg2: $BlockPos_): boolean;
        supportsBoating(arg0: $FluidState, arg1: $Boat): boolean;
        canExtinguish(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        canHydrate(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        getExplosionResistance(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): number;
        getAdjacentBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: $PathType_): $PathType;
        getBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: boolean): $PathType;
        arch$holder(): $Holder<$Fluid>;
        getFluid(): $Fluid;
        getAmount(): number;
        getRegistry(): $Registry<$Fluid>;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        isEmpty(): boolean;
        arch$registryName(): $ResourceLocation;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getTagKeys(): $List<$TagKey<$Fluid>>;
        getIdLocation(): $ResourceLocation;
        getTags(): $List<$ResourceLocation>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        copy(amount: number): $FluidLike;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
        get dripParticle(): $ParticleOptions;
        get pickupSound(): ($SoundEvent) | undefined;
        get fluidType(): $FluidType;
        get bucket(): $Item;
        get randomlyTicking(): boolean;
        get key(): $ResourceKey<any>;
        get id(): string;
        get fluid(): $Fluid;
        get registry(): $Registry<$Fluid>;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Fluid>>;
        get idLocation(): $ResourceLocation;
        get tags(): $List<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $Fluid}.
     */
    export type $Fluid_ = RegistryTypes.Fluid;
    export class $MapColor {
        getPackedId(arg0: $MapColor$Brightness_): number;
        calculateRGBColor(arg0: $MapColor$Brightness_): number;
        static getColorFromPackedId(arg0: number): number;
        static byId(arg0: number): $MapColor;
        col: number;
        static WOOD: $MapColor;
        static CRIMSON_STEM: $MapColor;
        static TERRACOTTA_LIGHT_BLUE: $MapColor;
        static PODZOL: $MapColor;
        static WARPED_WART_BLOCK: $MapColor;
        static COLOR_LIGHT_GREEN: $MapColor;
        static COLOR_BLACK: $MapColor;
        static TERRACOTTA_GREEN: $MapColor;
        static WARPED_NYLIUM: $MapColor;
        static FIRE: $MapColor;
        static GRASS: $MapColor;
        static TERRACOTTA_ORANGE: $MapColor;
        static GLOW_LICHEN: $MapColor;
        static COLOR_CYAN: $MapColor;
        id: number;
        static NONE: $MapColor;
        static WOOL: $MapColor;
        static QUARTZ: $MapColor;
        static WATER: $MapColor;
        static TERRACOTTA_YELLOW: $MapColor;
        static SAND: $MapColor;
        static SNOW: $MapColor;
        static DIRT: $MapColor;
        static LAPIS: $MapColor;
        static DEEPSLATE: $MapColor;
        static COLOR_YELLOW: $MapColor;
        static COLOR_LIGHT_GRAY: $MapColor;
        static TERRACOTTA_LIGHT_GRAY: $MapColor;
        static CRIMSON_NYLIUM: $MapColor;
        static TERRACOTTA_BLUE: $MapColor;
        static WARPED_HYPHAE: $MapColor;
        static METAL: $MapColor;
        static TERRACOTTA_GRAY: $MapColor;
        static WARPED_STEM: $MapColor;
        static PLANT: $MapColor;
        static GOLD: $MapColor;
        static DIAMOND: $MapColor;
        static COLOR_RED: $MapColor;
        static COLOR_ORANGE: $MapColor;
        static COLOR_BLUE: $MapColor;
        static NETHER: $MapColor;
        static TERRACOTTA_BLACK: $MapColor;
        static TERRACOTTA_PINK: $MapColor;
        static COLOR_MAGENTA: $MapColor;
        static TERRACOTTA_WHITE: $MapColor;
        static COLOR_GRAY: $MapColor;
        static COLOR_LIGHT_BLUE: $MapColor;
        static TERRACOTTA_LIGHT_GREEN: $MapColor;
        static COLOR_GREEN: $MapColor;
        static COLOR_PURPLE: $MapColor;
        static EMERALD: $MapColor;
        static ICE: $MapColor;
        static COLOR_BROWN: $MapColor;
        static TERRACOTTA_PURPLE: $MapColor;
        static TERRACOTTA_BROWN: $MapColor;
        static TERRACOTTA_MAGENTA: $MapColor;
        static RAW_IRON: $MapColor;
        static COLOR_PINK: $MapColor;
        static TERRACOTTA_RED: $MapColor;
        static CRIMSON_HYPHAE: $MapColor;
        static STONE: $MapColor;
        static TERRACOTTA_CYAN: $MapColor;
        static CLAY: $MapColor;
    }
    export class $WaterFluid$Source extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $FlowingFluid extends $Fluid implements $FlowingFluidAccess, $FlowingFluidAccessor, $IFlowableFluid {
        spread(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState): void;
        getSource(): $Fluid;
        getSource(arg0: boolean): $FluidState;
        handler$dgb000$immersiveengineering$canPassThrough(arg0: $BlockGetter, arg1: $Fluid_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $BlockPos_, arg6: $BlockState_, arg7: $FluidState, arg8: $CallbackInfoReturnable<any>): void;
        handler$gep000$create$canPassThroughOnWaterWheel(arg0: $BlockGetter, arg1: $Fluid_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $BlockPos_, arg6: $BlockState_, arg7: $FluidState, arg8: $CallbackInfoReturnable<any>): void;
        handler$zdg000$openpartiesandclaims$onCanPassThrough(arg0: $BlockGetter, arg1: $Fluid_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $BlockPos_, arg6: $BlockState_, arg7: $FluidState, arg8: $CallbackInfoReturnable<any>): void;
        /**
         * @deprecated
         */
        canConvertToSource(arg0: $Level_): boolean;
        getFlowing(): $Fluid;
        getFlowing(arg0: number, arg1: boolean): $FluidState;
        spreadTo(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $FluidState): void;
        getDropOff(arg0: $LevelReader): number;
        getSpread(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $Map<$Direction, $FluidState>;
        getSpreadDelay(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $FluidState): number;
        getSlopeDistance(arg0: $LevelReader, arg1: $BlockPos_, arg2: number, arg3: $Direction_, arg4: $BlockState_, arg5: $BlockPos_, arg6: $Short2ObjectMap<$Pair<$BlockState_, $FluidState>>, arg7: $Short2BooleanMap): number;
        canSpreadTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $BlockPos_, arg5: $BlockState_, arg6: $FluidState, arg7: $Fluid_): boolean;
        isSolidFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getNewLiquid(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $FluidState;
        static getLegacyLevel(arg0: $FluidState): number;
        getSlopeFindDistance(arg0: $LevelReader): number;
        beforeDestroyingBlock(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): void;
        invokeGetLevelDecreasePerBlock(arg0: $LevelReader): number;
        invokeReceivesFlow(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $BlockState_): boolean;
        callCanPassThroughWall(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $BlockState_): boolean;
        create$getNewLiquid(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $FluidState;
        invokeIsMatchingAndStill(arg0: $FluidState): boolean;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $PushReaction extends $Enum<$PushReaction> {
        static values(): $PushReaction[];
        static valueOf(arg0: string): $PushReaction;
        static DESTROY: $PushReaction;
        static BLOCK: $PushReaction;
        static PUSH_ONLY: $PushReaction;
        static IGNORE: $PushReaction;
        static NORMAL: $PushReaction;
    }
    /**
     * Values that may be interpreted as {@link $PushReaction}.
     */
    export type $PushReaction_ = "normal" | "destroy" | "block" | "ignore" | "push_only";
    export class $FluidState extends $StateHolder<$Fluid, $FluidState> implements $IFluidStateExtension {
        isEmpty(): boolean;
        holder(): $Holder<$Fluid>;
        getType(): $Fluid;
        is(arg0: $TagKey_<$Fluid>): boolean;
        is(arg0: $Fluid_): boolean;
        is(arg0: $HolderSet_<$Fluid>): boolean;
        tick(arg0: $Level_, arg1: $BlockPos_): void;
        getShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Fluid_, arg3: $Direction_): boolean;
        getOwnHeight(): number;
        isSourceOfType(arg0: $Fluid_): boolean;
        getTags(): $Stream<$TagKey<$Fluid>>;
        getFlow(arg0: $BlockGetter, arg1: $BlockPos_): $Vec3;
        getAmount(): number;
        isSource(): boolean;
        randomTick(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        getHeight(arg0: $BlockGetter, arg1: $BlockPos_): number;
        /**
         * @deprecated
         */
        getExplosionResistance(): number;
        createLegacyBlock(): $BlockState;
        isRandomlyTicking(): boolean;
        shouldRenderBackwardUpFace(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        move(arg0: $LivingEntity, arg1: $Vec3_, arg2: number): boolean;
        canConvertToSource(arg0: $Level_, arg1: $BlockPos_): boolean;
        supportsBoating(arg0: $Boat): boolean;
        canExtinguish(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getFluidType(): $FluidType;
        canHydrate(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockPos_): boolean;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: boolean): $PathType;
        static PROPERTIES_TAG: string;
        owner: $Fluid;
        static AMOUNT_MAX: number;
        static CODEC: $Codec<$FluidState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static AMOUNT_FULL: number;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$FluidState>;
        constructor(arg0: $Fluid_, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<$FluidState>);
        get empty(): boolean;
        get type(): $Fluid;
        get dripParticle(): $ParticleOptions;
        get ownHeight(): number;
        get tags(): $Stream<$TagKey<$Fluid>>;
        get amount(): number;
        get source(): boolean;
        get randomlyTicking(): boolean;
        get fluidType(): $FluidType;
    }
    export class $WaterFluid$Flowing extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $Fluids {
        static LAVA: $FlowingFluid;
        static FLOWING_WATER: $FlowingFluid;
        static EMPTY: $Fluid;
        static FLOWING_LAVA: $FlowingFluid;
        static WATER: $FlowingFluid;
        constructor();
    }
    export class $LavaFluid extends $FlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $FogType extends $Enum<$FogType> {
        static values(): $FogType[];
        static valueOf(arg0: string): $FogType;
        static LAVA: $FogType;
        static POWDER_SNOW: $FogType;
        static NONE: $FogType;
        static WATER: $FogType;
    }
    /**
     * Values that may be interpreted as {@link $FogType}.
     */
    export type $FogType_ = "lava" | "water" | "powder_snow" | "none";
}
