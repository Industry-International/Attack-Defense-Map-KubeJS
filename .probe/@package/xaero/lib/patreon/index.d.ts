import { $File } from "@package/java/io";
import { $Runnable } from "@package/java/lang";

declare module "@package/xaero/lib/patreon" {
    export class $PatreonMod {
        fileLayoutID: string;
        modJar: $File;
        latestVersionLayout: string;
        latestVersion: string;
        changelogLink: string;
        modName: string;
        onVersionIgnore: $Runnable;
        currentVersion: string;
        md5: string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: string);
    }
}
