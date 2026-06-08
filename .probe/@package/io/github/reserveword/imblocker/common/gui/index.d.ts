
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
        getBoundsAbs(): $Rectangle;
        deliverFocus(): void;
        getPreferredState(): boolean;
        getCaretPos(): $Point;
        updateEnglishState(): void;
        isTrulyFocused(): boolean;
        updateIMState(): void;
        getFontHeight(): number;
        getPreferredEnglishState(): boolean;
        lostFocus(): void;
        get guiScale(): number;
        get boundsAbs(): $Rectangle;
        get preferredState(): boolean;
        get caretPos(): $Point;
        get trulyFocused(): boolean;
        get fontHeight(): number;
        get preferredEnglishState(): boolean;
    }
    export class $FocusContainer implements $FocusableObject {
        clearFocus(): void;
        checkFocusCandidatesVisibility(arg0: number): void;
        setPreferredState(arg0: boolean): void;
        getGuiScale(): number;
        requestFocus(arg0: $FocusableWidget): void;
        setGuiScaleFactor(arg0: number): void;
        getBoundsAbs(): $Rectangle;
        removeFocus(arg0: $FocusableWidget): void;
        deliverFocus(): void;
        getPreferredState(): boolean;
        getCaretPos(): $Point;
        switchFocus(arg0: $FocusableWidget): void;
        locateRealFocus(): void;
        lostFocus(): void;
        updateEnglishState(): void;
        isTrulyFocused(): boolean;
        updateIMState(): void;
        getFontHeight(): number;
        getPreferredEnglishState(): boolean;
        static MINECRAFT: $FocusContainer;
        static IMGUI: $FocusContainer;
        get guiScale(): number;
        set guiScaleFactor(value: number);
        get boundsAbs(): $Rectangle;
        get caretPos(): $Point;
        get trulyFocused(): boolean;
        get fontHeight(): number;
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
        imblocker$onBoundsChanged(): void;
        imblocker$onFocusLost(): void;
        imblocker$onFocusGained(): void;
        imblocker$onFocusChanged(arg0: boolean): void;
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
        deliverFocus(): void;
        updateCursorInfo(): boolean;
        getCursorInfo(): CI;
        imblocker$onCursorChanged(): void;
        get cursorInfo(): CI;
    }
    export class $MinecraftTextFieldWidget {
    }
    export interface $MinecraftTextFieldWidget extends $MinecraftAbstractTextInputWidget<$SinglelineCursorInfo> {
        setPreferredEnglishState(arg0: boolean): void;
        getCaretPos(): $Point;
        getPaddingX(): number;
        checkVisibility(arg0: number): void;
        getPrimaryEnglishState(): boolean;
        set preferredEnglishState(value: boolean);
        get caretPos(): $Point;
        get paddingX(): number;
        get primaryEnglishState(): boolean;
    }
}
