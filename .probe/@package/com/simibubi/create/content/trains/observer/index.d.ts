import { $FilterItemStack } from "@package/com/simibubi/create/content/logistics/filter";
import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $TrackNodeLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SingleBlockEntityEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $UUID } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/com/simibubi/create/content/trains/observer" {
    export class $TrackObserver extends $SingleBlockEntityEdgePoint {
        getFilter(): $FilterItemStack;
        keepAlive(arg0: $Train): void;
        isActivated(): boolean;
        setFilterAndNotify(arg0: $Level_, arg1: $ItemStack_): void;
        getCurrentTrain(): $UUID;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        blockEntityDimension: $ResourceKey<$Level>;
        id: $UUID;
        position: number;
        constructor();
        get filter(): $FilterItemStack;
        get activated(): boolean;
        get currentTrain(): $UUID;
    }
}
