import { $Minecraft } from "@package/net/minecraft/client";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/fabricmc/fabric/mixin/screen" {
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        getMinecraft(): $Minecraft;
        getFont(): $Font;
        get minecraft(): $Minecraft;
        get font(): $Font;
    }
}
