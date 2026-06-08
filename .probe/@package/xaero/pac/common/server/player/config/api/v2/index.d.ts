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
        getDefaultConfig(): $IPlayerConfigAPI;
        getLoadedConfig(arg0: $UUID_): $IPlayerConfigAPI;
        getExpiredClaimConfig(): $IPlayerConfigAPI;
        getWildernessConfig(): $IPlayerConfigAPI;
        getOptionForId(arg0: string): $IPlayerConfigOptionSpecAPI<never>;
        getAllOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        getServerClaimConfig(): $IPlayerConfigAPI;
        get defaultConfig(): $IPlayerConfigAPI;
        get expiredClaimConfig(): $IPlayerConfigAPI;
        get wildernessConfig(): $IPlayerConfigAPI;
        get allOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        get serverClaimConfig(): $IPlayerConfigAPI;
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
        getTooltipPrefix(): string;
        getShortenedId(): string;
        getComponentWriter(): $Function<T, $Component>;
        getConfigTypeFilter(): $Predicate<$PlayerConfigType>;
        getClientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        getCommentTranslationArgs(): string[];
        isDirectlyConfigurable(): boolean;
        getCommentTranslation(): string;
        getServerSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        getCommandInputParser(): $Function<string, T>;
        get id(): string;
        get type(): $Class<T>;
        get defaultValue(): T;
        get path(): $List<string>;
        get comment(): string;
        get translationArgs(): string[];
        get overridable(): boolean;
        get translation(): string;
        get tooltipPrefix(): string;
        get shortenedId(): string;
        get componentWriter(): $Function<T, $Component>;
        get configTypeFilter(): $Predicate<$PlayerConfigType>;
        get clientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get commentTranslationArgs(): string[];
        get directlyConfigurable(): boolean;
        get commentTranslation(): string;
        get serverSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        get commandInputParser(): $Function<string, T>;
    }
    export class $IPlayerConfigAPI {
    }
    export interface $IPlayerConfigAPI {
        getType(): $PlayerConfigType;
        getRaw<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        createSubConfig(arg0: string): $IPlayerConfigAPI;
        getPlayerId(): $UUID;
        getEffective<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        tryToSet<T>(arg0: $IPlayerConfigOptionSpecAPI<T>, arg1: T): $IPlayerConfigAPI$SetResult;
        getSubConfigIds(): $List<string>;
        isBeingDeleted(): boolean;
        isOptionAllowed(arg0: $IPlayerConfigOptionSpecAPI<never>): boolean;
        getUsedSubConfig(): $IPlayerConfigAPI;
        getDefaultRawValue<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getSubIndex(): number;
        getSubConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        getFromEffectiveConfig<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getUsedServerSubConfig(): $IPlayerConfigAPI;
        getSubCount(): number;
        getSubConfigLimit(): number;
        getSubConfig(arg0: string): $IPlayerConfigAPI;
        getEffectiveSubConfig(arg0: number): $IPlayerConfigAPI;
        getEffectiveSubConfig(arg0: string): $IPlayerConfigAPI;
        subConfigExists(arg0: string): boolean;
        subConfigExists(arg0: number): boolean;
        getPlayerGroups(): $IServerPlayerConfigGroupManagerAPI;
        getSubId(): string;
        tryToReset<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigAPI$SetResult;
        get type(): $PlayerConfigType;
        get playerId(): $UUID;
        get subConfigIds(): $List<string>;
        get beingDeleted(): boolean;
        get usedSubConfig(): $IPlayerConfigAPI;
        get subIndex(): number;
        get subConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        get usedServerSubConfig(): $IPlayerConfigAPI;
        get subCount(): number;
        get subConfigLimit(): number;
        get playerGroups(): $IServerPlayerConfigGroupManagerAPI;
        get subId(): string;
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
