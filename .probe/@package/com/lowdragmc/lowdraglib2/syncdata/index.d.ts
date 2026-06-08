import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $ManagedKey } from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
import { $IRef } from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";
import { $Field, $Type } from "@package/java/lang/reflect";
import { $ByteBuf } from "@package/io/netty/buffer";
export * as accessor from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
export * as field from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
export * as ref from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata" {
    export class $IPersistedSerializable {
    }
    export interface $IPersistedSerializable extends $INBTSerializable<$CompoundTag> {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        writeToBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        beforeDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterDeserialize(): void;
        beforeSerialize(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
    }
    export class $SyncValueHolder<T> {
        getValue(): T;
        setValue(arg0: T): void;
        static getValueField(): $Field;
        managedKey: $ManagedKey;
        ref: $IRef<never>;
        type: $Type;
        constructor(arg0: string, arg1: $Type, arg2: T);
        static get valueField(): $Field;
    }
    export class $ISubscription {
    }
    export interface $ISubscription {
        andThen(arg0: $ISubscription_): $ISubscription;
        unsubscribe(): void;
    }
    /**
     * Values that may be interpreted as {@link $ISubscription}.
     */
    export type $ISubscription_ = (() => void);
}
