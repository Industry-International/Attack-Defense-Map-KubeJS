import { $FabricTagKey } from "@package/net/fabricmc/fabric/api/tag";

declare module "@package/net/fabricmc/fabric/mixin/tag" {
    export class $TagKeyMixin {
    }
    export interface $TagKeyMixin extends $FabricTagKey {
    }
}
