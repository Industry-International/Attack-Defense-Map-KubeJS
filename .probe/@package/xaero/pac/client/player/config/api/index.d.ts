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
        getSubConfigAPIStream(): $Stream<$IPlayerConfigClientStorageAPI>;
        getMain(): $IPlayerConfigClientStorageAPI;
        getOption<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigStringableOptionClientStorageAPI$1<T>;
        isBeingDeleted(): boolean;
        /**
         * @deprecated
         */
        optionStream(): $Stream<$IPlayerConfigStringableOptionClientStorageAPI<never>>;
        /**
         * @deprecated
         */
        getOptionStorage<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI$1<T>): $IPlayerConfigStringableOptionClientStorageAPI<never>;
        getSubConfigIds(): $List<string>;
        getEffectiveSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        getSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        subConfigExists(arg0: string): boolean;
        getSubConfigLimit(): number;
        getPlayerGroups(): $IClientPlayerConfigGroupManagerAPI;
        getSubCount(): number;
        get type(): $PlayerConfigType;
        get owner(): $UUID;
        get subConfigAPIStream(): $Stream<$IPlayerConfigClientStorageAPI>;
        get main(): $IPlayerConfigClientStorageAPI;
        get beingDeleted(): boolean;
        get subConfigIds(): $List<string>;
        get subConfigLimit(): number;
        get playerGroups(): $IClientPlayerConfigGroupManagerAPI;
        get subCount(): number;
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
        getValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        isDefaulted(): boolean;
        isMutable(): boolean;
        /**
         * @deprecated
         */
        getStringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        getOption(): $IPlayerConfigOptionSpecAPI$1<T>;
        getTranslation(): string;
        /**
         * @deprecated
         */
        getCommandOutputWriterCast(): $Function<$Object, $Component>;
        /**
         * @deprecated
         */
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
        get option(): $IPlayerConfigOptionSpecAPI$1<T>;
        get translation(): string;
        get commandOutputWriterCast(): $Function<$Object, $Component>;
        get commandInputParser(): $Function<string, T>;
        get tooltipPrefix(): string;
    }
}
