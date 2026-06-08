import { $Level_, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ChatType$Bound_, $Component_ } from "@package/net/minecraft/network/chat";
import { $HudMod, $IXaeroMinimap } from "@package/xaero/common";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DeltaTracker, $ToggleKeyMapping } from "@package/net/minecraft/client";
import { $RealmsServer } from "@package/com/mojang/realmsclient/dto";
import { $HudSession } from "@package/xaero/hud";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Object } from "@package/java/lang";

declare module "@package/xaero/common/events" {
    export class $ModCommonEvents {
        constructor(arg0: $IXaeroMinimap);
    }
    export class $ModClientEvents {
        handleRenderModOverlay(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        handleTextureStitchEventPost(arg0: $TextureAtlas): void;
        constructor(arg0: $IXaeroMinimap);
    }
    export class $ClientEvents {
        handleRenderStatusEffectOverlay(arg0: $GuiGraphics): boolean;
        handleForceToggleKeyMapping(arg0: $ToggleKeyMapping): boolean;
        handleRenderGameOverlayEventPre(arg0: $GuiGraphics, arg1: number): void;
        handleRenderCrosshairOverlay(arg0: $GuiGraphics): boolean;
        handleClientPlayerChatReceivedEvent(arg0: $ChatType$Bound_, arg1: $Component_, arg2: $GameProfile): boolean;
        handleClientSystemChatReceivedEvent(arg0: $Component_): boolean;
        handleRenderGameOverlayEventPost(): void;
        worldUnload(arg0: $LevelAccessor): void;
        getLastGuiOpen(): $Object;
        handleGuiOpen(arg0: $Screen): $Screen;
        handleClientTickStart(): void;
        handleDrawScreenEventPost(arg0: $Screen): void;
        handlePlayerTickStart(arg0: $Player): void;
        handleRenderTickStart(): void;
        handlePlayerSetSpawnEvent(arg0: $BlockPos_, arg1: $Level_): void;
        handleClientSendChatEvent(arg0: string): boolean;
        latestRealm: $RealmsServer;
        constructor(arg0: $HudMod);
        get lastGuiOpen(): $Object;
    }
    export class $CommonEvents {
        onServerStarting(arg0: $MinecraftServer): void;
        onPlayerLogIn(arg0: $Player): void;
        onPlayerWorldJoin(arg0: $ServerPlayer): void;
        handlePlayerTickStart(arg0: $Player): void;
        onServerStopped(arg0: $MinecraftServer): void;
        constructor(arg0: $HudMod);
    }
    export class $ClientEventsListener {
        handleRenderStatusEffectOverlay(arg0: $GuiGraphics): boolean;
        handleForceToggleKeyMapping(arg0: $ToggleKeyMapping): boolean;
        playerTickPost(arg0: $HudSession): void;
        clientTickPost(arg0: $HudSession): void;
        constructor();
    }
}
