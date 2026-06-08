import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockColorsExtension } from "@package/net/caffeinemc/mods/sodium/client/model/color/interop";
import { $ToIntFunction_ } from "@package/java/util/function";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Reference2ReferenceMap, $ReferenceSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ColorProviderRegistryImpl$ColorMapperHolder } from "@package/net/fabricmc/fabric/impl/client/rendering";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Map, $Set } from "@package/java/util";
import { $BlockColorsAccessor } from "@package/com/github/argon4w/acceleratedrendering/features/items/mixins/accessors";

declare module "@package/net/minecraft/client/color/block" {
    export class $BlockTintCache$LatestCacheInfo {
    }
    export class $BlockColor {
    }
    export interface $BlockColor {
        getColor(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: number): number;
    }
    /**
     * Values that may be interpreted as {@link $BlockColor}.
     */
    export type $BlockColor_ = ((arg0: $BlockState, arg1: $BlockAndTintGetter, arg2: $BlockPos, arg3: number) => number);
    export class $BlockColors implements $BlockColorsAccessor, $ColorProviderRegistryImpl$ColorMapperHolder<any, any>, $BlockColorsExtension {
        get(arg0: $Block_): $BlockColor;
        /**
         * @deprecated
         */
        register(arg0: $BlockColor_, ...arg1: $Block_[]): void;
        getColor(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: number): number;
        getColor(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        static createDefault(): $BlockColors;
        sodium$getOverridenVanillaBlocks(): $ReferenceSet<any>;
        sodium$getProviders(): $Reference2ReferenceMap<any, any>;
        getColoringProperties(arg0: $Block_): $Set<$Property<never>>;
        getBlockColors(): $Map<$Block, $BlockColor>;
        constructor();
        get blockColors(): $Map<$Block, $BlockColor>;
    }
    export class $BlockTintCache$CacheData {
    }
    export class $BlockTintCache {
        getColor(arg0: $BlockPos_): number;
        invalidateAll(): void;
        invalidateForChunk(arg0: number, arg1: number): void;
        constructor(arg0: $ToIntFunction_<$BlockPos>);
    }
}
