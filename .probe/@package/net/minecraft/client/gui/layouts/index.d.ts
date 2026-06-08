import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $GridLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number): T;
        newCellSettings(): $LayoutSettings;
        defaultCellSetting(): $LayoutSettings;
        createRowHelper(arg0: number): $GridLayout$RowHelper;
        spacing(arg0: number): $GridLayout;
        columnSpacing(arg0: number): $GridLayout;
        rowSpacing(arg0: number): $GridLayout;
        width: number;
        height: number;
        constructor();
        constructor(arg0: number, arg1: number);
    }
    export class $EqualSpacingLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $GridLayout$RowHelper {
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number): T;
        addChild<T extends $LayoutElement>(arg0: T): T;
        getGrid(): $GridLayout;
        newCellSettings(): $LayoutSettings;
        defaultCellSetting(): $LayoutSettings;
        this$0: $GridLayout;
        constructor(arg0: $GridLayout, arg1: number);
        get grid(): $GridLayout;
    }
    export class $AbstractLayout$AbstractChildWrapper {
    }
    export class $FrameLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
        constructor(arg0: $LayoutElement, arg1: $LayoutSettings);
    }
    export class $Layout {
    }
    export interface $Layout extends $LayoutElement {
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        arrangeElements(): void;
    }
    export class $FrameLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(arg0: T): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        setMinWidth(arg0: number): $FrameLayout;
        setMinHeight(arg0: number): $FrameLayout;
        static centerInRectangle(arg0: $LayoutElement, arg1: $ScreenRectangle_): void;
        static centerInRectangle(arg0: $LayoutElement, arg1: number, arg2: number, arg3: number, arg4: number): void;
        newChildLayoutSettings(): $LayoutSettings;
        static alignInRectangle(arg0: $LayoutElement, arg1: $ScreenRectangle_, arg2: number, arg3: number): void;
        static alignInRectangle(arg0: $LayoutElement, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static alignInDimension(arg0: number, arg1: number, arg2: number, arg3: $Consumer_<number>, arg4: number): void;
        setMinDimensions(arg0: number, arg1: number): $FrameLayout;
        defaultChildLayoutSetting(): $LayoutSettings;
        children: $List<$FrameLayout$ChildContainer>;
        width: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number, arg1: number);
        constructor();
        set minWidth(value: number);
        set minHeight(value: number);
    }
    export class $LinearLayout implements $Layout {
        getY(): number;
        getX(): number;
        getWidth(): number;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
        newCellSettings(): $LayoutSettings;
        arrangeElements(): void;
        getHeight(): number;
        setY(arg0: number): void;
        setX(arg0: number): void;
        defaultCellSetting(): $LayoutSettings;
        static vertical(): $LinearLayout;
        static horizontal(): $LinearLayout;
        spacing(arg0: number): $LinearLayout;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        setPosition(arg0: number, arg1: number): void;
        getRectangle(): $ScreenRectangle;
        wrapped: $GridLayout;
        constructor(arg0: number, arg1: number, arg2: $LinearLayout$Orientation_);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractLayout implements $Layout {
        getY(): number;
        getX(): number;
        getWidth(): number;
        getHeight(): number;
        setY(arg0: number): void;
        setX(arg0: number): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        arrangeElements(): void;
        setPosition(arg0: number, arg1: number): void;
        getRectangle(): $ScreenRectangle;
        width: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $LayoutElement {
    }
    export interface $LayoutElement {
        getY(): number;
        getX(): number;
        getWidth(): number;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getHeight(): number;
        setY(arg0: number): void;
        setX(arg0: number): void;
        setPosition(arg0: number, arg1: number): void;
        getRectangle(): $ScreenRectangle;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $LinearLayout$Orientation extends $Enum<$LinearLayout$Orientation> {
        static values(): $LinearLayout$Orientation[];
        static valueOf(arg0: string): $LinearLayout$Orientation;
        addChild<T extends $LayoutElement>(arg0: $GridLayout, arg1: T, arg2: number, arg3: $LayoutSettings): T;
        setSpacing(arg0: $GridLayout, arg1: number): void;
        static VERTICAL: $LinearLayout$Orientation;
        static HORIZONTAL: $LinearLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $LinearLayout$Orientation}.
     */
    export type $LinearLayout$Orientation_ = "horizontal" | "vertical";
    export class $LayoutSettings {
        static defaults(): $LayoutSettings;
    }
    export interface $LayoutSettings {
        copy(): $LayoutSettings;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        padding(arg0: number): $LayoutSettings;
        padding(arg0: number, arg1: number, arg2: number, arg3: number): $LayoutSettings;
        padding(arg0: number, arg1: number): $LayoutSettings;
        align(arg0: number, arg1: number): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        paddingBottom(arg0: number): $LayoutSettings;
        paddingRight(arg0: number): $LayoutSettings;
        paddingLeft(arg0: number): $LayoutSettings;
        paddingTop(arg0: number): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        paddingVertical(arg0: number): $LayoutSettings;
        paddingHorizontal(arg0: number): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignVertically(arg0: number): $LayoutSettings;
        alignHorizontally(arg0: number): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $SpacerElement implements $LayoutElement {
        getY(): number;
        getX(): number;
        static width(arg0: number): $SpacerElement;
        getWidth(): number;
        static height(arg0: number): $SpacerElement;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getHeight(): number;
        setY(arg0: number): void;
        setX(arg0: number): void;
        setPosition(arg0: number, arg1: number): void;
        getRectangle(): $ScreenRectangle;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $CommonLayouts {
        static labeledElement(arg0: $Font, arg1: $LayoutElement, arg2: $Component_): $Layout;
        static labeledElement(arg0: $Font, arg1: $LayoutElement, arg2: $Component_, arg3: $Consumer_<$LayoutSettings>): $Layout;
    }
    export class $EqualSpacingLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T): T;
        newChildLayoutSettings(): $LayoutSettings;
        defaultChildLayoutSetting(): $LayoutSettings;
        width: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $EqualSpacingLayout$Orientation_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $EqualSpacingLayout$Orientation_);
    }
    export class $LayoutSettings$LayoutSettingsImpl implements $LayoutSettings {
        copy(): $LayoutSettings$LayoutSettingsImpl;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        padding(arg0: number, arg1: number): $LayoutSettings$LayoutSettingsImpl;
        padding(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        paddingBottom(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        paddingRight(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        paddingLeft(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        paddingHorizontal(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        alignVertically(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        alignVerticallyTop(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        padding(arg0: number, arg1: number, arg2: number, arg3: number): $LayoutSettings;
        align(arg0: number, arg1: number): $LayoutSettings;
        paddingTop(arg0: number): $LayoutSettings;
        paddingVertical(arg0: number): $LayoutSettings;
        alignHorizontally(arg0: number): $LayoutSettings;
        yAlignment: number;
        xAlignment: number;
        constructor();
        constructor(arg0: $LayoutSettings$LayoutSettingsImpl);
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $EqualSpacingLayout$Orientation extends $Enum<$EqualSpacingLayout$Orientation> {
        static values(): $EqualSpacingLayout$Orientation[];
        static valueOf(arg0: string): $EqualSpacingLayout$Orientation;
        getPrimaryPosition(arg0: $LayoutElement): number;
        getSecondaryLength(arg0: $LayoutElement): number;
        getSecondaryLength(arg0: $EqualSpacingLayout$ChildContainer): number;
        setPrimaryPosition(arg0: $EqualSpacingLayout$ChildContainer, arg1: number): void;
        getPrimaryLength(arg0: $EqualSpacingLayout$ChildContainer): number;
        getPrimaryLength(arg0: $LayoutElement): number;
        setSecondaryPosition(arg0: $EqualSpacingLayout$ChildContainer, arg1: number, arg2: number): void;
        getSecondaryPosition(arg0: $LayoutElement): number;
        static VERTICAL: $EqualSpacingLayout$Orientation;
        static HORIZONTAL: $EqualSpacingLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $EqualSpacingLayout$Orientation}.
     */
    export type $EqualSpacingLayout$Orientation_ = "horizontal" | "vertical";
    export class $GridLayout$CellInhabitant extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $HeaderAndFooterLayout implements $Layout {
        getY(): number;
        getX(): number;
        getWidth(): number;
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
        arrangeElements(): void;
        getContentHeight(): number;
        getHeight(): number;
        setY(arg0: number): void;
        setX(arg0: number): void;
        addToContents<T extends $LayoutElement>(arg0: T): T;
        addToContents<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addTitleHeader(arg0: $Component_, arg1: $Font): void;
        addToFooter<T extends $LayoutElement>(arg0: T): T;
        addToFooter<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addToHeader<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addToHeader<T extends $LayoutElement>(arg0: T): T;
        setHeaderHeight(arg0: number): void;
        setFooterHeight(arg0: number): void;
        getFooterHeight(): number;
        getHeaderHeight(): number;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        setPosition(arg0: number, arg1: number): void;
        getRectangle(): $ScreenRectangle;
        headerFrame: $FrameLayout;
        static DEFAULT_HEADER_AND_FOOTER_HEIGHT: number;
        constructor(arg0: $Screen);
        constructor(arg0: $Screen, arg1: number, arg2: number);
        constructor(arg0: $Screen, arg1: number);
        get width(): number;
        get contentHeight(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
}
