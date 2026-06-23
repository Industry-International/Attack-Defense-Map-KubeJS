import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        getLevelToRefresh(arg0: number): number;
        isHasSomething(): boolean;
        updateBuffers(arg0: number, arg1: number[][]): void;
        setLevelsBuffered(arg0: number): void;
        recycleTiles(): void;
        getLevelsBuffered(): number;
        setGlTexture(arg0: number, arg1: number): void;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        isRefreshRequired(arg0: number): boolean;
        getGlTexture(arg0: number): number;
        setHasSomething(arg0: boolean): void;
        setChanged(arg0: boolean): void;
        bindTexture(arg0: number): number;
        getTile(arg0: number, arg1: number): $MinimapTile;
        getZ(): number;
        getX(): number;
        setBlockTextureUpload(arg0: boolean): void;
        isChanged(): boolean;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        isBlockTextureUpload(): boolean;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): void;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get z(): number;
        get x(): number;
    }
    export class $MinimapTile {
        isWasTransfered(): boolean;
        isHasSomething(): boolean;
        setHasSomething(arg0: boolean): void;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setWasTransfered(arg0: boolean): void;
        setHighlights(arg0: number[]): void;
        setHasTerrain(arg0: boolean): void;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        isSuccess(): boolean;
        setSuccess(arg0: boolean): void;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getHeight(arg0: number, arg1: number): number;
        getZ(): number;
        recycle(): void;
        getX(): number;
        getHighlightVersion(): number;
        setHighlightVersion(arg0: number): void;
        getHighlights(): number[];
        hasTerrain(): boolean;
        isSlimeChunk(): boolean;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isChunkGrid(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get z(): number;
        get x(): number;
        get chunkGrid(): boolean;
    }
}
