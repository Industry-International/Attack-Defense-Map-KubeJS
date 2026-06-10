import { $NonNullList } from "@package/net/minecraft/core";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient$Value, $Ingredient$Value_ } from "@package/net/minecraft/world/item/crafting";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Map_, $Map } from "@package/java/util";
export * as client from "@package/xfacthd/framedblocks/mixin/client";

declare module "@package/xfacthd/framedblocks/mixin" {
    export class $AccessorStateDefinitionBuilder {
    }
    export interface $AccessorStateDefinitionBuilder {
        framedblocks$getProperties(): $Map<string, $Property<never>>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorStateDefinitionBuilder}.
     */
    export type $AccessorStateDefinitionBuilder_ = (() => $Map_<string, $Property<never>>);
    export class $InvokerBlockItem {
    }
    export interface $InvokerBlockItem {
        framedblocks$callGetPlacementState(arg0: $BlockPlaceContext): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $InvokerBlockItem}.
     */
    export type $InvokerBlockItem_ = ((arg0: $BlockPlaceContext) => $BlockState_);
    export class $AccessorTransientCraftingContainer {
    }
    export interface $AccessorTransientCraftingContainer {
        framedblocks$getItems(): $NonNullList<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorTransientCraftingContainer}.
     */
    export type $AccessorTransientCraftingContainer_ = (() => $NonNullList<$ItemStack_>);
    export class $AccessorIngredient {
    }
    export interface $AccessorIngredient {
        framedblocks$getValues(): $Ingredient$Value[];
    }
    /**
     * Values that may be interpreted as {@link $AccessorIngredient}.
     */
    export type $AccessorIngredient_ = (() => $Ingredient$Value_[]);
}
