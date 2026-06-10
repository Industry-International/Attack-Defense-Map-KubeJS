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
        postUpload(arg0: $MapProcessor, arg1: $LeveledRegion<T>, arg2: boolean): void;
        preUpload(arg0: $MapProcessor, arg1: $BlockTintProvider, arg2: $OverlayManager, arg3: $LeveledRegion<T>, arg4: boolean, arg5: $BlockStateShortShapeCache, arg6: $MapUpdateFastConfig): void;
        setBiome(arg0: number, arg1: number, arg2: $ResourceKey_<$Biome>): void;
        isUploaded(): boolean;
        decTimer(): void;
        setBufferedTextureVersion(arg0: number): void;
        getHeight(arg0: number, arg1: number): number;
        getBiome(arg0: number, arg1: number): $ResourceKey<$Biome>;
        deletePBOs(): void;
        canUpload(): boolean;
        getBiomes(): $RegionTextureBiomes;
        resetTimer(): void;
        prepareBuffer(): void;
        shouldUpload(): boolean;
        getTopHeight(arg0: number, arg1: number): number;
        uploadBuffer(arg0: $DimensionHighlighterHandler, arg1: $TextureUploader, arg2: $LeveledRegion<T>, arg3: $BranchTextureRenderer, arg4: number, arg5: number): number;
        shouldBeUsedForBranchUpdate(arg0: number): boolean;
        shouldHaveContentForBranchUpdate(): boolean;
        deleteColorBuffer(): void;
        bindColorTexture(arg0: boolean): number;
        getBufferHasLight(): boolean;
        getColorBuffer(): $PoolTextureDirectBufferUnit;
        setToUpload(arg0: boolean): void;
        readCacheData(arg0: number, arg1: number, arg2: $DataInputStream, arg3: number[], arg4: number[], arg5: $LeveledRegion<T>, arg6: $MapProcessor, arg7: number, arg8: number, arg9: boolean): void;
        isCachePrepared(): boolean;
        setCachePrepared(arg0: boolean): void;
        resetBiomes(): void;
        writeCacheMapData(arg0: $DataOutputStream, arg1: number[], arg2: number[], arg3: $LeveledRegion<T>): void;
        getTextureHasLight(): boolean;
        addDebugLines(arg0: $List_<string>): void;
        getGlColorTexture(): number;
        getColorBufferFormat(): number;
        isColorBufferCompressed(): boolean;
        getDirectColorBuffer(): $ByteBuffer;
        deleteTexturesAndBuffers(): void;
        shouldIncludeInCache(): boolean;
        getBufferedTextureVersion(): number;
        getTextureVersion(): number;
        removeTopHeight(arg0: number, arg1: number): void;
        onTextureDeletion(): void;
        postBufferWrite(arg0: $PoolTextureDirectBufferUnit): void;
        putTopHeight(arg0: number, arg1: number, arg2: number): void;
        putTopHeight(arg0: number, arg1: number): void;
        removeHeight(arg0: number, arg1: number): void;
        hasSourceData(): boolean;
        putHeight(arg0: number, arg1: number, arg2: number): void;
        putHeight(arg0: number, arg1: number): void;
        shouldDownloadFromPBO(): boolean;
        setShouldDownloadFromPBO(arg0: boolean): void;
        ensureBiomeIndexStorage(): void;
        static PBO_PACK_LENGTH: number;
        static PBO_UNPACK_LENGTH: number;
        constructor(arg0: $LeveledRegion<T>);
        get region(): $LeveledRegion<T>;
        get timer(): number;
        get uploaded(): boolean;
        get biomes(): $RegionTextureBiomes;
        get bufferHasLight(): boolean;
        get colorBuffer(): $PoolTextureDirectBufferUnit;
        set toUpload(value: boolean);
        get textureHasLight(): boolean;
        get glColorTexture(): number;
        get colorBufferFormat(): number;
        get colorBufferCompressed(): boolean;
        get directColorBuffer(): $ByteBuffer;
        get textureVersion(): number;
    }
    export class $LeafRegionTexture extends $RegionTexture<$LeafRegionTexture> {
        requestHighlightOnlyUpload(): void;
        resetHeights(): void;
        getTileChunk(): $MapTileChunk;
        postBufferUpdate(arg0: boolean): void;
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
