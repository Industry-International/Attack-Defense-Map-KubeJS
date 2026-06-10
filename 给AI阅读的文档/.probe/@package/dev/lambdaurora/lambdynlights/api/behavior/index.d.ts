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
        luminance(): number;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        hasChanged(): boolean;
        lightAtPos(pos: $BlockPos_, falloffRatio: number): number;
        isRemoved(): boolean;
        constructor(x: number, z: number, luminance: number, level: $Level_);
        constructor(x: number, y: $OptionalInt, z: number, luminance: number, level: $Level_);
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
    }
    export class $DynamicLightBehavior {
    }
    export interface $DynamicLightBehavior {
        isRemoved(): boolean;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        hasChanged(): boolean;
        lightAtPos(arg0: $BlockPos_, arg1: number): number;
        get removed(): boolean;
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
    }
    export class $LineLightBehavior implements $DynamicLightBehavior {
        setLuminance(luminance: number): void;
        getLuminance(): number;
        setStartPoint(x: number, y: number, z: number): void;
        setStartPoint(startPoint: $Vector3d): void;
        getEndPoint(): $Vector3d;
        setEndPoint(x: number, y: number, z: number): void;
        setEndPoint(endPoint: $Vector3d): void;
        getStartPoint(): $Vector3d;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        hasChanged(): boolean;
        lightAtPos(pos: $BlockPos_, falloffRatio: number): number;
        isRemoved(): boolean;
        constructor(startPoint: $Vector3d, endPoint: $Vector3d, luminance: number);
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
    }
    export class $DynamicLightBehavior$BoundingBox extends $Record {
        endX(): number;
        startY(): number;
        startX(): number;
        startZ(): number;
        endZ(): number;
        endY(): number;
        constructor(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number);
    }
}
