import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $MinimapWorldContainer, $MinimapWorldRootContainer } from "@package/xaero/hud/minimap/world/container";
import { $Path_, $Path } from "@package/java/nio/file";
import { $HudMod } from "@package/xaero/common";
import { $RootConfigIO } from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/io" {
    export class $MinimapWorldManagerIO {
        loadWorldFile(arg0: $MinimapWorldContainer, arg1: string, arg2: $Path_): boolean;
        checkWorldFileLine(arg0: string[], arg1: $MinimapWorld): boolean;
        loadAllWorlds(arg0: $MinimapSession): void;
        static copyTempFilesBack(arg0: $Path_): void;
        onRootContainerAdded(arg0: $MinimapWorldRootContainer): void;
        convertWorldDimFoldersToSingleFolder(arg0: $MinimapSession): void;
        saveAllWorlds(arg0: $MinimapSession): void;
        saveWorld(arg0: $MinimapWorld, arg1: boolean): void;
        saveWorld(arg0: $MinimapWorld): void;
        loadWorldsFromAllSources(arg0: $MinimapSession, arg1: $ClientPacketListener): void;
        saveWorlds(arg0: $MinimapWorldContainer): void;
        getWorldFile(arg0: $MinimapWorld): $Path;
        getRootConfigIO(): $RootConfigIO;
        convertWorldDimFilesToFolders(): void;
        loadWorld(arg0: $MinimapWorld, arg1: $Path_): void;
        constructor(arg0: $HudMod);
        get rootConfigIO(): $RootConfigIO;
    }
}
