import { $BakedModel } from "@package/net/minecraft/client/resources/model";

declare module "@package/xfacthd/framedblocks/mixin/client" {
    export class $AccessorWeightedBakedModel {
    }
    export interface $AccessorWeightedBakedModel {
        framedblocks$getWrappedModel(): $BakedModel;
    }
    /**
     * Values that may be interpreted as {@link $AccessorWeightedBakedModel}.
     */
    export type $AccessorWeightedBakedModel_ = (() => $BakedModel);
    export class $AccessorMultiPlayerGameMode {
    }
    export interface $AccessorMultiPlayerGameMode {
        framedblocks$setDestroyDelay(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMultiPlayerGameMode}.
     */
    export type $AccessorMultiPlayerGameMode_ = ((arg0: number) => void);
}
