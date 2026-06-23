import { $File } from "@package/java/io";
import { $Consumer_ } from "@package/java/util/function";
import { $FileSystem, $Path_, $WatchKey, $FileStore, $WatchEvent$Kind, $Path, $WatchService } from "@package/java/nio/file";
import { $BasicFileAttributes } from "@package/java/nio/file/attribute";
import { $Record } from "@package/java/lang";
import { $Spliterator, $Iterator, $List_, $Map_, $Map } from "@package/java/util";
import { $FileSystemProvider } from "@package/java/nio/file/spi";

declare module "@package/net/minecraft/server/packs/linkfs" {
    export class $LinkFSPath implements $Path {
        startsWith(arg0: string): boolean;
        iterator(): $Iterator<$Path>;
        endsWith(arg0: string): boolean;
        register(arg0: $WatchService, ...arg1: $WatchEvent$Kind<never>[]): $WatchKey;
        resolve(arg0: string): $Path;
        toFile(): $File;
        resolveSibling(arg0: $Path_): $Path;
        resolveSibling(arg0: string): $Path;
        spliterator(): $Spliterator<$Path>;
        forEach(arg0: $Consumer_<$Path>): void;
        compareTo(other: $Path_): number;
        [Symbol.iterator](): Iterator<$Path>
    }
    export class $PathContents$FileContents extends $Record implements $PathContents {
        contents(): $Path;
        constructor(arg0: $Path_);
    }
    export class $LinkFSProvider extends $FileSystemProvider {
    }
    export class $PathContents$DirectoryContents extends $Record implements $PathContents {
        children(): $Map<string, $LinkFSPath>;
        constructor(arg0: $Map_<string, $LinkFSPath>);
    }
    export class $LinkFileSystem$DirectoryEntry extends $Record {
    }
    export class $LinkFileSystem$Builder {
        put(pathString: $List_<string>, filePath: $Path_): $LinkFileSystem$Builder;
        put(pathString: $List_<string>, fileName: string, filePath: $Path_): $LinkFileSystem$Builder;
        build(name: string): $FileSystem;
        constructor();
    }
    export class $LinkFileSystem extends $FileSystem {
        store(): $FileStore;
        static builder(): $LinkFileSystem$Builder;
        rootPath(): $LinkFSPath;
        static PATH_SEPARATOR: string;
        constructor(name: string, root: $LinkFileSystem$DirectoryEntry_);
    }
    export class $DummyFileAttributes implements $BasicFileAttributes {
    }
    export class $PathContents {
    }
    export interface $PathContents {
    }
    export class $LinkFSFileStore extends $FileStore {
    }
}
