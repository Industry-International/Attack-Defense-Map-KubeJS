import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Object } from "@package/java/lang";
import { $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";

declare module "@package/net/fabricmc/fabric/api/client/command/v2" {
    export class $FabricClientCommandSource {
    }
    export interface $FabricClientCommandSource extends $SharedSuggestionProvider {
        getEntity(): $Entity;
        getMeta(arg0: string): $Object;
        getRotation(): $Vec2;
        getWorld(): $ClientLevel;
        sendError(arg0: $Component_): void;
        getPosition(): $Vec3;
        getClient(): $Minecraft;
        getPlayer(): $LocalPlayer;
        sendFeedback(arg0: $Component_): void;
        get entity(): $Entity;
        get rotation(): $Vec2;
        get world(): $ClientLevel;
        get position(): $Vec3;
        get client(): $Minecraft;
        get player(): $LocalPlayer;
    }
}
