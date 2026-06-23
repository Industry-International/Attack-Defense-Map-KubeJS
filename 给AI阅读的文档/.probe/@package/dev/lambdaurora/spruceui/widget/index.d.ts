import { $SprucePositioned, $Position } from "@package/dev/lambdaurora/spruceui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";

declare module "@package/dev/lambdaurora/spruceui/widget" {
    export class $SpruceWidget {
    }
    export interface $SpruceWidget extends $SprucePositioned, $SpruceElement, $NarratableEntry, $Renderable {
        getPosition(): $Position;
        isMouseHovered(): boolean;
        isFocusedOrHovered(): boolean;
        isActive(): boolean;
        getY(): number;
        getWidth(): number;
        setActive(arg0: boolean): void;
        getEndX(): number;
        getEndY(): number;
        setVisible(arg0: boolean): void;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        setDragging(arg0: boolean): void;
        setFocused(arg0: boolean): void;
        isDragging(): boolean;
        getHeight(): number;
        isFocused(): boolean;
        getX(): number;
        isVisible(): boolean;
        get position(): $Position;
        get mouseHovered(): boolean;
        get focusedOrHovered(): boolean;
        get y(): number;
        get width(): number;
        get endX(): number;
        get endY(): number;
        get height(): number;
        get x(): number;
    }
}
