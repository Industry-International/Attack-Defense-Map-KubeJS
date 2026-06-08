import { $Predicate, $BiPredicate, $Function } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IPlayerConfigAPI$SetResult_ } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $Comparable, $Enum, $Class } from "@package/java/lang";
import { $UUID_, $UUID, $List } from "@package/java/util";
import { $IPlayerConfigClientStorageAPI } from "@package/xaero/pac/client/player/config/api";
export * as v2 from "@package/xaero/pac/common/server/player/config/api/v2";

declare module "@package/xaero/pac/common/server/player/config/api" {
    export class $PlayerConfigType extends $Enum<$PlayerConfigType> {
        getName(): $Component;
        static values(): $PlayerConfigType[];
        static valueOf(arg0: string): $PlayerConfigType;
        static PLAYER: $PlayerConfigType;
        static SERVER: $PlayerConfigType;
        static EXPIRED: $PlayerConfigType;
        static DEFAULT_PLAYER: $PlayerConfigType;
        static WILDERNESS: $PlayerConfigType;
    }
    /**
     * Values that may be interpreted as {@link $PlayerConfigType}.
     */
    export type $PlayerConfigType_ = "server" | "expired" | "wilderness" | "default_player" | "player";
    /**
     * @deprecated
     */
    export class $IPlayerConfigManagerAPI {
    }
    export interface $IPlayerConfigManagerAPI {
        /**
         * @deprecated
         */
        getAllOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        /**
         * @deprecated
         */
        getLoadedConfig(arg0: $UUID_): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getDefaultConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getExpiredClaimConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getWildernessConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getServerClaimConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getOptionForId(arg0: string): $IPlayerConfigOptionSpecAPI<never>;
        get allOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        get defaultConfig(): $IPlayerConfigAPI;
        get expiredClaimConfig(): $IPlayerConfigAPI;
        get wildernessConfig(): $IPlayerConfigAPI;
        get serverClaimConfig(): $IPlayerConfigAPI;
    }
    /**
     * @deprecated
     */
    export class $IPlayerConfigOptionSpecAPI<T extends $Comparable<T>> {
    }
    export interface $IPlayerConfigOptionSpecAPI<T extends $Comparable<T>> {
        /**
         * @deprecated
         */
        getId(): string;
        /**
         * @deprecated
         */
        getType(): $Class<T>;
        /**
         * @deprecated
         */
        getDefaultValue(): T;
        /**
         * @deprecated
         */
        getPath(): $List<string>;
        /**
         * @deprecated
         */
        getComment(): string;
        /**
         * @deprecated
         */
        getTranslationArgs(): string[];
        /**
         * @deprecated
         */
        getTranslation(): string;
        /**
         * @deprecated
         */
        getServerSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        /**
         * @deprecated
         */
        getCommentTranslationArgs(): string[];
        /**
         * @deprecated
         */
        getClientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        /**
         * @deprecated
         */
        getCommandInputParser(): $Function<string, T>;
        /**
         * @deprecated
         */
        getConfigTypeFilter(): $Predicate<$PlayerConfigType>;
        /**
         * @deprecated
         */
        getCommentTranslation(): string;
        /**
         * @deprecated
         */
        getShortenedId(): string;
        /**
         * @deprecated
         */
        getTooltipPrefix(): string;
        /**
         * @deprecated
         */
        getCommandOutputWriter(): $Function<T, $Component>;
        get id(): string;
        get type(): $Class<T>;
        get defaultValue(): T;
        get path(): $List<string>;
        get comment(): string;
        get translationArgs(): string[];
        get translation(): string;
        get serverSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        get commentTranslationArgs(): string[];
        get clientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get commandInputParser(): $Function<string, T>;
        get configTypeFilter(): $Predicate<$PlayerConfigType>;
        get commentTranslation(): string;
        get shortenedId(): string;
        get tooltipPrefix(): string;
        get commandOutputWriter(): $Function<T, $Component>;
    }
    /**
     * @deprecated
     */
    export class $IPlayerConfigAPI {
    }
    export interface $IPlayerConfigAPI {
        /**
         * @deprecated
         */
        getType(): $PlayerConfigType;
        /**
         * @deprecated
         */
        getRaw<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        /**
         * @deprecated
         */
        getUsedServerSubConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getSubConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        /**
         * @deprecated
         */
        getFromEffectiveConfig<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        /**
         * @deprecated
         */
        createSubConfig(arg0: string): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        tryToReset<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigAPI$SetResult;
        /**
         * @deprecated
         */
        tryToSet<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>, arg1: T): $IPlayerConfigAPI$SetResult;
        /**
         * @deprecated
         */
        getPlayerId(): $UUID;
        /**
         * @deprecated
         */
        isBeingDeleted(): boolean;
        /**
         * @deprecated
         */
        getSubConfigIds(): $List<string>;
        /**
         * @deprecated
         */
        getUsedSubConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getDefaultRawValue<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        /**
         * @deprecated
         */
        getSubIndex(): number;
        /**
         * @deprecated
         */
        isOptionAllowed(arg0: $IPlayerConfigOptionSpecAPI<never>): boolean;
        /**
         * @deprecated
         */
        getEffective<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        /**
         * @deprecated
         */
        getEffectiveSubConfig(arg0: string): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getEffectiveSubConfig(arg0: number): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getSubId(): string;
        /**
         * @deprecated
         */
        getSubConfig(arg0: string): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        subConfigExists(arg0: string): boolean;
        /**
         * @deprecated
         */
        subConfigExists(arg0: number): boolean;
        /**
         * @deprecated
         */
        getSubConfigLimit(): number;
        /**
         * @deprecated
         */
        getSubCount(): number;
        get type(): $PlayerConfigType;
        get usedServerSubConfig(): $IPlayerConfigAPI;
        get subConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        get playerId(): $UUID;
        get beingDeleted(): boolean;
        get subConfigIds(): $List<string>;
        get usedSubConfig(): $IPlayerConfigAPI;
        get subIndex(): number;
        get subId(): string;
        get subConfigLimit(): number;
        get subCount(): number;
    }
    /**
     * @deprecated
     */
    export class $IPlayerConfigAPI$SetResult extends $Enum<$IPlayerConfigAPI$SetResult> {
        static values(): $IPlayerConfigAPI$SetResult[];
        static valueOf(arg0: string): $IPlayerConfigAPI$SetResult;
        static fromReal(arg0: $IPlayerConfigAPI$SetResult_): $IPlayerConfigAPI$SetResult;
        static SUCCESS: $IPlayerConfigAPI$SetResult;
        static ILLEGAL_OPTION: $IPlayerConfigAPI$SetResult;
        static INVALID: $IPlayerConfigAPI$SetResult;
        static DEFAULTED: $IPlayerConfigAPI$SetResult;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerConfigAPI$SetResult}.
     */
    export type $IPlayerConfigAPI$SetResult_ = "invalid" | "illegal_option" | "defaulted" | "success";
}
