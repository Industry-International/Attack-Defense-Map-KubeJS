import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Supplier_ } from "@package/java/util/function";
import { $Holder_ } from "@package/net/minecraft/core";
import { $IItemStackExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ItemStack, $Item$Properties, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $EquipmentSlot, $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Runnable_, $Runnable, $Enum } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/api/item/v1" {
    export class $EnchantingContext extends $Enum<$EnchantingContext> {
        static values(): $EnchantingContext[];
        static valueOf(arg0: string): $EnchantingContext;
        static PRIMARY: $EnchantingContext;
        static ACCEPTABLE: $EnchantingContext;
    }
    /**
     * Values that may be interpreted as {@link $EnchantingContext}.
     */
    export type $EnchantingContext_ = "acceptable" | "primary";
    export class $FabricItem {
    }
    export interface $FabricItem {
        getCreatorNamespace(arg0: $ItemStack_): string;
        allowComponentsUpdateAnimation(arg0: $Player, arg1: $InteractionHand_, arg2: $ItemStack_, arg3: $ItemStack_): boolean;
        allowContinuingBlockBreaking(arg0: $Player, arg1: $ItemStack_, arg2: $ItemStack_): boolean;
        getRecipeRemainder(arg0: $ItemStack_): $ItemStack;
        canBeEnchantedWith(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>, arg2: $EnchantingContext_): boolean;
    }
    export class $EquipmentSlotProvider {
    }
    export interface $EquipmentSlotProvider {
        getPreferredEquipmentSlot(arg0: $LivingEntity, arg1: $ItemStack_): $EquipmentSlot;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlotProvider}.
     */
    export type $EquipmentSlotProvider_ = ((arg0: $LivingEntity, arg1: $ItemStack) => $EquipmentSlot_);
    export class $CustomDamageHandler {
    }
    export interface $CustomDamageHandler {
        damage(arg0: $ItemStack_, arg1: number, arg2: $LivingEntity, arg3: $EquipmentSlot_, arg4: $Runnable_): number;
    }
    /**
     * Values that may be interpreted as {@link $CustomDamageHandler}.
     */
    export type $CustomDamageHandler_ = ((arg0: $ItemStack, arg1: number, arg2: $LivingEntity, arg3: $EquipmentSlot, arg4: $Runnable) => number);
    export class $FabricComponentMapBuilder {
    }
    export interface $FabricComponentMapBuilder {
        getOrCreate<T>(arg0: $DataComponentType_<T>, arg1: $Supplier_<T>): T;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        getOrEmpty<T>(arg0: $DataComponentType_<$List_<T>>): $List<T>;
    }
    export class $FabricItemStack {
    }
    export interface $FabricItemStack extends $IItemStackExtension {
        getCreatorNamespace(): string;
        getRecipeRemainder(): $ItemStack;
        canBeEnchantedWith(arg0: $Holder_<$Enchantment>, arg1: $EnchantingContext_): boolean;
        get creatorNamespace(): string;
        get recipeRemainder(): $ItemStack;
    }
    export class $FabricItem$Settings {
    }
    export interface $FabricItem$Settings {
        equipmentSlot(arg0: $EquipmentSlotProvider_): $Item$Properties;
        customDamage(arg0: $CustomDamageHandler_): $Item$Properties;
    }
}
