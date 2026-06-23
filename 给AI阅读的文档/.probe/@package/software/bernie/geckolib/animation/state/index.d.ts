import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getBone(): $GeoBone;
        getOffsetZ(): number;
        getLastResetRotationTick(): number;
        getLastResetPositionTick(): number;
        getLastResetScaleTick(): number;
        isRotAnimInProgress(): boolean;
        isPosAnimInProgress(): boolean;
        isScaleAnimInProgress(): boolean;
        getRotX(): number;
        getRotY(): number;
        getOffsetY(): number;
        getOffsetX(): number;
        startRotAnim(): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        startPosAnim(): void;
        startScaleAnim(): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        stopScaleAnim(arg0: number): void;
        stopPosAnim(arg0: number): void;
        stopRotAnim(arg0: number): void;
        getScaleX(): number;
        getScaleY(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotZ(): number;
        getScaleZ(): number;
        constructor(arg0: $GeoBone);
        get bone(): $GeoBone;
        get offsetZ(): number;
        get lastResetRotationTick(): number;
        get lastResetPositionTick(): number;
        get lastResetScaleTick(): number;
        get rotAnimInProgress(): boolean;
        get posAnimInProgress(): boolean;
        get scaleAnimInProgress(): boolean;
        get rotX(): number;
        get rotY(): number;
        get offsetY(): number;
        get offsetX(): number;
        get scaleX(): number;
        get scaleY(): number;
        get rotZ(): number;
        get scaleZ(): number;
    }
}
