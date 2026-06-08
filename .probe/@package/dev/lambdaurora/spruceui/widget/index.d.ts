import { $SprucePositioned, $Position } from "@package/dev/lambdaurora/spruceui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";

declare module "@package/dev/lambdaurora/spruceui/widget" {
    export class $SpruceWidget {
    }
    export interface $SpruceWidget extends $SprucePositioned, $SpruceElement, $NarratableEntry, $Renderable {
        getPosition(): $Position;
        getY(): number;
        getX(): number;
        isActive(): boolean;
        getWidth(): number;
        setActive(arg0: boolean): void;
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        setFocused(arg0: boolean): void;
        getHeight(): number;
        isFocused(): boolean;
        isVisible(): boolean;
        setVisible(arg0: boolean): void;
        getEndX(): number;
        getEndY(): number;
        isMouseHovered(): boolean;
        isFocusedOrHovered(): boolean;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        get position(): $Position;
        get y(): number;
        get x(): number;
        get width(): number;
        get height(): number;
        get endX(): number;
        get endY(): number;
        get mouseHovered(): boolean;
        get focusedOrHovered(): boolean;
    }
}
