import { $Function_ } from "@package/java/util/function";
import { $MutableLoadedConfig, $LoadedConfig } from "@package/net/blay09/mods/balm/api/config";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Class } from "@package/java/lang";
import { $List, $Set, $Set_, $List_ } from "@package/java/util";
import { $ConfigSchemaImpl, $ConfigCategoryImpl } from "@package/net/blay09/mods/balm/api/config/schema/impl";
import { $ConfiguredProperty, $ConfiguredDouble, $ConfiguredBoolean, $BalmConfigSchema, $ConfiguredEnum, $ConfiguredResourceLocation, $ConfiguredFloat, $ConfiguredInt, $ConfiguredLong, $ConfiguredString, $ConfiguredSet, $ConfiguredList } from "@package/net/blay09/mods/balm/api/config/schema";

declare module "@package/net/blay09/mods/balm/api/config/schema/builder" {
    export class $ResourceLocationConfigProperty extends $AbstractConfigProperty<$ResourceLocation> implements $ConfiguredResourceLocation {
        get(arg0: $LoadedConfig): $ResourceLocation;
        get(): $ResourceLocation;
        set(arg0: $ResourceLocation_): void;
        set(arg0: $MutableLoadedConfig, arg1: $ResourceLocation_): void;
        constructor(arg0: $ConfigPropertyBuilder, arg1: $ResourceLocation_);
    }
    export class $ConfigPropertyBuilder {
        comment(arg0: string): $ConfigPropertyBuilder;
        stringOf(arg0: string): $StringConfigProperty;
        listOf<T>(arg0: $Class<T>, arg1: $List_<T>): $ListConfigProperty<T>;
        setOf<T>(arg0: $Class<T>, arg1: $Set_<T>): $SetConfigProperty<T>;
        synced(): $ConfigPropertyBuilder;
        doubleOf(arg0: number): $DoubleConfigProperty;
        longOf(arg0: number): $LongConfigProperty;
        enumOf<T extends $Enum<T>>(arg0: T): $EnumConfigProperty<T>;
        intOf(arg0: number): $IntConfigProperty;
        boolOf(arg0: boolean): $BooleanConfigProperty;
        floatOf(arg0: number): $FloatConfigProperty;
        resourceLocationOf(arg0: $ResourceLocation_): $ResourceLocationConfigProperty;
        constructor(arg0: $ConfigSchemaImpl, arg1: string);
        constructor(arg0: $ConfigSchemaImpl, arg1: string, arg2: string);
    }
    export class $BooleanConfigProperty extends $AbstractConfigProperty<boolean> implements $ConfiguredBoolean {
        defaultValue(): boolean;
        get(arg0: $LoadedConfig): boolean;
        get(): boolean;
        set(arg0: boolean): void;
        set(arg0: $MutableLoadedConfig, arg1: boolean): void;
        static CODEC: $Codec<boolean>;
        constructor(arg0: $ConfigPropertyBuilder, arg1: boolean);
    }
    export class $ConfigCategory {
    }
    export interface $ConfigCategory {
        name(): string;
        properties(): $List<$ConfiguredProperty<never>>;
        comment(): string;
        parentSchema(): $BalmConfigSchema;
    }
    export class $ConfigCategoryBuilder {
    }
    export interface $ConfigCategoryBuilder extends $PropertyHolderBuilder {
        comment(arg0: string): $ConfigCategoryImpl;
        via<T>(arg0: $Function_<$ConfigCategoryBuilder, T>): T;
    }
    export class $LongConfigProperty extends $AbstractConfigProperty<number> implements $ConfiguredLong {
        defaultValue(): number;
        get(arg0: $LoadedConfig): number;
        get(): number;
        set(arg0: number): void;
        set(arg0: $MutableLoadedConfig, arg1: number): void;
        static CODEC: $Codec<number>;
        constructor(arg0: $ConfigPropertyBuilder, arg1: number);
    }
    export class $DoubleConfigProperty extends $AbstractConfigProperty<number> implements $ConfiguredDouble {
        defaultValue(): number;
        get(arg0: $LoadedConfig): number;
        get(): number;
        set(arg0: number): void;
        set(arg0: $MutableLoadedConfig, arg1: number): void;
        static CODEC: $Codec<number>;
        constructor(arg0: $ConfigPropertyBuilder, arg1: number);
    }
    export class $PropertyHolderBuilder {
    }
    export interface $PropertyHolderBuilder {
        property(arg0: string): $ConfigPropertyBuilder;
    }
    /**
     * Values that may be interpreted as {@link $PropertyHolderBuilder}.
     */
    export type $PropertyHolderBuilder_ = ((arg0: string) => $ConfigPropertyBuilder);
    export class $FloatConfigProperty extends $AbstractConfigProperty<number> implements $ConfiguredFloat {
        defaultValue(): number;
        get(arg0: $LoadedConfig): number;
        get(): number;
        set(arg0: number): void;
        set(arg0: $MutableLoadedConfig, arg1: number): void;
        static CODEC: $Codec<number>;
        constructor(arg0: $ConfigPropertyBuilder, arg1: number);
    }
    export class $StringConfigProperty extends $AbstractConfigProperty<string> implements $ConfiguredString {
        get(arg0: $LoadedConfig): string;
        get(): string;
        set(arg0: string): void;
        set(arg0: $MutableLoadedConfig, arg1: string): void;
        constructor(arg0: $ConfigPropertyBuilder, arg1: string);
    }
    export class $ListConfigProperty<T> extends $AbstractConfigProperty<$List<T>> implements $ConfiguredList<T> {
        nestedType(): $Class<T>;
        get(arg0: $LoadedConfig): $List<T>;
        get(): $List<T>;
        set(arg0: $List_<T>): void;
        set(arg0: $MutableLoadedConfig, arg1: $List_<T>): void;
        constructor(arg0: $ConfigPropertyBuilder, arg1: $Class<T>, arg2: $List_<T>);
    }
    export class $EnumConfigProperty<T extends $Enum<T>> extends $AbstractConfigProperty<T> implements $ConfiguredEnum<T> {
        get(arg0: $LoadedConfig): T;
        get(): T;
        set(arg0: T): void;
        set(arg0: $MutableLoadedConfig, arg1: T): void;
        constructor(arg0: $ConfigPropertyBuilder, arg1: T);
    }
    export class $IntConfigProperty extends $AbstractConfigProperty<number> implements $ConfiguredInt {
        defaultValue(): number;
        get(arg0: $LoadedConfig): number;
        get(): number;
        set(arg0: number): void;
        set(arg0: $MutableLoadedConfig, arg1: number): void;
        static CODEC: $Codec<number>;
        constructor(arg0: $ConfigPropertyBuilder, arg1: number);
    }
    export class $AbstractConfigProperty<T> implements $ConfiguredProperty<T> {
        name(): string;
        comment(): string;
        category(): string;
        synced(): boolean;
        parentSchema(): $ConfigSchemaImpl;
        getRaw(arg0: $LoadedConfig): T;
        setRaw(arg0: $MutableLoadedConfig, arg1: T): void;
        constructor(arg0: $ConfigPropertyBuilder);
    }
    export class $SetConfigProperty<T> extends $AbstractConfigProperty<$Set<T>> implements $ConfiguredSet<T> {
        nestedType(): $Class<T>;
        get(arg0: $LoadedConfig): $Set<T>;
        get(): $Set<T>;
        set(arg0: $Set_<T>): void;
        set(arg0: $MutableLoadedConfig, arg1: $Set_<T>): void;
        constructor(arg0: $ConfigPropertyBuilder, arg1: $Class<T>, arg2: $Set_<T>);
    }
}
