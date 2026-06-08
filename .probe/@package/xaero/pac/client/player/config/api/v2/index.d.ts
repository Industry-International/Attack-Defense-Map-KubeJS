import { $Function, $BiPredicate } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IPlayerConfigOptionSpecAPI } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $Object, $Class } from "@package/java/lang";
import { $IPlayerConfigClientStorageAPI } from "@package/xaero/pac/client/player/config/api";

declare module "@package/xaero/pac/client/player/config/api/v2" {
    export class $IPlayerConfigStringableOptionClientStorageAPI<T> {
    }
    export interface $IPlayerConfigStringableOptionClientStorageAPI<T> extends $IPlayerConfigOptionClientStorageAPI<T> {
        getValue(): T;
        getId(): string;
        getType(): $Class<T>;
        getComment(): string;
        getValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        isDefaulted(): boolean;
        isMutable(): boolean;
        getStringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        getOption(): $IPlayerConfigOptionSpecAPI<T>;
        getTranslation(): string;
        getComponentWriterCast(): $Function<$Object, $Component>;
        getCommandInputParser(): $Function<string, T>;
        getTooltipPrefix(): string;
        get value(): T;
        get id(): string;
        get type(): $Class<T>;
        get comment(): string;
        get validator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get defaulted(): boolean;
        get mutable(): boolean;
        get stringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        get option(): $IPlayerConfigOptionSpecAPI<T>;
        get translation(): string;
        get componentWriterCast(): $Function<$Object, $Component>;
        get commandInputParser(): $Function<string, T>;
        get tooltipPrefix(): string;
    }
}
