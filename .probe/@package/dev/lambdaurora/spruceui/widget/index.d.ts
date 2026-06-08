import { $SprucePositioned, $Position } from "@package/dev/lambdaurora/spruceui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";

declare module "@package/dev/lambdaurora/spruceui/widget" {
    export class $SpruceWidget {
    }
    export interface $SpruceWidget extends $SprucePositioned, $SpruceElement, $NarratableEntry, $Renderable {
        isActive(): boolean;
        getWidth(): number;
        getY(): number;
        getX(): number;
        setActive(arg0: boolean): void;
        getEndX(): number;
        getEndY(): number;
        getHeight(): number;
        isFocused(): boolean;
        isVisible(): boolean;
        getPosition(): $Position;
        setFocused(arg0: boolean): void;
        isDragging(): boolean;
        setVisible(arg0: boolean): void;
        setDragging(arg0: boolean): void;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        isMouseHovered(): boolean;
        isFocusedOrHovered(): boolean;
        get width(): number;
        get y(): number;
        get x(): number;
        get endX(): number;
        get endY(): number;
        get height(): number;
        get position(): $Position;
        get mouseHovered(): boolean;
        get focusedOrHovered(): boolean;
    }
}
