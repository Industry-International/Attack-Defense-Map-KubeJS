import { $SprucePositioned, $Position } from "@package/dev/lambdaurora/spruceui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";

declare module "@package/dev/lambdaurora/spruceui/widget" {
    export class $SpruceWidget {
    }
    export interface $SpruceWidget extends $SprucePositioned, $SpruceElement, $NarratableEntry, $Renderable {
        isActive(): boolean;
        getPosition(): $Position;
        isDragging(): boolean;
        setFocused(arg0: boolean): void;
        isVisible(): boolean;
        getWidth(): number;
        getY(): number;
        getX(): number;
        setActive(arg0: boolean): void;
        isFocused(): boolean;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        setDragging(arg0: boolean): void;
        getHeight(): number;
        setVisible(arg0: boolean): void;
        isFocusedOrHovered(): boolean;
        isMouseHovered(): boolean;
        getEndX(): number;
        getEndY(): number;
        get position(): $Position;
        get width(): number;
        get y(): number;
        get x(): number;
        get height(): number;
        get focusedOrHovered(): boolean;
        get mouseHovered(): boolean;
        get endX(): number;
        get endY(): number;
    }
}
