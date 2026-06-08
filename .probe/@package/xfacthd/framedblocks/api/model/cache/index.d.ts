import { $CamoContent } from "@package/xfacthd/framedblocks/api/camo";
import { $Object } from "@package/java/lang";

declare module "@package/xfacthd/framedblocks/api/model/cache" {
    export class $QuadCacheKey {
    }
    export interface $QuadCacheKey {
        camo(): $CamoContent<never>;
        ctCtx(): $Object;
    }
}
