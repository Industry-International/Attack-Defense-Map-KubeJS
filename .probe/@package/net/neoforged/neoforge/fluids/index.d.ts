import { $DynamicOps, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $IClientFluidTypeExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $Unit_ } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Lazy } from "@package/net/neoforged/neoforge/common/util";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { RegistryMarked, RegistryTypes, DataComponentTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $DataComponentType, $DataComponentHolder_, $DataComponentHolder, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $SoundAction, $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";
import { $Item, $Rarity, $Rarity_, $Item$TooltipContext, $TooltipFlag, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $LiquidBlock, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $FluidStackKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $JsonElement } from "@package/com/google/gson";
import { $FluidInteractionRegistryAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Map, $Set, $List, $Map_, $List_ } from "@package/java/util";
import { $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $IFluidHandler$FluidAction_, $IFluidHandler, $IFluidHandlerItem } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Supplier_, $Consumer_, $Predicate_, $Function_, $UnaryOperator_, $BiFunction_ } from "@package/java/util/function";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $HolderLookup$Provider, $Holder_, $Holder, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $Record, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockAndTintGetter, $LevelReader, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Event } from "@package/net/neoforged/bus/api";
import { $FluidState, $Fluid_, $FlowingFluid, $Fluid } from "@package/net/minecraft/world/level/material";
import { $DefaultDispenseItemBehavior } from "@package/net/minecraft/core/dispenser";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $Stream } from "@package/java/util/stream";
import { $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ComponentFunctions, $MutableDataComponentHolderFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as capability from "@package/net/neoforged/neoforge/fluids/capability";
export * as crafting from "@package/net/neoforged/neoforge/fluids/crafting";

declare module "@package/net/neoforged/neoforge/fluids" {
    export class $RegisterCauldronFluidContentEvent extends $Event implements $IModBusEvent {
        register(arg0: $Block_, arg1: $Fluid_, arg2: number, arg3: $IntegerProperty): void;
    }
    export class $FluidInteractionRegistry$InteractionInformation extends $Record {
        predicate(): $FluidInteractionRegistry$HasFluidInteraction;
        interaction(): $FluidInteractionRegistry$FluidInteraction;
        constructor(predicate: $FluidInteractionRegistry$HasFluidInteraction_, interaction: $FluidInteractionRegistry$FluidInteraction_);
        constructor(arg0: $FluidInteractionRegistry$HasFluidInteraction_, arg1: $Function_<$FluidState, $BlockState>);
        constructor(arg0: $FluidType_, arg1: $Function_<$FluidState, $BlockState>);
        constructor(arg0: $FluidInteractionRegistry$HasFluidInteraction_, arg1: $BlockState_);
        constructor(arg0: $FluidType_, arg1: $BlockState_);
    }
    export interface $FluidType extends RegistryMarked<RegistryTypes.NeoforgeFluidTypeTag, RegistryTypes.NeoforgeFluidType> {}
    export class $SimpleFluidContent implements $DataComponentHolder {
        static copyOf(arg0: $FluidStack_): $SimpleFluidContent;
        isEmpty(): boolean;
        matches(arg0: $FluidStack_): boolean;
        copy(): $FluidStack;
        is(arg0: $FluidType_): boolean;
        is(arg0: $HolderSet_<$Fluid>): boolean;
        is(arg0: $TagKey_<$Fluid>): boolean;
        is(arg0: $Fluid_): boolean;
        is(arg0: $Predicate_<$Holder<$Fluid>>): boolean;
        is(arg0: $Holder_<$Fluid>): boolean;
        isSameFluidSameComponents(arg0: $SimpleFluidContent): boolean;
        isSameFluidSameComponents(arg0: $FluidStack_): boolean;
        getAmount(): number;
        getComponents(): $DataComponentMap;
        getFluidType(): $FluidType;
        getFluid(): $Fluid;
        isSameFluid(arg0: $FluidStack_): boolean;
        getFluidHolder(): $Holder<$Fluid>;
        get<T>(arg0: $DataComponentType_<T>): T;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        has(arg0: $DataComponentType_<never>): boolean;
        get<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        getOrDefault<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): T;
        has(arg0: $Supplier_<$DataComponentType<never>>): boolean;
        addToTooltip<T extends $TooltipProvider>(arg0: $DataComponentType_<T>, arg1: $Item$TooltipContext, arg2: $Consumer_<$Component>, arg3: $TooltipFlag): void;
        addToTooltip<T extends $TooltipProvider>(arg0: $Supplier_<$DataComponentType<T>>, arg1: $Item$TooltipContext, arg2: $Consumer_<$Component>, arg3: $TooltipFlag): void;
        static CODEC: $Codec<$SimpleFluidContent>;
        static EMPTY: $SimpleFluidContent;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SimpleFluidContent>;
        get empty(): boolean;
        get amount(): number;
        get components(): $DataComponentMap;
        get fluidType(): $FluidType;
        get fluid(): $Fluid;
        get fluidHolder(): $Holder<$Fluid>;
    }
    export class $FluidInteractionRegistry$FluidInteraction {
    }
    export interface $FluidInteractionRegistry$FluidInteraction {
        interact(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $FluidState): void;
    }
    /**
     * Values that may be interpreted as {@link $FluidInteractionRegistry$FluidInteraction}.
     */
    export type $FluidInteractionRegistry$FluidInteraction_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockPos, arg3: $FluidState) => void);
    export class $FluidUtil {
        static getFluidContained(arg0: $ItemStack_): ($FluidStack) | undefined;
        static interactWithFluidHandler(arg0: $Player, arg1: $InteractionHand_, arg2: $Level_, arg3: $BlockPos_, arg4: $Direction_): boolean;
        static interactWithFluidHandler(arg0: $Player, arg1: $InteractionHand_, arg2: $IFluidHandler): boolean;
        static destroyBlockOnFluidPlacement(arg0: $Level_, arg1: $BlockPos_): void;
        static tryEmptyContainerAndStow(arg0: $ItemStack_, arg1: $IFluidHandler, arg2: $IItemHandler, arg3: number, arg4: $Player, arg5: boolean): $FluidActionResult;
        static tryFillContainerAndStow(arg0: $ItemStack_, arg1: $IFluidHandler, arg2: $IItemHandler, arg3: number, arg4: $Player, arg5: boolean): $FluidActionResult;
        static tryFillContainer(arg0: $ItemStack_, arg1: $IFluidHandler, arg2: number, arg3: $Player, arg4: boolean): $FluidActionResult;
        static tryEmptyContainer(arg0: $ItemStack_, arg1: $IFluidHandler, arg2: number, arg3: $Player, arg4: boolean): $FluidActionResult;
        static tryPlaceFluid(arg0: $Player, arg1: $Level_, arg2: $InteractionHand_, arg3: $BlockPos_, arg4: $ItemStack_, arg5: $FluidStack_): $FluidActionResult;
        static tryPlaceFluid(arg0: $Player, arg1: $Level_, arg2: $InteractionHand_, arg3: $BlockPos_, arg4: $IFluidHandler, arg5: $FluidStack_): boolean;
        static tryFluidTransfer(arg0: $IFluidHandler, arg1: $IFluidHandler, arg2: number, arg3: boolean): $FluidStack;
        static tryFluidTransfer(arg0: $IFluidHandler, arg1: $IFluidHandler, arg2: $FluidStack_, arg3: boolean): $FluidStack;
        static getFluidHandler(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): ($IFluidHandler) | undefined;
        static getFluidHandler(arg0: $ItemStack_): ($IFluidHandlerItem) | undefined;
        static getFilledBucket(arg0: $FluidStack_): $ItemStack;
        static tryPickUpFluid(arg0: $ItemStack_, arg1: $Player, arg2: $Level_, arg3: $BlockPos_, arg4: $Direction_): $FluidActionResult;
    }
    export class $FluidInteractionRegistry$HasFluidInteraction {
    }
    export interface $FluidInteractionRegistry$HasFluidInteraction {
        test(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $FluidState): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FluidInteractionRegistry$HasFluidInteraction}.
     */
    export type $FluidInteractionRegistry$HasFluidInteraction_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockPos, arg3: $FluidState) => boolean);
    export class $FluidType$DripstoneDripInfo extends $Record {
        filledCauldron(): $Block;
        chance(): number;
        dripParticle(): $ParticleOptions;
        constructor(chance: number, dripParticle: $ParticleOptions_, filledCauldron: $Block_);
    }
    export class $FluidStack implements $MutableDataComponentHolder, $FluidStackKJS {
        isEmpty(): boolean;
        static matches(arg0: $FluidStack_, arg1: $FluidStack_): boolean;
        split(arg0: number): $FluidStack;
        save(arg0: $HolderLookup$Provider): $Tag;
        save(arg0: $HolderLookup$Provider, arg1: $Tag_): $Tag;
        static parse(arg0: $HolderLookup$Provider, arg1: $Tag_): ($FluidStack) | undefined;
        copy(): $FluidStack;
        is(arg0: $Holder_<$Fluid>): boolean;
        is(arg0: $HolderSet_<$Fluid>): boolean;
        is(arg0: $Fluid_): boolean;
        is(arg0: $FluidType_): boolean;
        is(arg0: $TagKey_<$Fluid>): boolean;
        is(arg0: $Predicate_<$Holder<$Fluid>>): boolean;
        grow(arg0: number): void;
        /**
         * @deprecated
         */
        getDisplayName(): $Component;
        static isSameFluidSameComponents(arg0: $FluidStack_, arg1: $FluidStack_): boolean;
        shrink(arg0: number): void;
        getComponentsPatch(): $DataComponentPatch;
        getHoverName(): $Component;
        limitSize(arg0: number): void;
        getAmount(): number;
        getTags(): $Stream<$TagKey<$Fluid>>;
        getFluidType(): $FluidType;
        getDescriptionId(): string;
        getFluid(): $Fluid;
        isComponentsPatchEmpty(): boolean;
        saveOptional(arg0: $HolderLookup$Provider): $Tag;
        static isSameFluid(arg0: $FluidStack_, arg1: $FluidStack_): boolean;
        /**
         * @deprecated
         */
        getTranslationKey(): string;
        static parseOptional(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $FluidStack;
        copyAndClear(): $FluidStack;
        setAmount(arg0: number): void;
        /**
         * @deprecated
         */
        isFluidStackIdentical(arg0: $FluidStack_): boolean;
        static lenientOtionalFieldOf(arg0: string): $MapCodec<$FluidStack>;
        static hashFluidAndComponents(arg0: $FluidStack_): number;
        /**
         * @deprecated
         */
        static areFluidStackTagsEqual(arg0: $FluidStack_, arg1: $FluidStack_): boolean;
        copyWithAmount(arg0: number): $FluidStack;
        static fixedAmountCodec(arg0: number): $Codec<$FluidStack>;
        getFluidHolder(): $Holder<$Fluid>;
        /**
         * @deprecated
         */
        isFluidEqual(arg0: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        isFluidEqual(arg0: $FluidStack_): boolean;
        /**
         * @deprecated
         */
        containsFluid(arg0: $FluidStack_): boolean;
        update<T>(arg0: $DataComponentType_<T>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T, U>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        update<T, U>(arg0: $DataComponentType_<T>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $Supplier_<$DataComponentType<never>>[]): void;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $DataComponentType_<never>[]): void;
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        kjs$isEmpty(): boolean;
        getCodec(): $Codec<never>;
        kjs$getFluid(): $Fluid;
        kjs$getAmount(): number;
        kjs$self(): $FluidStack;
        kjs$getKey(): $ResourceKey<$Fluid>;
        kjs$getMod(): string;
        kjs$copy(amount: number): $FluidLike;
        kjs$getId(): string;
        kjs$equalsIgnoringCount(stack: $FluidStack_): boolean;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        kjs$getIdLocation(): $ResourceLocation;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        kjs$asHolder(): $Holder<$Fluid>;
        kjs$getRegistry(): $Registry<$Fluid>;
        has(arg0: $DataComponentType_<never>): boolean;
        getComponentHolder(): $MutableDataComponentHolder;
        patch(components: $DataComponentPatch_): $MutableDataComponentHolderFunctions;
        getComponentMap(): $DataComponentMap;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        hasTag(tag: $ResourceLocation_): boolean;
        getTagKeys(): $List<$TagKey<$Fluid>>;
        getTags(): $List<$ResourceLocation>;
        has(arg0: $Supplier_<$DataComponentType<never>>): boolean;
        addToTooltip<T extends $TooltipProvider>(arg0: $DataComponentType_<T>, arg1: $Item$TooltipContext, arg2: $Consumer_<$Component>, arg3: $TooltipFlag): void;
        addToTooltip<T extends $TooltipProvider>(arg0: $Supplier_<$DataComponentType<T>>, arg1: $Item$TooltipContext, arg2: $Consumer_<$Component>, arg3: $TooltipFlag): void;
        setCustomName(name: $Component_): void;
        setDyedColor(color: $KubeColor_): void;
        getCustomData(): $CompoundTag;
        setRarity(rarity: $Rarity_): void;
        getCustomName(): $Component;
        setLore(lines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setPotionId(potion: $Holder_<$Potion>): void;
        setEntityData(tag: $CompoundTag_): void;
        setProfile(profile: $GameProfile): void;
        setProfile(name: string, uuid: $UUID_): void;
        setBaseColor(color: $DyeColor_): void;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        setLockCode(lock: string): void;
        setCustomData(tag: $CompoundTag_): void;
        remove(type: $DataComponentType_<never>): $ComponentFunctions;
        setCustomModelData(data: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        resetComponents(): $ComponentFunctions;
        getComponentString(): string;
        setPotionContents(contents: $PotionContents_): void;
        setTooltipHidden(): void;
        setGlintOverride(override: boolean): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setAdditionalTooltipHidden(): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        getComponents(): $DataComponentMap;
        static CODEC: $Codec<$FluidStack>;
        static FLUID_NON_EMPTY_CODEC: $Codec<$Holder<$Fluid>>;
        static OPTIONAL_CODEC: $Codec<$FluidStack>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidStack>;
        static EMPTY: $FluidStack;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidStack>;
        constructor(arg0: $Holder_<$Fluid>, arg1: number, arg2: $DataComponentPatch_);
        constructor(arg0: $Holder_<$Fluid>, arg1: number);
        constructor(arg0: $Fluid_, arg1: number);
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get empty(): boolean;
        get displayName(): $Component;
        get componentsPatch(): $DataComponentPatch;
        get hoverName(): $Component;
        get fluidType(): $FluidType;
        get descriptionId(): string;
        get fluid(): $Fluid;
        get componentsPatchEmpty(): boolean;
        get translationKey(): string;
        get fluidHolder(): $Holder<$Fluid>;
        get codec(): $Codec<never>;
        get componentHolder(): $MutableDataComponentHolder;
        get componentMap(): $DataComponentMap;
        get tagKeys(): $List<$TagKey<$Fluid>>;
        set dyedColor(value: $KubeColor_);
        set rarity(value: $Rarity_);
        set potionId(value: $Holder_<$Potion>);
        set entityData(value: $CompoundTag_);
        set baseColor(value: $DyeColor_);
        set unit(value: $DataComponentType_<$Unit_>);
        set lockCode(value: string);
        set customModelData(value: number);
        get componentString(): string;
        set potionContents(value: $PotionContents_);
        set glintOverride(value: boolean);
        set blockStateProperties(value: $Map_<string, string>);
        set dyedColorWithTooltip(value: $KubeColor_);
        get components(): $DataComponentMap;
    }
    /**
     * Values that may be interpreted as {@link $FluidStack}.
     */
    export type $FluidStack_ = $Fluid_ | "-" | { fluid: RegistryTypes.Fluid, amount?: number,  };
    export class $BaseFlowingFluid extends $FlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
    }
    export class $IFluidTank {
    }
    export interface $IFluidTank {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getCapacity(): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getFluidAmount(): number;
        getFluid(): $FluidStack;
        isFluidValid(arg0: $FluidStack_): boolean;
        get capacity(): number;
        get fluidAmount(): number;
        get fluid(): $FluidStack;
    }
    export class $FluidType {
        move(arg0: $FluidState, arg1: $LivingEntity, arg2: $Vec3_, arg3: number): boolean;
        getDescription(arg0: $FluidStack_): $Component;
        getDescription(): $Component;
        canPushEntity(arg0: $Entity): boolean;
        motionScale(arg0: $Entity): number;
        canExtinguish(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        canExtinguish(arg0: $Entity): boolean;
        getBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: boolean): $PathType;
        isAir(): boolean;
        getBucket(arg0: $FluidStack_): $ItemStack;
        isVanilla(): boolean;
        getFallDistanceModifier(arg0: $Entity): number;
        canRideVehicleUnder(arg0: $Entity, arg1: $Entity): boolean;
        getAdjacentBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: $PathType_): $PathType;
        canHydrate(arg0: $Entity): boolean;
        canHydrate(arg0: $FluidStack_): boolean;
        canHydrate(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        canSwim(arg0: $Entity): boolean;
        getSound(arg0: $Player, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $SoundAction): $SoundEvent;
        getSound(arg0: $SoundAction): $SoundEvent;
        getSound(arg0: $FluidStack_, arg1: $SoundAction): $SoundEvent;
        getSound(arg0: $Entity, arg1: $SoundAction): $SoundEvent;
        canDrownIn(arg0: $LivingEntity): boolean;
        getDescriptionId(): string;
        getDescriptionId(arg0: $FluidStack_): string;
        getRarity(arg0: $FluidStack_): $Rarity;
        getRarity(): $Rarity;
        getDensity(arg0: $FluidStack_): number;
        getDensity(arg0: $FluidState, arg1: $BlockAndTintGetter, arg2: $BlockPos_): number;
        getDensity(): number;
        onVaporize(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $FluidStack_): void;
        getStateForPlacement(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidStack_): $FluidState;
        getBlockForFluidState(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): $BlockState;
        isVaporizedOnPlacement(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidStack_): boolean;
        getLightLevel(arg0: $FluidState, arg1: $BlockAndTintGetter, arg2: $BlockPos_): number;
        getLightLevel(): number;
        getLightLevel(arg0: $FluidStack_): number;
        canConvertToSource(arg0: $FluidState, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        canConvertToSource(arg0: $FluidStack_): boolean;
        supportsBoating(arg0: $Boat): boolean;
        supportsBoating(arg0: $FluidState, arg1: $Boat): boolean;
        getTemperature(arg0: $FluidState, arg1: $BlockAndTintGetter, arg2: $BlockPos_): number;
        getTemperature(): number;
        getTemperature(arg0: $FluidStack_): number;
        getViscosity(arg0: $FluidState, arg1: $BlockAndTintGetter, arg2: $BlockPos_): number;
        getViscosity(arg0: $FluidStack_): number;
        getViscosity(): number;
        getDripInfo(): $FluidType$DripstoneDripInfo;
        isLighterThanAir(): boolean;
        canBePlacedInLevel(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        canBePlacedInLevel(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidStack_): boolean;
        setItemMovement(arg0: $ItemEntity): void;
        handleCauldronDrip(arg0: $Fluid_, arg1: $Level_, arg2: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        initializeClient(arg0: $Consumer_<$IClientFluidTypeExtensions>): void;
        static SIZE: $Lazy<number>;
        static BUCKET_VOLUME: number;
        constructor(arg0: $FluidType$Properties);
        get air(): boolean;
        get vanilla(): boolean;
        get dripInfo(): $FluidType$DripstoneDripInfo;
        get lighterThanAir(): boolean;
        set itemMovement(value: $ItemEntity);
    }
    /**
     * Values that may be interpreted as {@link $FluidType}.
     */
    export type $FluidType_ = RegistryTypes.NeoforgeFluidType;
    export class $BaseFlowingFluid$Source extends $BaseFlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor(arg0: $BaseFlowingFluid$Properties);
    }
    export class $CauldronFluidContent {
        static init(): void;
        currentLevel(arg0: $BlockState_): number;
        static getForFluid(arg0: $Fluid_): $CauldronFluidContent;
        static getForBlock(arg0: $Block_): $CauldronFluidContent;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        maxLevel: number;
        totalAmount: number;
        levelProperty: $IntegerProperty;
        block: $Block;
        fluid: $Fluid;
    }
    export class $FluidStackLinkedSet {
        static createTypeAndComponentsSet(): $Set<$FluidStack>;
        static TYPE_AND_COMPONENTS: $Hash$Strategy<$FluidStack>;
        constructor();
    }
    export class $FluidInteractionRegistry implements $FluidInteractionRegistryAccessor {
        static canInteract(arg0: $Level_, arg1: $BlockPos_): boolean;
        static addInteraction(arg0: $FluidType_, arg1: $FluidInteractionRegistry$InteractionInformation_): void;
        static getInteractions$create_$md$5bc4b9$0(): $Map<any, any>;
        constructor();
        static get interactions$create_$md$5bc4b9$0(): $Map<any, any>;
    }
    export class $BaseFlowingFluid$Flowing extends $BaseFlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor(arg0: $BaseFlowingFluid$Properties);
    }
    export class $DispenseFluidContainer extends $DefaultDispenseItemBehavior {
        static getInstance(): $DispenseFluidContainer;
        static get instance(): $DispenseFluidContainer;
    }
    export class $FluidType$Properties {
        static create(): $FluidType$Properties;
        canPushEntity(arg0: boolean): $FluidType$Properties;
        motionScale(arg0: number): $FluidType$Properties;
        canExtinguish(arg0: boolean): $FluidType$Properties;
        sound(arg0: $SoundAction, arg1: $SoundEvent_): $FluidType$Properties;
        temperature(arg0: number): $FluidType$Properties;
        canHydrate(arg0: boolean): $FluidType$Properties;
        canSwim(arg0: boolean): $FluidType$Properties;
        rarity(arg0: $Rarity_): $FluidType$Properties;
        viscosity(arg0: number): $FluidType$Properties;
        pathType(arg0: $PathType_): $FluidType$Properties;
        lightLevel(arg0: number): $FluidType$Properties;
        canDrown(arg0: boolean): $FluidType$Properties;
        fallDistanceModifier(arg0: number): $FluidType$Properties;
        canConvertToSource(arg0: boolean): $FluidType$Properties;
        supportsBoating(arg0: boolean): $FluidType$Properties;
        adjacentPathType(arg0: $PathType_): $FluidType$Properties;
        density(arg0: number): $FluidType$Properties;
        descriptionId(arg0: string): $FluidType$Properties;
        addDripstoneDripping(arg0: number, arg1: $ParticleOptions_, arg2: $Block_, arg3: $SoundEvent_): $FluidType$Properties;
    }
    export class $BaseFlowingFluid$Properties {
        block(arg0: $Supplier_<$LiquidBlock>): $BaseFlowingFluid$Properties;
        bucket(arg0: $Supplier_<$Item>): $BaseFlowingFluid$Properties;
        levelDecreasePerBlock(arg0: number): $BaseFlowingFluid$Properties;
        explosionResistance(arg0: number): $BaseFlowingFluid$Properties;
        slopeFindDistance(arg0: number): $BaseFlowingFluid$Properties;
        tickRate(arg0: number): $BaseFlowingFluid$Properties;
        constructor(arg0: $Supplier_<$FluidType>, arg1: $Supplier_<$Fluid>, arg2: $Supplier_<$Fluid>);
    }
    export class $FluidActionResult {
        getResult(): $ItemStack;
        isSuccess(): boolean;
        result: $ItemStack;
        success: boolean;
        static FAILURE: $FluidActionResult;
        constructor(arg0: $ItemStack_);
    }
}
