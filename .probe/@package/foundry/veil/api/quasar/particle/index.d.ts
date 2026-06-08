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
        isAdditive(): boolean;
        render(arg0: $QuasarParticle, arg1: number): void;
        setAdditive(arg0: boolean): void;
        getAgePercent(): number;
        getRenderRotation(): $Vector3fc;
        getRenderRadius(): number;
        getRenderAge(): number;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        getPackedLight(): number;
        setAlpha(arg0: number): void;
        getAlpha(): number;
        markDirty(): void;
        setBlue(arg0: number): void;
        setRed(arg0: number): void;
        getRenderType(): $RenderType;
        setFixedPackedLight(arg0: number): void;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        setGreen(arg0: number): void;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        getRenderPosition(): $Vector3dc;
        setSpriteData(arg0: $SpriteData_): void;
        getFixedPackedLight(): number;
        getTrails(): $List<$Trail>;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData_);
        get renderRotation(): $Vector3fc;
        get renderRadius(): number;
        get packedLight(): number;
        get renderType(): $RenderType;
        get renderPosition(): $Vector3dc;
        get trails(): $List<$Trail>;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        getAllModules(): $ParticleModule[];
        getInitModules(): $InitParticleModule[];
        getForceModules(): $ForceParticleModule[];
        getUpdateModules(): $UpdateParticleModule[];
        updateEnabled(): void;
        getCollisionModules(): $CollisionParticleModule[];
        getEnabledRenderModuleCount(): number;
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        getRenderModules(): $RenderParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        get allModules(): $ParticleModule[];
        get initModules(): $InitParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get collisionModules(): $CollisionParticleModule[];
        get enabledRenderModuleCount(): number;
        get enabledRenderModulesArray(): $RenderParticleModule[];
        get renderModules(): $RenderParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
    }
    export class $ParticleModuleSet$Builder {
        build(): $ParticleModuleSet;
        addModule(arg0: $ParticleModule): void;
        constructor();
    }
    export class $QuasarParticle {
        getPosition(): $Vector3d;
        remove(): void;
        init(): void;
        tick(): void;
        getLevel(): $ClientLevel;
        getData(): $QuasarParticleData;
        getEnvironment(): $MolangEnvironment;
        getAge(): number;
        getSettings(): $ParticleSettings;
        render(arg0: number): void;
        getScheduler(): $TickTaskScheduler;
        getBlockStateInOrUnder(): $BlockState;
        getLifetime(): number;
        onRemove(): void;
        getRenderData(): $RenderData;
        getEmitter(): $ParticleEmitter;
        isRemoved(): boolean;
        getBlockPosition(): $BlockPos;
        getRadius(): number;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        getRotation(): $Vector3f;
        getBoundingBox(): $AABB;
        getVelocity(): $Vector3d;
        getModules(): $ParticleModuleSet;
        setAge(arg0: number): void;
        setRadius(arg0: number): void;
        getRandomSource(): $RandomSource;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get position(): $Vector3d;
        get level(): $ClientLevel;
        get data(): $QuasarParticleData;
        get environment(): $MolangEnvironment;
        get settings(): $ParticleSettings;
        get scheduler(): $TickTaskScheduler;
        get blockStateInOrUnder(): $BlockState;
        get lifetime(): number;
        get renderData(): $RenderData;
        get emitter(): $ParticleEmitter;
        get removed(): boolean;
        get blockPosition(): $BlockPos;
        get rotation(): $Vector3f;
        get boundingBox(): $AABB;
        get velocity(): $Vector3d;
        get modules(): $ParticleModuleSet;
        get randomSource(): $RandomSource;
    }
    export class $ParticleEmitter {
        getPosition(): $Vector3d;
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        setCount(arg0: number): void;
        getParticleCount(): number;
        setLoop(arg0: boolean): void;
        isRemoved(): boolean;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        setPosition(arg0: $Vector3dc): void;
        setPosition(arg0: $Vec3_): void;
        setRate(arg0: number): void;
        getParticleData(): $QuasarParticleData;
        static clearErrors(): void;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        setParticleSettings(arg0: $ParticleSettings_): void;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        getParticleSettings(): $ParticleSettings;
        isForceSpawn(): boolean;
        setAttachedEntity(arg0: $Entity): void;
        setMaxLifetime(arg0: number): void;
        setMaxParticles(arg0: number): void;
        getAttachedEntity(): $Entity;
        setParticleData(arg0: $QuasarParticleData_): void;
        setForceSpawn(arg0: boolean): void;
        addCodeModule(arg0: $CodeModule_): void;
        getMaxLifetime(): number;
        getMaxParticles(): number;
        getRegistryName(): $ResourceLocation;
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
        frameTime(): number;
        frameCount(): number;
        stretchToLifetime(): boolean;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
}
