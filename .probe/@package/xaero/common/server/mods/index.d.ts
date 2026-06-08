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
        getFtbTeams(): $SupportFTBTeamsServer;
        getArgonauts(): $SupportArgonautsServer;
        hasArgonauts(): boolean;
        hasWorldmap(): boolean;
        getWorldmap(): $SupportWorldMapServer;
        hasFtbTeams(): boolean;
        getOpac(): $SupportOPACServer;
        hasOpac(): boolean;
        constructor();
        get ftbTeams(): $SupportFTBTeamsServer;
        get argonauts(): $SupportArgonautsServer;
        get worldmap(): $SupportWorldMapServer;
        get opac(): $SupportOPACServer;
    }
    export class $SupportWorldMapServer {
        supportsTrackedPlayers(): boolean;
        constructor();
    }
}
