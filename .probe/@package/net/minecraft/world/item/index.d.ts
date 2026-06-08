import { $AdditionalItemPlacement } from "@package/net/mehvahdjukaar/moonlight/api/item/additional_placements";
import { $Tag, $CompoundTag, $Tag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $Leashable, $Entity, $EquipmentSlotGroup_, $EquipmentSlot_, $EntityType, $EquipmentSlot, $LivingEntity, $Mob, $SlotAccess } from "@package/net/minecraft/world/entity";
import { $ItemPropertiesExtensionImpl } from "@package/dev/architectury/impl";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $IClientItemExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $FeatureElement, $FeatureFlag, $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $ItemBuilder, $FoodBuilder, $ItemStackKey } from "@package/dev/latvian/mods/kubejs/item";
import { $AccessorCreativeModeTabs } from "@package/com/railwayteam/railways/mixin";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IItemPropertiesExtensions, $IItemExtension, $IDispensibleContainerItemExtension, $IItemStackExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $MutableComponent, $Component_, $TextColor, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $Projectile, $AbstractArrow } from "@package/net/minecraft/world/entity/projectile";
import { $ItemVariantCache } from "@package/net/fabricmc/fabric/impl/transfer/item";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $TooltipFlagExtension } from "@package/dev/simulated_team/simulated/mixin_interface/tooltip_flag";
import { $CreativeModeTabsAccessor } from "@package/com/hlysine/create_connected/mixin/featuretoggle";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $CreativeModeTabsAccessor as $CreativeModeTabsAccessor$1 } from "@package/com/copycatsplus/copycats/mixin/feature_toggle";
import { $Vector3f } from "@package/org/joml";
import { $ItemCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $AttributeModifier_, $Attribute, $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $DeferredSupplier } from "@package/dev/architectury/registry/registries";
import { $ItemFrame, $HangingEntity } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Map, $OptionalInt, $List, $Map_, $Collection_, $List_, $Collection, $Set } from "@package/java/util";
import { $BlockPos, $GlobalPos, $HolderSet_, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $Holder, $Direction_, $Direction, $Registry, $Holder_, $Position } from "@package/net/minecraft/core";
import { $EnchantmentInstance, $ItemEnchantments, $Enchantment, $ItemEnchantments_, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Iterable, $Iterable_, $Record, $Object } from "@package/java/lang";
import { $ClipContext$Fluid_, $LevelAccessor, $ItemLike_, $Level_, $LevelReader, $ItemLike, $Level } from "@package/net/minecraft/world/level";
import { $Fluid, $Fluid_, $MapColor } from "@package/net/minecraft/world/level/material";
import { $ItemAttributeModifiers, $Fireworks_, $Tool_, $ItemAttributeModifiers_, $TooltipProvider, $Tool, $FireworkExplosion_, $ItemAttributeModifiers$Entry_ } from "@package/net/minecraft/world/item/component";
import { $BiMap, $Interner } from "@package/com/google/common/collect";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $BlockPredicate_ } from "@package/net/minecraft/advancements/critereon";
import { $IExtendedItem } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $FoodProperties_, $FoodProperties } from "@package/net/minecraft/world/food";
import { $ShovelItemAccessor, $AxeItemAccessor, $HoeItemAccessor } from "@package/net/fabricmc/fabric/mixin/content/registry";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ItemAccessor } from "@package/net/fabricmc/fabric/mixin/item";
import { $MutableDataComponentHolderFunctions, $ComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $InvokerBlockItem } from "@package/xfacthd/framedblocks/mixin";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Ingredient, $Ingredient_, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $DataResult, $DynamicOps, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $IrisItemLightProvider } from "@package/net/irisshaders/iris/api/v0/item";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemInvoker } from "@package/dev/ryanhcode/sable/mixin/punching";
import { $RandomSource, $StringRepresentable$EnumCodec, $StringRepresentable, $Unit_, $Unit } from "@package/net/minecraft/util";
import { $InteractionResult, $InteractionHand_, $InteractionResultHolder, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $ChatFormatting } from "@package/net/minecraft";
import { RegistryMarked, RegistryTypes, DataComponentTypes } from "@special/types";
import { $BucketItemAccessor } from "@package/dev/architectury/mixin/forge/neoforge";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $ClickAction_, $Slot } from "@package/net/minecraft/world/inventory";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $DataComponentType, $PatchedDataComponentMap, $DataComponentHolder_, $DataComponentHolder, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $TrimPattern } from "@package/net/minecraft/world/item/armortrim";
import { $ItemAbility_, $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $BlockInWorld } from "@package/net/minecraft/world/level/block/state/pattern";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $ItemStackExtensions, $ItemExtensions } from "@package/net/fabricmc/fabric/impl/item";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $InjectedBucketItemExtension, $InjectedItemPropertiesExtension, $InjectedItemExtension } from "@package/dev/architectury/extensions/injected";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $ItemStackKJS, $CreativeModeTabKJS, $DiggerItemKJS, $ItemKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $Vec3_, $BlockHitResult, $AABB } from "@package/net/minecraft/world/phys";
import { $AbstractMinecart$Type_, $Boat$Type_, $AbstractMinecart$Type } from "@package/net/minecraft/world/entity/vehicle";
import { $EquipmentSlotProvider, $CustomDamageHandler, $FabricItemStack, $EnchantingContext_, $EquipmentSlotProvider_, $FabricItem$Settings, $CustomDamageHandler_, $FabricItem } from "@package/net/fabricmc/fabric/api/item/v1";
import { $JsonElement } from "@package/com/google/gson";
import { $ItemFTBL } from "@package/dev/ftb/mods/ftblibrary/core";
import { $ItemStackExtensions as $ItemStackExtensions$1 } from "@package/org/sinytra/connector/mod/compat";
import { $ItemCooldownsAccessor } from "@package/mod/chloeprime/gunsmithlib/mixin";
import { $Supplier_, $Function, $UnaryOperator, $BiConsumer_, $UnaryOperator_, $Supplier, $IntFunction, $Consumer_, $Predicate_, $Predicate, $Consumer, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $ItemVariant } from "@package/net/fabricmc/fabric/api/transfer/v1/item";
import { $MapId_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $IMixinItemGroup } from "@package/org/anti_ad/mc/ipnext/mixinhelpers";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $DispenseItemBehavior, $BlockSource_, $BlockSource } from "@package/net/minecraft/core/dispenser";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $BlockEntityType_, $BannerPattern, $SignBlockEntity, $SignText } from "@package/net/minecraft/world/level/block/entity";
export * as component from "@package/net/minecraft/world/item/component";
export * as enchantment from "@package/net/minecraft/world/item/enchantment";
export * as crafting from "@package/net/minecraft/world/item/crafting";
export * as armortrim from "@package/net/minecraft/world/item/armortrim";
export * as trading from "@package/net/minecraft/world/item/trading";
export * as context from "@package/net/minecraft/world/item/context";
export * as alchemy from "@package/net/minecraft/world/item/alchemy";

declare module "@package/net/minecraft/world/item" {
    export class $PlaceOnWaterBlockItem extends $BlockItem {
        handler$jab000$axiom$useOn(useOnContext: $UseOnContext, cir: $CallbackInfoReturnable<any>): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $HangingEntityItem extends $Item {
        mayPlace(arg0: $Player, arg1: $Direction_, arg2: $ItemStack_, arg3: $BlockPos_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        type: $EntityType<$HangingEntity>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $EntityType_<$HangingEntity>, arg1: $Item$Properties);
    }
    export class $BannerItem extends $StandingAndWallBlockItem {
        getColor(): $DyeColor;
        static appendHoverTextFromBannerBlockEntityTag(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        wallBlock: $Block;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Block_, arg2: $Item$Properties);
        get color(): $DyeColor;
    }
    export class $KnowledgeBookItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $JukeboxPlayable extends $Record implements $TooltipProvider {
        static tryInsertIntoJukebox(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_, arg3: $Player): $ItemInteractionResult;
        withTooltip(arg0: boolean): $JukeboxPlayable;
        addToTooltip(arg0: $Item$TooltipContext, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
        showInTooltip(): boolean;
        song(): $EitherHolder<$JukeboxSong>;
        static CODEC: $Codec<$JukeboxPlayable>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $JukeboxPlayable>;
        constructor(arg0: $EitherHolder_<$JukeboxSong_>, arg1: boolean);
    }
    export class $ExperienceBottleItem extends $Item implements $ProjectileItem {
        asProjectile(arg0: $Level_, arg1: $Position, arg2: $ItemStack_, arg3: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(arg0: $Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $NameTagItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $PlayerHeadItem extends $StandingAndWallBlockItem {
        wallBlock: $Block;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Block_, arg2: $Item$Properties);
    }
    export class $ItemUtils {
        static startUsingInstantly(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        static createFilledResult(arg0: $ItemStack_, arg1: $Player, arg2: $ItemStack_, arg3: boolean): $ItemStack;
        static createFilledResult(arg0: $ItemStack_, arg1: $Player, arg2: $ItemStack_): $ItemStack;
        static onContainerDestroyed(arg0: $ItemEntity, arg1: $Iterable_<$ItemStack>): void;
        constructor();
    }
    export class $EitherHolder<T> extends $Record {
        key(): $ResourceKey<T>;
        holder(): ($Holder<T>) | undefined;
        unwrap(arg0: $HolderLookup$Provider): ($Holder<T>) | undefined;
        unwrap(arg0: $Registry<T>): (T) | undefined;
        static codec<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $Codec<$Holder_<T>>): $Codec<$EitherHolder<T>>;
        static fromEither<T>(arg0: $Either<$Holder_<T>, $ResourceKey_<T>>): $EitherHolder<T>;
        asEither(): $Either<$Holder<T>, $ResourceKey<T>>;
        static streamCodec<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, $Holder_<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $EitherHolder<T>>;
        constructor(arg0: ($Holder_<T>) | undefined, arg1: $ResourceKey_<T>);
        constructor(arg0: $ResourceKey_<T>);
        constructor(arg0: $Holder_<T>);
    }
    export class $UseAnim extends $Enum<$UseAnim> {
        static values(): $UseAnim[];
        static valueOf(arg0: string): $UseAnim;
        static BRUSH: $UseAnim;
        static TOOT_HORN: $UseAnim;
        static BLOCK: $UseAnim;
        static CUSTOM: $UseAnim;
        static EAT: $UseAnim;
        static BOW: $UseAnim;
        static NONE: $UseAnim;
        static DRINK: $UseAnim;
        static SPEAR: $UseAnim;
        static CROSSBOW: $UseAnim;
        static SPYGLASS: $UseAnim;
    }
    /**
     * Values that may be interpreted as {@link $UseAnim}.
     */
    export type $UseAnim_ = "none" | "eat" | "drink" | "block" | "bow" | "spear" | "crossbow" | "spyglass" | "toot_horn" | "brush" | "custom";
    export class $TooltipFlag {
        static NORMAL: $TooltipFlag$Default;
        static ADVANCED: $TooltipFlag$Default;
    }
    export interface $TooltipFlag {
        hasShiftDown(): boolean;
        isCreative(): boolean;
        hasAltDown(): boolean;
        isAdvanced(): boolean;
        hasControlDown(): boolean;
        get creative(): boolean;
        get advanced(): boolean;
    }
    export class $ShearsItem extends $Item {
        modifyReturnValue$gmo000$moonlight$m$mineBlock(arg0: boolean, arg1: $BlockState_): boolean;
        static createToolProperties(): $Tool;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $MinecartItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        type: $AbstractMinecart$Type;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $AbstractMinecart$Type_, arg1: $Item$Properties);
    }
    export class $ComplexItem extends $Item {
        getUpdatePacket(arg0: $ItemStack_, arg1: $Level_, arg2: $Player): $Packet<never>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ProjectileItem$DispenseConfig$Builder {
        build(): $ProjectileItem$DispenseConfig;
        positionFunction(arg0: $ProjectileItem$PositionFunction_): $ProjectileItem$DispenseConfig$Builder;
        uncertainty(arg0: number): $ProjectileItem$DispenseConfig$Builder;
        overrideDispenseEvent(arg0: number): $ProjectileItem$DispenseConfig$Builder;
        power(arg0: number): $ProjectileItem$DispenseConfig$Builder;
        constructor();
    }
    export class $SaddleItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $LeadItem extends $Item {
        static bindPlayerMobs(arg0: $Player, arg1: $Level_, arg2: $BlockPos_): $InteractionResult;
        static leashableInArea(arg0: $Level_, arg1: $BlockPos_, arg2: $Predicate_<$Leashable>): $List<$Leashable>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ThrowablePotionItem extends $PotionItem implements $ProjectileItem {
        asProjectile(arg0: $Level_, arg1: $Position, arg2: $ItemStack_, arg3: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(arg0: $Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ArmorMaterial extends $Record {
        layers(): $List<$ArmorMaterial$Layer>;
        getDefense(arg0: $ArmorItem$Type_): number;
        enchantmentValue(): number;
        repairIngredient(): $Supplier<$Ingredient>;
        toughness(): number;
        equipSound(): $Holder<$SoundEvent>;
        knockbackResistance(): number;
        defense(): $Map<$ArmorItem$Type, number>;
        static CODEC: $Codec<$Holder<$ArmorMaterial>>;
        constructor(arg0: $Map_<$ArmorItem$Type_, number>, arg1: number, arg2: $Holder_<$SoundEvent>, arg3: $Supplier_<$Ingredient>, arg4: $List_<$ArmorMaterial$Layer>, arg5: number, arg6: number);
    }
    /**
     * Values that may be interpreted as {@link $ArmorMaterial}.
     */
    export type $ArmorMaterial_ = RegistryTypes.ArmorMaterial | string;
    export class $Item$TooltipContext {
        static of(arg0: $Level_): $Item$TooltipContext;
        static of(arg0: $HolderLookup$Provider): $Item$TooltipContext;
        static EMPTY: $Item$TooltipContext;
    }
    export interface $Item$TooltipContext {
        level(): $Level;
        mapData(arg0: $MapId_): $MapItemSavedData;
        tickRate(): number;
        registries(): $HolderLookup$Provider;
    }
    export class $TieredItem extends $Item {
        getTier(): $Tier;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Tier_, arg1: $Item$Properties);
    }
    export class $BrushItem$DustParticlesDelta extends $Record {
    }
    export class $CreativeModeTab$Type extends $Enum<$CreativeModeTab$Type> {
        static values(): $CreativeModeTab$Type[];
        static valueOf(arg0: string): $CreativeModeTab$Type;
        static INVENTORY: $CreativeModeTab$Type;
        static SEARCH: $CreativeModeTab$Type;
        static CATEGORY: $CreativeModeTab$Type;
        static HOTBAR: $CreativeModeTab$Type;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTab$Type}.
     */
    export type $CreativeModeTab$Type_ = "category" | "inventory" | "hotbar" | "search";
    export class $AxeItem extends $DiggerItem implements $AxeItemAccessor {
        static getAxeStrippingState(arg0: $BlockState_): $BlockState;
        static getStrippedBlocks$fabric_content_registries_v0_$md$d64506$0(): $Map<any, any>;
        static setStrippedBlocks$fabric_content_registries_v0_$md$d64506$1(arg0: $Map_<any, any>): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static STRIPPABLES: $Map<$Block, $Block>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Tier_, arg1: $Item$Properties);
        static get strippedBlocks$fabric_content_registries_v0_$md$d64506$0(): $Map<any, any>;
        static set strippedBlocks$fabric_content_registries_v0_$md$d64506$1(value: $Map_<any, any>);
    }
    export class $MapItem extends $ComplexItem {
        update(arg0: $Level_, arg1: $Entity, arg2: $MapItemSavedData): void;
        static create(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean): $ItemStack;
        static lockMap(arg0: $Level_, arg1: $ItemStack_): void;
        getCustomMapData(arg0: $ItemStack_, arg1: $Level_): $MapItemSavedData;
        static getTooltipForId(arg0: $MapId_): $Component;
        static getSavedData(arg0: $ItemStack_, arg1: $Level_): $MapItemSavedData;
        static getSavedData(arg0: $MapId_, arg1: $Level_): $MapItemSavedData;
        static renderBiomePreviewMap(arg0: $ServerLevel, arg1: $ItemStack_): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static IMAGE_HEIGHT: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static IMAGE_WIDTH: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $BannerPatternItem extends $Item {
        getDisplayName(): $MutableComponent;
        getBannerPattern(): $TagKey<$BannerPattern>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $TagKey_<$BannerPattern>, arg1: $Item$Properties);
        get displayName(): $MutableComponent;
        get bannerPattern(): $TagKey<$BannerPattern>;
    }
    export class $FlintAndSteelItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $BowItem extends $ProjectileWeaponItem {
        static getPowerForTime(arg0: number): number;
        static ARROW_ONLY: $Predicate<$ItemStack>;
        static MAX_DRAW_DURATION: number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static DEFAULT_RANGE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static ARROW_OR_FIREWORK: $Predicate<$ItemStack>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $FishingRodItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $HoeItem extends $DiggerItem implements $HoeItemAccessor {
        static changeIntoState(arg0: $BlockState_): $Consumer<$UseOnContext>;
        static onlyIfAirAbove(arg0: $UseOnContext): boolean;
        static changeIntoStateAndDropItem(arg0: $BlockState_, arg1: $ItemLike_): $Consumer<$UseOnContext>;
        static getTillingActions$fabric_content_registries_v0_$md$d64506$0(): $Map<any, any>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static TILLABLES: $Map<$Block, $Pair<$Predicate<$UseOnContext>, $Consumer<$UseOnContext>>>;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Tier_, arg1: $Item$Properties);
        static get tillingActions$fabric_content_registries_v0_$md$d64506$0(): $Map<any, any>;
    }
    export class $SignApplicator {
    }
    export interface $SignApplicator {
        canApplyToSign(arg0: $SignText, arg1: $Player): boolean;
        tryApplyToSign(arg0: $Level_, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SignApplicator}.
     */
    export type $SignApplicator_ = ((arg0: $Level, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player) => boolean);
    export class $BedItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export interface $Instrument extends RegistryMarked<RegistryTypes.InstrumentTag, RegistryTypes.Instrument> {}
    export class $AirItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $CompassItem extends $Item {
        wrapOperation$edj000$simulated$setLodestoneData(arg0: $ItemStack_, arg1: $DataComponentType_<any>, arg2: $Object, arg3: $Operation_<any>, arg4: $UseOnContext): $Object;
        static getSpawnPosition(arg0: $Level_): $GlobalPos;
        wrapOperation$edj000$simulated$setLodestoneData$mixinextras$bridge$8(arg0: $ItemStack_, arg1: $DataComponentType_<any>, arg2: $Object, arg3: $Operation_<any>, arg4: $LocalRef<any>): $Object;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $CrossbowItem extends $ProjectileWeaponItem {
        static getChargeDuration(arg0: $ItemStack_, arg1: $LivingEntity): number;
        performShooting(arg0: $Level_, arg1: $LivingEntity, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: number, arg5: number, arg6: $LivingEntity): void;
        getChargingSounds(arg0: $ItemStack_): $CrossbowItem$ChargingSounds;
        static isCharged(arg0: $ItemStack_): boolean;
        static ARROW_ONLY: $Predicate<$ItemStack>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static DEFAULT_RANGE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static MOB_ARROW_POWER: number;
        static ARROW_OR_FIREWORK: $Predicate<$ItemStack>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export interface $ArmorMaterial extends RegistryMarked<RegistryTypes.ArmorMaterialTag, RegistryTypes.ArmorMaterial> {}
    export class $AnimalArmorItem extends $ArmorItem {
        getTexture(): $ResourceLocation;
        getBodyType(): $AnimalArmorItem$BodyType;
        getOverlayTexture(): $ResourceLocation;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        material: $Holder<$ArmorMaterial>;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        type: $ArmorItem$Type;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: $AnimalArmorItem$BodyType_, arg2: boolean, arg3: $Item$Properties);
        get texture(): $ResourceLocation;
        get bodyType(): $AnimalArmorItem$BodyType;
        get overlayTexture(): $ResourceLocation;
    }
    export class $ProjectileItem$PositionFunction {
    }
    export interface $ProjectileItem$PositionFunction {
        getDispensePosition(arg0: $BlockSource_, arg1: $Direction_): $Position;
    }
    /**
     * Values that may be interpreted as {@link $ProjectileItem$PositionFunction}.
     */
    export type $ProjectileItem$PositionFunction_ = ((arg0: $BlockSource, arg1: $Direction) => $Position);
    export class $BookItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $AnimalArmorItem$BodyType extends $Enum<$AnimalArmorItem$BodyType> {
        static values(): $AnimalArmorItem$BodyType[];
        static valueOf(arg0: string): $AnimalArmorItem$BodyType;
        breakingSound: $SoundEvent;
        textureLocator: $Function<$ResourceLocation, $ResourceLocation>;
        static EQUESTRIAN: $AnimalArmorItem$BodyType;
        static CANINE: $AnimalArmorItem$BodyType;
    }
    /**
     * Values that may be interpreted as {@link $AnimalArmorItem$BodyType}.
     */
    export type $AnimalArmorItem$BodyType_ = "equestrian" | "canine";
    export class $ArmorMaterials {
        static bootstrap(arg0: $Registry<$ArmorMaterial_>): $Holder<$ArmorMaterial>;
        static CHAIN: $Holder<$ArmorMaterial>;
        static GOLD: $Holder<$ArmorMaterial>;
        static NETHERITE: $Holder<$ArmorMaterial>;
        static DIAMOND: $Holder<$ArmorMaterial>;
        static TURTLE: $Holder<$ArmorMaterial>;
        static LEATHER: $Holder<$ArmorMaterial>;
        static IRON: $Holder<$ArmorMaterial>;
        static ARMADILLO: $Holder<$ArmorMaterial>;
        constructor();
    }
    export class $MilkBucketItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ItemCooldowns implements $ItemCooldownsAccessor {
        tick(): void;
        addCooldown(arg0: $Item_, arg1: number): void;
        getCooldownPercent(arg0: $Item_, arg1: number): number;
        isOnCooldown(arg0: $Item_): boolean;
        removeCooldown(arg0: $Item_): void;
        onCooldownEnded(arg0: $Item_): void;
        onCooldownStarted(arg0: $Item_, arg1: number): void;
        getCooldowns(): $Map<$Item, $ItemCooldowns$CooldownInstance>;
        constructor();
        get cooldowns(): $Map<$Item, $ItemCooldowns$CooldownInstance>;
    }
    export class $CreativeModeTab implements $IMixinItemGroup, $CreativeModeTabKJS {
        static builder(): $CreativeModeTab$Builder;
        /**
         * @deprecated
         */
        static builder(arg0: $CreativeModeTab$Row_, arg1: number): $CreativeModeTab$Builder;
        contains(arg0: $ItemStack_): boolean;
        getType(): $CreativeModeTab$Type;
        getDisplayName(): $Component;
        row(): $CreativeModeTab$Row;
        column(): number;
        handler$dkn000$fabric_item_group_api_v1$getStacks(arg0: $CreativeModeTab$ItemDisplayParameters_, arg1: $CallbackInfo): void;
        canScroll(): boolean;
        showTitle(): boolean;
        getIPNPriorityIndex(): number;
        setIPNPriorityIndex(arg0: number): void;
        getBackgroundTexture(): $ResourceLocation;
        static createTextureLocation(arg0: string): $ResourceLocation;
        getSearchTabDisplayItems(): $Collection<$ItemStack>;
        getSlotColor(): number;
        getScrollerSprite(): $ResourceLocation;
        kjs$setIcon(icon: $ItemStack_): void;
        getTabsImage(): $ResourceLocation;
        getDisplayItems(): $Collection<$ItemStack>;
        kjs$setDisplayName(component: $Component_): void;
        getSearchBarWidth(): number;
        hasSearchBar(): boolean;
        isAlignedRight(): boolean;
        getIconItem(): $ItemStack;
        hasAnyItems(): boolean;
        getLabelColor(): number;
        shouldDisplay(): boolean;
        buildContents(arg0: $CreativeModeTab$ItemDisplayParameters_): void;
        tabsAfter: $List<$ResourceLocation>;
        backgroundTexture: $ResourceLocation;
        tabsBefore: $List<$ResourceLocation>;
        static DEFAULT_BACKGROUND: $ResourceLocation;
        alignedRight: boolean;
        constructor(arg0: $CreativeModeTab$Row_, arg1: number, arg2: $CreativeModeTab$Type_, arg3: $Component_, arg4: $Supplier_<any>, arg5: $CreativeModeTab$DisplayItemsGenerator_);
        constructor(arg0: $CreativeModeTab$Builder);
        constructor(arg0: $CreativeModeTab$Row_, arg1: number, arg2: $CreativeModeTab$Type_, arg3: $Component_, arg4: $Supplier_<$ItemStack>, arg5: $CreativeModeTab$DisplayItemsGenerator_, arg6: $ResourceLocation_, arg7: boolean, arg8: number, arg9: $ResourceLocation_, arg10: number, arg11: number, arg12: $List_<$ResourceLocation_>, arg13: $List_<$ResourceLocation_>);
        get type(): $CreativeModeTab$Type;
        get displayName(): $Component;
        get searchTabDisplayItems(): $Collection<$ItemStack>;
        get slotColor(): number;
        get scrollerSprite(): $ResourceLocation;
        get tabsImage(): $ResourceLocation;
        get displayItems(): $Collection<$ItemStack>;
        get searchBarWidth(): number;
        get iconItem(): $ItemStack;
        get labelColor(): number;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTab}.
     */
    export type $CreativeModeTab_ = RegistryTypes.CreativeModeTab;
    export class $SmithingTemplateItem extends $Item {
        static createArmorTrimTemplate(arg0: $ResourceLocation_, ...arg1: $FeatureFlag[]): $SmithingTemplateItem;
        static createArmorTrimTemplate(arg0: $ResourceKey_<$TrimPattern>, ...arg1: $FeatureFlag[]): $SmithingTemplateItem;
        getBaseSlotDescription(): $Component;
        getAdditionSlotDescription(): $Component;
        getBaseSlotEmptyIcons(): $List<$ResourceLocation>;
        static createNetheriteUpgradeTemplate(): $SmithingTemplateItem;
        static createTrimmableMaterialIconList(): $List<$ResourceLocation>;
        static createNetheriteUpgradeIconList(): $List<$ResourceLocation>;
        getAdditionalSlotEmptyIcons(): $List<$ResourceLocation>;
        static createTrimmableArmorIconList(): $List<$ResourceLocation>;
        static createNetheriteUpgradeMaterialList(): $List<$ResourceLocation>;
        static NETHERITE_UPGRADE_APPLIES_TO: $Component;
        static EMPTY_SLOT_LEGGINGS: $ResourceLocation;
        static NETHERITE_UPGRADE_ADDITIONS_SLOT_DESCRIPTION: $Component;
        static ARMOR_TRIM_INGREDIENTS: $Component;
        static EMPTY_SLOT_PICKAXE: $ResourceLocation;
        static NETHERITE_UPGRADE_INGREDIENTS: $Component;
        static EMPTY_SLOT_QUARTZ: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static EMPTY_SLOT_HOE: $ResourceLocation;
        static EMPTY_SLOT_DIAMOND: $ResourceLocation;
        static INGREDIENTS_TITLE: $Component;
        static EMPTY_SLOT_SWORD: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static NETHERITE_UPGRADE_BASE_SLOT_DESCRIPTION: $Component;
        static EMPTY_SLOT_INGOT: $ResourceLocation;
        static EMPTY_SLOT_AMETHYST_SHARD: $ResourceLocation;
        static EMPTY_SLOT_HELMET: $ResourceLocation;
        canRepair: boolean;
        static EMPTY_SLOT_EMERALD: $ResourceLocation;
        static EMPTY_SLOT_AXE: $ResourceLocation;
        static EMPTY_SLOT_REDSTONE_DUST: $ResourceLocation;
        moonlight$clientAnimationProvider: $Object;
        static NETHERITE_UPGRADE: $Component;
        static TITLE_FORMAT: $ChatFormatting;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static ARMOR_TRIM_BASE_SLOT_DESCRIPTION: $Component;
        static MAX_BAR_WIDTH: number;
        static EMPTY_SLOT_LAPIS_LAZULI: $ResourceLocation;
        static EMPTY_SLOT_SHOVEL: $ResourceLocation;
        static EMPTY_SLOT_CHESTPLATE: $ResourceLocation;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static EMPTY_SLOT_BOOTS: $ResourceLocation;
        static APPLIES_TO_TITLE: $Component;
        static DESCRIPTION_FORMAT: $ChatFormatting;
        static ARMOR_TRIM_APPLIES_TO: $Component;
        static ARMOR_TRIM_ADDITIONS_SLOT_DESCRIPTION: $Component;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Component_, arg1: $Component_, arg2: $Component_, arg3: $Component_, arg4: $Component_, arg5: $List_<$ResourceLocation_>, arg6: $List_<$ResourceLocation_>, ...arg7: $FeatureFlag[]);
        get baseSlotDescription(): $Component;
        get additionSlotDescription(): $Component;
        get baseSlotEmptyIcons(): $List<$ResourceLocation>;
        get additionalSlotEmptyIcons(): $List<$ResourceLocation>;
    }
    export class $ServerItemCooldowns extends $ItemCooldowns {
        constructor(arg0: $ServerPlayer);
    }
    export class $WrittenBookItem extends $Item {
        static resolveBookComponents(arg0: $ItemStack_, arg1: $CommandSourceStack, arg2: $Player): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $EggItem extends $Item implements $ProjectileItem {
        asProjectile(arg0: $Level_, arg1: $Position, arg2: $ItemStack_, arg3: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(arg0: $Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $BoneMealItem extends $Item {
        static growWaterPlant(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_): boolean;
        static applyBonemeal(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): boolean;
        static addGrowthParticles(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number): void;
        /**
         * @deprecated
         */
        static growCrop(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockPos_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static GRASS_COUNT_MULTIPLIER: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static GRASS_SPREAD_HEIGHT: number;
        canRepair: boolean;
        static GRASS_SPREAD_WIDTH: number;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $FireChargeItem extends $Item implements $ProjectileItem {
        asProjectile(arg0: $Level_, arg1: $Position, arg2: $ItemStack_, arg3: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(arg0: $Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ChorusFruitItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $InstrumentItem extends $Item {
        static create(arg0: $Item_, arg1: $Holder_<$Instrument>): $ItemStack;
        static setRandom(arg0: $ItemStack_, arg1: $TagKey_<$Instrument>, arg2: $RandomSource): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $TagKey_<$Instrument>);
    }
    export class $Instrument extends $Record {
        range(): number;
        useDuration(): number;
        soundEvent(): $Holder<$SoundEvent>;
        static CODEC: $Codec<$Holder<$Instrument>>;
        static DIRECT_CODEC: $Codec<$Instrument>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Instrument>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Instrument>>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $Instrument}.
     */
    export type $Instrument_ = RegistryTypes.Instrument;
    export class $MobBucketItem extends $BucketItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        content: $Fluid;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $EntityType_<never>, arg1: $Fluid_, arg2: $SoundEvent_, arg3: $Item$Properties);
    }
    export interface $CreativeModeTab extends RegistryMarked<RegistryTypes.CreativeModeTabTag, RegistryTypes.CreativeModeTab> {}
    export class $FoodOnAStickItem<T extends $Entity> extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $EntityType_<$Item_>, arg2: number);
    }
    export class $OminousBottleItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static EFFECT_DURATION: number;
        static MAX_AMPLIFIER: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static MIN_AMPLIFIER: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ProjectileItem {
    }
    export interface $ProjectileItem {
        asProjectile(arg0: $Level_, arg1: $Position, arg2: $ItemStack_, arg3: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(arg0: $Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ProjectileItem}.
     */
    export type $ProjectileItem_ = ((arg0: $Level, arg1: $Position, arg2: $ItemStack, arg3: $Direction) => $Projectile);
    export class $JukeboxSongs {
        static bootstrap(arg0: $BootstrapContext<$JukeboxSong_>): void;
        static THIRTEEN: $ResourceKey<$JukeboxSong>;
        static MELLOHI: $ResourceKey<$JukeboxSong>;
        static PIGSTEP: $ResourceKey<$JukeboxSong>;
        static STAL: $ResourceKey<$JukeboxSong>;
        static PRECIPICE: $ResourceKey<$JukeboxSong>;
        static STRAD: $ResourceKey<$JukeboxSong>;
        static OTHERSIDE: $ResourceKey<$JukeboxSong>;
        static ELEVEN: $ResourceKey<$JukeboxSong>;
        static FIVE: $ResourceKey<$JukeboxSong>;
        static CHIRP: $ResourceKey<$JukeboxSong>;
        static WARD: $ResourceKey<$JukeboxSong>;
        static BLOCKS: $ResourceKey<$JukeboxSong>;
        static FAR: $ResourceKey<$JukeboxSong>;
        static CREATOR: $ResourceKey<$JukeboxSong>;
        static CAT: $ResourceKey<$JukeboxSong>;
        static MALL: $ResourceKey<$JukeboxSong>;
        static RELIC: $ResourceKey<$JukeboxSong>;
        static WAIT: $ResourceKey<$JukeboxSong>;
        static CREATOR_MUSIC_BOX: $ResourceKey<$JukeboxSong>;
    }
    export interface $JukeboxSongs {
    }
    export class $CreativeModeTab$TabVisibility extends $Enum<$CreativeModeTab$TabVisibility> {
        static values(): $CreativeModeTab$TabVisibility[];
        static valueOf(arg0: string): $CreativeModeTab$TabVisibility;
        static PARENT_AND_SEARCH_TABS: $CreativeModeTab$TabVisibility;
        static PARENT_TAB_ONLY: $CreativeModeTab$TabVisibility;
        static SEARCH_TAB_ONLY: $CreativeModeTab$TabVisibility;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTab$TabVisibility}.
     */
    export type $CreativeModeTab$TabVisibility_ = "parent_and_search_tabs" | "parent_tab_only" | "search_tab_only";
    export class $SpectralArrowItem extends $ArrowItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ArmorMaterial$Layer {
        texture(arg0: boolean): $ResourceLocation;
        dyeable(): boolean;
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: boolean);
        constructor(arg0: $ResourceLocation_);
    }
    export class $SignItem extends $StandingAndWallBlockItem {
        wallBlock: $Block;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $Block_, arg2: $Block_);
        constructor(arg0: $Item$Properties, arg1: $Block_, arg2: $Block_, arg3: $Direction_);
    }
    export class $EmptyMapItem extends $ComplexItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export interface $Item extends RegistryMarked<RegistryTypes.ItemTag, RegistryTypes.Item> {}
    export class $CreativeModeTab$ItemDisplayBuilder implements $CreativeModeTab$Output {
        accept(arg0: $ItemStack_, arg1: $CreativeModeTab$TabVisibility_): void;
        accept(arg0: $ItemLike_): void;
        accept(arg0: $ItemLike_, arg1: $CreativeModeTab$TabVisibility_): void;
        accept(arg0: $ItemStack_): void;
        acceptAll(arg0: $Collection_<$ItemStack_>): void;
        acceptAll(arg0: $Collection_<$ItemStack_>, arg1: $CreativeModeTab$TabVisibility_): void;
        searchTabContents: $Set<$ItemStack>;
        tabContents: $Collection<$ItemStack>;
        constructor(arg0: $CreativeModeTab_, arg1: $FeatureFlagSet);
    }
    export class $CrossbowItem$ChargingSounds extends $Record {
        mid(): ($Holder<$SoundEvent>) | undefined;
        end(): ($Holder<$SoundEvent>) | undefined;
        start(): ($Holder<$SoundEvent>) | undefined;
        static CODEC: $Codec<$CrossbowItem$ChargingSounds>;
        constructor(start: ($Holder_<$SoundEvent>) | undefined, mid: ($Holder_<$SoundEvent>) | undefined, end: ($Holder_<$SoundEvent>) | undefined);
    }
    export class $ShovelItem extends $DiggerItem implements $ShovelItemAccessor {
        static getShovelPathingState(arg0: $BlockState_): $BlockState;
        static getPathStates$fabric_content_registries_v0_$md$d64506$0(): $Map<any, any>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static FLATTENABLES: $Map<$Block, $BlockState>;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Tier_, arg1: $Item$Properties);
        static get pathStates$fabric_content_registries_v0_$md$d64506$0(): $Map<any, any>;
    }
    export class $HoneyBottleItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $GlowInkSacItem extends $Item implements $SignApplicator {
        tryApplyToSign(arg0: $Level_, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player): boolean;
        canApplyToSign(arg0: $SignText, arg1: $Player): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $Instruments {
        static bootstrap(arg0: $Registry<$Instrument_>): $Instrument;
        static DREAM_GOAT_HORN: $ResourceKey<$Instrument>;
        static SING_GOAT_HORN: $ResourceKey<$Instrument>;
        static FEEL_GOAT_HORN: $ResourceKey<$Instrument>;
        static YEARN_GOAT_HORN: $ResourceKey<$Instrument>;
        static CALL_GOAT_HORN: $ResourceKey<$Instrument>;
        static GOAT_HORN_DURATION: number;
        static GOAT_HORN_RANGE_BLOCKS: number;
        static PONDER_GOAT_HORN: $ResourceKey<$Instrument>;
        static ADMIRE_GOAT_HORN: $ResourceKey<$Instrument>;
        static SEEK_GOAT_HORN: $ResourceKey<$Instrument>;
    }
    export interface $Instruments {
    }
    export class $SpyglassItem extends $Item {
        static USE_DURATION: number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static ZOOM_FOV_MODIFIER: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ElytraItem extends $Item implements $Equipable {
        getEquipmentSlot(): $EquipmentSlot;
        getEquipSound(): $Holder<$SoundEvent>;
        static isFlyEnabled(arg0: $ItemStack_): boolean;
        swapWithEquipmentSlot(arg0: $Item_, arg1: $Level_, arg2: $Player, arg3: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get equipmentSlot(): $EquipmentSlot;
        get equipSound(): $Holder<$SoundEvent>;
    }
    export class $Equipable {
        static get(arg0: $ItemStack_): $Equipable;
    }
    export interface $Equipable {
        swapWithEquipmentSlot(arg0: $Item_, arg1: $Level_, arg2: $Player, arg3: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        getEquipmentSlot(): $EquipmentSlot;
        getEquipSound(): $Holder<$SoundEvent>;
        get equipmentSlot(): $EquipmentSlot;
        get equipSound(): $Holder<$SoundEvent>;
    }
    /**
     * Values that may be interpreted as {@link $Equipable}.
     */
    export type $Equipable_ = (() => $EquipmentSlot_);
    export class $AdventureModePredicate {
        test(arg0: $BlockInWorld): boolean;
        withTooltip(arg0: boolean): $AdventureModePredicate;
        addToTooltip(arg0: $Consumer_<$Component>): void;
        showInTooltip(): boolean;
        static CAN_PLACE_HEADER: $Component;
        static CODEC: $Codec<$AdventureModePredicate>;
        static CAN_BREAK_HEADER: $Component;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AdventureModePredicate>;
        constructor(arg0: $List_<$BlockPredicate_>, arg1: boolean);
    }
    export class $JukeboxSong extends $Record {
        description(): $Component;
        static fromStack(arg0: $HolderLookup$Provider, arg1: $ItemStack_): ($Holder<$JukeboxSong>) | undefined;
        lengthInSeconds(): number;
        lengthInTicks(): number;
        hasFinished(arg0: number): boolean;
        comparatorOutput(): number;
        soundEvent(): $Holder<$SoundEvent>;
        static CODEC: $Codec<$Holder<$JukeboxSong>>;
        static DIRECT_CODEC: $Codec<$JukeboxSong>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $JukeboxSong>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$JukeboxSong>>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: $Component_, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $JukeboxSong}.
     */
    export type $JukeboxSong_ = RegistryTypes.JukeboxSong;
    export class $ArmorItem$Type extends $Enum<$ArmorItem$Type> implements $StringRepresentable {
        getName(): string;
        static values(): $ArmorItem$Type[];
        static valueOf(arg0: string): $ArmorItem$Type;
        getSlot(): $EquipmentSlot;
        hasTrims(): boolean;
        getDurability(arg0: number): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static LEGGINGS: $ArmorItem$Type;
        static HELMET: $ArmorItem$Type;
        static CODEC: $Codec<$ArmorItem$Type>;
        static CHESTPLATE: $ArmorItem$Type;
        static BOOTS: $ArmorItem$Type;
        static BODY: $ArmorItem$Type;
        get slot(): $EquipmentSlot;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ArmorItem$Type}.
     */
    export type $ArmorItem$Type_ = "helmet" | "chestplate" | "leggings" | "boots" | "body";
    export class $FireworkRocketItem extends $Item implements $ProjectileItem {
        asProjectile(arg0: $Level_, arg1: $Position, arg2: $ItemStack_, arg3: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(arg0: $Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static CRAFTABLE_DURATIONS: number[];
        static ROCKET_PLACEMENT_OFFSET: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $TippedArrowItem extends $ArrowItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ItemNameBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $DiggerItem extends $TieredItem implements $DiggerItemKJS {
        static createAttributes(arg0: $Tier_, arg1: number, arg2: number): $ItemAttributeModifiers;
        kjs$getMineableTag(): $TagKey<any>;
        handler$fnc000$kubejs$init(ci: $CallbackInfo, blocks: $TagKey_<any>): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Tier_, arg1: $TagKey_<$Block>, arg2: $Item$Properties);
    }
    export class $Rarity extends $Enum<$Rarity> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $Rarity[];
        static valueOf(arg0: string): $Rarity;
        /**
         * @deprecated
         */
        color(): $ChatFormatting;
        static getExtensionInfo(): $ExtensionInfo;
        getStyleModifier(): $UnaryOperator<$Style>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static immersiveengineering_MASTERWORK: $Rarity;
        static CODEC: $Codec<$Rarity>;
        static RARE: $Rarity;
        static EPIC: $Rarity;
        static SUPERBWARFARE_LEGENDARY: $Rarity;
        static SUPERBWARFARE_SUPERB: $Rarity;
        static UNCOMMON: $Rarity;
        static SUPERBWARFARE_VIRTUAL: $Rarity;
        static BY_ID: $IntFunction<$Rarity>;
        static COMMON: $Rarity;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Rarity>;
        static get extensionInfo(): $ExtensionInfo;
        get styleModifier(): $UnaryOperator<$Style>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Rarity}.
     */
    export type $Rarity_ = "common" | "uncommon" | "rare" | "epic" | "immersiveengineering:masterwork" | "superbwarfare:legendary" | "superbwarfare:superb" | "superbwarfare:virtual";
    export class $ArmorStandItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $FireworkStarItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $BucketItem extends $Item implements $DispensibleContainerItem, $BucketItemAccessor, $InjectedBucketItemExtension {
        handler$fhj000$architectury$fillBucket(level: $Level_, player: $Player, hand: $InteractionHand_, cir: $CallbackInfoReturnable<any>, stack: $ItemStack_, target: $BlockHitResult): void;
        emptyContents(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockHitResult, arg4: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        emptyContents(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockHitResult): boolean;
        checkExtraContent(arg0: $Player, arg1: $Level_, arg2: $ItemStack_, arg3: $BlockPos_): void;
        playEmptySound(arg0: $Player, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        static getEmptySuccessItem(arg0: $ItemStack_, arg1: $Player): $ItemStack;
        canBlockContainFluid(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        arch$getFluid(): $Fluid;
        getContent(): $Fluid;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        content: $Fluid;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Fluid_, arg1: $Item$Properties);
    }
    export class $ItemStackLinkedSet {
        static createTypeAndComponentsSet(): $Set<$ItemStack>;
        static TYPE_AND_TAG: $Hash$Strategy<$ItemStack>;
        constructor();
    }
    export class $ScaffoldingBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $ItemCooldowns$CooldownInstance {
        startTime: number;
        endTime: number;
        constructor(arg0: number, arg1: number);
    }
    export class $BrushItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static ANIMATION_DURATION: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $SolidBucketItem extends $BlockItem implements $DispensibleContainerItem {
        emptyContents(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockHitResult): boolean;
        checkExtraContent(arg0: $Player, arg1: $Level_, arg2: $ItemStack_, arg3: $BlockPos_): void;
        emptyContents(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockHitResult, arg4: $ItemStack_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $SoundEvent_, arg2: $Item$Properties);
    }
    export class $TooltipFlag$Default extends $Record implements $TooltipFlag, $TooltipFlagExtension {
        asCreative(): $TooltipFlag$Default;
        creative(): boolean;
        isCreative(): boolean;
        advanced(): boolean;
        isAdvanced(): boolean;
        simulated$setCreativeSearch(arg0: boolean): void;
        simulated$getCreativeSearch(): boolean;
        hasShiftDown(): boolean;
        hasAltDown(): boolean;
        hasControlDown(): boolean;
        constructor(advanced: boolean, creative: boolean);
    }
    export class $HoneycombItem extends $Item implements $SignApplicator {
        canApplyToSign(arg0: $SignText, arg1: $Player): boolean;
        tryApplyToSign(arg0: $Level_, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player): boolean;
        static getWaxed(arg0: $BlockState_): ($BlockState) | undefined;
        /**
         * @deprecated
         */
        static WAX_OFF_BY_BLOCK: $Supplier<$BiMap<$Block, $Block>>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static WAXABLES: $Supplier<$BiMap<$Block, $Block>>;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $DiscFragmentItem extends $Item {
        getDisplayName(): $MutableComponent;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get displayName(): $MutableComponent;
    }
    export class $SplashPotionItem extends $ThrowablePotionItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $DoubleHighBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $Tier {
    }
    export interface $Tier {
        getEnchantmentValue(): number;
        getUses(): number;
        createToolProperties(arg0: $TagKey_<$Block>): $Tool;
        getIncorrectBlocksForDrops(): $TagKey<$Block>;
        getRepairIngredient(): $Ingredient;
        getSpeed(): number;
        getAttackDamageBonus(): number;
        get enchantmentValue(): number;
        get uses(): number;
        get incorrectBlocksForDrops(): $TagKey<$Block>;
        get repairIngredient(): $Ingredient;
        get speed(): number;
        get attackDamageBonus(): number;
    }
    /**
     * Values that may be interpreted as {@link $Tier}.
     */
    export type $Tier_ = string;
    export class $CreativeModeTab$DisplayItemsGenerator {
    }
    export interface $CreativeModeTab$DisplayItemsGenerator {
        accept(arg0: $CreativeModeTab$ItemDisplayParameters_, arg1: $CreativeModeTab$Output_): void;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTab$DisplayItemsGenerator}.
     */
    export type $CreativeModeTab$DisplayItemsGenerator_ = ((arg0: $CreativeModeTab$ItemDisplayParameters, arg1: $CreativeModeTab$Output) => void);
    export class $DispensibleContainerItem {
    }
    export interface $DispensibleContainerItem extends $IDispensibleContainerItemExtension {
        /**
         * @deprecated
         */
        emptyContents(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockHitResult): boolean;
        checkExtraContent(arg0: $Player, arg1: $Level_, arg2: $ItemStack_, arg3: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $DispensibleContainerItem}.
     */
    export type $DispensibleContainerItem_ = ((arg0: $Player, arg1: $Level, arg2: $BlockPos, arg3: $BlockHitResult) => boolean);
    export class $SwordItem extends $TieredItem {
        static createAttributes(arg0: $Tier_, arg1: number, arg2: number): $ItemAttributeModifiers;
        static createAttributes(arg0: $Tier_, arg1: number, arg2: number): $ItemAttributeModifiers;
        static createToolProperties(): $Tool;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Tier_, arg1: $Item$Properties);
        constructor(arg0: $Tier_, arg1: $Item$Properties, arg2: $Tool_);
    }
    export interface $JukeboxSong extends RegistryMarked<RegistryTypes.JukeboxSongTag, RegistryTypes.JukeboxSong> {}
    export class $CreativeModeTab$ItemDisplayParameters extends $Record {
        hasPermissions(): boolean;
        holders(): $HolderLookup$Provider;
        enabledFeatures(): $FeatureFlagSet;
        needsUpdate(arg0: $FeatureFlagSet, arg1: boolean, arg2: $HolderLookup$Provider): boolean;
        constructor(enabledFeatures: $FeatureFlagSet, hasPermissions: boolean, holders: $HolderLookup$Provider);
    }
    export class $CreativeModeTab$Row extends $Enum<$CreativeModeTab$Row> {
        static values(): $CreativeModeTab$Row[];
        static valueOf(arg0: string): $CreativeModeTab$Row;
        static TOP: $CreativeModeTab$Row;
        static BOTTOM: $CreativeModeTab$Row;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTab$Row}.
     */
    export type $CreativeModeTab$Row_ = "top" | "bottom";
    export class $InkSacItem extends $Item implements $SignApplicator {
        tryApplyToSign(arg0: $Level_, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player): boolean;
        canApplyToSign(arg0: $SignText, arg1: $Player): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $DyeColor extends $Enum<$DyeColor> implements $StringRepresentable, $KubeColor {
        getName(): string;
        static values(): $DyeColor[];
        static valueOf(arg0: string): $DyeColor;
        getId(): number;
        getTag(): $TagKey<$Item>;
        static getColor(arg0: $ItemStack_): $DyeColor;
        static byName(arg0: string, arg1: $DyeColor_): $DyeColor;
        getDyedTag(): $TagKey<$Item>;
        kjs$getRGB(): number;
        getTextureDiffuseColor(): number;
        kjs$getFireworkRGB(): number;
        getTextColor(): number;
        kjs$getARGB(): number;
        static byFireworkColor(arg0: number): $DyeColor;
        getFireworkColor(): number;
        getMapColor(): $MapColor;
        getSerializedName(): string;
        static byId(arg0: number): $DyeColor;
        getRemappedEnumConstantName(): string;
        createTextColor(): $TextColor;
        toHexString(): string;
        serialize(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        static WHITE: $DyeColor;
        static GRAY: $DyeColor;
        static CODEC: $StringRepresentable$EnumCodec<$DyeColor>;
        static BLUE: $DyeColor;
        static PURPLE: $DyeColor;
        static GREEN: $DyeColor;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DyeColor>;
        static RED: $DyeColor;
        static PINK: $DyeColor;
        static LIGHT_GRAY: $DyeColor;
        static LIGHT_BLUE: $DyeColor;
        static LIME: $DyeColor;
        static MAGENTA: $DyeColor;
        static BLACK: $DyeColor;
        static YELLOW: $DyeColor;
        static CYAN: $DyeColor;
        static BROWN: $DyeColor;
        static ORANGE: $DyeColor;
        get id(): number;
        get tag(): $TagKey<$Item>;
        get dyedTag(): $TagKey<$Item>;
        get textureDiffuseColor(): number;
        get textColor(): number;
        get fireworkColor(): number;
        get mapColor(): $MapColor;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DyeColor}.
     */
    export type $DyeColor_ = "white" | "orange" | "magenta" | "light_blue" | "yellow" | "lime" | "pink" | "gray" | "light_gray" | "cyan" | "purple" | "blue" | "brown" | "green" | "red" | "black";
    export class $CreativeModeTab$Output {
    }
    export interface $CreativeModeTab$Output {
        accept(arg0: $ItemLike_): void;
        accept(arg0: $ItemLike_, arg1: $CreativeModeTab$TabVisibility_): void;
        accept(arg0: $ItemStack_): void;
        accept(arg0: $ItemStack_, arg1: $CreativeModeTab$TabVisibility_): void;
        acceptAll(arg0: $Collection_<$ItemStack_>): void;
        acceptAll(arg0: $Collection_<$ItemStack_>, arg1: $CreativeModeTab$TabVisibility_): void;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTab$Output}.
     */
    export type $CreativeModeTab$Output_ = ((arg0: $ItemStack, arg1: $CreativeModeTab$TabVisibility) => void);
    export class $WindChargeItem extends $Item implements $ProjectileItem {
        asProjectile(arg0: $Level_, arg1: $Position, arg2: $ItemStack_, arg3: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(arg0: $Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $CreativeModeTabs implements $AccessorCreativeModeTabs, $CreativeModeTabsAccessor, $CreativeModeTabsAccessor$1 {
        static validate(): void;
        static bootstrap(arg0: $Registry<$CreativeModeTab_>): $CreativeModeTab;
        static callBuildAllTabContents$copycats_$md$d64506$3(arg0: $CreativeModeTab$ItemDisplayParameters_): void;
        static getCACHED_PARAMETERS$create_connected_$md$d64506$2(): $CreativeModeTab$ItemDisplayParameters;
        static callBuildAllTabContents$create_connected_$md$d64506$1(arg0: $CreativeModeTab$ItemDisplayParameters_): void;
        static setCACHED_PARAMETERS$railways_$md$d64506$0(arg0: $CreativeModeTab$ItemDisplayParameters_): void;
        static getCACHED_PARAMETERS$copycats_$md$d64506$4(): $CreativeModeTab$ItemDisplayParameters;
        static tryRebuildTabContents(arg0: $FeatureFlagSet, arg1: boolean, arg2: $HolderLookup$Provider): boolean;
        static getDefaultTab(): $CreativeModeTab;
        static tabs(): $List<$CreativeModeTab>;
        static searchTab(): $CreativeModeTab;
        static allTabs(): $List<$CreativeModeTab>;
        static BUILDING_BLOCKS: $ResourceKey<$CreativeModeTab>;
        static SPAWN_EGGS: $ResourceKey<$CreativeModeTab>;
        static OP_BLOCKS: $ResourceKey<$CreativeModeTab>;
        static SEARCH: $ResourceKey<$CreativeModeTab>;
        static TOOLS_AND_UTILITIES: $ResourceKey<$CreativeModeTab>;
        static COMBAT: $ResourceKey<$CreativeModeTab>;
        static NATURAL_BLOCKS: $ResourceKey<$CreativeModeTab>;
        static REDSTONE_BLOCKS: $ResourceKey<$CreativeModeTab>;
        static CACHED_PARAMETERS: $CreativeModeTab$ItemDisplayParameters;
        static INGREDIENTS: $ResourceKey<$CreativeModeTab>;
        static INVENTORY: $ResourceKey<$CreativeModeTab>;
        static COLORED_BLOCKS: $ResourceKey<$CreativeModeTab>;
        static FOOD_AND_DRINKS: $ResourceKey<$CreativeModeTab>;
        static HOTBAR: $ResourceKey<$CreativeModeTab>;
        static FUNCTIONAL_BLOCKS: $ResourceKey<$CreativeModeTab>;
        constructor();
        static get CACHED_PARAMETERS$create_connected_$md$d64506$2(): $CreativeModeTab$ItemDisplayParameters;
        static set CACHED_PARAMETERS$railways_$md$d64506$0(value: $CreativeModeTab$ItemDisplayParameters_);
        static get CACHED_PARAMETERS$copycats_$md$d64506$4(): $CreativeModeTab$ItemDisplayParameters;
        static get defaultTab(): $CreativeModeTab;
    }
    export class $EndCrystalItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $TridentItem extends $Item implements $ProjectileItem {
        asProjectile(arg0: $Level_, arg1: $Position, arg2: $ItemStack_, arg3: $Direction_): $Projectile;
        static createAttributes(): $ItemAttributeModifiers;
        static createToolProperties(): $Tool;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(arg0: $Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static BASE_DAMAGE: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static SHOOT_POWER: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static THROW_THRESHOLD_TIME: number;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $HangingSignItem extends $SignItem {
        wallBlock: $Block;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Block_, arg2: $Item$Properties);
    }
    export class $EnderEyeItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ArmorItem extends $Item implements $Equipable {
        getType(): $ArmorItem$Type;
        getDefense(): number;
        getEquipmentSlot(): $EquipmentSlot;
        getEquipSound(): $Holder<$SoundEvent>;
        static dispenseArmor(arg0: $BlockSource_, arg1: $ItemStack_): boolean;
        getToughness(): number;
        getMaterial(): $Holder<$ArmorMaterial>;
        swapWithEquipmentSlot(arg0: $Item_, arg1: $Level_, arg2: $Player, arg3: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        material: $Holder<$ArmorMaterial>;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        type: $ArmorItem$Type;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: $ArmorItem$Type_, arg2: $Item$Properties);
        get defense(): number;
        get equipmentSlot(): $EquipmentSlot;
        get equipSound(): $Holder<$SoundEvent>;
        get toughness(): number;
    }
    export class $JukeboxSongPlayer {
        stop(arg0: $LevelAccessor, arg1: $BlockState_): void;
        tick(arg0: $LevelAccessor, arg1: $BlockState_): void;
        play(arg0: $LevelAccessor, arg1: $Holder_<$JukeboxSong>): void;
        getSong(): $JukeboxSong;
        isPlaying(): boolean;
        getTicksSinceSongStarted(): number;
        setSongWithoutPlaying(arg0: $Holder_<$JukeboxSong>, arg1: number): void;
        static PLAY_EVENT_INTERVAL_TICKS: number;
        constructor(arg0: $JukeboxSongPlayer$OnSongChanged_, arg1: $BlockPos_);
        get song(): $JukeboxSong;
        get playing(): boolean;
        get ticksSinceSongStarted(): number;
    }
    export class $ProjectileWeaponItem extends $Item {
        static draw(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $LivingEntity): $List<$ItemStack>;
        static getHeldProjectile(arg0: $LivingEntity, arg1: $Predicate_<$ItemStack>): $ItemStack;
        customArrow(arg0: $AbstractArrow, arg1: $ItemStack_, arg2: $ItemStack_): $AbstractArrow;
        createProjectile(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_, arg3: $ItemStack_, arg4: boolean): $Projectile;
        getDurabilityUse(arg0: $ItemStack_): number;
        shootProjectile(arg0: $LivingEntity, arg1: $Projectile, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $LivingEntity): void;
        static useAmmo(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $LivingEntity, arg3: boolean): $ItemStack;
        getDefaultProjectileRange(): number;
        shoot(arg0: $ServerLevel, arg1: $LivingEntity, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $List_<$ItemStack_>, arg5: number, arg6: number, arg7: boolean, arg8: $LivingEntity): void;
        getSupportedHeldProjectiles(arg0: $ItemStack_): $Predicate<$ItemStack>;
        /**
         * @deprecated
         */
        getSupportedHeldProjectiles(): $Predicate<$ItemStack>;
        getDefaultCreativeAmmo(arg0: $Player, arg1: $ItemStack_): $ItemStack;
        getAllSupportedProjectiles(arg0: $ItemStack_): $Predicate<$ItemStack>;
        /**
         * @deprecated
         */
        getAllSupportedProjectiles(): $Predicate<$ItemStack>;
        static ARROW_ONLY: $Predicate<$ItemStack>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static ARROW_OR_FIREWORK: $Predicate<$ItemStack>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get defaultProjectileRange(): number;
    }
    export class $DyeItem extends $Item implements $SignApplicator {
        tryApplyToSign(arg0: $Level_, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player): boolean;
        static byColor(arg0: $DyeColor_): $DyeItem;
        getDyeColor(): $DyeColor;
        canApplyToSign(arg0: $SignText, arg1: $Player): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $DyeColor_, arg1: $Item$Properties);
        get dyeColor(): $DyeColor;
    }
    export class $Item$Properties implements $IItemPropertiesExtensions, $FabricItem$Settings, $InjectedItemPropertiesExtension, $ItemPropertiesExtensionImpl {
        component<T>(arg0: $DataComponentType_<T>, arg1: T): $Item$Properties;
        attributes(arg0: $ItemAttributeModifiers_): $Item$Properties;
        buildAndValidateComponents(): $DataComponentMap;
        arch$getTabSupplier(): $DeferredSupplier<any>;
        setNoRepair(): $Item$Properties;
        fireResistant(): $Item$Properties;
        jukeboxPlayable(arg0: $ResourceKey_<$JukeboxSong>): $Item$Properties;
        durability(arg0: number): $Item$Properties;
        rarity(arg0: $Rarity_): $Item$Properties;
        stacksTo(arg0: number): $Item$Properties;
        requiredFeatures(...arg0: $FeatureFlag[]): $Item$Properties;
        craftRemainder(arg0: $Item_): $Item$Properties;
        static validateComponents(arg0: $DataComponentMap_): $DataComponentMap;
        arch$getTab(): $CreativeModeTab;
        food(arg0: $FoodProperties_): $Item$Properties;
        arch$tab(tab: $CreativeModeTab_): $Item$Properties;
        arch$tab(tab: $ResourceKey_<any>): $Item$Properties;
        arch$tab(tab: $DeferredSupplier<any>): $Item$Properties;
        component<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): $Item$Properties;
        equipmentSlot(arg0: $EquipmentSlotProvider_): $Item$Properties;
        customDamage(arg0: $CustomDamageHandler_): $Item$Properties;
        craftingRemainingItem: $Item;
        static COMPONENT_INTERNER: $Interner<$DataComponentMap>;
        constructor();
    }
    export class $ItemFrameItem extends $HangingEntityItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        type: $EntityType<$HangingEntity>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $EntityType_<$HangingEntity>, arg1: $Item$Properties);
    }
    /**
     * @deprecated
     */
    export class $ItemStack implements $DataComponentHolder, $MutableDataComponentHolder, $IItemStackExtension, $ItemStackExtensions$1, $ItemStackExtensions, $FabricItemStack, $ItemStackKJS {
        update<T>(arg0: $DataComponentType_<T>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T, U>(arg0: $DataComponentType_<T>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        isEmpty(): boolean;
        static matches(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        split(arg0: number): $ItemStack;
        getCount(): number;
        save(arg0: $HolderLookup$Provider, arg1: $Tag_): $Tag;
        save(arg0: $HolderLookup$Provider): $Tag;
        static parse(arg0: $HolderLookup$Provider, arg1: $Tag_): ($ItemStack) | undefined;
        copy(): $ItemStack;
        use(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        is(arg0: $Predicate_<$Holder<$Item>>): boolean;
        is(arg0: $Holder_<$Item>): boolean;
        is(arg0: $HolderSet_<$Item>): boolean;
        is(arg0: $Item_): boolean;
        is(arg0: $TagKey_<$Item>): boolean;
        grow(arg0: number): void;
        getDisplayName(): $Component;
        consume(arg0: number, arg1: $LivingEntity): void;
        getItem(): $Item;
        shrink(arg0: number): void;
        static lenientOptionalFieldOf(arg0: string): $MapCodec<$ItemStack>;
        copyWithCount(arg0: number): $ItemStack;
        consumeAndReturn(arg0: number, arg1: $LivingEntity): $ItemStack;
        copyAndClear(): $ItemStack;
        getMaxStackSize(): number;
        isDamaged(): boolean;
        useOn(arg0: $UseOnContext): $InteractionResult;
        overrideStackedOnOther(arg0: $Slot, arg1: $ClickAction_, arg2: $Player): boolean;
        overrideOtherStackedOnMe(arg0: $ItemStack_, arg1: $Slot, arg2: $ClickAction_, arg3: $Player, arg4: $SlotAccess): boolean;
        fabric_getLivingEntity(): $LivingEntity;
        setCount(arg0: number): void;
        limitSize(arg0: number): void;
        handler$jad000$axiom$addAttributeTooltips(consumer: $Consumer_<any>, player: $Player, ci: $CallbackInfo): void;
        getItemHolder(): $Holder<$Item>;
        canBeHurtBy(arg0: $DamageSource_): boolean;
        transmuteCopy(arg0: $ItemLike_, arg1: number): $ItemStack;
        transmuteCopy(arg0: $ItemLike_): $ItemStack;
        mineBlock(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Player): void;
        setPopTime(arg0: number): void;
        getPopTime(): number;
        isFramed(): boolean;
        getFrame(): $ItemFrame;
        hurtAndBreak(arg0: number, arg1: $LivingEntity, arg2: $EquipmentSlot_): void;
        hurtAndBreak(arg0: number, arg1: $ServerLevel, arg2: $LivingEntity, arg3: $Consumer_<$Item>): void;
        hurtAndBreak(arg0: number, arg1: $ServerLevel, arg2: $ServerPlayer, arg3: $Consumer_<$Item>): void;
        getDestroySpeed(arg0: $BlockState_): number;
        postHurtEnemy(arg0: $LivingEntity, arg1: $Player): void;
        static isSameItem(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        hurtEnemy(arg0: $LivingEntity, arg1: $Player): boolean;
        getComponents(): $DataComponentMap;
        getBreakingSound(): $SoundEvent;
        getEatingSound(): $SoundEvent;
        getDrinkingSound(): $SoundEvent;
        releaseUsing(arg0: $Level_, arg1: $LivingEntity, arg2: number): void;
        useOnRelease(): boolean;
        getUseDuration(arg0: $LivingEntity): number;
        getUseAnimation(): $UseAnim;
        forEachModifier(arg0: $EquipmentSlotGroup_, arg1: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        forEachModifier(arg0: $EquipmentSlot_, arg1: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        finishUsingItem(arg0: $Level_, arg1: $LivingEntity): $ItemStack;
        saveOptional(arg0: $HolderLookup$Provider): $Tag;
        addToTooltip<T extends $TooltipProvider>(arg0: $DataComponentType_<T>, arg1: $Item$TooltipContext, arg2: $Consumer_<$Component>, arg3: $TooltipFlag): void;
        /**
         * @deprecated
         */
        static listMatches(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>): boolean;
        /**
         * @deprecated
         */
        static hashStackList(arg0: $List_<$ItemStack_>): number;
        connector_useOn(arg0: $UseOnContext): $InteractionResult;
        getRarity(): $Rarity;
        isComponentsPatchEmpty(): boolean;
        hurtAndConvertOnBreak(arg0: number, arg1: $ItemLike_, arg2: $LivingEntity, arg3: $EquipmentSlot_): $ItemStack;
        static hashItemAndComponents(arg0: $ItemStack_): number;
        applyComponentsAndValidate(arg0: $DataComponentPatch_): void;
        static validatedStreamCodec(arg0: $StreamCodec<$RegistryFriendlyByteBuf, $ItemStack_>): $StreamCodec<$RegistryFriendlyByteBuf, $ItemStack>;
        getEntityRepresentation(): $Entity;
        getPrototype(): $DataComponentMap;
        static parseOptional(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ItemStack;
        setDamageValue(arg0: number): void;
        isStackable(): boolean;
        onItemUseFirst(arg0: $UseOnContext): $InteractionResult;
        getTagEnchantments(): $ItemEnchantments;
        inventoryTick(arg0: $Level_, arg1: $Entity, arg2: number, arg3: boolean): void;
        /**
         * @deprecated
         */
        onDestroyed(arg0: $ItemEntity): void;
        getDamageValue(): number;
        isDamageableItem(): boolean;
        getMaxDamage(): number;
        isEnchantable(): boolean;
        static validateComponents(arg0: $DataComponentMap_): $DataResult<$Unit>;
        isEnchanted(): boolean;
        onCraftedBy(arg0: $Level_, arg1: $Player, arg2: number): void;
        onUseTick(arg0: $Level_, arg1: $LivingEntity, arg2: number): void;
        getBarWidth(): number;
        getBarColor(): number;
        getTooltipImage(): ($TooltipComponent) | undefined;
        getTooltipLines(arg0: $Item$TooltipContext, arg1: $Player, arg2: $TooltipFlag): $List<$Component>;
        isBarVisible(): boolean;
        wrapOperation$dpn001$geckolib$removeGeckolibIdOnCopy(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        getComponentsPatch(): $DataComponentPatch;
        getHoverName(): $Component;
        setEntityRepresentation(arg0: $Entity): void;
        canBreakBlockInAdventureMode(arg0: $BlockInWorld): boolean;
        canPlaceOnBlockInAdventureMode(arg0: $BlockInWorld): boolean;
        onCraftedBySystem(arg0: $Level_): void;
        interactLivingEntity(arg0: $Player, arg1: $LivingEntity, arg2: $InteractionHand_): $InteractionResult;
        isCorrectToolForDrops(arg0: $BlockState_): boolean;
        static isSameItemSameComponents(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        fabric_setLivingEntity(arg0: $LivingEntity): void;
        hasFoil(): boolean;
        resetComponents(): this;
        isItemEnabled(arg0: $FeatureFlagSet): boolean;
        getDescriptionId(): string;
        has(arg0: $DataComponentType_<never>): boolean;
        update<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T, U>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $Supplier_<$DataComponentType<never>>[]): void;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $DataComponentType_<never>[]): void;
        hasCraftingRemainingItem(): boolean;
        getCraftingRemainingItem(): $ItemStack;
        supportsEnchantment(arg0: $Holder_<$Enchantment>): boolean;
        shouldCauseBlockBreakReset(arg0: $ItemStack_): boolean;
        canGrindstoneRepair(): boolean;
        getEnchantmentValue(): number;
        canFitInsideContainerItems(): boolean;
        getEnchantmentLevel(arg0: $Holder_<$Enchantment>): number;
        isEnderMask(arg0: $Player, arg1: $EnderMan): boolean;
        getBurnTime(arg0: $RecipeType_<never>): number;
        onAnimalArmorTick(arg0: $Level_, arg1: $Mob): void;
        canEquip(arg0: $EquipmentSlot_, arg1: $LivingEntity): boolean;
        getSweepHitBox(arg0: $Player, arg1: $Entity): $AABB;
        getAttributeModifiers(): $ItemAttributeModifiers;
        getEquipmentSlot(): $EquipmentSlot;
        /**
         * @deprecated
         */
        onEntitySwing(arg0: $LivingEntity): boolean;
        onEntitySwing(arg0: $LivingEntity, arg1: $InteractionHand_): boolean;
        elytraFlightTick(arg0: $LivingEntity, arg1: number): boolean;
        canElytraFly(arg0: $LivingEntity): boolean;
        canPerformAction(arg0: $ItemAbility_): boolean;
        onStopUsing(arg0: $LivingEntity, arg1: number): void;
        getFoodProperties(arg0: $LivingEntity): $FoodProperties;
        canDisableShield(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $LivingEntity): boolean;
        isNotReplaceableByPickAction(arg0: $Player, arg1: number): boolean;
        isRepairable(): boolean;
        getXpRepairRatio(): number;
        isBookEnchantable(arg0: $ItemStack_): boolean;
        getAllEnchantments(arg0: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        getHighlightTip(arg0: $Component_): $Component;
        isPiglinCurrency(): boolean;
        onDestroyed(arg0: $ItemEntity, arg1: $DamageSource_): void;
        doesSneakBypassUse(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Player): boolean;
        isPrimaryItemFor(arg0: $Holder_<$Enchantment>): boolean;
        getEntityLifespan(arg0: $Level_): number;
        onEntityItemUpdate(arg0: $ItemEntity): boolean;
        onDroppedByPlayer(arg0: $Player): boolean;
        handler$cfm000$fabric_entity_events_v1$canElytraFly(arg0: $LivingEntity, arg1: $CallbackInfoReturnable<any>): void;
        getCapability<T>(arg0: $ItemCapability<T, void>): T;
        getCapability<T, C>(arg0: $ItemCapability<T, C>, arg1: C): T;
        canWalkOnPowderedSnow(arg0: $LivingEntity): boolean;
        makesPiglinsNeutral(arg0: $LivingEntity): boolean;
        getCreatorNamespace(): string;
        getRecipeRemainder(): $ItemStack;
        canBeEnchantedWith(arg0: $Holder_<$Enchantment>, arg1: $EnchantingContext_): boolean;
        matches(cx: $RecipeMatchContext, s: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        getCodec(): $Codec<$ItemStack>;
        getTypeData(): $Map<string, $Object>;
        toStringJS(): string;
        getBlock(): $Block;
        enchant(enchantments: $ItemEnchantments_): this;
        enchant(enchantment: $Holder_<$Enchantment>, level: number): this;
        /**
         * @deprecated
         */
        withChance(chance: number): $ItemStack;
        toItemString0(dynamicOps: $DynamicOps<$Tag_>): string;
        toItemString(): string;
        withCustomName(name: $Component_): this;
        withLore(lines: $Component_[]): this;
        withLore(lines: $Component_[], styledLines: $Component_[]): this;
        areItemsEqual(other: $ItemStack_): boolean;
        hasEnchantment(enchantment: $Holder_<$Enchantment>, level: number): boolean;
        withCount(c: number): this;
        areComponentsEqual(other: $ItemStack_): boolean;
        getEnchantments(): $ItemEnchantments;
        getHarvestSpeed(): number;
        getHarvestSpeed(block: $LevelBlock): number;
        equalsIgnoringCount(stack: $ItemStack_): boolean;
        getMod(): string;
        asIngredient(): $Ingredient;
        getRegistry(): $Registry<$Item>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        asHolder(): $Holder<$Item>;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        getIdLocation(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getComponentString(): string;
        self(): $ItemStack;
        getKey(): $ResourceKey<$Item>;
        getId(): string;
        has(arg0: $Supplier_<$DataComponentType<never>>): boolean;
        addToTooltip<T extends $TooltipProvider>(arg0: $Supplier_<$DataComponentType<T>>, arg1: $Item$TooltipContext, arg2: $Consumer_<$Component>, arg3: $TooltipFlag): void;
        getComponentHolder(): $MutableDataComponentHolder;
        patch(components: $DataComponentPatch_): $MutableDataComponentHolderFunctions;
        getComponentMap(): $DataComponentMap;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        setUnbreakableWithTooltip(): void;
        setFood(foodProperties: $FoodProperties_): void;
        setFood(nutrition: number, saturation: number): void;
        setUnbreakable(): void;
        setItemName(component: $Component_): void;
        setRepairCost(repairCost: number): void;
        setTool(tool: $Tool_): void;
        setMaxDamage(maxDamage: number): void;
        setDamage(damage: number): void;
        modifyFood(foodBuilder: $Consumer_<$FoodBuilder>): void;
        setInstrument(instrument: $Holder_<$Instrument>): void;
        setFireworks(fireworks: $Fireworks_): void;
        setBucketEntityData(tag: $CompoundTag_): void;
        setFireResistant(): void;
        setBundleContents(items: $List_<$ItemStack_>): void;
        getAttributeModifiers(): $ItemAttributeModifiers;
        setNoteBlockSound(id: $ResourceLocation_): void;
        setFireworkExplosion(explosion: $FireworkExplosion_): void;
        setMaxStackSize(size: number): void;
        setMapItemColor(color: $KubeColor_): void;
        setBlockEntityData(tag: $CompoundTag_): void;
        setChargedProjectiles(items: $List_<$ItemStack_>): void;
        matchesAny(cx: $RecipeMatchContext, itemLikes: $Iterable_<$ItemLike>, exact: boolean): boolean;
        hasTag(tag: $ResourceLocation_): boolean;
        getTagKeys(): $List<$TagKey<$Item>>;
        getTags(): $List<$ResourceLocation>;
        setAdditionalTooltipHidden(): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        remove(type: $DataComponentType_<never>): $ComponentFunctions;
        setDyedColor(color: $KubeColor_): void;
        setBaseColor(color: $DyeColor_): void;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        setPotionId(potion: $Holder_<$Potion>): void;
        setEntityData(tag: $CompoundTag_): void;
        setRarity(rarity: $Rarity_): void;
        setCustomData(tag: $CompoundTag_): void;
        setCustomName(name: $Component_): void;
        getCustomName(): $Component;
        setLore(lines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        getCustomData(): $CompoundTag;
        setProfile(name: string, uuid: $UUID_): void;
        setProfile(profile: $GameProfile): void;
        setLockCode(lock: string): void;
        setGlintOverride(override: boolean): void;
        setPotionContents(contents: $PotionContents_): void;
        setTooltipHidden(): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setCustomModelData(data: number): void;
        setAttributeModifiersWithTooltip(modifiers: $List_<$ItemAttributeModifiers$Entry_>): void;
        /**
         * Sets the attack speed of this item to the given value, **removing** all other modifiers to attack speed.
         * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
         * (Example: Swords have an attack speed of -2.4, leading to a total value of 1.6 without any other changes.)
         */
        setAttackSpeed(speed: number): void;
        getAttackSpeed(): number;
        hasAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): boolean;
        /**
         * Overrides the *base* attack speed of this item to be the given value, keeping other modifiers intact.
         * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
         */
        setBaseAttackSpeed(speed: number): void;
        /**
         * Overrides the *base* attack damage of this item to be the given value, keeping other modifiers intact.
         * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
         */
        setBaseAttackDamage(dmg: number): void;
        getAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): $AttributeModifier;
        getAttackDamage(): number;
        setAttributeModifiers(modifiers: $List_<$ItemAttributeModifiers$Entry_>): void;
        /**
         * Sets the attack damage of this item to the given value, **removing** all other modifiers to attack damage.
         * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
         * (In practice, this simply means that most weapons have this value set to 1 less than what you might think.)
         */
        setAttackDamage(dmg: number): void;
        getBaseAttackDamage(): number;
        addAttributeModifier(attribute: $Holder_<$Attribute>, mod: $AttributeModifier_, slot: $EquipmentSlotGroup_): void;
        getBaseAttackSpeed(): number;
        components: $PatchedDataComponentMap;
        static CODEC: $Codec<$ItemStack>;
        static ITEM_NON_AIR_CODEC: $Codec<$Holder<$Item>>;
        static OPTIONAL_CODEC: $Codec<$ItemStack>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemStack>;
        static SIMPLE_ITEM_CODEC: $Codec<$ItemStack>;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$ItemStack>>;
        static SINGLE_ITEM_CODEC: $Codec<$ItemStack>;
        static STRICT_CODEC: $Codec<$ItemStack>;
        static STRICT_SINGLE_ITEM_CODEC: $Codec<$ItemStack>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemStack>;
        static EMPTY: $ItemStack;
        static OPTIONAL_LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$ItemStack>>;
        constructor(arg0: $ItemLike_, arg1: number, arg2: $PatchedDataComponentMap);
        constructor(arg0: $ItemLike_);
        constructor(arg0: $Holder_<$Item>);
        constructor(arg0: $ItemLike_, arg1: number);
        constructor(arg0: $Holder_<$Item>, arg1: number);
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPatch_);
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get empty(): boolean;
        get displayName(): $Component;
        get item(): $Item;
        get damaged(): boolean;
        get itemHolder(): $Holder<$Item>;
        get framed(): boolean;
        get frame(): $ItemFrame;
        get breakingSound(): $SoundEvent;
        get eatingSound(): $SoundEvent;
        get drinkingSound(): $SoundEvent;
        get useAnimation(): $UseAnim;
        get componentsPatchEmpty(): boolean;
        get prototype(): $DataComponentMap;
        get stackable(): boolean;
        get tagEnchantments(): $ItemEnchantments;
        get damageableItem(): boolean;
        get enchantable(): boolean;
        get enchanted(): boolean;
        get barWidth(): number;
        get barColor(): number;
        get tooltipImage(): ($TooltipComponent) | undefined;
        get barVisible(): boolean;
        get componentsPatch(): $DataComponentPatch;
        get hoverName(): $Component;
        get descriptionId(): string;
        get craftingRemainingItem(): $ItemStack;
        get enchantmentValue(): number;
        get equipmentSlot(): $EquipmentSlot;
        get repairable(): boolean;
        get xpRepairRatio(): number;
        get piglinCurrency(): boolean;
        get creatorNamespace(): string;
        get recipeRemainder(): $ItemStack;
        get codec(): $Codec<$ItemStack>;
        get typeData(): $Map<string, $Object>;
        get block(): $Block;
        get enchantments(): $ItemEnchantments;
        get mod(): string;
        get registry(): $Registry<$Item>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get idLocation(): $ResourceLocation;
        get componentString(): string;
        get key(): $ResourceKey<$Item>;
        get id(): string;
        get componentHolder(): $MutableDataComponentHolder;
        get componentMap(): $DataComponentMap;
        set itemName(value: $Component_);
        set repairCost(value: number);
        set tool(value: $Tool_);
        set damage(value: number);
        set instrument(value: $Holder_<$Instrument>);
        set fireworks(value: $Fireworks_);
        set bucketEntityData(value: $CompoundTag_);
        set bundleContents(value: $List_<$ItemStack_>);
        set noteBlockSound(value: $ResourceLocation_);
        set fireworkExplosion(value: $FireworkExplosion_);
        set mapItemColor(value: $KubeColor_);
        set blockEntityData(value: $CompoundTag_);
        set chargedProjectiles(value: $List_<$ItemStack_>);
        get tagKeys(): $List<$TagKey<$Item>>;
        get tags(): $List<$ResourceLocation>;
        set blockStateProperties(value: $Map_<string, string>);
        set dyedColorWithTooltip(value: $KubeColor_);
        set dyedColor(value: $KubeColor_);
        set baseColor(value: $DyeColor_);
        set unit(value: $DataComponentType_<$Unit_>);
        set potionId(value: $Holder_<$Potion>);
        set entityData(value: $CompoundTag_);
        set lockCode(value: string);
        set glintOverride(value: boolean);
        set potionContents(value: $PotionContents_);
        set customModelData(value: number);
        set attributeModifiersWithTooltip(value: $List_<$ItemAttributeModifiers$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $ItemStack}.
     */
    export type $ItemStack_ = $Item_ | { id: RegistryTypes.Item, count?: number,  };
    export class $LingeringPotionItem extends $ThrowablePotionItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $CreativeModeTab$Builder {
        type(arg0: $CreativeModeTab$Type_): $CreativeModeTab$Builder;
        build(): $CreativeModeTab;
        withTabsImage(arg0: $ResourceLocation_): $CreativeModeTab$Builder;
        withTabsAfter(...arg0: $ResourceKey_<$CreativeModeTab>[]): $CreativeModeTab$Builder;
        withTabsAfter(...arg0: $ResourceLocation_[]): $CreativeModeTab$Builder;
        withTabsBefore(...arg0: $ResourceLocation_[]): $CreativeModeTab$Builder;
        withTabsBefore(...arg0: $ResourceKey_<$CreativeModeTab>[]): $CreativeModeTab$Builder;
        withTabFactory(arg0: $Function_<$CreativeModeTab$Builder, $CreativeModeTab>): $CreativeModeTab$Builder;
        withSlotColor(arg0: number): $CreativeModeTab$Builder;
        withLabelColor(arg0: number): $CreativeModeTab$Builder;
        withSearchBar(arg0: number): $CreativeModeTab$Builder;
        withSearchBar(): $CreativeModeTab$Builder;
        title(arg0: $Component_): $CreativeModeTab$Builder;
        icon(arg0: $Supplier_<$ItemStack>): $CreativeModeTab$Builder;
        withScrollBarSpriteLocation(arg0: $ResourceLocation_): $CreativeModeTab$Builder;
        displayItems(arg0: $CreativeModeTab$DisplayItemsGenerator_): $CreativeModeTab$Builder;
        displayItems(arg0: $Collection_<$Holder_<$ItemLike>>): $CreativeModeTab$Builder;
        backgroundTexture(arg0: $ResourceLocation_): $CreativeModeTab$Builder;
        alignedRight(): $CreativeModeTab$Builder;
        noScrollBar(): $CreativeModeTab$Builder;
        hideTitle(): $CreativeModeTab$Builder;
        constructor(arg0: $CreativeModeTab$Row_, arg1: number);
    }
    export class $ProjectileItem$DispenseConfig extends $Record {
        static builder(): $ProjectileItem$DispenseConfig$Builder;
        positionFunction(): $ProjectileItem$PositionFunction;
        uncertainty(): number;
        overrideDispenseEvent(): $OptionalInt;
        power(): number;
        static DEFAULT: $ProjectileItem$DispenseConfig;
        constructor(arg0: $ProjectileItem$PositionFunction_, arg1: number, arg2: number, arg3: $OptionalInt);
    }
    export class $EnchantedBookItem extends $Item {
        static createForEnchantment(arg0: $EnchantmentInstance): $ItemStack;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ArrowItem extends $Item implements $ProjectileItem {
        isInfinite(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $LivingEntity): boolean;
        asProjectile(arg0: $Level_, arg1: $Position, arg2: $ItemStack_, arg3: $Direction_): $Projectile;
        createArrow(arg0: $Level_, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $ItemStack_): $AbstractArrow;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(arg0: $Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $Tiers extends $Enum<$Tiers> implements $Tier {
        static values(): $Tiers[];
        static valueOf(arg0: string): $Tiers;
        getTag(): $TagKey<$Block>;
        getEnchantmentValue(): number;
        getUses(): number;
        getIncorrectBlocksForDrops(): $TagKey<$Block>;
        getRepairIngredient(): $Ingredient;
        getSpeed(): number;
        getAttackDamageBonus(): number;
        createToolProperties(arg0: $TagKey_<$Block>): $Tool;
        static GOLD: $Tiers;
        static NETHERITE: $Tiers;
        static WOOD: $Tiers;
        static DIAMOND: $Tiers;
        static IRON: $Tiers;
        static STONE: $Tiers;
        get tag(): $TagKey<$Block>;
        get enchantmentValue(): number;
        get uses(): number;
        get incorrectBlocksForDrops(): $TagKey<$Block>;
        get repairIngredient(): $Ingredient;
        get speed(): number;
        get attackDamageBonus(): number;
    }
    /**
     * Values that may be interpreted as {@link $Tiers}.
     */
    export type $Tiers_ = "wood" | "stone" | "iron" | "diamond" | "gold" | "netherite";
    export class $SuspiciousStewItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static DEFAULT_DURATION: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $WritableBookItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $Items {
        static registerBlock(arg0: $Block_, arg1: $UnaryOperator_<$Item$Properties>): $Item;
        static registerBlock(arg0: $Block_, arg1: $Item_): $Item;
        static registerBlock(arg0: $BlockItem): $Item;
        static registerBlock(arg0: $Block_, ...arg1: $Block_[]): $Item;
        static registerBlock(arg0: $Block_): $Item;
        static registerItem(arg0: $ResourceLocation_, arg1: $Item_): $Item;
        static registerItem(arg0: $ResourceKey_<$Item>, arg1: $Item_): $Item;
        static registerItem(arg0: string, arg1: $Item_): $Item;
        static GREEN_CONCRETE_POWDER: $Item;
        static FOX_SPAWN_EGG: $Item;
        static PIGLIN_HEAD: $Item;
        static SHAPER_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static PURPLE_CARPET: $Item;
        static GOLDEN_PICKAXE: $Item;
        static SMALL_AMETHYST_BUD: $Item;
        static DEAD_TUBE_CORAL: $Item;
        static WOLF_SPAWN_EGG: $Item;
        static GREEN_GLAZED_TERRACOTTA: $Item;
        static JUNGLE_PRESSURE_PLATE: $Item;
        static EXPOSED_CUT_COPPER: $Item;
        static TRAPPED_CHEST: $Item;
        static BEE_SPAWN_EGG: $Item;
        static STONE_BRICK_STAIRS: $Item;
        static SANDSTONE_WALL: $Item;
        static RABBIT_STEW: $Item;
        static OAK_WOOD: $Item;
        static WHITE_TULIP: $Item;
        static GRAY_STAINED_GLASS: $Item;
        static BLUE_ORCHID: $Item;
        static SPRUCE_DOOR: $Item;
        static STRIPPED_BIRCH_LOG: $Item;
        static LIGHT_BLUE_TERRACOTTA: $Item;
        static CHERRY_BOAT: $Item;
        static ZOMBIE_HEAD: $Item;
        static BROWN_WOOL: $Item;
        static FIRE_CHARGE: $Item;
        static GRANITE_WALL: $Item;
        static MANGROVE_BOAT: $Item;
        static SHORT_GRASS: $Item;
        static ORANGE_SHULKER_BOX: $Item;
        static FLINT_AND_STEEL: $Item;
        static GREEN_CANDLE: $Item;
        static CRACKED_STONE_BRICKS: $Item;
        static BRICK_SLAB: $Item;
        static BLUE_CANDLE: $Item;
        static LAPIS_BLOCK: $Item;
        static JUNGLE_SLAB: $Item;
        static PURPLE_BED: $Item;
        static END_STONE_BRICK_STAIRS: $Item;
        static CLOCK: $Item;
        static MUSIC_DISC_STRAD: $Item;
        static JUNGLE_PLANKS: $Item;
        static DIAMOND_HORSE_ARMOR: $Item;
        static CHEST_MINECART: $Item;
        static TURTLE_EGG: $Item;
        static DIAMOND: $Item;
        static WOODEN_SHOVEL: $Item;
        static WHITE_CANDLE: $Item;
        static VERDANT_FROGLIGHT: $Item;
        static COBBLESTONE: $Item;
        static TUBE_CORAL: $Item;
        static GILDED_BLACKSTONE: $Item;
        static CYAN_STAINED_GLASS_PANE: $Item;
        static WAXED_COPPER_BULB: $Item;
        static SMOOTH_RED_SANDSTONE_SLAB: $Item;
        static CHISELED_SANDSTONE: $Item;
        static ARROW: $Item;
        static TOTEM_OF_UNDYING: $Item;
        static LIGHT_BLUE_SHULKER_BOX: $Item;
        static NETHER_BRICK_WALL: $Item;
        static AXOLOTL_SPAWN_EGG: $Item;
        static WAXED_WEATHERED_CUT_COPPER_STAIRS: $Item;
        static RED_WOOL: $Item;
        static COMMAND_BLOCK: $Item;
        static ROOTED_DIRT: $Item;
        static PRISMARINE_STAIRS: $Item;
        static DEEPSLATE_TILE_STAIRS: $Item;
        static POLISHED_ANDESITE: $Item;
        static CRAFTING_TABLE: $Item;
        static MOJANG_BANNER_PATTERN: $Item;
        static CORNFLOWER: $Item;
        static SCULK_SHRIEKER: $Item;
        static INFESTED_COBBLESTONE: $Item;
        static TORCHFLOWER_SEEDS: $Item;
        static DIORITE: $Item;
        static LIGHT_BLUE_CONCRETE: $Item;
        static POLISHED_ANDESITE_SLAB: $Item;
        static END_CRYSTAL: $Item;
        static POLISHED_BLACKSTONE_BUTTON: $Item;
        static MOSSY_STONE_BRICK_WALL: $Item;
        static POLISHED_DEEPSLATE_WALL: $Item;
        static HORSE_SPAWN_EGG: $Item;
        static WARPED_SLAB: $Item;
        static SKELETON_HORSE_SPAWN_EGG: $Item;
        static STONE_BRICK_WALL: $Item;
        static DARK_OAK_WOOD: $Item;
        static WAXED_EXPOSED_CUT_COPPER_STAIRS: $Item;
        static CRIMSON_HYPHAE: $Item;
        static JUKEBOX: $Item;
        static DARK_OAK_BUTTON: $Item;
        static APPLE: $Item;
        static BIRCH_BOAT: $Item;
        static BUCKET: $Item;
        static GOAT_HORN: $Item;
        static CRACKED_DEEPSLATE_BRICKS: $Item;
        static CHERRY_PRESSURE_PLATE: $Item;
        static WARPED_STAIRS: $Item;
        static MANGROVE_PLANKS: $Item;
        static DEEPSLATE_TILE_WALL: $Item;
        static BLACK_CONCRETE_POWDER: $Item;
        static DARK_OAK_PRESSURE_PLATE: $Item;
        static MINECART: $Item;
        static POTION: $Item;
        static STRIPPED_SPRUCE_WOOD: $Item;
        static MANGROVE_LOG: $Item;
        static OAK_BUTTON: $Item;
        static BAMBOO_CHEST_RAFT: $Item;
        static GRANITE: $Item;
        static SAND: $Item;
        static SCRAPE_POTTERY_SHERD: $Item;
        static LIGHT: $Item;
        static BROWN_TERRACOTTA: $Item;
        static ORANGE_STAINED_GLASS_PANE: $Item;
        static WOODEN_AXE: $Item;
        static FILLED_MAP: $Item;
        static REINFORCED_DEEPSLATE: $Item;
        static MOURNER_POTTERY_SHERD: $Item;
        static INK_SAC: $Item;
        static NETHER_WART: $Item;
        static YELLOW_CARPET: $Item;
        static RECOVERY_COMPASS: $Item;
        static BEETROOT: $Item;
        static LILY_OF_THE_VALLEY: $Item;
        static DEEPSLATE_TILES: $Item;
        static HAY_BLOCK: $Item;
        static COOKIE: $Item;
        static IRON_LEGGINGS: $Item;
        static ORANGE_DYE: $Item;
        static LECTERN: $Item;
        static RAW_COPPER_BLOCK: $Item;
        static GLOW_INK_SAC: $Item;
        static CRIMSON_FENCE_GATE: $Item;
        static BLACK_STAINED_GLASS_PANE: $Item;
        static ALLIUM: $Item;
        static TUFF_BRICK_WALL: $Item;
        static COBBLESTONE_STAIRS: $Item;
        static CROSSBOW: $Item;
        static PUMPKIN_PIE: $Item;
        static CRYING_OBSIDIAN: $Item;
        static DETECTOR_RAIL: $Item;
        static SOUL_CAMPFIRE: $Item;
        static AMETHYST_CLUSTER: $Item;
        static PURPLE_STAINED_GLASS: $Item;
        static BROWN_CONCRETE_POWDER: $Item;
        static TUFF_STAIRS: $Item;
        static MANGROVE_ROOTS: $Item;
        static TERRACOTTA: $Item;
        static END_STONE_BRICKS: $Item;
        static BAMBOO_RAFT: $Item;
        static DROWNED_SPAWN_EGG: $Item;
        static COARSE_DIRT: $Item;
        static LIGHT_GRAY_GLAZED_TERRACOTTA: $Item;
        static GLOWSTONE: $Item;
        static MANGROVE_HANGING_SIGN: $Item;
        static DIORITE_SLAB: $Item;
        static SKULL_POTTERY_SHERD: $Item;
        static ANCIENT_DEBRIS: $Item;
        static WAXED_EXPOSED_COPPER_TRAPDOOR: $Item;
        static SUSPICIOUS_STEW: $Item;
        static PINK_SHULKER_BOX: $Item;
        static CRIMSON_DOOR: $Item;
        static PORKCHOP: $Item;
        static POLISHED_TUFF: $Item;
        static GLASS_PANE: $Item;
        static DIAMOND_ORE: $Item;
        static CHIPPED_ANVIL: $Item;
        static DEEPSLATE_COPPER_ORE: $Item;
        static OAK_LEAVES: $Item;
        static COOKED_COD: $Item;
        static CYAN_BANNER: $Item;
        static BAMBOO_STAIRS: $Item;
        static WAXED_OXIDIZED_CUT_COPPER_SLAB: $Item;
        static MAGENTA_BED: $Item;
        static SPONGE: $Item;
        static RED_BED: $Item;
        static SCULK: $Item;
        static RAW_IRON: $Item;
        static TRIAL_KEY: $Item;
        static TIPPED_ARROW: $Item;
        static IRON_NUGGET: $Item;
        static MANGROVE_TRAPDOOR: $Item;
        static CANDLE: $Item;
        static STRIPPED_SPRUCE_LOG: $Item;
        static WAXED_EXPOSED_COPPER_DOOR: $Item;
        static WOODEN_SWORD: $Item;
        static COPPER_GRATE: $Item;
        static CHORUS_PLANT: $Item;
        static NETHER_BRICK: $Item;
        static ANDESITE_STAIRS: $Item;
        static PIGLIN_SPAWN_EGG: $Item;
        static STONE_HOE: $Item;
        static WAXED_WEATHERED_COPPER_BULB: $Item;
        static BRICKS: $Item;
        static CAT_SPAWN_EGG: $Item;
        static RED_NETHER_BRICK_WALL: $Item;
        static WET_SPONGE: $Item;
        static STRUCTURE_BLOCK: $Item;
        static SPIDER_SPAWN_EGG: $Item;
        static CHERRY_BUTTON: $Item;
        static RED_CARPET: $Item;
        static ENCHANTING_TABLE: $Item;
        static PHANTOM_SPAWN_EGG: $Item;
        static GUSTER_BANNER_PATTERN: $Item;
        static YELLOW_STAINED_GLASS: $Item;
        static PIGLIN_BANNER_PATTERN: $Item;
        static DEEPSLATE: $Item;
        static BAT_SPAWN_EGG: $Item;
        static RED_BANNER: $Item;
        static TADPOLE_SPAWN_EGG: $Item;
        static BLUE_STAINED_GLASS_PANE: $Item;
        static SPRUCE_LOG: $Item;
        static COPPER_TRAPDOOR: $Item;
        static BIRCH_FENCE: $Item;
        static MAP: $Item;
        static HOGLIN_SPAWN_EGG: $Item;
        static SOUL_LANTERN: $Item;
        static POLISHED_BLACKSTONE_BRICKS: $Item;
        static WHITE_STAINED_GLASS_PANE: $Item;
        static LIME_STAINED_GLASS: $Item;
        static DIORITE_WALL: $Item;
        static MAGMA_BLOCK: $Item;
        static GLOWSTONE_DUST: $Item;
        static STRIDER_SPAWN_EGG: $Item;
        static DARK_OAK_SIGN: $Item;
        static GOLDEN_SHOVEL: $Item;
        static POLISHED_DEEPSLATE: $Item;
        static RABBIT_SPAWN_EGG: $Item;
        static BLUE_CONCRETE_POWDER: $Item;
        static CHORUS_FLOWER: $Item;
        static BLACK_GLAZED_TERRACOTTA: $Item;
        static WRITTEN_BOOK: $Item;
        static RED_STAINED_GLASS: $Item;
        static DIAMOND_PICKAXE: $Item;
        static BARRIER: $Item;
        static ENCHANTED_BOOK: $Item;
        static WARPED_FENCE_GATE: $Item;
        static DEEPSLATE_REDSTONE_ORE: $Item;
        static BAMBOO_MOSAIC_STAIRS: $Item;
        static DEEPSLATE_BRICK_STAIRS: $Item;
        static CLAY_BALL: $Item;
        static WANDERING_TRADER_SPAWN_EGG: $Item;
        static LEATHER_BOOTS: $Item;
        static MILK_BUCKET: $Item;
        static COOKED_BEEF: $Item;
        static GRAY_CANDLE: $Item;
        static FARMLAND: $Item;
        static SKELETON_SPAWN_EGG: $Item;
        static TRIAL_SPAWNER: $Item;
        static SMOOTH_BASALT: $Item;
        static PRISMARINE_BRICKS: $Item;
        static DARK_OAK_LOG: $Item;
        static BRAIN_CORAL_FAN: $Item;
        static LEATHER_LEGGINGS: $Item;
        static WEATHERED_CUT_COPPER_SLAB: $Item;
        static OMINOUS_TRIAL_KEY: $Item;
        static FISHING_ROD: $Item;
        static WARDEN_SPAWN_EGG: $Item;
        static ACACIA_HANGING_SIGN: $Item;
        static MAGENTA_SHULKER_BOX: $Item;
        static ENDER_PEARL: $Item;
        static QUARTZ_PILLAR: $Item;
        static WARPED_TRAPDOOR: $Item;
        static AXOLOTL_BUCKET: $Item;
        static STRIPPED_BAMBOO_BLOCK: $Item;
        static GOAT_SPAWN_EGG: $Item;
        static REDSTONE_BLOCK: $Item;
        static COBBLED_DEEPSLATE_WALL: $Item;
        static MUSIC_DISC_PIGSTEP: $Item;
        static CHISELED_POLISHED_BLACKSTONE: $Item;
        static EXPOSED_CHISELED_COPPER: $Item;
        static BIRCH_SLAB: $Item;
        static LIME_SHULKER_BOX: $Item;
        static QUARTZ_SLAB: $Item;
        static OXIDIZED_COPPER_GRATE: $Item;
        static QUARTZ_BLOCK: $Item;
        static SHEEP_SPAWN_EGG: $Item;
        static PIGLIN_BRUTE_SPAWN_EGG: $Item;
        static SNOW: $Item;
        static SUGAR_CANE: $Item;
        static TNT_MINECART: $Item;
        static WITCH_SPAWN_EGG: $Item;
        static ACACIA_FENCE: $Item;
        static ARMOR_STAND: $Item;
        static DARK_OAK_FENCE: $Item;
        static HORN_CORAL: $Item;
        static BOW: $Item;
        static TUBE_CORAL_FAN: $Item;
        static SUGAR: $Item;
        static MOSSY_COBBLESTONE: $Item;
        static WARPED_FENCE: $Item;
        static DAYLIGHT_DETECTOR: $Item;
        static POLISHED_TUFF_WALL: $Item;
        static RABBIT_HIDE: $Item;
        static BUBBLE_CORAL: $Item;
        static JUNGLE_STAIRS: $Item;
        static CYAN_CARPET: $Item;
        static OXIDIZED_COPPER_DOOR: $Item;
        static OBSERVER: $Item;
        static DEEPSLATE_DIAMOND_ORE: $Item;
        static AMETHYST_BLOCK: $Item;
        static SPRUCE_TRAPDOOR: $Item;
        static JUNGLE_BOAT: $Item;
        static CHERRY_STAIRS: $Item;
        static CUT_COPPER: $Item;
        static BLAST_FURNACE: $Item;
        static RED_SANDSTONE_SLAB: $Item;
        static OBSIDIAN: $Item;
        static FIRE_CORAL_FAN: $Item;
        static AZURE_BLUET: $Item;
        static DEBUG_STICK: $Item;
        static PURPLE_STAINED_GLASS_PANE: $Item;
        static LIME_GLAZED_TERRACOTTA: $Item;
        static HUSK_SPAWN_EGG: $Item;
        static CARTOGRAPHY_TABLE: $Item;
        static BOLT_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static ORANGE_CANDLE: $Item;
        static CHARCOAL: $Item;
        static ZOMBIE_SPAWN_EGG: $Item;
        static BEETROOT_SOUP: $Item;
        static WITHER_ROSE: $Item;
        static DEAD_BRAIN_CORAL_FAN: $Item;
        static PISTON: $Item;
        static NETHERITE_CHESTPLATE: $Item;
        static BLACK_CANDLE: $Item;
        static CUT_RED_SANDSTONE: $Item;
        static YELLOW_BANNER: $Item;
        static BIRCH_SAPLING: $Item;
        static LIME_CONCRETE: $Item;
        static CHAINMAIL_LEGGINGS: $Item;
        static PURPUR_SLAB: $Item;
        static SNOWBALL: $Item;
        static PURPLE_CONCRETE_POWDER: $Item;
        static PURPLE_BANNER: $Item;
        static BIRCH_LOG: $Item;
        static DEEPSLATE_BRICK_WALL: $Item;
        static DARK_PRISMARINE_SLAB: $Item;
        static ACACIA_PLANKS: $Item;
        static MYCELIUM: $Item;
        static RED_SANDSTONE: $Item;
        static BROWN_CONCRETE: $Item;
        static LEATHER_CHESTPLATE: $Item;
        static PRISMARINE_BRICK_STAIRS: $Item;
        static BUNDLE: $Item;
        static STONE_SLAB: $Item;
        static LEATHER_HORSE_ARMOR: $Item;
        static BIRCH_LEAVES: $Item;
        static BAMBOO_FENCE_GATE: $Item;
        static DEEPSLATE_GOLD_ORE: $Item;
        static NETHER_BRICK_FENCE: $Item;
        static FIREWORK_ROCKET: $Item;
        static BROWN_MUSHROOM: $Item;
        static TUFF_BRICK_SLAB: $Item;
        static CYAN_SHULKER_BOX: $Item;
        static POLISHED_BLACKSTONE_SLAB: $Item;
        static WAXED_EXPOSED_CHISELED_COPPER: $Item;
        static NETHERITE_BLOCK: $Item;
        static OCELOT_SPAWN_EGG: $Item;
        static ACACIA_PRESSURE_PLATE: $Item;
        static RED_SAND: $Item;
        static PACKED_MUD: $Item;
        static SHEARS: $Item;
        static POLISHED_GRANITE_STAIRS: $Item;
        static MAGENTA_BANNER: $Item;
        static QUARTZ_STAIRS: $Item;
        static DRIED_KELP_BLOCK: $Item;
        static SCULK_VEIN: $Item;
        static BREWING_STAND: $Item;
        static CACTUS: $Item;
        static SMOOTH_QUARTZ_SLAB: $Item;
        static CAKE: $Item;
        static CHAINMAIL_BOOTS: $Item;
        static STRIPPED_ACACIA_WOOD: $Item;
        static FIREWORK_STAR: $Item;
        static PURPLE_DYE: $Item;
        static COW_SPAWN_EGG: $Item;
        static BAMBOO_MOSAIC_SLAB: $Item;
        static ELDER_GUARDIAN_SPAWN_EGG: $Item;
        static LIGHT_GRAY_BANNER: $Item;
        static GREEN_BANNER: $Item;
        static SPRUCE_SIGN: $Item;
        static BLUE_STAINED_GLASS: $Item;
        static ZOMBIE_VILLAGER_SPAWN_EGG: $Item;
        static CHISELED_TUFF_BRICKS: $Item;
        static STRIPPED_BIRCH_WOOD: $Item;
        static SLIME_BLOCK: $Item;
        static RED_MUSHROOM: $Item;
        static DRIED_KELP: $Item;
        static BAMBOO_FENCE: $Item;
        static SPRUCE_SAPLING: $Item;
        static LIGHT_BLUE_STAINED_GLASS: $Item;
        static MUTTON: $Item;
        static NAUTILUS_SHELL: $Item;
        static EXPOSED_COPPER_DOOR: $Item;
        static GLOBE_BANNER_PATTERN: $Item;
        static POLISHED_GRANITE_SLAB: $Item;
        static SMOOTH_RED_SANDSTONE_STAIRS: $Item;
        static WAXED_COPPER_TRAPDOOR: $Item;
        static BRAIN_CORAL: $Item;
        static TURTLE_HELMET: $Item;
        static PUFFERFISH_BUCKET: $Item;
        static COMPARATOR: $Item;
        static PIG_SPAWN_EGG: $Item;
        static REDSTONE_ORE: $Item;
        static STRIPPED_CRIMSON_HYPHAE: $Item;
        static SPIDER_EYE: $Item;
        static PINK_CANDLE: $Item;
        static DEAD_FIRE_CORAL_BLOCK: $Item;
        static RED_SANDSTONE_WALL: $Item;
        static WITHER_SKELETON_SKULL: $Item;
        static LIGHT_GRAY_TERRACOTTA: $Item;
        static LIGHT_BLUE_STAINED_GLASS_PANE: $Item;
        static FLOW_POTTERY_SHERD: $Item;
        static GRASS_BLOCK: $Item;
        static KNOWLEDGE_BOOK: $Item;
        static EXPOSED_COPPER_TRAPDOOR: $Item;
        static NETHERITE_AXE: $Item;
        static MAGENTA_STAINED_GLASS: $Item;
        static CRIMSON_PRESSURE_PLATE: $Item;
        static COAL_ORE: $Item;
        static FURNACE_MINECART: $Item;
        static DEEPSLATE_BRICKS: $Item;
        static WAXED_EXPOSED_COPPER_BULB: $Item;
        static PRISMARINE_CRYSTALS: $Item;
        static ICE: $Item;
        static PURPLE_SHULKER_BOX: $Item;
        static RIB_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static LIGHT_GRAY_CONCRETE_POWDER: $Item;
        static STRIPPED_OAK_WOOD: $Item;
        static DEEPSLATE_BRICK_SLAB: $Item;
        static GOLD_ORE: $Item;
        static GREEN_CARPET: $Item;
        static OCHRE_FROGLIGHT: $Item;
        static POLISHED_BLACKSTONE: $Item;
        static BLAZE_POWDER: $Item;
        static CLAY: $Item;
        static TUBE_CORAL_BLOCK: $Item;
        static LILAC: $Item;
        static RED_SANDSTONE_STAIRS: $Item;
        static RABBIT_FOOT: $Item;
        static STRIPPED_CHERRY_LOG: $Item;
        static WAXED_CUT_COPPER_STAIRS: $Item;
        static DARK_PRISMARINE: $Item;
        static REDSTONE: $Item;
        static MUSIC_DISC_WAIT: $Item;
        static WAXED_EXPOSED_COPPER_GRATE: $Item;
        static NETHER_SPROUTS: $Item;
        static LINGERING_POTION: $Item;
        static BUBBLE_CORAL_BLOCK: $Item;
        static BLUE_GLAZED_TERRACOTTA: $Item;
        static WHITE_DYE: $Item;
        static BRICK_WALL: $Item;
        static ACACIA_FENCE_GATE: $Item;
        static SLIME_BALL: $Item;
        static GLOW_LICHEN: $Item;
        static CHERRY_DOOR: $Item;
        static BIRCH_FENCE_GATE: $Item;
        static LIGHT_GRAY_CONCRETE: $Item;
        static DIAMOND_LEGGINGS: $Item;
        static DRAGON_BREATH: $Item;
        static OXIDIZED_CUT_COPPER_SLAB: $Item;
        static MOSSY_COBBLESTONE_STAIRS: $Item;
        static DARK_OAK_TRAPDOOR: $Item;
        static YELLOW_TERRACOTTA: $Item;
        static WITHER_SPAWN_EGG: $Item;
        static WEATHERED_CHISELED_COPPER: $Item;
        static CHISELED_RED_SANDSTONE: $Item;
        static JUNGLE_WOOD: $Item;
        static WARPED_FUNGUS_ON_A_STICK: $Item;
        static PUMPKIN_SEEDS: $Item;
        static CRACKED_DEEPSLATE_TILES: $Item;
        static NETHERITE_INGOT: $Item;
        static WHITE_BANNER: $Item;
        static ACACIA_DOOR: $Item;
        static FLOWERING_AZALEA: $Item;
        static MOSSY_STONE_BRICKS: $Item;
        static PRISMARINE: $Item;
        static WARPED_BUTTON: $Item;
        static TUFF_SLAB: $Item;
        static DEAD_TUBE_CORAL_BLOCK: $Item;
        static GOLDEN_HELMET: $Item;
        static SMOOTH_SANDSTONE: $Item;
        static DIAMOND_BLOCK: $Item;
        static MUSIC_DISC_5: $Item;
        static OAK_SAPLING: $Item;
        static POLISHED_DEEPSLATE_SLAB: $Item;
        static PARROT_SPAWN_EGG: $Item;
        static MANGROVE_FENCE_GATE: $Item;
        static CHISELED_DEEPSLATE: $Item;
        static STONE_BRICK_SLAB: $Item;
        static CUT_COPPER_STAIRS: $Item;
        static GRAY_CONCRETE: $Item;
        static DARK_OAK_LEAVES: $Item;
        static EXPOSED_COPPER_GRATE: $Item;
        static BAMBOO_PRESSURE_PLATE: $Item;
        static IRON_AXE: $Item;
        static MELON: $Item;
        static SEA_LANTERN: $Item;
        static GREEN_CONCRETE: $Item;
        static LANTERN: $Item;
        static SHIELD: $Item;
        static SMOOTH_STONE_SLAB: $Item;
        static SMOOTH_STONE: $Item;
        static COD_SPAWN_EGG: $Item;
        static GREEN_STAINED_GLASS_PANE: $Item;
        static ORANGE_CONCRETE: $Item;
        static BONE: $Item;
        static RED_NETHER_BRICKS: $Item;
        static POISONOUS_POTATO: $Item;
        static MANGROVE_DOOR: $Item;
        static MUSIC_DISC_FAR: $Item;
        static CYAN_CONCRETE_POWDER: $Item;
        static WAXED_COPPER_BLOCK: $Item;
        static SMOKER: $Item;
        static BIRCH_PLANKS: $Item;
        static WOODEN_PICKAXE: $Item;
        static REPEATING_COMMAND_BLOCK: $Item;
        static TURTLE_SPAWN_EGG: $Item;
        static RED_CONCRETE_POWDER: $Item;
        static BIRCH_DOOR: $Item;
        static CRIMSON_SIGN: $Item;
        static DARK_OAK_BOAT: $Item;
        static BLAZE_ROD: $Item;
        static BOOK: $Item;
        static YELLOW_DYE: $Item;
        static CHISELED_COPPER: $Item;
        static CRIMSON_TRAPDOOR: $Item;
        static WEATHERED_COPPER_TRAPDOOR: $Item;
        static BLUE_CARPET: $Item;
        static DEEPSLATE_TILE_SLAB: $Item;
        static GOLDEN_HORSE_ARMOR: $Item;
        static DRAGON_EGG: $Item;
        static EXPOSED_COPPER: $Item;
        static WEATHERED_CUT_COPPER_STAIRS: $Item;
        static SANDSTONE: $Item;
        static CRIMSON_STAIRS: $Item;
        static COBBLED_DEEPSLATE_SLAB: $Item;
        static MUSIC_DISC_MELLOHI: $Item;
        static MOSS_CARPET: $Item;
        static BREAD: $Item;
        static ANVIL: $Item;
        static REPEATER: $Item;
        static CRIMSON_HANGING_SIGN: $Item;
        static OXIDIZED_COPPER_BULB: $Item;
        static MANGROVE_CHEST_BOAT: $Item;
        static DEAD_BRAIN_CORAL: $Item;
        static BOOKSHELF: $Item;
        static SMOOTH_QUARTZ_STAIRS: $Item;
        static DANGER_POTTERY_SHERD: $Item;
        static LIGHT_BLUE_CANDLE: $Item;
        static WILD_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static COOKED_CHICKEN: $Item;
        static SPRUCE_WOOD: $Item;
        static BLACK_TERRACOTTA: $Item;
        static STONE_STAIRS: $Item;
        static EXPERIENCE_BOTTLE: $Item;
        static POLISHED_TUFF_SLAB: $Item;
        static POWDER_SNOW_BUCKET: $Item;
        static COMMAND_BLOCK_MINECART: $Item;
        static PHANTOM_MEMBRANE: $Item;
        static LIME_WOOL: $Item;
        static SPRUCE_FENCE: $Item;
        static SALMON: $Item;
        static OAK_PRESSURE_PLATE: $Item;
        static HONEY_BLOCK: $Item;
        static STRIPPED_DARK_OAK_WOOD: $Item;
        static MEDIUM_AMETHYST_BUD: $Item;
        static BIRCH_STAIRS: $Item;
        static MANGROVE_BUTTON: $Item;
        static BIRCH_TRAPDOOR: $Item;
        static COMPOSTER: $Item;
        static PITCHER_POD: $Item;
        static ORANGE_STAINED_GLASS: $Item;
        static GOLD_INGOT: $Item;
        static DECORATED_POT: $Item;
        static GLASS: $Item;
        static STRIPPED_MANGROVE_LOG: $Item;
        static ITEM_FRAME: $Item;
        static CHERRY_PLANKS: $Item;
        static NETHERITE_BOOTS: $Item;
        static SOUL_SAND: $Item;
        static EMERALD: $Item;
        static DIAMOND_HELMET: $Item;
        static GREEN_STAINED_GLASS: $Item;
        static GRAY_STAINED_GLASS_PANE: $Item;
        static SHULKER_SHELL: $Item;
        static BLUE_WOOL: $Item;
        static MAGENTA_WOOL: $Item;
        static PITCHER_PLANT: $Item;
        static BAMBOO_DOOR: $Item;
        static DEAD_HORN_CORAL: $Item;
        static IRON_HELMET: $Item;
        static COCOA_BEANS: $Item;
        static PINK_BED: $Item;
        static CYAN_CANDLE: $Item;
        static POPPY: $Item;
        static CYAN_TERRACOTTA: $Item;
        static TRIPWIRE_HOOK: $Item;
        static PACKED_ICE: $Item;
        static YELLOW_CONCRETE: $Item;
        static WEATHERED_COPPER_DOOR: $Item;
        static ACACIA_STAIRS: $Item;
        static COMPASS: $Item;
        static VINE: $Item;
        static INFESTED_STONE_BRICKS: $Item;
        static GOLDEN_CHESTPLATE: $Item;
        static COPPER_ORE: $Item;
        static NETHERITE_HOE: $Item;
        static BAMBOO_TRAPDOOR: $Item;
        static CARROT: $Item;
        static MAGMA_CUBE_SPAWN_EGG: $Item;
        static MUSIC_DISC_13: $Item;
        static MUSIC_DISC_WARD: $Item;
        static PODZOL: $Item;
        static WARPED_WART_BLOCK: $Item;
        static MUSIC_DISC_11: $Item;
        static POLISHED_BLACKSTONE_WALL: $Item;
        static WARPED_NYLIUM: $Item;
        static STRIPPED_CRIMSON_STEM: $Item;
        static BLUE_BED: $Item;
        static DEAD_FIRE_CORAL: $Item;
        static PLENTY_POTTERY_SHERD: $Item;
        static TURTLE_SCUTE: $Item;
        static BLACK_CARPET: $Item;
        static MUD: $Item;
        static PINK_TERRACOTTA: $Item;
        static SHEAF_POTTERY_SHERD: $Item;
        static GLOW_SQUID_SPAWN_EGG: $Item;
        static FIRE_CORAL_BLOCK: $Item;
        static DIAMOND_SHOVEL: $Item;
        static GRAY_GLAZED_TERRACOTTA: $Item;
        static BREEZE_ROD: $Item;
        static NAME_TAG: $Item;
        static CHERRY_LEAVES: $Item;
        static WEATHERED_COPPER_GRATE: $Item;
        static JUNGLE_FENCE: $Item;
        static SPAWNER: $Item;
        static POLISHED_BASALT: $Item;
        static ARCHER_POTTERY_SHERD: $Item;
        static WARPED_FUNGUS: $Item;
        static WHITE_CONCRETE_POWDER: $Item;
        static GRAY_TERRACOTTA: $Item;
        static RAIL: $Item;
        static MUSIC_DISC_PRECIPICE: $Item;
        static SWEET_BERRIES: $Item;
        static BREWER_POTTERY_SHERD: $Item;
        static DIAMOND_BOOTS: $Item;
        static WRITABLE_BOOK: $Item;
        static BEDROCK: $Item;
        static IRON_GOLEM_SPAWN_EGG: $Item;
        static RABBIT: $Item;
        static INFESTED_DEEPSLATE: $Item;
        static SHROOMLIGHT: $Item;
        static CHAIN_COMMAND_BLOCK: $Item;
        static CYAN_GLAZED_TERRACOTTA: $Item;
        static WAXED_WEATHERED_CUT_COPPER_SLAB: $Item;
        static GLOW_ITEM_FRAME: $Item;
        static ECHO_SHARD: $Item;
        static STRIPPED_DARK_OAK_LOG: $Item;
        static GRAY_WOOL: $Item;
        static MUSIC_DISC_CREATOR_MUSIC_BOX: $Item;
        static ACACIA_CHEST_BOAT: $Item;
        static ARMADILLO_SCUTE: $Item;
        static MUSIC_DISC_RELIC: $Item;
        static DARK_OAK_SLAB: $Item;
        static OAK_SIGN: $Item;
        static RED_CONCRETE: $Item;
        static CRACKED_POLISHED_BLACKSTONE_BRICKS: $Item;
        static ANGLER_POTTERY_SHERD: $Item;
        static WHEAT_SEEDS: $Item;
        static BEEHIVE: $Item;
        static WAXED_OXIDIZED_COPPER_DOOR: $Item;
        static GRAY_SHULKER_BOX: $Item;
        static WARPED_DOOR: $Item;
        static TROPICAL_FISH_BUCKET: $Item;
        static OAK_FENCE: $Item;
        static NETHER_BRICKS: $Item;
        static RED_CANDLE: $Item;
        static FLETCHING_TABLE: $Item;
        static FLOWER_BANNER_PATTERN: $Item;
        static EGG: $Item;
        static BRICK: $Item;
        static GRAY_BANNER: $Item;
        static ENDERMAN_SPAWN_EGG: $Item;
        static MAGENTA_CONCRETE: $Item;
        static JUNGLE_FENCE_GATE: $Item;
        static DARK_OAK_CHEST_BOAT: $Item;
        static BEETROOT_SEEDS: $Item;
        static FLOW_BANNER_PATTERN: $Item;
        static BLACK_SHULKER_BOX: $Item;
        static FROGSPAWN: $Item;
        static JUNGLE_TRAPDOOR: $Item;
        static OXIDIZED_CUT_COPPER_STAIRS: $Item;
        static ACTIVATOR_RAIL: $Item;
        static BOWL: $Item;
        static SILVERFISH_SPAWN_EGG: $Item;
        static DIRT_PATH: $Item;
        static GOLDEN_APPLE: $Item;
        static ZOMBIE_HORSE_SPAWN_EGG: $Item;
        static IRON_BOOTS: $Item;
        static ENCHANTED_GOLDEN_APPLE: $Item;
        static SHULKER_SPAWN_EGG: $Item;
        static HOPPER_MINECART: $Item;
        static ORANGE_CARPET: $Item;
        static PINK_CARPET: $Item;
        static STRUCTURE_VOID: $Item;
        static SADDLE: $Item;
        static STONECUTTER: $Item;
        static LIME_CONCRETE_POWDER: $Item;
        static POLISHED_BLACKSTONE_PRESSURE_PLATE: $Item;
        static PINK_BANNER: $Item;
        static GREEN_WOOL: $Item;
        static HORN_CORAL_FAN: $Item;
        static BROWN_DYE: $Item;
        static POPPED_CHORUS_FRUIT: $Item;
        static IRON_HOE: $Item;
        static CHERRY_FENCE: $Item;
        static MOSSY_COBBLESTONE_SLAB: $Item;
        static DARK_PRISMARINE_STAIRS: $Item;
        static TWISTING_VINES: $Item;
        static BOGGED_SPAWN_EGG: $Item;
        static PINK_CONCRETE: $Item;
        static GUNPOWDER: $Item;
        static LIME_BANNER: $Item;
        static MUSHROOM_STEW: $Item;
        static IRON_CHESTPLATE: $Item;
        static PRISMARINE_SHARD: $Item;
        static BIRCH_CHEST_BOAT: $Item;
        static JUNGLE_BUTTON: $Item;
        static BEEF: $Item;
        static WAXED_WEATHERED_COPPER: $Item;
        static MUSHROOM_STEM: $Item;
        static BLUE_TERRACOTTA: $Item;
        static VEX_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static EXPLORER_POTTERY_SHERD: $Item;
        static BROWN_MUSHROOM_BLOCK: $Item;
        static DEAD_TUBE_CORAL_FAN: $Item;
        static TADPOLE_BUCKET: $Item;
        static MAGENTA_GLAZED_TERRACOTTA: $Item;
        static TUFF_WALL: $Item;
        static CHISELED_BOOKSHELF: $Item;
        static DEAD_BUBBLE_CORAL: $Item;
        static RAW_GOLD: $Item;
        static WHITE_GLAZED_TERRACOTTA: $Item;
        static WAXED_OXIDIZED_COPPER: $Item;
        static NETHERITE_SCRAP: $Item;
        static GOLDEN_HOE: $Item;
        static GREEN_BED: $Item;
        static CAULDRON: $Item;
        static POLISHED_ANDESITE_STAIRS: $Item;
        static CHERRY_FENCE_GATE: $Item;
        static WITHER_SKELETON_SPAWN_EGG: $Item;
        static EMERALD_BLOCK: $Item;
        static IRON_SHOVEL: $Item;
        static LIME_STAINED_GLASS_PANE: $Item;
        static ORANGE_BANNER: $Item;
        static WAXED_WEATHERED_CHISELED_COPPER: $Item;
        static BLACK_DYE: $Item;
        static MUSIC_DISC_BLOCKS: $Item;
        static GOLDEN_BOOTS: $Item;
        static LIGHT_BLUE_GLAZED_TERRACOTTA: $Item;
        static OXIDIZED_COPPER: $Item;
        static PINK_STAINED_GLASS: $Item;
        static SPRUCE_STAIRS: $Item;
        static NETHERITE_LEGGINGS: $Item;
        static BLUE_ICE: $Item;
        static CAVE_SPIDER_SPAWN_EGG: $Item;
        static HEART_POTTERY_SHERD: $Item;
        static SCAFFOLDING: $Item;
        static CYAN_DYE: $Item;
        static BLUE_SHULKER_BOX: $Item;
        static HORN_CORAL_BLOCK: $Item;
        static CRIMSON_SLAB: $Item;
        static RESPAWN_ANCHOR: $Item;
        static SHELTER_POTTERY_SHERD: $Item;
        static KELP: $Item;
        static COPPER_BLOCK: $Item;
        static STRIPPED_WARPED_HYPHAE: $Item;
        static STRIPPED_JUNGLE_LOG: $Item;
        static ANDESITE_SLAB: $Item;
        static MINER_POTTERY_SHERD: $Item;
        static HOWL_POTTERY_SHERD: $Item;
        static SUSPICIOUS_GRAVEL: $Item;
        static CRIMSON_PLANKS: $Item;
        static GOLD_BLOCK: $Item;
        static DARK_OAK_FENCE_GATE: $Item;
        static SPRUCE_PRESSURE_PLATE: $Item;
        static ACACIA_LEAVES: $Item;
        static COBBLESTONE_SLAB: $Item;
        static HEAVY_WEIGHTED_PRESSURE_PLATE: $Item;
        static PINK_CONCRETE_POWDER: $Item;
        static WAXED_COPPER_GRATE: $Item;
        static COPPER_INGOT: $Item;
        static MELON_SLICE: $Item;
        static LIGHT_BLUE_CONCRETE_POWDER: $Item;
        static LIGHT_BLUE_DYE: $Item;
        static LAPIS_LAZULI: $Item;
        static CHISELED_TUFF: $Item;
        static WHITE_BED: $Item;
        static BUBBLE_CORAL_FAN: $Item;
        static HEARTBREAK_POTTERY_SHERD: $Item;
        static JUNGLE_CHEST_BOAT: $Item;
        static JUNGLE_LOG: $Item;
        static NOTE_BLOCK: $Item;
        static MANGROVE_SIGN: $Item;
        static WARPED_HYPHAE: $Item;
        static SLIME_SPAWN_EGG: $Item;
        static CHERRY_SIGN: $Item;
        static LAVA_BUCKET: $Item;
        static WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static SPRUCE_SLAB: $Item;
        static DIAMOND_AXE: $Item;
        static PEONY: $Item;
        static OXEYE_DAISY: $Item;
        static STICK: $Item;
        static OAK_HANGING_SIGN: $Item;
        static WATER_BUCKET: $Item;
        static ACACIA_SIGN: $Item;
        static STRIPPED_WARPED_STEM: $Item;
        static WAXED_OXIDIZED_CUT_COPPER: $Item;
        static MOSS_BLOCK: $Item;
        static BEACON: $Item;
        static HONEYCOMB_BLOCK: $Item;
        static NETHER_BRICK_STAIRS: $Item;
        static BRUSH: $Item;
        static COBWEB: $Item;
        static PRIZE_POTTERY_SHERD: $Item;
        static MACE: $Item;
        static OAK_LOG: $Item;
        static STRIPPED_JUNGLE_WOOD: $Item;
        static DEAD_BRAIN_CORAL_BLOCK: $Item;
        static MUDDY_MANGROVE_ROOTS: $Item;
        static PUFFERFISH: $Item;
        static TINTED_GLASS: $Item;
        static MAGENTA_CANDLE: $Item;
        static YELLOW_BED: $Item;
        static LIGHT_GRAY_CANDLE: $Item;
        static SPLASH_POTION: $Item;
        static CHICKEN_SPAWN_EGG: $Item;
        static CHISELED_QUARTZ_BLOCK: $Item;
        static LIME_CARPET: $Item;
        static FEATHER: $Item;
        static DEEPSLATE_EMERALD_ORE: $Item;
        static MUD_BRICK_SLAB: $Item;
        static PURPLE_GLAZED_TERRACOTTA: $Item;
        static IRON_BARS: $Item;
        static WHITE_CONCRETE: $Item;
        static DIAMOND_CHESTPLATE: $Item;
        static STONE: $Item;
        static NETHERITE_SHOVEL: $Item;
        static YELLOW_WOOL: $Item;
        static ROSE_BUSH: $Item;
        static OMINOUS_BOTTLE: $Item;
        static MUD_BRICKS: $Item;
        static BROWN_CARPET: $Item;
        static WAXED_CHISELED_COPPER: $Item;
        static STRIPPED_CHERRY_WOOD: $Item;
        static GOLD_NUGGET: $Item;
        static BLACKSTONE_STAIRS: $Item;
        static GOLDEN_AXE: $Item;
        static ACACIA_LOG: $Item;
        static INFESTED_MOSSY_STONE_BRICKS: $Item;
        static CREEPER_SPAWN_EGG: $Item;
        static ORANGE_GLAZED_TERRACOTTA: $Item;
        static MUD_BRICK_STAIRS: $Item;
        static MAGENTA_CONCRETE_POWDER: $Item;
        static TNT: $Item;
        static BELL: $Item;
        static BLACKSTONE_SLAB: $Item;
        static TORCHFLOWER: $Item;
        static SPRUCE_HANGING_SIGN: $Item;
        static STRIPPED_ACACIA_LOG: $Item;
        static HOST_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static RAW_IRON_BLOCK: $Item;
        static POTATO: $Item;
        static GHAST_TEAR: $Item;
        static BROWN_BANNER: $Item;
        static AIR: $Item;
        static FROG_SPAWN_EGG: $Item;
        static GRANITE_STAIRS: $Item;
        static BEE_NEST: $Item;
        static PINK_PETALS: $Item;
        static CHEST: $Item;
        static DOLPHIN_SPAWN_EGG: $Item;
        static SCULK_SENSOR: $Item;
        static OAK_CHEST_BOAT: $Item;
        static BONE_MEAL: $Item;
        static LIME_DYE: $Item;
        static MANGROVE_FENCE: $Item;
        static OAK_DOOR: $Item;
        static LILY_PAD: $Item;
        static ENDER_DRAGON_SPAWN_EGG: $Item;
        static BAKED_POTATO: $Item;
        static SMALL_DRIPLEAF: $Item;
        static EXPOSED_CUT_COPPER_SLAB: $Item;
        static PURPUR_STAIRS: $Item;
        static LADDER: $Item;
        static RED_MUSHROOM_BLOCK: $Item;
        static WOLF_ARMOR: $Item;
        static CRAFTER: $Item;
        static BASALT: $Item;
        static TALL_GRASS: $Item;
        static BAMBOO_SIGN: $Item;
        static DEAD_BUSH: $Item;
        static FLOW_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static COD: $Item;
        static EXPOSED_CUT_COPPER_STAIRS: $Item;
        static PETRIFIED_OAK_SLAB: $Item;
        static MUD_BRICK_WALL: $Item;
        static LIGHT_BLUE_CARPET: $Item;
        static SCULK_CATALYST: $Item;
        static CALIBRATED_SCULK_SENSOR: $Item;
        static WAXED_OXIDIZED_CUT_COPPER_STAIRS: $Item;
        static PINK_DYE: $Item;
        static WARPED_ROOTS: $Item;
        static CHAIN: $Item;
        static FIRE_CORAL: $Item;
        static DEEPSLATE_IRON_ORE: $Item;
        static WAXED_OXIDIZED_COPPER_BULB: $Item;
        static CHISELED_NETHER_BRICKS: $Item;
        static LIGHT_GRAY_STAINED_GLASS_PANE: $Item;
        static HEART_OF_THE_SEA: $Item;
        static COAL_BLOCK: $Item;
        static WHITE_STAINED_GLASS: $Item;
        static WEATHERED_CUT_COPPER: $Item;
        static CALCITE: $Item;
        static PURPUR_PILLAR: $Item;
        static BLUE_DYE: $Item;
        static MUSIC_DISC_CHIRP: $Item;
        static NETHERITE_HELMET: $Item;
        static SNOW_GOLEM_SPAWN_EGG: $Item;
        static WARD_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static ACACIA_TRAPDOOR: $Item;
        static CHERRY_WOOD: $Item;
        static CHERRY_CHEST_BOAT: $Item;
        static CAMEL_SPAWN_EGG: $Item;
        static CRIMSON_STEM: $Item;
        static WHITE_CARPET: $Item;
        static VINDICATOR_SPAWN_EGG: $Item;
        static COAL: $Item;
        static RAW_GOLD_BLOCK: $Item;
        static CHISELED_STONE_BRICKS: $Item;
        static SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static JIGSAW: $Item;
        static PURPUR_BLOCK: $Item;
        static TRIDENT: $Item;
        static FURNACE: $Item;
        static EVOKER_SPAWN_EGG: $Item;
        static JACK_O_LANTERN: $Item;
        static BIRCH_PRESSURE_PLATE: $Item;
        static BLACK_BED: $Item;
        static VILLAGER_SPAWN_EGG: $Item;
        static DEEPSLATE_LAPIS_ORE: $Item;
        static WAXED_OXIDIZED_CHISELED_COPPER: $Item;
        static LARGE_FERN: $Item;
        static QUARTZ: $Item;
        static SNIFFER_EGG: $Item;
        static CUT_RED_SANDSTONE_SLAB: $Item;
        static PURPLE_TERRACOTTA: $Item;
        static ELYTRA: $Item;
        static MAGMA_CREAM: $Item;
        static DIRT: $Item;
        static WEEPING_VINES: $Item;
        static COBBLED_DEEPSLATE: $Item;
        static GRAY_BED: $Item;
        static MULE_SPAWN_EGG: $Item;
        static BONE_BLOCK: $Item;
        static POLISHED_DIORITE: $Item;
        static GLISTERING_MELON_SLICE: $Item;
        static CUT_SANDSTONE: $Item;
        static WHITE_TERRACOTTA: $Item;
        static COD_BUCKET: $Item;
        static EYE_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static MOSSY_COBBLESTONE_WALL: $Item;
        static SKULL_BANNER_PATTERN: $Item;
        static GRINDSTONE: $Item;
        static POWERED_RAIL: $Item;
        static JUNGLE_SIGN: $Item;
        static DARK_OAK_PLANKS: $Item;
        static GUARDIAN_SPAWN_EGG: $Item;
        static ACACIA_WOOD: $Item;
        static END_STONE_BRICK_SLAB: $Item;
        static SPRUCE_BOAT: $Item;
        static MANGROVE_WOOD: $Item;
        static LIGHT_GRAY_STAINED_GLASS: $Item;
        static TROPICAL_FISH: $Item;
        static SEAGRASS: $Item;
        static WEATHERED_COPPER: $Item;
        static WAXED_WEATHERED_COPPER_GRATE: $Item;
        static OAK_PLANKS: $Item;
        static END_PORTAL_FRAME: $Item;
        static LEATHER: $Item;
        static WAXED_OXIDIZED_COPPER_TRAPDOOR: $Item;
        static STONE_SHOVEL: $Item;
        static DEEPSLATE_COAL_ORE: $Item;
        static FLOWER_POT: $Item;
        static HEAVY_CORE: $Item;
        static IRON_PICKAXE: $Item;
        static LIGHT_GRAY_DYE: $Item;
        static STRAY_SPAWN_EGG: $Item;
        static WIND_CHARGE: $Item;
        static RED_TERRACOTTA: $Item;
        static MOOSHROOM_SPAWN_EGG: $Item;
        static PAPER: $Item;
        static WAXED_EXPOSED_CUT_COPPER: $Item;
        static IRON_SWORD: $Item;
        static SALMON_BUCKET: $Item;
        static WARPED_SIGN: $Item;
        static COPPER_BULB: $Item;
        static CUT_STANDSTONE_SLAB: $Item;
        static SNOW_BLOCK: $Item;
        static CRIMSON_FENCE: $Item;
        static AMETHYST_SHARD: $Item;
        static BURN_POTTERY_SHERD: $Item;
        static POLISHED_DIORITE_SLAB: $Item;
        static ALLAY_SPAWN_EGG: $Item;
        static PILLAGER_SPAWN_EGG: $Item;
        static BRAIN_CORAL_BLOCK: $Item;
        static RAVAGER_SPAWN_EGG: $Item;
        static MOSSY_STONE_BRICK_SLAB: $Item;
        static STONE_BRICKS: $Item;
        static SANDSTONE_STAIRS: $Item;
        static GOLDEN_LEGGINGS: $Item;
        static BROWN_BED: $Item;
        static MANGROVE_LEAVES: $Item;
        static SMOOTH_SANDSTONE_SLAB: $Item;
        static CARROT_ON_A_STICK: $Item;
        static CHERRY_TRAPDOOR: $Item;
        static MAGENTA_TERRACOTTA: $Item;
        static SMOOTH_SANDSTONE_STAIRS: $Item;
        static SPRUCE_PLANKS: $Item;
        static DRAGON_HEAD: $Item;
        static CHERRY_SAPLING: $Item;
        static ANDESITE_WALL: $Item;
        static BLACK_WOOL: $Item;
        static LIGHT_GRAY_CARPET: $Item;
        static PURPLE_CONCRETE: $Item;
        static LIGHTNING_ROD: $Item;
        static ZOMBIFIED_PIGLIN_SPAWN_EGG: $Item;
        static CHERRY_HANGING_SIGN: $Item;
        static CYAN_BED: $Item;
        static LARGE_AMETHYST_BUD: $Item;
        static RED_SHULKER_BOX: $Item;
        static PEARLESCENT_FROGLIGHT: $Item;
        static STONE_PICKAXE: $Item;
        static MAGENTA_CARPET: $Item;
        static REDSTONE_TORCH: $Item;
        static CRIMSON_ROOTS: $Item;
        static STICKY_PISTON: $Item;
        static SMOOTH_QUARTZ: $Item;
        static PUMPKIN: $Item;
        static FLOWERING_AZALEA_LEAVES: $Item;
        static NETHER_WART_BLOCK: $Item;
        static COBBLED_DEEPSLATE_STAIRS: $Item;
        static COBBLESTONE_WALL: $Item;
        static WHEAT: $Item;
        static DEAD_FIRE_CORAL_FAN: $Item;
        static LIME_CANDLE: $Item;
        static ACACIA_SLAB: $Item;
        static SNORT_POTTERY_SHERD: $Item;
        static CRIMSON_NYLIUM: $Item;
        static OXIDIZED_COPPER_TRAPDOOR: $Item;
        static ORANGE_TERRACOTTA: $Item;
        static HONEYCOMB: $Item;
        static BLACK_CONCRETE: $Item;
        static AZALEA: $Item;
        static DROPPER: $Item;
        static MOSSY_STONE_BRICK_STAIRS: $Item;
        static SENTRY_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static WARPED_HANGING_SIGN: $Item;
        static DONKEY_SPAWN_EGG: $Item;
        static OAK_STAIRS: $Item;
        static BLACK_STAINED_GLASS: $Item;
        static IRON_TRAPDOOR: $Item;
        static NETHERITE_PICKAXE: $Item;
        static INFESTED_CHISELED_STONE_BRICKS: $Item;
        static BLUE_BANNER: $Item;
        static POLISHED_DIORITE_STAIRS: $Item;
        static WARPED_PRESSURE_PLATE: $Item;
        static DISC_FRAGMENT_5: $Item;
        static OAK_SLAB: $Item;
        static BAMBOO_HANGING_SIGN: $Item;
        static POINTED_DRIPSTONE: $Item;
        static WAXED_EXPOSED_COPPER: $Item;
        static PURPLE_CANDLE: $Item;
        static CRIMSON_FUNGUS: $Item;
        static GUSTER_POTTERY_SHERD: $Item;
        static DARK_OAK_HANGING_SIGN: $Item;
        static CREEPER_BANNER_PATTERN: $Item;
        static DARK_OAK_SAPLING: $Item;
        static CHAINMAIL_CHESTPLATE: $Item;
        static ACACIA_BUTTON: $Item;
        static MUSIC_DISC_MALL: $Item;
        static EMERALD_ORE: $Item;
        static MUSIC_DISC_STAL: $Item;
        static POLISHED_DEEPSLATE_STAIRS: $Item;
        static HONEY_BOTTLE: $Item;
        static OAK_FENCE_GATE: $Item;
        static POLISHED_BLACKSTONE_STAIRS: $Item;
        static WAXED_CUT_COPPER_SLAB: $Item;
        static BAMBOO_BLOCK: $Item;
        static SUNFLOWER: $Item;
        static CAMPFIRE: $Item;
        static SANDSTONE_SLAB: $Item;
        static MANGROVE_PRESSURE_PLATE: $Item;
        static SPRUCE_BUTTON: $Item;
        static CYAN_WOOL: $Item;
        static JUNGLE_HANGING_SIGN: $Item;
        static GHAST_SPAWN_EGG: $Item;
        static STRING: $Item;
        static PUFFERFISH_SPAWN_EGG: $Item;
        static SQUID_SPAWN_EGG: $Item;
        static TARGET: $Item;
        static PRISMARINE_BRICK_SLAB: $Item;
        static DRIPSTONE_BLOCK: $Item;
        static LOOM: $Item;
        static PANDA_SPAWN_EGG: $Item;
        static SALMON_SPAWN_EGG: $Item;
        static CREEPER_HEAD: $Item;
        static BAMBOO_PLANKS: $Item;
        static NETHER_QUARTZ_ORE: $Item;
        static SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static DEAD_BUBBLE_CORAL_FAN: $Item;
        static NETHERITE_SWORD: $Item;
        static SUSPICIOUS_SAND: $Item;
        static BLACK_BANNER: $Item;
        static COPPER_DOOR: $Item;
        static WAXED_COPPER_DOOR: $Item;
        static COAST_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static RAISER_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static LIGHT_BLUE_BED: $Item;
        static PRISMARINE_WALL: $Item;
        static PINK_STAINED_GLASS_PANE: $Item;
        static WEATHERED_COPPER_BULB: $Item;
        static BLACKSTONE_WALL: $Item;
        static DIORITE_STAIRS: $Item;
        static BRICK_STAIRS: $Item;
        static BREEZE_SPAWN_EGG: $Item;
        static SPYGLASS: $Item;
        static BIRCH_HANGING_SIGN: $Item;
        static DAMAGED_ANVIL: $Item;
        static BAMBOO: $Item;
        static CONDUIT: $Item;
        static LEATHER_HELMET: $Item;
        static LLAMA_SPAWN_EGG: $Item;
        static GOLDEN_SWORD: $Item;
        static JUNGLE_LEAVES: $Item;
        static RED_TULIP: $Item;
        static SPORE_BLOSSOM: $Item;
        static WAXED_WEATHERED_COPPER_DOOR: $Item;
        static DARK_OAK_STAIRS: $Item;
        static YELLOW_SHULKER_BOX: $Item;
        static PINK_GLAZED_TERRACOTTA: $Item;
        static TIDE_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static DANDELION: $Item;
        static FLINT: $Item;
        static AZALEA_LEAVES: $Item;
        static RED_GLAZED_TERRACOTTA: $Item;
        static BAMBOO_MOSAIC: $Item;
        static WARPED_STEM: $Item;
        static YELLOW_CONCRETE_POWDER: $Item;
        static OAK_TRAPDOOR: $Item;
        static MAGENTA_DYE: $Item;
        static BAMBOO_BUTTON: $Item;
        static PURPLE_WOOL: $Item;
        static VAULT: $Item;
        static LIGHT_BLUE_BANNER: $Item;
        static END_STONE: $Item;
        static SPRUCE_FENCE_GATE: $Item;
        static GRAVEL: $Item;
        static BUDDING_AMETHYST: $Item;
        static ARMS_UP_POTTERY_SHERD: $Item;
        static IRON_HORSE_ARMOR: $Item;
        static CYAN_STAINED_GLASS: $Item;
        static LAPIS_ORE: $Item;
        static CHICKEN: $Item;
        static ORANGE_BED: $Item;
        static WAXED_WEATHERED_COPPER_TRAPDOOR: $Item;
        static BIG_DRIPLEAF: $Item;
        static RED_DYE: $Item;
        static NETHER_BRICK_SLAB: $Item;
        static DISPENSER: $Item;
        static CYAN_CONCRETE: $Item;
        static SMITHING_TABLE: $Item;
        static IRON_ORE: $Item;
        static POLISHED_BLACKSTONE_BRICK_SLAB: $Item;
        static NETHERRACK: $Item;
        static RED_STAINED_GLASS_PANE: $Item;
        static COOKED_RABBIT: $Item;
        static TROPICAL_FISH_SPAWN_EGG: $Item;
        static CHORUS_FRUIT: $Item;
        static COOKED_SALMON: $Item;
        static BROWN_SHULKER_BOX: $Item;
        static MELON_SEEDS: $Item;
        static HANGING_ROOTS: $Item;
        static PRISMARINE_SLAB: $Item;
        static SMOOTH_RED_SANDSTONE: $Item;
        static BROWN_STAINED_GLASS: $Item;
        static GLOW_BERRIES: $Item;
        static ARMADILLO_SPAWN_EGG: $Item;
        static CHAINMAIL_HELMET: $Item;
        static SKELETON_SKULL: $Item;
        static END_STONE_BRICK_WALL: $Item;
        static PAINTING: $Item;
        static POLISHED_TUFF_STAIRS: $Item;
        static TORCH: $Item;
        static ENDER_CHEST: $Item;
        static WAXED_OXIDIZED_COPPER_GRATE: $Item;
        static FERN: $Item;
        static BIRCH_SIGN: $Item;
        static POLISHED_GRANITE: $Item;
        static PINK_TULIP: $Item;
        static INFESTED_CRACKED_STONE_BRICKS: $Item;
        static JUNGLE_SAPLING: $Item;
        static DEAD_BUBBLE_CORAL_BLOCK: $Item;
        static LEVER: $Item;
        static TUFF: $Item;
        static STONE_PRESSURE_PLATE: $Item;
        static POLISHED_BLACKSTONE_BRICK_STAIRS: $Item;
        static NETHER_GOLD_ORE: $Item;
        static QUARTZ_BRICKS: $Item;
        static LIME_BED: $Item;
        static MUSIC_DISC_OTHERSIDE: $Item;
        static STRIPPED_OAK_LOG: $Item;
        static MANGROVE_SLAB: $Item;
        static END_ROD: $Item;
        static WARPED_PLANKS: $Item;
        static CHERRY_SLAB: $Item;
        static IRON_INGOT: $Item;
        static ORANGE_CONCRETE_POWDER: $Item;
        static ORANGE_WOOL: $Item;
        static PLAYER_HEAD: $Item;
        static MANGROVE_STAIRS: $Item;
        static LIME_TERRACOTTA: $Item;
        static TUFF_BRICKS: $Item;
        static WHITE_WOOL: $Item;
        static GRAY_CARPET: $Item;
        static GREEN_TERRACOTTA: $Item;
        static OAK_BOAT: $Item;
        static DIAMOND_SWORD: $Item;
        static BROWN_CANDLE: $Item;
        static GREEN_SHULKER_BOX: $Item;
        static DARK_OAK_DOOR: $Item;
        static ACACIA_BOAT: $Item;
        static GRAY_CONCRETE_POWDER: $Item;
        static OXIDIZED_CUT_COPPER: $Item;
        static DIAMOND_HOE: $Item;
        static BLAZE_SPAWN_EGG: $Item;
        static WHITE_SHULKER_BOX: $Item;
        static CRIMSON_BUTTON: $Item;
        static IRON_BLOCK: $Item;
        static ENDER_EYE: $Item;
        static BLUE_CONCRETE: $Item;
        static GRAY_DYE: $Item;
        static REDSTONE_LAMP: $Item;
        static SPRUCE_CHEST_BOAT: $Item;
        static GOLDEN_CARROT: $Item;
        static POLISHED_BLACKSTONE_BRICK_WALL: $Item;
        static BIRCH_BUTTON: $Item;
        static HOPPER: $Item;
        static LIGHT_WEIGHTED_PRESSURE_PLATE: $Item;
        static NETHER_STAR: $Item;
        static SOUL_SOIL: $Item;
        static YELLOW_CANDLE: $Item;
        static SOUL_TORCH: $Item;
        static LIGHT_BLUE_WOOL: $Item;
        static VEX_SPAWN_EGG: $Item;
        static LEAD: $Item;
        static COOKED_MUTTON: $Item;
        static RAW_COPPER: $Item;
        static TUFF_BRICK_STAIRS: $Item;
        static LIGHT_GRAY_SHULKER_BOX: $Item;
        static SILENCE_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static WAXED_CUT_COPPER: $Item;
        static STRIPPED_MANGROVE_WOOD: $Item;
        static GLASS_BOTTLE: $Item;
        static WAXED_WEATHERED_CUT_COPPER: $Item;
        static CHERRY_LOG: $Item;
        static YELLOW_STAINED_GLASS_PANE: $Item;
        static WOODEN_HOE: $Item;
        static CUT_COPPER_SLAB: $Item;
        static SNIFFER_SPAWN_EGG: $Item;
        static MUSIC_DISC_CAT: $Item;
        static TRADER_LLAMA_SPAWN_EGG: $Item;
        static BLACKSTONE: $Item;
        static NETHERITE_UPGRADE_SMITHING_TEMPLATE: $Item;
        static RED_NETHER_BRICK_SLAB: $Item;
        static COOKED_PORKCHOP: $Item;
        static GREEN_DYE: $Item;
        static ZOGLIN_SPAWN_EGG: $Item;
        static MAGENTA_STAINED_GLASS_PANE: $Item;
        static DEAD_HORN_CORAL_FAN: $Item;
        static SPECTRAL_ARROW: $Item;
        static SHULKER_BOX: $Item;
        static DEAD_HORN_CORAL_BLOCK: $Item;
        static STONE_SWORD: $Item;
        static ENDERMITE_SPAWN_EGG: $Item;
        static POLAR_BEAR_SPAWN_EGG: $Item;
        static CARVED_PUMPKIN: $Item;
        static ROTTEN_FLESH: $Item;
        static PINK_WOOL: $Item;
        static MUSIC_DISC_CREATOR: $Item;
        static LIGHT_GRAY_WOOL: $Item;
        static STONE_AXE: $Item;
        static BLADE_POTTERY_SHERD: $Item;
        static JUNGLE_DOOR: $Item;
        static CRACKED_NETHER_BRICKS: $Item;
        static GRANITE_SLAB: $Item;
        static STONE_BUTTON: $Item;
        static LIGHT_GRAY_BED: $Item;
        static ACACIA_SAPLING: $Item;
        static EXPOSED_COPPER_BULB: $Item;
        static FRIEND_POTTERY_SHERD: $Item;
        static BAMBOO_SLAB: $Item;
        static IRON_DOOR: $Item;
        static BROWN_STAINED_GLASS_PANE: $Item;
        static WAXED_EXPOSED_CUT_COPPER_SLAB: $Item;
        static BIRCH_WOOD: $Item;
        static FERMENTED_SPIDER_EYE: $Item;
        static LODESTONE: $Item;
        static SEA_PICKLE: $Item;
        static SPRUCE_LEAVES: $Item;
        static ORANGE_TULIP: $Item;
        static ANDESITE: $Item;
        static RED_NETHER_BRICK_STAIRS: $Item;
        static DUNE_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static MANGROVE_PROPAGULE: $Item;
        static OXIDIZED_CHISELED_COPPER: $Item;
        static BROWN_GLAZED_TERRACOTTA: $Item;
        static BARREL: $Item;
        static INFESTED_STONE: $Item;
        static YELLOW_GLAZED_TERRACOTTA: $Item;
        constructor();
    }
    export class $EnderpearlItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $StandingAndWallBlockItem extends $BlockItem {
        canPlace(arg0: $LevelReader, arg1: $BlockState_, arg2: $BlockPos_): boolean;
        wallBlock: $Block;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Block_, arg2: $Item$Properties, arg3: $Direction_);
    }
    export class $MaceItem extends $Item {
        static canSmashAttack(arg0: $LivingEntity): boolean;
        static createAttributes(): $ItemAttributeModifiers;
        static createToolProperties(): $Tool;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static SMASH_ATTACK_KNOCKBACK_RADIUS: number;
        static SMASH_ATTACK_FALL_THRESHOLD: number;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $BottleItem extends $Item {
        turnBottleIntoItem(arg0: $ItemStack_, arg1: $Player, arg2: $ItemStack_): $ItemStack;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $BlockItem extends $Item implements $InvokerBlockItem, $IExtendedItem {
        placeBlock(arg0: $BlockPlaceContext, arg1: $BlockState_): boolean;
        place(arg0: $BlockPlaceContext): $InteractionResult;
        getBlock(): $Block;
        canPlace(arg0: $BlockPlaceContext, arg1: $BlockState_): boolean;
        modifyReturnValue$ipk000$axiom$canPlace(canPlace: boolean, blockPlaceContext: $BlockPlaceContext): boolean;
        wrapOperation$ipk000$axiom$place$getPlacementState(instance: $BlockItem, blockPlaceContext: $BlockPlaceContext, original: $Operation_<any>): $BlockState;
        registerBlocks(arg0: $Map_<$Block_, $Item_>, arg1: $Item_): void;
        getPlacementState(arg0: $BlockPlaceContext): $BlockState;
        mustSurvive(): boolean;
        updateCustomBlockEntityTag(arg0: $BlockPos_, arg1: $Level_, arg2: $Player, arg3: $ItemStack_, arg4: $BlockState_): boolean;
        static updateCustomBlockEntityTag(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $ItemStack_): boolean;
        updatePlacementContext(arg0: $BlockPlaceContext): $BlockPlaceContext;
        /**
         * @deprecated
         */
        removeFromBlockToItemMap(arg0: $Map_<$Block_, $Item_>, arg1: $Item_): void;
        wrapOperation$ipk000$axiom$place$updatePlacementContext(instance: $BlockItem, blockPlaceContext: $BlockPlaceContext, original: $Operation_<any>): $BlockPlaceContext;
        /**
         * @deprecated
         */
        getPlaceSound(arg0: $BlockState_): $SoundEvent;
        getPlaceSound(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): $SoundEvent;
        static setBlockEntityData(arg0: $ItemStack_, arg1: $BlockEntityType_<never>, arg2: $CompoundTag_): void;
        framedblocks$callGetPlacementState(arg0: $BlockPlaceContext): $BlockState;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
        get block(): $Block;
    }
    export class $PickaxeItem extends $DiggerItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Tier_, arg1: $Item$Properties);
    }
    export class $SpawnEggItem extends $Item {
        getType(arg0: $ItemStack_): $EntityType<never>;
        getColor(arg0: number): number;
        spawnsEntity(arg0: $ItemStack_, arg1: $EntityType_<never>): boolean;
        getDefaultType(): $EntityType<never>;
        spawnOffspringFromSpawnEgg(arg0: $Player, arg1: $Mob, arg2: $EntityType_<$Mob>, arg3: $ServerLevel, arg4: $Vec3_, arg5: $ItemStack_): ($Mob) | undefined;
        static eggs(): $Iterable<$SpawnEggItem>;
        static byId(arg0: $EntityType_<never>): $SpawnEggItem;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static BY_ID: $Map<$EntityType<$Mob>, $SpawnEggItem>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        defaultType: $EntityType<never>;
        static BY_BLOCK: $Map<$Block, $Item>;
        /**
         * @deprecated
         */
        constructor(arg0: $EntityType_<$Mob>, arg1: number, arg2: number, arg3: $Item$Properties);
    }
    export class $GameMasterBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $Item implements $FeatureElement, $ItemLike, $IItemExtension, $IrisItemLightProvider, $ItemAccessor, $FabricItem, $ItemExtensions, $InjectedItemExtension, $ItemFTBL, $ItemVariantCache, $IExtendedItem, $ItemInvoker, $ItemKJS {
        getName(arg0: $ItemStack_): $Component;
        static getId(arg0: $Item_): number;
        use(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        useOn(arg0: $UseOnContext): $InteractionResult;
        getDefaultMaxStackSize(): number;
        overrideStackedOnOther(arg0: $ItemStack_, arg1: $Slot, arg2: $ClickAction_, arg3: $Player): boolean;
        overrideOtherStackedOnMe(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Slot, arg3: $ClickAction_, arg4: $Player, arg5: $SlotAccess): boolean;
        /**
         * @deprecated
         */
        hasCraftingRemainingItem(): boolean;
        onCraftedPostProcess(arg0: $ItemStack_, arg1: $Level_): void;
        /**
         * @deprecated
         */
        getCraftingRemainingItem(): $Item;
        static getPlayerPOVHitResult(arg0: $Level_, arg1: $Player, arg2: $ClipContext$Fluid_): $BlockHitResult;
        setCraftingRemainder(arg0: $Item_): void;
        getTypeItemStackKey(): $ItemStackKey;
        /**
         * @deprecated
         */
        getEnchantmentValue(): number;
        /**
         * @deprecated
         */
        canFitInsideContainerItems(): boolean;
        components(): $DataComponentMap;
        setNameKey(arg0: string): void;
        getTypeData(): $Map<any, any>;
        appendHoverText(arg0: $ItemStack_, arg1: $Item$TooltipContext, arg2: $List_<$Component_>, arg3: $TooltipFlag): void;
        isComplex(): boolean;
        isFoil(arg0: $ItemStack_): boolean;
        mineBlock(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $LivingEntity): boolean;
        static getPlayerPOVHitResult$sable_$md$d64506$0(arg0: $Level_, arg1: $Player, arg2: $ClipContext$Fluid_): $BlockHitResult;
        moonlight$getClientAnimationExtension(): $Object;
        moonlight$setClientAnimationExtension(arg0: $Object): void;
        handler$glf000$moonlight$initializeClient(arg0: $Consumer_<any>, arg1: $CallbackInfo): void;
        getItemBuilder(): $ItemBuilder;
        getDestroySpeed(arg0: $ItemStack_, arg1: $BlockState_): number;
        postHurtEnemy(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $LivingEntity): void;
        hurtEnemy(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $LivingEntity): boolean;
        getBreakingSound(): $SoundEvent;
        getEatingSound(): $SoundEvent;
        getDrinkingSound(): $SoundEvent;
        releaseUsing(arg0: $ItemStack_, arg1: $Level_, arg2: $LivingEntity, arg3: number): void;
        useOnRelease(arg0: $ItemStack_): boolean;
        getUseDuration(arg0: $ItemStack_, arg1: $LivingEntity): number;
        getUseAnimation(arg0: $ItemStack_): $UseAnim;
        finishUsingItem(arg0: $ItemStack_, arg1: $Level_, arg2: $LivingEntity): $ItemStack;
        /**
         * @deprecated
         */
        static byBlock(arg0: $Block_): $Item;
        /**
         * @deprecated
         */
        getDefaultAttributeModifiers(): $ItemAttributeModifiers;
        fabric_setEquipmentSlotProvider(arg0: $EquipmentSlotProvider_): void;
        fabric_getCustomDamageHandler(): $CustomDamageHandler;
        fabric_getEquipmentSlotProvider(): $EquipmentSlotProvider;
        fabric_setCustomDamageHandler(arg0: $CustomDamageHandler_): void;
        /**
         * @deprecated
         */
        modifyDefaultComponentsFrom(arg0: $DataComponentPatch_): void;
        fabric_getCachedItemVariant(): $ItemVariant;
        moonlight$setAdditionalBehavior(arg0: $AdditionalItemPlacement): void;
        moonlight$getAdditionalBehavior(): $AdditionalItemPlacement;
        getOrCreateDescriptionId(): string;
        requiredFeatures(): $FeatureFlagSet;
        asItem(): $Item;
        getDescription(): $Component;
        isRepairable(arg0: $ItemStack_): boolean;
        setCanRepair(arg0: boolean): void;
        inventoryTick(arg0: $ItemStack_, arg1: $Level_, arg2: $Entity, arg3: number, arg4: boolean): void;
        /**
         * @deprecated
         */
        onDestroyed(arg0: $ItemEntity): void;
        isEnchantable(arg0: $ItemStack_): boolean;
        asIngredient(): $Ingredient;
        isValidRepairItem(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        setItemBuilder(b: $ItemBuilder): void;
        onCraftedBy(arg0: $ItemStack_, arg1: $Level_, arg2: $Player): void;
        canAttackBlock(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): boolean;
        onUseTick(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_, arg3: number): void;
        getBarWidth(arg0: $ItemStack_): number;
        getBarColor(arg0: $ItemStack_): number;
        getTooltipImage(arg0: $ItemStack_): ($TooltipComponent) | undefined;
        isBarVisible(arg0: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$Item>;
        asHolder(): $Holder<any>;
        getAttackDamageBonus(arg0: $Entity, arg1: number, arg2: $DamageSource_): number;
        interactLivingEntity(arg0: $ItemStack_, arg1: $Player, arg2: $LivingEntity, arg3: $InteractionHand_): $InteractionResult;
        isCorrectToolForDrops(arg0: $ItemStack_, arg1: $BlockState_): boolean;
        verifyComponentsAfterLoad(arg0: $ItemStack_): void;
        getKey(): $ResourceKey<any>;
        static byId(arg0: number): $Item;
        getId(): string;
        /**
         * @deprecated
         */
        initializeClient(arg0: $Consumer_<$IClientItemExtensions>): void;
        getDescriptionId(arg0: $ItemStack_): string;
        getDescriptionId(): string;
        getDefaultInstance(): $ItemStack;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        createEntity(arg0: $Level_, arg1: $Entity, arg2: $ItemStack_): $Entity;
        getMaxStackSize(arg0: $ItemStack_): number;
        isDamaged(arg0: $ItemStack_): boolean;
        hasCraftingRemainingItem(arg0: $ItemStack_): boolean;
        getCraftingRemainingItem(arg0: $ItemStack_): $ItemStack;
        supportsEnchantment(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): boolean;
        shouldCauseBlockBreakReset(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        canGrindstoneRepair(arg0: $ItemStack_): boolean;
        getEnchantmentValue(arg0: $ItemStack_): number;
        canFitInsideContainerItems(arg0: $ItemStack_): boolean;
        getEnchantmentLevel(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): number;
        getCreatorModId(arg0: $ItemStack_): string;
        canBeHurtBy(arg0: $ItemStack_, arg1: $DamageSource_): boolean;
        isEnderMask(arg0: $ItemStack_, arg1: $Player, arg2: $EnderMan): boolean;
        getBurnTime(arg0: $ItemStack_, arg1: $RecipeType_<never>): number;
        applyEnchantments(arg0: $ItemStack_, arg1: $List_<$EnchantmentInstance>): $ItemStack;
        onAnimalArmorTick(arg0: $ItemStack_, arg1: $Level_, arg2: $Mob): void;
        canEquip(arg0: $ItemStack_, arg1: $EquipmentSlot_, arg2: $LivingEntity): boolean;
        setDamage(arg0: $ItemStack_, arg1: number): void;
        damageItem<T extends $LivingEntity>(arg0: $ItemStack_, arg1: number, arg2: T, arg3: $Consumer_<$Item>): number;
        getSweepHitBox(arg0: $ItemStack_, arg1: $Player, arg2: $Entity): $AABB;
        getDamage(arg0: $ItemStack_): number;
        getEquipmentSlot(arg0: $ItemStack_): $EquipmentSlot;
        /**
         * @deprecated
         */
        onEntitySwing(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
        onEntitySwing(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $InteractionHand_): boolean;
        elytraFlightTick(arg0: $ItemStack_, arg1: $LivingEntity, arg2: number): boolean;
        canContinueUsing(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        canElytraFly(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
        canPerformAction(arg0: $ItemStack_, arg1: $ItemAbility_): boolean;
        onStopUsing(arg0: $ItemStack_, arg1: $LivingEntity, arg2: number): void;
        getFoodProperties(arg0: $ItemStack_, arg1: $LivingEntity): $FoodProperties;
        canDisableShield(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $LivingEntity): boolean;
        getDefaultAttributeModifiers(arg0: $ItemStack_): $ItemAttributeModifiers;
        isNotReplaceableByPickAction(arg0: $ItemStack_, arg1: $Player, arg2: number): boolean;
        shouldCauseReequipAnimation(arg0: $ItemStack_, arg1: $ItemStack_, arg2: boolean): boolean;
        handler$eam000$fabric_item_api_v1$shouldCauseBlockBreakReset(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $CallbackInfoReturnable<any>): void;
        onItemUseFirst(arg0: $ItemStack_, arg1: $UseOnContext): $InteractionResult;
        getXpRepairRatio(arg0: $ItemStack_): number;
        onLeftClickEntity(arg0: $ItemStack_, arg1: $Player, arg2: $Entity): boolean;
        isBookEnchantable(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getArmorTexture(arg0: $ItemStack_, arg1: $Entity, arg2: $EquipmentSlot_, arg3: $ArmorMaterial$Layer, arg4: boolean): $ResourceLocation;
        getAllEnchantments(arg0: $ItemStack_, arg1: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        getHighlightTip(arg0: $ItemStack_, arg1: $Component_): $Component;
        isPiglinCurrency(arg0: $ItemStack_): boolean;
        onDestroyed(arg0: $ItemEntity, arg1: $DamageSource_): void;
        doesSneakBypassUse(arg0: $ItemStack_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): boolean;
        isPrimaryItemFor(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): boolean;
        getEntityLifespan(arg0: $ItemStack_, arg1: $Level_): number;
        hasCustomEntity(arg0: $ItemStack_): boolean;
        getMaxDamage(arg0: $ItemStack_): number;
        onEntityItemUpdate(arg0: $ItemStack_, arg1: $ItemEntity): boolean;
        onDroppedByPlayer(arg0: $ItemStack_, arg1: $Player): boolean;
        isDamageable(arg0: $ItemStack_): boolean;
        handler$eah000$fabric_item_api_v1$hasCraftingRemainingItem(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        handler$eah000$fabric_item_api_v1$getCraftingRemainingItem(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        handler$eah000$fabric_item_api_v1$getEquipmentSlot(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        handler$fan000$connector$redirectIsPiglinCurrency(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        modifyReturnValue$eam000$fabric_item_api_v1$shouldCauseReequipAnimation(arg0: boolean, arg1: $ItemStack_, arg2: $ItemStack_, arg3: boolean): boolean;
        canWalkOnPowderedSnow(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
        makesPiglinsNeutral(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
        getLightColor(arg0: $Player, arg1: $ItemStack_): $Vector3f;
        getLightEmission(arg0: $Player, arg1: $ItemStack_): number;
        getCreatorNamespace(arg0: $ItemStack_): string;
        getRecipeRemainder(arg0: $ItemStack_): $ItemStack;
        canBeEnchantedWith(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>, arg2: $EnchantingContext_): boolean;
        allowComponentsUpdateAnimation(arg0: $Player, arg1: $InteractionHand_, arg2: $ItemStack_, arg3: $ItemStack_): boolean;
        allowContinuingBlockBreaking(arg0: $Player, arg1: $ItemStack_, arg2: $ItemStack_): boolean;
        arch$holder(): $Holder<$Item>;
        getRegistry(): $Registry<$Item>;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getItem(): $Item;
        arch$registryName(): $ResourceLocation;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getTagKeys(): $List<$TagKey<$Item>>;
        getIdLocation(): $ResourceLocation;
        getTags(): $List<$ResourceLocation>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        setCraftingRemainingItemFTBL(arg0: $Item_): void;
        setComponents(arg0: $DataComponentMap_): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get defaultMaxStackSize(): number;
        set craftingRemainder(value: $Item_);
        get typeItemStackKey(): $ItemStackKey;
        set nameKey(value: string);
        get typeData(): $Map<any, any>;
        get complex(): boolean;
        get breakingSound(): $SoundEvent;
        get eatingSound(): $SoundEvent;
        get drinkingSound(): $SoundEvent;
        get orCreateDescriptionId(): string;
        get description(): $Component;
        get key(): $ResourceKey<any>;
        get defaultInstance(): $ItemStack;
        get registry(): $Registry<$Item>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get item(): $Item;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Item>>;
        get idLocation(): $ResourceLocation;
        get tags(): $List<$ResourceLocation>;
        set craftingRemainingItemFTBL(value: $Item_);
    }
    /**
     * Values that may be interpreted as {@link $Item}.
     */
    export type $Item_ = RegistryTypes.Item;
    export class $PotionItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ItemDisplayContext extends $Enum<$ItemDisplayContext> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $ItemDisplayContext[];
        static valueOf(arg0: string): $ItemDisplayContext;
        getId(): number;
        fallback(): $ItemDisplayContext;
        static getExtensionInfo(): $ExtensionInfo;
        isModded(): boolean;
        firstPerson(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HEAD: $ItemDisplayContext;
        static CODEC: $Codec<$ItemDisplayContext>;
        static THIRD_PERSON_LEFT_HAND: $ItemDisplayContext;
        static THIRD_PERSON_RIGHT_HAND: $ItemDisplayContext;
        static FIRST_PERSON_RIGHT_HAND: $ItemDisplayContext;
        static GROUND: $ItemDisplayContext;
        static FIRST_PERSON_LEFT_HAND: $ItemDisplayContext;
        static FIXED: $ItemDisplayContext;
        static BY_ID: $IntFunction<$ItemDisplayContext>;
        static GUI: $ItemDisplayContext;
        static NONE: $ItemDisplayContext;
        static SOPHISTICATEDBACKPACKS_WORN: $ItemDisplayContext;
        get id(): number;
        static get extensionInfo(): $ExtensionInfo;
        get modded(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemDisplayContext}.
     */
    export type $ItemDisplayContext_ = "none" | "thirdperson_lefthand" | "thirdperson_righthand" | "firstperson_lefthand" | "firstperson_righthand" | "head" | "gui" | "ground" | "fixed" | "sophisticatedbackpacks:worn";
    export class $SnowballItem extends $Item implements $ProjectileItem {
        asProjectile(arg0: $Level_, arg1: $Position, arg2: $ItemStack_, arg3: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(arg0: $Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $DebugStickItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ShieldItem extends $Item implements $Equipable {
        getEquipmentSlot(): $EquipmentSlot;
        swapWithEquipmentSlot(arg0: $Item_, arg1: $Level_, arg2: $Player, arg3: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        getEquipSound(): $Holder<$SoundEvent>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static MINIMUM_DURABILITY_DAMAGE: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static EFFECTIVE_BLOCK_DELAY: number;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get equipmentSlot(): $EquipmentSlot;
        get equipSound(): $Holder<$SoundEvent>;
    }
    export class $BoatItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: boolean, arg1: $Boat$Type_, arg2: $Item$Properties);
    }
    export class $JukeboxSongPlayer$OnSongChanged {
    }
    export interface $JukeboxSongPlayer$OnSongChanged {
        notifyChange(): void;
    }
    /**
     * Values that may be interpreted as {@link $JukeboxSongPlayer$OnSongChanged}.
     */
    export type $JukeboxSongPlayer$OnSongChanged_ = (() => void);
    export class $BundleItem extends $Item {
        static getFullnessDisplay(arg0: $ItemStack_): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
}
