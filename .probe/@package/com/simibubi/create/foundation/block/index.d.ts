import { $Level_, $BlockGetter, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $ItemInteractionResult, $InteractionResult } from "@package/net/minecraft/world";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $EntityBlock, $SimpleWaterloggedBlock } from "@package/net/minecraft/world/level/block";
import { $Class } from "@package/java/lang";
import { $BlockEntityType_, $BlockEntityType, $BlockEntity, $BlockEntityTicker } from "@package/net/minecraft/world/level/block/entity";
export * as render from "@package/com/simibubi/create/foundation/block/render";

declare module "@package/com/simibubi/create/foundation/block" {
    export class $ProperWaterloggedBlock {
        static withWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): $BlockState;
        static WATERLOGGED: $BooleanProperty;
    }
    export interface $ProperWaterloggedBlock extends $SimpleWaterloggedBlock {
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        fluidState(arg0: $BlockState_): $FluidState;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
    }
    export class $IHaveBigOutline {
    }
    export interface $IHaveBigOutline {
    }
    export class $IBE<T extends $BlockEntity> {
        static onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): void;
    }
    export interface $IBE<T extends $BlockEntity> extends $EntityBlock {
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<T>): void;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<T, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<T, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): T;
        getBlockEntityType(): $BlockEntityType<T>;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): (T) | undefined;
        getBlockEntityClass(): $Class<T>;
        get blockEntityType(): $BlockEntityType<T>;
        get blockEntityClass(): $Class<T>;
    }
}
