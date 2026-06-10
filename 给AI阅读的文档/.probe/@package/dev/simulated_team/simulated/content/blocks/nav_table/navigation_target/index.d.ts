import { $Vec3i, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $NavTableBlockEntity } from "@package/dev/simulated_team/simulated/content/blocks/nav_table";

declare module "@package/dev/simulated_team/simulated/content/blocks/nav_table/navigation_target" {
    export class $NavigationTarget {
        static ofStack(arg0: $ItemStack_): $NavigationTarget;
        static getPlaneProjectedPos(arg0: $Vec3_, arg1: $Vec3i): $Vec3;
    }
    export interface $NavigationTarget {
        getTarget(arg0: $NavTableBlockEntity, arg1: $ItemStack_): $Vec3;
        onInsert(arg0: $ItemStack_, arg1: $NavTableBlockEntity, arg2: $Player): void;
        getRedstoneStrength(arg0: $NavTableBlockEntity, arg1: $Direction_, arg2: $ItemStack_): number;
        calculateModulatingStrength(arg0: $NavTableBlockEntity, arg1: $ItemStack_): number;
        calculateSideStrength(arg0: $NavTableBlockEntity, arg1: $Direction_, arg2: $ItemStack_): number;
        distanceToTarget(arg0: $NavTableBlockEntity): number;
        getModulatingRange(): number;
        getDeadzone(): number;
        getMaxRange(): number;
        get modulatingRange(): number;
        get deadzone(): number;
        get maxRange(): number;
    }
    /**
     * Values that may be interpreted as {@link $NavigationTarget}.
     */
    export type $NavigationTarget_ = RegistryTypes.SimulatedNavigationTarget | ((arg0: $NavTableBlockEntity, arg1: $ItemStack) => $Vec3_);
    export interface $NavigationTarget extends RegistryMarked<RegistryTypes.SimulatedNavigationTargetTag, RegistryTypes.SimulatedNavigationTarget> {}
}
