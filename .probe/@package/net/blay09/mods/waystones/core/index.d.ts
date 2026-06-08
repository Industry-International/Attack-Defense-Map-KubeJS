import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Waystone, $WaystoneManager } from "@package/net/blay09/mods/waystones/api";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $UUID_, $List } from "@package/java/util";

declare module "@package/net/blay09/mods/waystones/core" {
    export class $WaystoneManagerImpl extends $SavedData implements $WaystoneManager {
        static get(arg0: $MinecraftServer): $WaystoneManagerImpl;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $WaystoneManagerImpl;
        findWaystoneByName(arg0: string): ($Waystone) | undefined;
        updateWaystone(arg0: $Waystone): void;
        getWaystoneById(arg0: $UUID_): ($Waystone) | undefined;
        getWaystoneAt(arg0: $BlockGetter, arg1: $BlockPos_): ($Waystone) | undefined;
        getWaystonesByType(arg0: $ResourceLocation_): $Stream<$Waystone>;
        getWaystones(): $Stream<$Waystone>;
        removeWaystone(arg0: $Waystone): void;
        addWaystone(arg0: $Waystone): void;
        getGlobalWaystones(): $List<$Waystone>;
        constructor();
        get waystones(): $Stream<$Waystone>;
        get globalWaystones(): $List<$Waystone>;
    }
}
