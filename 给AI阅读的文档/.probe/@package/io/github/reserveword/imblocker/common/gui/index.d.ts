
declare module "@package/io/github/reserveword/imblocker/common/gui" {
    export class $CursorInfo {
        cursor: number;
        cursorLineBeginIndex: number;
        text: string;
        constructor(arg0: number, arg1: number, arg2: string);
    }
    export class $FocusableObject {
    }
    export interface $FocusableObject {
        getGuiScale(): number;
        getPreferredEnglishState(): boolean;
        getBoundsAbs(): $Rectangle;
        deliverFocus(): void;
        getFontHeight(): number;
        getCaretPos(): $Point;
        updateIMState(): void;
        getPreferredState(): boolean;
        updateEnglishState(): void;
        isTrulyFocused(): boolean;
        lostFocus(): void;
        get guiScale(): number;
        get preferredEnglishState(): boolean;
        get boundsAbs(): $Rectangle;
        get fontHeight(): number;
        get caretPos(): $Point;
        get preferredState(): boolean;
        get trulyFocused(): boolean;
    }
    export class $FocusContainer implements $FocusableObject {
        setGuiScaleFactor(arg0: number): void;
        getGuiScale(): number;
        checkFocusCandidatesVisibility(arg0: number): void;
        requestFocus(arg0: $FocusableWidget): void;
        setPreferredState(arg0: boolean): void;
        clearFocus(): void;
        locateRealFocus(): void;
        getBoundsAbs(): $Rectangle;
        deliverFocus(): void;
        getCaretPos(): $Point;
        removeFocus(arg0: $FocusableWidget): void;
        getPreferredState(): boolean;
        switchFocus(arg0: $FocusableWidget): void;
        lostFocus(): void;
        getPreferredEnglishState(): boolean;
        getFontHeight(): number;
        updateIMState(): void;
        updateEnglishState(): void;
        isTrulyFocused(): boolean;
        static MINECRAFT: $FocusContainer;
        static IMGUI: $FocusContainer;
        set guiScaleFactor(value: number);
        get guiScale(): number;
        get boundsAbs(): $Rectangle;
        get caretPos(): $Point;
        get preferredEnglishState(): boolean;
        get fontHeight(): number;
        get trulyFocused(): boolean;
    }
    export class $MinecraftMultilineEditBoxWidget {
    }
    export interface $MinecraftMultilineEditBoxWidget extends $MinecraftAbstractTextInputWidget<$MultilineCursorInfo> {
        imblocker$getContentOffsetY(): number;
        imblocker$getContentOffsetX(): number;
        getCaretPos(): $Point;
        get caretPos(): $Point;
    }
    export class $Rectangle {
        x(): number;
        y(): number;
        width(): number;
        height(): number;
        derive(arg0: number): $Rectangle;
        static EMPTY: $Rectangle;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $SinglelineCursorInfo extends $CursorInfo {
        updateCursorInfo(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: string): boolean;
        cursor: number;
        cursorLineBeginIndex: number;
        widgetHeight: number;
        hasBorder: boolean;
        text: string;
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: string);
    }
    export class $MultilineCursorInfo extends $CursorInfo {
        updateCursorInfo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string): boolean;
        cursor: number;
        cursorLineBeginIndex: number;
        scrollY: number;
        text: string;
        cursorLineIndex: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string);
    }
    export class $MinecraftFocusableWidget {
    }
    export interface $MinecraftFocusableWidget extends $FocusableWidget {
        imblocker$onFocusGained(): void;
        imblocker$onFocusLost(): void;
        imblocker$onFocusChanged(arg0: boolean): void;
        imblocker$onBoundsChanged(): void;
        getFocusContainer(): $FocusContainer;
        get focusContainer(): $FocusContainer;
    }
    export class $FocusableWidget {
    }
    export interface $FocusableWidget extends $FocusableObject {
        getGuiScale(): number;
        isRenderable(): boolean;
        getPreferredState(): boolean;
        getFocusContainer(): $FocusContainer;
        get guiScale(): number;
        get renderable(): boolean;
        get preferredState(): boolean;
        get focusContainer(): $FocusContainer;
    }
    export class $Point {
        x(): number;
        y(): number;
        derive(arg0: number): $Point;
        static TOP_LEFT: $Point;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number);
    }
    export class $MinecraftAbstractTextInputWidget<CI extends $CursorInfo> {
    }
    export interface $MinecraftAbstractTextInputWidget<CI extends $CursorInfo> extends $MinecraftFocusableWidget {
        imblocker$onCursorChanged(): void;
        deliverFocus(): void;
        updateCursorInfo(): boolean;
        getCursorInfo(): CI;
        get cursorInfo(): CI;
    }
    export class $MinecraftTextFieldWidget {
    }
    export interface $MinecraftTextFieldWidget extends $MinecraftAbstractTextInputWidget<$SinglelineCursorInfo> {
        setPreferredEnglishState(arg0: boolean): void;
        getPrimaryEnglishState(): boolean;
        checkVisibility(arg0: number): void;
        getPaddingX(): number;
        getCaretPos(): $Point;
        set preferredEnglishState(value: boolean);
        get primaryEnglishState(): boolean;
        get paddingX(): number;
        get caretPos(): $Point;
    }
}
