import { $Path } from "@package/java/nio/file";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Collection, $Collection_, $List } from "@package/java/util";

declare module "@package/mezz/jei/api/runtime/config" {
    export class $IJeiConfigFile {
    }
    export interface $IJeiConfigFile {
        getPath(): $Path;
        getCategories(): $List<$IJeiConfigCategory>;
        get path(): $Path;
        get categories(): $List<$IJeiConfigCategory>;
    }
    export class $IJeiConfigValue<T> {
    }
    export interface $IJeiConfigValue<T> {
        /**
         * @deprecated
         */
        getDescription(): string;
        getName(): string;
        getValue(): T;
        set(arg0: T): boolean;
        getDefaultValue(): T;
        getLocalizedName(): $Component;
        getLocalizedDescription(): $Component;
        getSerializer(): $IJeiConfigValueSerializer<T>;
        get description(): string;
        get name(): string;
        get value(): T;
        get defaultValue(): T;
        get localizedName(): $Component;
        get localizedDescription(): $Component;
        get serializer(): $IJeiConfigValueSerializer<T>;
    }
    export class $IJeiConfigManager {
    }
    export interface $IJeiConfigManager {
        getConfigFiles(): $Collection<$IJeiConfigFile>;
        get configFiles(): $Collection<$IJeiConfigFile>;
    }
    /**
     * Values that may be interpreted as {@link $IJeiConfigManager}.
     */
    export type $IJeiConfigManager_ = (() => $Collection_<$IJeiConfigFile>);
    export class $IJeiConfigValueSerializer<T> {
    }
    export interface $IJeiConfigValueSerializer<T> {
        isValid(arg0: T): boolean;
        deserialize(arg0: string): $IJeiConfigValueSerializer$IDeserializeResult<T>;
        serialize(arg0: T): string;
        getValidValuesDescription(): string;
        getAllValidValues(): ($Collection<T>) | undefined;
        get validValuesDescription(): string;
        get allValidValues(): ($Collection<T>) | undefined;
    }
    export class $IJeiConfigCategory {
    }
    export interface $IJeiConfigCategory {
        getName(): string;
        getConfigValues(): $Collection<$IJeiConfigValue<never>>;
        get name(): string;
        get configValues(): $Collection<$IJeiConfigValue<never>>;
    }
}
