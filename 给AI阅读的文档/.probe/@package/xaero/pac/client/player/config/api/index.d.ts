import { $BiPredicate, $Function } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $IPlayerConfigOptionSpecAPI as $IPlayerConfigOptionSpecAPI$1, $PlayerConfigType } from "@package/xaero/pac/common/server/player/config/api";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IClientPlayerConfigGroupManagerAPI } from "@package/xaero/pac/client/player/config/group/api";
import { $IPlayerConfigOptionSpecAPI } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $UUID, $List } from "@package/java/util";
import { $Comparable, $Object, $Class } from "@package/java/lang";
import { $IPlayerConfigPermissionAPI } from "@package/xaero/pac/common/player/config/api";
import { $IPlayerConfigStringableOptionClientStorageAPI as $IPlayerConfigStringableOptionClientStorageAPI$1 } from "@package/xaero/pac/client/player/config/api/v2";
export * as v2 from "@package/xaero/pac/client/player/config/api/v2";

declare module "@package/xaero/pac/client/player/config/api" {
    export class $IPlayerConfigClientStorageAPI {
    }
    export interface $IPlayerConfigClientStorageAPI {
        getOption<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigStringableOptionClientStorageAPI$1<T>;
        getPermissions(): $IPlayerConfigPermissionAPI;
        getType(): $PlayerConfigType;
        options(): $Stream<$IPlayerConfigStringableOptionClientStorageAPI$1<never>>;
        getOwner(): $UUID;
        getMain(): $IPlayerConfigClientStorageAPI;
        getEffectiveSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        getSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        getSubConfigLimit(): number;
        getSubCount(): number;
        subConfigExists(arg0: string): boolean;
        getPlayerGroups(): $IClientPlayerConfigGroupManagerAPI;
        getSubConfigAPIStream(): $Stream<$IPlayerConfigClientStorageAPI>;
        getSubConfigIds(): $List<string>;
        isBeingDeleted(): boolean;
        /**
         * @deprecated
         */
        getOptionStorage<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI$1<T>): $IPlayerConfigStringableOptionClientStorageAPI<never>;
        /**
         * @deprecated
         */
        optionStream(): $Stream<$IPlayerConfigStringableOptionClientStorageAPI<never>>;
        get permissions(): $IPlayerConfigPermissionAPI;
        get type(): $PlayerConfigType;
        get owner(): $UUID;
        get main(): $IPlayerConfigClientStorageAPI;
        get subConfigLimit(): number;
        get subCount(): number;
        get playerGroups(): $IClientPlayerConfigGroupManagerAPI;
        get subConfigAPIStream(): $Stream<$IPlayerConfigClientStorageAPI>;
        get subConfigIds(): $List<string>;
        get beingDeleted(): boolean;
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
        getTranslation(): string;
        isMutable(): boolean;
        getTooltipPrefix(): string;
        /**
         * @deprecated
         */
        getCommandOutputWriterCast(): $Function<$Object, $Component>;
        /**
         * @deprecated
         */
        getCommandInputParser(): $Function<string, T>;
        /**
         * @deprecated
         */
        getStringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        isDefaulted(): boolean;
        get option(): $IPlayerConfigOptionSpecAPI$1<T>;
        get value(): T;
        get id(): string;
        get type(): $Class<T>;
        get comment(): string;
        get validator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get translation(): string;
        get mutable(): boolean;
        get tooltipPrefix(): string;
        get commandOutputWriterCast(): $Function<$Object, $Component>;
        get commandInputParser(): $Function<string, T>;
        get stringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        get defaulted(): boolean;
    }
}
