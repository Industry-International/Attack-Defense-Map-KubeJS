import { $Predicate } from "@package/java/util/function";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $ManagedKey } from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
import { $IRef } from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Object, $Class } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/accessor" {
    export class $IAccessor<TYPE> {
    }
    export interface $IAccessor<TYPE> extends $Predicate<$Class<never>> {
        test(arg0: $Class<never>): boolean;
        isReadOnly(): boolean;
        readFieldToStream(arg0: $RegistryFriendlyByteBuf, arg1: $IRef<TYPE>): void;
        createRef(arg0: $ManagedKey, arg1: $Object): $IRef<TYPE>;
        readField<T>(arg0: $DynamicOps<T>, arg1: $IRef<TYPE>): T;
        writeField<T>(arg0: $DynamicOps<T>, arg1: $IRef<TYPE>, arg2: T): void;
        writeFieldFromStream(arg0: $RegistryFriendlyByteBuf, arg1: $IRef<TYPE>): void;
        get readOnly(): boolean;
    }
}
