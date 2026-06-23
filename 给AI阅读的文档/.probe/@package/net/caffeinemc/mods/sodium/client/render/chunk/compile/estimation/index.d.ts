import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $RenderSection } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $Object, $Record, $Class } from "@package/java/lang";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation" {
    export class $JobEffort extends $Record implements $Abstract2DLinearEstimator$DataPair<$Class<never>> {
        x(): number;
        duration(): number;
        y(): number;
        category(): $Object;
        static untilNowWithEffort(arg0: $Class<never>, arg1: number, arg2: number): $JobEffort;
        effort(): number;
        constructor(category: $Class<never>, duration: number, effort: number);
    }
    export class $MeshTaskSizeEstimator extends $Average1DEstimator<$MeshResultSize$SectionCategory> {
        estimateSize(arg0: $RenderSection): number;
        resultForSection(arg0: $RenderSection, arg1: number): $MeshResultSize;
        static NEW_DATA_RATIO: number;
        constructor(arg0: $ClientLevel);
    }
    export class $JobDurationEstimator extends $ExpDecayLinear2DEstimator<$Class<never>> {
        estimateJobDuration(arg0: $Class<never>, arg1: number): number;
        static INITIAL_SAMPLE_TARGET: number;
        static NEW_DATA_RATIO: number;
        constructor();
    }
    export class $UploadDurationEstimator extends $ExpDecayLinear2DEstimator<void> {
        estimateUploadDuration(arg0: number): number;
        static MIN_BATCH_SIZE: number;
        static INITIAL_SAMPLE_TARGET: number;
        static NEW_DATA_RATIO: number;
        constructor();
    }
}
