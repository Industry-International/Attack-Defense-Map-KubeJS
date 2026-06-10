import { $IPartyMemberDynamicInfoSyncableAPI } from "@package/xaero/pac/common/parties/party/api";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $HighlighterRegistry } from "@package/xaero/common/minimap/highlight";
import { $Minecraft } from "@package/net/minecraft/client";
import { $UUID_, $Iterator } from "@package/java/util";
import { $IPlayerChunkClaimAPI } from "@package/xaero/pac/common/claims/player/api";

declare module "@package/xaero/common/mods/pac" {
    export class $SupportOpenPartiesAndClaims {
        register(): void;
        getModMain(): $IXaeroMinimap;
        claimAt(arg0: $ResourceLocation_, arg1: number, arg2: number): $IPlayerChunkClaimAPI;
        registerHighlighters(arg0: $HighlighterRegistry): void;
        isFromParty(arg0: $UUID_): boolean;
        getAllyIterator(): $Iterator<$IPartyMemberDynamicInfoSyncableAPI>;
        onMapRender(arg0: $Minecraft, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: $ResourceLocation_, arg6: number, arg7: number): void;
        constructor(arg0: $IXaeroMinimap);
        get modMain(): $IXaeroMinimap;
        get allyIterator(): $Iterator<$IPartyMemberDynamicInfoSyncableAPI>;
    }
}
