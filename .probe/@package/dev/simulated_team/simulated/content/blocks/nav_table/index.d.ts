import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $NavigationTarget } from "@package/dev/simulated_team/simulated/content/blocks/nav_table/navigation_target";
import { $Clearable } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SingleSlotContainer, $ContainerSlot } from "@package/dev/simulated_team/simulated/multiloader/inventory";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $Quaterniond } from "@package/org/joml";
export * as navigation_target from "@package/dev/simulated_team/simulated/content/blocks/nav_table/navigation_target";

declare module "@package/dev/simulated_team/simulated/content/blocks/nav_table" {
    export class $NavTableInventory extends $SingleSlotContainer {
        maxStackSize: number;
        slot: $ContainerSlot;
        constructor(arg0: $NavTableBlockEntity);
    }
    export class $NavTableBlockEntity extends $SmartBlockEntity implements $Clearable {
        setHeldItem(arg0: $ItemStack_): $ItemStack;
        getHeldItem(): $ItemStack;
        getProjectedSelfPos(): $Vec3;
        clearContent(): void;
        getRedstoneStrength(arg0: $Direction_): number;
        getSublevelRot(): $Quaterniond;
        distanceToTarget(): number;
        getTargetPosition(arg0: boolean): $Vec3;
        forceCurrentAngle(arg0: number): void;
        getRelativeAngle(): number;
        getClientTargetAngle(arg0: number): number;
        lastDistanceToTarget(): number;
        getNavTableItem(): $NavigationTarget;
        dropHeldItem(): void;
        worldPosition: $BlockPos;
        isPowering: boolean;
        currentTarget: $Vec3;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $NavTableInventory;
        lerpedAngleDegrees: $LerpedFloat;
        subLevel: $SubLevel;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get projectedSelfPos(): $Vec3;
        get sublevelRot(): $Quaterniond;
        get relativeAngle(): number;
        get navTableItem(): $NavigationTarget;
    }
}
