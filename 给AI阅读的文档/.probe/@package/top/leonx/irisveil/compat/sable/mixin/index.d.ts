import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ClientSubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/top/leonx/irisveil/compat/sable/mixin" {
    export class $MixinSubLevelContainer {
        static irisveil$getClientContainer(arg0: $ClientLevel): $ClientSubLevelContainer;
    }
    export interface $MixinSubLevelContainer {
    }
}
