import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";

declare module "@package/com/animenkin/taczaerocompat/mixin" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        taczAero$getYo(): number;
        taczAero$getX(): number;
        taczAero$getLevel(): $ClientLevel;
        taczAero$getY(): number;
        taczAero$getZo(): number;
        taczAero$getXo(): number;
        taczAero$setZ(arg0: number): void;
        taczAero$setX(arg0: number): void;
        taczAero$setY(arg0: number): void;
        taczAero$getZ(): number;
    }
}
