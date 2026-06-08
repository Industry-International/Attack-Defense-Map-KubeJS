import { $RPCEvent_ } from "@package/com/lowdragmc/lowdraglib2/gui/sync/rpc";
import { $Supplier_, $Consumer_, $Consumer, $Supplier } from "@package/java/util/function";
import { $SyncStrategy_, $SyncStrategy } from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $SyncValueHolder, $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $Type } from "@package/java/lang/reflect";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $List, $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
export * as bindings from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings";
export * as rpc from "@package/com/lowdragmc/lowdraglib2/gui/sync/rpc";

declare module "@package/com/lowdragmc/lowdraglib2/gui/sync" {
    export class $IUISyncManagerHolder {
    }
    export interface $IUISyncManagerHolder {
        writeInitialData(arg0: $RegistryFriendlyByteBuf): void;
        getSyncManager(): $UISyncManager;
        readInitialData(arg0: $RegistryFriendlyByteBuf): void;
        get syncManager(): $UISyncManager;
    }
    /**
     * Values that may be interpreted as {@link $IUISyncManagerHolder}.
     */
    export type $IUISyncManagerHolder_ = (() => $UISyncManager);
    export class $UISyncManager {
        tick(): void;
        writeInitialData(arg0: $RegistryFriendlyByteBuf): void;
        unregisterRPCEvent(arg0: $RPCEvent_): $UISyncManager;
        registerRPCEvent(arg0: $RPCEvent_): $UISyncManager;
        registerSyncValue(arg0: $SyncValue<never>): $UISyncManager;
        handEvent(arg0: $RegistryFriendlyByteBuf): void;
        sendEvent(arg0: $RPCEvent_, ...arg1: $Object[]): void;
        sendEvent<T>(arg0: $RPCEvent_, arg1: $Consumer_<T>, ...arg2: $Object[]): void;
        readInitialData(arg0: $RegistryFriendlyByteBuf): void;
        unregisterSyncValue(arg0: $SyncValue<never>): $UISyncManager;
        handEventReturn(arg0: $RegistryFriendlyByteBuf): void;
        getReturnCallbacks(): $Map<number, $Consumer<never>>;
        handleSyncPacket(arg0: $RegistryFriendlyByteBuf): void;
        modularUI: $ModularUI;
        constructor(arg0: $ModularUI);
        get returnCallbacks(): $Map<number, $Consumer<never>>;
    }
    export class $SyncValue<T> {
        update(): void;
        getValue(): T;
        setValue(arg0: T): void;
        addListener(arg0: $Consumer_<T>): $ISubscription;
        hasChanged(): boolean;
        readSyncData(arg0: $RegistryFriendlyByteBuf): void;
        writeSyncData(arg0: $RegistryFriendlyByteBuf): void;
        isAcceptSync(): boolean;
        setSyncStrategy(arg0: $SyncStrategy_): void;
        clearChanged(): void;
        getSyncStrategy(): $SyncStrategy;
        markAsChanged(): void;
        setValueProvider(arg0: $Supplier_<T>): void;
        setAcceptSync(arg0: boolean): void;
        isToSync(): boolean;
        setToSync(arg0: boolean): void;
        toSync: boolean;
        syncValueHolder: $SyncValueHolder<T>;
        listeners: $List<$Consumer<T>>;
        syncStrategy: $SyncStrategy;
        valueProvider: $Supplier<T>;
        acceptSync: boolean;
        constructor(arg0: string, arg1: $Type, arg2: T);
    }
}
