import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CommonGunIndex } from "@package/com/tacz/guns/resource/index";
import { $Object, $Record, $Class } from "@package/java/lang";
import { $IGun } from "@package/com/tacz/guns/api/item";
import { $FireMode_, $FireMode } from "@package/com/tacz/guns/api/item/gun";

declare module "@package/mod/chloeprime/gunsmithlib/api/util" {
    export class $GunInfo extends $Record {
        index(): $CommonGunIndex;
        static of(arg0: $ItemStack_): ($GunInfo) | undefined;
        getFireMode(): $FireMode;
        dropAllAmmoIncludingBarrel(arg0: $Player): void;
        getTotalMagazineSize(): number;
        setTotalAmmo(arg0: number): void;
        setFireMode(arg0: $FireMode_): void;
        gunId(): $ResourceLocation;
        gunStack(): $ItemStack;
        gunItem(): $IGun;
        runScript<T>(arg0: $LivingEntity, arg1: string, arg2: $Class<T>, ...arg3: $Object[]): (T) | undefined;
        getDummyAmmoAmount(): number;
        setDummyAmmoAmount(arg0: number): void;
        addDummyAmmoAmount(arg0: number): void;
        getTotalAmmo(): number;
        constructor(gunStack: $ItemStack_, gunItem: $IGun, gunId: $ResourceLocation_, index: $CommonGunIndex);
        get totalMagazineSize(): number;
    }
}
