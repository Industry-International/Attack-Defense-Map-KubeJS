import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IXaeroMinimap } from "@package/xaero/common";

declare module "@package/xaero/common/cache" {
    export class $BlockStateShortShapeCache {
        reset(): void;
        isShort(arg0: $BlockState_): boolean;
        constructor(arg0: $IXaeroMinimap);
    }
}
