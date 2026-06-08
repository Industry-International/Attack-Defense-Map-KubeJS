import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        getX(): number;
        getZ(): number;
        isChanged(): boolean;
        setChanged(arg0: boolean): void;
        getTile(arg0: number, arg1: number): $MinimapTile;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        recycleTiles(): void;
        setHasSomething(arg0: boolean): void;
        getGlTexture(arg0: number): number;
        isHasSomething(): boolean;
        setLevelsBuffered(arg0: number): void;
        getLevelsBuffered(): number;
        updateBuffers(arg0: number, arg1: number[][]): void;
        isRefreshRequired(arg0: number): boolean;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        setGlTexture(arg0: number, arg1: number): void;
        setBlockTextureUpload(arg0: boolean): void;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
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
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getX(): number;
        isSuccess(): boolean;
        recycle(): void;
        getZ(): number;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getHeight(arg0: number, arg1: number): number;
        setSuccess(arg0: boolean): void;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        hasTerrain(): boolean;
        setHasSomething(arg0: boolean): void;
        setWasTransfered(arg0: boolean): void;
        isHasSomething(): boolean;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setHighlights(arg0: number[]): void;
        setHasTerrain(arg0: boolean): void;
        setHighlightVersion(arg0: number): void;
        getHighlightVersion(): number;
        isSlimeChunk(): boolean;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        getHighlights(): number[];
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
