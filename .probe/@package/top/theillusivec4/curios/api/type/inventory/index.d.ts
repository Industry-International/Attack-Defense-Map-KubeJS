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
        getStackInSlot(arg0: number): $ItemStack;
        setPreviousStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getPreviousStackInSlot(arg0: number): $ItemStack;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
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
        getIdentifier(): string;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        clearModifiers(): void;
        getSyncTag(): $CompoundTag;
        getDropRule(): $ICurio$DropRule;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        getActiveStates(): $NonNullList<boolean>;
        getCosmeticStacks(): $IDynamicStackHandler;
        hasCosmetic(): boolean;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        getCachedModifiers(): $Set<$AttributeModifier>;
        applySyncTag(arg0: $CompoundTag_): void;
        updateActiveState(arg0: number): void;
        canToggleRendering(): boolean;
        isVisible(): boolean;
        getSlots(): number;
        addTransientModifier(arg0: $AttributeModifier_): void;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        clearCachedModifiers(): void;
        serializeNBT(): $CompoundTag;
        deserializeNBT(arg0: $CompoundTag_): void;
        removeModifier(arg0: $ResourceLocation_): void;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        getRenders(): $NonNullList<boolean>;
        get stacks(): $IDynamicStackHandler;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        get identifier(): string;
        get syncTag(): $CompoundTag;
        get dropRule(): $ICurio$DropRule;
        get sizeShift(): number;
        get activeStates(): $NonNullList<boolean>;
        get cosmeticStacks(): $IDynamicStackHandler;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get visible(): boolean;
        get slots(): number;
        get permanentModifiers(): $Set<$AttributeModifier>;
        get renders(): $NonNullList<boolean>;
    }
}
