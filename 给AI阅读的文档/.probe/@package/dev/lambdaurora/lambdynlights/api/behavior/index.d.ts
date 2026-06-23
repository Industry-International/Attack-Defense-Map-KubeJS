import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Record } from "@package/java/lang";
import { $OptionalInt } from "@package/java/util";
import { $Vector3d } from "@package/org/joml";

declare module "@package/dev/lambdaurora/lambdynlights/api/behavior" {
    export class $BeaconLightBehavior extends $Record implements $DynamicLightBehavior {
        x(): number;
        z(): number;
        y(): $OptionalInt;
        level(): $Level;
        lightAtPos(pos: $BlockPos_, falloffRatio: number): number;
        hasChanged(): boolean;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        luminance(): number;
        isRemoved(): boolean;
        constructor(x: number, z: number, luminance: number, level: $Level_);
        constructor(x: number, y: $OptionalInt, z: number, luminance: number, level: $Level_);
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
    }
    export class $DynamicLightBehavior {
    }
    export interface $DynamicLightBehavior {
        lightAtPos(arg0: $BlockPos_, arg1: number): number;
        hasChanged(): boolean;
        isRemoved(): boolean;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
    }
    export class $LineLightBehavior implements $DynamicLightBehavior {
        lightAtPos(pos: $BlockPos_, falloffRatio: number): number;
        hasChanged(): boolean;
        setLuminance(luminance: number): void;
        getLuminance(): number;
        getEndPoint(): $Vector3d;
        getStartPoint(): $Vector3d;
        setEndPoint(x: number, y: number, z: number): void;
        setEndPoint(endPoint: $Vector3d): void;
        setStartPoint(startPoint: $Vector3d): void;
        setStartPoint(x: number, y: number, z: number): void;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        isRemoved(): boolean;
        constructor(startPoint: $Vector3d, endPoint: $Vector3d, luminance: number);
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
    }
    export class $DynamicLightBehavior$BoundingBox extends $Record {
        endX(): number;
        startZ(): number;
        endY(): number;
        endZ(): number;
        startX(): number;
        startY(): number;
        constructor(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number);
    }
}
