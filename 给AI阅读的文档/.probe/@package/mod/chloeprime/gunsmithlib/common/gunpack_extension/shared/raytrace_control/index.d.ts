import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $TagKeyOr } from "@package/mod/chloeprime/gunsmithlib/common/util";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $List } from "@package/java/util";

declare module "@package/mod/chloeprime/gunsmithlib/common/gunpack_extension/shared/raytrace_control" {
    export class $RaytraceControlData {
        static of(arg0: $ItemStack_): ($RaytraceControlData) | undefined;
        getIgnoreList(): $List<$TagKeyOr<$Block>>;
        getObstructList(): $List<$TagKeyOr<$Block>>;
        constructor();
        get ignoreList(): $List<$TagKeyOr<$Block>>;
        get obstructList(): $List<$TagKeyOr<$Block>>;
    }
}
