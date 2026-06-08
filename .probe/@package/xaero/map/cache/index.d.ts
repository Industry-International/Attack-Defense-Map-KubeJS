import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Set_ } from "@package/java/util";

declare module "@package/xaero/map/cache" {
    export class $BrokenBlockTintCache {
        getSize(): number;
        isBroken(arg0: $BlockState_): boolean;
        setBroken(arg0: $BlockState_): void;
        constructor(arg0: $Set_<$BlockState_>);
        get size(): number;
    }
    export class $BlockStateShortShapeCache {
        reset(): void;
        isShort(arg0: $BlockState_): boolean;
        supplyForIOThread(): void;
        constructor();
    }
}
