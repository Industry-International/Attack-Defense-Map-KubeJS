import { $Holder, $RegistryAccess } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $TagKeyOr } from "@package/mod/chloeprime/gunsmithlib/common/util";
import { $List } from "@package/java/util";
import { $GunInfo_ } from "@package/mod/chloeprime/gunsmithlib/api/util";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/damage_source_control" {
    export class $DamageSourceControlData {
        static of(arg0: $ItemStack_, arg1: $RegistryAccess): $List<$DamageSourceControlData>;
        static of(arg0: $GunInfo_, arg1: $RegistryAccess): $List<$DamageSourceControlData>;
        getMasterType(): ($Holder<$DamageType>) | undefined;
        getIsNotList(): $List<$TagKeyOr<$DamageType>>;
        getMasterApType(): ($Holder<$DamageType>) | undefined;
        getIsList(): $List<$TagKeyOr<$DamageType>>;
        constructor();
        get masterType(): ($Holder<$DamageType>) | undefined;
        get isNotList(): $List<$TagKeyOr<$DamageType>>;
        get masterApType(): ($Holder<$DamageType>) | undefined;
        get isList(): $List<$TagKeyOr<$DamageType>>;
    }
}
