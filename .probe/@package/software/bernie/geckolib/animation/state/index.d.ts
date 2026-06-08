import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getOffsetZ(): number;
        getScaleX(): number;
        getScaleY(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotZ(): number;
        getScaleZ(): number;
        getLastResetScaleTick(): number;
        getLastResetRotationTick(): number;
        isPosAnimInProgress(): boolean;
        isScaleAnimInProgress(): boolean;
        getLastResetPositionTick(): number;
        isRotAnimInProgress(): boolean;
        startRotAnim(): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        startScaleAnim(): void;
        stopRotAnim(arg0: number): void;
        startPosAnim(): void;
        stopPosAnim(arg0: number): void;
        stopScaleAnim(arg0: number): void;
        getRotY(): number;
        getRotX(): number;
        getOffsetX(): number;
        getOffsetY(): number;
        getBone(): $GeoBone;
        constructor(arg0: $GeoBone);
        get offsetZ(): number;
        get scaleX(): number;
        get scaleY(): number;
        get rotZ(): number;
        get scaleZ(): number;
        get lastResetScaleTick(): number;
        get lastResetRotationTick(): number;
        get posAnimInProgress(): boolean;
        get scaleAnimInProgress(): boolean;
        get lastResetPositionTick(): number;
        get rotAnimInProgress(): boolean;
        get rotY(): number;
        get rotX(): number;
        get offsetX(): number;
        get offsetY(): number;
        get bone(): $GeoBone;
    }
}
