import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $File } from "@package/java/io";
import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $AbstractCookingRecipe, $ShapedRecipePattern, $ShapedRecipePattern$Data_, $RecipeManager$CachedCheck, $Ingredient, $SingleRecipeInput, $ShapedRecipePattern$Data } from "@package/net/minecraft/world/item/crafting";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $StructureTemplate$StructureBlockInfo_, $StructureTemplate$Palette } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $List, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $Holder, $BlockPos_, $Direction_, $NonNullList, $Vec3i, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Potion_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ContainerData } from "@package/net/minecraft/world/inventory";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $PlayerUtils$ConnectionAccess } from "@package/blusunrize/immersiveengineering/api/utils";
import { $DamageType, $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as client from "@package/blusunrize/immersiveengineering/mixin/accessors/client";

declare module "@package/blusunrize/immersiveengineering/mixin/accessors" {
    export class $TemplateAccess {
    }
    export interface $TemplateAccess {
        setSize(arg0: $Vec3i): void;
        getPalettes(): $List<$StructureTemplate$Palette>;
        set size(value: $Vec3i);
        get palettes(): $List<$StructureTemplate$Palette>;
    }
    export class $ShapedRecipeAccess {
    }
    export interface $ShapedRecipeAccess {
        getPattern(): $ShapedRecipePattern;
        get pattern(): $ShapedRecipePattern;
    }
    /**
     * Values that may be interpreted as {@link $ShapedRecipeAccess}.
     */
    export type $ShapedRecipeAccess_ = (() => $ShapedRecipePattern);
    export class $ServerPlayNetHandlerAccess {
    }
    export interface $ServerPlayNetHandlerAccess extends $PlayerUtils$ConnectionAccess {
        setClientIsFloating(arg0: boolean): void;
        setAboveGroundTickCount(arg0: number): void;
        set clientIsFloating(value: boolean);
        set aboveGroundTickCount(value: number);
    }
    export class $TemplatePoolAccess {
    }
    export interface $TemplatePoolAccess {
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        get templates(): $ObjectArrayList<$StructurePoolElement>;
    }
    export class $DataStorageAccess {
    }
    export interface $DataStorageAccess {
        getCache(): $Map<string, $SavedData>;
        invokeGetDataFile(arg0: string): $File;
        get cache(): $Map<string, $SavedData>;
    }
    export class $DamageSourcesAccess {
    }
    export interface $DamageSourcesAccess {
        invokeSource(arg0: $ResourceKey_<$DamageType>, arg1: $Entity, arg2: $Entity): $DamageSource;
    }
    /**
     * Values that may be interpreted as {@link $DamageSourcesAccess}.
     */
    export type $DamageSourcesAccess_ = ((arg0: $ResourceKey<$DamageType>, arg1: $Entity, arg2: $Entity) => $DamageSource_);
    export class $ItemEntityAccess {
    }
    export interface $ItemEntityAccess {
        setAge(arg0: number): void;
        set age(value: number);
    }
    /**
     * Values that may be interpreted as {@link $ItemEntityAccess}.
     */
    export type $ItemEntityAccess_ = ((arg0: number) => void);
    export class $CropBlockAccess {
    }
    export interface $CropBlockAccess {
        invokeGetAgeProperty(): $IntegerProperty;
    }
    /**
     * Values that may be interpreted as {@link $CropBlockAccess}.
     */
    export type $CropBlockAccess_ = (() => $IntegerProperty);
    export class $HeroGiftsTaskAccess {
        static getGifts(): $Map<$VillagerProfession, $ResourceLocation>;
        static get gifts(): $Map<$VillagerProfession, $ResourceLocation>;
    }
    export interface $HeroGiftsTaskAccess {
    }
    export class $CraftingContainerAccess {
    }
    export interface $CraftingContainerAccess {
        setItems(arg0: $NonNullList<$ItemStack_>): void;
        set items(value: $NonNullList<$ItemStack_>);
    }
    /**
     * Values that may be interpreted as {@link $CraftingContainerAccess}.
     */
    export type $CraftingContainerAccess_ = ((arg0: $NonNullList<$ItemStack>) => void);
    export class $PotionBrewingAccess {
    }
    export interface $PotionBrewingAccess {
        getConversions(): $List<$PotionMixAccess<$Potion>>;
        get conversions(): $List<$PotionMixAccess<$Potion>>;
    }
    /**
     * Values that may be interpreted as {@link $PotionBrewingAccess}.
     */
    export type $PotionBrewingAccess_ = (() => $List_<$PotionMixAccess<$Potion_>>);
    export class $TrimModelDataAccess {
    }
    export interface $TrimModelDataAccess {
        getName(): string;
        getItemModelIndex(): number;
        get name(): string;
        get itemModelIndex(): number;
    }
    export class $PotionMixAccess<T> {
    }
    export interface $PotionMixAccess<T> {
        getFrom(): $Holder<T>;
        getIngredient(): $Ingredient;
        getTo(): $Holder<T>;
        get from(): $Holder<T>;
        get ingredient(): $Ingredient;
        get to(): $Holder<T>;
    }
    export class $BETypeAccess {
    }
    export interface $BETypeAccess {
        getValidBlocks(): $Set<$Block>;
        get validBlocks(): $Set<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BETypeAccess}.
     */
    export type $BETypeAccess_ = (() => $Set_<$Block_>);
    export class $AbstractArrowAccess {
    }
    export interface $AbstractArrowAccess {
        invokeSetPierceLevel(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $AbstractArrowAccess}.
     */
    export type $AbstractArrowAccess_ = ((arg0: number) => void);
    export class $ContainerAccess {
    }
    export interface $ContainerAccess {
        getRemoteSlots(): $NonNullList<$ItemStack>;
        getLastSlots(): $NonNullList<$ItemStack>;
        get remoteSlots(): $NonNullList<$ItemStack>;
        get lastSlots(): $NonNullList<$ItemStack>;
    }
    export class $FurnaceTEAccess {
    }
    export interface $FurnaceTEAccess {
        getQuickCheck(): $RecipeManager$CachedCheck<$SingleRecipeInput, $AbstractCookingRecipe>;
        getDataAccess(): $ContainerData;
        get quickCheck(): $RecipeManager$CachedCheck<$SingleRecipeInput, $AbstractCookingRecipe>;
        get dataAccess(): $ContainerData;
    }
    export class $PaletteAccess {
        static construct(arg0: $List_<$StructureTemplate$StructureBlockInfo_>): $StructureTemplate$Palette;
    }
    export interface $PaletteAccess {
    }
    export class $ShapedPatternAccess {
    }
    export interface $ShapedPatternAccess {
        getData(): ($ShapedRecipePattern$Data) | undefined;
        get data(): ($ShapedRecipePattern$Data) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ShapedPatternAccess}.
     */
    export type $ShapedPatternAccess_ = (() => ($ShapedRecipePattern$Data_) | undefined);
    export class $BaseContainerBEAccess {
    }
    export interface $BaseContainerBEAccess {
        setName(arg0: $Component_): void;
        set name(value: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $BaseContainerBEAccess}.
     */
    export type $BaseContainerBEAccess_ = ((arg0: $Component) => void);
    export class $TNTEntityAccess {
    }
    export interface $TNTEntityAccess {
        setOwner(arg0: $LivingEntity): void;
        set owner(value: $LivingEntity);
    }
    /**
     * Values that may be interpreted as {@link $TNTEntityAccess}.
     */
    export type $TNTEntityAccess_ = ((arg0: $LivingEntity) => void);
    export class $FlowingFluidAccess {
    }
    export interface $FlowingFluidAccess {
        callCanPassThroughWall(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $BlockState_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FlowingFluidAccess}.
     */
    export type $FlowingFluidAccess_ = ((arg0: $Direction, arg1: $BlockGetter, arg2: $BlockPos, arg3: $BlockState, arg4: $BlockPos, arg5: $BlockState) => boolean);
    export class $ConcretePowderBlockAccess {
    }
    export interface $ConcretePowderBlockAccess {
        getConcrete(): $Block;
        get concrete(): $Block;
    }
    /**
     * Values that may be interpreted as {@link $ConcretePowderBlockAccess}.
     */
    export type $ConcretePowderBlockAccess_ = (() => $Block_);
    export class $ItemModelGeneratorsAccess {
        static getGeneratedTrimModels(): $List<$TrimModelDataAccess>;
        static get generatedTrimModels(): $List<$TrimModelDataAccess>;
    }
    export interface $ItemModelGeneratorsAccess {
    }
    export class $ExplosionAccess {
        static callAddOrAppendStack(arg0: $List_<$Pair<$ItemStack_, $BlockPos_>>, arg1: $ItemStack_, arg2: $BlockPos_): void;
    }
    export interface $ExplosionAccess {
    }
}
