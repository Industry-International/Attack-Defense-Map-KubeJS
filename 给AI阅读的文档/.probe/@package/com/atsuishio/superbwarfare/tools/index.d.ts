import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Object, $Enum, $Record } from "@package/java/lang";
import { $Vec3_, $AABB_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Lazy } from "@package/kotlin";
import { $Quaterniond, $Vector3d } from "@package/org/joml";

declare module "@package/com/atsuishio/superbwarfare/tools" {
    export class $ParticleTool$ParticleType extends $Enum<$ParticleTool$ParticleType> {
        static values(): $ParticleTool$ParticleType[];
        static valueOf(arg0: string): $ParticleTool$ParticleType;
        static getEntries(): $EnumEntries<$ParticleTool$ParticleType>;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static Companion: $ParticleTool$ParticleType$Companion;
        static SMALL: $ParticleTool$ParticleType;
        static MINI: $ParticleTool$ParticleType;
        static MEDIUM: $ParticleTool$ParticleType;
        static LARGE: $ParticleTool$ParticleType;
        static HUGE: $ParticleTool$ParticleType;
        static GIANT: $ParticleTool$ParticleType;
        static get entries(): $EnumEntries<$ParticleTool$ParticleType>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleTool$ParticleType}.
     */
    export type $ParticleTool$ParticleType_ = "mini" | "small" | "medium" | "large" | "huge" | "giant";
    export class $OBB$Part extends $Enum<$OBB$Part> {
        static values(): $OBB$Part[];
        static valueOf(arg0: string): $OBB$Part;
        static getEntries(): $EnumEntries<$OBB$Part>;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static Companion: $OBB$Part$Companion;
        static SUB_ENGINE: $OBB$Part;
        static MAIN_ENGINE: $OBB$Part;
        static WHEEL_RIGHT: $OBB$Part;
        static WHEEL_LEFT: $OBB$Part;
        static TURRET: $OBB$Part;
        static INTERACTIVE: $OBB$Part;
        static EMPTY: $OBB$Part;
        static BODY: $OBB$Part;
        static get entries(): $EnumEntries<$OBB$Part>;
    }
    /**
     * Values that may be interpreted as {@link $OBB$Part}.
     */
    export type $OBB$Part_ = "empty" | "wheel_left" | "wheel_right" | "turret" | "main_engine" | "sub_engine" | "body" | "interactive";
    export class $OBB$Companion {
        vec3ToVector3d(arg0: $Vec3_): $Vector3d;
        vector3dToVec3(arg0: $Vector3d): $Vec3;
        isColliding(arg0: $OBB_, arg1: $OBB_): boolean;
        isColliding(arg0: $OBB_, arg1: $AABB_): boolean;
        getLookingObb(arg0: $Player, arg1: number): $OBB;
        getClosestPointOBB(arg0: $Vector3d, arg1: $OBB_): $Vector3d;
        rayIntersect(arg0: $OBB_, arg1: $Vec3_, arg2: $Vec3_): $Vec3;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ParticleTool$ParticleType$Companion {
        serializer(): $KSerializer<$ParticleTool$ParticleType>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $OBB extends $Record {
        inflate(arg0: number, arg1: number, arg2: number): $OBB;
        inflate(arg0: number): $OBB;
        contains(arg0: $Vec3_): boolean;
        copy(arg0: $Vector3d, arg1: $Vector3d, arg2: $Quaterniond, arg3: $OBB$Part_): $OBB;
        move(arg0: $Vec3_): $OBB;
        clip(arg0: $Vector3d, arg1: $Vector3d): ($Vector3d) | undefined;
        component1(): $Vector3d;
        component3(): $Quaterniond;
        component4(): $OBB$Part;
        component2(): $Vector3d;
        static vec3ToVector3d(arg0: $Vec3_): $Vector3d;
        static vector3dToVec3(arg0: $Vector3d): $Vec3;
        rotation(): $Quaterniond;
        setCenter(arg0: $Vector3d): void;
        static copy$default(arg0: $OBB_, arg1: $Vector3d, arg2: $Vector3d, arg3: $Quaterniond, arg4: $OBB$Part_, arg5: number, arg6: $Object): $OBB;
        updateRotation(arg0: $Quaterniond): void;
        static isColliding(arg0: $OBB_, arg1: $OBB_): boolean;
        static isColliding(arg0: $OBB_, arg1: $AABB_): boolean;
        getVertices(): $Vector3d[];
        extents(): $Vector3d;
        static getLookingObb(arg0: $Player, arg1: number): $OBB;
        getAxes(): $Vector3d[];
        setExtents(arg0: $Vector3d): void;
        static getClosestPointOBB(arg0: $Vector3d, arg1: $OBB_): $Vector3d;
        getEmbeddingDepth(arg0: $Vec3_): number;
        getEmbeddingFace(arg0: $Vec3_): number;
        static Companion: $OBB$Companion;
        center: $Vector3d;
        part: $OBB$Part;
        constructor(arg0: $Vector3d, arg1: $Vector3d, arg2: $Quaterniond, arg3: $OBB$Part_);
        get vertices(): $Vector3d[];
        get axes(): $Vector3d[];
    }
    export class $OBB$Part$Companion {
        serializer(): $KSerializer<$OBB$Part>;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
