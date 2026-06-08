import { $SettingsRegistry, $ReplayMod } from "@package/com/replaymod/core";
import { $ReplayFile } from "@package/com/replaymod/replaystudio/replay";
import { $Path_, $Path } from "@package/java/nio/file";

declare module "@package/com/replaymod/core/files" {
    export class $ReplayFilesService {
        open(input: $Path_, output: $Path_): $ReplayFile;
        open(path: $Path_): $ReplayFile;
        initialScan(core: $ReplayMod): void;
        constructor(folders: $ReplayFoldersService);
    }
    export class $ReplayFoldersService {
        getRawReplayFolder(): $Path;
        getCacheFolder(): $Path;
        getRecordingFolder(): $Path;
        getReplayFolder(): $Path;
        getReplayPathForCache(cache: $Path_): $Path;
        getCachePathForReplay(replay: $Path_): $Path;
        constructor(settings: $SettingsRegistry);
        get rawReplayFolder(): $Path;
        get cacheFolder(): $Path;
        get recordingFolder(): $Path;
        get replayFolder(): $Path;
    }
}
