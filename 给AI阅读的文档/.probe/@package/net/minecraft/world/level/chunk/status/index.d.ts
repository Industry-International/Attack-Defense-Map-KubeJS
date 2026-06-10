import { $UnaryOperator_ } from "@package/java/util/function";
import { $ChunkTaskPriorityQueueSorter$Message, $ThreadedLevelLightEngine, $ServerLevel, $GenerationChunkHolder } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ProcessorHandle } from "@package/net/minecraft/util/thread";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Runnable_, $Enum, $Record, $Runnable } from "@package/java/lang";
import { $List, $EnumSet } from "@package/java/util";
import { $Heightmap$Types, $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $StaticCache2D } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/chunk/status" {
    export class $ChunkStatusTask {
    }
    export interface $ChunkStatusTask {
        doWork(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatusTask}.
     */
    export type $ChunkStatusTask_ = ((arg0: $WorldGenContext, arg1: $ChunkStep, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess) => $CompletableFuture<$ChunkAccess>);
    export class $ChunkStatusTasks {
        static full(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateSurface(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static light(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static passThrough(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateCarvers(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static initializeLight(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateSpawn(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateFeatures(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateNoise(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static loadStructureStarts(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateStructureStarts(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateBiomes(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateStructureReferences(arg0: $WorldGenContext_, arg1: $ChunkStep_, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        constructor();
    }
    export class $ChunkStep$Builder {
        build(): $ChunkStep;
        blockStateWriteRadius(arg0: number): $ChunkStep$Builder;
        setTask(arg0: $ChunkStatusTask_): $ChunkStep$Builder;
        addRequirement(arg0: $ChunkStatus_, arg1: number): $ChunkStep$Builder;
        constructor(arg0: $ChunkStatus_);
        constructor(arg0: $ChunkStatus_, arg1: $ChunkStep_);
        set task(value: $ChunkStatusTask_);
    }
    export class $WorldGenContext extends $Record {
        generator(): $ChunkGenerator;
        level(): $ServerLevel;
        structureManager(): $StructureTemplateManager;
        lightEngine(): $ThreadedLevelLightEngine;
        mainThreadMailBox(): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        constructor(arg0: $ServerLevel, arg1: $ChunkGenerator, arg2: $StructureTemplateManager, arg3: $ThreadedLevelLightEngine, arg4: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>);
    }
    export class $ChunkPyramid extends $Record {
        steps(): $ImmutableList<$ChunkStep>;
        getStepTo(arg0: $ChunkStatus_): $ChunkStep;
        static GENERATION_PYRAMID: $ChunkPyramid;
        static LOADING_PYRAMID: $ChunkPyramid;
        constructor(arg0: $ImmutableList<$ChunkStep_>);
    }
    export class $ChunkDependencies {
        size(): number;
        get(arg0: number): $ChunkStatus;
        asList(): $ImmutableList<$ChunkStatus>;
        getRadius(): number;
        getRadiusOf(arg0: $ChunkStatus_): number;
        constructor(arg0: $ImmutableList<$ChunkStatus_>);
        get radius(): number;
    }
    export interface $ChunkStatus extends RegistryMarked<RegistryTypes.ChunkStatusTag, RegistryTypes.ChunkStatus> {}
    export class $ChunkPyramid$Builder {
        step(arg0: $ChunkStatus_, arg1: $UnaryOperator_<$ChunkStep$Builder>): $ChunkPyramid$Builder;
        build(): $ChunkPyramid;
        constructor();
    }
    export class $ChunkType extends $Enum<$ChunkType> {
        static values(): $ChunkType[];
        static valueOf(arg0: string): $ChunkType;
        static LEVELCHUNK: $ChunkType;
        static PROTOCHUNK: $ChunkType;
    }
    /**
     * Values that may be interpreted as {@link $ChunkType}.
     */
    export type $ChunkType_ = "protochunk" | "levelchunk";
    export class $ChunkStep extends $Record {
        apply(arg0: $WorldGenContext_, arg1: $StaticCache2D<$GenerationChunkHolder>, arg2: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        task(): $ChunkStatusTask;
        targetStatus(): $ChunkStatus;
        blockStateWriteRadius(): number;
        accumulatedDependencies(): $ChunkDependencies;
        getAccumulatedRadiusOf(arg0: $ChunkStatus_): number;
        directDependencies(): $ChunkDependencies;
        constructor(arg0: $ChunkStatus_, arg1: $ChunkDependencies, arg2: $ChunkDependencies, arg3: number, arg4: $ChunkStatusTask_);
    }
    export class $ChunkStatus {
        getName(): string;
        static max(arg0: $ChunkStatus_, arg1: $ChunkStatus_): $ChunkStatus;
        getParent(): $ChunkStatus;
        getIndex(): number;
        isAfter(arg0: $ChunkStatus_): boolean;
        isBefore(arg0: $ChunkStatus_): boolean;
        static byName(arg0: string): $ChunkStatus;
        isOrBefore(arg0: $ChunkStatus_): boolean;
        getChunkType(): $ChunkType;
        static getStatusList(): $List<$ChunkStatus>;
        isOrAfter(arg0: $ChunkStatus_): boolean;
        heightmapsAfter(): $EnumSet<$Heightmap$Types>;
        static LIGHT: $ChunkStatus;
        static NOISE: $ChunkStatus;
        static MAX_STRUCTURE_DISTANCE: number;
        static SPAWN: $ChunkStatus;
        static FULL: $ChunkStatus;
        static FEATURES: $ChunkStatus;
        static STRUCTURE_STARTS: $ChunkStatus;
        static STRUCTURE_REFERENCES: $ChunkStatus;
        static FINAL_HEIGHTMAPS: $EnumSet<$Heightmap$Types>;
        static SURFACE: $ChunkStatus;
        static INITIALIZE_LIGHT: $ChunkStatus;
        static BIOMES: $ChunkStatus;
        static CARVERS: $ChunkStatus;
        static EMPTY: $ChunkStatus;
        constructor(arg0: $ChunkStatus_, arg1: $EnumSet<$Heightmap$Types_>, arg2: $ChunkType_);
        get name(): string;
        get parent(): $ChunkStatus;
        get index(): number;
        get chunkType(): $ChunkType;
        static get statusList(): $List<$ChunkStatus>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatus}.
     */
    export type $ChunkStatus_ = RegistryTypes.ChunkStatus;
}
