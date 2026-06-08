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
        readRaw(): TYPE;
        writeRaw(arg0: TYPE): void;
        isPersistedDirty(): boolean;
        clearSyncDirty(): void;
        readSyncToStream(arg0: $RegistryFriendlyByteBuf): void;
        isSyncDirty(): boolean;
        getPersistedKey(): string;
        readPersisted<T>(arg0: $DynamicOps<T>): T;
        markAsDirty(): void;
        writePersisted<T>(arg0: $DynamicOps<T>, arg1: T): void;
        readInitialSync<T>(arg0: $DynamicOps<T>): T;
        writeInitialSync<T>(arg0: $DynamicOps<T>, arg1: T): void;
        setOnSyncListener(arg0: $BooleanConsumer_): void;
        setConditionalSynced(arg0: $Predicate_<TYPE>): void;
        writeSyncFromStream(arg0: $RegistryFriendlyByteBuf): void;
        clearPersistedDirty(): void;
        getPersistedPrefixName(): string;
        setOnPersistedListener(arg0: $BooleanConsumer_): void;
        setPersistedPrefixName(arg0: string): void;
        get key(): $ManagedKey;
        get accessor(): $IAccessor<TYPE>;
        get persistedDirty(): boolean;
        get syncDirty(): boolean;
        get persistedKey(): string;
        set onSyncListener(value: $BooleanConsumer_);
        set conditionalSynced(value: $Predicate_<TYPE>);
        set onPersistedListener(value: $BooleanConsumer_);
    }
}
