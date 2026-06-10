import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        isChanged(): boolean;
        getX(): number;
        getZ(): number;
        getTile(arg0: number, arg1: number): $MinimapTile;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        bindTexture(arg0: number): number;
        setChanged(arg0: boolean): void;
        setBlockTextureUpload(arg0: boolean): void;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        getLevelsBuffered(): number;
        setGlTexture(arg0: number, arg1: number): void;
        getGlTexture(arg0: number): number;
        isRefreshRequired(arg0: number): boolean;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        recycleTiles(): void;
        isHasSomething(): boolean;
        updateBuffers(arg0: number, arg1: number[][]): void;
        setLevelsBuffered(arg0: number): void;
        setHasSomething(arg0: boolean): void;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): void;
        getLevelToRefresh(arg0: number): number;
        isBlockTextureUpload(): boolean;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get x(): number;
        get z(): number;
    }
    export class $MinimapTile {
        getX(): number;
        getZ(): number;
        recycle(): void;
        isSuccess(): boolean;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setSuccess(arg0: boolean): void;
        getHeight(arg0: number, arg1: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        getRed(arg0: number, arg1: number, arg2: number): number;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        getHighlights(): number[];
        setHighlightVersion(arg0: number): void;
        getHighlightVersion(): number;
        hasTerrain(): boolean;
        isHasSomething(): boolean;
        setHasTerrain(arg0: boolean): void;
        setHighlights(arg0: number[]): void;
        setWasTransfered(arg0: boolean): void;
        setHasSomething(arg0: boolean): void;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isSlimeChunk(): boolean;
        isChunkGrid(): boolean;
        isWasTransfered(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get x(): number;
        get z(): number;
        get chunkGrid(): boolean;
    }
}
