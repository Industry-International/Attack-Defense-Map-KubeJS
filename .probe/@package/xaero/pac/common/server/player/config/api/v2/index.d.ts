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
        getServerClaimConfig(): $IPlayerConfigAPI;
        getOptionForId(arg0: string): $IPlayerConfigOptionSpecAPI<never>;
        getDefaultConfig(): $IPlayerConfigAPI;
        getExpiredClaimConfig(): $IPlayerConfigAPI;
        getWildernessConfig(): $IPlayerConfigAPI;
        getAllOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        get serverClaimConfig(): $IPlayerConfigAPI;
        get defaultConfig(): $IPlayerConfigAPI;
        get expiredClaimConfig(): $IPlayerConfigAPI;
        get wildernessConfig(): $IPlayerConfigAPI;
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
        getTranslation(): string;
        getCommentTranslationArgs(): string[];
        getServerSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        getCommandInputParser(): $Function<string, T>;
        getConfigTypeFilter(): $Predicate<$PlayerConfigType>;
        isDirectlyConfigurable(): boolean;
        getClientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        getCommentTranslation(): string;
        getComponentWriter(): $Function<T, $Component>;
        getShortenedId(): string;
        getTooltipPrefix(): string;
        get id(): string;
        get type(): $Class<T>;
        get defaultValue(): T;
        get path(): $List<string>;
        get comment(): string;
        get translationArgs(): string[];
        get overridable(): boolean;
        get translation(): string;
        get commentTranslationArgs(): string[];
        get serverSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        get commandInputParser(): $Function<string, T>;
        get configTypeFilter(): $Predicate<$PlayerConfigType>;
        get directlyConfigurable(): boolean;
        get clientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get commentTranslation(): string;
        get componentWriter(): $Function<T, $Component>;
        get shortenedId(): string;
        get tooltipPrefix(): string;
    }
    export class $IPlayerConfigAPI {
    }
    export interface $IPlayerConfigAPI {
        getType(): $PlayerConfigType;
        createSubConfig(arg0: string): $IPlayerConfigAPI;
        getRaw<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        tryToSet<T>(arg0: $IPlayerConfigOptionSpecAPI<T>, arg1: T): $IPlayerConfigAPI$SetResult;
        getEffectiveSubConfig(arg0: number): $IPlayerConfigAPI;
        getEffectiveSubConfig(arg0: string): $IPlayerConfigAPI;
        getSubId(): string;
        getPlayerId(): $UUID;
        getUsedServerSubConfig(): $IPlayerConfigAPI;
        getFromEffectiveConfig<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getEffective<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getSubConfigLimit(): number;
        getSubConfig(arg0: string): $IPlayerConfigAPI;
        getSubCount(): number;
        getPlayerGroups(): $IServerPlayerConfigGroupManagerAPI;
        subConfigExists(arg0: string): boolean;
        subConfigExists(arg0: number): boolean;
        getDefaultRawValue<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getSubIndex(): number;
        isOptionAllowed(arg0: $IPlayerConfigOptionSpecAPI<never>): boolean;
        getUsedSubConfig(): $IPlayerConfigAPI;
        isBeingDeleted(): boolean;
        getSubConfigIds(): $List<string>;
        getSubConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        tryToReset<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigAPI$SetResult;
        get type(): $PlayerConfigType;
        get subId(): string;
        get playerId(): $UUID;
        get usedServerSubConfig(): $IPlayerConfigAPI;
        get subConfigLimit(): number;
        get subCount(): number;
        get playerGroups(): $IServerPlayerConfigGroupManagerAPI;
        get subIndex(): number;
        get usedSubConfig(): $IPlayerConfigAPI;
        get beingDeleted(): boolean;
        get subConfigIds(): $List<string>;
        get subConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
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
