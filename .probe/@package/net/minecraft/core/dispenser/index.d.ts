import { $Level_ } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Position } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $ProjectileItem$DispenseConfig, $ItemStack_, $ProjectileItem } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ProjectileDispenseBehaviorAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Record } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $Boat$Type_ } from "@package/net/minecraft/world/entity/vehicle";
import { $DispenserBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/core/dispenser" {
    export class $DefaultDispenseItemBehavior implements $DispenseItemBehavior {
        execute(arg0: $BlockSource_, arg1: $ItemStack_): $ItemStack;
        static spawnItem(arg0: $Level_, arg1: $ItemStack_, arg2: number, arg3: $Direction_, arg4: $Position): void;
        playAnimation(arg0: $BlockSource_, arg1: $Direction_): void;
        playSound(arg0: $BlockSource_): void;
        dispense(arg0: $BlockSource_, arg1: $ItemStack_): $ItemStack;
        consumeWithRemainder(arg0: $BlockSource_, arg1: $ItemStack_, arg2: $ItemStack_): $ItemStack;
        constructor();
    }
    export class $ShulkerBoxDispenseBehavior extends $OptionalDispenseItemBehavior {
        constructor();
    }
    export class $BoatDispenseItemBehavior extends $DefaultDispenseItemBehavior {
        constructor(arg0: $Boat$Type_);
        constructor(arg0: $Boat$Type_, arg1: boolean);
    }
    export class $BlockSource extends $Record {
        state(): $BlockState;
        pos(): $BlockPos;
        level(): $ServerLevel;
        center(): $Vec3;
        blockEntity(): $DispenserBlockEntity;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $DispenserBlockEntity);
    }
    export class $ShearsDispenseItemBehavior extends $OptionalDispenseItemBehavior {
        constructor();
    }
    export class $OptionalDispenseItemBehavior extends $DefaultDispenseItemBehavior {
        isSuccess(): boolean;
        setSuccess(arg0: boolean): void;
        constructor();
    }
    export class $DispenseItemBehavior {
        static bootStrap(): void;
        static NOOP: $DispenseItemBehavior;
        static LOGGER: $Logger;
    }
    export interface $DispenseItemBehavior {
        dispense(arg0: $BlockSource_, arg1: $ItemStack_): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $DispenseItemBehavior}.
     */
    export type $DispenseItemBehavior_ = ((arg0: $BlockSource, arg1: $ItemStack) => $ItemStack_);
    export class $ProjectileDispenseBehavior extends $DefaultDispenseItemBehavior implements $ProjectileDispenseBehaviorAccessor {
        create$getDispenseConfig(): $ProjectileItem$DispenseConfig;
        create$getProjectileItem(): $ProjectileItem;
        constructor(arg0: $Item_);
    }
}
