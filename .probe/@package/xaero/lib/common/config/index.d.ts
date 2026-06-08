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
        addFailedSerializedValue<T>(arg0: $ConfigOption<T>, arg1: string): void;
        getRemovedLargeOptions(): $Iterable<$ConfigOption<never>>;
        getFailedSerializedValue(arg0: $ConfigOption<never>): string;
        usedOptions(): $Iterable<$ConfigOption<never>>;
        setChangeListener(arg0: $IConfigChangeListener): void;
        setOptionDefault<T>(arg0: $ConfigOption<T>): void;
        setDefaults(): void;
        getDirtyOptions(): $Iterable<$ConfigOption<never>>;
        getChangeListener(): $IConfigChangeListener;
        copyOptionFrom<T>(arg0: $ConfigOption<T>, arg1: $Config): void;
        clearDirtyOptions(): void;
        isAllowNullValues(): boolean;
        getChangeCount(): number;
        copyOptionsFrom(arg0: $Config): void;
        postSave(): void;
        get removedLargeOptions(): $Iterable<$ConfigOption<never>>;
        set optionDefault(value: $ConfigOption<T>);
        get dirtyOptions(): $Iterable<$ConfigOption<never>>;
        get allowNullValues(): boolean;
        get changeCount(): number;
    }
}
