import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $Vector3fc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad" {
    export class $TQuad {
        getQuantizedDotProduct(): number;
        getFacing(): $ModelQuadFacing;
        getAccurateNormal(): $Vector3fc;
        getCenter(): $Vector3fc;
        getAccurateDotProduct(): number;
        getQuadHash(): number;
        getExtents(): number[];
        getVertexPositions(): number[];
        static extentsEqual(arg0: number[], arg1: number[]): boolean;
        extentsEqual(arg0: number[]): boolean;
        getPackedNormal(): number;
        getQuantizedNormal(): $Vector3fc;
        static extentsIntersect(arg0: $TQuad, arg1: $TQuad): boolean;
        static extentsIntersect(arg0: number[], arg1: number[]): boolean;
        useQuantizedFacing(): $ModelQuadFacing;
        static VERTEX_EPSILON: number;
        static QUANTIZE_EPSILON: number;
        get quantizedDotProduct(): number;
        get facing(): $ModelQuadFacing;
        get accurateNormal(): $Vector3fc;
        get center(): $Vector3fc;
        get accurateDotProduct(): number;
        get quadHash(): number;
        get extents(): number[];
        get vertexPositions(): number[];
        get packedNormal(): number;
        get quantizedNormal(): $Vector3fc;
    }
}
