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
        faceVelocity(): boolean;
        updateModules(): $List<$Holder<$ParticleModuleData>>;
        collisionModules(): $List<$Holder<$ParticleModuleData>>;
        forceModules(): $List<$Holder<$ParticleModuleData>>;
        renderModules(): $List<$Holder<$ParticleModuleData>>;
        renderStyle(): $RenderStyle;
        getAllModules(): $List<$Holder<$ParticleModuleData>>;
        getRegistryId(): $ResourceLocation;
        shouldCollide(): boolean;
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
        rotation(): $Vector3fc;
        getRegistryId(): $ResourceLocation;
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
        maxParticles(): number;
        getRegistryId(): $ResourceLocation;
        particleData(): $QuasarParticleData;
        emitterSettings(): $EmitterSettings;
        particleDataHolder(): $Holder<$QuasarParticleData>;
        maxLifetime(): number;
        static CODEC: $Codec<$Holder<$ParticleEmitterData>>;
        static DIRECT_CODEC: $Codec<$ParticleEmitterData>;
        constructor(maxLifetime: number, loop: boolean, rate: number, count: number, maxParticles: number, emitterSettings: $EmitterSettings_, particleDataHolder: $Holder_<$QuasarParticleData>);
        get registryId(): $ResourceLocation;
    }
    export class $ParticleSettings extends $Record {
        getRegistryId(): $ResourceLocation;
        particleLifetimeVariation(): number;
        randomInitialRotation(): boolean;
        particleSizeVariation(): number;
        randomInitialDirection(): boolean;
        randomSize(): boolean;
        initialDirection(): $Vector3fc;
        initialDirection(arg0: $RandomSource): $Vector3fc;
        particleSpeed(): number;
        particleSpeed(arg0: $RandomSource): number;
        particleSize(): number;
        particleSize(arg0: $RandomSource): number;
        particleLifetime(arg0: $RandomSource): number;
        particleLifetime(): number;
        randomSpeed(): boolean;
        randomLifetime(): boolean;
        particleDirection(arg0: $RandomSource): $Vector3f;
        static CODEC: $Codec<$Holder<$ParticleSettings>>;
        static DIRECT_CODEC: $Codec<$ParticleSettings>;
        constructor(particleSpeed: number, particleSize: number, particleSizeVariation: number, particleLifetime: number, particleLifetimeVariation: number, initialDirection: $Vector3fc, randomInitialDirection: boolean, randomInitialRotation: boolean, randomSpeed: boolean, randomSize: boolean, randomLifetime: boolean);
        get registryId(): $ResourceLocation;
    }
    export class $EmitterSettings extends $Record {
        emitterShapeSettings(): $List<$EmitterShapeSettings>;
        particleSettingsHolder(): $Holder<$ParticleSettings>;
        forceSpawn(): boolean;
        emitterShapeSettingsHolders(): $List<$Holder<$EmitterShapeSettings>>;
        particleSettings(): $ParticleSettings;
        static CODEC: $Codec<$EmitterSettings>;
        constructor(emitterShapeSettingsHolders: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder: $Holder_<$ParticleSettings>, forceSpawn: boolean);
    }
}
