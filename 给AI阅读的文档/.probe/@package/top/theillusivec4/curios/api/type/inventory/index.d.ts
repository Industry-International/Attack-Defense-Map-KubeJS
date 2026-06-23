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
        getStackInSlot(arg0: number): $ItemStack;
        getSlots(): number;
        shrink(arg0: number): void;
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
        getActiveStates(): $NonNullList<boolean>;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        getCosmeticStacks(): $IDynamicStackHandler;
        applySyncTag(arg0: $CompoundTag_): void;
        canToggleRendering(): boolean;
        hasCosmetic(): boolean;
        getCachedModifiers(): $Set<$AttributeModifier>;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        updateActiveState(arg0: number): void;
        getDropRule(): $ICurio$DropRule;
        getStacks(): $IDynamicStackHandler;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        /**
         * @deprecated
         */
        grow(arg0: number): void;
        getSlots(): number;
        getIdentifier(): string;
        getSyncTag(): $CompoundTag;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        clearCachedModifiers(): void;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        serializeNBT(): $CompoundTag;
        deserializeNBT(arg0: $CompoundTag_): void;
        addTransientModifier(arg0: $AttributeModifier_): void;
        isVisible(): boolean;
        removeModifier(arg0: $ResourceLocation_): void;
        getRenders(): $NonNullList<boolean>;
        clearModifiers(): void;
        get activeStates(): $NonNullList<boolean>;
        get sizeShift(): number;
        get cosmeticStacks(): $IDynamicStackHandler;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get dropRule(): $ICurio$DropRule;
        get stacks(): $IDynamicStackHandler;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        get slots(): number;
        get identifier(): string;
        get syncTag(): $CompoundTag;
        get permanentModifiers(): $Set<$AttributeModifier>;
        get visible(): boolean;
        get renders(): $NonNullList<boolean>;
    }
}
