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
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        shrink(arg0: number): void;
        getSlots(): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getStackInSlot(arg0: number): $ItemStack;
        setPreviousStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getPreviousStackInSlot(arg0: number): $ItemStack;
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
        getSyncTag(): $CompoundTag;
        isVisible(): boolean;
        getIdentifier(): string;
        deserializeNBT(arg0: $CompoundTag_): void;
        serializeNBT(): $CompoundTag;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        getSlots(): number;
        clearModifiers(): void;
        addTransientModifier(arg0: $AttributeModifier_): void;
        getRenders(): $NonNullList<boolean>;
        removeModifier(arg0: $ResourceLocation_): void;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        canToggleRendering(): boolean;
        getDropRule(): $ICurio$DropRule;
        hasCosmetic(): boolean;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        getCachedModifiers(): $Set<$AttributeModifier>;
        getActiveStates(): $NonNullList<boolean>;
        getCosmeticStacks(): $IDynamicStackHandler;
        updateActiveState(arg0: number): void;
        applySyncTag(arg0: $CompoundTag_): void;
        clearCachedModifiers(): void;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        get stacks(): $IDynamicStackHandler;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        get syncTag(): $CompoundTag;
        get visible(): boolean;
        get identifier(): string;
        get slots(): number;
        get renders(): $NonNullList<boolean>;
        get dropRule(): $ICurio$DropRule;
        get sizeShift(): number;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get activeStates(): $NonNullList<boolean>;
        get cosmeticStacks(): $IDynamicStackHandler;
        get permanentModifiers(): $Set<$AttributeModifier>;
    }
}
