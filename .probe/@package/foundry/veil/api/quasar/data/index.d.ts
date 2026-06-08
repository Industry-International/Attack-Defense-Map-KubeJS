import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $SpriteData, $RenderStyle, $RenderStyle_, $SpriteData_ } from "@package/foundry/veil/api/quasar/particle";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParticleModuleData } from "@package/foundry/veil/api/quasar/data/module";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $EmitterShape_, $EmitterShape } from "@package/foundry/veil/api/quasar/emitters/shape";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Vector3dc, $Vector3fc, $Vector3d, $Vector3f } from "@package/org/joml";
export * as module from "@package/foundry/veil/api/quasar/data/module";

declare module "@package/foundry/veil/api/quasar/data" {
    export class $QuasarParticleData extends $Record {
        additive(): boolean;
        shouldCollide(): boolean;
        faceVelocity(): boolean;
        getAllModules(): $List<$Holder<$ParticleModuleData>>;
        updateModules(): $List<$Holder<$ParticleModuleData>>;
        getRegistryId(): $ResourceLocation;
        renderStyle(): $RenderStyle;
        collisionModules(): $List<$Holder<$ParticleModuleData>>;
        forceModules(): $List<$Holder<$ParticleModuleData>>;
        renderModules(): $List<$Holder<$ParticleModuleData>>;
        initModules(): $List<$Holder<$ParticleModuleData>>;
        velocityStretchFactor(): number;
        spriteData(): $SpriteData;
        static CODEC: $Codec<$Holder<$QuasarParticleData>>;
        static DIRECT_CODEC: $Codec<$QuasarParticleData>;
        constructor(shouldCollide: boolean, faceVelocity: boolean, velocityStretchFactor: number, initModules: $List_<$Holder_<$ParticleModuleData>>, updateModules: $List_<$Holder_<$ParticleModuleData>>, collisionModules: $List_<$Holder_<$ParticleModuleData>>, forceModules: $List_<$Holder_<$ParticleModuleData>>, renderModules: $List_<$Holder_<$ParticleModuleData>>, spriteData: $SpriteData_, additive: boolean, renderStyle: $RenderStyle_);
        get allModules(): $List<$Holder<$ParticleModuleData>>;
        get registryId(): $ResourceLocation;
    }
    export class $EmitterShapeSettings extends $Record {
        dimensions(): $Vector3fc;
        shape(): $EmitterShape;
        getPos(arg0: $RandomSource, arg1: $Vector3dc): $Vector3d;
        getRegistryId(): $ResourceLocation;
        rotation(): $Vector3fc;
        fromSurface(): boolean;
        static CODEC: $Codec<$Holder<$EmitterShapeSettings>>;
        static DIRECT_CODEC: $Codec<$EmitterShapeSettings>;
        constructor(shape: $EmitterShape_, dimensions: $Vector3fc, rotation: $Vector3fc, fromSurface: boolean);
        get registryId(): $ResourceLocation;
    }
    export class $ParticleEmitterData extends $Record {
        count(): number;
        loop(): boolean;
        rate(): number;
        getRegistryId(): $ResourceLocation;
        maxParticles(): number;
        maxLifetime(): number;
        particleData(): $QuasarParticleData;
        particleDataHolder(): $Holder<$QuasarParticleData>;
        emitterSettings(): $EmitterSettings;
        static CODEC: $Codec<$Holder<$ParticleEmitterData>>;
        static DIRECT_CODEC: $Codec<$ParticleEmitterData>;
        constructor(maxLifetime: number, loop: boolean, rate: number, count: number, maxParticles: number, emitterSettings: $EmitterSettings_, particleDataHolder: $Holder_<$QuasarParticleData>);
        get registryId(): $ResourceLocation;
    }
    export class $ParticleSettings extends $Record {
        getRegistryId(): $ResourceLocation;
        randomSize(): boolean;
        particleSizeVariation(): number;
        particleLifetimeVariation(): number;
        randomInitialRotation(): boolean;
        randomInitialDirection(): boolean;
        initialDirection(): $Vector3fc;
        initialDirection(arg0: $RandomSource): $Vector3fc;
        particleLifetime(): number;
        particleLifetime(arg0: $RandomSource): number;
        particleDirection(arg0: $RandomSource): $Vector3f;
        particleSpeed(): number;
        particleSpeed(arg0: $RandomSource): number;
        randomSpeed(): boolean;
        particleSize(arg0: $RandomSource): number;
        particleSize(): number;
        randomLifetime(): boolean;
        static CODEC: $Codec<$Holder<$ParticleSettings>>;
        static DIRECT_CODEC: $Codec<$ParticleSettings>;
        constructor(particleSpeed: number, particleSize: number, particleSizeVariation: number, particleLifetime: number, particleLifetimeVariation: number, initialDirection: $Vector3fc, randomInitialDirection: boolean, randomInitialRotation: boolean, randomSpeed: boolean, randomSize: boolean, randomLifetime: boolean);
        get registryId(): $ResourceLocation;
    }
    export class $EmitterSettings extends $Record {
        particleSettingsHolder(): $Holder<$ParticleSettings>;
        emitterShapeSettings(): $List<$EmitterShapeSettings>;
        particleSettings(): $ParticleSettings;
        emitterShapeSettingsHolders(): $List<$Holder<$EmitterShapeSettings>>;
        forceSpawn(): boolean;
        static CODEC: $Codec<$EmitterSettings>;
        constructor(emitterShapeSettingsHolders: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder: $Holder_<$ParticleSettings>, forceSpawn: boolean);
    }
}
