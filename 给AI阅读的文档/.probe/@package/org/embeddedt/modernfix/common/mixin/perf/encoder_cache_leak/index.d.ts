import { $EncoderCache } from "@package/net/minecraft/util";
import { $LoadingCache } from "@package/com/google/common/cache";

declare module "@package/org/embeddedt/modernfix/common/mixin/perf/encoder_cache_leak" {
    export class $DataComponentsAccessor {
        static mfix$getCache(): $EncoderCache;
    }
    export interface $DataComponentsAccessor {
    }
    export class $EncoderCacheAccessor {
    }
    export interface $EncoderCacheAccessor {
        mfix$getCache(): $LoadingCache<never, never>;
    }
    /**
     * Values that may be interpreted as {@link $EncoderCacheAccessor}.
     */
    export type $EncoderCacheAccessor_ = (() => $LoadingCache<never, never>);
}
