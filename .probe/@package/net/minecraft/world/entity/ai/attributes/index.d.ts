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
        getValue(arg0: $Holder_<$Attribute>): number;
        static builder(): $AttributeSupplier$Builder;
        createInstance(arg0: $Consumer_<$AttributeInstance>, arg1: $Holder_<$Attribute>): $AttributeInstance;
        hasAttribute(arg0: $Holder_<$Attribute>): boolean;
        getBaseValue(arg0: $Holder_<$Attribute>): number;
        hasModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): boolean;
        getModifierValue(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): number;
        instances: $Map<$Holder<$Attribute>, $AttributeInstance>;
        constructor(arg0: $Map_<$Holder_<$Attribute>, $AttributeInstance>);
    }
    export class $DefaultAttributes implements $DefaultAttributeRegistryAccessor {
        static validate(): void;
        static hasSupplier(arg0: $EntityType_<never>): boolean;
        static getSupplier(arg0: $EntityType_<$LivingEntity>): $AttributeSupplier;
        static getRegistry$fabric_object_builder_api_v1_$md$9aa1a5$0(): $Map<any, any>;
        constructor();
        static get registry$fabric_object_builder_api_v1_$md$9aa1a5$0(): $Map<any, any>;
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
        getModifiers(arg0: $AttributeModifier$Operation_): $Map<$ResourceLocation, $AttributeModifier>;
        load(arg0: $CompoundTag_): void;
        getValue(): number;
        save(): $CompoundTag;
        getAttribute(): $Holder<$Attribute>;
        replaceFrom(arg0: $AttributeInstance): void;
        addTransientModifier(arg0: $AttributeModifier_): void;
        addOrUpdateTransientModifier(arg0: $AttributeModifier_): void;
        getBaseValue(): number;
        setBaseValue(arg0: number): void;
        getModifier(arg0: $ResourceLocation_): $AttributeModifier;
        removeModifier(arg0: $AttributeModifier_): void;
        removeModifier(arg0: $ResourceLocation_): boolean;
        hasModifier(arg0: $ResourceLocation_): boolean;
        addOrReplacePermanentModifier(arg0: $AttributeModifier_): void;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        removeModifiers(): void;
        setDirty(): void;
        static ID_FIELD: string;
        constructor(arg0: $Holder_<$Attribute>, arg1: $Consumer_<$AttributeInstance>);
        get value(): number;
        get attribute(): $Holder<$Attribute>;
    }
    export class $Attribute implements $IAttributeExtension {
        getDefaultValue(): number;
        setSyncable(arg0: boolean): $Attribute;
        setSentiment(arg0: $Attribute$Sentiment_): $Attribute;
        getMergedStyle(arg0: boolean): $TextColor;
        isClientSyncable(): boolean;
        sanitizeValue(arg0: number): number;
        getStyle(arg0: boolean): $ChatFormatting;
        getDescriptionId(): string;
        getBaseId(): $ResourceLocation;
        toBaseComponent(arg0: number, arg1: number, arg2: boolean, arg3: $TooltipFlag): $MutableComponent;
        getDebugInfo(arg0: $AttributeModifier_, arg1: $TooltipFlag): $Component;
        toValueComponent(arg0: $AttributeModifier$Operation_, arg1: number, arg2: $TooltipFlag): $MutableComponent;
        toComponent(arg0: $AttributeModifier_, arg1: $TooltipFlag): $MutableComponent;
        static MERGED_GRAY: $TextColor;
        static MERGED_RED: $TextColor;
        static CODEC: $Codec<$Holder<$Attribute>>;
        static MERGED_BLUE: $TextColor;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Attribute>>;
        constructor(arg0: string, arg1: number);
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
        add(arg0: $Holder_<$Attribute>): $AttributeSupplier$Builder;
        add(arg0: $Holder_<$Attribute>, arg1: number): $AttributeSupplier$Builder;
        combine(arg0: $AttributeSupplier$Builder): void;
        build(): $AttributeSupplier;
        hasAttribute(arg0: $Holder_<$Attribute>): boolean;
        constructor();
        constructor(arg0: $AttributeSupplier);
    }
    export class $Attributes {
        static bootstrap(arg0: $Registry<$Attribute_>): $Holder<$Attribute>;
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
        load(arg0: $ListTag_): void;
        getValue(arg0: $Holder_<$Attribute>): number;
        getInstance(arg0: $Holder_<$Attribute>): $AttributeInstance;
        save(): $ListTag;
        hasAttribute(arg0: $Holder_<$Attribute>): boolean;
        assignBaseValues(arg0: $AttributeMap): void;
        addTransientAttributeModifiers(arg0: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>): void;
        getAttributesToUpdate(): $Set<$AttributeInstance>;
        removeAttributeModifiers(arg0: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>): void;
        getBaseValue(arg0: $Holder_<$Attribute>): number;
        hasModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): boolean;
        assignAllValues(arg0: $AttributeMap): void;
        getModifierValue(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): number;
        getAttributesToSync(): $Set<$AttributeInstance>;
        getSyncableAttributes(): $Collection<$AttributeInstance>;
        constructor(arg0: $AttributeSupplier);
        get attributesToUpdate(): $Set<$AttributeInstance>;
        get attributesToSync(): $Set<$AttributeInstance>;
        get syncableAttributes(): $Collection<$AttributeInstance>;
    }
    export class $AttributeModifier extends $Record {
        static load(arg0: $CompoundTag_): $AttributeModifier;
        id(): $ResourceLocation;
        save(): $CompoundTag;
        is(arg0: $ResourceLocation_): boolean;
        amount(): number;
        operation(): $AttributeModifier$Operation;
        static CODEC: $Codec<$AttributeModifier>;
        static MAP_CODEC: $MapCodec<$AttributeModifier>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $AttributeModifier>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $AttributeModifier$Operation_);
    }
    export class $Attribute$Sentiment extends $Enum<$Attribute$Sentiment> {
        static values(): $Attribute$Sentiment[];
        static valueOf(arg0: string): $Attribute$Sentiment;
        getStyle(arg0: boolean): $ChatFormatting;
        static POSITIVE: $Attribute$Sentiment;
        static NEGATIVE: $Attribute$Sentiment;
        static NEUTRAL: $Attribute$Sentiment;
    }
    /**
     * Values that may be interpreted as {@link $Attribute$Sentiment}.
     */
    export type $Attribute$Sentiment_ = "positive" | "neutral" | "negative";
    export class $RangedAttribute extends $Attribute {
        getMinValue(): number;
        getMaxValue(): number;
        static MERGED_GRAY: $TextColor;
        static MERGED_RED: $TextColor;
        static CODEC: $Codec<$Holder<$Attribute>>;
        static MERGED_BLUE: $TextColor;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Attribute>>;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number);
        get minValue(): number;
        get maxValue(): number;
    }
    export interface $Attribute extends RegistryMarked<RegistryTypes.AttributeTag, RegistryTypes.Attribute> {}
}
