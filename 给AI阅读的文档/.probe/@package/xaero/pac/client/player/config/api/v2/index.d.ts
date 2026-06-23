import { $Function, $BiPredicate } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IPlayerConfigOptionSpecAPI } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $Object, $Class } from "@package/java/lang";
import { $IPlayerConfigClientStorageAPI } from "@package/xaero/pac/client/player/config/api";

declare module "@package/xaero/pac/client/player/config/api/v2" {
    export class $IPlayerConfigStringableOptionClientStorageAPI<T> {
    }
    export interface $IPlayerConfigStringableOptionClientStorageAPI<T> extends $IPlayerConfigOptionClientStorageAPI<T> {
        getOption(): $IPlayerConfigOptionSpecAPI<T>;
        getValue(): T;
        getId(): string;
        getType(): $Class<T>;
        getComment(): string;
        getValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        getTranslation(): string;
        isMutable(): boolean;
        getTooltipPrefix(): string;
        getComponentWriterCast(): $Function<$Object, $Component>;
        getCommandInputParser(): $Function<string, T>;
        getStringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        isDefaulted(): boolean;
        get option(): $IPlayerConfigOptionSpecAPI<T>;
        get value(): T;
        get id(): string;
        get type(): $Class<T>;
        get comment(): string;
        get validator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get translation(): string;
        get mutable(): boolean;
        get tooltipPrefix(): string;
        get componentWriterCast(): $Function<$Object, $Component>;
        get commandInputParser(): $Function<string, T>;
        get stringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        get defaulted(): boolean;
    }
}
