
declare module "@package/dev/lambdaurora/lambdynlights/mixin" {
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        lambdynlights$scheduleChunkRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelRendererAccessor}.
     */
    export type $LevelRendererAccessor_ = ((arg0: number, arg1: number, arg2: number, arg3: boolean) => void);
}
