import { $Entity } from "@package/net/minecraft/world/entity";
import { $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";

declare module "@package/cn/chloeprime/commons_impl/mixin/client" {
    export class $ClientLevelAccessor {
    }
    export interface $ClientLevelAccessor {
        callGetEntities(): $LevelEntityGetter<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelAccessor}.
     */
    export type $ClientLevelAccessor_ = (() => $LevelEntityGetter<$Entity>);
}
