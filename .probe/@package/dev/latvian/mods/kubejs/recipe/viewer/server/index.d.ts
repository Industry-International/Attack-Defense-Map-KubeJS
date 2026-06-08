import { $Event } from "@package/net/neoforged/bus/api";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $Map_, $Set_, $List_ } from "@package/java/util";
import { $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $RemoveRecipesKubeEvent, $GroupEntriesKubeEvent, $RemoveEntriesKubeEvent, $AddEntriesKubeEvent, $AddInformationKubeEvent, $RemoveCategoriesKubeEvent, $RegisterSubtypesKubeEvent, $SubtypeInterpreter_ } from "@package/dev/latvian/mods/kubejs/recipe/viewer";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Record, $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/recipe/viewer/server" {
    export class $ServerRemoveItemEntriesKubeEvent implements $RemoveEntriesKubeEvent {
        remove(filter: $Object): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(removedEntries: $List_<$Ingredient_>);
    }
    export class $FluidData$DataComponentSubtypes extends $Record {
        filter(): $FluidIngredient;
        components(): $List<$DataComponentType<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidData$DataComponentSubtypes>;
        constructor(filter: $FluidIngredient_, components: $List_<$DataComponentType_<never>>);
    }
    export class $ServerGroupFluidEntriesKubeEvent implements $GroupEntriesKubeEvent {
        group(filter: $Object, groupId: $ResourceLocation_, description: $Component_): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(list: $List_<$FluidData$Group_>);
    }
    export class $ItemData extends $Record {
        isEmpty(): boolean;
        static collect(): $ItemData;
        info(): $List<$ItemData$Info>;
        completelyRemovedEntries(): $List<$Ingredient>;
        dataComponentSubtypes(): $List<$ItemData$DataComponentSubtypes>;
        addedEntries(): $List<$ItemStack>;
        removedEntries(): $List<$Ingredient>;
        groupedEntries(): $List<$ItemData$Group>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemData>;
        constructor(addedEntries: $List_<$ItemStack_>, removedEntries: $List_<$Ingredient_>, completelyRemovedEntries: $List_<$Ingredient_>, groupedEntries: $List_<$ItemData$Group_>, info: $List_<$ItemData$Info_>, dataComponentSubtypes: $List_<$ItemData$DataComponentSubtypes_>);
        get empty(): boolean;
    }
    export class $ServerRemoveRecipesKubeEvent implements $RemoveRecipesKubeEvent {
        remove(recipesToRemove: $ResourceLocation_[]): void;
        removeFromCategory(category: $ResourceLocation_, recipesToRemove: $ResourceLocation_[]): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(global: $Set_<$ResourceLocation_>, categoryData: $Map_<$ResourceLocation_, $CategoryData_>);
    }
    export class $RemoteRecipeViewerDataUpdatedEvent extends $Event {
        data: $RecipeViewerData;
        constructor(data: $RecipeViewerData_);
    }
    export class $CategoryData extends $Record {
        lock(): $CategoryData;
        category(): $ResourceLocation;
        removedRecipes(): $List<$ResourceLocation>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CategoryData>;
        constructor(category: $ResourceLocation_);
        constructor(category: $ResourceLocation_, removedRecipes: $List_<$ResourceLocation_>);
    }
    export class $ItemData$Info extends $Record {
        filter(): $Ingredient;
        info(): $List<$Component>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemData$Info>;
        constructor(filter: $Ingredient_, info: $List_<$Component_>);
    }
    export class $RecipeViewerData extends $Record {
        isEmpty(): boolean;
        static collect(): $RecipeViewerData;
        itemData(): $ItemData;
        removedCategories(): $List<$ResourceLocation>;
        fluidData(): $FluidData;
        categoryData(): $List<$CategoryData>;
        removedGlobalRecipes(): $List<$ResourceLocation>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RecipeViewerData>;
        constructor(removedCategories: $List_<$ResourceLocation_>, removedGlobalRecipes: $List_<$ResourceLocation_>, categoryData: $List_<$CategoryData_>, itemData: $ItemData_, fluidData: $FluidData_);
        get empty(): boolean;
    }
    export class $FluidData$Info extends $Record {
        filter(): $FluidIngredient;
        info(): $List<$Component>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidData$Info>;
        constructor(filter: $FluidIngredient_, info: $List_<$Component_>);
    }
    export class $FluidData extends $Record {
        isEmpty(): boolean;
        static collect(): $FluidData;
        info(): $List<$FluidData$Info>;
        completelyRemovedEntries(): $List<$FluidIngredient>;
        dataComponentSubtypes(): $List<$FluidData$DataComponentSubtypes>;
        addedEntries(): $List<$FluidStack>;
        removedEntries(): $List<$FluidIngredient>;
        groupedEntries(): $List<$FluidData$Group>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidData>;
        constructor(addedEntries: $List_<$FluidStack_>, removedEntries: $List_<$FluidIngredient_>, completelyRemovedEntries: $List_<$FluidIngredient_>, groupedEntries: $List_<$FluidData$Group_>, info: $List_<$FluidData$Info_>, dataComponentSubtypes: $List_<$FluidData$DataComponentSubtypes_>);
        get empty(): boolean;
    }
    export class $ItemData$DataComponentSubtypes extends $Record {
        filter(): $Ingredient;
        components(): $List<$DataComponentType<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemData$DataComponentSubtypes>;
        constructor(filter: $Ingredient_, components: $List_<$DataComponentType_<never>>);
    }
    export class $ServerRemoveFluidEntriesKubeEvent implements $RemoveEntriesKubeEvent {
        remove(filter: $Object): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(removedEntries: $List_<$FluidIngredient_>);
    }
    export class $ServerAddItemInformationKubeEvent implements $AddInformationKubeEvent {
        add(filter: $Object, info: $List_<$Component_>): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(list: $List_<$ItemData$Info_>);
    }
    export class $ServerAddFluidEntriesKubeEvent implements $AddEntriesKubeEvent {
        add(items: $Object[]): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(list: $List_<$FluidStack_>);
    }
    export class $ServerAddFluidInformationKubeEvent implements $AddInformationKubeEvent {
        add(filter: $Object, info: $List_<$Component_>): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(list: $List_<$FluidData$Info_>);
    }
    export class $ServerGroupItemEntriesKubeEvent implements $GroupEntriesKubeEvent {
        group(filter: $Object, groupId: $ResourceLocation_, description: $Component_): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(list: $List_<$ItemData$Group_>);
    }
    export class $ServerRemoveCategoriesKubeEvent implements $RemoveCategoriesKubeEvent {
        remove(categories: $ResourceLocation_[]): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(categories: $Set_<$ResourceLocation_>);
    }
    export class $ServerAddItemEntriesKubeEvent implements $AddEntriesKubeEvent {
        add(items: $Object[]): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(list: $List_<$ItemStack_>);
    }
    export class $ServerRegisterFluidSubtypesKubeEvent implements $RegisterSubtypesKubeEvent {
        register(filter: $Object, interpreter: $SubtypeInterpreter_): void;
        useComponents(filter: $Object, components: $List_<$DataComponentType_<never>>): void;
        useComponents(filter: $Object): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(list: $List_<$FluidData$DataComponentSubtypes_>);
    }
    export class $FluidData$Group extends $Record {
        filter(): $FluidIngredient;
        description(): $Component;
        groupId(): $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidData$Group>;
        constructor(filter: $FluidIngredient_, groupId: $ResourceLocation_, description: $Component_);
    }
    export class $ServerRegisterItemSubtypesKubeEvent implements $RegisterSubtypesKubeEvent {
        register(filter: $Object, interpreter: $SubtypeInterpreter_): void;
        useComponents(filter: $Object, components: $List_<$DataComponentType_<never>>): void;
        useComponents(filter: $Object): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(list: $List_<$ItemData$DataComponentSubtypes_>);
    }
    export class $ItemData$Group extends $Record {
        filter(): $Ingredient;
        description(): $Component;
        groupId(): $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemData$Group>;
        constructor(filter: $Ingredient_, groupId: $ResourceLocation_, description: $Component_);
    }
}
