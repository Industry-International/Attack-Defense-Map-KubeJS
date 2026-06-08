import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Collection, $Set } from "@package/java/util";

declare module "@package/top/theillusivec4/curios/api/type/inventory" {
    export class $IDynamicStackHandler {
    }
    export interface $IDynamicStackHandler extends $IItemHandlerModifiable {
        grow(arg0: number): void;
        shrink(arg0: number): void;
        getSlots(): number;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getStackInSlot(arg0: number): $ItemStack;
        getPreviousStackInSlot(arg0: number): $ItemStack;
        setPreviousStackInSlot(arg0: number, arg1: $ItemStack_): void;
        get slots(): number;
    }
    export class $ICurioStacksHandler {
    }
    export interface $ICurioStacksHandler {
        getStacks(): $IDynamicStackHandler;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        /**
         * @deprecated
         */
        grow(arg0: number): void;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        getIdentifier(): string;
        getSlots(): number;
        clearModifiers(): void;
        deserializeNBT(arg0: $CompoundTag_): void;
        serializeNBT(): $CompoundTag;
        removeModifier(arg0: $ResourceLocation_): void;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        isVisible(): boolean;
        getRenders(): $NonNullList<boolean>;
        getSyncTag(): $CompoundTag;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        clearCachedModifiers(): void;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        addTransientModifier(arg0: $AttributeModifier_): void;
        getCachedModifiers(): $Set<$AttributeModifier>;
        canToggleRendering(): boolean;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        getCosmeticStacks(): $IDynamicStackHandler;
        updateActiveState(arg0: number): void;
        applySyncTag(arg0: $CompoundTag_): void;
        getDropRule(): $ICurio$DropRule;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        getActiveStates(): $NonNullList<boolean>;
        hasCosmetic(): boolean;
        get stacks(): $IDynamicStackHandler;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        get identifier(): string;
        get slots(): number;
        get visible(): boolean;
        get renders(): $NonNullList<boolean>;
        get syncTag(): $CompoundTag;
        get permanentModifiers(): $Set<$AttributeModifier>;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get sizeShift(): number;
        get cosmeticStacks(): $IDynamicStackHandler;
        get dropRule(): $ICurio$DropRule;
        get activeStates(): $NonNullList<boolean>;
    }
}
