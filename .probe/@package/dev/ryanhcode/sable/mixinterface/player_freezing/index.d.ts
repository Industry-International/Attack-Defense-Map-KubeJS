import { $UUID_, $UUID } from "@package/java/util";
import { $Vector3dc } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/mixinterface/player_freezing" {
    export class $PlayerFreezeExtension {
    }
    export interface $PlayerFreezeExtension {
        sable$freezeTo(arg0: $UUID_, arg1: $Vector3dc): void;
        sable$teleport(): void;
        sable$getFrozenToSubLevelAnchor(): $Vector3dc;
        sable$getFrozenToSubLevel(): $UUID;
        sable$tickStopFreezing(): void;
    }
}
