import { $Consumer_, $BiFunction } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator, $List } from "@package/java/util";
import { $ConfigValueType } from "@package/xaero/lib/common/config/option/value/type";
export * as value from "@package/xaero/lib/common/config/option/value";

declare module "@package/xaero/lib/common/config/option" {
    export class $ConfigOption<T> {
        getId(): string;
        getDefaultValue(): T;
        getDisplayName(): $Component;
        isValidValue(arg0: T): boolean;
        isOverridable(): boolean;
        getValueType(): $ConfigValueType<T>;
        shouldSaveDefaultValue(): boolean;
        getDisplayGetter(): $BiFunction<$ConfigOption<T>, T, $Component>;
        skipConfigReset(): boolean;
        getTooltip(): $Component;
        get id(): string;
        get defaultValue(): T;
        get displayName(): $Component;
        get overridable(): boolean;
        get valueType(): $ConfigValueType<T>;
        get displayGetter(): $BiFunction<$ConfigOption<T>, T, $Component>;
        get tooltip(): $Component;
    }
    export class $ConfigOptionManager implements $Iterable<$ConfigOption<never>> {
        get(arg0: string): $ConfigOption<never>;
        iterator(): $Iterator<$ConfigOption<never>>;
        register(arg0: $ConfigOption<never>): void;
        freeze(): void;
        spliterator(): $Spliterator<$ConfigOption<never>>;
        forEach(arg0: $Consumer_<$ConfigOption<never>>): void;
        logger: $Logger;
        [Symbol.iterator](): Iterator<$ConfigOption<never>>
    }
    export class $IndexedConfigOption<T> extends $ConfigOption<T> {
        getValidValues(): $List<T>;
        get validValues(): $List<T>;
    }
    export class $BooleanConfigOption extends $IndexedConfigOption<boolean> {
    }
}
