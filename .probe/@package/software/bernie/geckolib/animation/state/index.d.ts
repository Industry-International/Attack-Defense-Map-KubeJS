import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getScaleY(): number;
        getScaleX(): number;
        startRotAnim(): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        startPosAnim(): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        startScaleAnim(): void;
        stopScaleAnim(arg0: number): void;
        stopRotAnim(arg0: number): void;
        stopPosAnim(arg0: number): void;
        getRotZ(): number;
        getScaleZ(): number;
        getRotY(): number;
        getRotX(): number;
        getOffsetX(): number;
        getOffsetY(): number;
        isRotAnimInProgress(): boolean;
        isScaleAnimInProgress(): boolean;
        getLastResetRotationTick(): number;
        isPosAnimInProgress(): boolean;
        getLastResetScaleTick(): number;
        getLastResetPositionTick(): number;
        getBone(): $GeoBone;
        getOffsetZ(): number;
        constructor(arg0: $GeoBone);
        get scaleY(): number;
        get scaleX(): number;
        get rotZ(): number;
        get scaleZ(): number;
        get rotY(): number;
        get rotX(): number;
        get offsetX(): number;
        get offsetY(): number;
        get rotAnimInProgress(): boolean;
        get scaleAnimInProgress(): boolean;
        get lastResetRotationTick(): number;
        get posAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
        get lastResetPositionTick(): number;
        get bone(): $GeoBone;
        get offsetZ(): number;
    }
}
