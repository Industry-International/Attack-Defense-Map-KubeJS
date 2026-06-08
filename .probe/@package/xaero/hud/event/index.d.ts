import { $Hud } from "@package/xaero/hud";

declare module "@package/xaero/hud/event" {
    export class $HudEventHandler {
        handleRenderGameOverlayEventPost(): void;
        setHud(arg0: $Hud): void;
        constructor();
        set hud(value: $Hud);
    }
}
