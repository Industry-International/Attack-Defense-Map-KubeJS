import { $IPlaceable, $VerticalAlignment_, $HorizontalAlignment_ } from "@package/mezz/jei/api/gui/placement";
import { $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $FormattedText } from "@package/net/minecraft/network/chat";
import { $RecipeSlotUnderMouse, $IJeiInputHandler, $IJeiGuiEventListener_, $IJeiInputHandler_ } from "@package/mezz/jei/api/gui/inputs";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $ScreenPosition_, $ScreenRectangle, $ScreenPosition } from "@package/net/minecraft/client/gui/navigation";
import { $IRecipeSlotDrawablesView, $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $List, $List_ } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/mezz/jei/api/gui/widgets" {
    export class $IScrollBoxWidget {
    }
    export interface $IScrollBoxWidget extends $IRecipeWidget, $IJeiInputHandler {
        getContentAreaWidth(): number;
        getContentAreaHeight(): number;
        setContents(arg0: $List_<$FormattedText>): $IScrollBoxWidget;
        setContents(arg0: $IDrawable): $IScrollBoxWidget;
        get contentAreaWidth(): number;
        get contentAreaHeight(): number;
    }
    /**
     * @deprecated
     */
    export class $ISlottedWidgetFactory<R> {
    }
    export interface $ISlottedWidgetFactory<R> {
        /**
         * @deprecated
         */
        createWidgetForSlots(arg0: $IRecipeExtrasBuilder, arg1: R, arg2: $List_<$IRecipeSlotDrawable>): void;
    }
    /**
     * Values that may be interpreted as {@link $ISlottedWidgetFactory}.
     */
    export type $ISlottedWidgetFactory_<R> = ((arg0: $IRecipeExtrasBuilder, arg1: R, arg2: $List<$IRecipeSlotDrawable>) => void);
    export class $IScrollGridWidget {
    }
    export interface $IScrollGridWidget extends $ISlottedRecipeWidget, $IPlaceable<$IScrollGridWidget> {
        getScreenRectangle(): $ScreenRectangle;
        get screenRectangle(): $ScreenRectangle;
    }
    export class $IRecipeExtrasBuilder {
    }
    export interface $IRecipeExtrasBuilder {
        addScrollBoxWidget(arg0: number, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        addRecipeArrow(): $IPlaceable<never>;
        /**
         * @deprecated
         */
        addRecipeArrow(arg0: number, arg1: number): void;
        getRecipeSlots(): $IRecipeSlotDrawablesView;
        addDrawable(arg0: $IDrawable): $IPlaceable<never>;
        addDrawable(arg0: $IDrawable, arg1: number, arg2: number): void;
        addWidget(arg0: $IRecipeWidget_): void;
        addText(arg0: $List_<$FormattedText>, arg1: number, arg2: number): $ITextWidget;
        addText(arg0: $FormattedText, arg1: number, arg2: number): $ITextWidget;
        /**
         * @deprecated
         */
        addText(arg0: $List_<$FormattedText>, arg1: number, arg2: number, arg3: number, arg4: number): $ITextWidget;
        /**
         * @deprecated
         */
        addText(arg0: $FormattedText, arg1: number, arg2: number, arg3: number, arg4: number): $ITextWidget;
        addInputHandler(arg0: $IJeiInputHandler_): void;
        addRecipePlusSign(): $IPlaceable<never>;
        /**
         * @deprecated
         */
        addRecipePlusSign(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        addAnimatedRecipeArrow(arg0: number, arg1: number, arg2: number): void;
        addAnimatedRecipeArrow(arg0: number): $IPlaceable<never>;
        /**
         * @deprecated
         */
        addAnimatedRecipeFlame(arg0: number, arg1: number, arg2: number): void;
        addAnimatedRecipeFlame(arg0: number): $IPlaceable<never>;
        addScrollGridWidget(arg0: $List_<$IRecipeSlotDrawable>, arg1: number, arg2: number): $IScrollGridWidget;
        addGuiEventListener(arg0: $IJeiGuiEventListener_): void;
        addSlottedWidget(arg0: $ISlottedRecipeWidget, arg1: $List_<$IRecipeSlotDrawable>): void;
        get recipeSlots(): $IRecipeSlotDrawablesView;
    }
    export class $ITextWidget {
    }
    export interface $ITextWidget extends $IPlaceable<$ITextWidget> {
        setShadow(arg0: boolean): $ITextWidget;
        setColor(arg0: number): $ITextWidget;
        setFont(arg0: $Font): $ITextWidget;
        setTextAlignment(arg0: $VerticalAlignment_): $ITextWidget;
        setTextAlignment(arg0: $HorizontalAlignment_): $ITextWidget;
        setLineSpacing(arg0: number): $ITextWidget;
        /**
         * @deprecated
         */
        alignVerticalTop(): $ITextWidget;
        /**
         * @deprecated
         */
        alignHorizontalLeft(): $ITextWidget;
        /**
         * @deprecated
         */
        alignHorizontalCenter(): $ITextWidget;
        /**
         * @deprecated
         */
        alignVerticalBottom(): $ITextWidget;
        /**
         * @deprecated
         */
        alignVerticalCenter(): $ITextWidget;
        /**
         * @deprecated
         */
        alignHorizontalRight(): $ITextWidget;
        set shadow(value: boolean);
        set color(value: number);
        set font(value: $Font);
        set lineSpacing(value: number);
    }
    export class $IRecipeWidget {
    }
    export interface $IRecipeWidget {
        getPosition(): $ScreenPosition;
        tick(): void;
        /**
         * @deprecated
         */
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getTooltip(arg0: $ITooltipBuilder, arg1: number, arg2: number): void;
        drawWidget(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        get position(): $ScreenPosition;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeWidget}.
     */
    export type $IRecipeWidget_ = (() => $ScreenPosition_);
    export class $ISlottedRecipeWidget {
    }
    export interface $ISlottedRecipeWidget extends $IRecipeWidget {
        getSlotUnderMouse(arg0: number, arg1: number): ($RecipeSlotUnderMouse) | undefined;
    }
    /**
     * @deprecated
     */
    export class $IScrollGridWidgetFactory<R> {
    }
    export interface $IScrollGridWidgetFactory<R> extends $ISlottedWidgetFactory<R> {
        setPosition(arg0: number, arg1: number): void;
        getArea(): $ScreenRectangle;
        get area(): $ScreenRectangle;
    }
}
