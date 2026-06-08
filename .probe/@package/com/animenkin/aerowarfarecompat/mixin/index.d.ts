import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";

declare module "@package/com/animenkin/aerowarfarecompat/mixin" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        aerowarfare$setX(arg0: number): void;
        aerowarfare$setY(arg0: number): void;
        aerowarfare$getX(): number;
        aerowarfare$getY(): number;
        aerowarfare$getZ(): number;
        aerowarfare$getYo(): number;
        aerowarfare$getXo(): number;
        aerowarfare$getZo(): number;
        aerowarfare$setZ(arg0: number): void;
        aerowarfare$getLevel(): $ClientLevel;
    }
}
