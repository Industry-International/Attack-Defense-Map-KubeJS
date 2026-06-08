import { $ScreenPosition_, $ScreenRectangle, $ScreenRectangle_, $ScreenPosition } from "@package/net/minecraft/client/gui/navigation";
import { $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $Record } from "@package/java/lang";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $IJeiKeyMapping } from "@package/mezz/jei/api/runtime";

declare module "@package/mezz/jei/api/gui/inputs" {
    export class $RecipeSlotUnderMouse extends $Record {
        slot(): $IRecipeSlotDrawable;
        offset(): $ScreenPosition;
        isMouseOver(arg0: number, arg1: number): boolean;
        addOffset(arg0: number, arg1: number): $RecipeSlotUnderMouse;
        constructor(arg0: $IRecipeSlotDrawable, arg1: number, arg2: number);
        constructor(slot: $IRecipeSlotDrawable, offset: $ScreenPosition_);
    }
    export class $IJeiUserInput {
    }
    export interface $IJeiUserInput {
        getModifiers(): number;
        getKey(): $InputConstants$Key;
        is(arg0: $KeyMapping): boolean;
        is(arg0: $IJeiKeyMapping): boolean;
        isSimulate(): boolean;
        get modifiers(): number;
        get key(): $InputConstants$Key;
        get simulate(): boolean;
    }
    export class $IJeiGuiEventListener {
    }
    export interface $IJeiGuiEventListener {
        keyPressed(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        getArea(): $ScreenRectangle;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        get area(): $ScreenRectangle;
    }
    /**
     * Values that may be interpreted as {@link $IJeiGuiEventListener}.
     */
    export type $IJeiGuiEventListener_ = (() => $ScreenRectangle_);
    export class $IJeiInputHandler {
    }
    export interface $IJeiInputHandler {
        getArea(): $ScreenRectangle;
        handleInput(arg0: number, arg1: number, arg2: $IJeiUserInput): boolean;
        handleMouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        handleMouseMoved(arg0: number, arg1: number): void;
        handleMouseDragged(arg0: number, arg1: number, arg2: $InputConstants$Key, arg3: number, arg4: number): boolean;
        get area(): $ScreenRectangle;
    }
    /**
     * Values that may be interpreted as {@link $IJeiInputHandler}.
     */
    export type $IJeiInputHandler_ = (() => $ScreenRectangle_);
}
