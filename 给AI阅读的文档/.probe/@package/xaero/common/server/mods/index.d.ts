import { $SupportOPACServer } from "@package/xaero/common/server/mods/opac";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $SupportArgonautsServer } from "@package/xaero/common/server/mods/argonauts";
import { $SupportFTBTeamsServer } from "@package/xaero/common/server/mods/ftbteams";
export * as argonauts from "@package/xaero/common/server/mods/argonauts";
export * as ftbteams from "@package/xaero/common/server/mods/ftbteams";
export * as opac from "@package/xaero/common/server/mods/opac";

declare module "@package/xaero/common/server/mods" {
    export class $SupportServerMods {
        check(arg0: $IXaeroMinimap): void;
        getWorldmap(): $SupportWorldMapServer;
        hasFtbTeams(): boolean;
        hasArgonauts(): boolean;
        getArgonauts(): $SupportArgonautsServer;
        getFtbTeams(): $SupportFTBTeamsServer;
        hasWorldmap(): boolean;
        hasOpac(): boolean;
        getOpac(): $SupportOPACServer;
        constructor();
        get worldmap(): $SupportWorldMapServer;
        get argonauts(): $SupportArgonautsServer;
        get ftbTeams(): $SupportFTBTeamsServer;
        get opac(): $SupportOPACServer;
    }
    export class $SupportWorldMapServer {
        supportsTrackedPlayers(): boolean;
        constructor();
    }
}
