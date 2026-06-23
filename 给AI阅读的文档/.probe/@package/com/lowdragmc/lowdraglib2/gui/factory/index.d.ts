import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/com/lowdragmc/lowdraglib2/gui/factory" {
    export class $IContainerUIHolder {
    }
    export interface $IContainerUIHolder {
        isStillValid(arg0: $Player): boolean;
        createUI(arg0: $Player): $ModularUI;
    }
}
