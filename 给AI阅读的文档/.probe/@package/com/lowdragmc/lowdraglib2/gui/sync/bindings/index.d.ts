import { $SyncValue } from "@package/com/lowdragmc/lowdraglib2/gui/sync";
import { $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Enum } from "@package/java/lang";
import { $Collection } from "@package/java/util";
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
        getBoundObservers(): $Collection<$IObserver<T>>;
        get boundObservers(): $Collection<$IObserver<T>>;
    }
    export class $IDataConsumer<T> {
    }
    export interface $IDataConsumer<T> {
        bindDataSource(arg0: $IDataProvider<T>): $UIElement;
        unbindDataSource(arg0: $IDataProvider<T>): $UIElement;
        getBoundDataSources(): $Collection<$IDataProvider<T>>;
        get boundDataSources(): $Collection<$IDataProvider<T>>;
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
        getSyncValue(): $SyncValue<T>;
        s2cStrategy(): $SyncStrategy;
        c2sStrategy(): $SyncStrategy;
        setServerDataSource(arg0: $IDataSource<T>): void;
        getServerDataSource(): $IDataSource<T>;
        getRemoteDataSource(): $IDataSource<T>;
        setRemoteDataSource(arg0: $IDataSource<T>): void;
        acceptS2C(): boolean;
        acceptC2S(): boolean;
        get syncValue(): $SyncValue<T>;
    }
}
