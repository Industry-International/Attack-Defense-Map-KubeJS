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
import { $HolderSet_, $Holder, $BlockPos_, $Direction_, $Holder$Reference, $Registry, $Direction, $IdMapper } from "@package/net/minecraft/core";
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
        wrapOperation$hep000$sable$addUnderwaterParticle(arg0: $Level_, arg1: $ParticleOptions_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $MapColor$Brightness extends $Enum<$MapColor$Brightness> {
        static values(): $MapColor$Brightness[];
        static valueOf(arg0: string): $MapColor$Brightness;
        static byId(arg0: number): $MapColor$Brightness;
        static byIdUnsafe(arg0: number): $MapColor$Brightness;
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
        createLegacyBlock(arg0: $FluidState): $BlockState;
        getBucket(): $Item;
        getStateDefinition(): $StateDefinition<$Fluid, $FluidState>;
        getKey(): $ResourceKey<any>;
        getHeight(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): number;
        registerDefaultState(arg0: $FluidState): void;
        createFluidStateDefinition(arg0: $StateDefinition$Builder<$Fluid_, $FluidState>): void;
        isSame(arg0: $Fluid_): boolean;
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $RandomSource): void;
        isRandomlyTicking(): boolean;
        asHolder(): $Holder$Reference<any>;
        getFluidType(): $FluidType;
        getId(): string;
        randomTick(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $RandomSource): void;
        defaultFluidState(): $FluidState;
        getExplosionResistance(): number;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$Fluid>;
        getFlow(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState): $Vec3;
        getAmount(arg0: $FluidState): number;
        handler$fmj000$fabric_transfer_api_v1$hookGetBucketFillSound(arg0: $CallbackInfoReturnable<any>): void;
        fabric_getCachedFluidVariant(): $FluidVariant;
        getOwnHeight(arg0: $FluidState): number;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Fluid_, arg4: $Direction_): boolean;
        getTickDelay(arg0: $LevelReader): number;
        getPickupSound(): ($SoundEvent) | undefined;
        isSource(arg0: $FluidState): boolean;
        move(arg0: $FluidState, arg1: $LivingEntity, arg2: $Vec3_, arg3: number): boolean;
        getBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: boolean): $PathType;
        canExtinguish(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        canHydrate(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        getExplosionResistance(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): number;
        getAdjacentBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: $PathType_): $PathType;
        canConvertToSource(arg0: $FluidState, arg1: $Level_, arg2: $BlockPos_): boolean;
        supportsBoating(arg0: $FluidState, arg1: $Boat): boolean;
        arch$holder(): $Holder<$Fluid>;
        isEmpty(): boolean;
        getRegistry(): $Registry<$Fluid>;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getFluid(): $Fluid;
        getAmount(): number;
        arch$registryName(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<$Fluid>>;
        getIdLocation(): $ResourceLocation;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        copy(amount: number): $FluidLike;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
        get bucket(): $Item;
        get key(): $ResourceKey<any>;
        get randomlyTicking(): boolean;
        get fluidType(): $FluidType;
        get id(): string;
        get dripParticle(): $ParticleOptions;
        get pickupSound(): ($SoundEvent) | undefined;
        get registry(): $Registry<$Fluid>;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get fluid(): $Fluid;
        get tags(): $List<$ResourceLocation>;
        get tagKeys(): $List<$TagKey<$Fluid>>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
    }
    /**
     * Values that may be interpreted as {@link $Fluid}.
     */
    export type $Fluid_ = RegistryTypes.Fluid;
    export class $MapColor {
        calculateRGBColor(arg0: $MapColor$Brightness_): number;
        getPackedId(arg0: $MapColor$Brightness_): number;
        static byId(arg0: number): $MapColor;
        static getColorFromPackedId(arg0: number): number;
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
        getSource(arg0: boolean): $FluidState;
        getSource(): $Fluid;
        canSpreadTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $BlockPos_, arg5: $BlockState_, arg6: $FluidState, arg7: $Fluid_): boolean;
        static getLegacyLevel(arg0: $FluidState): number;
        getNewLiquid(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $FluidState;
        getSpreadDelay(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidState, arg3: $FluidState): number;
        getSlopeDistance(arg0: $LevelReader, arg1: $BlockPos_, arg2: number, arg3: $Direction_, arg4: $BlockState_, arg5: $BlockPos_, arg6: $Short2ObjectMap<$Pair<$BlockState_, $FluidState>>, arg7: $Short2BooleanMap): number;
        isSolidFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        /**
         * @deprecated
         */
        canConvertToSource(arg0: $Level_): boolean;
        handler$zdg000$openpartiesandclaims$onCanPassThrough(arg0: $BlockGetter, arg1: $Fluid_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $BlockPos_, arg6: $BlockState_, arg7: $FluidState, arg8: $CallbackInfoReturnable<any>): void;
        handler$gep000$create$canPassThroughOnWaterWheel(arg0: $BlockGetter, arg1: $Fluid_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $BlockPos_, arg6: $BlockState_, arg7: $FluidState, arg8: $CallbackInfoReturnable<any>): void;
        handler$dga000$immersiveengineering$canPassThrough(arg0: $BlockGetter, arg1: $Fluid_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $BlockPos_, arg6: $BlockState_, arg7: $FluidState, arg8: $CallbackInfoReturnable<any>): void;
        getDropOff(arg0: $LevelReader): number;
        spreadTo(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $FluidState): void;
        getSpread(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $Map<$Direction, $FluidState>;
        getSlopeFindDistance(arg0: $LevelReader): number;
        beforeDestroyingBlock(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): void;
        getFlowing(arg0: number, arg1: boolean): $FluidState;
        getFlowing(): $Fluid;
        invokeGetLevelDecreasePerBlock(arg0: $LevelReader): number;
        invokeReceivesFlow(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $BlockState_): boolean;
        invokeIsMatchingAndStill(arg0: $FluidState): boolean;
        callCanPassThroughWall(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $BlockState_): boolean;
        create$getNewLiquid(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $FluidState;
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
        is(arg0: $Fluid_): boolean;
        is(arg0: $TagKey_<$Fluid>): boolean;
        is(arg0: $HolderSet_<$Fluid>): boolean;
        tick(arg0: $Level_, arg1: $BlockPos_): void;
        getShape(arg0: $BlockGetter, arg1: $BlockPos_): $VoxelShape;
        createLegacyBlock(): $BlockState;
        isSourceOfType(arg0: $Fluid_): boolean;
        getHeight(arg0: $BlockGetter, arg1: $BlockPos_): number;
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        isRandomlyTicking(): boolean;
        getTags(): $Stream<$TagKey<$Fluid>>;
        randomTick(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        /**
         * @deprecated
         */
        getExplosionResistance(): number;
        getFlow(arg0: $BlockGetter, arg1: $BlockPos_): $Vec3;
        getAmount(): number;
        getOwnHeight(): number;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Fluid_, arg3: $Direction_): boolean;
        isSource(): boolean;
        shouldRenderBackwardUpFace(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        move(arg0: $LivingEntity, arg1: $Vec3_, arg2: number): boolean;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: boolean): $PathType;
        getFluidType(): $FluidType;
        canExtinguish(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        canHydrate(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockPos_): boolean;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        canConvertToSource(arg0: $Level_, arg1: $BlockPos_): boolean;
        supportsBoating(arg0: $Boat): boolean;
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
        get randomlyTicking(): boolean;
        get tags(): $Stream<$TagKey<$Fluid>>;
        get amount(): number;
        get ownHeight(): number;
        get dripParticle(): $ParticleOptions;
        get source(): boolean;
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
