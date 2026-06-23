import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Vector3f } from "@package/org/joml";

declare module "@package/com/tacz/guns/client/resource/pojo/display/ammo" {
    export class $AmmoParticle {
        getName(): string;
        getCount(): number;
        getSpeed(): number;
        setParticleOptions(arg0: $ParticleOptions_): void;
        getLifeTime(): number;
        getParticleOptions(): $ParticleOptions;
        getDelta(): $Vector3f;
        constructor();
        get name(): string;
        get count(): number;
        get speed(): number;
        get lifeTime(): number;
        get delta(): $Vector3f;
    }
}
