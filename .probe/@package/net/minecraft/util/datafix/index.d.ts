import { $Function_, $Function } from "@package/java/util/function";
import { $DynamicOps, $Dynamic, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $NamedEntityFix } from "@package/net/minecraft/util/datafix/fixes";
import { $Enum } from "@package/java/lang";
import { $Schema } from "@package/com/mojang/datafixers/schemas";
import { $Set_, $Set } from "@package/java/util";
import { $DataFixer, $Typed, $DSL$TypeReference_, $DSL$TypeReference } from "@package/com/mojang/datafixers";
import { $Type } from "@package/com/mojang/datafixers/types";
export * as fixes from "@package/net/minecraft/util/datafix/fixes";
export * as schemas from "@package/net/minecraft/util/datafix/schemas";

declare module "@package/net/minecraft/util/datafix" {
    export class $DataFixTypes extends $Enum<$DataFixTypes> {
        static values(): $DataFixTypes[];
        update(arg0: $DataFixer, arg1: $CompoundTag_, arg2: number, arg3: number): $CompoundTag;
        update<T>(arg0: $DataFixer, arg1: $Dynamic<T>, arg2: number, arg3: number): $Dynamic<T>;
        static valueOf(arg0: string): $DataFixTypes;
        static currentVersion(): number;
        updateToCurrentVersion(arg0: $DataFixer, arg1: $CompoundTag_, arg2: number): $CompoundTag;
        updateToCurrentVersion<T>(arg0: $DataFixer, arg1: $Dynamic<T>, arg2: number): $Dynamic<T>;
        wrapCodec<A>(arg0: $Codec<A>, arg1: $DataFixer, arg2: number): $Codec<A>;
        static SAVED_DATA_MAP_DATA: $DataFixTypes;
        static WORLD_GEN_SETTINGS: $DataFixTypes;
        static SAVED_DATA_MAP_INDEX: $DataFixTypes;
        static STRUCTURE: $DataFixTypes;
        static STATS: $DataFixTypes;
        static LEVEL: $DataFixTypes;
        static OPTIONS: $DataFixTypes;
        static ADVANCEMENTS: $DataFixTypes;
        static POI_CHUNK: $DataFixTypes;
        static SAVED_DATA_COMMAND_STORAGE: $DataFixTypes;
        static PLAYER: $DataFixTypes;
        static SAVED_DATA_FORCED_CHUNKS: $DataFixTypes;
        static TYPES_FOR_LEVEL_LIST: $Set<$DSL$TypeReference>;
        static SAVED_DATA_RANDOM_SEQUENCES: $DataFixTypes;
        static SAVED_DATA_RAIDS: $DataFixTypes;
        static SAVED_DATA_SCOREBOARD: $DataFixTypes;
        static SAVED_DATA_STRUCTURE_FEATURE_INDICES: $DataFixTypes;
        static ENTITY_CHUNK: $DataFixTypes;
        static HOTBAR: $DataFixTypes;
        static CHUNK: $DataFixTypes;
    }
    /**
     * Values that may be interpreted as {@link $DataFixTypes}.
     */
    export type $DataFixTypes_ = "level" | "player" | "chunk" | "hotbar" | "options" | "structure" | "stats" | "saved_data_command_storage" | "saved_data_forced_chunks" | "saved_data_map_data" | "saved_data_map_index" | "saved_data_raids" | "saved_data_random_sequences" | "saved_data_scoreboard" | "saved_data_structure_feature_indices" | "advancements" | "poi_chunk" | "world_gen_settings" | "entity_chunk";
    export class $DataFixers {
        static optimize(arg0: $Set_<$DSL$TypeReference_>): $CompletableFuture<never>;
        static getDataFixer(): $DataFixer;
        static BLENDING_VERSION: number;
        static get dataFixer(): $DataFixer;
    }
    export class $ComponentDataFixUtils {
        static rewriteFromLenient(arg0: $Dynamic<never>): $Dynamic<never>;
        static extractTranslationString(arg0: string): (string) | undefined;
        static createEmptyComponent<T>(arg0: $DynamicOps<T>): $Dynamic<T>;
        static wrapLiteralStringAsComponent<T>(arg0: $Dynamic<T>): $Dynamic<T>;
        static createTranslatableComponent<T>(arg0: $DynamicOps<T>, arg1: string): $Dynamic<T>;
        static createPlainTextComponent<T>(arg0: $DynamicOps<T>, arg1: string): $Dynamic<T>;
        constructor();
    }
    export class $ExtraDataFixUtils {
        static cast<T, R>(arg0: $Type<R>, arg1: $Typed<T>): $Typed<R>;
        static chainAllFilters<T>(...arg0: $Function_<$Typed<never>, $Typed<never>>[]): $Function<$Typed<never>, $Typed<never>>;
        static fixBlockPos(arg0: $Dynamic<never>): $Dynamic<never>;
        constructor();
    }
    export class $FixWolfHealth extends $NamedEntityFix {
        constructor(arg0: $Schema);
    }
    export class $PackedBitStorage {
        get(arg0: number): number;
        set(arg0: number, arg1: number): void;
        getBits(): number;
        getRaw(): number[];
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: number[]);
        get bits(): number;
        get raw(): number[];
    }
}
