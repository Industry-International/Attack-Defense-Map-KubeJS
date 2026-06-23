import { $Direction_ } from "@package/net/minecraft/core";
import { $ModelPart, $PartPose, $ModelPart$Cube } from "@package/net/minecraft/client/model/geom";
import { $Set_, $List, $List_ } from "@package/java/util";

declare module "@package/net/minecraft/client/model/geom/builders" {
    export class $CubeDefinition {
        bake(texWidth: number, texHeight: number): $ModelPart$Cube;
        constructor(comment: string | null, texCoordU: number, texCoordV: number, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, grow: $CubeDeformation, mirror: boolean, texScaleU: number, texScaleV: number, visibleFaces: $Set_<$Direction_>);
    }
    export class $CubeDeformation {
        extend(growX: number, growY: number, growZ: number): $CubeDeformation;
        extend(grow: number): $CubeDeformation;
        growX: number;
        growY: number;
        growZ: number;
        static NONE: $CubeDeformation;
        constructor(growX: number, growY: number, growZ: number);
        constructor(grow: number);
    }
    export class $PartDefinition {
        getChild(name: string): $PartDefinition;
        addOrReplaceChild(name: string, cubes: $CubeListBuilder, partPose: $PartPose): $PartDefinition;
        bake(texWidth: number, texHeight: number): $ModelPart;
        constructor(cubes: $List_<$CubeDefinition>, partPose: $PartPose);
    }
    export class $LayerDefinition {
        static create(mesh: $MeshDefinition, texWidth: number, texHeight: number): $LayerDefinition;
        bakeRoot(): $ModelPart;
    }
    export class $CubeListBuilder {
        static create(): $CubeListBuilder;
        getCubes(): $List<$CubeDefinition>;
        mirror(): $CubeListBuilder;
        mirror(mirror: boolean): $CubeListBuilder;
        texOffs(xTexOffs: number, yTexOffs: number): $CubeListBuilder;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, cubeDeformation: $CubeDeformation, texScaleU: number, texScaleV: number): $CubeListBuilder;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, mirror: boolean): $CubeListBuilder;
        addBox(comment: string, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number): $CubeListBuilder;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, cubeDeformation: $CubeDeformation): $CubeListBuilder;
        addBox(comment: string, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, cubeDeformation: $CubeDeformation, xTexOffs: number, yTexOffs: number): $CubeListBuilder;
        addBox(comment: string, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, xTexOffs: number, yTexOffs: number): $CubeListBuilder;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number): $CubeListBuilder;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, visibleFaces: $Set_<$Direction_>): $CubeListBuilder;
        addBox(comment: string, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, cubeDeformation: $CubeDeformation): $CubeListBuilder;
        constructor();
        get cubes(): $List<$CubeDefinition>;
    }
    export class $MaterialDefinition {
        xTexSize: number;
        yTexSize: number;
        constructor(xTexSize: number, yTexSize: number);
    }
    export class $MeshDefinition {
        getRoot(): $PartDefinition;
        constructor();
        get root(): $PartDefinition;
    }
    export class $UVPair {
        v(): number;
        u(): number;
        constructor(u: number, v: number);
    }
}
