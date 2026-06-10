import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getScaleX(): number;
        getScaleY(): number;
        getOffsetX(): number;
        getOffsetY(): number;
        getOffsetZ(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotY(): number;
        getRotX(): number;
        getLastResetPositionTick(): number;
        isRotAnimInProgress(): boolean;
        getLastResetRotationTick(): number;
        isScaleAnimInProgress(): boolean;
        getLastResetScaleTick(): number;
        isPosAnimInProgress(): boolean;
        getBone(): $GeoBone;
        startRotAnim(): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        startPosAnim(): void;
        stopRotAnim(arg0: number): void;
        startScaleAnim(): void;
        stopPosAnim(arg0: number): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        stopScaleAnim(arg0: number): void;
        getRotZ(): number;
        getScaleZ(): number;
        constructor(arg0: $GeoBone);
        get scaleX(): number;
        get scaleY(): number;
        get offsetX(): number;
        get offsetY(): number;
        get offsetZ(): number;
        get rotY(): number;
        get rotX(): number;
        get lastResetPositionTick(): number;
        get rotAnimInProgress(): boolean;
        get lastResetRotationTick(): number;
        get scaleAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
        get posAnimInProgress(): boolean;
        get bone(): $GeoBone;
        get rotZ(): number;
        get scaleZ(): number;
    }
}
