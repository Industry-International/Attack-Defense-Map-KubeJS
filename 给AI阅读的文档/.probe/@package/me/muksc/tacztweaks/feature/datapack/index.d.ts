import { $Function0 } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Registry } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $EnumEntries } from "@package/kotlin/enums";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $DispatchCodec } from "@package/me/muksc/tacztweaks/core/codec";
import { $Enum } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
export * as shield from "@package/me/muksc/tacztweaks/feature/datapack/shield";

declare module "@package/me/muksc/tacztweaks/feature/datapack" {
    export class $BulletInteraction$Pierce$EPierceType$Companion {
        getCODEC(): $Codec<$BulletInteraction$Pierce$EPierceType>;
        constructor(arg0: $DefaultConstructorMarker);
        get CODEC(): $Codec<$BulletInteraction$Pierce$EPierceType>;
    }
    export class $BulletInteraction$Companion {
        getCODEC(): $Codec<$BulletInteraction>;
        getREGISTRY_KEY(): $ResourceKey<$Registry<$BulletInteraction>>;
        constructor(arg0: $DefaultConstructorMarker);
        get CODEC(): $Codec<$BulletInteraction>;
        get REGISTRY_KEY(): $ResourceKey<$Registry<$BulletInteraction>>;
    }
    export class $BulletInteraction$Pierce$Companion {
        getCODEC(): $Codec<$BulletInteraction$Pierce>;
        constructor(arg0: $DefaultConstructorMarker);
        get CODEC(): $Codec<$BulletInteraction$Pierce>;
    }
    export class $BulletInteraction {
        test(arg0: $LootContext): boolean;
        getPriority(): number;
        getType(): $BulletInteraction$EBulletInteractionType;
        getConditions(): $List<$LootItemCondition>;
        getPierce(): $BulletInteraction$Pierce;
        static access$getREGISTRY_KEY$cp(): $ResourceKey<any>;
        static access$getCODEC$cp(): $Codec<any>;
        static Companion: $BulletInteraction$Companion;
        constructor(arg0: $BulletInteraction$EBulletInteractionType_, arg1: $List_<any>, arg2: $BulletInteraction$Pierce, arg3: number, arg4: $DefaultConstructorMarker);
        get priority(): number;
        get type(): $BulletInteraction$EBulletInteractionType;
        get conditions(): $List<$LootItemCondition>;
        get pierce(): $BulletInteraction$Pierce;
    }
    /**
     * Values that may be interpreted as {@link $BulletInteraction}.
     */
    export type $BulletInteraction_ = RegistryTypes.TacztweaksBulletInteractions;
    export class $BulletInteraction$Pierce$EPierceType extends $Enum<$BulletInteraction$Pierce$EPierceType> implements $DispatchCodec<$BulletInteraction$Pierce> {
        static values(): $BulletInteraction$Pierce$EPierceType[];
        static valueOf(arg0: string): $BulletInteraction$Pierce$EPierceType;
        getKey(): string;
        static getEntries(): $EnumEntries<$BulletInteraction$Pierce$EPierceType>;
        codec(): $MapCodec<$BulletInteraction$Pierce>;
        getCodecProvider(): $Function0<$MapCodec<$BulletInteraction$Pierce>>;
        static access$getCODEC$cp(): $Codec<any>;
        static Companion: $BulletInteraction$Pierce$EPierceType$Companion;
        static NEVER: $BulletInteraction$Pierce$EPierceType;
        static COUNT: $BulletInteraction$Pierce$EPierceType;
        static ALWAYS: $BulletInteraction$Pierce$EPierceType;
        static DEFAULT: $BulletInteraction$Pierce$EPierceType;
        static DAMAGE: $BulletInteraction$Pierce$EPierceType;
        get key(): string;
        static get entries(): $EnumEntries<$BulletInteraction$Pierce$EPierceType>;
        get codecProvider(): $Function0<$MapCodec<$BulletInteraction$Pierce>>;
    }
    /**
     * Values that may be interpreted as {@link $BulletInteraction$Pierce$EPierceType}.
     */
    export type $BulletInteraction$Pierce$EPierceType_ = "never" | "always" | "default" | "count" | "damage";
    export class $BulletInteraction$EBulletInteractionType$Companion {
        getCODEC(): $Codec<$BulletInteraction$EBulletInteractionType>;
        constructor(arg0: $DefaultConstructorMarker);
        get CODEC(): $Codec<$BulletInteraction$EBulletInteractionType>;
    }
    export class $BulletInteraction$EBulletInteractionType extends $Enum<$BulletInteraction$EBulletInteractionType> implements $DispatchCodec<$BulletInteraction> {
        static values(): $BulletInteraction$EBulletInteractionType[];
        static valueOf(arg0: string): $BulletInteraction$EBulletInteractionType;
        getKey(): string;
        static getEntries(): $EnumEntries<$BulletInteraction$EBulletInteractionType>;
        codec(): $MapCodec<$BulletInteraction>;
        getCodecProvider(): $Function0<$MapCodec<$BulletInteraction>>;
        static access$getCODEC$cp(): $Codec<any>;
        static Companion: $BulletInteraction$EBulletInteractionType$Companion;
        static ENTITY: $BulletInteraction$EBulletInteractionType;
        static BLOCK: $BulletInteraction$EBulletInteractionType;
        get key(): string;
        static get entries(): $EnumEntries<$BulletInteraction$EBulletInteractionType>;
        get codecProvider(): $Function0<$MapCodec<$BulletInteraction>>;
    }
    /**
     * Values that may be interpreted as {@link $BulletInteraction$EBulletInteractionType}.
     */
    export type $BulletInteraction$EBulletInteractionType_ = "block" | "entity";
    export class $BulletInteraction$Pierce {
        getType(): $BulletInteraction$Pierce$EPierceType;
        getConditions(): $List<$LootItemCondition>;
        getRenderBulletHole(): boolean;
        getConditional(): boolean;
        static access$getCODEC$cp(): $Codec<any>;
        static Companion: $BulletInteraction$Pierce$Companion;
        constructor(arg0: $BulletInteraction$Pierce$EPierceType_, arg1: $List_<any>, arg2: boolean, arg3: boolean, arg4: $DefaultConstructorMarker);
        get type(): $BulletInteraction$Pierce$EPierceType;
        get conditions(): $List<$LootItemCondition>;
        get renderBulletHole(): boolean;
        get conditional(): boolean;
    }
    export interface $BulletInteraction extends RegistryMarked<RegistryTypes.TacztweaksBulletInteractionsTag, RegistryTypes.TacztweaksBulletInteractions> {}
}
