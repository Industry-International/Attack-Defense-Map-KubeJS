import { $CraftingInput } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $SlotFilter, $Lazy, $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List, $Map, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/recipe/ingredientaction" {
    export class $DamageAction extends $Record implements $IngredientAction {
        transform(old: $ItemStack_, index: number, input: $CraftingInput): $ItemStack;
        getType(): $IngredientActionType<never>;
        damage(): number;
        static TYPE: $IngredientActionType<$DamageAction>;
        constructor(damage: number);
        get type(): $IngredientActionType<never>;
    }
    export class $CustomIngredientAction extends $Record implements $IngredientAction {
        transform(old: $ItemStack_, index: number, input: $CraftingInput): $ItemStack;
        id(): string;
        getType(): $IngredientActionType<never>;
        static TYPE: $IngredientActionType<$CustomIngredientAction>;
        constructor(id: string);
        get type(): $IngredientActionType<never>;
    }
    export class $ReplaceAction extends $Record implements $IngredientAction {
        transform(old: $ItemStack_, index: number, input: $CraftingInput): $ItemStack;
        getType(): $IngredientActionType<never>;
        item(): $ItemStack;
        static TYPE: $IngredientActionType<$ReplaceAction>;
        constructor(item: $ItemStack_);
        get type(): $IngredientActionType<never>;
    }
    export class $IngredientActionType<T extends $IngredientAction> extends $Record {
        id(): $ResourceLocation;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codec(): $MapCodec<T>;
        static TYPES: $Lazy<$Map<$ResourceLocation, $IngredientActionType<never>>>;
        static CODEC: $Codec<$IngredientActionType<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IngredientActionType<never>>;
        constructor(id: $ResourceLocation_, codec: $MapCodec_<T>);
        constructor(id: $ResourceLocation_, codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    export class $IngredientAction {
        static getRemaining(input: $CraftingInput, index: number, ingredientActions: $List_<$IngredientActionHolder_>): $ItemStack;
        static CODEC: $Codec<$IngredientAction>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IngredientAction>;
    }
    export interface $IngredientAction {
        transform(old: $ItemStack_, index: number, input: $CraftingInput): $ItemStack;
        getType(): $IngredientActionType<never>;
        get type(): $IngredientActionType<never>;
    }
    export class $IngredientActionHolder extends $Record {
        filter(): $SlotFilter;
        action(): $IngredientAction;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$IngredientActionHolder>>;
        static CODEC: $Codec<$IngredientActionHolder>;
        static LIST_CODEC: $Codec<$List<$IngredientActionHolder>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IngredientActionHolder>;
        constructor(action: $IngredientAction, filter: $SlotFilter_);
    }
    export class $KeepAction implements $IngredientAction {
        transform(old: $ItemStack_, index: number, input: $CraftingInput): $ItemStack;
        getType(): $IngredientActionType<never>;
        static INSTANCE: $KeepAction;
        static TYPE: $IngredientActionType<$KeepAction>;
        constructor();
        get type(): $IngredientActionType<never>;
    }
    export class $ConsumeAction implements $IngredientAction {
        transform(old: $ItemStack_, index: number, input: $CraftingInput): $ItemStack;
        getType(): $IngredientActionType<never>;
        static INSTANCE: $ConsumeAction;
        static TYPE: $IngredientActionType<$ConsumeAction>;
        constructor();
        get type(): $IngredientActionType<never>;
    }
    export class $IngredientActionTypeRegistry {
    }
    export interface $IngredientActionTypeRegistry {
        register(type: $IngredientActionType_<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $IngredientActionTypeRegistry}.
     */
    export type $IngredientActionTypeRegistry_ = ((type: $IngredientActionType<never>) => void);
}
