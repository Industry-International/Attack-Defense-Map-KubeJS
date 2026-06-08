import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";

declare module "@package/com/animenkin/aerowarfarecompat/mixin" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        aerowarfare$getLevel(): $ClientLevel;
        aerowarfare$getZ(): number;
        aerowarfare$getXo(): number;
        aerowarfare$getX(): number;
        aerowarfare$setY(arg0: number): void;
        aerowarfare$setX(arg0: number): void;
        aerowarfare$getY(): number;
        aerowarfare$getZo(): number;
        aerowarfare$getYo(): number;
        aerowarfare$setZ(arg0: number): void;
    }
}
