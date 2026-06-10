import { $ItemVariant } from "@package/net/fabricmc/fabric/api/transfer/v1/item";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $TransactionContext } from "@package/net/fabricmc/fabric/api/transfer/v1/transaction";

declare module "@package/net/fabricmc/fabric/impl/transfer/item" {
    export class $ItemVariantCache {
    }
    export interface $ItemVariantCache {
        fabric_getCachedItemVariant(): $ItemVariant;
    }
    /**
     * Values that may be interpreted as {@link $ItemVariantCache}.
     */
    export type $ItemVariantCache_ = (() => $ItemVariant);
    export class $SpecialLogicInventory {
    }
    export interface $SpecialLogicInventory {
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        fabric_setSuppress(arg0: boolean): void;
    }
}
