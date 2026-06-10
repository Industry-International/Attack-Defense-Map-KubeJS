import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemColorsExtension } from "@package/net/caffeinemc/mods/sodium/client/model/color/interop";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ColorProviderRegistryImpl$ColorMapperHolder } from "@package/net/fabricmc/fabric/impl/client/rendering";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $Map } from "@package/java/util";
import { $ItemColorsAccessor } from "@package/com/github/argon4w/acceleratedrendering/features/items/mixins/accessors";

declare module "@package/net/minecraft/client/color/item" {
    export class $ItemColors implements $ItemColorsAccessor, $ColorProviderRegistryImpl$ColorMapperHolder<any, any>, $ItemColorsExtension {
        get(arg0: $ItemLike_): $ItemColor;
        /**
         * @deprecated
         */
        register(arg0: $ItemColor_, ...arg1: $ItemLike_[]): void;
        getColor(arg0: $ItemStack_, arg1: number): number;
        static createDefault(arg0: $BlockColors): $ItemColors;
        sodium$getColorProvider(arg0: $ItemStack_): $ItemColor;
        getItemColors(): $Map<$Item, $ItemColor>;
        constructor();
        get itemColors(): $Map<$Item, $ItemColor>;
    }
    export class $ItemColor {
    }
    export interface $ItemColor {
        getColor(arg0: $ItemStack_, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemColor}.
     */
    export type $ItemColor_ = ((arg0: $ItemStack, arg1: number) => number);
}
