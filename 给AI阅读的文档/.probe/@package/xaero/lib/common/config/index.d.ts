import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $Iterable } from "@package/java/lang";
export * as option from "@package/xaero/lib/common/config/option";
export * as single from "@package/xaero/lib/common/config/single";
export * as channel from "@package/xaero/lib/common/config/channel";
export * as listener from "@package/xaero/lib/common/config/listener";
export * as server from "@package/xaero/lib/common/config/server";
export * as profile from "@package/xaero/lib/common/config/profile";
export * as sync from "@package/xaero/lib/common/config/sync";

declare module "@package/xaero/lib/common/config" {
    export class $Config {
        reset(): void;
        get<T>(arg0: $ConfigOption<T>): T;
        set<T>(arg0: $ConfigOption<T>, arg1: T): T;
        getFailedSerializedValue(arg0: $ConfigOption<never>): string;
        addFailedSerializedValue<T>(arg0: $ConfigOption<T>, arg1: string): void;
        getRemovedLargeOptions(): $Iterable<$ConfigOption<never>>;
        getChangeListener(): $IConfigChangeListener;
        isAllowNullValues(): boolean;
        copyOptionsFrom(arg0: $Config): void;
        setOptionDefault<T>(arg0: $ConfigOption<T>): void;
        setDefaults(): void;
        clearDirtyOptions(): void;
        copyOptionFrom<T>(arg0: $ConfigOption<T>, arg1: $Config): void;
        getChangeCount(): number;
        usedOptions(): $Iterable<$ConfigOption<never>>;
        getDirtyOptions(): $Iterable<$ConfigOption<never>>;
        setChangeListener(arg0: $IConfigChangeListener): void;
        postSave(): void;
        get removedLargeOptions(): $Iterable<$ConfigOption<never>>;
        get allowNullValues(): boolean;
        set optionDefault(value: $ConfigOption<T>);
        get changeCount(): number;
        get dirtyOptions(): $Iterable<$ConfigOption<never>>;
    }
}
