import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/com/tacz/guns/client/resource/pojo/model" {
    export class $CubesItem {
        getSize(): $List<number>;
        getOrigin(): $List<number>;
        setMirror(arg0: boolean): void;
        getRotation(): $List<number>;
        getPivot(): $List<number>;
        getInflate(): number;
        getFaceUv(): $FaceUVsItem;
        isMirror(): boolean;
        getUv(): $List<number>;
        isHasMirror(): boolean;
        constructor();
        get size(): $List<number>;
        get origin(): $List<number>;
        get rotation(): $List<number>;
        get pivot(): $List<number>;
        get inflate(): number;
        get faceUv(): $FaceUVsItem;
        get uv(): $List<number>;
        get hasMirror(): boolean;
    }
    export class $GeometryModelLegacy {
        deco(): $GeometryModelLegacy;
        getTextureWidth(): number;
        getTextureHeight(): number;
        getVisibleBoundsHeight(): number;
        getVisibleBoundsOffset(): $List<number>;
        getVisibleBoundsWidth(): number;
        getBones(): $List<$BonesItem>;
        constructor();
        get textureWidth(): number;
        get textureHeight(): number;
        get visibleBoundsHeight(): number;
        get visibleBoundsOffset(): $List<number>;
        get visibleBoundsWidth(): number;
        get bones(): $List<$BonesItem>;
    }
    export class $GeometryModelNew {
        getDescription(): $Description;
        deco(): $GeometryModelNew;
        getBones(): $List<$BonesItem>;
        constructor();
        get description(): $Description;
        get bones(): $List<$BonesItem>;
    }
    export class $BedrockModelPOJO {
        getGeometryModelLegacy(): $GeometryModelLegacy;
        getGeometryModelNew(): $GeometryModelNew;
        getFormatVersion(): string;
        constructor();
        get geometryModelLegacy(): $GeometryModelLegacy;
        get geometryModelNew(): $GeometryModelNew;
        get formatVersion(): string;
    }
    export class $BonesItem {
        getName(): string;
        getParent(): string;
        getRotation(): $List<number>;
        getPivot(): $List<number>;
        getCubes(): $List<$CubesItem>;
        isMirror(): boolean;
        constructor();
        get name(): string;
        get parent(): string;
        get rotation(): $List<number>;
        get pivot(): $List<number>;
        get cubes(): $List<$CubesItem>;
        get mirror(): boolean;
    }
    export class $BedrockVersion extends $Enum<$BedrockVersion> {
        static values(): $BedrockVersion[];
        static valueOf(arg0: string): $BedrockVersion;
        getVersion(): string;
        static isLegacyVersion(arg0: $BedrockModelPOJO): boolean;
        static isNewVersion(arg0: $BedrockModelPOJO): boolean;
        static NEW: $BedrockVersion;
        static LEGACY: $BedrockVersion;
        get version(): string;
    }
    /**
     * Values that may be interpreted as {@link $BedrockVersion}.
     */
    export type $BedrockVersion_ = "legacy" | "new";
    export class $Description {
        getTextureWidth(): number;
        getTextureHeight(): number;
        getVisibleBoundsHeight(): number;
        getVisibleBoundsOffset(): $List<number>;
        getVisibleBoundsWidth(): number;
        constructor();
        get textureWidth(): number;
        get textureHeight(): number;
        get visibleBoundsHeight(): number;
        get visibleBoundsOffset(): $List<number>;
        get visibleBoundsWidth(): number;
    }
}
