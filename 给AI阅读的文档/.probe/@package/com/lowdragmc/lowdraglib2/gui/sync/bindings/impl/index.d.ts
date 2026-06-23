import { $SyncValue } from "@package/com/lowdragmc/lowdraglib2/gui/sync";
import { $Consumer_, $Consumer, $Supplier_, $Function_, $Supplier } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $SyncStrategy_, $SyncStrategy, $IBinding, $IDataSource, $IDataProvider } from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings";
import { $Tag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $Type } from "@package/java/lang/reflect";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ITickable } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Enum, $Class } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings/impl" {
    export class $SupplierDataSource<T> implements $IDataProvider<T>, $ITickable {
        getValue(): T;
        map<D>(arg0: $Function_<T, D>): $SupplierDataSource<D>;
        static of<T>(arg0: $Supplier_<T>): $SupplierDataSource<T>;
        frequency(arg0: number): $SupplierDataSource<T>;
        frequency(): number;
        tick(): void;
        registerListener(arg0: $Consumer_<T>): $ISubscription;
        getSupplier(): $Supplier<T>;
        checkUpdate(): void;
        registerListener(arg0: $Consumer_<T>, arg1: boolean): $ISubscription;
        get value(): T;
        get supplier(): $Supplier<T>;
    }
    export class $IPausable {
    }
    export interface $IPausable {
        resume(): void;
        isPaused(): boolean;
        pause(): void;
        togglePause(): void;
        get paused(): boolean;
    }
    export class $DataBindingBuilder<T> {
        static doubleVal(arg0: $Supplier_<number>, arg1: $Consumer_<number>): $DataBindingBuilder<number>;
        static floatVal(arg0: $Supplier_<number>, arg1: $Consumer_<number>): $DataBindingBuilder<number>;
        name(arg0: string): $DataBindingBuilder<T>;
        name(): string;
        type(arg0: $Type): $DataBindingBuilder<T>;
        data(arg0: $Supplier_<T>, arg1: $Consumer_<T>): $DataBindingBuilder<T>;
        static component(arg0: $Supplier_<$Component>, arg1: $Consumer_<$Component>): $DataBindingBuilder<$Component>;
        static create<T>(arg0: $Supplier_<T>, arg1: $Consumer_<T>): $DataBindingBuilder<T>;
        static block(arg0: $Supplier_<$Block>, arg1: $Consumer_<$Block>): $DataBindingBuilder<$Block>;
        initialValue(arg0: T): $DataBindingBuilder<T>;
        build(arg0: boolean): $SimpleBinding<T>;
        build(): $SimpleBinding<T>;
        getter(arg0: $Supplier_<T>): $DataBindingBuilder<T>;
        setter(arg0: $Consumer_<T>): $DataBindingBuilder<T>;
        static string(arg0: $Supplier_<string>, arg1: $Consumer_<string>): $DataBindingBuilder<string>;
        static tag(arg0: $Supplier_<$Tag>, arg1: $Consumer_<$Tag>): $DataBindingBuilder<$Tag>;
        static fluidStack(arg0: $Supplier_<$FluidStack>, arg1: $Consumer_<$FluidStack>): $DataBindingBuilder<$FluidStack>;
        static intVal(arg0: $Supplier_<number>, arg1: $Consumer_<number>): $DataBindingBuilder<number>;
        static bool(arg0: $Supplier_<boolean>, arg1: $Consumer_<boolean>): $DataBindingBuilder<boolean>;
        s2cStrategy(arg0: $SyncStrategy_): $DataBindingBuilder<T>;
        c2sStrategy(arg0: $SyncStrategy_): $DataBindingBuilder<T>;
        static itemStack(arg0: $Supplier_<$ItemStack>, arg1: $Consumer_<$ItemStack>): $DataBindingBuilder<$ItemStack>;
        static intValS2C(arg0: $Supplier_<number>): $DataBindingBuilder<number>;
        static enumVal<T extends $Enum<never>>(arg0: $Class<T>, arg1: $Supplier_<T>, arg2: $Consumer_<T>): $DataBindingBuilder<T>;
        static fluidStackS2C(arg0: $Supplier_<$FluidStack>): $DataBindingBuilder<$FluidStack>;
        remoteSetter(arg0: $Consumer_<T>): $DataBindingBuilder<T>;
        static itemStackC2S(arg0: $Consumer_<$ItemStack>): $DataBindingBuilder<$ItemStack>;
        static floatValS2C(arg0: $Supplier_<number>): $DataBindingBuilder<number>;
        static componentS2C(arg0: $Supplier_<$Component>): $DataBindingBuilder<$Component>;
        static floatValC2S(arg0: $Consumer_<number>): $DataBindingBuilder<number>;
        remoteGetter(arg0: $Supplier_<T>): $DataBindingBuilder<T>;
        static fluidStackC2S(arg0: $Consumer_<$FluidStack>): $DataBindingBuilder<$FluidStack>;
        static componentC2S(arg0: $Consumer_<$Component>): $DataBindingBuilder<$Component>;
        static doubleValS2C(arg0: $Supplier_<number>): $DataBindingBuilder<number>;
        static doubleValC2S(arg0: $Consumer_<number>): $DataBindingBuilder<number>;
        static itemStackS2C(arg0: $Supplier_<$ItemStack>): $DataBindingBuilder<$ItemStack>;
        static shortValS2C(arg0: $Supplier_<number>): $DataBindingBuilder<number>;
        static shortValC2S(arg0: $Consumer_<number>): $DataBindingBuilder<number>;
        static longVal(arg0: $Supplier_<number>, arg1: $Consumer_<number>): $DataBindingBuilder<number>;
        static shortVal(arg0: $Supplier_<number>, arg1: $Consumer_<number>): $DataBindingBuilder<number>;
        static blockS2C(arg0: $Supplier_<$Block>): $DataBindingBuilder<$Block>;
        static byteValS2C(arg0: $Supplier_<number>): $DataBindingBuilder<number>;
        static charValC2S(arg0: $Consumer_<string>): $DataBindingBuilder<string>;
        static stringC2S(arg0: $Consumer_<string>): $DataBindingBuilder<string>;
        static longValS2C(arg0: $Supplier_<number>): $DataBindingBuilder<number>;
        static byteValC2S(arg0: $Consumer_<number>): $DataBindingBuilder<number>;
        static boolS2C(arg0: $Supplier_<boolean>): $DataBindingBuilder<boolean>;
        static tagS2C(arg0: $Supplier_<$Tag>): $DataBindingBuilder<$Tag>;
        static longValC2S(arg0: $Consumer_<number>): $DataBindingBuilder<number>;
        static charVal(arg0: $Supplier_<string>, arg1: $Consumer_<string>): $DataBindingBuilder<string>;
        static tagC2S(arg0: $Consumer_<$Tag>): $DataBindingBuilder<$Tag>;
        static intValC2S(arg0: $Consumer_<number>): $DataBindingBuilder<number>;
        static blockC2S(arg0: $Consumer_<$Block>): $DataBindingBuilder<$Block>;
        static stringS2C(arg0: $Supplier_<string>): $DataBindingBuilder<string>;
        static byteVal(arg0: $Supplier_<number>, arg1: $Consumer_<number>): $DataBindingBuilder<number>;
        static charValS2C(arg0: $Supplier_<string>): $DataBindingBuilder<string>;
        syncType(arg0: $Type): $DataBindingBuilder<T>;
        syncType(arg0: $Class<never>): $DataBindingBuilder<T>;
        static boolC2S(arg0: $Consumer_<boolean>): $DataBindingBuilder<boolean>;
        static enumValS2C<T extends $Enum<never>>(arg0: $Class<T>, arg1: $Supplier_<T>): $DataBindingBuilder<T>;
        static enumValC2S<T extends $Enum<never>>(arg0: $Class<T>, arg1: $Consumer_<T>): $DataBindingBuilder<T>;
    }
    export class $SimpleBinding<T> implements $IBinding<T> {
        getSyncValue(): $SyncValue<T>;
        registerListener(arg0: $Consumer_<T>): $ISubscription;
        s2cStrategy(): $SyncStrategy;
        c2sStrategy(): $SyncStrategy;
        setValueProvider(arg0: $Supplier_<T>): void;
        setServerDataSource(arg0: $IDataSource<T>): void;
        getServerDataSource(): $IDataSource<T>;
        getRemoteDataSource(): $IDataSource<T>;
        setRemoteDataSource(arg0: $IDataSource<T>): void;
        acceptS2C(): boolean;
        acceptC2S(): boolean;
        syncValue: $SyncValue<T>;
        isRemote: boolean;
        constructor(arg0: boolean, arg1: string, arg2: $Type, arg3: T, arg4: $SyncStrategy_, arg5: $SyncStrategy_);
        set valueProvider(value: $Supplier_<T>);
    }
    export class $ScrollDataSource<T> implements $IDataProvider<T>, $ITickable, $IPausable {
        getValue(): T;
        map<D>(arg0: $Function_<T, D>): $ScrollDataSource<D>;
        static of<T>(arg0: $List_<T>): $ScrollDataSource<T>;
        resume(): void;
        frequency(arg0: number): $ScrollDataSource<T>;
        frequency(): number;
        tick(): void;
        getCounter(): number;
        getData(): $List<T>;
        registerListener(arg0: $Consumer_<T>): $ISubscription;
        getListeners(): $List<$Consumer<T>>;
        getCurrent(): T;
        isPaused(): boolean;
        pause(): void;
        setPaused(arg0: boolean): void;
        setCurrent(arg0: T): void;
        checkUpdate(): void;
        setLastValue(arg0: T): void;
        getLastValue(): T;
        setCounter(arg0: number): void;
        registerListener(arg0: $Consumer_<T>, arg1: boolean): $ISubscription;
        togglePause(): void;
        get value(): T;
        get data(): $List<T>;
        get listeners(): $List<$Consumer<T>>;
    }
}
