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
        spriteData(): $SpriteData;
        velocityStretchFactor(): number;
        initModules(): $List<$Holder<$ParticleModuleData>>;
        shouldCollide(): boolean;
        faceVelocity(): boolean;
        updateModules(): $List<$Holder<$ParticleModuleData>>;
        forceModules(): $List<$Holder<$ParticleModuleData>>;
        renderStyle(): $RenderStyle;
        getRegistryId(): $ResourceLocation;
        collisionModules(): $List<$Holder<$ParticleModuleData>>;
        renderModules(): $List<$Holder<$ParticleModuleData>>;
        getAllModules(): $List<$Holder<$ParticleModuleData>>;
        static CODEC: $Codec<$Holder<$QuasarParticleData>>;
        static DIRECT_CODEC: $Codec<$QuasarParticleData>;
        constructor(shouldCollide: boolean, faceVelocity: boolean, velocityStretchFactor: number, initModules: $List_<$Holder_<$ParticleModuleData>>, updateModules: $List_<$Holder_<$ParticleModuleData>>, collisionModules: $List_<$Holder_<$ParticleModuleData>>, forceModules: $List_<$Holder_<$ParticleModuleData>>, renderModules: $List_<$Holder_<$ParticleModuleData>>, spriteData: $SpriteData_, additive: boolean, renderStyle: $RenderStyle_);
        get registryId(): $ResourceLocation;
        get allModules(): $List<$Holder<$ParticleModuleData>>;
    }
    export class $EmitterShapeSettings extends $Record {
        dimensions(): $Vector3fc;
        shape(): $EmitterShape;
        rotation(): $Vector3fc;
        fromSurface(): boolean;
        getPos(arg0: $RandomSource, arg1: $Vector3dc): $Vector3d;
        getRegistryId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$EmitterShapeSettings>>;
        static DIRECT_CODEC: $Codec<$EmitterShapeSettings>;
        constructor(shape: $EmitterShape_, dimensions: $Vector3fc, rotation: $Vector3fc, fromSurface: boolean);
        get registryId(): $ResourceLocation;
    }
    export class $ParticleEmitterData extends $Record {
        count(): number;
        loop(): boolean;
        maxLifetime(): number;
        emitterSettings(): $EmitterSettings;
        particleDataHolder(): $Holder<$QuasarParticleData>;
        rate(): number;
        maxParticles(): number;
        particleData(): $QuasarParticleData;
        getRegistryId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$ParticleEmitterData>>;
        static DIRECT_CODEC: $Codec<$ParticleEmitterData>;
        constructor(maxLifetime: number, loop: boolean, rate: number, count: number, maxParticles: number, emitterSettings: $EmitterSettings_, particleDataHolder: $Holder_<$QuasarParticleData>);
        get registryId(): $ResourceLocation;
    }
    export class $ParticleSettings extends $Record {
        randomSize(): boolean;
        particleLifetimeVariation(): number;
        particleSizeVariation(): number;
        randomInitialRotation(): boolean;
        randomInitialDirection(): boolean;
        initialDirection(): $Vector3fc;
        initialDirection(arg0: $RandomSource): $Vector3fc;
        randomSpeed(): boolean;
        randomLifetime(): boolean;
        particleSpeed(arg0: $RandomSource): number;
        particleSpeed(): number;
        particleSize(arg0: $RandomSource): number;
        particleSize(): number;
        particleLifetime(): number;
        particleLifetime(arg0: $RandomSource): number;
        particleDirection(arg0: $RandomSource): $Vector3f;
        getRegistryId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$ParticleSettings>>;
        static DIRECT_CODEC: $Codec<$ParticleSettings>;
        constructor(particleSpeed: number, particleSize: number, particleSizeVariation: number, particleLifetime: number, particleLifetimeVariation: number, initialDirection: $Vector3fc, randomInitialDirection: boolean, randomInitialRotation: boolean, randomSpeed: boolean, randomSize: boolean, randomLifetime: boolean);
        get registryId(): $ResourceLocation;
    }
    export class $EmitterSettings extends $Record {
        particleSettings(): $ParticleSettings;
        emitterShapeSettingsHolders(): $List<$Holder<$EmitterShapeSettings>>;
        forceSpawn(): boolean;
        particleSettingsHolder(): $Holder<$ParticleSettings>;
        emitterShapeSettings(): $List<$EmitterShapeSettings>;
        static CODEC: $Codec<$EmitterSettings>;
        constructor(emitterShapeSettingsHolders: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder: $Holder_<$ParticleSettings>, forceSpawn: boolean);
    }
}
