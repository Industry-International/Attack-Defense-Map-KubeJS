import { $Instance } from "@package/dev/engine_room/flywheel/api/instance";
import { $Consumer_ } from "@package/java/util/function";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/engine_room/flywheel/api/visual" {
    export class $BlockEntityVisual<T extends $BlockEntity> {
    }
    export interface $BlockEntityVisual<T extends $BlockEntity> extends $Visual {
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
    }
    export class $Visual {
    }
    export interface $Visual {
        update(arg0: number): void;
        "delete"(): void;
    }
    export class $EntityVisual<T extends $Entity> {
    }
    export interface $EntityVisual<T extends $Entity> extends $Visual {
    }
}
