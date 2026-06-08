import { $IFakeIResourceManager$V1, $IFakeIResource$V1, $IFakeIResource$V2 } from "@package/customskinloader/fake/itf";

declare module "@package/customskinloader/mixin" {
    export class $MixinIResourceManager$V1 {
    }
    export interface $MixinIResourceManager$V1 extends $IFakeIResourceManager$V1 {
    }
    export class $MixinIResource {
    }
    export interface $MixinIResource extends $IFakeIResource$V1, $IFakeIResource$V2 {
    }
}
