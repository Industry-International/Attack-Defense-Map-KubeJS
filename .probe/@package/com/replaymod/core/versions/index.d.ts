export * as scheduler from "@package/com/replaymod/core/versions/scheduler";

declare module "@package/com/replaymod/core/versions" {
    export class $MCVer$MinecraftMethodAccessor {
    }
    export interface $MCVer$MinecraftMethodAccessor {
        replayModProcessKeyBinds(): void;
        replayModExecuteTaskQueue(): void;
    }
}
