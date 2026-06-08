import { $MinimapWorldRootContainer } from "@package/xaero/hud/minimap/world/container";
import { $HudMod } from "@package/xaero/common";

declare module "@package/xaero/hud/minimap/world/container/config/io" {
    export class $RootConfigIO {
        load(arg0: $MinimapWorldRootContainer): void;
        save(arg0: $MinimapWorldRootContainer): void;
        constructor(arg0: $HudMod);
    }
}
