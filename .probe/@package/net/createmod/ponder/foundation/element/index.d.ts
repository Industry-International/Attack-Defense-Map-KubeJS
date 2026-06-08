import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $PonderElement, $AnimatedOverlayElement, $InputElementBuilder } from "@package/net/createmod/ponder/api/element";
import { $Pointing_ } from "@package/net/createmod/catnip/math";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $PonderUI } from "@package/net/createmod/ponder/foundation/ui";

declare module "@package/net/createmod/ponder/foundation/element" {
    export class $AnimatedOverlayElementBase extends $PonderElementBase implements $AnimatedOverlayElement {
        setFade(arg0: number): void;
        getFade(arg0: number): number;
        render(arg0: $PonderScene, arg1: $PonderUI, arg2: $GuiGraphics, arg3: number): void;
        constructor();
    }
    export class $PonderElementBase implements $PonderElement {
        isVisible(): boolean;
        setVisible(arg0: boolean): void;
        reset(arg0: $PonderScene): void;
        tick(arg0: $PonderScene): void;
        whileSkipping(arg0: $PonderScene): void;
        constructor();
    }
    export class $InputWindowElement extends $AnimatedOverlayElementBase {
        builder(): $InputElementBuilder;
        constructor(arg0: $Vec3_, arg1: $Pointing_);
    }
}
