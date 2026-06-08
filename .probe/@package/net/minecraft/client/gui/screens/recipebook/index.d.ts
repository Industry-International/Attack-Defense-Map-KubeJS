import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_, $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget, $WidgetTooltipHolder, $EditBox, $StateSwitchingButton, $WidgetSprites, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $Minecraft, $ClientRecipeBook, $RecipeBookCategories, $RecipeBookCategories_ } from "@package/net/minecraft/client";
import { $Iterator, $List, $Set, $List_ } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot, $RecipeBookMenu } from "@package/net/minecraft/world/inventory";
import { $GuiGraphics, $ComponentPath } from "@package/net/minecraft/client/gui";
import { $PlaceRecipe } from "@package/net/minecraft/recipebook";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $RecipeBook } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/client/gui/screens/recipebook" {
    export class $OverlayRecipeComponent$OverlayRecipeButton extends $AbstractWidget implements $PlaceRecipe<$Ingredient> {
        placeRecipe(arg0: number, arg1: number, arg2: number, arg3: $RecipeHolder_<never>, arg4: $Iterator<$Ingredient_>, arg5: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
    }
    export class $RecipeBookComponent implements $PlaceRecipe<$Ingredient>, $Renderable, $GuiEventListener, $NarratableEntry, $RecipeShownListener {
        init(arg0: number, arg1: number, arg2: $Minecraft, arg3: boolean, arg4: $RecipeBookMenu<never, never>): void;
        tick(): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateScreenPosition(arg0: number, arg1: number): number;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        setFocused(arg0: boolean): void;
        charTyped(arg0: string, arg1: number): boolean;
        setupGhostRecipe(arg0: $RecipeHolder_<never>, arg1: $List_<$Slot>): void;
        isFocused(): boolean;
        renderGhostRecipe(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
        recipesUpdated(): void;
        hasClickedOutside(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        toggleVisibility(): void;
        slotClicked(arg0: $Slot): void;
        isVisible(): boolean;
        setVisible(arg0: boolean): void;
        initVisuals(): void;
        recipesShown(arg0: $List_<$RecipeHolder_<never>>): void;
        addItemToSlot(arg0: $Ingredient_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        sendUpdateSettings(): void;
        renderTooltip(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        updateNarration(arg0: $NarrationElementOutput): void;
        initFilterButtonTextures(): void;
        getRecipeFilterName(): $Component;
        placeRecipe(arg0: number, arg1: number, arg2: number, arg3: $RecipeHolder_<never>, arg4: $Iterator<$Ingredient_>, arg5: number): void;
        getCurrentFocusPath(): $ComponentPath;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getRectangle(): $ScreenRectangle;
        isActive(): boolean;
        getTabOrderGroup(): number;
        minecraft: $Minecraft;
        xOffset: number;
        menu: $RecipeBookMenu<never, never>;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        tabButtons: $List<$RecipeBookTabButton>;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        filterButton: $StateSwitchingButton;
        height: number;
        searchBox: $EditBox;
        constructor();
        get recipeFilterName(): $Component;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get active(): boolean;
        get tabOrderGroup(): number;
    }
    export class $SmeltingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        minecraft: $Minecraft;
        xOffset: number;
        menu: $RecipeBookMenu<never, never>;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        tabButtons: $List<$RecipeBookTabButton>;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        filterButton: $StateSwitchingButton;
        height: number;
        searchBox: $EditBox;
        constructor();
    }
    export class $AbstractFurnaceRecipeBookComponent extends $RecipeBookComponent {
        getFuelItems(): $Set<$Item>;
        minecraft: $Minecraft;
        xOffset: number;
        menu: $RecipeBookMenu<never, never>;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        tabButtons: $List<$RecipeBookTabButton>;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        filterButton: $StateSwitchingButton;
        height: number;
        searchBox: $EditBox;
        constructor();
        get fuelItems(): $Set<$Item>;
    }
    export class $SmokingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        minecraft: $Minecraft;
        xOffset: number;
        menu: $RecipeBookMenu<never, never>;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        tabButtons: $List<$RecipeBookTabButton>;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        filterButton: $StateSwitchingButton;
        height: number;
        searchBox: $EditBox;
        constructor();
    }
    export class $RecipeBookTabButton extends $StateSwitchingButton {
        getCategory(): $RecipeBookCategories;
        startAnimation(arg0: $Minecraft): void;
        updateVisibility(arg0: $ClientRecipeBook): boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        sprites: $WidgetSprites;
        height: number;
        constructor(arg0: $RecipeBookCategories_);
        get category(): $RecipeBookCategories;
    }
    export class $GhostRecipe {
        size(): number;
        get(arg0: number): $GhostRecipe$GhostIngredient;
        clear(): void;
        setRecipe(arg0: $RecipeHolder_<never>): void;
        render(arg0: $GuiGraphics, arg1: $Minecraft, arg2: number, arg3: number, arg4: boolean, arg5: number): void;
        addIngredient(arg0: $Ingredient_, arg1: number, arg2: number): void;
        getRecipe(): $RecipeHolder<never>;
        time: number;
        constructor();
    }
    export class $OverlayRecipeComponent$OverlayRecipeButton$Pos {
    }
    export class $OverlayRecipeComponent$OverlaySmeltingRecipeButton extends $OverlayRecipeComponent$OverlayRecipeButton {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        height: number;
    }
    export class $RecipeCollection {
        hasSingleResultItem(): boolean;
        getDisplayRecipes(arg0: boolean): $List<$RecipeHolder<never>>;
        updateKnownRecipes(arg0: $RecipeBook): void;
        isCraftable(arg0: $RecipeHolder_<never>): boolean;
        hasKnownRecipes(): boolean;
        hasCraftable(): boolean;
        hasFitting(): boolean;
        registryAccess(): $RegistryAccess;
        getRecipes(): $List<$RecipeHolder<never>>;
        getRecipes(arg0: boolean): $List<$RecipeHolder<never>>;
        canCraft(arg0: $StackedContents, arg1: number, arg2: number, arg3: $RecipeBook): void;
        constructor(arg0: $RegistryAccess, arg1: $List_<$RecipeHolder_<never>>);
    }
    export class $RecipeUpdateListener {
    }
    export interface $RecipeUpdateListener {
        getRecipeBookComponent(): $RecipeBookComponent;
        recipesUpdated(): void;
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $GhostRecipe$GhostIngredient {
        getY(): number;
        getX(): number;
        getItem(): $ItemStack;
        this$0: $GhostRecipe;
        constructor(arg0: $GhostRecipe, arg1: $Ingredient_, arg2: number, arg3: number);
        get y(): number;
        get x(): number;
        get item(): $ItemStack;
    }
    export class $RecipeBookPage {
        init(arg0: $Minecraft, arg1: number, arg2: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        addListener(arg0: $RecipeBookComponent): void;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        setInvisible(): void;
        listButtons(arg0: $Consumer_<$AbstractWidget>): void;
        updateCollections(arg0: $List_<$RecipeCollection>, arg1: boolean): void;
        recipesShown(arg0: $List_<$RecipeHolder_<never>>): void;
        renderTooltip(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getLastClickedRecipeCollection(): $RecipeCollection;
        getMinecraft(): $Minecraft;
        getLastClickedRecipe(): $RecipeHolder<never>;
        getRecipeBook(): $RecipeBook;
        static ITEMS_PER_PAGE: number;
        constructor();
        get lastClickedRecipeCollection(): $RecipeCollection;
        get minecraft(): $Minecraft;
        get lastClickedRecipe(): $RecipeHolder<never>;
        get recipeBook(): $RecipeBook;
    }
    export class $BlastingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        minecraft: $Minecraft;
        xOffset: number;
        menu: $RecipeBookMenu<never, never>;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        tabButtons: $List<$RecipeBookTabButton>;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        filterButton: $StateSwitchingButton;
        height: number;
        searchBox: $EditBox;
        constructor();
    }
    export class $OverlayRecipeComponent implements $Renderable, $GuiEventListener {
        init(arg0: $Minecraft, arg1: $RecipeCollection, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        isVisible(): boolean;
        setVisible(arg0: boolean): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        getLastRecipeClicked(): $RecipeHolder<never>;
        getRecipeCollection(): $RecipeCollection;
        getCurrentFocusPath(): $ComponentPath;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        charTyped(arg0: string, arg1: number): boolean;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getRectangle(): $ScreenRectangle;
        getTabOrderGroup(): number;
        static CRAFTING_OVERLAY_HIGHLIGHTED_SPRITE: $ResourceLocation;
        isFurnaceMenu: boolean;
        static FURNACE_OVERLAY_DISABLED_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static BUTTON_SIZE: number;
        static CRAFTING_OVERLAY_SPRITE: $ResourceLocation;
        time: number;
        static FURNACE_OVERLAY_SPRITE: $ResourceLocation;
        static FURNACE_OVERLAY_DISABLED_SPRITE: $ResourceLocation;
        static CRAFTING_OVERLAY_DISABLED_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static CRAFTING_OVERLAY_DISABLED_SPRITE: $ResourceLocation;
        static FURNACE_OVERLAY_HIGHLIGHTED_SPRITE: $ResourceLocation;
        constructor();
        get lastRecipeClicked(): $RecipeHolder<never>;
        get recipeCollection(): $RecipeCollection;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
    export class $RecipeShownListener {
    }
    export interface $RecipeShownListener {
        recipesShown(arg0: $List_<$RecipeHolder_<never>>): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeShownListener}.
     */
    export type $RecipeShownListener_ = ((arg0: $List<$RecipeHolder<never>>) => void);
    export class $RecipeButton extends $AbstractWidget {
        isOnlyOption(): boolean;
        init(arg0: $RecipeCollection, arg1: $RecipeBookPage): void;
        getTooltipText(): $List<$Component>;
        getCollection(): $RecipeCollection;
        getRecipe(): $RecipeHolder<never>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TICKS_TO_SWAP: number;
        height: number;
        constructor();
        get onlyOption(): boolean;
        get tooltipText(): $List<$Component>;
        get collection(): $RecipeCollection;
        get recipe(): $RecipeHolder<never>;
    }
}
