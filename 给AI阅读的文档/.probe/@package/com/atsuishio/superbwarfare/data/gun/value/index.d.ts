import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Function_ } from "@package/java/util/function";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Enum } from "@package/java/lang";
import { $TagValue } from "@package/com/atsuishio/superbwarfare/data/gun/value/base";
export * as base from "@package/com/atsuishio/superbwarfare/data/gun/value/base";

declare module "@package/com/atsuishio/superbwarfare/data/gun/value" {
    export class $IntValue {
        reset(): void;
        get(): number;
        add(arg0: number): void;
        set(arg0: number): void;
        getDefaultValue(): number;
        setDefaultValue(arg0: number): void;
        constructor(arg0: $CompoundTag_, arg1: string, arg2: number);
        constructor(arg0: $CompoundTag_, arg1: string, arg2: number, arg3: number, arg4: $DefaultConstructorMarker);
    }
    export class $DoubleValue {
        reset(): void;
        get(): number;
        add(arg0: number): void;
        set(arg0: number): void;
        getDefaultValue(): number;
        setDefaultValue(arg0: number): void;
        constructor(arg0: $CompoundTag_, arg1: string, arg2: number);
        constructor(arg0: $CompoundTag_, arg1: string, arg2: number, arg3: number, arg4: $DefaultConstructorMarker);
    }
    export class $AttachmentType extends $Enum<$AttachmentType> {
        static values(): $AttachmentType[];
        static valueOf(arg0: string): $AttachmentType;
        static getEntries(): $EnumEntries<$AttachmentType>;
        getAttachmentName(): string;
        static MAGAZINE: $AttachmentType;
        static GRIP: $AttachmentType;
        static SCOPE: $AttachmentType;
        static BARREL: $AttachmentType;
        static STOCK: $AttachmentType;
        static get entries(): $EnumEntries<$AttachmentType>;
        get attachmentName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AttachmentType}.
     */
    export type $AttachmentType_ = "scope" | "magazine" | "barrel" | "stock" | "grip";
    export class $Timer {
        getName(): string;
        reset(): void;
        get(): number;
        add(arg0: number): void;
        set(arg0: number): void;
        reduce(): void;
        constructor(arg0: $CompoundTag_, arg1: string);
        get name(): string;
    }
    export class $StringEnumValue<T extends $Enum<T>> implements $TagValue<T> {
        reset(): void;
        get(): T;
        set(arg0: T): void;
        getDefaultValue(): T;
        constructor(arg0: $CompoundTag_, arg1: string, arg2: T, arg3: $Function_<string, T>);
        get defaultValue(): T;
    }
    export class $ReloadState extends $Enum<$ReloadState> {
        static values(): $ReloadState[];
        static valueOf(arg0: string): $ReloadState;
        static getEntries(): $EnumEntries<$ReloadState>;
        static NORMAL_RELOADING: $ReloadState;
        static EMPTY_RELOADING: $ReloadState;
        static NOT_RELOADING: $ReloadState;
        static get entries(): $EnumEntries<$ReloadState>;
    }
    /**
     * Values that may be interpreted as {@link $ReloadState}.
     */
    export type $ReloadState_ = "not_reloading" | "normal_reloading" | "empty_reloading";
    export class $BooleanValue implements $TagValue<boolean> {
        reset(): void;
        set(arg0: boolean): void;
        get(): boolean;
        getDefaultValue(): boolean;
        constructor(arg0: $CompoundTag_, arg1: string, arg2: boolean);
        constructor(arg0: $CompoundTag_, arg1: string, arg2: boolean, arg3: number, arg4: $DefaultConstructorMarker);
        get defaultValue(): boolean;
    }
    export class $Starter {
        start(): boolean;
        finish(): void;
        shouldStart(): boolean;
        markStart(): void;
        constructor(arg0: $CompoundTag_, arg1: string);
    }
    export class $StringValue implements $TagValue<string> {
        reset(): void;
        set(arg0: string): void;
        get(): string;
        getDefaultValue(): string;
        constructor(arg0: $CompoundTag_, arg1: string, arg2: string);
        constructor(arg0: $CompoundTag_, arg1: string, arg2: string, arg3: number, arg4: $DefaultConstructorMarker);
        get defaultValue(): string;
    }
}
