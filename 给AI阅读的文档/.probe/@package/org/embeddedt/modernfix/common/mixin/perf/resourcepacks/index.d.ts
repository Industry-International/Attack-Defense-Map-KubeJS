import { $File } from "@package/java/io";
import { $ZipFile } from "@package/java/util/zip";

declare module "@package/org/embeddedt/modernfix/common/mixin/perf/resourcepacks" {
    export class $SharedZipFileAccessAccessor {
    }
    export interface $SharedZipFileAccessAccessor {
        mfix$getFile(): $File;
        mfix$getOrCreateZipFile(): $ZipFile;
    }
}
