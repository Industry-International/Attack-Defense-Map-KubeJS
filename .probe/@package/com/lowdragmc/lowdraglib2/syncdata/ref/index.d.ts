import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $Predicate_ } from "@package/java/util/function";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $ManagedKey } from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/ref" {
    export class $IRef<TYPE> {
    }
    export interface $IRef<TYPE> {
        update(): void;
        getKey(): $ManagedKey;
        getAccessor(): $IAccessor<TYPE>;
        writeRaw(arg0: TYPE): void;
        writeSyncFromStream(arg0: $RegistryFriendlyByteBuf): void;
        isSyncDirty(): boolean;
        readInitialSync<T>(arg0: $DynamicOps<T>): T;
        markAsDirty(): void;
        isPersistedDirty(): boolean;
        readPersisted<T>(arg0: $DynamicOps<T>): T;
        setOnSyncListener(arg0: $BooleanConsumer_): void;
        writeInitialSync<T>(arg0: $DynamicOps<T>, arg1: T): void;
        getPersistedKey(): string;
        clearSyncDirty(): void;
        writePersisted<T>(arg0: $DynamicOps<T>, arg1: T): void;
        readSyncToStream(arg0: $RegistryFriendlyByteBuf): void;
        readRaw(): TYPE;
        clearPersistedDirty(): void;
        setOnPersistedListener(arg0: $BooleanConsumer_): void;
        setPersistedPrefixName(arg0: string): void;
        setConditionalSynced(arg0: $Predicate_<TYPE>): void;
        getPersistedPrefixName(): string;
        get key(): $ManagedKey;
        get accessor(): $IAccessor<TYPE>;
        get syncDirty(): boolean;
        get persistedDirty(): boolean;
        set onSyncListener(value: $BooleanConsumer_);
        get persistedKey(): string;
        set onPersistedListener(value: $BooleanConsumer_);
        set conditionalSynced(value: $Predicate_<TYPE>);
    }
}
