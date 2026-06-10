import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/api/contraption/transformable" {
    export class $TransformableBlockEntity {
    }
    export interface $TransformableBlockEntity {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
    }
    /**
     * Values that may be interpreted as {@link $TransformableBlockEntity}.
     */
    export type $TransformableBlockEntity_ = ((arg0: $BlockEntity, arg1: $StructureTransform) => void);
}
