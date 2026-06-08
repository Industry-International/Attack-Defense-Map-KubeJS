import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $Pattern } from "@package/java/util/regex";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";
import { $Function_, $Function } from "@package/java/util/function";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EnumEntries } from "@package/kotlin/enums";
import { $DeserializeFromString } from "@package/com/atsuishio/superbwarfare/data";
import { $Enum } from "@package/java/lang";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
import { $DamageSource_, $DamageSource, $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/atsuishio/superbwarfare/entity/vehicle/damage" {
    export class $DamageModify implements $DeserializeFromString {
        setType(arg0: $DamageModify$ModifyType_): void;
        getValue(): number;
        compute(arg0: number): number;
        match(arg0: $DamageSource_): boolean;
        setValue(arg0: number): void;
        getType(): $DamageModify$ModifyType;
        getSource(): string;
        setSource(arg0: string): void;
        getSourceType(): $DamageModify$SourceType;
        static write$Self$superbwarfare(arg0: $DamageModify, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static getSource$annotations(): void;
        static getEntityId$annotations(): void;
        static getSourceType$annotations(): void;
        static getSourceKey$annotations(): void;
        static getEntityTag$annotations(): void;
        static getCondition$annotations(): void;
        static access$generateSourceType(arg0: $DamageModify): void;
        static getValue$annotations(): void;
        getCondition(): $Function<$DamageSource, boolean>;
        setEntityId(arg0: string): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getEntityId(): string;
        static getType$annotations(): void;
        static getSourceTagKey$annotations(): void;
        static access$getMODIFY_PATTERN$cp(): $Pattern;
        setSourceTagKey(arg0: $TagKey_<$DamageType>): void;
        getSourceKey(): $ResourceKey<$DamageType>;
        getEntityTag(): $TagKey<$EntityType<never>>;
        setSourceType(arg0: $DamageModify$SourceType_): void;
        setEntityTag(arg0: $TagKey_<$EntityType<never>>): void;
        setSourceKey(arg0: $ResourceKey_<$DamageType>): void;
        getSourceTagKey(): $TagKey<$DamageType>;
        deserializeFromString(arg0: string): void;
        setCondition(arg0: $Function_<$DamageSource, boolean>): void;
        static Companion: $DamageModify$Companion;
        constructor(arg0: $DamageModify$ModifyType_, arg1: number, arg2: $Function_<$DamageSource, boolean>);
        constructor(arg0: $DamageModify$ModifyType_, arg1: number, arg2: $TagKey_<$DamageType>);
        constructor(arg0: $DamageModify$ModifyType_, arg1: number);
        constructor(arg0: $DamageModify$ModifyType_, arg1: number, arg2: $ResourceKey_<$DamageType>);
        constructor(arg0: number, arg1: number, arg2: $DamageModify$ModifyType_, arg3: string, arg4: $SerializationConstructorMarker);
        constructor();
        constructor(arg0: $DamageModify$ModifyType_, arg1: number, arg2: string);
        static get source$annotations(): void;
        static get entityId$annotations(): void;
        static get sourceType$annotations(): void;
        static get sourceKey$annotations(): void;
        static get entityTag$annotations(): void;
        static get condition$annotations(): void;
        static get value$annotations(): void;
        static get type$annotations(): void;
        static get sourceTagKey$annotations(): void;
    }
    export class $DamageModify$ModifyType extends $Enum<$DamageModify$ModifyType> {
        static values(): $DamageModify$ModifyType[];
        static valueOf(arg0: string): $DamageModify$ModifyType;
        static getEntries(): $EnumEntries<$DamageModify$ModifyType>;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static Companion: $DamageModify$ModifyType$Companion;
        static IMMUNITY: $DamageModify$ModifyType;
        static MULTIPLY: $DamageModify$ModifyType;
        static INVALID: $DamageModify$ModifyType;
        static REDUCE: $DamageModify$ModifyType;
        static get entries(): $EnumEntries<$DamageModify$ModifyType>;
    }
    /**
     * Values that may be interpreted as {@link $DamageModify$ModifyType}.
     */
    export type $DamageModify$ModifyType_ = "immunity" | "reduce" | "multiply" | "invalid";
    export class $DamageModify$SourceType extends $Enum<$DamageModify$SourceType> {
        static values(): $DamageModify$SourceType[];
        static valueOf(arg0: string): $DamageModify$SourceType;
        static getEntries(): $EnumEntries<$DamageModify$SourceType>;
        static TAG_KEY: $DamageModify$SourceType;
        static ALL: $DamageModify$SourceType;
        static ENTITY_ID: $DamageModify$SourceType;
        static ENTITY_TAG: $DamageModify$SourceType;
        static RESOURCE_KEY: $DamageModify$SourceType;
        static FUNCTION: $DamageModify$SourceType;
        static get entries(): $EnumEntries<$DamageModify$SourceType>;
    }
    /**
     * Values that may be interpreted as {@link $DamageModify$SourceType}.
     */
    export type $DamageModify$SourceType_ = "tag_key" | "resource_key" | "function" | "entity_id" | "entity_tag" | "all";
    export class $DamageModify$Companion {
        serializer(): $KSerializer<$DamageModify>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $DamageModify$ModifyType$Companion {
        serializer(): $KSerializer<$DamageModify$ModifyType>;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
