import { $HolderLookup$Provider } from "@package/net/minecraft/core";

declare module "@package/net/fabricmc/fabric/mixin/datagen/loot" {
    export class $BlockLootTableGeneratorAccessor {
    }
    export interface $BlockLootTableGeneratorAccessor {
        getRegistries(): $HolderLookup$Provider;
        get registries(): $HolderLookup$Provider;
    }
    /**
     * Values that may be interpreted as {@link $BlockLootTableGeneratorAccessor}.
     */
    export type $BlockLootTableGeneratorAccessor_ = (() => $HolderLookup$Provider);
}
