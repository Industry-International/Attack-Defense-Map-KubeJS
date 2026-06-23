import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";

declare module "@package/com/animenkin/taczaerocompat/mixin" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        taczAero$getXo(): number;
        taczAero$getX(): number;
        taczAero$getY(): number;
        taczAero$getZo(): number;
        taczAero$setX(arg0: number): void;
        taczAero$setZ(arg0: number): void;
        taczAero$getYo(): number;
        taczAero$setY(arg0: number): void;
        taczAero$getLevel(): $ClientLevel;
        taczAero$getZ(): number;
    }
}
