import { $TooltipFlag } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $ListTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent, $TextColor, $Component } from "@package/net/minecraft/network/chat";
import { $EntityType_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Multimap } from "@package/com/google/common/collect";
import { $DefaultAttributeRegistryAccessor } from "@package/net/fabricmc/fabric/mixin/object/builder";
import { $Map_, $Map, $Set, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IntFunction, $Consumer_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $Holder_, $Registry, $Holder } from "@package/net/minecraft/core";
import { $IAttributeExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/entity/ai/attributes" {
    export class $AttributeSupplier {
        getValue(attribute: $Holder_<$Attribute>): number;
        static builder(): $AttributeSupplier$Builder;
        createInstance(onDirty: $Consumer_<$AttributeInstance>, attribute: $Holder_<$Attribute>): $AttributeInstance;
        hasAttribute(attribute: $Holder_<$Attribute>): boolean;
        getModifierValue(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): number;
        hasModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): boolean;
        getBaseValue(attribute: $Holder_<$Attribute>): number;
        instances: $Map<$Holder<$Attribute>, $AttributeInstance>;
        constructor(instances: $Map_<$Holder_<$Attribute>, $AttributeInstance>);
    }
    export class $DefaultAttributes implements $DefaultAttributeRegistryAccessor {
        static validate(): void;
        static getSupplier(livingEntity: $EntityType_<$LivingEntity>): $AttributeSupplier;
        static hasSupplier(entityType: $EntityType_<never>): boolean;
        static getRegistry$fabric_object_builder_api_v1_$md$dd6cb9$0(): $Map<any, any>;
        constructor();
        static get registry$fabric_object_builder_api_v1_$md$dd6cb9$0(): $Map<any, any>;
    }
    export class $AttributeModifier$Operation extends $Enum<$AttributeModifier$Operation> implements $StringRepresentable {
        static values(): $AttributeModifier$Operation[];
        static valueOf(arg0: string): $AttributeModifier$Operation;
        id(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$AttributeModifier$Operation>;
        static ADD_MULTIPLIED_BASE: $AttributeModifier$Operation;
        static ADD_MULTIPLIED_TOTAL: $AttributeModifier$Operation;
        static BY_ID: $IntFunction<$AttributeModifier$Operation>;
        static ADD_VALUE: $AttributeModifier$Operation;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $AttributeModifier$Operation>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AttributeModifier$Operation}.
     */
    export type $AttributeModifier$Operation_ = "add_value" | "add_multiplied_base" | "add_multiplied_total";
    export class $AttributeInstance {
        getModifiers(): $Set<$AttributeModifier>;
        getModifiers(operation: $AttributeModifier$Operation_): $Map<$ResourceLocation, $AttributeModifier>;
        load(nbt: $CompoundTag_): void;
        getValue(): number;
        save(): $CompoundTag;
        getAttribute(): $Holder<$Attribute>;
        addPermanentModifier(modifier: $AttributeModifier_): void;
        addOrReplacePermanentModifier(modifier: $AttributeModifier_): void;
        setBaseValue(baseValue: number): void;
        addTransientModifier(modifier: $AttributeModifier_): void;
        replaceFrom(instance: $AttributeInstance): void;
        hasModifier(id: $ResourceLocation_): boolean;
        getModifier(id: $ResourceLocation_): $AttributeModifier;
        removeModifier(modifier: $AttributeModifier_): void;
        removeModifier(id: $ResourceLocation_): boolean;
        setDirty(): void;
        addOrUpdateTransientModifier(modifier: $AttributeModifier_): void;
        getBaseValue(): number;
        removeModifiers(): void;
        static ID_FIELD: string;
        constructor(attribute: $Holder_<$Attribute>, onDirty: $Consumer_<$AttributeInstance>);
        get value(): number;
        get attribute(): $Holder<$Attribute>;
    }
    /**
     * Defines an entity attribute. These are properties of entities that can be dynamically modified.
     * @see net.minecraft.core.Registry#ATTRIBUTE
     */
    export class $Attribute implements $IAttributeExtension {
        /**
         * Gets the default value for the attribute.
         * @return The default value for the attribute.
         */
        getDefaultValue(): number;
        /**
         * Sets whether the attribute value should be synced to the client.
         * @return The same attribute instance being modified.
         */
        setSyncable(watch: boolean): $Attribute;
        setSentiment(sentiment: $Attribute$Sentiment_): $Attribute;
        /**
         * Returns the color used by merged attribute modifiers. Only used when `NeoForgeMod#enableMergedAttributeTooltips()` is active.
         * 
         * Similarly to `Attribute#getStyle(boolean)`, this method should return a color based on the attribute's `Sentiment`.
         * The returned color should be distinguishable from the color used by `Attribute#getStyle(boolean)`.
         */
        getMergedStyle(isPositive: boolean): $TextColor;
        /**
         * Sanitizes the value of the attribute to fit within the expected parameter range of the attribute.
         * @return The sanitized attribute value.
         */
        sanitizeValue(value: number): number;
        /**
         * Checks if the attribute value should be kept in sync on the client.
         * @return Whether the attribute value should be kept in sync on the client.
         */
        isClientSyncable(): boolean;
        getStyle(isPositive: boolean): $ChatFormatting;
        /**
         * Gets the description Id of the attribute. This is most commonly used as a localization key.
         * @return The description Id of the attribute.
         */
        getDescriptionId(): string;
        /**
         * Converts a "base" attribute modifier (as dictated by `#getBaseId()`) into a text component.
         * 
         * Similar to `#toComponent`, this method is responsible for adding debug information when the tooltip flag is advanced.
         */
        toBaseComponent(value: number, entityBase: number, merged: boolean, flag: $TooltipFlag): $MutableComponent;
        toValueComponent(arg0: $AttributeModifier$Operation_, arg1: number, arg2: $TooltipFlag): $MutableComponent;
        /**
         * Converts an attribute modifier into its tooltip representation.
         * 
         * This method does not handle formatting of "base" modifiers, such as Attack Damage or Attack Speed.
         * 
         * The returned component may append additional debug information based on the tooltip flag.
         */
        toComponent(modif: $AttributeModifier_, flag: $TooltipFlag): $MutableComponent;
        /**
         * Computes the additional debug information for a given attribute modifier, if the flag is advanced.
         */
        getDebugInfo(modif: $AttributeModifier_, flag: $TooltipFlag): $Component;
        /**
         * Gets the specific ID that represents a "base" (green) modifier for this attribute.
         */
        getBaseId(): $ResourceLocation;
        static MERGED_GRAY: $TextColor;
        static MERGED_RED: $TextColor;
        static CODEC: $Codec<$Holder<$Attribute>>;
        static MERGED_BLUE: $TextColor;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Attribute>>;
        constructor(descriptionId: string, defaultValue: number);
        get defaultValue(): number;
        set syncable(value: boolean);
        set sentiment(value: $Attribute$Sentiment_);
        get clientSyncable(): boolean;
        get descriptionId(): string;
        get baseId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $Attribute}.
     */
    export type $Attribute_ = RegistryTypes.Attribute;
    export class $AttributeSupplier$Builder {
        add(attribute: $Holder_<$Attribute>): $AttributeSupplier$Builder;
        add(attribute: $Holder_<$Attribute>, baseValue: number): $AttributeSupplier$Builder;
        combine(arg0: $AttributeSupplier$Builder): void;
        build(): $AttributeSupplier;
        hasAttribute(arg0: $Holder_<$Attribute>): boolean;
        constructor();
        constructor(arg0: $AttributeSupplier);
    }
    /**
     * Contains all entity attributes defined and registered by the vanilla game.
     */
    export class $Attributes {
        static bootstrap(registry: $Registry<$Attribute_>): $Holder<$Attribute>;
        static SUBMERGED_MINING_SPEED: $Holder<$Attribute>;
        static FALL_DAMAGE_MULTIPLIER: $Holder<$Attribute>;
        static MOVEMENT_EFFICIENCY: $Holder<$Attribute>;
        static OXYGEN_BONUS: $Holder<$Attribute>;
        static LUCK: $Holder<$Attribute>;
        static WATER_MOVEMENT_EFFICIENCY: $Holder<$Attribute>;
        static BLOCK_INTERACTION_RANGE: $Holder<$Attribute>;
        static ATTACK_DAMAGE: $Holder<$Attribute>;
        static MAX_ABSORPTION: $Holder<$Attribute>;
        static SAFE_FALL_DISTANCE: $Holder<$Attribute>;
        static JUMP_STRENGTH: $Holder<$Attribute>;
        static SCALE: $Holder<$Attribute>;
        static ENTITY_INTERACTION_RANGE: $Holder<$Attribute>;
        static MAX_HEALTH: $Holder<$Attribute>;
        static ATTACK_SPEED: $Holder<$Attribute>;
        static ARMOR: $Holder<$Attribute>;
        static EXPLOSION_KNOCKBACK_RESISTANCE: $Holder<$Attribute>;
        static GRAVITY: $Holder<$Attribute>;
        static MOVEMENT_SPEED: $Holder<$Attribute>;
        static SNEAKING_SPEED: $Holder<$Attribute>;
        static STEP_HEIGHT: $Holder<$Attribute>;
        static ARMOR_TOUGHNESS: $Holder<$Attribute>;
        static FOLLOW_RANGE: $Holder<$Attribute>;
        static SPAWN_REINFORCEMENTS_CHANCE: $Holder<$Attribute>;
        static MINING_EFFICIENCY: $Holder<$Attribute>;
        static BURNING_TIME: $Holder<$Attribute>;
        static FLYING_SPEED: $Holder<$Attribute>;
        static SWEEPING_DAMAGE_RATIO: $Holder<$Attribute>;
        static KNOCKBACK_RESISTANCE: $Holder<$Attribute>;
        static BLOCK_BREAK_SPEED: $Holder<$Attribute>;
        static ATTACK_KNOCKBACK: $Holder<$Attribute>;
        constructor();
    }
    export class $AttributeMap {
        addTransientAttributeModifiers(modifiers: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>): void;
        load(nbt: $ListTag_): void;
        getValue(attribute: $Holder_<$Attribute>): number;
        getInstance(attribute: $Holder_<$Attribute>): $AttributeInstance;
        save(): $ListTag;
        hasAttribute(attribute: $Holder_<$Attribute>): boolean;
        getModifierValue(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): number;
        assignBaseValues(map: $AttributeMap): void;
        getAttributesToSync(): $Set<$AttributeInstance>;
        getSyncableAttributes(): $Collection<$AttributeInstance>;
        hasModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): boolean;
        getBaseValue(attribute: $Holder_<$Attribute>): number;
        getAttributesToUpdate(): $Set<$AttributeInstance>;
        removeAttributeModifiers(modifiers: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>): void;
        assignAllValues(map: $AttributeMap): void;
        constructor(supplier: $AttributeSupplier);
        get attributesToSync(): $Set<$AttributeInstance>;
        get syncableAttributes(): $Collection<$AttributeInstance>;
        get attributesToUpdate(): $Set<$AttributeInstance>;
    }
    export class $AttributeModifier extends $Record {
        operation(): $AttributeModifier$Operation;
        static load(nbt: $CompoundTag_): $AttributeModifier;
        id(): $ResourceLocation;
        save(): $CompoundTag;
        is(id: $ResourceLocation_): boolean;
        amount(): number;
        static CODEC: $Codec<$AttributeModifier>;
        static MAP_CODEC: $MapCodec<$AttributeModifier>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $AttributeModifier>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $AttributeModifier$Operation_);
    }
    export class $Attribute$Sentiment extends $Enum<$Attribute$Sentiment> {
        static values(): $Attribute$Sentiment[];
        static valueOf(arg0: string): $Attribute$Sentiment;
        getStyle(isPositive: boolean): $ChatFormatting;
        static POSITIVE: $Attribute$Sentiment;
        static NEGATIVE: $Attribute$Sentiment;
        static NEUTRAL: $Attribute$Sentiment;
    }
    /**
     * Values that may be interpreted as {@link $Attribute$Sentiment}.
     */
    export type $Attribute$Sentiment_ = "positive" | "neutral" | "negative";
    /**
     * Defines an entity attribute that is limited to a range of values.
     */
    export class $RangedAttribute extends $Attribute {
        /**
         * Gets the highest possible value for the attribute.
         * @return The highest possible value for the attribute; `#maxValue`.
         */
        getMinValue(): number;
        /**
         * Gets the highest possible value for the attribute.
         * @return The highest possible value for the attribute; `#maxValue`.
         */
        getMaxValue(): number;
        static MERGED_GRAY: $TextColor;
        static MERGED_RED: $TextColor;
        static CODEC: $Codec<$Holder<$Attribute>>;
        static MERGED_BLUE: $TextColor;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Attribute>>;
        constructor(descriptionId: string, defaultValue: number, arg2: number, min: number);
        get minValue(): number;
        get maxValue(): number;
    }
    export interface $Attribute extends RegistryMarked<RegistryTypes.AttributeTag, RegistryTypes.Attribute> {}
}
