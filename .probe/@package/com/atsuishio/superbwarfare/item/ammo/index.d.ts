import { $Ammo, $Ammo_ } from "@package/com/atsuishio/superbwarfare/data/gun";
import { $Item, $Item$Properties } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/com/atsuishio/superbwarfare/item/ammo" {
    export class $AmmoSupplierItem extends $Item {
        getType(): $Ammo;
        getAmmoToAdd(): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Ammo_, arg1: number, arg2: $Item$Properties);
        get type(): $Ammo;
        get ammoToAdd(): number;
    }
}
