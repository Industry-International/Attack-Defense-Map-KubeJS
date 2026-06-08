import { $BiPredicate, $Function } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $IPlayerConfigOptionSpecAPI as $IPlayerConfigOptionSpecAPI$1, $PlayerConfigType } from "@package/xaero/pac/common/server/player/config/api";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IClientPlayerConfigGroupManagerAPI } from "@package/xaero/pac/client/player/config/group/api";
import { $IPlayerConfigOptionSpecAPI } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $UUID, $List } from "@package/java/util";
import { $Comparable, $Object, $Class } from "@package/java/lang";
import { $IPlayerConfigStringableOptionClientStorageAPI as $IPlayerConfigStringableOptionClientStorageAPI$1 } from "@package/xaero/pac/client/player/config/api/v2";
export * as v2 from "@package/xaero/pac/client/player/config/api/v2";

declare module "@package/xaero/pac/client/player/config/api" {
    export class $IPlayerConfigClientStorageAPI {
    }
    export interface $IPlayerConfigClientStorageAPI {
        getOption<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigStringableOptionClientStorageAPI$1<T>;
        getType(): $PlayerConfigType;
        options(): $Stream<$IPlayerConfigStringableOptionClientStorageAPI$1<never>>;
        getOwner(): $UUID;
        getSubConfigIds(): $List<string>;
        /**
         * @deprecated
         */
        getOptionStorage<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI$1<T>): $IPlayerConfigStringableOptionClientStorageAPI<never>;
        /**
         * @deprecated
         */
        optionStream(): $Stream<$IPlayerConfigStringableOptionClientStorageAPI<never>>;
        isBeingDeleted(): boolean;
        getSubConfigAPIStream(): $Stream<$IPlayerConfigClientStorageAPI>;
        getSubCount(): number;
        getSubConfigLimit(): number;
        getSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        getEffectiveSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        subConfigExists(arg0: string): boolean;
        getPlayerGroups(): $IClientPlayerConfigGroupManagerAPI;
        getMain(): $IPlayerConfigClientStorageAPI;
        get type(): $PlayerConfigType;
        get owner(): $UUID;
        get subConfigIds(): $List<string>;
        get beingDeleted(): boolean;
        get subConfigAPIStream(): $Stream<$IPlayerConfigClientStorageAPI>;
        get subCount(): number;
        get subConfigLimit(): number;
        get playerGroups(): $IClientPlayerConfigGroupManagerAPI;
        get main(): $IPlayerConfigClientStorageAPI;
    }
    /**
     * @deprecated
     */
    export class $IPlayerConfigStringableOptionClientStorageAPI<T extends $Comparable<T>> {
    }
    export interface $IPlayerConfigStringableOptionClientStorageAPI<T extends $Comparable<T>> extends $IPlayerConfigOptionClientStorageAPI<T> {
        getOption(): $IPlayerConfigOptionSpecAPI$1<T>;
        getValue(): T;
        getId(): string;
        getType(): $Class<T>;
        getComment(): string;
        getValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        isMutable(): boolean;
        getTranslation(): string;
        getTooltipPrefix(): string;
        isDefaulted(): boolean;
        /**
         * @deprecated
         */
        getStringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        /**
         * @deprecated
         */
        getCommandInputParser(): $Function<string, T>;
        /**
         * @deprecated
         */
        getCommandOutputWriterCast(): $Function<$Object, $Component>;
        get option(): $IPlayerConfigOptionSpecAPI$1<T>;
        get value(): T;
        get id(): string;
        get type(): $Class<T>;
        get comment(): string;
        get validator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get mutable(): boolean;
        get translation(): string;
        get tooltipPrefix(): string;
        get defaulted(): boolean;
        get stringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        get commandInputParser(): $Function<string, T>;
        get commandOutputWriterCast(): $Function<$Object, $Component>;
    }
}
