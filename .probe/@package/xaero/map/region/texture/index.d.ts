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
        getRegion(): $LeveledRegion<T>;
        getTimer(): number;
        getHeight(arg0: number, arg1: number): number;
        canUpload(): boolean;
        isUploaded(): boolean;
        preUpload(arg0: $MapProcessor, arg1: $BlockTintProvider, arg2: $OverlayManager, arg3: $LeveledRegion<T>, arg4: boolean, arg5: $BlockStateShortShapeCache, arg6: $MapUpdateFastConfig): void;
        postUpload(arg0: $MapProcessor, arg1: $LeveledRegion<T>, arg2: boolean): void;
        decTimer(): void;
        putHeight(arg0: number, arg1: number): void;
        putHeight(arg0: number, arg1: number, arg2: number): void;
        getBiomes(): $RegionTextureBiomes;
        getBiome(arg0: number, arg1: number): $ResourceKey<$Biome>;
        deleteColorBuffer(): void;
        bindColorTexture(arg0: boolean): number;
        getColorBuffer(): $PoolTextureDirectBufferUnit;
        getBufferHasLight(): boolean;
        setCachePrepared(arg0: boolean): void;
        readCacheData(arg0: number, arg1: number, arg2: $DataInputStream, arg3: number[], arg4: number[], arg5: $LeveledRegion<T>, arg6: $MapProcessor, arg7: number, arg8: number, arg9: boolean): void;
        resetBiomes(): void;
        writeCacheMapData(arg0: $DataOutputStream, arg1: number[], arg2: number[], arg3: $LeveledRegion<T>): void;
        isCachePrepared(): boolean;
        setToUpload(arg0: boolean): void;
        isColorBufferCompressed(): boolean;
        getColorBufferFormat(): number;
        getDirectColorBuffer(): $ByteBuffer;
        getBufferedTextureVersion(): number;
        shouldIncludeInCache(): boolean;
        deleteTexturesAndBuffers(): void;
        setBiome(arg0: number, arg1: number, arg2: $ResourceKey_<$Biome>): void;
        deletePBOs(): void;
        resetTimer(): void;
        prepareBuffer(): void;
        getTopHeight(arg0: number, arg1: number): number;
        shouldUpload(): boolean;
        getTextureHasLight(): boolean;
        getGlColorTexture(): number;
        addDebugLines(arg0: $List_<string>): void;
        uploadBuffer(arg0: $DimensionHighlighterHandler, arg1: $TextureUploader, arg2: $LeveledRegion<T>, arg3: $BranchTextureRenderer, arg4: number, arg5: number): number;
        shouldHaveContentForBranchUpdate(): boolean;
        shouldBeUsedForBranchUpdate(arg0: number): boolean;
        setShouldDownloadFromPBO(arg0: boolean): void;
        ensureBiomeIndexStorage(): void;
        shouldDownloadFromPBO(): boolean;
        putTopHeight(arg0: number, arg1: number, arg2: number): void;
        putTopHeight(arg0: number, arg1: number): void;
        removeTopHeight(arg0: number, arg1: number): void;
        onTextureDeletion(): void;
        removeHeight(arg0: number, arg1: number): void;
        postBufferWrite(arg0: $PoolTextureDirectBufferUnit): void;
        hasSourceData(): boolean;
        getTextureVersion(): number;
        setBufferedTextureVersion(arg0: number): void;
        static PBO_PACK_LENGTH: number;
        static PBO_UNPACK_LENGTH: number;
        constructor(arg0: $LeveledRegion<T>);
        get region(): $LeveledRegion<T>;
        get timer(): number;
        get uploaded(): boolean;
        get biomes(): $RegionTextureBiomes;
        get colorBuffer(): $PoolTextureDirectBufferUnit;
        get bufferHasLight(): boolean;
        set toUpload(value: boolean);
        get colorBufferCompressed(): boolean;
        get colorBufferFormat(): number;
        get directColorBuffer(): $ByteBuffer;
        get textureHasLight(): boolean;
        get glColorTexture(): number;
        get textureVersion(): number;
    }
    export class $LeafRegionTexture extends $RegionTexture<$LeafRegionTexture> {
        getTileChunk(): $MapTileChunk;
        resetHeights(): void;
        postBufferUpdate(arg0: boolean): void;
        requestHighlightOnlyUpload(): void;
        static PBO_PACK_LENGTH: number;
        static PBO_UNPACK_LENGTH: number;
        constructor(arg0: $MapTileChunk);
        get tileChunk(): $MapTileChunk;
    }
    export class $BranchRegionTexture extends $RegionTexture<$BranchRegionTexture> {
        checkForUpdates(arg0: $RegionTexture<never>, arg1: $RegionTexture<never>, arg2: $RegionTexture<never>, arg3: $RegionTexture<never>, arg4: $LeveledRegion<never>): boolean;
        requestDownload(): void;
        static PBO_PACK_LENGTH: number;
        static PBO_UNPACK_LENGTH: number;
        constructor(arg0: $LeveledRegion<$BranchRegionTexture>);
    }
    export class $RegionTextureBiomes {
        getRegionBiomePalette(): $FastPalette<$ResourceKey<$Biome>>;
        getBiomeIndexStorage(): $Paletted2DFastBitArrayIntStorage;
        constructor(arg0: $Paletted2DFastBitArrayIntStorage, arg1: $FastPalette<$ResourceKey_<$Biome>>);
        get regionBiomePalette(): $FastPalette<$ResourceKey<$Biome>>;
        get biomeIndexStorage(): $Paletted2DFastBitArrayIntStorage;
    }
    export class $BranchTextureRenderer {
        render(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $RenderTarget, arg6: boolean): void;
        constructor();
    }
}
