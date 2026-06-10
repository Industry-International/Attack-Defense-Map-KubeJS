import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Vector3f } from "@package/org/joml";

declare module "@package/com/tacz/guns/client/resource/pojo/display/ammo" {
    export class $AmmoParticle {
        getName(): string;
        getCount(): number;
        setParticleOptions(arg0: $ParticleOptions_): void;
        getSpeed(): number;
        getParticleOptions(): $ParticleOptions;
        getLifeTime(): number;
        getDelta(): $Vector3f;
        constructor();
        get name(): string;
        get count(): number;
        get speed(): number;
        get lifeTime(): number;
        get delta(): $Vector3f;
    }
}
