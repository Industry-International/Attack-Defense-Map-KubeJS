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
        getEffectiveSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        getOption<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigStringableOptionClientStorageAPI$1<T>;
        getSubConfigLimit(): number;
        getSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        getSubCount(): number;
        getPlayerGroups(): $IClientPlayerConfigGroupManagerAPI;
        subConfigExists(arg0: string): boolean;
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
        getSubConfigAPIStream(): $Stream<$IPlayerConfigClientStorageAPI>;
        getMain(): $IPlayerConfigClientStorageAPI;
        get type(): $PlayerConfigType;
        get owner(): $UUID;
        get subConfigLimit(): number;
        get subCount(): number;
        get playerGroups(): $IClientPlayerConfigGroupManagerAPI;
        get beingDeleted(): boolean;
        get subConfigIds(): $List<string>;
        get subConfigAPIStream(): $Stream<$IPlayerConfigClientStorageAPI>;
        get main(): $IPlayerConfigClientStorageAPI;
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
        getTranslation(): string;
        isMutable(): boolean;
        getOption(): $IPlayerConfigOptionSpecAPI$1<T>;
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
        isDefaulted(): boolean;
        getTooltipPrefix(): string;
        get value(): T;
        get id(): string;
        get type(): $Class<T>;
        get comment(): string;
        get validator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get translation(): string;
        get mutable(): boolean;
        get option(): $IPlayerConfigOptionSpecAPI$1<T>;
        get commandOutputWriterCast(): $Function<$Object, $Component>;
        get stringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        get commandInputParser(): $Function<string, T>;
        get defaulted(): boolean;
        get tooltipPrefix(): string;
    }
}
