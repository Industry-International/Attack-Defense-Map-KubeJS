import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getOffsetX(): number;
        getOffsetY(): number;
        getScaleX(): number;
        getScaleY(): number;
        getOffsetZ(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        startScaleAnim(): void;
        stopRotAnim(arg0: number): void;
        startRotAnim(): void;
        startPosAnim(): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        stopScaleAnim(arg0: number): void;
        stopPosAnim(arg0: number): void;
        isRotAnimInProgress(): boolean;
        getLastResetRotationTick(): number;
        isPosAnimInProgress(): boolean;
        getLastResetScaleTick(): number;
        getLastResetPositionTick(): number;
        isScaleAnimInProgress(): boolean;
        getBone(): $GeoBone;
        getRotX(): number;
        getRotY(): number;
        getRotZ(): number;
        getScaleZ(): number;
        constructor(arg0: $GeoBone);
        get offsetX(): number;
        get offsetY(): number;
        get scaleX(): number;
        get scaleY(): number;
        get offsetZ(): number;
        get rotAnimInProgress(): boolean;
        get lastResetRotationTick(): number;
        get posAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
        get lastResetPositionTick(): number;
        get scaleAnimInProgress(): boolean;
        get bone(): $GeoBone;
        get rotX(): number;
        get rotY(): number;
        get rotZ(): number;
        get scaleZ(): number;
    }
}
