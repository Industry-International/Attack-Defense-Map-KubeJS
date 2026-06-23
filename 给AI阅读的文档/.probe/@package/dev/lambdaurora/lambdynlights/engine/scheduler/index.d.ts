import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/dev/lambdaurora/lambdynlights/engine/scheduler" {
    export class $ChunkRebuildStatus extends $Enum<$ChunkRebuildStatus> {
        needsRebuild(): boolean;
        needsCleanup(): boolean;
        static values(): $ChunkRebuildStatus[];
        static valueOf(name: string): $ChunkRebuildStatus;
        color(): number;
        static REQUESTED: $ChunkRebuildStatus;
        static VALUES: $List<$ChunkRebuildStatus>;
        static AFFECTED: $ChunkRebuildStatus;
        static REMOVE_REQUESTED: $ChunkRebuildStatus;
        static REQUESTED_AGAIN: $ChunkRebuildStatus;
    }
    /**
     * Values that may be interpreted as {@link $ChunkRebuildStatus}.
     */
    export type $ChunkRebuildStatus_ = "requested" | "affected" | "requested_again" | "remove_requested";
}
