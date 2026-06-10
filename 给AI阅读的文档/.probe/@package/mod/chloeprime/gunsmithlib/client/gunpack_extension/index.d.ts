import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $GunDisplayInstance } from "@package/com/tacz/guns/client/resource";
import { $Enum } from "@package/java/lang";
import { $DescriptionalAffixData } from "@package/mod/chloeprime/gunsmithlib/client/gunpack_extension/descriptial_affix";
export * as descriptial_affix from "@package/mod/chloeprime/gunsmithlib/client/gunpack_extension/descriptial_affix";

declare module "@package/mod/chloeprime/gunsmithlib/client/gunpack_extension" {
    export class $EnhancedGunDisplayInstance {
    }
    export interface $EnhancedGunDisplayInstance extends $EnhancedGunDisplay {
        gunsmith$acceptOverride(arg0: $GunDisplayInstance): void;
    }
    export class $EnhancedGunDisplay {
    }
    export interface $EnhancedGunDisplay {
        gunsmith$getGunsmithLibExtension(): ($GunsmithLibGunDisplayExtension) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $EnhancedGunDisplay}.
     */
    export type $EnhancedGunDisplay_ = (() => ($GunsmithLibGunDisplayExtension) | undefined);
    export class $GunsmithLibGunDisplayExtension {
        static of(arg0: $ItemStack_): ($GunsmithLibGunDisplayExtension) | undefined;
        hideHeatBarOverlay(): boolean;
        getCurrentAmmoDisplayType(): $CurrentAmmoDisplayType;
        getDescriptionalAffixData(): $DescriptionalAffixData;
        getVariantName(): string;
        getVariantIcon(): $ResourceLocation;
        unlocksTransparency(): boolean;
        constructor();
        get currentAmmoDisplayType(): $CurrentAmmoDisplayType;
        get descriptionalAffixData(): $DescriptionalAffixData;
        get variantName(): string;
        get variantIcon(): $ResourceLocation;
    }
    export class $CurrentAmmoDisplayType extends $Enum<$CurrentAmmoDisplayType> {
        static values(): $CurrentAmmoDisplayType[];
        static valueOf(arg0: string): $CurrentAmmoDisplayType;
        static BATTERY: $CurrentAmmoDisplayType;
        static DEFAULT: $CurrentAmmoDisplayType;
        static COUNTER: $CurrentAmmoDisplayType;
    }
    /**
     * Values that may be interpreted as {@link $CurrentAmmoDisplayType}.
     */
    export type $CurrentAmmoDisplayType_ = "default" | "battery" | "counter";
}
