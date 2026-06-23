import { $Int2ReferenceMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $LightLayer_, $Level_ } from "@package/net/minecraft/world/level";
import { $Holder, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $DataLayer, $LevelChunkSection, $LevelChunk, $PalettedContainerRO } from "@package/net/minecraft/world/level/chunk";
import { $List, $List_ } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $SodiumModelDataContainer } from "@package/net/caffeinemc/mods/sodium/client/services";
import { $SodiumAuxiliaryLightManager } from "@package/net/caffeinemc/mods/sodium/client/world";

declare module "@package/net/caffeinemc/mods/sodium/client/world/cloned" {
    export class $ClonedChunkSection {
        getPosition(): $SectionPos;
        getAuxLightManager(): $SodiumAuxiliaryLightManager;
        getBlockEntityRenderDataMap(): $Int2ReferenceMap<$Object>;
        getBlockData(): $PalettedContainerRO<$BlockState>;
        setLastUsedTimestamp(arg0: number): void;
        getLastUsedTimestamp(): number;
        getBiomeData(): $PalettedContainerRO<$Holder<$Biome>>;
        getLightArray(arg0: $LightLayer_): $DataLayer;
        getModelMap(): $SodiumModelDataContainer;
        getBlockEntityMap(): $Int2ReferenceMap<$BlockEntity>;
        constructor(arg0: $Level_, arg1: $LevelChunk, arg2: $LevelChunkSection, arg3: $SectionPos);
        get position(): $SectionPos;
        get auxLightManager(): $SodiumAuxiliaryLightManager;
        get blockEntityRenderDataMap(): $Int2ReferenceMap<$Object>;
        get blockData(): $PalettedContainerRO<$BlockState>;
        get biomeData(): $PalettedContainerRO<$Holder<$Biome>>;
        get modelMap(): $SodiumModelDataContainer;
        get blockEntityMap(): $Int2ReferenceMap<$BlockEntity>;
    }
    export class $ChunkRenderContext {
        getOrigin(): $SectionPos;
        getRenderers(): $List<never>;
        getSections(): $ClonedChunkSection[];
        getVolume(): $BoundingBox;
        constructor(arg0: $SectionPos, arg1: $ClonedChunkSection[], arg2: $BoundingBox, arg3: $List_<never>);
        get origin(): $SectionPos;
        get renderers(): $List<never>;
        get sections(): $ClonedChunkSection[];
        get volume(): $BoundingBox;
    }
}
