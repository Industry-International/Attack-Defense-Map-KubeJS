import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $List } from "@package/java/util";

declare module "@package/mod/chloeprime/gunsmithlib/client/gunpack_extension/descriptial_affix" {
    export class $DescriptionalAffixData {
        getAfter(): ($List<string>) | undefined;
        getReplace(): ($List<string>) | undefined;
        getBefore(): ($List<string>) | undefined;
        static fromGun(arg0: $ItemStack_): ($DescriptionalAffixData) | undefined;
        constructor();
        get after(): ($List<string>) | undefined;
        get replace(): ($List<string>) | undefined;
        get before(): ($List<string>) | undefined;
    }
}
