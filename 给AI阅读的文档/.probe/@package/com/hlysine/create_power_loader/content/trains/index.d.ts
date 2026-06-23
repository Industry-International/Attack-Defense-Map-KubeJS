import { $Level_ } from "@package/net/minecraft/world/level";
import { $TrackGraph } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List, $Set } from "@package/java/util";
import { $ChunkLoader, $ChunkLoadManager$LoadedChunkPos, $LoaderType, $LoaderMode, $LoaderType_ } from "@package/com/hlysine/create_power_loader/content";
import { $GlobalStation } from "@package/com/simibubi/create/content/trains/station";
import { $Carriage, $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $Pair } from "@package/net/createmod/catnip/data";

declare module "@package/com/hlysine/create_power_loader/content/trains" {
    export class $CarriageChunkLoader implements $ChunkLoader {
        getLocation(): $Pair<$ResourceLocation, $BlockPos>;
        write(): $CompoundTag;
        static read(arg0: $Carriage, arg1: $CompoundTag_): $CarriageChunkLoader;
        tick(arg0: $Level_): void;
        onRemove(): void;
        getLoaderMode(): $LoaderMode;
        getLoaderType(): $LoaderType;
        getForcedChunks(): $Set<$ChunkLoadManager$LoadedChunkPos>;
        addToManager(): void;
        removeFromManager(): void;
        carriage: $Carriage;
        known: boolean;
        forcedChunks: $Set<$ChunkLoadManager$LoadedChunkPos>;
        brass: boolean;
        andesite: boolean;
        constructor(arg0: $Carriage, arg1: boolean, arg2: boolean, arg3: boolean);
        get location(): $Pair<$ResourceLocation, $BlockPos>;
        get loaderMode(): $LoaderMode;
        get loaderType(): $LoaderType;
    }
    export class $TrainChunkLoader implements $ChunkLoader {
        getLocation(): $Pair<$ResourceLocation, $BlockPos>;
        write(): $CompoundTag;
        static read(arg0: $Train, arg1: $CompoundTag_): $TrainChunkLoader;
        tick(arg0: $Level_): void;
        onRemove(): void;
        getLoaderMode(): $LoaderMode;
        getLoaderType(): $LoaderType;
        addToManager(): void;
        getForcedChunks(): $Set<$ChunkLoadManager$LoadedChunkPos>;
        removeFromManager(): void;
        carriageLoaders: $List<$CarriageChunkLoader>;
        constructor(arg0: $Train);
        get location(): $Pair<$ResourceLocation, $BlockPos>;
        get loaderMode(): $LoaderMode;
        get loaderType(): $LoaderType;
        get forcedChunks(): $Set<$ChunkLoadManager$LoadedChunkPos>;
    }
    export class $StationChunkLoader implements $ChunkLoader {
        getLocation(): $Pair<$ResourceLocation, $BlockPos>;
        write(): $CompoundTag;
        static read(arg0: $GlobalStation, arg1: $CompoundTag_): $StationChunkLoader;
        tick(arg0: $TrackGraph, arg1: boolean): void;
        onRemove(): void;
        getLoaderMode(): $LoaderMode;
        getLoaderType(): $LoaderType;
        removeAttachment(arg0: $BlockPos_): void;
        addAttachment(arg0: $LoaderType_, arg1: $BlockPos_): void;
        addToManager(): void;
        getForcedChunks(): $Set<$ChunkLoadManager$LoadedChunkPos>;
        static isEnabledForStation(arg0: $LoaderType_): boolean;
        removeFromManager(): void;
        attachments: $Set<$StationChunkLoader$AttachedLoader>;
        forcedChunks: $Set<$ChunkLoadManager$LoadedChunkPos>;
        constructor(arg0: $GlobalStation);
        get location(): $Pair<$ResourceLocation, $BlockPos>;
        get loaderMode(): $LoaderMode;
        get loaderType(): $LoaderType;
    }
    export class $CPLGlobalStation {
    }
    export interface $CPLGlobalStation {
        getLoader(): $StationChunkLoader;
        setLoader(arg0: $StationChunkLoader): void;
    }
    export class $StationChunkLoader$AttachedLoader extends $Record {
        type(): $LoaderType;
        write(): $CompoundTag;
        static read(arg0: $CompoundTag_): $StationChunkLoader$AttachedLoader;
        pos(): $BlockPos;
        constructor(type: $LoaderType_, pos: $BlockPos_);
    }
    export class $CPLTrain {
    }
    export interface $CPLTrain {
        getLoader(): $TrainChunkLoader;
        setLoader(arg0: $TrainChunkLoader): void;
    }
}
