import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $CommonGunIndex } from "@package/com/tacz/guns/resource/index";
import { $IGun } from "@package/com/tacz/guns/api/item";

declare module "@package/com/tacz/guns/inventory/tooltip" {
    export class $GunTooltip implements $TooltipComponent {
        getAmmoId(): $ResourceLocation;
        getGunIndex(): $CommonGunIndex;
        getGun(): $ItemStack;
        getIGun(): $IGun;
        constructor(arg0: $ItemStack_, arg1: $IGun, arg2: $ResourceLocation_, arg3: $CommonGunIndex);
        get ammoId(): $ResourceLocation;
        get gunIndex(): $CommonGunIndex;
        get gun(): $ItemStack;
        get IGun(): $IGun;
    }
}
