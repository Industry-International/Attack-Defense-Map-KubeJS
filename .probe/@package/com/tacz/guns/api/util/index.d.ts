import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Record } from "@package/java/lang";

declare module "@package/com/tacz/guns/api/util" {
    export class $LuaNbtAccessor extends $Record {
        getBoolean(arg0: $CompoundTag_, arg1: string): boolean;
        putBoolean(arg0: string, arg1: boolean): void;
        getInt(arg0: string): number;
        putInt(arg0: string, arg1: number): void;
        getLong(arg0: string): number;
        putLong(arg0: string, arg1: number): void;
        getFloat(arg0: string): number;
        putFloat(arg0: string, arg1: number): void;
        getDouble(arg0: string): number;
        putDouble(arg0: string, arg1: number): void;
        contains(arg0: string): boolean;
        contains(arg0: string, arg1: number): boolean;
        static from(arg0: $ItemStack_): $LuaNbtAccessor;
        static from(arg0: $CompoundTag_): $LuaNbtAccessor;
        getString(arg0: string): string;
        putString(arg0: string, arg1: string): void;
        getCompound(arg0: string): $LuaNbtAccessor;
        nbt(): $CompoundTag;
        putCompound(arg0: string, arg1: $LuaNbtAccessor_): void;
        newCompoundTag(): $LuaNbtAccessor;
        constructor(nbt: $CompoundTag_);
    }
}
