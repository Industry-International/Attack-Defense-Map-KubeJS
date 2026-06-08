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
        readSyncToStream(arg0: $RegistryFriendlyByteBuf): void;
        setConditionalSynced(arg0: $Predicate_<TYPE>): void;
        clearPersistedDirty(): void;
        setPersistedPrefixName(arg0: string): void;
        setOnPersistedListener(arg0: $BooleanConsumer_): void;
        getPersistedPrefixName(): string;
        readRaw(): TYPE;
        setOnSyncListener(arg0: $BooleanConsumer_): void;
        markAsDirty(): void;
        isPersistedDirty(): boolean;
        readInitialSync<T>(arg0: $DynamicOps<T>): T;
        isSyncDirty(): boolean;
        writePersisted<T>(arg0: $DynamicOps<T>, arg1: T): void;
        writeInitialSync<T>(arg0: $DynamicOps<T>, arg1: T): void;
        clearSyncDirty(): void;
        getPersistedKey(): string;
        readPersisted<T>(arg0: $DynamicOps<T>): T;
        writeSyncFromStream(arg0: $RegistryFriendlyByteBuf): void;
        writeRaw(arg0: TYPE): void;
        get key(): $ManagedKey;
        get accessor(): $IAccessor<TYPE>;
        set conditionalSynced(value: $Predicate_<TYPE>);
        set onPersistedListener(value: $BooleanConsumer_);
        set onSyncListener(value: $BooleanConsumer_);
        get persistedDirty(): boolean;
        get syncDirty(): boolean;
        get persistedKey(): string;
    }
}
