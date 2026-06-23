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
        getRenderType(arg0: $QuasarParticle, arg1: $RenderData): $RenderType;
        render(arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number): void;
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
        getRenderType(): $RenderType;
        render(arg0: $QuasarParticle, arg1: number): void;
        isAdditive(): boolean;
        setFixedPackedLight(arg0: number): void;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        getRenderAge(): number;
        getRenderRotation(): $Vector3fc;
        getRenderRadius(): number;
        getAgePercent(): number;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        getRenderPosition(): $Vector3dc;
        setAlpha(arg0: number): void;
        getAlpha(): number;
        markDirty(): void;
        getPackedLight(): number;
        setBlue(arg0: number): void;
        setRed(arg0: number): void;
        setGreen(arg0: number): void;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
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
        get renderType(): $RenderType;
        get renderRotation(): $Vector3fc;
        get renderRadius(): number;
        get renderPosition(): $Vector3dc;
        get packedLight(): number;
        get trails(): $List<$Trail>;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        getAllModules(): $ParticleModule[];
        updateEnabled(): void;
        getUpdateModules(): $UpdateParticleModule[];
        getInitModules(): $InitParticleModule[];
        getForceModules(): $ForceParticleModule[];
        getCollisionModules(): $CollisionParticleModule[];
        getEnabledRenderModuleCount(): number;
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getRenderModules(): $RenderParticleModule[];
        get allModules(): $ParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get initModules(): $InitParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get collisionModules(): $CollisionParticleModule[];
        get enabledRenderModuleCount(): number;
        get enabledRenderModulesArray(): $RenderParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get renderModules(): $RenderParticleModule[];
    }
    export class $ParticleModuleSet$Builder {
        build(): $ParticleModuleSet;
        addModule(arg0: $ParticleModule): void;
        constructor();
    }
    export class $QuasarParticle {
        getPosition(): $Vector3d;
        getLifetime(): number;
        remove(): void;
        init(): void;
        tick(): void;
        getLevel(): $ClientLevel;
        getData(): $QuasarParticleData;
        getAge(): number;
        getSettings(): $ParticleSettings;
        getRandomSource(): $RandomSource;
        getRenderData(): $RenderData;
        getEnvironment(): $MolangEnvironment;
        getScheduler(): $TickTaskScheduler;
        render(arg0: number): void;
        onRemove(): void;
        getVelocity(): $Vector3d;
        getRotation(): $Vector3f;
        getBlockStateInOrUnder(): $BlockState;
        getBlockPosition(): $BlockPos;
        getModules(): $ParticleModuleSet;
        setRadius(arg0: number): void;
        getEmitter(): $ParticleEmitter;
        isRemoved(): boolean;
        getRadius(): number;
        getBoundingBox(): $AABB;
        setAge(arg0: number): void;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get position(): $Vector3d;
        get lifetime(): number;
        get level(): $ClientLevel;
        get data(): $QuasarParticleData;
        get settings(): $ParticleSettings;
        get randomSource(): $RandomSource;
        get renderData(): $RenderData;
        get environment(): $MolangEnvironment;
        get scheduler(): $TickTaskScheduler;
        get velocity(): $Vector3d;
        get rotation(): $Vector3f;
        get blockStateInOrUnder(): $BlockState;
        get blockPosition(): $BlockPos;
        get modules(): $ParticleModuleSet;
        get emitter(): $ParticleEmitter;
        get removed(): boolean;
        get boundingBox(): $AABB;
    }
    export class $ParticleEmitter {
        getPosition(): $Vector3d;
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        setCount(arg0: number): void;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        getParticleData(): $QuasarParticleData;
        getRate(): number;
        setRate(arg0: number): void;
        setPosition(arg0: $Vec3_): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        setPosition(arg0: $Vector3dc): void;
        getRegistryName(): $ResourceLocation;
        isRemoved(): boolean;
        static clearErrors(): void;
        getParticleCount(): number;
        setLoop(arg0: boolean): void;
        getMaxLifetime(): number;
        getAttachedEntity(): $Entity;
        setMaxParticles(arg0: number): void;
        setParticleData(arg0: $QuasarParticleData_): void;
        addCodeModule(arg0: $CodeModule_): void;
        isForceSpawn(): boolean;
        setForceSpawn(arg0: boolean): void;
        setMaxLifetime(arg0: number): void;
        getMaxParticles(): number;
        setAttachedEntity(arg0: $Entity): void;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        getParticleSettings(): $ParticleSettings;
        setParticleSettings(arg0: $ParticleSettings_): void;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        get data(): $ParticleEmitterData;
        get registryName(): $ResourceLocation;
        get removed(): boolean;
        get particleCount(): number;
    }
    export class $SpriteData extends $Record {
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        frameTime(): number;
        frameCount(): number;
        frameHeight(): number;
        frameWidth(): number;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        sprite(): $ResourceLocation;
        stretchToLifetime(): boolean;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
}
