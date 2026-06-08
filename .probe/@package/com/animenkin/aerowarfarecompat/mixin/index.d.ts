import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";

declare module "@package/com/animenkin/aerowarfarecompat/mixin" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        aerowarfare$getZ(): number;
        aerowarfare$getY(): number;
        aerowarfare$setZ(arg0: number): void;
        aerowarfare$getYo(): number;
        aerowarfare$setX(arg0: number): void;
        aerowarfare$getXo(): number;
        aerowarfare$setY(arg0: number): void;
        aerowarfare$getZo(): number;
        aerowarfare$getX(): number;
        aerowarfare$getLevel(): $ClientLevel;
    }
}
