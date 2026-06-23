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
        getIsList(): $List<$TagKeyOr<$DamageType>>;
        getIsNotList(): $List<$TagKeyOr<$DamageType>>;
        getMasterApType(): ($Holder<$DamageType>) | undefined;
        getMasterType(): ($Holder<$DamageType>) | undefined;
        constructor();
        get isList(): $List<$TagKeyOr<$DamageType>>;
        get isNotList(): $List<$TagKeyOr<$DamageType>>;
        get masterApType(): ($Holder<$DamageType>) | undefined;
        get masterType(): ($Holder<$DamageType>) | undefined;
    }
}
