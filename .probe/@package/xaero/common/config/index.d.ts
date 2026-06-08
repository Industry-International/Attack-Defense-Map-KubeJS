import { $Path_ } from "@package/java/nio/file";

declare module "@package/xaero/common/config" {
    export class $LegacyCommonConfigIO {
        load(): void;
        shouldEnableEveryoneTracksEveryone(): boolean;
        constructor(arg0: $Path_);
    }
}
