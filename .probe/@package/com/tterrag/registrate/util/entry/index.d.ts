import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $ItemLike, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $EntityType_, $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType, $BaseFlowingFluid } from "@package/net/neoforged/neoforge/fluids";
import { $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/tterrag/registrate/util/entry" {
    export class $ItemProviderEntry<R extends $ItemLike, T extends R> extends $RegistryEntry<R, T> implements $ItemLike {
        is(arg0: $Item_): boolean;
        asItem(): $Item;
        isIn(arg0: $ItemStack_): boolean;
        asStack(): $ItemStack;
        asStack(arg0: number): $ItemStack;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<R, T>);
    }
    export class $ItemEntry<T extends $Item> extends $ItemProviderEntry<$Item, T> {
        static cast<T extends $Item>(arg0: $RegistryEntry<$Item_, T>): $ItemEntry<T>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$Item_, T>);
    }
    export class $BlockEntry<T extends $Block> extends $ItemProviderEntry<$Block, T> {
        static cast<T extends $Block>(arg0: $RegistryEntry<$Block_, T>): $BlockEntry<T>;
        has(arg0: $BlockState_): boolean;
        getDefaultState(): $BlockState;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$Block_, T>);
        get defaultState(): $BlockState;
    }
    export class $EntityEntry<T extends $Entity> extends $RegistryEntry<$EntityType<never>, $EntityType<T>> {
        static cast<T extends $Entity>(arg0: $RegistryEntry<$EntityType_<never>, $EntityType_<T>>): $EntityEntry<T>;
        create(arg0: $Level_): $EntityType<T>;
        is(arg0: $Entity): boolean;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$EntityType_<never>, $EntityType_<$EntityType_<T>>>);
    }
    export class $RegistryEntry<R, S extends R> extends $DeferredHolder<R, S> implements $NonNullSupplier<S> {
        filter(arg0: $Predicate_<R>): ($RegistryEntry<R, S>) | undefined;
        is<X>(arg0: X): boolean;
        getSibling<X, Y extends X>(arg0: $ResourceKey_<$Registry<X>>): $RegistryEntry<X, Y>;
        getSibling<X, Y extends X>(arg0: $Registry<X>): $RegistryEntry<X, Y>;
        lazy(): $NonNullSupplier<S>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<R, S>);
    }
    export class $FluidEntry<T extends $BaseFlowingFluid> extends $RegistryEntry<$Fluid, T> {
        getType(): $FluidType;
        getSource<S extends $BaseFlowingFluid>(): S;
        getBlock<B extends $Block>(): (B) | undefined;
        getBucket<I extends $Item>(): (I) | undefined;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$Fluid_, T>);
        get type(): $FluidType;
        get source(): S;
        get block(): (B) | undefined;
        get bucket(): (I) | undefined;
    }
    export class $BlockEntityEntry<T extends $BlockEntity> extends $RegistryEntry<$BlockEntityType<never>, $BlockEntityType<T>> {
        get(arg0: $BlockGetter, arg1: $BlockPos_): ($BlockEntityType<T>) | undefined;
        static cast<T extends $BlockEntity>(arg0: $RegistryEntry<$BlockEntityType_<never>, $BlockEntityType_<T>>): $BlockEntityEntry<T>;
        create(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntityType<T>;
        is(arg0: $BlockEntity): boolean;
        getNullable(arg0: $BlockGetter, arg1: $BlockPos_): $BlockEntityType<T>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$BlockEntityType_<never>, $BlockEntityType_<$BlockEntityType_<T>>>);
    }
}
