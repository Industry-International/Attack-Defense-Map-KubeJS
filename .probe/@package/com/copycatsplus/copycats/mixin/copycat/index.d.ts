import { $Direction$Axis_ } from "@package/net/minecraft/core";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";

declare module "@package/com/copycatsplus/copycats/mixin/copycat" {
    export class $VoxelShapeAccessor {
    }
    export interface $VoxelShapeAccessor {
        copycats$getShape(): $DiscreteVoxelShape;
        copycats$setShape(arg0: $DiscreteVoxelShape): void;
        copycats$callGetCoords(arg0: $Direction$Axis_): $DoubleList;
    }
}
