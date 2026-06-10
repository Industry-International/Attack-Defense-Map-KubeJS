import { $FloatSize, $TaffySize } from "@package/dev/vfyjxf/taffy/geometry";
import { $AvailableSpace } from "@package/dev/vfyjxf/taffy/style";

declare module "@package/dev/vfyjxf/taffy/util" {
    export class $MeasureFunc {
    }
    export interface $MeasureFunc {
        measure(arg0: $FloatSize, arg1: $TaffySize<$AvailableSpace>): $FloatSize;
    }
    /**
     * Values that may be interpreted as {@link $MeasureFunc}.
     */
    export type $MeasureFunc_ = ((arg0: $FloatSize, arg1: $TaffySize<$AvailableSpace>) => $FloatSize);
}
