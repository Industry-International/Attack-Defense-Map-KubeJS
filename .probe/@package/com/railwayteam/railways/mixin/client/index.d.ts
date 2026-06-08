import { $RenderBuffers } from "@package/net/minecraft/client/renderer";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $ConcurrentMap } from "@package/java/util/concurrent";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";

declare module "@package/com/railwayteam/railways/mixin/client" {
    export class $AccessorLevelRenderer {
    }
    export interface $AccessorLevelRenderer {
        callAddParticleInternal(arg0: $ParticleOptions_, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): $Particle;
        railways$getRenderBuffers(): $RenderBuffers;
    }
    export class $AccessorPartialModel {
        static railways$setPopulateOnInit(arg0: boolean): void;
        static railways$getPopulateOnInit(): boolean;
        static railways$getALL(): $ConcurrentMap<$ResourceLocation, $PartialModel>;
    }
    export interface $AccessorPartialModel {
        railways$setBakedModel(arg0: $BakedModel): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorPartialModel}.
     */
    export type $AccessorPartialModel_ = ((arg0: $BakedModel) => void);
    export class $AccessorEntity {
    }
    export interface $AccessorEntity {
        setYRot(arg0: number): void;
        getYRot(): number;
        setXRot(arg0: number): void;
        getXRot(): number;
    }
    export class $AccessorWalkAnimationState {
    }
    export interface $AccessorWalkAnimationState {
        setPosition(arg0: number): void;
        getSpeedOld(): number;
        setSpeedOld(arg0: number): void;
        set position(value: number);
    }
    export class $AccessorLivingEntityRenderer<T extends $LivingEntity> {
    }
    export interface $AccessorLivingEntityRenderer<T extends $LivingEntity> {
        callSetupRotations(arg0: T, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorLivingEntityRenderer}.
     */
    export type $AccessorLivingEntityRenderer_<T> = ((arg0: T, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number) => void);
    export class $AccessorLocalPlayer {
    }
    export interface $AccessorLocalPlayer {
        railways$getXRotLast(): number;
        railways$getYRotLast(): number;
    }
}
