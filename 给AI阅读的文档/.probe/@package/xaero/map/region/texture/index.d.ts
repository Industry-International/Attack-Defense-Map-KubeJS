import { $DataInputStream, $DataOutputStream } from "@package/java/io";
import { $OverlayManager, $LeveledRegion, $MapUpdateFastConfig, $MapTileChunk } from "@package/xaero/map/region";
import { $TextureUploader } from "@package/xaero/map/graphics";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $DimensionHighlighterHandler } from "@package/xaero/map/highlight";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $BlockTintProvider } from "@package/xaero/map/biome";
import { $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $PoolTextureDirectBufferUnit } from "@package/xaero/map/pool/buffer";
import { $MapProcessor } from "@package/xaero/map";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $FastPalette, $Paletted2DFastBitArrayIntStorage } from "@package/xaero/map/palette";
import { $BlockStateShortShapeCache } from "@package/xaero/map/cache";

declare module "@package/xaero/map/region/texture" {
    export class $RegionTexture<T extends $RegionTexture<T>> {
        getBiomes(): $RegionTextureBiomes;
        getTimer(): number;
        getRegion(): $LeveledRegion<T>;
        postBufferWrite(arg0: $PoolTextureDirectBufferUnit): void;
        onTextureDeletion(): void;
        putTopHeight(arg0: number, arg1: number): void;
        putTopHeight(arg0: number, arg1: number, arg2: number): void;
        removeHeight(arg0: number, arg1: number): void;
        getTextureVersion(): number;
        removeTopHeight(arg0: number, arg1: number): void;
        deletePBOs(): void;
        setBufferedTextureVersion(arg0: number): void;
        bindColorTexture(arg0: boolean): number;
        deleteColorBuffer(): void;
        getBufferHasLight(): boolean;
        getColorBuffer(): $PoolTextureDirectBufferUnit;
        setCachePrepared(arg0: boolean): void;
        setToUpload(arg0: boolean): void;
        resetBiomes(): void;
        isCachePrepared(): boolean;
        writeCacheMapData(arg0: $DataOutputStream, arg1: number[], arg2: number[], arg3: $LeveledRegion<T>): void;
        readCacheData(arg0: number, arg1: number, arg2: $DataInputStream, arg3: number[], arg4: number[], arg5: $LeveledRegion<T>, arg6: $MapProcessor, arg7: number, arg8: number, arg9: boolean): void;
        getBiome(arg0: number, arg1: number): $ResourceKey<$Biome>;
        resetTimer(): void;
        shouldUpload(): boolean;
        getTopHeight(arg0: number, arg1: number): number;
        prepareBuffer(): void;
        canUpload(): boolean;
        getHeight(arg0: number, arg1: number): number;
        setBiome(arg0: number, arg1: number, arg2: $ResourceKey_<$Biome>): void;
        uploadBuffer(arg0: $DimensionHighlighterHandler, arg1: $TextureUploader, arg2: $LeveledRegion<T>, arg3: $BranchTextureRenderer, arg4: number, arg5: number): number;
        getDirectColorBuffer(): $ByteBuffer;
        isColorBufferCompressed(): boolean;
        getColorBufferFormat(): number;
        shouldIncludeInCache(): boolean;
        getBufferedTextureVersion(): number;
        deleteTexturesAndBuffers(): void;
        getGlColorTexture(): number;
        getTextureHasLight(): boolean;
        addDebugLines(arg0: $List_<string>): void;
        putHeight(arg0: number, arg1: number, arg2: number): void;
        putHeight(arg0: number, arg1: number): void;
        preUpload(arg0: $MapProcessor, arg1: $BlockTintProvider, arg2: $OverlayManager, arg3: $LeveledRegion<T>, arg4: boolean, arg5: $BlockStateShortShapeCache, arg6: $MapUpdateFastConfig): void;
        decTimer(): void;
        postUpload(arg0: $MapProcessor, arg1: $LeveledRegion<T>, arg2: boolean): void;
        isUploaded(): boolean;
        shouldDownloadFromPBO(): boolean;
        setShouldDownloadFromPBO(arg0: boolean): void;
        ensureBiomeIndexStorage(): void;
        shouldHaveContentForBranchUpdate(): boolean;
        shouldBeUsedForBranchUpdate(arg0: number): boolean;
        hasSourceData(): boolean;
        static PBO_PACK_LENGTH: number;
        static PBO_UNPACK_LENGTH: number;
        constructor(arg0: $LeveledRegion<T>);
        get biomes(): $RegionTextureBiomes;
        get timer(): number;
        get region(): $LeveledRegion<T>;
        get textureVersion(): number;
        get bufferHasLight(): boolean;
        get colorBuffer(): $PoolTextureDirectBufferUnit;
        set toUpload(value: boolean);
        get directColorBuffer(): $ByteBuffer;
        get colorBufferCompressed(): boolean;
        get colorBufferFormat(): number;
        get glColorTexture(): number;
        get textureHasLight(): boolean;
        get uploaded(): boolean;
    }
    export class $LeafRegionTexture extends $RegionTexture<$LeafRegionTexture> {
        postBufferUpdate(arg0: boolean): void;
        getTileChunk(): $MapTileChunk;
        resetHeights(): void;
        requestHighlightOnlyUpload(): void;
        static PBO_PACK_LENGTH: number;
        static PBO_UNPACK_LENGTH: number;
        constructor(arg0: $MapTileChunk);
        get tileChunk(): $MapTileChunk;
    }
    export class $BranchRegionTexture extends $RegionTexture<$BranchRegionTexture> {
        requestDownload(): void;
        checkForUpdates(arg0: $RegionTexture<never>, arg1: $RegionTexture<never>, arg2: $RegionTexture<never>, arg3: $RegionTexture<never>, arg4: $LeveledRegion<never>): boolean;
        static PBO_PACK_LENGTH: number;
        static PBO_UNPACK_LENGTH: number;
        constructor(arg0: $LeveledRegion<$BranchRegionTexture>);
    }
    export class $RegionTextureBiomes {
        getBiomeIndexStorage(): $Paletted2DFastBitArrayIntStorage;
        getRegionBiomePalette(): $FastPalette<$ResourceKey<$Biome>>;
        constructor(arg0: $Paletted2DFastBitArrayIntStorage, arg1: $FastPalette<$ResourceKey_<$Biome>>);
        get biomeIndexStorage(): $Paletted2DFastBitArrayIntStorage;
        get regionBiomePalette(): $FastPalette<$ResourceKey<$Biome>>;
    }
    export class $BranchTextureRenderer {
        render(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $RenderTarget, arg6: boolean): void;
        constructor();
    }
}
