import { $Hud } from "@package/xaero/hud";

declare module "@package/xaero/hud/event" {
    export class $HudEventHandler {
        setHud(arg0: $Hud): void;
        handleRenderGameOverlayEventPost(): void;
        constructor();
        set hud(value: $Hud);
    }
}
