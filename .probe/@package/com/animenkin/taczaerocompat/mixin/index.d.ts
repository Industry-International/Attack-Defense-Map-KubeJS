import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";

declare module "@package/com/animenkin/taczaerocompat/mixin" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        taczAero$getLevel(): $ClientLevel;
        taczAero$setY(arg0: number): void;
        taczAero$setZ(arg0: number): void;
        taczAero$getXo(): number;
        taczAero$getX(): number;
        taczAero$getZo(): number;
        taczAero$getY(): number;
        taczAero$getYo(): number;
        taczAero$setX(arg0: number): void;
        taczAero$getZ(): number;
    }
}
