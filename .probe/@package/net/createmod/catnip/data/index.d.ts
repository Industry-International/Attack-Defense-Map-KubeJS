import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $Predicate_, $Supplier_, $Function_, $BiFunction_, $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Codec } from "@package/com/mojang/serialization";
import { $ListTag, $CompoundTag, $ListTag_ } from "@package/net/minecraft/nbt";
import { $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/createmod/catnip/data" {
    export class $Pair<F, S> {
        static of<F, S>(arg0: F, arg1: S): $Pair<F, S>;
        copy(): $Pair<F, S>;
        getFirst(): F;
        swap(): $Pair<S, F>;
        getSecond(): S;
        static codec<F, S>(arg0: $Codec<F>, arg1: $Codec<S>): $Codec<$Pair<F, S>>;
        setSecond(arg0: S): void;
        setFirst(arg0: F): void;
        static streamCodec<B, F, S>(arg0: $StreamCodec<B, F>, arg1: $StreamCodec<B, S>): $StreamCodec<B, $Pair<F, S>>;
    }
    export class $Couple<T> extends $Pair<T, T> implements $Iterable<T> {
        get(arg0: boolean): T;
        replace(arg0: $Function_<T, T>): void;
        iterator(): $Iterator<T>;
        map<S>(arg0: $Function_<T, S>): $Couple<S>;
        stream(): $Stream<T>;
        set(arg0: boolean, arg1: T): void;
        forEach(arg0: $Consumer_<T>): void;
        static create<T>(arg0: $Supplier_<T>): $Couple<T>;
        static create<T>(arg0: T, arg1: T): $Couple<T>;
        static codec<T>(arg0: $Codec<T>): $Codec<$Couple<T>>;
        either(arg0: $Predicate_<T>): boolean;
        mapWithContext<S>(arg0: $BiFunction_<T, boolean, S>): $Couple<S>;
        mapWithParams<S, R>(arg0: $BiFunction_<T, R, S>, arg1: $Couple<R>): $Couple<S>;
        replaceWithContext(arg0: $BiFunction_<T, boolean, T>): void;
        forEachWithParams<S>(arg0: $BiConsumer_<T, S>, arg1: $Couple<S>): void;
        serializeEach(arg0: $Function_<T, $CompoundTag>): $ListTag;
        replaceWithParams<S>(arg0: $BiFunction_<T, S, T>, arg1: $Couple<S>): void;
        forEachWithContext(arg0: $BiConsumer_<T, boolean>): void;
        static deserializeEach<S>(arg0: $ListTag_, arg1: $Function_<$CompoundTag, S>): $Couple<S>;
        both(arg0: $Predicate_<T>): boolean;
        static createWithContext<T>(arg0: $Function_<boolean, T>): $Couple<T>;
        static streamCodec<B, T>(arg0: $StreamCodec<B, T>): $StreamCodec<B, $Couple<T>>;
        mapNotNull<S>(arg0: $Function_<T, S>): $Couple<S>;
        mapNotNullWithParam<S, R>(arg0: $BiFunction_<T, R, S>, arg1: R): $Couple<S>;
        spliterator(): $Spliterator<T>;
        [Symbol.iterator](): Iterator<T>
    }
    export class $WorldAttached<T> {
        get(arg0: $LevelAccessor): T;
        put(arg0: $LevelAccessor, arg1: T): void;
        replace(arg0: $LevelAccessor, arg1: $Consumer_<T>): T;
        replace(arg0: $LevelAccessor): T;
        empty(arg0: $BiConsumer_<$LevelAccessor, T>): void;
        empty(arg0: $Consumer_<T>): void;
        static invalidateWorld(arg0: $LevelAccessor): void;
        constructor(arg0: $Function_<$LevelAccessor, T>);
    }
}
