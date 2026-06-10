import { $Options } from "@package/eu/ha3/presencefootsteps/sound";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Random } from "@package/java/util";

declare module "@package/eu/ha3/presencefootsteps/sound/player" {
    export class $SoundPlayer {
    }
    export interface $SoundPlayer {
        playSound(arg0: $LivingEntity, arg1: string, arg2: number, arg3: number, arg4: $Options): void;
        getRNG(): $Random;
        think(): void;
        get RNG(): $Random;
    }
}
