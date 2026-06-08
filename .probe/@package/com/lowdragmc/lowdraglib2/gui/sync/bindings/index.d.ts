import { $SyncValue } from "@package/com/lowdragmc/lowdraglib2/gui/sync";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Enum } from "@package/java/lang";
export * as impl from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings/impl";

declare module "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings" {
    export class $IDataSource<T> {
        static of<T>(arg0: $Consumer_<T>, arg1: $Supplier_<T>): $IDataSource<T>;
        static empty<T>(): $IDataSource<T>;
        static EMPTY: $IDataSource<never>;
    }
    export interface $IDataSource<T> {
        getValue(): T;
        setValue(arg0: T): $IDataSource<T>;
    }
    export class $IBindable<T> {
    }
    export interface $IBindable<T> extends $IDataSource<T> {
        bind(arg0: $IBinding<T>): $UIElement;
        unbind(arg0: $IBinding<T>): $UIElement;
    }
    export class $SyncStrategy extends $Enum<$SyncStrategy> {
        static values(): $SyncStrategy[];
        static valueOf(arg0: string): $SyncStrategy;
        doSync(): boolean;
        static CHANGED_PERIODIC: $SyncStrategy;
        static NONE: $SyncStrategy;
        static ALWAYS: $SyncStrategy;
    }
    /**
     * Values that may be interpreted as {@link $SyncStrategy}.
     */
    export type $SyncStrategy_ = "none" | "changed_periodic" | "always";
    export class $IObserver<T> {
    }
    export interface $IObserver<T> {
        onValueChanged(arg0: T): void;
    }
    /**
     * Values that may be interpreted as {@link $IObserver}.
     */
    export type $IObserver_<T> = ((arg0: T) => void);
    export class $IObservable<T> {
    }
    export interface $IObservable<T> {
        unbindObserver(arg0: $IObserver_<T>): $UIElement;
        bindObserver(arg0: $IObserver_<T>): $UIElement;
    }
    export class $IDataConsumer<T> {
    }
    export interface $IDataConsumer<T> {
        unbindDataSource(arg0: $IDataProvider<T>): $UIElement;
        bindDataSource(arg0: $IDataProvider<T>): $UIElement;
    }
    export class $IDataProvider<T> {
    }
    export interface $IDataProvider<T> {
        getValue(): T;
        registerListener(arg0: $Consumer_<T>): $ISubscription;
        registerListener(arg0: $Consumer_<T>, arg1: boolean): $ISubscription;
        get value(): T;
    }
    export class $IBinding<T> {
    }
    export interface $IBinding<T> {
        getRemoteDataSource(): $IDataSource<T>;
        setRemoteDataSource(arg0: $IDataSource<T>): void;
        getSyncValue(): $SyncValue<T>;
        acceptS2C(): boolean;
        acceptC2S(): boolean;
        setServerDataSource(arg0: $IDataSource<T>): void;
        getServerDataSource(): $IDataSource<T>;
        c2sStrategy(): $SyncStrategy;
        s2cStrategy(): $SyncStrategy;
        get syncValue(): $SyncValue<T>;
    }
}
