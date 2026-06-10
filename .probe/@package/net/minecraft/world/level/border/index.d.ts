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
        onBorderSetDamageSafeZOne(arg0: $WorldBorder, arg1: number): void;
        onBorderSizeLerping(arg0: $WorldBorder, arg1: number, arg2: number, arg3: number): void;
        onBorderSetWarningBlocks(arg0: $WorldBorder, arg1: number): void;
        onBorderSetDamagePerBlock(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningTime(arg0: $WorldBorder, arg1: number): void;
        onBorderCenterSet(arg0: $WorldBorder, arg1: number, arg2: number): void;
        onBorderSizeSet(arg0: $WorldBorder, arg1: number): void;
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
        onBorderSetDamageSafeZOne(arg0: $WorldBorder, arg1: number): void;
        onBorderSizeLerping(arg0: $WorldBorder, arg1: number, arg2: number, arg3: number): void;
        onBorderSetWarningBlocks(arg0: $WorldBorder, arg1: number): void;
        onBorderSetDamagePerBlock(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningTime(arg0: $WorldBorder, arg1: number): void;
        onBorderCenterSet(arg0: $WorldBorder, arg1: number, arg2: number): void;
        onBorderSizeSet(arg0: $WorldBorder, arg1: number): void;
    }
    export class $WorldBorder$StaticBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $WorldBorder$Settings {
        write(arg0: $CompoundTag_): void;
        static read(arg0: $DynamicLike<never>, arg1: $WorldBorder$Settings): $WorldBorder$Settings;
        getSize(): number;
        getCenterX(): number;
        getCenterZ(): number;
        getDamagePerBlock(): number;
        getSafeZone(): number;
        getWarningTime(): number;
        getSizeLerpTime(): number;
        getSizeLerpTarget(): number;
        getWarningBlocks(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
        constructor(arg0: $WorldBorder);
        get size(): number;
        get centerX(): number;
        get centerZ(): number;
        get damagePerBlock(): number;
        get safeZone(): number;
        get warningTime(): number;
        get sizeLerpTime(): number;
        get sizeLerpTarget(): number;
        get warningBlocks(): number;
    }
    export class $WorldBorder$BorderExtent {
    }
    export interface $WorldBorder$BorderExtent {
    }
    export class $WorldBorder implements $WorldBorderExtension {
        getSize(): number;
        tick(): void;
        setSize(arg0: number): void;
        getListeners(): $List<$BorderChangeListener>;
        removeListener(arg0: $BorderChangeListener): void;
        getStatus(): $BorderStatus;
        addListener(arg0: $BorderChangeListener): void;
        getCenterX(): number;
        getCenterZ(): number;
        getDistanceToBorder(arg0: number, arg1: number): number;
        getDistanceToBorder(arg0: $Entity): number;
        clampToBounds(arg0: $BlockPos_): $BlockPos;
        clampToBounds(arg0: number, arg1: number, arg2: number): $BlockPos;
        clampToBounds(arg0: $Vec3_): $BlockPos;
        getMinZ(): number;
        getMaxX(): number;
        getMaxZ(): number;
        setCenter(arg0: number, arg1: number): void;
        getMinX(): number;
        getCollisionShape(): $VoxelShape;
        isWithinBounds(arg0: $Vec3_): boolean;
        isWithinBounds(arg0: $ChunkPos): boolean;
        isWithinBounds(arg0: $BlockPos_): boolean;
        isWithinBounds(arg0: number, arg1: number, arg2: number): boolean;
        isWithinBounds(arg0: $AABB_): boolean;
        isWithinBounds(arg0: number, arg1: number): boolean;
        sable$setLevel(arg0: $Level_): void;
        getDamageSafeZone(): number;
        getDamagePerBlock(): number;
        handler$hfj000$sable$isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_, arg2: $CallbackInfoReturnable<any>): void;
        handler$hfj000$sable$isWithinBounds(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        getLerpRemainingTime(): number;
        setAbsoluteMaxSize(arg0: number): void;
        isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_): boolean;
        setDamageSafeZone(arg0: number): void;
        applySettings(arg0: $WorldBorder$Settings): void;
        getLerpTarget(): number;
        lerpSizeBetween(arg0: number, arg1: number, arg2: number): void;
        getWarningTime(): number;
        setWarningTime(arg0: number): void;
        createSettings(): $WorldBorder$Settings;
        getLerpSpeed(): number;
        setWarningBlocks(arg0: number): void;
        setDamagePerBlock(arg0: number): void;
        getAbsoluteMaxSize(): number;
        getWarningBlocks(): number;
        absoluteMaxSize: number;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get listeners(): $List<$BorderChangeListener>;
        get status(): $BorderStatus;
        get centerX(): number;
        get centerZ(): number;
        get minZ(): number;
        get maxX(): number;
        get maxZ(): number;
        get minX(): number;
        get collisionShape(): $VoxelShape;
        get lerpRemainingTime(): number;
        get lerpTarget(): number;
        get lerpSpeed(): number;
    }
}
