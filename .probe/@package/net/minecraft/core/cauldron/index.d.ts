import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Predicate_ } from "@package/java/util/function";
import { $ItemInteractionResult, $InteractionHand, $InteractionHand_, $ItemInteractionResult_ } from "@package/net/minecraft/world";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/net/minecraft/core/cauldron" {
    export class $CauldronInteraction$InteractionMap extends $Record {
        name(): string;
        map(): $Map<$Item, $CauldronInteraction>;
        constructor(arg0: string, arg1: $Map_<$Item_, $CauldronInteraction_>);
    }
    export class $CauldronInteraction {
        static bootStrap(): void;
        static fillBucket(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_, arg5: $ItemStack_, arg6: $ItemStack_, arg7: $Predicate_<$BlockState>, arg8: $SoundEvent_): $ItemInteractionResult;
        static addDefaultInteractions(arg0: $Map_<$Item_, $CauldronInteraction_>): void;
        static newInteractionMap(arg0: string): $CauldronInteraction$InteractionMap;
        static emptyBucket(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $InteractionHand_, arg4: $ItemStack_, arg5: $BlockState_, arg6: $SoundEvent_): $ItemInteractionResult;
        static CODEC: $Codec<$CauldronInteraction$InteractionMap>;
        static LAVA: $CauldronInteraction$InteractionMap;
        static FILL_POWDER_SNOW: $CauldronInteraction;
        static BANNER: $CauldronInteraction;
        static DYED_ITEM: $CauldronInteraction;
        static FILL_LAVA: $CauldronInteraction;
        static POWDER_SNOW: $CauldronInteraction$InteractionMap;
        static SHULKER_BOX: $CauldronInteraction;
        static FILL_WATER: $CauldronInteraction;
        static INTERACTIONS: $Map<string, $CauldronInteraction$InteractionMap>;
        static EMPTY: $CauldronInteraction$InteractionMap;
        static WATER: $CauldronInteraction$InteractionMap;
    }
    export interface $CauldronInteraction {
        interact(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_, arg5: $ItemStack_): $ItemInteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $CauldronInteraction}.
     */
    export type $CauldronInteraction_ = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $Player, arg4: $InteractionHand, arg5: $ItemStack) => $ItemInteractionResult_);
}
