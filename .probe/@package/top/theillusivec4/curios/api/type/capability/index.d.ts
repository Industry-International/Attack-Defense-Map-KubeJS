import { $Logger } from "@package/org/slf4j";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $ListTag, $ListTag_, $Tag } from "@package/net/minecraft/nbt";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Multimap } from "@package/com/google/common/collect";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $Map_, $Map, $Set } from "@package/java/util";
import { $Predicate_ } from "@package/java/util/function";
import { $SlotResult } from "@package/top/theillusivec4/curios/api";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $ICurioStacksHandler } from "@package/top/theillusivec4/curios/api/type/inventory";

declare module "@package/top/theillusivec4/curios/api/type/capability" {
    export class $ICurio$DropRule extends $Enum<$ICurio$DropRule> {
        static values(): $ICurio$DropRule[];
        static valueOf(arg0: string): $ICurio$DropRule;
        static ALWAYS_KEEP: $ICurio$DropRule;
        static DESTROY: $ICurio$DropRule;
        static ALWAYS_DROP: $ICurio$DropRule;
        static DEFAULT: $ICurio$DropRule;
    }
    /**
     * Values that may be interpreted as {@link $ICurio$DropRule}.
     */
    export type $ICurio$DropRule_ = "default" | "always_drop" | "always_keep" | "destroy";
    export class $ICuriosItemHandler {
        static LOGGER: $Logger;
    }
    export interface $ICuriosItemHandler {
        reset(): void;
        getModifiers(): $Multimap<string, $AttributeModifier>;
        getSlots(): number;
        getCurios(): $Map<string, $ICurioStacksHandler>;
        getFortuneLevel(arg0: $LootContext): number;
        getEquippedCurios(): $IItemHandlerModifiable;
        findFirstCurio(arg0: $Predicate_<$ItemStack>): ($SlotResult) | undefined;
        findFirstCurio(arg0: $Item_): ($SlotResult) | undefined;
        findFirstCurio(arg0: $Predicate_<$ItemStack>, arg1: string): ($SlotResult) | undefined;
        findFirstCurio(arg0: $Predicate_<$ItemStack>, arg1: boolean, arg2: string): ($SlotResult) | undefined;
        getLootingLevel(arg0: $LootContext): number;
        /**
         * @deprecated
         */
        growSlotType(arg0: string, arg1: number): void;
        /**
         * @deprecated
         */
        getFortuneBonus(): number;
        /**
         * @deprecated
         */
        processSlots(): void;
        setSlotActive(arg0: string, arg1: number, arg2: boolean): void;
        saveInventory(arg0: boolean): $ListTag;
        /**
         * @deprecated
         */
        lockSlotType(arg0: string): void;
        getStacksHandler(arg0: string): ($ICurioStacksHandler) | undefined;
        loseInvalidStack(arg0: $ItemStack_): void;
        getVisibleSlots(): number;
        clearSlotModifiers(): void;
        /**
         * @deprecated
         */
        getLockedSlots(): $Set<string>;
        setEquippedCurio(arg0: string, arg1: number, arg2: $ItemStack_): void;
        isSlotActive(arg0: string, arg1: number): boolean;
        setSlotsActive(arg0: string, arg1: boolean): void;
        removeSlotModifier(arg0: string, arg1: $ResourceLocation_): void;
        /**
         * @deprecated
         */
        unlockSlotType(arg0: string, arg1: number, arg2: boolean, arg3: boolean): void;
        /**
         * @deprecated
         */
        shrinkSlotType(arg0: string, arg1: number): void;
        loadInventory(arg0: $ListTag_): void;
        getUpdatingInventories(): $Set<$ICurioStacksHandler>;
        addPermanentSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        addTransientSlotModifier(arg0: string, arg1: $ResourceLocation_, arg2: number, arg3: $AttributeModifier$Operation_): void;
        removeSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        addTransientSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        addPermanentSlotModifier(arg0: string, arg1: $ResourceLocation_, arg2: number, arg3: $AttributeModifier$Operation_): void;
        handleInvalidStacks(): void;
        clearCachedSlotModifiers(): void;
        findCurios(arg0: boolean, ...arg1: string[]): $List<$SlotResult>;
        findCurios(arg0: $Predicate_<$ItemStack>, arg1: boolean, arg2: string): $List<$SlotResult>;
        findCurios(...arg0: string[]): $List<$SlotResult>;
        findCurios(arg0: $Item_): $List<$SlotResult>;
        findCurios(arg0: $Predicate_<$ItemStack>): $List<$SlotResult>;
        readTag(arg0: $Tag_): void;
        findCurio(arg0: string, arg1: number, arg2: boolean): ($SlotResult) | undefined;
        findCurio(arg0: string, arg1: number): ($SlotResult) | undefined;
        isEquipped(arg0: $Predicate_<$ItemStack>): boolean;
        isEquipped(arg0: $Item_): boolean;
        setCurios(arg0: $Map_<string, $ICurioStacksHandler>): void;
        writeTag(): $Tag;
        getWearer(): $LivingEntity;
        get modifiers(): $Multimap<string, $AttributeModifier>;
        get slots(): number;
        get equippedCurios(): $IItemHandlerModifiable;
        get fortuneBonus(): number;
        get visibleSlots(): number;
        get lockedSlots(): $Set<string>;
        get updatingInventories(): $Set<$ICurioStacksHandler>;
        get wearer(): $LivingEntity;
    }
}
