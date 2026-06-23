import { $IModInfo } from "@package/net/neoforged/neoforgespi/language";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractSliderButton, $WidgetTooltipHolder, $Button$Builder, $ObjectSelectionList, $AbstractSelectionList, $ObjectSelectionList$Entry, $Button$OnPress_, $Button$CreateNarration_, $Button$CreateNarration, $WidgetSprites, $Renderable, $Button } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ScrollController, $ScrollController$IListener } from "@package/icyllis/modernui/mc";
import { $ModListScreen } from "@package/net/neoforged/neoforge/client/gui";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/neoforged/neoforge/client/gui/widget" {
    /**
     * Slider widget implementation which allows inputting values in a certain range with optional step size.
     */
    export class $ExtendedSlider extends $AbstractSliderButton {
        getValue(): number;
        setValue(value: number): void;
        getValueString(): string;
        getValueInt(): number;
        getValueLong(): number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        value: number;
        static TEXT_MARGIN: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, prefix: $Component_, suffix: $Component_, minValue: number, maxValue: number, currentValue: number, stepSize: number, precision: number, drawString: boolean);
        /**
         * Overload with `stepSize` set to 1, useful for sliders with whole number values.
         */
        constructor(x: number, y: number, width: number, height: number, prefix: $Component_, suffix: $Component_, minValue: number, maxValue: number, currentValue: number, drawString: boolean);
        get valueString(): string;
        get valueInt(): number;
        get valueLong(): number;
    }
    export class $ModListWidget extends $ObjectSelectionList<$ModListWidget$ModEntry> {
        refreshList(): void;
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        static $assertionsDisabled: boolean;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $ModListWidget$ModEntry;
        height: number;
        constructor(parent: $ModListScreen, listWidth: number, top: number, bottom: number);
    }
    /**
     * Abstract scroll panel class.
     */
    export class $ScrollPanel extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry, $ScrollController$IListener {
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        onScrollAmountUpdated(controller: $ScrollController, amount: number): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isActive(): boolean;
        /**
         * Base constructor
         */
        constructor(client: $Minecraft, width: number, height: number, top: number, left: number, border: number, barWidth: number, barBgColor: number, barColor: number, barBorderColor: number);
        constructor(client: $Minecraft, width: number, height: number, top: number, left: number, border: number, barWidth: number);
        constructor(client: $Minecraft, width: number, height: number, top: number, left: number, border: number);
        constructor(client: $Minecraft, width: number, height: number, top: number, left: number);
        get active(): boolean;
    }
    /**
     * This class provides a button that fixes several bugs present in the vanilla GuiButton drawing code.
     * The gist of it is that it allows buttons of any size without gaps in the graphics and with the
     * borders drawn properly. It also prevents button text from extending out of the sides of the button by
     * trimming the end of the string and adding an ellipsis.
     * 
     * The code that handles drawing the button is in GuiUtils.
     */
    export class $ExtendedButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(builder: $Button$Builder);
        constructor(x: number, y: number, width: number, height: number, message: $Component_, onPress: $Button$OnPress_, createNarration: $Button$CreateNarration_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_);
    }
    /**
     * Custom button subclass to draw an indicator overlay on the button when updates are available.
     */
    export class $ModsButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: $Button$Builder);
    }
    export class $ModListWidget$ModEntry extends $ObjectSelectionList$Entry<$ModListWidget$ModEntry> {
        getInfo(): $IModInfo;
        getContainer(): $ModContainer;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ModListWidget$ModEntry>;
        get info(): $IModInfo;
        get container(): $ModContainer;
    }
    /**
     * This class provides a button that shows a string glyph at the beginning. The glyph can be scaled using the glyphScale parameter.
     */
    export class $UnicodeGlyphButton extends $ExtendedButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        glyph: string;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        glyphScale: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: string, arg6: number, arg7: $Button$OnPress_);
    }
}
