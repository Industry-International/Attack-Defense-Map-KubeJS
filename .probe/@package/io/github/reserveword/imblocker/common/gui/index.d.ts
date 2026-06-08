
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
        updateEnglishState(): void;
        updateIMState(): void;
        deliverFocus(): void;
        getFontHeight(): number;
        getCaretPos(): $Point;
        getPreferredState(): boolean;
        getBoundsAbs(): $Rectangle;
        isTrulyFocused(): boolean;
        lostFocus(): void;
        getGuiScale(): number;
        getPreferredEnglishState(): boolean;
        get fontHeight(): number;
        get caretPos(): $Point;
        get preferredState(): boolean;
        get boundsAbs(): $Rectangle;
        get trulyFocused(): boolean;
        get guiScale(): number;
        get preferredEnglishState(): boolean;
    }
    export class $FocusContainer implements $FocusableObject {
        deliverFocus(): void;
        getCaretPos(): $Point;
        getPreferredState(): boolean;
        removeFocus(arg0: $FocusableWidget): void;
        getBoundsAbs(): $Rectangle;
        locateRealFocus(): void;
        switchFocus(arg0: $FocusableWidget): void;
        checkFocusCandidatesVisibility(arg0: number): void;
        setGuiScaleFactor(arg0: number): void;
        clearFocus(): void;
        requestFocus(arg0: $FocusableWidget): void;
        lostFocus(): void;
        getGuiScale(): number;
        setPreferredState(arg0: boolean): void;
        updateEnglishState(): void;
        updateIMState(): void;
        getFontHeight(): number;
        isTrulyFocused(): boolean;
        getPreferredEnglishState(): boolean;
        static MINECRAFT: $FocusContainer;
        static IMGUI: $FocusContainer;
        get caretPos(): $Point;
        get boundsAbs(): $Rectangle;
        set guiScaleFactor(value: number);
        get guiScale(): number;
        get fontHeight(): number;
        get trulyFocused(): boolean;
        get preferredEnglishState(): boolean;
    }
    export class $MinecraftMultilineEditBoxWidget {
    }
    export interface $MinecraftMultilineEditBoxWidget extends $MinecraftAbstractTextInputWidget<$MultilineCursorInfo> {
        imblocker$getContentOffsetX(): number;
        imblocker$getContentOffsetY(): number;
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
        getFocusContainer(): $FocusContainer;
        imblocker$onFocusLost(): void;
        imblocker$onBoundsChanged(): void;
        imblocker$onFocusGained(): void;
        imblocker$onFocusChanged(arg0: boolean): void;
        get focusContainer(): $FocusContainer;
    }
    export class $FocusableWidget {
    }
    export interface $FocusableWidget extends $FocusableObject {
        isRenderable(): boolean;
        getPreferredState(): boolean;
        getFocusContainer(): $FocusContainer;
        getGuiScale(): number;
        get renderable(): boolean;
        get preferredState(): boolean;
        get focusContainer(): $FocusContainer;
        get guiScale(): number;
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
        deliverFocus(): void;
        updateCursorInfo(): boolean;
        getCursorInfo(): CI;
        imblocker$onCursorChanged(): void;
        get cursorInfo(): CI;
    }
    export class $MinecraftTextFieldWidget {
    }
    export interface $MinecraftTextFieldWidget extends $MinecraftAbstractTextInputWidget<$SinglelineCursorInfo> {
        getCaretPos(): $Point;
        getPaddingX(): number;
        checkVisibility(arg0: number): void;
        setPreferredEnglishState(arg0: boolean): void;
        getPrimaryEnglishState(): boolean;
        get caretPos(): $Point;
        get paddingX(): number;
        set preferredEnglishState(value: boolean);
        get primaryEnglishState(): boolean;
    }
}
