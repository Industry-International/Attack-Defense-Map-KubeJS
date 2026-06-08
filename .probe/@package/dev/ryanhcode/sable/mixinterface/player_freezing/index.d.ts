import { $UUID_, $UUID } from "@package/java/util";
import { $Vector3dc } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/mixinterface/player_freezing" {
    export class $PlayerFreezeExtension {
    }
    export interface $PlayerFreezeExtension {
        sable$getFrozenToSubLevelAnchor(): $Vector3dc;
        sable$freezeTo(arg0: $UUID_, arg1: $Vector3dc): void;
        sable$teleport(): void;
        sable$getFrozenToSubLevel(): $UUID;
        sable$tickStopFreezing(): void;
    }
}
