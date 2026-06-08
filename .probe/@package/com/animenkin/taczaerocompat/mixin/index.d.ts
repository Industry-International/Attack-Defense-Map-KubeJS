import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";

declare module "@package/com/animenkin/taczaerocompat/mixin" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        taczAero$setY(arg0: number): void;
        taczAero$getZo(): number;
        taczAero$getLevel(): $ClientLevel;
        taczAero$getZ(): number;
        taczAero$getYo(): number;
        taczAero$getX(): number;
        taczAero$setX(arg0: number): void;
        taczAero$setZ(arg0: number): void;
        taczAero$getXo(): number;
        taczAero$getY(): number;
    }
}
