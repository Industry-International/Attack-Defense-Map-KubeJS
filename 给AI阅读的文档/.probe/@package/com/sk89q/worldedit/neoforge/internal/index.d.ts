import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/com/sk89q/worldedit/neoforge/internal" {
    export class $ExtendedChunk {
    }
    export interface $ExtendedChunk {
        setBlockState(pos: $BlockPos_, state: $BlockState_, moved: boolean, update: boolean): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedChunk}.
     */
    export type $ExtendedChunk_ = ((pos: $BlockPos, state: $BlockState, moved: boolean, update: boolean) => $BlockState_);
}
