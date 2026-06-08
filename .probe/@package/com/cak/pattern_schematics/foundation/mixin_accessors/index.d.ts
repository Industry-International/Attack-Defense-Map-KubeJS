import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/com/cak/pattern_schematics/foundation/mixin_accessors" {
    export class $MovementContextAccessor {
    }
    export interface $MovementContextAccessor {
        pattern_schematics$setFilter(arg0: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $MovementContextAccessor}.
     */
    export type $MovementContextAccessor_ = ((arg0: $ItemStack) => void);
}
