import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Player } from "@package/net/minecraft/world/entity/player";
export * as ammo from "@package/com/atsuishio/superbwarfare/item/ammo";
export * as misc from "@package/com/atsuishio/superbwarfare/item/misc";
export * as gun from "@package/com/atsuishio/superbwarfare/item/gun";

declare module "@package/com/atsuishio/superbwarfare/item" {
    export class $ItemScreenProvider {
    }
    export interface $ItemScreenProvider {
        getItemScreen(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_): $Screen;
    }
    /**
     * Values that may be interpreted as {@link $ItemScreenProvider}.
     */
    export type $ItemScreenProvider_ = ((arg0: $ItemStack, arg1: $Player, arg2: $InteractionHand) => $Screen);
    export class $EnergyStorageItem {
    }
    export interface $EnergyStorageItem {
        getMaxReceiveEnergy(arg0: $ItemStack_): number;
        getMaxExtractEnergy(arg0: $ItemStack_): number;
        getMaxEnergy(arg0: $ItemStack_): number;
    }
}
