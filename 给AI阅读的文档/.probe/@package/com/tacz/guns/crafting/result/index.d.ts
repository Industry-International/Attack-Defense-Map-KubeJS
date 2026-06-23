import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $DynamicOps, $Codec, $DataResult } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $GunResult } from "@package/com/tacz/guns/resource/pojo/data/recipe";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/tacz/guns/crafting/result" {
    export class $GunSmithTableResult {
        static decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<$GunSmithTableResult, T>>;
        static encode<T>(arg0: $GunSmithTableResult, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        init(arg0: $HolderLookup$Provider): void;
        getResult(): $ItemStack;
        getGroup(): $ResourceLocation;
        static AMMO: string;
        static GUN: string;
        static ATTACHMENT: string;
        static CODEC: $Codec<$GunSmithTableResult>;
        static CUSTOM: string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GunSmithTableResult>;
        constructor(arg0: $ItemStack_, arg1: $ResourceLocation_);
        constructor(arg0: $RawGunTableResult, arg1: $ResourceLocation_);
        constructor(arg0: $RawGunTableResult);
        get result(): $ItemStack;
        get group(): $ResourceLocation;
    }
    export class $RawGunTableResult {
        static init(arg0: $HolderLookup$Provider, arg1: $RawGunTableResult): $GunSmithTableResult;
        setNbt(arg0: $CompoundTag_): void;
        setExtraData(arg0: $GunResult): void;
        constructor(arg0: string, arg1: $ResourceLocation_, arg2: number);
        set nbt(value: $CompoundTag_);
        set extraData(value: $GunResult);
    }
}
