import { $ChunkPos, $Level, $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $ITrackingCapEvent } from "@package/org/embeddedt/modernfix/neoforge/caps";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $List, $Set } from "@package/java/util";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $WeakReference } from "@package/java/lang/ref";
import { $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BooleanSupplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Runnable_, $Record, $Class } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $ChunkEvent$Unload, $ChunkEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/neoforged/neoforge/capabilities" {
    export class $IBlockCapabilityProvider<T, C> {
    }
    export interface $IBlockCapabilityProvider<T, C> {
        getCapability(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): T;
    }
    /**
     * Values that may be interpreted as {@link $IBlockCapabilityProvider}.
     */
    export type $IBlockCapabilityProvider_<T, C> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockEntity, arg4: C) => T);
    export class $BaseCapability<T, C> {
        name(): $ResourceLocation;
        typeClass(): $Class<T>;
        contextClass(): $Class<C>;
    }
    export class $BlockCapabilityCache<T, C> {
        context(): C;
        static create<T, C>(arg0: $BlockCapability<T, C>, arg1: $ServerLevel, arg2: $BlockPos_, arg3: C): $BlockCapabilityCache<T, C>;
        static create<T, C>(arg0: $BlockCapability<T, C>, arg1: $ServerLevel, arg2: $BlockPos_, arg3: C, arg4: $BooleanSupplier_, arg5: $Runnable_): $BlockCapabilityCache<T, C>;
        pos(): $BlockPos;
        level(): $ServerLevel;
        getCapability(): T;
        get capability(): T;
    }
    export class $ItemCapability<T, C> extends $BaseCapability<T, C> {
        static create<T, C>(arg0: $ResourceLocation_, arg1: $Class<T>, arg2: $Class<C>): $ItemCapability<T, C>;
        static getAll(): $List<$ItemCapability<never, never>>;
        getCapability(arg0: $ItemStack_, arg1: C): T;
        static createVoid<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $ItemCapability<T, void>;
        static get all(): $List<$ItemCapability<never, never>>;
    }
    export class $CapabilityRegistry$StoredCap<C> extends $Record {
    }
    export class $Capabilities {
    }
    export class $ICapabilityProvider<O, C, T> {
    }
    export interface $ICapabilityProvider<O, C, T> {
        getCapability(arg0: O, arg1: C): T;
    }
    /**
     * Values that may be interpreted as {@link $ICapabilityProvider}.
     */
    export type $ICapabilityProvider_<O, C, T> = ((arg0: O, arg1: C) => T);
    export class $Capabilities$FluidHandler {
        static ITEM: $ItemCapability<$IFluidHandlerItem, void>;
        static ENTITY: $EntityCapability<$IFluidHandler, $Direction>;
        static BLOCK: $BlockCapability<$IFluidHandler, $Direction>;
    }
    export class $RegisterCapabilitiesEvent extends $Event implements $IModBusEvent, $ITrackingCapEvent {
        registerBlockEntity<T, C, BE extends $BlockEntity>(arg0: $BlockCapability<T, C>, arg1: $BlockEntityType_<BE>, arg2: $ICapabilityProvider_<BE, C, T>): void;
        registerEntity<T, C, E extends $Entity>(arg0: $EntityCapability<T, C>, arg1: $EntityType_<E>, arg2: $ICapabilityProvider_<E, C, T>): void;
        registerItem<T, C>(arg0: $ItemCapability<T, C>, arg1: $ICapabilityProvider_<$ItemStack, C, T>, ...arg2: $ItemLike_[]): void;
        registerBlock<T, C>(arg0: $BlockCapability<T, C>, arg1: $IBlockCapabilityProvider_<T, C>, ...arg2: $Block_[]): void;
        mfix$getTrackedCaps(): $Set<any>;
        isBlockRegistered(arg0: $BlockCapability<never, never>, arg1: $Block_): boolean;
        setNonProxyable(arg0: $BlockCapability<never, never>): void;
        isItemRegistered(arg0: $ItemCapability<never, never>, arg1: $Item_): boolean;
        isEntityRegistered(arg0: $EntityCapability<never, never>, arg1: $EntityType_<never>): boolean;
        setProxyable(arg0: $BlockCapability<never, never>): void;
        set nonProxyable(value: $BlockCapability<never, never>);
        set proxyable(value: $BlockCapability<never, never>);
    }
    export class $Capabilities$EnergyStorage {
        static ITEM: $ItemCapability<$IEnergyStorage, void>;
        static ENTITY: $EntityCapability<$IEnergyStorage, $Direction>;
        static BLOCK: $BlockCapability<$IEnergyStorage, $Direction>;
    }
    export class $CapabilityHooks {
        static init(): void;
        static invalidateCapsOnChunkUnload(arg0: $ChunkEvent$Unload): void;
        static registerFallbackVanillaProviders(arg0: $RegisterCapabilitiesEvent): void;
        static cleanCapabilityListenerReferencesOnTick(arg0: $LevelTickEvent$Post): void;
        static registerVanillaProviders(arg0: $RegisterCapabilitiesEvent): void;
        static invalidateCapsOnChunkLoad(arg0: $ChunkEvent$Load): void;
        static markProxyableCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        constructor();
    }
    export class $CapabilityRegistry<C> {
        create(arg0: $ResourceLocation_, arg1: $Class<never>, arg2: $Class<never>): C;
        getAll(): $List<C>;
        constructor(arg0: $CapabilityRegistry$CapabilityConstructor_<C>);
        get all(): $List<C>;
    }
    export class $CapabilityListenerHolder$ListenerReference extends $WeakReference<$ICapabilityInvalidationListener> {
    }
    export class $CapabilityListenerHolder {
        clean(): void;
        addListener(arg0: $BlockPos_, arg1: $ICapabilityInvalidationListener_): void;
        invalidatePos(arg0: $BlockPos_): void;
        invalidateChunk(arg0: $ChunkPos): void;
        constructor();
    }
    export class $Capabilities$ItemHandler {
        static ITEM: $ItemCapability<$IItemHandler, void>;
        static ENTITY: $EntityCapability<$IItemHandler, void>;
        static ENTITY_AUTOMATION: $EntityCapability<$IItemHandler, $Direction>;
        static BLOCK: $BlockCapability<$IItemHandler, $Direction>;
    }
    export class $CapabilityRegistry$CapabilityConstructor<C> {
    }
    export interface $CapabilityRegistry$CapabilityConstructor<C> {
        create(arg0: $ResourceLocation_, arg1: $Class<never>, arg2: $Class<never>): C;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityRegistry$CapabilityConstructor}.
     */
    export type $CapabilityRegistry$CapabilityConstructor_<C> = ((arg0: $ResourceLocation, arg1: $Class<never>, arg2: $Class<never>) => C);
    export class $ICapabilityInvalidationListener {
    }
    export interface $ICapabilityInvalidationListener {
        onInvalidate(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ICapabilityInvalidationListener}.
     */
    export type $ICapabilityInvalidationListener_ = (() => boolean);
    export class $BlockCapability<T, C> extends $BaseCapability<T, C> {
        static create<T, C>(arg0: $ResourceLocation_, arg1: $Class<T>, arg2: $Class<C>): $BlockCapability<T, C>;
        static getAll(): $List<$BlockCapability<never, never>>;
        static createSided<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $BlockCapability<T, $Direction>;
        getCapability(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): T;
        static createVoid<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $BlockCapability<T, void>;
        static getAllProxyable(): $List<$BlockCapability<never, never>>;
        isProxyable(): boolean;
        static get all(): $List<$BlockCapability<never, never>>;
        static get allProxyable(): $List<$BlockCapability<never, never>>;
        get proxyable(): boolean;
    }
    export class $EntityCapability<T, C> extends $BaseCapability<T, C> {
        static create<T, C>(arg0: $ResourceLocation_, arg1: $Class<T>, arg2: $Class<C>): $EntityCapability<T, C>;
        static getAll(): $List<$EntityCapability<never, never>>;
        static createSided<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $EntityCapability<T, $Direction>;
        getCapability(arg0: $Entity, arg1: C): T;
        static createVoid<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $EntityCapability<T, void>;
        static get all(): $List<$EntityCapability<never, never>>;
    }
}
