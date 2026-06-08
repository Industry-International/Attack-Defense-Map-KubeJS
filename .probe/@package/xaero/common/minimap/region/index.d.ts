import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        getTile(arg0: number, arg1: number): $MinimapTile;
        getX(): number;
        setBlockTextureUpload(arg0: boolean): void;
        setChanged(arg0: boolean): void;
        getZ(): number;
        bindTexture(arg0: number): number;
        isBlockTextureUpload(): boolean;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        isChanged(): boolean;
        isHasSomething(): boolean;
        updateBuffers(arg0: number, arg1: number[][]): void;
        setLevelsBuffered(arg0: number): void;
        getLevelsBuffered(): number;
        recycleTiles(): void;
        isRefreshRequired(arg0: number): boolean;
        setGlTexture(arg0: number, arg1: number): void;
        setHasSomething(arg0: boolean): void;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        getGlTexture(arg0: number): number;
        getLevelToRefresh(arg0: number): number;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): void;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get x(): number;
        get z(): number;
    }
    export class $MinimapTile {
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getX(): number;
        isSuccess(): boolean;
        setSuccess(arg0: boolean): void;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getHighlightVersion(): number;
        setHighlightVersion(arg0: number): void;
        getZ(): number;
        getHeight(arg0: number, arg1: number): number;
        recycle(): void;
        hasTerrain(): boolean;
        isChunkGrid(): boolean;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        getHighlights(): number[];
        isHasSomething(): boolean;
        setHasTerrain(arg0: boolean): void;
        setHighlights(arg0: number[]): void;
        setHasSomething(arg0: boolean): void;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setWasTransfered(arg0: boolean): void;
        isSlimeChunk(): boolean;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isWasTransfered(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get x(): number;
        get z(): number;
        get chunkGrid(): boolean;
    }
}
