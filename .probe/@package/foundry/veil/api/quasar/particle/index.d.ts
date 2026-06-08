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
        getAlpha(): number;
        isAdditive(): boolean;
        render(arg0: $QuasarParticle, arg1: number): void;
        getRenderPosition(): $Vector3dc;
        getRenderType(): $RenderType;
        setAlpha(arg0: number): void;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        markDirty(): void;
        getFixedPackedLight(): number;
        getRed(): number;
        getBlue(): number;
        getGreen(): number;
        setRed(arg0: number): void;
        setBlue(arg0: number): void;
        getRenderRotation(): $Vector3fc;
        getRenderRadius(): number;
        getRenderAge(): number;
        getAgePercent(): number;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        getPackedLight(): number;
        setFixedPackedLight(arg0: number): void;
        setGreen(arg0: number): void;
        setSpriteData(arg0: $SpriteData_): void;
        getTrails(): $List<$Trail>;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData_);
        get renderPosition(): $Vector3dc;
        get renderType(): $RenderType;
        get renderRotation(): $Vector3fc;
        get renderRadius(): number;
        get packedLight(): number;
        get trails(): $List<$Trail>;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getEnabledRenderModuleCount(): number;
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        getCollisionModules(): $CollisionParticleModule[];
        getAllModules(): $ParticleModule[];
        getRenderModules(): $RenderParticleModule[];
        getInitModules(): $InitParticleModule[];
        updateEnabled(): void;
        getUpdateModules(): $UpdateParticleModule[];
        getForceModules(): $ForceParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get enabledRenderModuleCount(): number;
        get enabledRenderModulesArray(): $RenderParticleModule[];
        get collisionModules(): $CollisionParticleModule[];
        get allModules(): $ParticleModule[];
        get renderModules(): $RenderParticleModule[];
        get initModules(): $InitParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get forceModules(): $ForceParticleModule[];
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
        getPosition(): $Vector3d;
        getScheduler(): $TickTaskScheduler;
        getBlockStateInOrUnder(): $BlockState;
        getRadius(): number;
        getSettings(): $ParticleSettings;
        getEnvironment(): $MolangEnvironment;
        render(arg0: number): void;
        getAge(): number;
        isRemoved(): boolean;
        getVelocity(): $Vector3d;
        getRenderData(): $RenderData;
        getBlockPosition(): $BlockPos;
        getRotation(): $Vector3f;
        onRemove(): void;
        getModules(): $ParticleModuleSet;
        getBoundingBox(): $AABB;
        getEmitter(): $ParticleEmitter;
        setAge(arg0: number): void;
        setRadius(arg0: number): void;
        getLifetime(): number;
        getRandomSource(): $RandomSource;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get level(): $ClientLevel;
        get data(): $QuasarParticleData;
        get position(): $Vector3d;
        get scheduler(): $TickTaskScheduler;
        get blockStateInOrUnder(): $BlockState;
        get settings(): $ParticleSettings;
        get environment(): $MolangEnvironment;
        get removed(): boolean;
        get velocity(): $Vector3d;
        get renderData(): $RenderData;
        get blockPosition(): $BlockPos;
        get rotation(): $Vector3f;
        get modules(): $ParticleModuleSet;
        get boundingBox(): $AABB;
        get emitter(): $ParticleEmitter;
        get lifetime(): number;
        get randomSource(): $RandomSource;
    }
    export class $ParticleEmitter {
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        getPosition(): $Vector3d;
        getParticleData(): $QuasarParticleData;
        getRate(): number;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        static clearErrors(): void;
        isRemoved(): boolean;
        getRegistryName(): $ResourceLocation;
        setCount(arg0: number): void;
        setPosition(arg0: $Vec3_): void;
        setPosition(arg0: $Vector3dc): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        getParticleCount(): number;
        getMaxParticles(): number;
        isForceSpawn(): boolean;
        getAttachedEntity(): $Entity;
        setMaxLifetime(arg0: number): void;
        setMaxParticles(arg0: number): void;
        addCodeModule(arg0: $CodeModule_): void;
        getMaxLifetime(): number;
        setForceSpawn(arg0: boolean): void;
        setAttachedEntity(arg0: $Entity): void;
        setParticleData(arg0: $QuasarParticleData_): void;
        setLoop(arg0: boolean): void;
        getParticleSettings(): $ParticleSettings;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        setParticleSettings(arg0: $ParticleSettings_): void;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        setRate(arg0: number): void;
        get data(): $ParticleEmitterData;
        get removed(): boolean;
        get registryName(): $ResourceLocation;
        get particleCount(): number;
    }
    export class $SpriteData extends $Record {
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        sprite(): $ResourceLocation;
        frameTime(): number;
        frameCount(): number;
        frameHeight(): number;
        stretchToLifetime(): boolean;
        frameWidth(): number;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
}
