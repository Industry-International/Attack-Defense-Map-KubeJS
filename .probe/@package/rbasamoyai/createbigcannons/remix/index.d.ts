import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";

declare module "@package/rbasamoyai/createbigcannons/remix" {
    export class $CustomBlockDamageDisplay {
    }
    export interface $CustomBlockDamageDisplay {
        createbigcannons$trackCustomProgress(arg0: $BlockPos_, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomBlockDamageDisplay}.
     */
    export type $CustomBlockDamageDisplay_ = ((arg0: $BlockPos, arg1: number) => void);
}
