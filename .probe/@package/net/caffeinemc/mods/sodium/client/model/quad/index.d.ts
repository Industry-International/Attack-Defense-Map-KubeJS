import { $Direction } from "@package/net/minecraft/core";
import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
export * as properties from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";

declare module "@package/net/caffeinemc/mods/sodium/client/model/quad" {
    export class $ModelQuadView {
    }
    export interface $ModelQuadView {
        getFlags(): number;
        getLight(arg0: number): number;
        getY(arg0: number): number;
        getX(arg0: number): number;
        hasColor(): boolean;
        getColor(arg0: number): number;
        getZ(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        getLightFace(): $Direction;
        getFaceNormal(): number;
        getColorIndex(): number;
        getVertexNormal(arg0: number): number;
        getAccurateNormal(arg0: number): number;
        calculateNormal(): number;
        getTexU(arg0: number): number;
        getTexV(arg0: number): number;
        get flags(): number;
        get sprite(): $TextureAtlasSprite;
        get lightFace(): $Direction;
        get faceNormal(): number;
        get colorIndex(): number;
    }
    export class $BakedQuadView {
    }
    export interface $BakedQuadView extends $ModelQuadView {
        hasShade(): boolean;
        getFaceNormal(): number;
        hasAO(): boolean;
        getNormalFace(): $ModelQuadFacing;
        get faceNormal(): number;
        get normalFace(): $ModelQuadFacing;
    }
}
