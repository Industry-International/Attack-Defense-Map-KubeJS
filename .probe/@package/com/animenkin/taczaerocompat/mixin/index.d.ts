import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";

declare module "@package/com/animenkin/taczaerocompat/mixin" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        taczAero$setX(arg0: number): void;
        taczAero$getLevel(): $ClientLevel;
        taczAero$getXo(): number;
        taczAero$getZo(): number;
        taczAero$getY(): number;
        taczAero$setY(arg0: number): void;
        taczAero$getX(): number;
        taczAero$getZ(): number;
        taczAero$setZ(arg0: number): void;
        taczAero$getYo(): number;
    }
}
