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
        getOption(): $IPlayerConfigOptionSpecAPI<T>;
        getValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        isMutable(): boolean;
        getTooltipPrefix(): string;
        getTranslation(): string;
        isDefaulted(): boolean;
        getComponentWriterCast(): $Function<$Object, $Component>;
        getStringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        getCommandInputParser(): $Function<string, T>;
        get value(): T;
        get id(): string;
        get type(): $Class<T>;
        get comment(): string;
        get option(): $IPlayerConfigOptionSpecAPI<T>;
        get validator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get mutable(): boolean;
        get tooltipPrefix(): string;
        get translation(): string;
        get defaulted(): boolean;
        get componentWriterCast(): $Function<$Object, $Component>;
        get stringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        get commandInputParser(): $Function<string, T>;
    }
}
