
declare module "@package/com/replaymod/replay/ext" {
    export class $EntityExt {
    }
    export interface $EntityExt {
        replaymod$getTrackedPitch(): number;
        replaymod$getTrackedYaw(): number;
        replaymod$setTrackedYaw(arg0: number): void;
        replaymod$setTrackedPitch(arg0: number): void;
    }
}
