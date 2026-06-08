import { $HolderSet } from "@package/net/minecraft/core";
import { $Enchantment, $Enchantment$EnchantmentDefinition } from "@package/net/minecraft/world/item/enchantment";
import { $DataComponentMap, $DataComponentMap$Builder, $DataComponentMap_, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $List_, $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/mixin/item" {
    export class $EnchantmentBuilderAccessor {
    }
    export interface $EnchantmentBuilderAccessor {
        getDefinition(): $Enchantment$EnchantmentDefinition;
        invokeGetEffectsList<E>(arg0: $DataComponentType_<$List_<E>>): $List<E>;
        getEffectMap(): $DataComponentMap$Builder;
        getExclusiveSet(): $HolderSet<$Enchantment>;
        get definition(): $Enchantment$EnchantmentDefinition;
        get effectMap(): $DataComponentMap$Builder;
        get exclusiveSet(): $HolderSet<$Enchantment>;
    }
    export class $ItemAccessor {
    }
    export interface $ItemAccessor {
        setComponents(arg0: $DataComponentMap_): void;
        set components(value: $DataComponentMap_);
    }
    /**
     * Values that may be interpreted as {@link $ItemAccessor}.
     */
    export type $ItemAccessor_ = ((arg0: $DataComponentMap) => void);
}
