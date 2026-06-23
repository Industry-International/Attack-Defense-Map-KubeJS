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
        writeSyncFromStream(arg0: $RegistryFriendlyByteBuf): void;
        readInitialSync<T>(arg0: $DynamicOps<T>): T;
        markAsDirty(): void;
        isSyncDirty(): boolean;
        clearSyncDirty(): void;
        readPersisted<T>(arg0: $DynamicOps<T>): T;
        getPersistedKey(): string;
        writePersisted<T>(arg0: $DynamicOps<T>, arg1: T): void;
        writeInitialSync<T>(arg0: $DynamicOps<T>, arg1: T): void;
        isPersistedDirty(): boolean;
        setOnSyncListener(arg0: $BooleanConsumer_): void;
        readRaw(): TYPE;
        writeRaw(arg0: TYPE): void;
        getPersistedPrefixName(): string;
        clearPersistedDirty(): void;
        setPersistedPrefixName(arg0: string): void;
        setConditionalSynced(arg0: $Predicate_<TYPE>): void;
        setOnPersistedListener(arg0: $BooleanConsumer_): void;
        readSyncToStream(arg0: $RegistryFriendlyByteBuf): void;
        get key(): $ManagedKey;
        get accessor(): $IAccessor<TYPE>;
        get syncDirty(): boolean;
        get persistedKey(): string;
        get persistedDirty(): boolean;
        set onSyncListener(value: $BooleanConsumer_);
        set conditionalSynced(value: $Predicate_<TYPE>);
        set onPersistedListener(value: $BooleanConsumer_);
    }
}
