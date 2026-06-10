import { $BiConsumer_ } from "@package/java/util/function";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Map_ } from "@package/java/util";

declare module "@package/xfacthd/framedblocks/api/shapes" {
    export class $ShapeProvider {
        static of(arg0: $Map_<$BlockState_, $VoxelShape>): $ShapeProvider;
    }
    export interface $ShapeProvider {
        get(arg0: $BlockState_): $VoxelShape;
        isEmpty(): boolean;
        forEach(arg0: $BiConsumer_<$BlockState, $VoxelShape>): void;
        get empty(): boolean;
    }
}
