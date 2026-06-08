import { $FabricBlockState, $FabricBlock } from "@package/net/fabricmc/fabric/api/block/v1";

declare module "@package/net/fabricmc/fabric/mixin/block" {
    export class $IBlockStateExtensionMixin {
    }
    export interface $IBlockStateExtensionMixin extends $FabricBlockState {
    }
    export class $IBlockExtensionMixin {
    }
    export interface $IBlockExtensionMixin extends $FabricBlock {
    }
}
