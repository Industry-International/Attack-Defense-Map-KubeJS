import { $IClaimingModeAPI_ } from "@package/xaero/pac/common/claims/player/mode/api";
import { $Predicate, $BiPredicate, $Function } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $PlayerConfigType } from "@package/xaero/pac/common/server/player/config/api";
import { $IServerPlayerConfigGroupManagerAPI } from "@package/xaero/pac/common/server/player/config/group/api";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Enum, $Class } from "@package/java/lang";
import { $UUID_, $UUID, $List } from "@package/java/util";
import { $IPlayerConfigClientStorageAPI } from "@package/xaero/pac/client/player/config/api";

declare module "@package/xaero/pac/common/server/player/config/api/v2" {
    export class $IPlayerConfigManagerAPI {
    }
    export interface $IPlayerConfigManagerAPI {
        getLoadedConfig(arg0: $UUID_ | null): $IPlayerConfigAPI;
        getOptionForId(arg0: string): $IPlayerConfigOptionSpecAPI<never>;
        getPartyOwnerConfig(arg0: $UUID_): $IPlayerConfigAPI;
        getServerClaimConfig(): $IPlayerConfigAPI;
        getWildernessConfig(): $IPlayerConfigAPI;
        getAllOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        getExpiredClaimConfig(): $IPlayerConfigAPI;
        getDefaultConfig(): $IPlayerConfigAPI;
        get serverClaimConfig(): $IPlayerConfigAPI;
        get wildernessConfig(): $IPlayerConfigAPI;
        get allOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        get expiredClaimConfig(): $IPlayerConfigAPI;
        get defaultConfig(): $IPlayerConfigAPI;
    }
    export class $IPlayerConfigOptionSpecAPI<T> {
    }
    export interface $IPlayerConfigOptionSpecAPI<T> {
        getId(): string;
        getType(): $Class<T>;
        getDefaultValue(): T;
        getPath(): $List<string>;
        getComment(): string;
        getTranslationArgs(): string[];
        getTranslation(): string;
        isOverridable(): boolean;
        getComponentWriter(): $Function<T, $Component>;
        getTooltipPrefix(): string;
        getShortenedId(): string;
        getCommentTranslation(): string;
        getCommentTranslationArgs(): string[];
        getClientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        getServerSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        getCommandInputParser(): $Function<string, T>;
        getConfigTypeFilter(): $Predicate<$PlayerConfigType>;
        isDirectlyConfigurable(): boolean;
        get id(): string;
        get type(): $Class<T>;
        get defaultValue(): T;
        get path(): $List<string>;
        get comment(): string;
        get translationArgs(): string[];
        get translation(): string;
        get overridable(): boolean;
        get componentWriter(): $Function<T, $Component>;
        get tooltipPrefix(): string;
        get shortenedId(): string;
        get commentTranslation(): string;
        get commentTranslationArgs(): string[];
        get clientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get serverSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        get commandInputParser(): $Function<string, T>;
        get configTypeFilter(): $Predicate<$PlayerConfigType>;
        get directlyConfigurable(): boolean;
    }
    export class $IPlayerConfigAPI {
    }
    export interface $IPlayerConfigAPI {
        getType(): $PlayerConfigType;
        createSubConfig(arg0: string): $IPlayerConfigAPI;
        getRaw<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        tryToReset<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigAPI$SetResult;
        getSubId(): string;
        getEffective<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getEffectiveSubConfig(arg0: string): $IPlayerConfigAPI;
        getEffectiveSubConfig(arg0: number): $IPlayerConfigAPI;
        getSubConfig(arg0: string): $IPlayerConfigAPI;
        getSubConfigLimit(): number;
        getSubCount(): number;
        tryToSet<T>(arg0: $IPlayerConfigOptionSpecAPI<T>, arg1: T | null): $IPlayerConfigAPI$SetResult;
        getPlayerId(): $UUID;
        subConfigExists(arg0: string): boolean;
        subConfigExists(arg0: number): boolean;
        getPlayerGroups(): $IServerPlayerConfigGroupManagerAPI;
        getFromEffectiveConfig<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        /**
         * @deprecated
         */
        getUsedServerSubConfig(): $IPlayerConfigAPI;
        getSubConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        getSubConfigIds(): $List<string>;
        isBeingDeleted(): boolean;
        getSubIndex(): number;
        getDefaultRawValue<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        isOptionAllowed(arg0: $IPlayerConfigOptionSpecAPI<never>): boolean;
        getUsedSubConfig(): $IPlayerConfigAPI;
        getUsedSubConfig(arg0: $IClaimingModeAPI_): $IPlayerConfigAPI;
        get type(): $PlayerConfigType;
        get subId(): string;
        get subConfigLimit(): number;
        get subCount(): number;
        get playerId(): $UUID;
        get playerGroups(): $IServerPlayerConfigGroupManagerAPI;
        get usedServerSubConfig(): $IPlayerConfigAPI;
        get subConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        get subConfigIds(): $List<string>;
        get beingDeleted(): boolean;
        get subIndex(): number;
    }
    export class $IPlayerConfigAPI$SetResult extends $Enum<$IPlayerConfigAPI$SetResult> {
        static values(): $IPlayerConfigAPI$SetResult[];
        static valueOf(arg0: string): $IPlayerConfigAPI$SetResult;
        static SUCCESS: $IPlayerConfigAPI$SetResult;
        static ILLEGAL_OPTION: $IPlayerConfigAPI$SetResult;
        static NOT_DIRECTLY_CONFIGURABLE: $IPlayerConfigAPI$SetResult;
        static INVALID: $IPlayerConfigAPI$SetResult;
        static DEFAULTED: $IPlayerConfigAPI$SetResult;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerConfigAPI$SetResult}.
     */
    export type $IPlayerConfigAPI$SetResult_ = "invalid" | "illegal_option" | "defaulted" | "success" | "not_directly_configurable";
}
