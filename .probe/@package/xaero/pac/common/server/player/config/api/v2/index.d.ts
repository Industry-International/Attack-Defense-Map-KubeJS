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
        getLoadedConfig(arg0: $UUID_): $IPlayerConfigAPI;
        getDefaultConfig(): $IPlayerConfigAPI;
        getExpiredClaimConfig(): $IPlayerConfigAPI;
        getWildernessConfig(): $IPlayerConfigAPI;
        getOptionForId(arg0: string): $IPlayerConfigOptionSpecAPI<never>;
        getServerClaimConfig(): $IPlayerConfigAPI;
        getAllOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        get defaultConfig(): $IPlayerConfigAPI;
        get expiredClaimConfig(): $IPlayerConfigAPI;
        get wildernessConfig(): $IPlayerConfigAPI;
        get serverClaimConfig(): $IPlayerConfigAPI;
        get allOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
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
        isOverridable(): boolean;
        getShortenedId(): string;
        getTooltipPrefix(): string;
        getComponentWriter(): $Function<T, $Component>;
        getTranslation(): string;
        getCommentTranslation(): string;
        getCommentTranslationArgs(): string[];
        isDirectlyConfigurable(): boolean;
        getClientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        getCommandInputParser(): $Function<string, T>;
        getConfigTypeFilter(): $Predicate<$PlayerConfigType>;
        getServerSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        get id(): string;
        get type(): $Class<T>;
        get defaultValue(): T;
        get path(): $List<string>;
        get comment(): string;
        get translationArgs(): string[];
        get overridable(): boolean;
        get shortenedId(): string;
        get tooltipPrefix(): string;
        get componentWriter(): $Function<T, $Component>;
        get translation(): string;
        get commentTranslation(): string;
        get commentTranslationArgs(): string[];
        get directlyConfigurable(): boolean;
        get clientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get commandInputParser(): $Function<string, T>;
        get configTypeFilter(): $Predicate<$PlayerConfigType>;
        get serverSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
    }
    export class $IPlayerConfigAPI {
    }
    export interface $IPlayerConfigAPI {
        getType(): $PlayerConfigType;
        createSubConfig(arg0: string): $IPlayerConfigAPI;
        getRaw<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getEffective<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        tryToReset<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigAPI$SetResult;
        getSubId(): string;
        tryToSet<T>(arg0: $IPlayerConfigOptionSpecAPI<T>, arg1: T): $IPlayerConfigAPI$SetResult;
        getPlayerGroups(): $IServerPlayerConfigGroupManagerAPI;
        getPlayerId(): $UUID;
        getEffectiveSubConfig(arg0: string): $IPlayerConfigAPI;
        getEffectiveSubConfig(arg0: number): $IPlayerConfigAPI;
        getFromEffectiveConfig<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getUsedServerSubConfig(): $IPlayerConfigAPI;
        getSubConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        getSubConfig(arg0: string): $IPlayerConfigAPI;
        subConfigExists(arg0: number): boolean;
        subConfigExists(arg0: string): boolean;
        getSubConfigLimit(): number;
        getSubCount(): number;
        getSubConfigIds(): $List<string>;
        isBeingDeleted(): boolean;
        isOptionAllowed(arg0: $IPlayerConfigOptionSpecAPI<never>): boolean;
        getSubIndex(): number;
        getUsedSubConfig(): $IPlayerConfigAPI;
        getDefaultRawValue<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        get type(): $PlayerConfigType;
        get subId(): string;
        get playerGroups(): $IServerPlayerConfigGroupManagerAPI;
        get playerId(): $UUID;
        get usedServerSubConfig(): $IPlayerConfigAPI;
        get subConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        get subConfigLimit(): number;
        get subCount(): number;
        get subConfigIds(): $List<string>;
        get beingDeleted(): boolean;
        get subIndex(): number;
        get usedSubConfig(): $IPlayerConfigAPI;
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
