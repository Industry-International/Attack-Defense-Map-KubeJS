import { $Colorc } from "@package/foundry/veil/api/client/color";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $Camera } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos } from "@package/net/minecraft/core";
import { $TickTaskScheduler } from "@package/foundry/veil/api";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $Trail } from "@package/foundry/veil/api/quasar/fx";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CodeModule_ } from "@package/foundry/veil/api/quasar/data/module";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $QuasarParticleData_, $QuasarParticleData, $ParticleSettings, $ParticleSettings_, $EmitterShapeSettings, $ParticleEmitterData, $EmitterShapeSettings_ } from "@package/foundry/veil/api/quasar/data";
import { $Vector4fc, $Vector3dc, $Vector3d, $Vector3f, $Vector4f, $Vector3fc } from "@package/org/joml";
import { $ForceParticleModule, $ParticleModule, $CollisionParticleModule, $UpdateParticleModule, $InitParticleModule, $RenderParticleModule } from "@package/foundry/veil/api/quasar/emitters/module";

declare module "@package/foundry/veil/api/quasar/particle" {
    export class $RenderStyle {
        static CODEC: $Codec<$RenderStyle>;
    }
    export interface $RenderStyle {
        clear(): void;
        setup(arg0: number): boolean;
        render(arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number): void;
        getRenderType(arg0: $QuasarParticle, arg1: $RenderData): $RenderType;
        set up(value: number);
    }
    /**
     * Values that may be interpreted as {@link $RenderStyle}.
     */
    export type $RenderStyle_ = RegistryTypes.VeilQuasarRenderStyle | ((arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number) => void);
    export class $RenderData {
        tick(arg0: $QuasarParticle, arg1: number): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setColor(arg0: $Vector4fc): void;
        setColor(arg0: $Colorc): void;
        setAdditive(arg0: boolean): void;
        isAdditive(): boolean;
        render(arg0: $QuasarParticle, arg1: number): void;
        getBlue(): number;
        getGreen(): number;
        getRed(): number;
        markDirty(): void;
        setAlpha(arg0: number): void;
        getAlpha(): number;
        getRenderType(): $RenderType;
        getRenderPosition(): $Vector3dc;
        getRenderRadius(): number;
        getRenderAge(): number;
        getAgePercent(): number;
        getRenderRotation(): $Vector3fc;
        getPackedLight(): number;
        setFixedPackedLight(arg0: number): void;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        setBlue(arg0: number): void;
        setRed(arg0: number): void;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        getSpriteData(): $SpriteData;
        getAtlasSprite(): $TextureAtlasSprite;
        setGreen(arg0: number): void;
        getTrails(): $List<$Trail>;
        setSpriteData(arg0: $SpriteData_): void;
        getFixedPackedLight(): number;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData_);
        get renderType(): $RenderType;
        get renderPosition(): $Vector3dc;
        get renderRadius(): number;
        get renderRotation(): $Vector3fc;
        get packedLight(): number;
        get trails(): $List<$Trail>;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        getAllModules(): $ParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getEnabledRenderModuleCount(): number;
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        getRenderModules(): $RenderParticleModule[];
        getForceModules(): $ForceParticleModule[];
        getInitModules(): $InitParticleModule[];
        getUpdateModules(): $UpdateParticleModule[];
        updateEnabled(): void;
        getCollisionModules(): $CollisionParticleModule[];
        get allModules(): $ParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get enabledRenderModuleCount(): number;
        get enabledRenderModulesArray(): $RenderParticleModule[];
        get renderModules(): $RenderParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get initModules(): $InitParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get collisionModules(): $CollisionParticleModule[];
    }
    export class $ParticleModuleSet$Builder {
        build(): $ParticleModuleSet;
        addModule(arg0: $ParticleModule): void;
        constructor();
    }
    export class $QuasarParticle {
        remove(): void;
        init(): void;
        tick(): void;
        getLevel(): $ClientLevel;
        getData(): $QuasarParticleData;
        onRemove(): void;
        getEnvironment(): $MolangEnvironment;
        getSettings(): $ParticleSettings;
        getScheduler(): $TickTaskScheduler;
        render(arg0: number): void;
        getAge(): number;
        getRotation(): $Vector3f;
        getModules(): $ParticleModuleSet;
        setAge(arg0: number): void;
        getVelocity(): $Vector3d;
        getBoundingBox(): $AABB;
        getRadius(): number;
        getPosition(): $Vector3d;
        getBlockPosition(): $BlockPos;
        isRemoved(): boolean;
        getRenderData(): $RenderData;
        setRadius(arg0: number): void;
        getRandomSource(): $RandomSource;
        getLifetime(): number;
        getEmitter(): $ParticleEmitter;
        getBlockStateInOrUnder(): $BlockState;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get level(): $ClientLevel;
        get data(): $QuasarParticleData;
        get environment(): $MolangEnvironment;
        get settings(): $ParticleSettings;
        get scheduler(): $TickTaskScheduler;
        get rotation(): $Vector3f;
        get modules(): $ParticleModuleSet;
        get velocity(): $Vector3d;
        get boundingBox(): $AABB;
        get position(): $Vector3d;
        get blockPosition(): $BlockPos;
        get removed(): boolean;
        get renderData(): $RenderData;
        get randomSource(): $RandomSource;
        get lifetime(): number;
        get emitter(): $ParticleEmitter;
        get blockStateInOrUnder(): $BlockState;
    }
    export class $ParticleEmitter {
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        setCount(arg0: number): void;
        setPosition(arg0: $Vec3_): void;
        setPosition(arg0: $Vector3dc): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        getParticleCount(): number;
        getPosition(): $Vector3d;
        setLoop(arg0: boolean): void;
        isRemoved(): boolean;
        static clearErrors(): void;
        getRegistryName(): $ResourceLocation;
        setRate(arg0: number): void;
        getParticleData(): $QuasarParticleData;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        setParticleSettings(arg0: $ParticleSettings_): void;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        getParticleSettings(): $ParticleSettings;
        getMaxLifetime(): number;
        setForceSpawn(arg0: boolean): void;
        setParticleData(arg0: $QuasarParticleData_): void;
        setMaxLifetime(arg0: number): void;
        setAttachedEntity(arg0: $Entity): void;
        addCodeModule(arg0: $CodeModule_): void;
        getMaxParticles(): number;
        getAttachedEntity(): $Entity;
        isForceSpawn(): boolean;
        setMaxParticles(arg0: number): void;
        getRate(): number;
        get data(): $ParticleEmitterData;
        get particleCount(): number;
        get removed(): boolean;
        get registryName(): $ResourceLocation;
    }
    export class $SpriteData extends $Record {
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        frameWidth(): number;
        frameHeight(): number;
        sprite(): $ResourceLocation;
        stretchToLifetime(): boolean;
        frameTime(): number;
        frameCount(): number;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
}
