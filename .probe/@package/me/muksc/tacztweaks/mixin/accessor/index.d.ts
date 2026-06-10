import { $ClipContext$Block, $ClipContext$Fluid } from "@package/net/minecraft/world/level";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Channel } from "@package/com/mojang/blaze3d/audio";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $TacHitResult } from "@package/com/tacz/guns/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $AudioFormat } from "@package/javax/sound/sampled";
import { $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $ByteBuffer } from "@package/java/nio";
import { $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/me/muksc/tacztweaks/mixin/accessor" {
    export class $BlockInputAccessor {
    }
    export interface $BlockInputAccessor {
        tacztweaks$getTag(): $CompoundTag;
    }
    /**
     * Values that may be interpreted as {@link $BlockInputAccessor}.
     */
    export type $BlockInputAccessor_ = (() => $CompoundTag_);
    export class $ChannelHandleAccessor {
    }
    export interface $ChannelHandleAccessor {
        tacztweaks$getChannel(): $Channel;
    }
    /**
     * Values that may be interpreted as {@link $ChannelHandleAccessor}.
     */
    export type $ChannelHandleAccessor_ = (() => $Channel);
    export class $ClipContextAccessor {
    }
    export interface $ClipContextAccessor {
        tacztweaks$getBlock(): $ClipContext$Block;
        tacztweaks$getFluid(): $ClipContext$Fluid;
        tacztweaks$getCollisionContext(): $CollisionContext;
    }
    export class $LocalPlayerDataHolderAccessor {
    }
    export interface $LocalPlayerDataHolderAccessor {
        tacztweaks$getPlayer(): $LocalPlayer;
    }
    /**
     * Values that may be interpreted as {@link $LocalPlayerDataHolderAccessor}.
     */
    export type $LocalPlayerDataHolderAccessor_ = (() => $LocalPlayer);
    export class $SoundBufferAccessor {
    }
    export interface $SoundBufferAccessor {
        tacztweaks$getFormat(): $AudioFormat;
        tacztweaks$getData(): $ByteBuffer;
    }
    export class $EntityKineticBulletAccessor {
    }
    export interface $EntityKineticBulletAccessor {
        tacztweaks$invokeOnHitEntity(arg0: $TacHitResult, arg1: $Vec3_, arg2: $Vec3_): void;
        tacztweaks$invokeOnHitBlock(arg0: $BlockHitResult, arg1: $Vec3_, arg2: $Vec3_): void;
        tacztweaks$setPierce(arg0: number): void;
        tacztweaks$getPierce(): number;
        tacztweaks$getExplosion(): boolean;
    }
    export class $InaccuracyTypeAccessor {
        static tacztweaks$invokeIsMove(arg0: $LivingEntity): boolean;
    }
    export interface $InaccuracyTypeAccessor {
    }
    export class $ExplosionAccessor {
    }
    export interface $ExplosionAccessor {
        tacztweaks$setY(arg0: number): void;
        tacztweaks$setX(arg0: number): void;
        tacztweaks$setZ(arg0: number): void;
    }
}
