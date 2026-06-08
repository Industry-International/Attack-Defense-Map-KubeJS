import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        getX(): number;
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        isChanged(): boolean;
        setHasSomething(arg0: boolean): void;
        getGlTexture(arg0: number): number;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        isRefreshRequired(arg0: number): boolean;
        getLevelsBuffered(): number;
        isHasSomething(): boolean;
        setLevelsBuffered(arg0: number): void;
        recycleTiles(): void;
        setGlTexture(arg0: number, arg1: number): void;
        updateBuffers(arg0: number, arg1: number[][]): void;
        getZ(): number;
        getTile(arg0: number, arg1: number): $MinimapTile;
        setBlockTextureUpload(arg0: boolean): void;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        setChanged(arg0: boolean): void;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        bindTexture(arg0: number): number;
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
        isSuccess(): boolean;
        setHasSomething(arg0: boolean): void;
        setHighlights(arg0: number[]): void;
        setWasTransfered(arg0: boolean): void;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setHasTerrain(arg0: boolean): void;
        isHasSomething(): boolean;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        isChunkGrid(): boolean;
        getHighlights(): number[];
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getHeight(arg0: number, arg1: number): number;
        getZ(): number;
        recycle(): void;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        getHighlightVersion(): number;
        setHighlightVersion(arg0: number): void;
        setSuccess(arg0: boolean): void;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        isSlimeChunk(): boolean;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        hasTerrain(): boolean;
        isWasTransfered(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get x(): number;
        get chunkGrid(): boolean;
        get z(): number;
    }
}
