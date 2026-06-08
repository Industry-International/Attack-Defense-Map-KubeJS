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
        getRotation(): $Vec2;
        sendError(arg0: $Component_): void;
        getPlayer(): $LocalPlayer;
        getPosition(): $Vec3;
        getMeta(arg0: string): $Object;
        getWorld(): $ClientLevel;
        sendFeedback(arg0: $Component_): void;
        getClient(): $Minecraft;
        get entity(): $Entity;
        get rotation(): $Vec2;
        get player(): $LocalPlayer;
        get position(): $Vec3;
        get world(): $ClientLevel;
        get client(): $Minecraft;
    }
}
