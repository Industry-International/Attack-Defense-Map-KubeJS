import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $BlockColor, $BlockColor_ } from "@package/net/minecraft/client/color/block";
import { $ItemColor, $ItemColor_ } from "@package/net/minecraft/client/color/item";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/github/argon4w/acceleratedrendering/features/items/mixins/accessors" {
    export class $BlockColorsAccessor {
    }
    export interface $BlockColorsAccessor {
        getBlockColors(): $Map<$Block, $BlockColor>;
        get blockColors(): $Map<$Block, $BlockColor>;
    }
    /**
     * Values that may be interpreted as {@link $BlockColorsAccessor}.
     */
    export type $BlockColorsAccessor_ = (() => $Map_<$Block_, $BlockColor_>);
    export class $ItemColorsAccessor {
    }
    export interface $ItemColorsAccessor {
        getItemColors(): $Map<$Item, $ItemColor>;
        get itemColors(): $Map<$Item, $ItemColor>;
    }
    /**
     * Values that may be interpreted as {@link $ItemColorsAccessor}.
     */
    export type $ItemColorsAccessor_ = (() => $Map_<$Item_, $ItemColor_>);
}
