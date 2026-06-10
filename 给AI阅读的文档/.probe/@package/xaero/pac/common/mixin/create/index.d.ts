import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";

declare module "@package/xaero/pac/common/mixin/create" {
    export class $MixinAccessorDeployerFakePlayer {
    }
    export interface $MixinAccessorDeployerFakePlayer {
        getBlockBreakingProgress(): $Pair<$BlockPos, number>;
        get blockBreakingProgress(): $Pair<$BlockPos, number>;
    }
    /**
     * Values that may be interpreted as {@link $MixinAccessorDeployerFakePlayer}.
     */
    export type $MixinAccessorDeployerFakePlayer_ = (() => $Pair<$BlockPos_, number>);
}
