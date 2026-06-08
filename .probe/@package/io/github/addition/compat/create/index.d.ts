import { $Direction_, $Direction } from "@package/net/minecraft/core";

declare module "@package/io/github/addition/compat/create" {
    export class $DeployerWorldMode {
    }
    export interface $DeployerWorldMode {
        aero_addition$setWorldMode(arg0: boolean): void;
        aero_addition$isWorldMode(): boolean;
    }
    export class $DeployerWorldPlacementContext {
    }
    export interface $DeployerWorldPlacementContext {
        aero_addition$setPlacementFaceOverride(arg0: $Direction_): void;
        aero_addition$getPlacementFaceOverride(): $Direction;
    }
}
