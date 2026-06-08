import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $List } from "@package/java/util";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/com/simibubi/create/content/logistics/packagerLink" {
    export class $RequestPromiseQueue {
        isEmpty(): boolean;
        add(arg0: $RequestPromise): void;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $Runnable_): $RequestPromiseQueue;
        tick(): void;
        flatten(arg0: boolean): $List<$RequestPromise>;
        itemEnteredSystem(arg0: $ItemStack_, arg1: number): void;
        setOnChanged(arg0: $Runnable_): void;
        getTotalPromisedAndRemoveExpired(arg0: $ItemStack_, arg1: number): number;
        forceClear(arg0: $ItemStack_): void;
        constructor(arg0: $Runnable_);
        get empty(): boolean;
        set onChanged(value: $Runnable_);
    }
}
