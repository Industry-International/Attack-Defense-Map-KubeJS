import { $Direction } from "@package/net/minecraft/core";
import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
export * as properties from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";

declare module "@package/net/caffeinemc/mods/sodium/client/model/quad" {
    export class $ModelQuadView {
    }
    export interface $ModelQuadView {
        getY(arg0: number): number;
        getX(arg0: number): number;
        getFlags(): number;
        getColor(arg0: number): number;
        getZ(arg0: number): number;
        hasColor(): boolean;
        getSprite(): $TextureAtlasSprite;
        getVertexNormal(arg0: number): number;
        getFaceNormal(): number;
        getLightFace(): $Direction;
        calculateNormal(): number;
        getAccurateNormal(arg0: number): number;
        getColorIndex(): number;
        getTexU(arg0: number): number;
        getTexV(arg0: number): number;
        getLight(arg0: number): number;
        get flags(): number;
        get sprite(): $TextureAtlasSprite;
        get faceNormal(): number;
        get lightFace(): $Direction;
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
