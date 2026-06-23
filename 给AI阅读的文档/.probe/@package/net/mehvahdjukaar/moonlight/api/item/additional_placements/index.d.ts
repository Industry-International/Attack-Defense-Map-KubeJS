import { $InteractionResult } from "@package/net/minecraft/world";
import { $Item$Properties, $BlockItem, $Item } from "@package/net/minecraft/world/item";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundType_, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/net/mehvahdjukaar/moonlight/api/item/additional_placements" {
    export class $AdditionalItemPlacement {
        overrideUpdatePlacementContext(arg0: $BlockPlaceContext): $BlockPlaceContext;
        overrideGetPlacementState(arg0: $BlockPlaceContext): $BlockState;
        static getBlockPlacer(): $BlockPlacerItem;
        overrideUseOn(arg0: $UseOnContext, arg1: $FoodProperties_): $InteractionResult;
        getPlacedBlock(): $Block;
        overridePlace(arg0: $BlockPlaceContext): $InteractionResult;
        constructor(arg0: $Block_);
        static get blockPlacer(): $BlockPlacerItem;
        get placedBlock(): $Block;
    }
    export class $BlockPlacerItem extends $BlockItem {
        static get(): $BlockPlacerItem;
        mimicUseOn(arg0: $UseOnContext, arg1: $Block_, arg2: $FoodProperties_): $InteractionResult;
        mimicPlace(arg0: $BlockPlaceContext, arg1: $Block_, arg2: $SoundType_): $InteractionResult;
        mimicGetPlacementState(arg0: $BlockPlaceContext, arg1: $Block_): $BlockState;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
}
