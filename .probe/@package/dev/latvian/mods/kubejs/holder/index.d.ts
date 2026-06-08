import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Holder, $HolderSet$ListBacked, $Registry, $Holder$Reference, $HolderLookup$RegistryLookup, $HolderSet } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Pattern } from "@package/java/util/regex";
import { $Object } from "@package/java/lang";
import { $ICustomHolderSet, $HolderSetType } from "@package/net/neoforged/neoforge/registries/holdersets";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/holder" {
    export class $HolderWrapper {
        static wrap(from: $Object, param: $TypeInfo_): $Holder<never>;
        static wrapSimpleSet<T>(registry: $Registry<T>, from: $Object): $HolderSet<T>;
        static wrapRef(from: $Object, param: $TypeInfo_): $Holder$Reference<never>;
        static wrapSet(from: $Object, param: $TypeInfo_): $HolderSet<never>;
        static HOLDER: $TypeInfo;
        static HOLDER_SET: $TypeInfo;
    }
    export interface $HolderWrapper {
    }
    export class $KubeJSHolderSets {
        static NAMESPACE: $Holder<$HolderSetType>;
        static REGEX: $Holder<$HolderSetType>;
        static REGISTRY: $DeferredRegister<$HolderSetType>;
    }
    export interface $KubeJSHolderSets {
    }
    export class $RegExHolderSet<T> extends $HolderSet$ListBacked<T> implements $ICustomHolderSet<T> {
        type(): $HolderSetType;
        static of<T>(registryLookup: $HolderLookup$RegistryLookup<T>, pattern: $Pattern): $HolderSet<T>;
        static codec<T>(registryKey: $ResourceKey_<$Registry<T>>): $MapCodec<$RegExHolderSet<T>>;
        static streamCodec<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $RegExHolderSet<T>>;
        registryLookup: $HolderLookup$RegistryLookup<T>;
        pattern: $Pattern;
    }
    export class $NamespaceHolderSet<T> extends $HolderSet$ListBacked<T> implements $ICustomHolderSet<T> {
        type(): $HolderSetType;
        static of<T>(registryLookup: $HolderLookup$RegistryLookup<T>, namespace: string): $HolderSet<T>;
        static codec<T>(registryKey: $ResourceKey_<$Registry<T>>): $MapCodec<$NamespaceHolderSet<T>>;
        static streamCodec<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $NamespaceHolderSet<T>>;
        registryLookup: $HolderLookup$RegistryLookup<T>;
        namespace: string;
    }
}
