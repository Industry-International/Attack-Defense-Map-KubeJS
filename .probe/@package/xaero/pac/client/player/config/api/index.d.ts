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
        getType(): $PlayerConfigType;
        options(): $Stream<$IPlayerConfigStringableOptionClientStorageAPI$1<never>>;
        getOwner(): $UUID;
        getOption<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigStringableOptionClientStorageAPI$1<T>;
        getMain(): $IPlayerConfigClientStorageAPI;
        getPlayerGroups(): $IClientPlayerConfigGroupManagerAPI;
        getEffectiveSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        getSubConfigAPIStream(): $Stream<$IPlayerConfigClientStorageAPI>;
        getSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        subConfigExists(arg0: string): boolean;
        getSubConfigLimit(): number;
        getSubCount(): number;
        /**
         * @deprecated
         */
        getOptionStorage<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI$1<T>): $IPlayerConfigStringableOptionClientStorageAPI<never>;
        getSubConfigIds(): $List<string>;
        isBeingDeleted(): boolean;
        /**
         * @deprecated
         */
        optionStream(): $Stream<$IPlayerConfigStringableOptionClientStorageAPI<never>>;
        get type(): $PlayerConfigType;
        get owner(): $UUID;
        get main(): $IPlayerConfigClientStorageAPI;
        get playerGroups(): $IClientPlayerConfigGroupManagerAPI;
        get subConfigAPIStream(): $Stream<$IPlayerConfigClientStorageAPI>;
        get subConfigLimit(): number;
        get subCount(): number;
        get subConfigIds(): $List<string>;
        get beingDeleted(): boolean;
    }
    /**
     * @deprecated
     */
    export class $IPlayerConfigStringableOptionClientStorageAPI<T extends $Comparable<T>> {
    }
    export interface $IPlayerConfigStringableOptionClientStorageAPI<T extends $Comparable<T>> extends $IPlayerConfigOptionClientStorageAPI<T> {
        getValue(): T;
        getId(): string;
        getType(): $Class<T>;
        getComment(): string;
        getOption(): $IPlayerConfigOptionSpecAPI$1<T>;
        getValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        isMutable(): boolean;
        getTooltipPrefix(): string;
        getTranslation(): string;
        isDefaulted(): boolean;
        /**
         * @deprecated
         */
        getCommandOutputWriterCast(): $Function<$Object, $Component>;
        /**
         * @deprecated
         */
        getStringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        /**
         * @deprecated
         */
        getCommandInputParser(): $Function<string, T>;
        get value(): T;
        get id(): string;
        get type(): $Class<T>;
        get comment(): string;
        get option(): $IPlayerConfigOptionSpecAPI$1<T>;
        get validator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get mutable(): boolean;
        get tooltipPrefix(): string;
        get translation(): string;
        get defaulted(): boolean;
        get commandOutputWriterCast(): $Function<$Object, $Component>;
        get stringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        get commandInputParser(): $Function<string, T>;
    }
}
