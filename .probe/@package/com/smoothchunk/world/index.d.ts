
declare module "@package/com/smoothchunk/world" {
    export class $IChunkTimeSave {
    }
    export interface $IChunkTimeSave {
        smoothchunk$setSaveTimePoint(arg0: number): void;
        smoothchunk$getNextSaveTime(): number;
    }
}
