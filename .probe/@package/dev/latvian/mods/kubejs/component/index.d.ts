import { $DataResult, $DynamicOps } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $AttributeModifier_, $AttributeModifier, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map_, $UUID_, $List_, $Map, $Set } from "@package/java/util";
import { $FoodBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $Unit_ } from "@package/net/minecraft/util";
import { $Consumer, $Consumer_ } from "@package/java/util/function";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Dynamic2CommandExceptionType, $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { DataComponentTypes } from "@special/types";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $DataComponentType, $DataComponentPredicate, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_, $DataComponentPatch$Builder, $DataComponentPatch, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $StringBuilder, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";
import { $DyeColor_, $ItemStack_, $Instrument, $Rarity_ } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ItemAttributeModifiers, $Fireworks_, $Tool_, $FireworkExplosion_, $ItemAttributeModifiers$Entry_ } from "@package/net/minecraft/world/item/component";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";

declare module "@package/dev/latvian/mods/kubejs/component" {
    export class $DataComponentWrapper {
        static filter(from: $Object, target: $TypeInfo_): boolean;
        static getTypeInfo(type: $DataComponentType_<never>): $TypeInfo;
        static readMap(registryOps: $DynamicOps<$Tag_>, reader: $StringReader): $DataComponentMap;
        static mapOf(from: $Object): $DataComponentMap;
        /**
         * @deprecated
         */
        static mapOf(ops: $DynamicOps<$Tag_>, o: $Object): $DataComponentMap;
        static visualPatch(patch: $DataComponentPatch_): $DataComponentPatch;
        static tryWrapComponent<T>(type: $DataComponentType_<T>, value: $Object): $DataResult<(T) | undefined>;
        static patchToString(builder: $StringBuilder, ops: $DynamicOps<$Tag_>, patch: $DataComponentPatch_): $StringBuilder;
        static wrapType(object: $Object): $DataComponentType<never>;
        static readComponentType(stringReader: $StringReader): $DataComponentType<never>;
        static readPredicate(registryOps: $DynamicOps<$Tag_>, reader: $StringReader): $DataComponentPredicate;
        /**
         * @deprecated
         */
        static mapOrEmptyOf(ops: $DynamicOps<$Tag_>, o: $Object): $DataComponentMap;
        static mapOrEmptyOf(from: $Object): $DataComponentMap;
        /**
         * @deprecated
         */
        static patchOrEmptyOf(ops: $DynamicOps<$Tag_>, o: $Object): $DataComponentPatch;
        static patchOrEmptyOf(from: $Object): $DataComponentPatch;
        static mapToString(builder: $StringBuilder, ops: $DynamicOps<$Tag_>, map: $DataComponentMap_): $StringBuilder;
        static tryPatchOf(o: $Object): $DataResult<$DataComponentPatch>;
        static tryMapOf(o: $Object): $DataResult<$DataComponentMap>;
        static patchOf(from: $Object): $DataComponentPatch;
        /**
         * @deprecated
         */
        static patchOf(ops: $DynamicOps<$Tag_>, o: $Object): $DataComponentPatch;
        static readPatch(registryOps: $DynamicOps<$Tag_>, reader: $StringReader): $DataComponentPatch;
        static VISUAL_DIFFERENCE: $Lazy<$Set<$DataComponentType<never>>>;
        static ERROR_UNKNOWN_COMPONENT: $DynamicCommandExceptionType;
        static ERROR_MALFORMED_COMPONENT: $Dynamic2CommandExceptionType;
        static TYPE_INFOS: $Lazy<$Map<$DataComponentType<never>, $TypeInfo>>;
        static ERROR_EXPECTED_COMPONENT: $SimpleCommandExceptionType;
        static COMPONENT_TYPE: $TypeInfo;
    }
    export interface $DataComponentWrapper {
    }
    export class $ComponentFunctions {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $ComponentFunctions {
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
        setUnit(component: $DataComponentType_<$Unit_>): this;
        setLockCode(lock: string): void;
        setCustomData(tag: $CompoundTag_): void;
        remove(type: $DataComponentType_<never>): this;
        patch(components: $DataComponentPatch_): this;
        setCustomModelData(data: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        resetComponents(): this;
        getComponentMap(): $DataComponentMap;
        getComponentString(): string;
        setPotionContents(contents: $PotionContents_): void;
        setTooltipHidden(): void;
        setGlintOverride(override: boolean): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setAdditionalTooltipHidden(): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        set dyedColor(value: $KubeColor_);
        set rarity(value: $Rarity_);
        set potionId(value: $Holder_<$Potion>);
        set entityData(value: $CompoundTag_);
        set baseColor(value: $DyeColor_);
        set unit(value: $DataComponentType_<$Unit_>);
        set lockCode(value: string);
        set customModelData(value: number);
        get componentMap(): $DataComponentMap;
        get componentString(): string;
        set potionContents(value: $PotionContents_);
        set glintOverride(value: boolean);
        set blockStateProperties(value: $Map_<string, string>);
        set dyedColorWithTooltip(value: $KubeColor_);
    }
    /**
     * Values that may be interpreted as {@link $ComponentFunctions}.
     */
    export type $ComponentFunctions_ = (() => void);
    export class $ItemComponentFunctions {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $ItemComponentFunctions extends $ComponentFunctions, $AttributeModifierFunctions {
        setFireworkExplosion(explosion: $FireworkExplosion_): void;
        setNoteBlockSound(id: $ResourceLocation_): void;
        setBundleContents(items: $List_<$ItemStack_>): void;
        setMaxStackSize(size: number): void;
        setMapItemColor(color: $KubeColor_): void;
        setBlockEntityData(tag: $CompoundTag_): void;
        getAttributeModifiers(): $ItemAttributeModifiers;
        setFireResistant(): void;
        setBucketEntityData(tag: $CompoundTag_): void;
        setChargedProjectiles(items: $List_<$ItemStack_>): void;
        setFireworks(fireworks: $Fireworks_): void;
        setRepairCost(repairCost: number): void;
        setFood(foodProperties: $FoodProperties_): void;
        setFood(nutrition: number, saturation: number): void;
        modifyFood(foodBuilder: $Consumer_<$FoodBuilder>): void;
        setMaxDamage(maxDamage: number): void;
        setDamage(damage: number): void;
        setUnbreakable(): void;
        setItemName(component: $Component_): void;
        setTool(tool: $Tool_): void;
        setInstrument(instrument: $Holder_<$Instrument>): void;
        setUnbreakableWithTooltip(): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        set fireworkExplosion(value: $FireworkExplosion_);
        set noteBlockSound(value: $ResourceLocation_);
        set bundleContents(value: $List_<$ItemStack_>);
        set maxStackSize(value: number);
        set mapItemColor(value: $KubeColor_);
        set blockEntityData(value: $CompoundTag_);
        get attributeModifiers(): $ItemAttributeModifiers;
        set bucketEntityData(value: $CompoundTag_);
        set chargedProjectiles(value: $List_<$ItemStack_>);
        set fireworks(value: $Fireworks_);
        set repairCost(value: number);
        set maxDamage(value: number);
        set damage(value: number);
        set itemName(value: $Component_);
        set tool(value: $Tool_);
        set instrument(value: $Holder_<$Instrument>);
    }
    /**
     * Values that may be interpreted as {@link $ItemComponentFunctions}.
     */
    export type $ItemComponentFunctions_ = (() => void);
    export class $DataComponentWrapper$MapBuilder {
    }
    export interface $DataComponentWrapper$MapBuilder extends $Consumer<$DataComponentMap$Builder> {
        accept(builder: $DataComponentMap$Builder): void;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentWrapper$MapBuilder}.
     */
    export type $DataComponentWrapper$MapBuilder_ = ((builder: $DataComponentMap$Builder) => void);
    export class $MutableDataComponentHolderFunctions {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $MutableDataComponentHolderFunctions extends $ComponentFunctions {
        getComponentHolder(): $MutableDataComponentHolder;
        patch(components: $DataComponentPatch_): this;
        getComponentMap(): $DataComponentMap;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get componentHolder(): $MutableDataComponentHolder;
        get componentMap(): $DataComponentMap;
    }
    export class $DataComponentWrapper$PatchBuilder {
    }
    export interface $DataComponentWrapper$PatchBuilder extends $Consumer<$DataComponentPatch$Builder> {
        accept(builder: $DataComponentPatch$Builder): void;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentWrapper$PatchBuilder}.
     */
    export type $DataComponentWrapper$PatchBuilder_ = ((builder: $DataComponentPatch$Builder) => void);
    export class $AttributeModifierFunctions {
    }
    export interface $AttributeModifierFunctions {
        setAttributeModifiersWithTooltip(modifiers: $List_<$ItemAttributeModifiers$Entry_>): void;
        addAttributeModifier(attribute: $Holder_<$Attribute>, mod: $AttributeModifier_, slot: $EquipmentSlotGroup_): void;
        getBaseAttackDamage(): number;
        getBaseAttackSpeed(): number;
        hasAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): boolean;
        getAttackDamage(): number;
        getAttributeModifiers(): $ItemAttributeModifiers;
        getAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): $AttributeModifier;
        /**
         * Overrides the *base* attack speed of this item to be the given value, keeping other modifiers intact.
         * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
         */
        setBaseAttackSpeed(speed: number): void;
        /**
         * Sets the attack damage of this item to the given value, **removing** all other modifiers to attack damage.
         * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
         * (In practice, this simply means that most weapons have this value set to 1 less than what you might think.)
         */
        setAttackDamage(dmg: number): void;
        setAttributeModifiers(modifiers: $List_<$ItemAttributeModifiers$Entry_>): void;
        /**
         * Overrides the *base* attack damage of this item to be the given value, keeping other modifiers intact.
         * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
         */
        setBaseAttackDamage(dmg: number): void;
        /**
         * Sets the attack speed of this item to the given value, **removing** all other modifiers to attack speed.
         * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
         * (Example: Swords have an attack speed of -2.4, leading to a total value of 1.6 without any other changes.)
         */
        setAttackSpeed(speed: number): void;
        getAttackSpeed(): number;
        set attributeModifiersWithTooltip(value: $List_<$ItemAttributeModifiers$Entry_>);
    }
}
