import { $LoadedConfig, $MutableLoadedConfig } from "@package/net/blay09/mods/balm/api/config";
import { $Codec } from "@package/com/mojang/serialization";
import { $ConfigCategory, $ConfigCategoryBuilder, $PropertyHolderBuilder } from "@package/net/blay09/mods/balm/api/config/schema/builder";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Class } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Set_, $List, $List_, $Collection, $Set } from "@package/java/util";
import { $ConfigSchemaImpl } from "@package/net/blay09/mods/balm/api/config/schema/impl";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as builder from "@package/net/blay09/mods/balm/api/config/schema/builder";
export * as impl from "@package/net/blay09/mods/balm/api/config/schema/impl";

declare module "@package/net/blay09/mods/balm/api/config/schema" {
    export class $ConfiguredInt {
    }
    export interface $ConfiguredInt extends $ConfiguredProperty<number> {
        get(arg0: $LoadedConfig): number;
        get(): number;
        set(arg0: number): void;
        set(arg0: $MutableLoadedConfig, arg1: number): void;
    }
    export class $ConfiguredString {
    }
    export interface $ConfiguredString extends $ConfiguredProperty<string> {
        get(arg0: $LoadedConfig): string;
        get(): string;
        set(arg0: string): void;
        set(arg0: $MutableLoadedConfig, arg1: string): void;
    }
    export class $ConfiguredFloat {
    }
    export interface $ConfiguredFloat extends $ConfiguredProperty<number> {
        get(arg0: $LoadedConfig): number;
        get(): number;
        set(arg0: number): void;
        set(arg0: $MutableLoadedConfig, arg1: number): void;
    }
    export class $ConfiguredLong {
    }
    export interface $ConfiguredLong extends $ConfiguredProperty<number> {
        get(arg0: $LoadedConfig): number;
        get(): number;
        set(arg0: number): void;
        set(arg0: $MutableLoadedConfig, arg1: number): void;
    }
    export class $ConfiguredBoolean {
    }
    export interface $ConfiguredBoolean extends $ConfiguredProperty<boolean> {
        get(arg0: $LoadedConfig): boolean;
        get(): boolean;
        set(arg0: boolean): void;
        set(arg0: $MutableLoadedConfig, arg1: boolean): void;
    }
    export class $ConfiguredResourceLocation {
    }
    export interface $ConfiguredResourceLocation extends $ConfiguredProperty<$ResourceLocation> {
        get(arg0: $LoadedConfig): $ResourceLocation;
        get(): $ResourceLocation;
        set(arg0: $ResourceLocation_): void;
        set(arg0: $MutableLoadedConfig, arg1: $ResourceLocation_): void;
    }
    export class $ConfiguredSet<T> {
    }
    export interface $ConfiguredSet<T> extends $ConfiguredProperty<$Set<T>>, $NestedTypeHolder<T> {
        get(arg0: $LoadedConfig): $Set<$Set<T>>;
        get(): $Set<$Set<T>>;
        set(arg0: $Set_<$Set_<T>>): void;
        set(arg0: $MutableLoadedConfig, arg1: $Set_<$Set_<T>>): void;
    }
    export class $ConfiguredProperty<T> {
    }
    export interface $ConfiguredProperty<T> {
        name(): string;
        type(): $Class<never>;
        comment(): string;
        defaultValue(): T;
        category(): string;
        getRaw(arg0: $LoadedConfig): T;
        codec(): $Codec<T>;
        streamCodec(): $StreamCodec<$ByteBuf, T>;
        setRaw(arg0: $MutableLoadedConfig, arg1: T): void;
        synced(): boolean;
        parentSchema(): $BalmConfigSchema;
    }
    export class $ConfiguredDouble {
    }
    export interface $ConfiguredDouble extends $ConfiguredProperty<number> {
        get(arg0: $LoadedConfig): number;
        get(): number;
        set(arg0: number): void;
        set(arg0: $MutableLoadedConfig, arg1: number): void;
    }
    export class $ConfiguredEnum<T extends $Enum<T>> {
    }
    export interface $ConfiguredEnum<T extends $Enum<T>> extends $ConfiguredProperty<T> {
        get(arg0: $LoadedConfig): T;
        get(): T;
        set(arg0: T): void;
        set(arg0: $MutableLoadedConfig, arg1: T): void;
    }
    export class $ConfigSchemaBuilder {
    }
    export interface $ConfigSchemaBuilder extends $PropertyHolderBuilder, $BalmConfigSchema {
        category(arg0: string): $ConfigCategoryBuilder;
    }
    export class $BalmConfigSchema {
        static create(arg0: $ResourceLocation_): $ConfigSchemaImpl;
    }
    export interface $BalmConfigSchema {
        defaults(): $LoadedConfig;
        identifier(): $ResourceLocation;
        categories(): $Collection<$ConfigCategory>;
        findProperty(arg0: string, arg1: string): $ConfiguredProperty<never>;
        rootProperties(): $Collection<$ConfiguredProperty<never>>;
        findRootProperty(arg0: string): $ConfiguredProperty<never>;
    }
    export class $ConfiguredList<T> {
    }
    export interface $ConfiguredList<T> extends $ConfiguredProperty<$List<T>>, $NestedTypeHolder<T> {
        get(arg0: $LoadedConfig): $List<$List<T>>;
        get(): $List<$List<T>>;
        set(arg0: $List_<$List_<T>>): void;
        set(arg0: $MutableLoadedConfig, arg1: $List_<$List_<T>>): void;
    }
}
