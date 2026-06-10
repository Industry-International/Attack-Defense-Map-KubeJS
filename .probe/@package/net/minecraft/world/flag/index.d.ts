import { $Consumer_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Iterable_ } from "@package/java/lang";
import { $Collection_, $Map_, $Map, $Set } from "@package/java/util";

declare module "@package/net/minecraft/world/flag" {
    export class $FeatureElement {
        static FILTERED_REGISTRIES: $Set<$ResourceKey<$Registry<$FeatureElement>>>;
    }
    export interface $FeatureElement {
        isEnabled(arg0: $FeatureFlagSet): boolean;
        requiredFeatures(): $FeatureFlagSet;
    }
    /**
     * Values that may be interpreted as {@link $FeatureElement}.
     */
    export type $FeatureElement_ = (() => $FeatureFlagSet);
    export class $FeatureFlagSet {
        isEmpty(): boolean;
        join(arg0: $FeatureFlagSet): $FeatureFlagSet;
        static of(): $FeatureFlagSet;
        static of(arg0: $FeatureFlag, ...arg1: $FeatureFlag[]): $FeatureFlagSet;
        static of(arg0: $FeatureFlag): $FeatureFlagSet;
        contains(arg0: $FeatureFlag): boolean;
        static create(arg0: $FeatureFlagUniverse, arg1: $Collection_<$FeatureFlag>): $FeatureFlagSet;
        subtract(arg0: $FeatureFlagSet): $FeatureFlagSet;
        intersects(arg0: $FeatureFlagSet): boolean;
        isSubsetOf(arg0: $FeatureFlagSet): boolean;
        static MAX_CONTAINER_SIZE: number;
        get empty(): boolean;
    }
    export class $FeatureFlagRegistry$Builder {
        create(arg0: $ResourceLocation_, arg1: boolean): $FeatureFlag;
        /**
         * @deprecated
         */
        create(arg0: $ResourceLocation_): $FeatureFlag;
        build(): $FeatureFlagRegistry;
        createVanilla(arg0: string): $FeatureFlag;
        constructor(arg0: string);
    }
    export class $FeatureFlags {
        static printMissingFlags(arg0: $FeatureFlagRegistry, arg1: $FeatureFlagSet, arg2: $FeatureFlagSet): string;
        static printMissingFlags(arg0: $FeatureFlagSet, arg1: $FeatureFlagSet): string;
        static isExperimental(arg0: $FeatureFlagSet): boolean;
        static BUNDLE: $FeatureFlag;
        static CODEC: $Codec<$FeatureFlagSet>;
        static VANILLA: $FeatureFlag;
        static DEFAULT_FLAGS: $FeatureFlagSet;
        static TRADE_REBALANCE: $FeatureFlag;
        static VANILLA_SET: $FeatureFlagSet;
        static REGISTRY: $FeatureFlagRegistry;
        constructor();
    }
    export class $FeatureFlagUniverse {
        constructor(arg0: string);
    }
    export class $FeatureFlag {
        isModded(): boolean;
        extMaskIndex: number;
        universe: $FeatureFlagUniverse;
        modded: boolean;
        mask: number;
        /**
         * @deprecated
         */
        constructor(arg0: $FeatureFlagUniverse, arg1: number);
        constructor(arg0: $FeatureFlagUniverse, arg1: number, arg2: number, arg3: boolean);
    }
    export class $FeatureFlagRegistry {
        subset(...arg0: $FeatureFlag[]): $FeatureFlagSet;
        getAllFlags(): $Map<$ResourceLocation, $FeatureFlag>;
        getFlag(arg0: $ResourceLocation_): $FeatureFlag;
        allFlags(): $FeatureFlagSet;
        codec(): $Codec<$FeatureFlagSet>;
        hasAnyModdedFlags(): boolean;
        toNames(arg0: $FeatureFlagSet): $Set<$ResourceLocation>;
        isSubset(arg0: $FeatureFlagSet): boolean;
        fromNames(arg0: $Iterable_<$ResourceLocation>, arg1: $Consumer_<$ResourceLocation>): $FeatureFlagSet;
        fromNames(arg0: $Iterable_<$ResourceLocation>): $FeatureFlagSet;
        constructor(arg0: $FeatureFlagUniverse, arg1: $FeatureFlagSet, arg2: $Map_<$ResourceLocation_, $FeatureFlag>);
    }
}
