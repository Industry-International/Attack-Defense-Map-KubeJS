import { $Gson } from "@package/com/google/gson";
import { $Reader } from "@package/java/io";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $SoundEngine } from "@package/eu/ha3/presencefootsteps/sound";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $BlockReport$Reportable } from "@package/eu/ha3/presencefootsteps/util";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $Map, $Set } from "@package/java/util";

declare module "@package/eu/ha3/presencefootsteps/world" {
    export class $Solver {
        static MESSY_FOLIAGE_STRATEGY: string;
    }
    export interface $Solver {
        findAssociation(arg0: $AssociationPool, arg1: $LivingEntity, arg2: number, arg3: boolean): $Association;
        findAssociation(arg0: $AssociationPool, arg1: $LivingEntity, arg2: $BlockPos_, arg3: string): $Association;
    }
    export class $Loadable {
        static GSON: $Gson;
    }
    export interface $Loadable {
        load(arg0: $Reader): void;
        add(arg0: string, arg1: string): void;
    }
    /**
     * Values that may be interpreted as {@link $Loadable}.
     */
    export type $Loadable_ = ((arg0: string, arg1: string) => void);
    export class $AssociationPool {
        reset(): void;
        get(arg0: $BlockPos_, arg1: $BlockState_, arg2: string): $SoundsKey;
        findAssociation(arg0: $BlockPos_, arg1: string): $Association;
        findAssociation(arg0: number, arg1: boolean): $Association;
        wasLastMatchGolem(): boolean;
        constructor(arg0: $LivingEntity, arg1: $SoundEngine);
    }
    export class $Association extends $Record {
        isResult(): boolean;
        static of(arg0: $BlockState_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: $SoundsKey_, arg4: $SoundsKey_, arg5: $SoundsKey_): $Association;
        source(): $LivingEntity;
        state(): $BlockState;
        pos(): $BlockPos;
        foliage(): $SoundsKey;
        isSilent(): boolean;
        dataEquals(arg0: $Association_): boolean;
        dry(): $SoundsKey;
        wet(): $SoundsKey;
        static NOT_EMITTER: $Association;
        constructor(state: $BlockState_, pos: $BlockPos_, source: $LivingEntity, dry: $SoundsKey_, wet: $SoundsKey_, foliage: $SoundsKey_);
        get result(): boolean;
        get silent(): boolean;
    }
    export class $HeuristicStateLookup {
        getMostSimilar(arg0: $Block_): $Block;
        constructor();
    }
    export class $SoundsKey extends $Record {
        isResult(): boolean;
        static of(arg0: string): $SoundsKey;
        names(): string[];
        raw(): string;
        isEmitter(): boolean;
        isSilent(): boolean;
        static UNASSIGNED: $SoundsKey;
        static SWIM: $SoundsKey;
        constructor(raw: string, names: string[]);
        get result(): boolean;
        get emitter(): boolean;
        get silent(): boolean;
    }
    export class $Lookup<T> {
    }
    export interface $Lookup<T> extends $Loadable, $BlockReport$Reportable {
        contains(arg0: T): boolean;
        getAssociation(arg0: T, arg1: string): $SoundsKey;
        getSubstrates(): $Set<string>;
        getAssociations(arg0: T): $Map<string, $SoundsKey>;
        get substrates(): $Set<string>;
    }
    export class $Index<K, V> {
    }
    export interface $Index<K, V> extends $Loadable, $BlockReport$Reportable {
        contains(arg0: $ResourceLocation_): boolean;
        lookup(arg0: K): V;
    }
}
