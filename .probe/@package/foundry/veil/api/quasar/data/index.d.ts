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
        initModules(): $List<$Holder<$ParticleModuleData>>;
        spriteData(): $SpriteData;
        velocityStretchFactor(): number;
        collisionModules(): $List<$Holder<$ParticleModuleData>>;
        getAllModules(): $List<$Holder<$ParticleModuleData>>;
        renderModules(): $List<$Holder<$ParticleModuleData>>;
        getRegistryId(): $ResourceLocation;
        forceModules(): $List<$Holder<$ParticleModuleData>>;
        updateModules(): $List<$Holder<$ParticleModuleData>>;
        renderStyle(): $RenderStyle;
        faceVelocity(): boolean;
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
        fromSurface(): boolean;
        getRegistryId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$EmitterShapeSettings>>;
        static DIRECT_CODEC: $Codec<$EmitterShapeSettings>;
        constructor(shape: $EmitterShape_, dimensions: $Vector3fc, rotation: $Vector3fc, fromSurface: boolean);
        get registryId(): $ResourceLocation;
    }
    export class $ParticleEmitterData extends $Record {
        count(): number;
        loop(): boolean;
        rate(): number;
        particleData(): $QuasarParticleData;
        maxLifetime(): number;
        maxParticles(): number;
        getRegistryId(): $ResourceLocation;
        emitterSettings(): $EmitterSettings;
        particleDataHolder(): $Holder<$QuasarParticleData>;
        static CODEC: $Codec<$Holder<$ParticleEmitterData>>;
        static DIRECT_CODEC: $Codec<$ParticleEmitterData>;
        constructor(maxLifetime: number, loop: boolean, rate: number, count: number, maxParticles: number, emitterSettings: $EmitterSettings_, particleDataHolder: $Holder_<$QuasarParticleData>);
        get registryId(): $ResourceLocation;
    }
    export class $ParticleSettings extends $Record {
        randomSize(): boolean;
        getRegistryId(): $ResourceLocation;
        particleSizeVariation(): number;
        randomInitialDirection(): boolean;
        randomInitialRotation(): boolean;
        particleLifetimeVariation(): number;
        particleSize(arg0: $RandomSource): number;
        particleSize(): number;
        particleLifetime(arg0: $RandomSource): number;
        particleLifetime(): number;
        initialDirection(arg0: $RandomSource): $Vector3fc;
        initialDirection(): $Vector3fc;
        particleSpeed(arg0: $RandomSource): number;
        particleSpeed(): number;
        randomLifetime(): boolean;
        randomSpeed(): boolean;
        particleDirection(arg0: $RandomSource): $Vector3f;
        static CODEC: $Codec<$Holder<$ParticleSettings>>;
        static DIRECT_CODEC: $Codec<$ParticleSettings>;
        constructor(particleSpeed: number, particleSize: number, particleSizeVariation: number, particleLifetime: number, particleLifetimeVariation: number, initialDirection: $Vector3fc, randomInitialDirection: boolean, randomInitialRotation: boolean, randomSpeed: boolean, randomSize: boolean, randomLifetime: boolean);
        get registryId(): $ResourceLocation;
    }
    export class $EmitterSettings extends $Record {
        emitterShapeSettingsHolders(): $List<$Holder<$EmitterShapeSettings>>;
        forceSpawn(): boolean;
        particleSettingsHolder(): $Holder<$ParticleSettings>;
        emitterShapeSettings(): $List<$EmitterShapeSettings>;
        particleSettings(): $ParticleSettings;
        static CODEC: $Codec<$EmitterSettings>;
        constructor(emitterShapeSettingsHolders: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder: $Holder_<$ParticleSettings>, forceSpawn: boolean);
    }
}
