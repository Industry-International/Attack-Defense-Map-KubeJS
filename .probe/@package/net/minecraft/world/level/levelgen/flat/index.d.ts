import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $Biome_, $BiomeGenerationSettings, $Biome } from "@package/net/minecraft/world/level/biome";
import { $List, $List_ } from "@package/java/util";
import { $PlacedFeature, $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $Holder_, $HolderSet, $HolderSet_, $Holder, $HolderGetter } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $StructureSet_, $StructureSet } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/net/minecraft/world/level/levelgen/flat" {
    export class $FlatLevelGeneratorPresets$Bootstrap {
    }
    export interface $FlatLevelGeneratorPreset extends RegistryMarked<RegistryTypes.WorldgenFlatLevelGeneratorPresetTag, RegistryTypes.WorldgenFlatLevelGeneratorPreset> {}
    export class $FlatLevelGeneratorSettings {
        static getDefault(arg0: $HolderGetter<$Biome_>, arg1: $HolderGetter<$StructureSet_>, arg2: $HolderGetter<$PlacedFeature_>): $FlatLevelGeneratorSettings;
        getBiome(): $Holder<$Biome>;
        updateLayers(): void;
        adjustGenerationSettings(arg0: $Holder_<$Biome>): $BiomeGenerationSettings;
        getLayers(): $List<$BlockState>;
        structureOverrides(): ($HolderSet<$StructureSet>) | undefined;
        setAddLakes(): void;
        setDecoration(): void;
        withBiomeAndLayers(arg0: $List_<$FlatLayerInfo>, arg1: ($HolderSet_<$StructureSet>) | undefined, arg2: $Holder_<$Biome>): $FlatLevelGeneratorSettings;
        getLayersInfo(): $List<$FlatLayerInfo>;
        static createLakesList(arg0: $HolderGetter<$PlacedFeature_>): $List<$Holder<$PlacedFeature>>;
        static getDefaultBiome(arg0: $HolderGetter<$Biome_>): $Holder<$Biome>;
        static CODEC: $Codec<$FlatLevelGeneratorSettings>;
        constructor(arg0: ($HolderSet_<$StructureSet>) | undefined, arg1: $Holder_<$Biome>, arg2: $List_<$Holder_<$PlacedFeature>>);
        get biome(): $Holder<$Biome>;
        get layers(): $List<$BlockState>;
        get layersInfo(): $List<$FlatLayerInfo>;
    }
    export class $FlatLevelGeneratorPreset extends $Record {
        settings(): $FlatLevelGeneratorSettings;
        displayItem(): $Holder<$Item>;
        static CODEC: $Codec<$Holder<$FlatLevelGeneratorPreset>>;
        static DIRECT_CODEC: $Codec<$FlatLevelGeneratorPreset>;
        constructor(arg0: $Holder_<$Item>, arg1: $FlatLevelGeneratorSettings);
    }
    /**
     * Values that may be interpreted as {@link $FlatLevelGeneratorPreset}.
     */
    export type $FlatLevelGeneratorPreset_ = RegistryTypes.WorldgenFlatLevelGeneratorPreset;
    export class $FlatLevelGeneratorPresets {
        static bootstrap(arg0: $BootstrapContext<$FlatLevelGeneratorPreset_>): void;
        static OVERWORLD: $ResourceKey<$FlatLevelGeneratorPreset>;
        static WATER_WORLD: $ResourceKey<$FlatLevelGeneratorPreset>;
        static THE_VOID: $ResourceKey<$FlatLevelGeneratorPreset>;
        static CLASSIC_FLAT: $ResourceKey<$FlatLevelGeneratorPreset>;
        static BOTTOMLESS_PIT: $ResourceKey<$FlatLevelGeneratorPreset>;
        static DESERT: $ResourceKey<$FlatLevelGeneratorPreset>;
        static REDSTONE_READY: $ResourceKey<$FlatLevelGeneratorPreset>;
        static TUNNELERS_DREAM: $ResourceKey<$FlatLevelGeneratorPreset>;
        static SNOWY_KINGDOM: $ResourceKey<$FlatLevelGeneratorPreset>;
        constructor();
    }
    export class $FlatLayerInfo {
        getBlockState(): $BlockState;
        getHeight(): number;
        static CODEC: $Codec<$FlatLayerInfo>;
        constructor(arg0: number, arg1: $Block_);
        get blockState(): $BlockState;
        get height(): number;
    }
}
