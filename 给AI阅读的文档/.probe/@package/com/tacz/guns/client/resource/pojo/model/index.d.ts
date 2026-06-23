import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/com/tacz/guns/client/resource/pojo/model" {
    export class $CubesItem {
        getSize(): $List<number>;
        getOrigin(): $List<number>;
        isMirror(): boolean;
        getFaceUv(): $FaceUVsItem;
        getUv(): $List<number>;
        getInflate(): number;
        getRotation(): $List<number>;
        getPivot(): $List<number>;
        isHasMirror(): boolean;
        setMirror(arg0: boolean): void;
        constructor();
        get size(): $List<number>;
        get origin(): $List<number>;
        get faceUv(): $FaceUVsItem;
        get uv(): $List<number>;
        get inflate(): number;
        get rotation(): $List<number>;
        get pivot(): $List<number>;
        get hasMirror(): boolean;
    }
    export class $GeometryModelLegacy {
        deco(): $GeometryModelLegacy;
        getBones(): $List<$BonesItem>;
        getTextureWidth(): number;
        getTextureHeight(): number;
        getVisibleBoundsWidth(): number;
        getVisibleBoundsHeight(): number;
        getVisibleBoundsOffset(): $List<number>;
        constructor();
        get bones(): $List<$BonesItem>;
        get textureWidth(): number;
        get textureHeight(): number;
        get visibleBoundsWidth(): number;
        get visibleBoundsHeight(): number;
        get visibleBoundsOffset(): $List<number>;
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
        isMirror(): boolean;
        getCubes(): $List<$CubesItem>;
        getRotation(): $List<number>;
        getPivot(): $List<number>;
        constructor();
        get name(): string;
        get parent(): string;
        get mirror(): boolean;
        get cubes(): $List<$CubesItem>;
        get rotation(): $List<number>;
        get pivot(): $List<number>;
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
        getVisibleBoundsWidth(): number;
        getVisibleBoundsHeight(): number;
        getVisibleBoundsOffset(): $List<number>;
        constructor();
        get textureWidth(): number;
        get textureHeight(): number;
        get visibleBoundsWidth(): number;
        get visibleBoundsHeight(): number;
        get visibleBoundsOffset(): $List<number>;
    }
}
