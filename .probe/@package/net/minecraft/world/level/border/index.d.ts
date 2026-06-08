import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $WorldBorderExtension } from "@package/dev/ryanhcode/sable/mixinterface/world_border";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderChangeListener$DelegateBorderChangeListener implements $BorderChangeListener {
        onBorderCenterSet(arg0: $WorldBorder, arg1: number, arg2: number): void;
        onBorderSizeSet(arg0: $WorldBorder, arg1: number): void;
        onBorderSizeLerping(arg0: $WorldBorder, arg1: number, arg2: number, arg3: number): void;
        onBorderSetDamageSafeZOne(arg0: $WorldBorder, arg1: number): void;
        onBorderSetDamagePerBlock(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningTime(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningBlocks(arg0: $WorldBorder, arg1: number): void;
        constructor(arg0: $WorldBorder);
    }
    export class $WorldBorder$MovingBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $BorderStatus extends $Enum<$BorderStatus> {
        static values(): $BorderStatus[];
        static valueOf(arg0: string): $BorderStatus;
        getColor(): number;
        static GROWING: $BorderStatus;
        static SHRINKING: $BorderStatus;
        static STATIONARY: $BorderStatus;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $BorderStatus}.
     */
    export type $BorderStatus_ = "growing" | "shrinking" | "stationary";
    export class $BorderChangeListener {
    }
    export interface $BorderChangeListener {
        onBorderCenterSet(arg0: $WorldBorder, arg1: number, arg2: number): void;
        onBorderSizeSet(arg0: $WorldBorder, arg1: number): void;
        onBorderSizeLerping(arg0: $WorldBorder, arg1: number, arg2: number, arg3: number): void;
        onBorderSetDamageSafeZOne(arg0: $WorldBorder, arg1: number): void;
        onBorderSetDamagePerBlock(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningTime(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningBlocks(arg0: $WorldBorder, arg1: number): void;
    }
    export class $WorldBorder$StaticBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $WorldBorder$Settings {
        write(arg0: $CompoundTag_): void;
        static read(arg0: $DynamicLike<never>, arg1: $WorldBorder$Settings): $WorldBorder$Settings;
        getSize(): number;
        getSafeZone(): number;
        getWarningTime(): number;
        getSizeLerpTarget(): number;
        getWarningBlocks(): number;
        getSizeLerpTime(): number;
        getDamagePerBlock(): number;
        getCenterZ(): number;
        getCenterX(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
        constructor(arg0: $WorldBorder);
        get size(): number;
        get safeZone(): number;
        get warningTime(): number;
        get sizeLerpTarget(): number;
        get warningBlocks(): number;
        get sizeLerpTime(): number;
        get damagePerBlock(): number;
        get centerZ(): number;
        get centerX(): number;
    }
    export class $WorldBorder$BorderExtent {
    }
    export interface $WorldBorder$BorderExtent {
    }
    export class $WorldBorder implements $WorldBorderExtension {
        getSize(): number;
        tick(): void;
        setSize(arg0: number): void;
        setAbsoluteMaxSize(arg0: number): void;
        clampToBounds(arg0: $Vec3_): $BlockPos;
        clampToBounds(arg0: $BlockPos_): $BlockPos;
        clampToBounds(arg0: number, arg1: number, arg2: number): $BlockPos;
        addListener(arg0: $BorderChangeListener): void;
        getStatus(): $BorderStatus;
        removeListener(arg0: $BorderChangeListener): void;
        getListeners(): $List<$BorderChangeListener>;
        setWarningTime(arg0: number): void;
        getWarningTime(): number;
        lerpSizeBetween(arg0: number, arg1: number, arg2: number): void;
        getAbsoluteMaxSize(): number;
        getWarningBlocks(): number;
        applySettings(arg0: $WorldBorder$Settings): void;
        getLerpTarget(): number;
        getLerpSpeed(): number;
        createSettings(): $WorldBorder$Settings;
        setDamagePerBlock(arg0: number): void;
        setDamageSafeZone(arg0: number): void;
        setWarningBlocks(arg0: number): void;
        getCollisionShape(): $VoxelShape;
        getDamageSafeZone(): number;
        getDamagePerBlock(): number;
        getLerpRemainingTime(): number;
        getCenterZ(): number;
        getCenterX(): number;
        getMinX(): number;
        getMaxX(): number;
        getMaxZ(): number;
        setCenter(arg0: number, arg1: number): void;
        getMinZ(): number;
        getDistanceToBorder(arg0: $Entity): number;
        getDistanceToBorder(arg0: number, arg1: number): number;
        isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_): boolean;
        handler$heh000$sable$isWithinBounds(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        handler$heh000$sable$isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_, arg2: $CallbackInfoReturnable<any>): void;
        sable$setLevel(arg0: $Level_): void;
        isWithinBounds(arg0: number, arg1: number): boolean;
        isWithinBounds(arg0: number, arg1: number, arg2: number): boolean;
        isWithinBounds(arg0: $AABB_): boolean;
        isWithinBounds(arg0: $BlockPos_): boolean;
        isWithinBounds(arg0: $Vec3_): boolean;
        isWithinBounds(arg0: $ChunkPos): boolean;
        absoluteMaxSize: number;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get status(): $BorderStatus;
        get listeners(): $List<$BorderChangeListener>;
        get lerpTarget(): number;
        get lerpSpeed(): number;
        get collisionShape(): $VoxelShape;
        get lerpRemainingTime(): number;
        get centerZ(): number;
        get centerX(): number;
        get minX(): number;
        get maxX(): number;
        get maxZ(): number;
        get minZ(): number;
    }
}
