import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/fabricmc/fabric/api/client/screen/v1" {
    export class $ScreenMouseEvents$AfterMouseClick {
    }
    export interface $ScreenMouseEvents$AfterMouseClick {
        afterMouseClick(arg0: $Screen, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenMouseEvents$AfterMouseClick}.
     */
    export type $ScreenMouseEvents$AfterMouseClick_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number) => void);
    export class $ScreenKeyboardEvents$BeforeKeyPress {
    }
    export interface $ScreenKeyboardEvents$BeforeKeyPress {
        beforeKeyPress(arg0: $Screen, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenKeyboardEvents$BeforeKeyPress}.
     */
    export type $ScreenKeyboardEvents$BeforeKeyPress_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number) => void);
    export class $ScreenMouseEvents$AfterMouseScroll {
    }
    export interface $ScreenMouseEvents$AfterMouseScroll {
        afterMouseScroll(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenMouseEvents$AfterMouseScroll}.
     */
    export type $ScreenMouseEvents$AfterMouseScroll_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $ScreenEvents$BeforeTick {
    }
    export interface $ScreenEvents$BeforeTick {
        beforeTick(arg0: $Screen): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenEvents$BeforeTick}.
     */
    export type $ScreenEvents$BeforeTick_ = ((arg0: $Screen) => void);
    export class $ScreenKeyboardEvents$AfterKeyPress {
    }
    export interface $ScreenKeyboardEvents$AfterKeyPress {
        afterKeyPress(arg0: $Screen, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenKeyboardEvents$AfterKeyPress}.
     */
    export type $ScreenKeyboardEvents$AfterKeyPress_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number) => void);
    export class $ScreenMouseEvents$AfterMouseRelease {
    }
    export interface $ScreenMouseEvents$AfterMouseRelease {
        afterMouseRelease(arg0: $Screen, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenMouseEvents$AfterMouseRelease}.
     */
    export type $ScreenMouseEvents$AfterMouseRelease_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number) => void);
    export class $ScreenMouseEvents$BeforeMouseScroll {
    }
    export interface $ScreenMouseEvents$BeforeMouseScroll {
        beforeMouseScroll(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenMouseEvents$BeforeMouseScroll}.
     */
    export type $ScreenMouseEvents$BeforeMouseScroll_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $ScreenMouseEvents$AllowMouseClick {
    }
    export interface $ScreenMouseEvents$AllowMouseClick {
        allowMouseClick(arg0: $Screen, arg1: number, arg2: number, arg3: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ScreenMouseEvents$AllowMouseClick}.
     */
    export type $ScreenMouseEvents$AllowMouseClick_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number) => boolean);
    export class $ScreenEvents$Remove {
    }
    export interface $ScreenEvents$Remove {
        onRemove(arg0: $Screen): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenEvents$Remove}.
     */
    export type $ScreenEvents$Remove_ = ((arg0: $Screen) => void);
    export class $ScreenMouseEvents$BeforeMouseRelease {
    }
    export interface $ScreenMouseEvents$BeforeMouseRelease {
        beforeMouseRelease(arg0: $Screen, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenMouseEvents$BeforeMouseRelease}.
     */
    export type $ScreenMouseEvents$BeforeMouseRelease_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number) => void);
    export class $ScreenEvents$AfterTick {
    }
    export interface $ScreenEvents$AfterTick {
        afterTick(arg0: $Screen): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenEvents$AfterTick}.
     */
    export type $ScreenEvents$AfterTick_ = ((arg0: $Screen) => void);
    export class $ScreenEvents$AfterRender {
    }
    export interface $ScreenEvents$AfterRender {
        afterRender(arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenEvents$AfterRender}.
     */
    export type $ScreenEvents$AfterRender_ = ((arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number) => void);
    export class $ScreenEvents$BeforeRender {
    }
    export interface $ScreenEvents$BeforeRender {
        beforeRender(arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenEvents$BeforeRender}.
     */
    export type $ScreenEvents$BeforeRender_ = ((arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number) => void);
    export class $ScreenKeyboardEvents$AllowKeyRelease {
    }
    export interface $ScreenKeyboardEvents$AllowKeyRelease {
        allowKeyRelease(arg0: $Screen, arg1: number, arg2: number, arg3: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ScreenKeyboardEvents$AllowKeyRelease}.
     */
    export type $ScreenKeyboardEvents$AllowKeyRelease_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number) => boolean);
    export class $ScreenKeyboardEvents$AllowKeyPress {
    }
    export interface $ScreenKeyboardEvents$AllowKeyPress {
        allowKeyPress(arg0: $Screen, arg1: number, arg2: number, arg3: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ScreenKeyboardEvents$AllowKeyPress}.
     */
    export type $ScreenKeyboardEvents$AllowKeyPress_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number) => boolean);
    export class $ScreenMouseEvents$AllowMouseScroll {
    }
    export interface $ScreenMouseEvents$AllowMouseScroll {
        allowMouseScroll(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ScreenMouseEvents$AllowMouseScroll}.
     */
    export type $ScreenMouseEvents$AllowMouseScroll_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number) => boolean);
    export class $ScreenKeyboardEvents$BeforeKeyRelease {
    }
    export interface $ScreenKeyboardEvents$BeforeKeyRelease {
        beforeKeyRelease(arg0: $Screen, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenKeyboardEvents$BeforeKeyRelease}.
     */
    export type $ScreenKeyboardEvents$BeforeKeyRelease_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number) => void);
    export class $ScreenMouseEvents$BeforeMouseClick {
    }
    export interface $ScreenMouseEvents$BeforeMouseClick {
        beforeMouseClick(arg0: $Screen, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenMouseEvents$BeforeMouseClick}.
     */
    export type $ScreenMouseEvents$BeforeMouseClick_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number) => void);
    export class $ScreenMouseEvents$AllowMouseRelease {
    }
    export interface $ScreenMouseEvents$AllowMouseRelease {
        allowMouseRelease(arg0: $Screen, arg1: number, arg2: number, arg3: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ScreenMouseEvents$AllowMouseRelease}.
     */
    export type $ScreenMouseEvents$AllowMouseRelease_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number) => boolean);
    export class $ScreenKeyboardEvents$AfterKeyRelease {
    }
    export interface $ScreenKeyboardEvents$AfterKeyRelease {
        afterKeyRelease(arg0: $Screen, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenKeyboardEvents$AfterKeyRelease}.
     */
    export type $ScreenKeyboardEvents$AfterKeyRelease_ = ((arg0: $Screen, arg1: number, arg2: number, arg3: number) => void);
}
