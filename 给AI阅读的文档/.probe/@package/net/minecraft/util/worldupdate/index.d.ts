import { $Level } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $Component, $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Set } from "@package/java/util";
import { $Pattern } from "@package/java/util/regex";
import { $DimensionDataStorage, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $SimpleRegionStorage, $ChunkStorage } from "@package/net/minecraft/world/level/chunk/storage";
import { $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Reference2FloatMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Path_, $Path } from "@package/java/nio/file";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $AutoCloseable, $Record } from "@package/java/lang";
import { $LevelStem } from "@package/net/minecraft/world/level/dimension";

declare module "@package/net/minecraft/util/worldupdate" {
    export class $WorldUpgrader$SimpleRegionStorageUpgrader extends $WorldUpgrader$AbstractUpgrader<$SimpleRegionStorage> {
    }
    export class $WorldUpgrader$ChunkUpgrader extends $WorldUpgrader$AbstractUpgrader<$ChunkStorage> {
    }
    export class $WorldUpgrader$EntityUpgrader extends $WorldUpgrader$SimpleRegionStorageUpgrader {
    }
    export class $WorldUpgrader$AbstractUpgrader<T extends $AutoCloseable> {
    }
    export class $WorldUpgrader$PoiUpgrader extends $WorldUpgrader$SimpleRegionStorageUpgrader {
    }
    export class $WorldUpgrader {
        cancel(): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getStatus(): $Component;
        getProgress(): number;
        getConverted(): number;
        isFinished(): boolean;
        getSkipped(): number;
        getTotalChunks(): number;
        dimensionProgress(arg0: $ResourceKey_<$Level>): number;
        static resolveRecreateDirectory(arg0: $Path_): $Path;
        static STATUS_UPGRADING_ENTITIES: $MutableComponent;
        recreateRegionFiles: boolean;
        static REGEX: $Pattern;
        static STATUS_FINISHED_ENTITIES: $MutableComponent;
        dataFixer: $DataFixer;
        overworldDataStorage: $DimensionDataStorage;
        skipped: number;
        running: boolean;
        static STATUS_UPGRADING_POI: $MutableComponent;
        static STATUS_FINISHED_CHUNKS: $MutableComponent;
        eraseCache: boolean;
        converted: number;
        levelStorage: $LevelStorageSource$LevelStorageAccess;
        progress: number;
        totalChunks: number;
        static LOGGER: $Logger;
        static STATUS_UPGRADING_CHUNKS: $MutableComponent;
        totalFiles: number;
        progressMap: $Reference2FloatMap<$ResourceKey<$Level>>;
        static STATUS_FINISHED_POI: $MutableComponent;
        dimensions: $Registry<$LevelStem>;
        status: $Component;
        constructor(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $DataFixer, arg2: $RegistryAccess, arg3: boolean, arg4: boolean);
        get finished(): boolean;
    }
    export class $WorldUpgrader$FileToUpgrade extends $Record {
    }
    export class $WorldUpgrader$DimensionToUpgrade<T> extends $Record {
    }
}
