import { $Level_, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/redstone" {
    export class $CollectingNeighborUpdater$ShapeUpdate extends $Record implements $CollectingNeighborUpdater$NeighborUpdates {
    }
    export class $CollectingNeighborUpdater$SimpleNeighborUpdate extends $Record implements $CollectingNeighborUpdater$NeighborUpdates {
    }
    export class $InstantNeighborUpdater implements $NeighborUpdater {
        shapeUpdate(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        neighborChanged(arg0: $BlockState_, arg1: $BlockPos_, arg2: $Block_, arg3: $BlockPos_, arg4: boolean): void;
        neighborChanged(arg0: $BlockPos_, arg1: $Block_, arg2: $BlockPos_): void;
        updateNeighborsAtExceptFromFacing(arg0: $BlockPos_, arg1: $Block_, arg2: $Direction_): void;
        constructor(arg0: $Level_);
    }
    export class $Redstone {
        static SIGNAL_MIN: number;
        static SIGNAL_NONE: number;
        static SIGNAL_MAX: number;
        constructor();
    }
    export class $CollectingNeighborUpdater implements $NeighborUpdater {
        shapeUpdate(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        neighborChanged(arg0: $BlockState_, arg1: $BlockPos_, arg2: $Block_, arg3: $BlockPos_, arg4: boolean): void;
        neighborChanged(arg0: $BlockPos_, arg1: $Block_, arg2: $BlockPos_): void;
        updateNeighborsAtExceptFromFacing(arg0: $BlockPos_, arg1: $Block_, arg2: $Direction_): void;
        constructor(arg0: $Level_, arg1: number);
    }
    export class $CollectingNeighborUpdater$NeighborUpdates {
    }
    export interface $CollectingNeighborUpdater$NeighborUpdates {
    }
    /**
     * Values that may be interpreted as {@link $CollectingNeighborUpdater$NeighborUpdates}.
     */
    export type $CollectingNeighborUpdater$NeighborUpdates_ = (() => void);
    export class $CollectingNeighborUpdater$FullNeighborUpdate extends $Record implements $CollectingNeighborUpdater$NeighborUpdates {
    }
    export class $CollectingNeighborUpdater$MultiNeighborUpdate implements $CollectingNeighborUpdater$NeighborUpdates {
    }
    export class $NeighborUpdater {
        static executeShapeUpdate(arg0: $LevelAccessor, arg1: $Direction_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_, arg5: number, arg6: number): void;
        static executeUpdate(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        static UPDATE_ORDER: $Direction[];
    }
    export interface $NeighborUpdater {
        shapeUpdate(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        neighborChanged(arg0: $BlockState_, arg1: $BlockPos_, arg2: $Block_, arg3: $BlockPos_, arg4: boolean): void;
        neighborChanged(arg0: $BlockPos_, arg1: $Block_, arg2: $BlockPos_): void;
        updateNeighborsAtExceptFromFacing(arg0: $BlockPos_, arg1: $Block_, arg2: $Direction_): void;
    }
}
