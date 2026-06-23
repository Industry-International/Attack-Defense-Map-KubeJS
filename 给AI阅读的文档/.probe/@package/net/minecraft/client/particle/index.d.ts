import { $EntityDynamicLightSourceBehavior } from "@package/dev/lambdaurora/lambdynlights/engine/source";
import { $LongSet, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $RenderBuffers, $LightTexture } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleType_, $SculkChargeParticleOptions, $ParticleGroup, $VibrationParticleOption, $BlockParticleOption, $ParticleOptions, $ColorParticleOption, $SimpleParticleType, $ScalableParticleOptionsBase, $DustParticleOptions, $SculkChargeParticleOptions_, $ParticleOptions_, $DustColorTransitionOptions, $ItemParticleOption, $ShriekParticleOption } from "@package/net/minecraft/core/particles";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Camera } from "@package/net/minecraft/client";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $CellHasher } from "@package/dev/lambdaurora/lambdynlights/engine";
import { $ParticleAccessor as $ParticleAccessor$4 } from "@package/com/almostreliable/ponderjs/mixin";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $ParticleExtension } from "@package/dev/ryanhcode/sable/mixinterface/particle";
import { $ParticleAccessor as $ParticleAccessor$2 } from "@package/com/moepus/flerovium/mixins/Particle";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ParticleAccessor as $ParticleAccessor$1 } from "@package/com/animenkin/aerowarfarecompat/mixin";
import { $ParticleEngineAccessor as $ParticleEngineAccessor$1 } from "@package/com/lowdragmc/lowdraglib2/core/mixins";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ParticleAccessor as $ParticleAccessor$3 } from "@package/com/replaymod/render/blend/mixin";
import { $Vector3dc, $Quaternionf } from "@package/org/joml";
import { $JsonObject_ } from "@package/com/google/gson";
import { $Args } from "@package/org/spongepowered/asm/mixin/injection/invoke/arg";
import { $PositionSource } from "@package/net/minecraft/world/level/gameevent";
import { $Map, $List, $List_ } from "@package/java/util";
import { $ChunkRebuildStatus } from "@package/dev/lambdaurora/lambdynlights/engine/scheduler";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Registry, $Direction_ } from "@package/net/minecraft/core";
import { $ParticleManagerAccessor, $ParticleManagerAccessor$SimpleSpriteProviderAccessor } from "@package/net/fabricmc/fabric/mixin/client/particle";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $ParticleAccessor } from "@package/com/animenkin/taczaerocompat/mixin";
import { $Record, $Object } from "@package/java/lang";
import { $ParticleSubLevelKickable } from "@package/dev/ryanhcode/sable/api/particle";
import { $SpatialLookupEntry } from "@package/dev/lambdaurora/lambdynlights/engine/lookup";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $EntityRenderDispatcher } from "@package/net/minecraft/client/renderer/entity";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $FireworkExplosion_ } from "@package/net/minecraft/world/item/component";
import { $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ParticleEngineAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParticleManagerAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $VertexConsumer, $BufferBuilder, $Tesselator } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/net/minecraft/client/particle" {
    export class $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
    }
    export interface $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
        create(sprites: $SpriteSet): $ParticleProvider<T>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngine$SpriteParticleRegistration}.
     */
    export type $ParticleEngine$SpriteParticleRegistration_<T> = ((arg0: $SpriteSet) => $ParticleProvider<T>);
    export class $PortalParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $GlowParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        static RANDOM: $RandomSource;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $FallingDustParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $DustPlumeParticle extends $BaseAshSmokeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: number, arg8: $SpriteSet);
    }
    export class $MobAppearanceParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $DragonBreathParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $FlyStraightTowardsParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: number, arg8: number);
    }
    export class $SpitParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LavaParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TotemParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $GustParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles$Starter extends $NoRenderParticle {
        createParticle(x: number, arg1: number, y: number, arg3: number, z: number, arg5: number, xSpeed: $IntList, arg7: $IntList, ySpeed: boolean, arg9: boolean): void;
        handler$fph000$chloride$inject$create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntList, arg7: $IntList, arg8: boolean, arg9: boolean, arg10: $CallbackInfo): void;
        createParticleBall(speed: number, arg1: number, radius: $IntList, colors: $IntList, fadeColors: boolean, trail: boolean): void;
        createParticleShape(speed: number, arg1: number[][], coords: $IntList, colors: $IntList, fadeColors: boolean, trail: boolean, twinkle: boolean): void;
        createParticleBurst(colors: $IntList, fadeColors: $IntList, trail: boolean, twinkle: boolean): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xd: $ParticleEngine, arg8: $List_<$FireworkExplosion_>);
    }
    export class $ExplodeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TerrainParticle$DustPillarProvider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $HeartParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $AshParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SquidInkParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SingleQuadParticle$FacingCameraMode {
        static LOOKAT_Y: $SingleQuadParticle$FacingCameraMode;
        static LOOKAT_XYZ: $SingleQuadParticle$FacingCameraMode;
    }
    export interface $SingleQuadParticle$FacingCameraMode {
        setRotation(quaternion: $Quaternionf, camera: $Camera, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SingleQuadParticle$FacingCameraMode}.
     */
    export type $SingleQuadParticle$FacingCameraMode_ = ((arg0: $Quaternionf, arg1: $Camera, arg2: number) => void);
    export class $CampfireSmokeParticle$SignalProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SpellParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $GustParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: $SpriteSet);
    }
    export class $HeartParticle$AngryVillagerProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SculkChargePopParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $WhiteSmokeParticle extends $BaseAshSmokeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: number, arg8: $SpriteSet);
    }
    export class $PortalParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
    }
    export class $SpellParticle$WitchProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SimpleAnimatedParticle extends $TextureSheetParticle {
        setColor(color: number): void;
        setFadeColor(color: number): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        sprites: $SpriteSet;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: $SpriteSet, z: number);
        set color(value: number);
        set fadeColor(value: number);
    }
    export class $DustPlumeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SmokeParticle extends $BaseAshSmokeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: number, arg8: $SpriteSet);
    }
    export class $FlameParticle extends $RisingParticle implements $ParticleExtension {
        wrapMethod$hdc000$sable$move(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
    }
    export class $SuspendedTownParticle$HappyVillagerProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $ReversePortalParticle extends $PortalParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
    }
    export class $GlowParticle$WaxOffProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedTownParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
    }
    export class $SonicBoomParticle extends $HugeExplosionParticle implements $EntityDynamicLightSourceBehavior {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: $SpriteSet);
    }
    export class $PlayerCloudParticle$SneezeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DustParticle extends $DustParticleBase<$DustParticleOptions> {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $DustParticleOptions, arg8: $SpriteSet);
    }
    export class $WhiteAshParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LavaParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
    }
    export class $BreakingItemParticle$SnowballProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $GustSeedParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(scale: number, arg1: number, lifetime: number);
    }
    export class $SquidInkParticle$GlowInkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SingleQuadParticle extends $Particle {
        handler$cof000$sodium$renderRotatedQuad(arg0: $VertexConsumer, arg1: $Camera, arg2: $Quaternionf, arg3: number, arg4: $CallbackInfo): void;
        handler$cof000$sodium$render(arg0: $VertexConsumer, arg1: $Camera, arg2: number, arg3: $CallbackInfo): void;
        renderRotatedQuad(buffer: $VertexConsumer, camera: $Camera, quaternion: $Quaternionf, partialTicks: number): void;
        renderRotatedQuad(buffer: $VertexConsumer, quaternion: $Quaternionf, x: number, y: number, z: number, partialTicks: number): void;
        getQuadSize(scaleFactor: number): number;
        getU1(): number;
        getV0(): number;
        getV1(): number;
        getU0(): number;
        getFacingCameraMode(): $SingleQuadParticle$FacingCameraMode;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
        get u1(): number;
        get v0(): number;
        get v1(): number;
        get u0(): number;
        get facingCameraMode(): $SingleQuadParticle$FacingCameraMode;
    }
    export class $Particle$LifetimeAlpha extends $Record {
        isOpaque(): boolean;
        endAlpha(): number;
        startAlpha(): number;
        endAtNormalizedAge(): number;
        currentAlphaForAge(age: number, lifetime: number, partialTick: number): number;
        startAtNormalizedAge(): number;
        static ALWAYS_OPAQUE: $Particle$LifetimeAlpha;
        constructor(startAlpha: number, endAlpha: number, startAtNormalizedAge: number, endAtNormalizedAge: number);
        get opaque(): boolean;
    }
    export class $BlockMarker extends $TextureSheetParticle implements $ParticleSubLevelKickable {
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        sable$shouldKickFromTracking(): boolean;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        sable$shouldCollideWithTrackingSubLevel(): boolean;
        sable$getUpDirection(): $Vector3dc;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        sable$shouldCareAboutIntersectingSubLevels(): boolean;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: $BlockState_);
    }
    export class $ParticleRenderType {
        static NO_RENDER: $ParticleRenderType;
        static TERRAIN_SHEET: $ParticleRenderType;
        static PARTICLE_SHEET_LIT: $ParticleRenderType;
        static PARTICLE_SHEET_OPAQUE: $ParticleRenderType;
        static PARTICLE_SHEET_TRANSLUCENT: $ParticleRenderType;
        static CUSTOM: $ParticleRenderType;
    }
    export interface $ParticleRenderType {
        begin(tesselator: $Tesselator, textureManager: $TextureManager): $BufferBuilder;
        isTranslucent(): boolean;
        get translucent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ParticleRenderType}.
     */
    export type $ParticleRenderType_ = ((arg0: $Tesselator, arg1: $TextureManager) => $BufferBuilder);
    export class $SuspendedTownParticle$DolphinSpeedProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $CritParticle$MagicProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SoulParticle$EmissiveProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $FlyTowardsPositionParticle$VaultConnectionProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $WaterDropParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BaseAshSmokeParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSeedMultiplier: number, ySpeedMultiplier: number, zSpeedMultiplier: number, xSpeed: number, arg11: $SpriteSet, ySpeed: number, arg13: number, zSpeed: number, arg15: boolean);
    }
    export class $FlameParticle$SmallFlameProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $NoteParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $CherryParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: $SpriteSet);
    }
    export class $AshParticle extends $BaseAshSmokeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: number, arg8: $SpriteSet);
    }
    export class $FireworkParticles$SparkParticle extends $SimpleAnimatedParticle {
        setTrail(trail: boolean): void;
        setTwinkle(trail: boolean): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        sprites: $SpriteSet;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $ParticleEngine, arg8: $SpriteSet);
        set trail(value: boolean);
        set twinkle(value: boolean);
    }
    export class $FlyTowardsPositionParticle$NautilusProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $CritParticle$DamageIndicatorProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SculkChargeParticle$Provider extends $Record implements $ParticleProvider<$SculkChargeParticleOptions> {
        createParticle(arg0: $SculkChargeParticleOptions_, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        sprite(): $SpriteSet;
        constructor(arg0: $SpriteSet);
    }
    export class $HugeExplosionParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle extends $TextureSheetParticle {
        getType(): $Fluid;
        static createWaterHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createLavaHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createLavaFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createHoneyFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createHoneyLandParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createLavaLandParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createWaterFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createHoneyHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createNectarFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneWaterFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneLavaHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneLavaFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearLandParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createSporeBlossomFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneWaterHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        preMoveUpdate(): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        postMoveUpdate(): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        isGlowing: boolean;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: $Fluid_);
        get type(): $Fluid;
    }
    export class $CampfireSmokeParticle extends $TextureSheetParticle {
        args$jhg000$flerovium$beforeMove(arg0: $Args): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: boolean);
    }
    export class $BreakingItemParticle$Provider implements $ParticleProvider<$ItemParticleOption> {
        createParticle(type: $ItemParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $WakeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $PlayerCloudParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles {
        constructor();
    }
    export class $ParticleEngine$MutableSpriteSet implements $SpriteSet, $ParticleManagerAccessor$SimpleSpriteProviderAccessor {
        get(random: $RandomSource): $TextureAtlasSprite;
        get(particleAge: number, particleMaxAge: number): $TextureAtlasSprite;
        rebind(sprites: $List_<$TextureAtlasSprite>): void;
        getSprites(): $List<$TextureAtlasSprite>;
        sprites: $List<$TextureAtlasSprite>;
        constructor();
    }
    export class $GlowParticle$WaxOnProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $GlowParticle$GlowSquidProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$DripHangParticle extends $DripParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        isGlowing: boolean;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $ParticleProvider$Sprite<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider$Sprite<T extends $ParticleOptions> {
        createParticle(type: T, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider$Sprite}.
     */
    export type $ParticleProvider$Sprite_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $TextureSheetParticle);
    export class $GlowParticle$ScrapeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle$CrimsonSporeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$FallAndLandParticle extends $DripParticle$FallingParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        isGlowing: boolean;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $BreakingItemParticle$SlimeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $SmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles$OverlayParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
    }
    export class $ShriekParticle$Provider implements $ParticleProvider<$ShriekParticleOption> {
        createParticle(type: $ShriekParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $ExplodeParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $SculkChargePopParticle$Provider extends $Record implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        sprite(): $SpriteSet;
        constructor(arg0: $SpriteSet);
    }
    export class $SuspendedTownParticle$ComposterFillProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $NoRenderParticle extends $Particle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
    }
    export class $BubbleParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
    }
    export class $SoulParticle extends $RisingParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        isGlowing: boolean;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $DripParticle$FallingParticle extends $DripParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        isGlowing: boolean;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $ItemPickupParticle extends $Particle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(entityRenderDispatcher: $EntityRenderDispatcher, buffers: $RenderBuffers, level: $ClientLevel, itemEntity: $Entity, target: $Entity);
    }
    export class $FireworkParticles$SparkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BlockMarker$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $DustParticleBase<T extends $ScalableParticleOptionsBase> extends $TextureSheetParticle {
        randomizeColor(coordMultiplier: number, multiplier: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: T, arg8: $SpriteSet);
    }
    export class $VibrationSignalParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: $PositionSource, z: number);
    }
    export class $ParticleProvider<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider<T extends $ParticleOptions> {
        createParticle(type: T, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider}.
     */
    export type $ParticleProvider_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $Particle);
    export class $WaterCurrentDownParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
    }
    export class $CampfireSmokeParticle$CosyProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $HugeExplosionSeedParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $EndRodParticle extends $SimpleAnimatedParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        sprites: $SpriteSet;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $TrialSpawnerDetectionParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: number, arg8: $SpriteSet);
    }
    export class $DripParticle$CoolingDripHangParticle extends $DripParticle$DripHangParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        isGlowing: boolean;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $WaterCurrentDownParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TotemParticle extends $SimpleAnimatedParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        sprites: $SpriteSet;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $BubbleColumnUpParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
    }
    export class $BreakingItemParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: $ItemStack_);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $ItemStack_);
    }
    export class $WhiteSmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SpellParticle$MobEffectProvider implements $ParticleProvider<$ColorParticleOption> {
        createParticle(type: $ColorParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $CritParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TrackingEmitter extends $NoRenderParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, entity: $Entity, particleType: $ParticleOptions_, lifetime: number);
        constructor(level: $ClientLevel, entity: $Entity, particleType: $ParticleOptions_);
    }
    export class $SplashParticle extends $WaterDropParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $NoteParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number);
    }
    export class $TerrainParticle extends $TextureSheetParticle {
        updateSprite(arg0: $BlockState_, arg1: $BlockPos_): $TerrainParticle;
        static createTerrainParticle(type: $BlockParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TerrainParticle;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        static $assertionsDisabled: boolean;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $BlockState_);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $BlockState_, arg8: $BlockPos_);
    }
    export class $DustParticle$Provider implements $ParticleProvider<$DustParticleOptions> {
        createParticle(type: $DustParticleOptions, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$DripstoneFallAndLandParticle extends $DripParticle$FallAndLandParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        isGlowing: boolean;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $WaterDropParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
    }
    export class $ParticleEngine$1ParticleDefinition extends $Record {
    }
    export class $SpitParticle extends $ExplodeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $BubbleColumnUpParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BubblePopParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LargeSmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $CritParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
    }
    export class $Particle implements $ParticleAccessor$3, $ParticleAccessor$1, $EntityDynamicLightSourceBehavior, $ParticleAccessor$4, $ParticleAccessor, $ParticleExtension, $ParticleAccessor$2 {
        getLifetime(): number;
        getParticleGroup(): ($ParticleGroup) | undefined;
        setLifetime(particleLifeTime: number): void;
        setParticleSpeed(x: number, arg1: number, y: number): void;
        getRenderBoundingBox(arg0: number): $AABB;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        remove(): void;
        scale(scale: number): $Particle;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        isAlive(): boolean;
        move(x: number, arg1: number, y: number): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        tick(): void;
        setColor(particleRed: number, particleGreen: number, particleBlue: number): void;
        setSize(width: number, height: number): void;
        getRenderType(): $ParticleRenderType;
        render(buffer: $VertexConsumer, camera: $Camera, partialTicks: number): void;
        setPower(scale: number): $Particle;
        getPos(): $Vec3;
        setPos(x: number, arg1: number, y: number): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        sable$moveWithInheritedVelocity(): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        setLocationFromBoundingbox(): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        sable$initialKickOut(): void;
        setLuminance(particleLifeTime: number): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        dynamicLightTick(): void;
        getLuminance(): number;
        getLightColor(partialTick: number): number;
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
        lambdynlights$setTrackedLitChunkPos(trackedLitChunkPos: $LongSet): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        updateDynamicLightPreviousCoordinates(): void;
        /**
         * Sets the particle alpha (float)
         */
        setAlpha(alpha: number): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        resetDynamicLight(): void;
        getDynamicLightZ(): number;
        getDynamicLightId(): number;
        getDynamicLightX(): number;
        getDynamicLightY(): number;
        getBoundingBox(): $AABB;
        setBoundingBox(bb: $AABB_): void;
        sable$setTrackingSubLevel(arg0: $ClientSubLevel, arg1: $Vec3_): void;
        getDynamicLightPrevY(): number;
        getDynamicLightPrevX(): number;
        setLastDynamicLuminance(particleLifeTime: number): void;
        getDynamicLightPrevZ(): number;
        sable$getTrackingSubLevel(): $SubLevel;
        getLastDynamicLuminance(): number;
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        setDynamicLightEnabled(enabled: boolean): void;
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        isDynamicLightEnabled(): boolean;
        taczAero$getXo(): number;
        taczAero$getX(): number;
        taczAero$getY(): number;
        taczAero$getZo(): number;
        taczAero$setX(arg0: number): void;
        taczAero$setZ(arg0: number): void;
        taczAero$getYo(): number;
        taczAero$setY(arg0: number): void;
        taczAero$getLevel(): $ClientLevel;
        taczAero$getZ(): number;
        aerowarfare$setZ(arg0: number): void;
        aerowarfare$getXo(): number;
        aerowarfare$getZo(): number;
        aerowarfare$getZ(): number;
        aerowarfare$setY(arg0: number): void;
        /**
         * Sets the particle alpha (float)
         */
        ponderjs$setRoll(alpha: number): void;
        /**
         * Sets the particle alpha (float)
         */
        ponderjs$setAlpha(alpha: number): void;
        aerowarfare$getX(): number;
        aerowarfare$getYo(): number;
        aerowarfare$setX(arg0: number): void;
        aerowarfare$getY(): number;
        ponderjs$setStoppedByCollision(arg0: boolean): void;
        ponderjs$setHasPhysics(arg0: boolean): void;
        /**
         * Sets the particle alpha (float)
         */
        ponderjs$setFriction(alpha: number): void;
        ponderjs$setLifetime(particleLifeTime: number): void;
        aerowarfare$getLevel(): $ClientLevel;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        isStoppedByCollision(): boolean;
        /**
         * Sets the particle alpha (float)
         */
        ponderjs$setGravity(alpha: number): void;
        getPosX(): number;
        getPosY(): number;
        getPosZ(): number;
        getZo(): number;
        getXo(): number;
        getYo(): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
        get particleGroup(): ($ParticleGroup) | undefined;
        get alive(): boolean;
        get renderType(): $ParticleRenderType;
        set power(value: number);
        get dynamicLightZ(): number;
        get dynamicLightId(): number;
        get dynamicLightX(): number;
        get dynamicLightY(): number;
        get dynamicLightPrevY(): number;
        get dynamicLightPrevX(): number;
        get dynamicLightPrevZ(): number;
        get posX(): number;
        get posY(): number;
        get posZ(): number;
    }
    export class $FlyTowardsPositionParticle$EnchantProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $SpellParticle$InstantProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DustColorTransitionParticle extends $DustParticleBase<$DustColorTransitionOptions> {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $DustColorTransitionOptions, arg8: $SpriteSet);
    }
    export class $FallingDustParticle$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(type: $BlockParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $ReversePortalParticle$ReversePortalProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FlameParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SpellParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle$UnderwaterProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle$WarpedSporeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SpriteSet {
    }
    export interface $SpriteSet {
        get(age: number, lifetime: number): $TextureAtlasSprite;
        get(random: $RandomSource): $TextureAtlasSprite;
    }
    export class $EndRodParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $GustParticle$SmallProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FlyStraightTowardsParticle$OminousSpawnProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $ParticleDescription {
        getTextures(): $List<$ResourceLocation>;
        static fromJson(json: $JsonObject_): $ParticleDescription;
        get textures(): $List<$ResourceLocation>;
    }
    export class $BubblePopParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $SuspendedParticle$SporeBlossomAirProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BubbleParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle extends $TextureSheetParticle implements $ParticleSubLevelKickable {
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        sable$shouldKickFromTracking(): boolean;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        sable$shouldCollideWithTrackingSubLevel(): boolean;
        sable$getUpDirection(): $Vector3dc;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        sable$shouldCareAboutIntersectingSubLevels(): boolean;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, sprites: $SpriteSet, x: number, arg3: number, y: number);
        constructor(level: $ClientLevel, sprites: $SpriteSet, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number);
    }
    export class $SplashParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LargeSmokeParticle extends $SmokeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $GustSeedParticle extends $NoRenderParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
    }
    export class $WhiteAshParticle extends $BaseAshSmokeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: number, arg8: $SpriteSet);
    }
    export class $ParticleEngine implements $PreparableReloadListener, $ParticleEngineAccessor$1, $ParticleManagerAccessor, $ParticleManagerAccess, $ParticleEngineAccessor {
        add(effect: $Particle): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, sprite: $ParticleProvider$Sprite_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, particleMetaFactory: $ParticleEngine$SpriteParticleRegistration_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, particleFactory: $ParticleProvider_<T>): void;
        destroy(pos: $BlockPos_, state: $BlockState_): void;
        close(): void;
        tick(): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        setLevel(level: $ClientLevel | null): void;
        iterateParticles(arg0: $Consumer_<$Particle>): void;
        createTrackingEmitter(entity: $Entity, particleData: $ParticleOptions_): void;
        createTrackingEmitter(entity: $Entity, data: $ParticleOptions_, lifetime: number): void;
        render(arg0: $LightTexture, arg1: $Camera, arg2: number, arg3: $Frustum | null, arg4: $Predicate_<$ParticleRenderType>): void;
        /**
         * @deprecated
         */
        render(lightTexture: $LightTexture, camera: $Camera, partialTick: number): void;
        /**
         * Adds block hit particles for the specified block
         */
        crack(pos: $BlockPos_, side: $Direction_): void;
        handler$jej000$axiom$crack(blockPos: $BlockPos_, direction: $Direction_, ci: $CallbackInfo): void;
        handler$blk000$veil$clear(arg0: $CallbackInfo): void;
        handler$blk000$veil$tick(arg0: $CallbackInfo): void;
        createParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): $Particle;
        addBlockHitEffects(arg0: $BlockPos_, arg1: $BlockHitResult): void;
        countParticles(): string;
        handler$fpg000$chloride$inject$create(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $CallbackInfoReturnable<any>): void;
        handler$fpg000$chloride$inject$destroy(arg0: $BlockPos_, arg1: $BlockState_, arg2: $CallbackInfo): void;
        redirect$jhh000$flerovium$FastFrustumCheck(arg0: $Frustum, arg1: $AABB_, arg2: $Particle): boolean;
        handler$fpg000$chloride$inject$crack(arg0: $BlockPos_, arg1: $Direction_, arg2: $CallbackInfo): void;
        handler$cak000$ldlib2$injectTick(arg0: $CallbackInfo): void;
        handler$blk000$veil$countParticles(arg0: $CallbackInfoReturnable<any>): void;
        handler$blk000$veil$setLevel(arg0: $ClientLevel, arg1: $CallbackInfo): void;
        redirect$jhh000$flerovium$FastFrustumCheck$mixinextras$bridge$72(arg0: $Frustum, arg1: $AABB_, arg2: $LocalRef<any>): boolean;
        redirect$jhh000$flerovium$skipGeneratingAABB$mixinextras$bridge$73(arg0: $Particle, arg1: number, arg2: $LocalRef<any>): $AABB;
        handler$bcg000$reforgedplaymod$replayModReplay_clearParticleQueue(world: $ClientLevel, ci: $CallbackInfo): void;
        redirect$fpg000$chloride$redirect$particleRegistry(arg0: $Registry<any>, arg1: $Object): $ResourceLocation;
        redirect$jhh000$flerovium$skipGeneratingAABB(arg0: $Particle, arg1: number, arg2: $Particle): $AABB;
        getName(): string;
        getProviders(): $Map<$ResourceLocation, $ParticleProvider<never>>;
        getParticleAtlasTexture(): $TextureAtlas;
        ponder$getProviders(): $Map<$ResourceLocation, $ParticleProvider<never>>;
        invokeMakeParticle<T extends $ParticleOptions>(particleData: T, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): $Particle;
        random: $RandomSource;
        level: $ClientLevel;
        textureAtlas: $TextureAtlas;
        constructor(level: $ClientLevel, textureManager: $TextureManager);
        get name(): string;
        get providers(): $Map<$ResourceLocation, $ParticleProvider<never>>;
        get particleAtlasTexture(): $TextureAtlas;
    }
    export class $DripParticle$DripLandParticle extends $DripParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        isGlowing: boolean;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $TrialSpawnerDetectionParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $RisingParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $FlyTowardsPositionParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: boolean, arg8: $Particle$LifetimeAlpha_);
    }
    export class $SnowflakeParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $SonicBoomParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $MobAppearanceParticle extends $Particle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
    }
    export class $HugeExplosionParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: $SpriteSet);
    }
    export class $VibrationSignalParticle$Provider implements $ParticleProvider<$VibrationParticleOption> {
        createParticle(type: $VibrationParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BreakingItemParticle$CobwebProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $SuspendedTownParticle$EggCrackProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $DragonBreathParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SquidInkParticle extends $SimpleAnimatedParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        sprites: $SpriteSet;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: number, arg8: $SpriteSet);
    }
    export class $ShriekParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number);
    }
    export class $HugeExplosionSeedParticle extends $NoRenderParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
    }
    export class $TextureSheetParticle extends $SingleQuadParticle {
        setSpriteFromAge(sprite: $SpriteSet): void;
        pickSprite(sprite: $SpriteSet): void;
        setSprite(sprite: $TextureAtlasSprite): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
        set spriteFromAge(value: $SpriteSet);
    }
    export class $DustColorTransitionParticle$Provider implements $ParticleProvider<$DustColorTransitionOptions> {
        createParticle(type: $DustColorTransitionOptions, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $AttackSweepParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SculkChargeParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $SuspendedTownParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SnowflakeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles$FlashProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TerrainParticle$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(type: $BlockParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $PlayerCloudParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $GlowParticle$ElectricSparkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SoulParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$HoneyFallAndLandParticle extends $DripParticle$FallAndLandParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        isGlowing: boolean;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $AttackSweepParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: $SpriteSet);
    }
    export class $WakeParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $HeartParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        flerovium$lastTick: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        flerovium$cachedLight: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number);
    }
}
