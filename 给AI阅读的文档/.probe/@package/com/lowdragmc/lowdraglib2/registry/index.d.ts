import { $Annotation } from "@package/java/lang/annotation";
import { $Consumer_, $Predicate_, $BiFunction_, $Supplier, $Function } from "@package/java/util/function";
import { $LDLRegisterClient, $LDLRegister } from "@package/com/lowdragmc/lowdraglib2/registry/annotation";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record, $Object, $Iterable, $Class } from "@package/java/lang";
import { $Comparator, $Spliterator, $Iterator, $Map_, $Map, $Map$Entry, $Set } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as annotation from "@package/com/lowdragmc/lowdraglib2/registry/annotation";

declare module "@package/com/lowdragmc/lowdraglib2/registry" {
    export class $ILDLRegister<T extends $ILDLRegister<T, V>, V> {
    }
    export interface $ILDLRegister<T extends $ILDLRegister<T, V>, V> {
        name(): string;
        group(): string;
        registryName(): $ResourceLocation;
        getRegistry(): $AutoRegistry$LDLibRegister<T, V>;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegister, T, V>) | undefined;
        getRegisterUI(): $LDLRegister;
        getChatComponent(): $Component;
        getTranslateKey(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegister, T, V>;
        get registry(): $AutoRegistry$LDLibRegister<T, V>;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegister, T, V>) | undefined;
        get registerUI(): $LDLRegister;
        get chatComponent(): $Component;
        get translateKey(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegister, T, V>;
    }
    export class $AutoRegistry$LDLibRegisterClient<C extends $ILDLRegisterClient<any, any>, V> extends $AutoRegistry<$LDLRegisterClient, C, V> {
        static create<C extends $ILDLRegisterClient<any, any>, V>(arg0: $ResourceLocation_, arg1: $Class<C>, arg2: $BiFunction_<$LDLRegisterClient, $Class<C>, V>): $AutoRegistry$LDLibRegisterClient<C, V>;
        static REGISTERED: $Map<$ResourceLocation, $LDLRegistry<never, never>>;
    }
    export class $AutoRegistry$LDLibRegister<C extends $ILDLRegister<any, any>, V> extends $AutoRegistry<$LDLRegister, C, V> {
        static create<C extends $ILDLRegister<any, any>, V>(arg0: $ResourceLocation_, arg1: $Class<C>, arg2: $BiFunction_<$LDLRegister, $Class<C>, V>): $AutoRegistry$LDLibRegister<C, V>;
        static REGISTERED: $Map<$ResourceLocation, $LDLRegistry<never, never>>;
    }
    export class $ILDLRegisterClient<T extends $ILDLRegisterClient<T, V>, V> {
    }
    export interface $ILDLRegisterClient<T extends $ILDLRegisterClient<T, V>, V> {
        name(): string;
        group(): string;
        registryName(): $ResourceLocation;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<T, V>;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, T, V>) | undefined;
        getChatComponent(): $Component;
        getTranslateKey(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, T, V>;
        get registry(): $AutoRegistry$LDLibRegisterClient<T, V>;
        get registerUIClient(): $LDLRegisterClient;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, T, V>) | undefined;
        get chatComponent(): $Component;
        get translateKey(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, T, V>;
    }
    export class $RegistrationEnvironment extends $Enum<$RegistrationEnvironment> {
        shouldRegister(): boolean;
        static shouldRegister(arg0: $Map_<string, $Object>): boolean;
        static values(): $RegistrationEnvironment[];
        static valueOf(arg0: string): $RegistrationEnvironment;
        static PRODUCTION_ONLY: $RegistrationEnvironment;
        static DEV_ONLY: $RegistrationEnvironment;
        static MANUAL: $RegistrationEnvironment;
        static ALWAYS: $RegistrationEnvironment;
    }
    /**
     * Values that may be interpreted as {@link $RegistrationEnvironment}.
     */
    export type $RegistrationEnvironment_ = "always" | "dev_only" | "production_only" | "manual";
    export class $AutoRegistry$Holder<A extends $Annotation, C, V> extends $Record {
        clazz(): $Class<C>;
        value(): V;
        static of<A extends $Annotation, C, V>(arg0: A, arg1: $Class<C>, arg2: V): $AutoRegistry$Holder<A, C, V>;
        annotation(): A;
        constructor(annotation: A, clazz: $Class<C>, value: V);
    }
    export class $LDLRegistry$String<V> extends $LDLRegistry<string, V> {
        static REGISTERED: $Map<$ResourceLocation, $LDLRegistry<never, never>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $AutoRegistry<A extends $Annotation, C, V> extends $LDLRegistry$String<$AutoRegistry$Holder<A, C, V>> {
        static create<A extends $Annotation, C, V>(arg0: $ResourceLocation_, arg1: $Class<A>, arg2: $Class<C>, arg3: $Predicate_<$Map<string, $Object>>, arg4: $Predicate_<$Class<C>>, arg5: $BiFunction_<A, $Class<C>, string>, arg6: $BiFunction_<A, $Class<C>, V>, arg7: $Comparator<$AutoRegistry$Holder_<A, C, V>>): $AutoRegistry<A, C, V>;
        static oneArgCreator<A1, T>(arg0: $Class<T>, arg1: $Class<A1>): $Function<A1, T>;
        autoRegister(): $AutoRegistry<A, C, $AutoRegistry$Holder<A, C, V>>;
        static noArgsInstance<T>(arg0: $Annotation, arg1: $Class<T>): T;
        static noArgsCreator<T>(arg0: $Annotation, arg1: $Class<T>): $Supplier<T>;
        static REGISTERED: $Map<$ResourceLocation, $LDLRegistry<never, never>>;
    }
    export class $LDLRegistry<K, V> implements $Iterable<V> {
        remove(arg0: K): boolean;
        get(arg0: K): V;
        values(): $Set<V>;
        replace(arg0: K, arg1: V): V;
        iterator(): $Iterator<V>;
        getKey(arg0: V): K;
        register(arg0: K, arg1: V): void;
        keys(): $Set<K>;
        getOrDefault(arg0: K, arg1: V): V;
        entries(): $Set<$Map$Entry<K, V>>;
        isFrozen(): boolean;
        freeze(): void;
        getOptional(arg0: K): (V) | undefined;
        registry(): $Map<K, V>;
        getMissingKey(): K;
        registerOrOverride(arg0: K, arg1: V): V;
        getOrDefaultKey(arg0: V, arg1: K): K;
        unfreeze(): void;
        codec(): $Codec<V>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, V>;
        containKey(arg0: K): boolean;
        getRegistryName(): $ResourceLocation;
        saveToNBT(arg0: V): $Tag;
        writeBuf(arg0: V, arg1: $RegistryFriendlyByteBuf): void;
        readBuf(arg0: $RegistryFriendlyByteBuf): V;
        containValue(arg0: V): boolean;
        loadFromNBT(arg0: $Tag_): V;
        setMissingKey(arg0: K): $LDLRegistry<K, V>;
        optionalCodec(): $Codec<(V) | undefined>;
        spliterator(): $Spliterator<V>;
        forEach(arg0: $Consumer_<V>): void;
        static REGISTERED: $Map<$ResourceLocation, $LDLRegistry<never, never>>;
        constructor(arg0: $ResourceLocation_);
        [Symbol.iterator](): Iterator<V>
        get frozen(): boolean;
        get registryName(): $ResourceLocation;
    }
}
