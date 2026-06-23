import { $BufferedReader } from "@package/java/io";
import { $PathMatcher, $FileSystem, $Path_, $PathMatcher_, $Path } from "@package/java/nio/file";
import { $Exception, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/net/minecraft/world/level/validation" {
    export class $ContentValidationException extends $Exception {
        static getMessage(directory: $Path_, entries: $List_<$ForbiddenSymlinkInfo_>): string;
        constructor(directory: $Path_, entries: $List_<$ForbiddenSymlinkInfo_>);
    }
    export class $ForbiddenSymlinkInfo extends $Record {
        target(): $Path;
        link(): $Path;
        constructor(arg0: $Path_, arg1: $Path_);
    }
    export class $PathAllowList$EntryType {
        static FILESYSTEM: $PathAllowList$EntryType;
        static PREFIX: $PathAllowList$EntryType;
    }
    export interface $PathAllowList$EntryType {
        compile(fileSystem: $FileSystem, pattern: string): $PathMatcher;
    }
    /**
     * Values that may be interpreted as {@link $PathAllowList$EntryType}.
     */
    export type $PathAllowList$EntryType_ = ((arg0: $FileSystem, arg1: string) => $PathMatcher_);
    export class $DirectoryValidator {
        validateKnownDirectory(directory: $Path_, forbiddenSymlinkInfos: $List_<$ForbiddenSymlinkInfo_>): void;
        validateDirectory(directory: $Path_, validateSymlinks: boolean): $List<$ForbiddenSymlinkInfo>;
        validateSymlink(directory: $Path_, forbiddenSymlinkInfos: $List_<$ForbiddenSymlinkInfo_>): void;
        validateSymlink(directory: $Path_): $List<$ForbiddenSymlinkInfo>;
        constructor(symlinkTargetAllowList: $PathMatcher_);
    }
    export class $PathAllowList implements $PathMatcher {
        matches(path: $Path_): boolean;
        getForFileSystem(fileSystem: $FileSystem): $PathMatcher;
        static readPlain(reader: $BufferedReader): $PathAllowList;
        constructor(entries: $List_<$PathAllowList$ConfigEntry_>);
    }
    export class $PathAllowList$ConfigEntry extends $Record {
        type(): $PathAllowList$EntryType;
        compile(fileSystem: $FileSystem): $PathMatcher;
        static prefix(glob: string): $PathAllowList$ConfigEntry;
        static regex(glob: string): $PathAllowList$ConfigEntry;
        pattern(): string;
        static parse(string: string): ($PathAllowList$ConfigEntry) | undefined;
        static glob(glob: string): $PathAllowList$ConfigEntry;
        constructor(arg0: $PathAllowList$EntryType_, arg1: string);
    }
}
