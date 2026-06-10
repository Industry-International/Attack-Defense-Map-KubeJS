import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Collection_ } from "@package/java/util";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/cn/chloeprime/commons_impl/rpg" {
    export class $EnhancedDamageSource {
    }
    export interface $EnhancedDamageSource {
        kuroutils$injectIsNot(arg0: $Collection_<$TagKey_<$DamageType>>): void;
        kuroutils$injectIsNot(arg0: $TagKey_<$DamageType>): void;
        kuroutils$injectIs(arg0: $Collection_<$TagKey_<$DamageType>>): void;
        kuroutils$injectIs(arg0: $TagKey_<$DamageType>): void;
    }
}
