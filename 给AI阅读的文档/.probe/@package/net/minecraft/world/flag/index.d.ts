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
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        requiredFeatures(): $FeatureFlagSet;
    }
    /**
     * Values that may be interpreted as {@link $FeatureElement}.
     */
    export type $FeatureElement_ = (() => $FeatureFlagSet);
    export class $FeatureFlagSet {
        isEmpty(): boolean;
        join(other: $FeatureFlagSet): $FeatureFlagSet;
        static of(): $FeatureFlagSet;
        static of(flag: $FeatureFlag, ...others: $FeatureFlag[]): $FeatureFlagSet;
        static of(flag: $FeatureFlag): $FeatureFlagSet;
        contains(flag: $FeatureFlag): boolean;
        static create(universe: $FeatureFlagUniverse, flags: $Collection_<$FeatureFlag>): $FeatureFlagSet;
        subtract(other: $FeatureFlagSet): $FeatureFlagSet;
        intersects(set: $FeatureFlagSet): boolean;
        isSubsetOf(set: $FeatureFlagSet): boolean;
        static MAX_CONTAINER_SIZE: number;
        get empty(): boolean;
    }
    export class $FeatureFlagRegistry$Builder {
        create(arg0: $ResourceLocation_, arg1: boolean): $FeatureFlag;
        /**
         * @deprecated
         */
        create(location: $ResourceLocation_): $FeatureFlag;
        build(): $FeatureFlagRegistry;
        createVanilla(id: string): $FeatureFlag;
        constructor(id: string);
    }
    export class $FeatureFlags {
        static isExperimental(set: $FeatureFlagSet): boolean;
        static printMissingFlags(enabledFeatures: $FeatureFlagSet, requestedFeatures: $FeatureFlagSet): string;
        static printMissingFlags(registry: $FeatureFlagRegistry, enabledFeatures: $FeatureFlagSet, requestedFeatures: $FeatureFlagSet): string;
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
        constructor(id: string);
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
        constructor(universe: $FeatureFlagUniverse, maskBit: number);
        constructor(arg0: $FeatureFlagUniverse, arg1: number, arg2: number, arg3: boolean);
    }
    export class $FeatureFlagRegistry {
        subset(...flags: $FeatureFlag[]): $FeatureFlagSet;
        getAllFlags(): $Map<$ResourceLocation, $FeatureFlag>;
        getFlag(arg0: $ResourceLocation_): $FeatureFlag;
        allFlags(): $FeatureFlagSet;
        codec(): $Codec<$FeatureFlagSet>;
        toNames(set: $FeatureFlagSet): $Set<$ResourceLocation>;
        fromNames(names: $Iterable_<$ResourceLocation>, onError: $Consumer_<$ResourceLocation>): $FeatureFlagSet;
        fromNames(names: $Iterable_<$ResourceLocation>): $FeatureFlagSet;
        isSubset(set: $FeatureFlagSet): boolean;
        hasAnyModdedFlags(): boolean;
        constructor(universe: $FeatureFlagUniverse, allFlags: $FeatureFlagSet, names: $Map_<$ResourceLocation_, $FeatureFlag>);
    }
}
