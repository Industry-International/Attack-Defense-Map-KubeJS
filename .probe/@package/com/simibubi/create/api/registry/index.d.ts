import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Function_ } from "@package/java/util/function";
import { $Holder } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $StateHolder } from "@package/net/minecraft/world/level/block/state";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Runnable_ } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/api/registry" {
    export class $SimpleRegistry$Multi<K, V> {
        static create<K, V>(): $SimpleRegistry$Multi<K, V>;
    }
    export interface $SimpleRegistry$Multi<K, V> extends $SimpleRegistry<K, $List<V>> {
        add(arg0: K, arg1: $List_<V>): void;
        addProvider(arg0: $SimpleRegistry$Provider_<K, $List<V>>): void;
        get(arg0: $StateHolder<K, never>): $List<V>;
        get(arg0: $StateHolder<K, never>): $List<V>;
    }
    export class $SimpleRegistry$Provider<K, V> {
        static forEntityTag<V>(arg0: $TagKey_<$EntityType<never>>, arg1: V): $SimpleRegistry$Provider<$EntityType<never>, V>;
        static forFluidTag<V>(arg0: $TagKey_<$Fluid>, arg1: V): $SimpleRegistry$Provider<$Fluid, V>;
        static forBlockTag<V>(arg0: $TagKey_<$Block>, arg1: V): $SimpleRegistry$Provider<$Block, V>;
        static forBlockEntityTag<V>(arg0: $TagKey_<$BlockEntityType<never>>, arg1: V): $SimpleRegistry$Provider<$BlockEntityType<never>, V>;
        static forTag<K, V>(arg0: $TagKey_<K>, arg1: $Function_<K, $Holder<K>>, arg2: V): $SimpleRegistry$Provider<K, V>;
        static forItemTag<V>(arg0: $TagKey_<$Item>, arg1: V): $SimpleRegistry$Provider<$Item, V>;
    }
    export interface $SimpleRegistry$Provider<K, V> {
        get(arg0: K): V;
        onRegister(arg0: $Runnable_): void;
    }
    /**
     * Values that may be interpreted as {@link $SimpleRegistry$Provider}.
     */
    export type $SimpleRegistry$Provider_<K, V> = ((arg0: K) => V);
    export class $SimpleRegistry<K, V> {
        static create<K, V>(): $SimpleRegistry<K, V>;
    }
    export interface $SimpleRegistry<K, V> {
        invalidate(): void;
        registerProvider(arg0: $SimpleRegistry$Provider_<K, V>): void;
        get(arg0: $StateHolder<K, never>): V;
        get(arg0: K): V;
        register(arg0: K, arg1: V): void;
    }
}
