
declare module "@package/com/smoothchunk/world" {
    export class $IChunkTimeSave {
    }
    export interface $IChunkTimeSave {
        smoothchunk$getNextSaveTime(): number;
        smoothchunk$setSaveTimePoint(arg0: number): void;
    }
}
