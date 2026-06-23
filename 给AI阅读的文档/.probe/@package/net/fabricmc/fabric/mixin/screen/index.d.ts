import { $Minecraft } from "@package/net/minecraft/client";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/fabricmc/fabric/mixin/screen" {
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        getFont(): $Font;
        getMinecraft(): $Minecraft;
        get font(): $Font;
        get minecraft(): $Minecraft;
    }
}
