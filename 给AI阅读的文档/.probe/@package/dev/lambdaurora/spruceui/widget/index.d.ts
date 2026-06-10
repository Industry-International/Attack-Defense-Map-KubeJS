import { $SprucePositioned, $Position } from "@package/dev/lambdaurora/spruceui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";

declare module "@package/dev/lambdaurora/spruceui/widget" {
    export class $SpruceWidget {
    }
    export interface $SpruceWidget extends $SprucePositioned, $SpruceElement, $NarratableEntry, $Renderable {
        getWidth(): number;
        isActive(): boolean;
        getY(): number;
        getX(): number;
        setVisible(arg0: boolean): void;
        setActive(arg0: boolean): void;
        isVisible(): boolean;
        getEndY(): number;
        getEndX(): number;
        getPosition(): $Position;
        isFocused(): boolean;
        setFocused(arg0: boolean): void;
        isDragging(): boolean;
        getHeight(): number;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        setDragging(arg0: boolean): void;
        isMouseHovered(): boolean;
        isFocusedOrHovered(): boolean;
        get width(): number;
        get y(): number;
        get x(): number;
        get endY(): number;
        get endX(): number;
        get position(): $Position;
        get height(): number;
        get mouseHovered(): boolean;
        get focusedOrHovered(): boolean;
    }
}
