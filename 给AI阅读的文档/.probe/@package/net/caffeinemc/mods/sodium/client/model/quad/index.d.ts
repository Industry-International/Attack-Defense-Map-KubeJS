import { $Direction } from "@package/net/minecraft/core";
import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
export * as properties from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";

declare module "@package/net/caffeinemc/mods/sodium/client/model/quad" {
    export class $ModelQuadView {
    }
    export interface $ModelQuadView {
        getFlags(): number;
        getY(arg0: number): number;
        getLight(arg0: number): number;
        getColor(arg0: number): number;
        getColorIndex(): number;
        getVertexNormal(arg0: number): number;
        getFaceNormal(): number;
        getLightFace(): $Direction;
        calculateNormal(): number;
        getAccurateNormal(arg0: number): number;
        hasColor(): boolean;
        getTexV(arg0: number): number;
        getTexU(arg0: number): number;
        getZ(arg0: number): number;
        getX(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        get flags(): number;
        get colorIndex(): number;
        get faceNormal(): number;
        get lightFace(): $Direction;
        get sprite(): $TextureAtlasSprite;
    }
    export class $BakedQuadView {
    }
    export interface $BakedQuadView extends $ModelQuadView {
        getNormalFace(): $ModelQuadFacing;
        getFaceNormal(): number;
        hasShade(): boolean;
        hasAO(): boolean;
        get normalFace(): $ModelQuadFacing;
        get faceNormal(): number;
    }
}
