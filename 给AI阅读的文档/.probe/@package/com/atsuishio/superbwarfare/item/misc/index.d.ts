import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Perk, $Perk_ } from "@package/com/atsuishio/superbwarfare/perk";
import { $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/com/atsuishio/superbwarfare/item/misc" {
    export class $PerkItem<T extends $Perk> extends $Item {
        getPerk(): $Perk;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $DeferredHolder<$Perk_, $Item_>);
        get perk(): $Perk;
    }
}
