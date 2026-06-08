import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/util/random" {
    export class $WeightedEntry$IntrusiveBase implements $WeightedEntry {
        getWeight(): $Weight;
        constructor(arg0: number);
        constructor(arg0: $Weight);
        get weight(): $Weight;
    }
    export class $SimpleWeightedRandomList<E> extends $WeightedRandomList<$WeightedEntry$Wrapper<E>> {
        static builder<E>(): $SimpleWeightedRandomList$Builder<E>;
        static single<E>(arg0: E): $SimpleWeightedRandomList<E>;
        static empty<E>(): $SimpleWeightedRandomList<E>;
        getRandomValue(arg0: $RandomSource): ($WeightedEntry$Wrapper<E>) | undefined;
        static wrappedCodec<E>(arg0: $Codec<E>): $Codec<$SimpleWeightedRandomList<E>>;
        static wrappedCodecAllowingEmpty<E>(arg0: $Codec<E>): $Codec<$SimpleWeightedRandomList<E>>;
        constructor(arg0: $List_<$WeightedEntry$Wrapper_<$WeightedEntry$Wrapper_<E>>>);
    }
    export class $WeightedEntry {
        static wrap<T>(arg0: T, arg1: number): $WeightedEntry$Wrapper<T>;
    }
    export interface $WeightedEntry {
        getWeight(): $Weight;
        get weight(): $Weight;
    }
    /**
     * Values that may be interpreted as {@link $WeightedEntry}.
     */
    export type $WeightedEntry_ = (() => $Weight);
    export class $SimpleWeightedRandomList$Builder<E> {
        add(arg0: E, arg1: number): $SimpleWeightedRandomList$Builder<E>;
        add(arg0: E): $SimpleWeightedRandomList$Builder<E>;
        build(): $SimpleWeightedRandomList<E>;
        constructor();
    }
    export class $WeightedRandomList<E extends $WeightedEntry> {
        isEmpty(): boolean;
        static create<E extends $WeightedEntry>(): $WeightedRandomList<E>;
        static create<E extends $WeightedEntry>(...arg0: E[]): $WeightedRandomList<E>;
        static create<E extends $WeightedEntry>(arg0: $List_<E>): $WeightedRandomList<E>;
        unwrap(): $List<E>;
        static codec<E extends $WeightedEntry>(arg0: $Codec<E>): $Codec<$WeightedRandomList<E>>;
        getRandom(arg0: $RandomSource): (E) | undefined;
        constructor(arg0: $List_<E>);
        get empty(): boolean;
    }
    export class $Weight {
        static of(arg0: number): $Weight;
        asInt(): number;
        static CODEC: $Codec<$Weight>;
    }
    export class $WeightedEntry$Wrapper<T> extends $Record implements $WeightedEntry {
        data(): T;
        getWeight(): $Weight;
        weight(): $Weight;
        static codec<E>(arg0: $Codec<E>): $Codec<$WeightedEntry$Wrapper<E>>;
        constructor(arg0: T, arg1: $Weight);
    }
    export class $WeightedRandom {
        static getTotalWeight(arg0: $List_<$WeightedEntry_>): number;
        static getWeightedItem<T extends $WeightedEntry>(arg0: $List_<T>, arg1: number): (T) | undefined;
        static getRandomItem<T extends $WeightedEntry>(arg0: $RandomSource, arg1: $List_<T>): (T) | undefined;
        static getRandomItem<T extends $WeightedEntry>(arg0: $RandomSource, arg1: $List_<T>, arg2: number): (T) | undefined;
    }
}
