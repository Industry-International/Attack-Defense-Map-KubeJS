import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";

declare module "@package/xfacthd/framedblocks/common/data/component" {
    export class $FramedMap$MarkerRemover {
    }
    export interface $FramedMap$MarkerRemover {
        framedblocks$removeMapMarker(arg0: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $FramedMap$MarkerRemover}.
     */
    export type $FramedMap$MarkerRemover_ = ((arg0: $BlockPos) => void);
}
