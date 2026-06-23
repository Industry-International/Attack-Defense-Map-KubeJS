import { $LocalDate } from "@package/java/time";
import { $Reader, $Closeable } from "@package/java/io";
import { $Consumer_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Codec } from "@package/com/mojang/serialization";
import { $Logger } from "@package/org/slf4j";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Record, $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator, $Set, $List_ } from "@package/java/util";
import { $FileChannel } from "@package/java/nio/channels";

declare module "@package/net/minecraft/util/eventlog" {
    export class $JsonEventLog<T> implements $Closeable {
        write(data: T): void;
        close(): void;
        static open<T>(codec: $Codec<T>, path: $Path_): $JsonEventLog<T>;
        releaseReference(): void;
        openReader(): $JsonEventLogReader<T>;
        channel: $FileChannel;
        constructor(codec: $Codec<T>, channel: $FileChannel);
    }
    export class $EventLogDirectory$RawFile extends $Record implements $EventLogDirectory$File {
        compress(): $EventLogDirectory$CompressedFile;
        id(): $EventLogDirectory$FileId;
        path(): $Path;
        openChannel(): $FileChannel;
        openReader(): $Reader;
        constructor(arg0: $Path_, arg1: $EventLogDirectory$FileId_);
    }
    export class $EventLogDirectory {
        static open(root: $Path_, extension: string): $EventLogDirectory;
        createNewFile(date: $LocalDate): $EventLogDirectory$RawFile;
        listFiles(): $EventLogDirectory$FileList;
        static tryCompress(path: $Path_, outputPath: $Path_): void;
        static LOGGER: $Logger;
    }
    export class $EventLogDirectory$FileId extends $Record {
        index(): number;
        static parse(fileName: string): $EventLogDirectory$FileId;
        date(): $LocalDate;
        toFileName(extension: string): string;
        constructor(arg0: $LocalDate, arg1: number);
    }
    export class $JsonEventLogReader<T> {
        static create<T>(codec: $Codec<T>, reader: $Reader): $JsonEventLogReader<T>;
    }
    export interface $JsonEventLogReader<T> extends $Closeable {
        next(): T;
    }
    export class $EventLogDirectory$FileList implements $Iterable<$EventLogDirectory$File> {
        iterator(): $Iterator<$EventLogDirectory$File>;
        stream(): $Stream<$EventLogDirectory$File>;
        ids(): $Set<$EventLogDirectory$FileId>;
        prune(date: $LocalDate, daysToKeep: number): $EventLogDirectory$FileList;
        compressAll(): $EventLogDirectory$FileList;
        spliterator(): $Spliterator<$EventLogDirectory$File>;
        forEach(arg0: $Consumer_<$EventLogDirectory$File>): void;
        constructor(files: $List_<$EventLogDirectory$File>);
        [Symbol.iterator](): Iterator<$EventLogDirectory$File>
    }
    export class $EventLogDirectory$File {
    }
    export interface $EventLogDirectory$File {
        compress(): $EventLogDirectory$CompressedFile;
        id(): $EventLogDirectory$FileId;
        path(): $Path;
        openReader(): $Reader;
    }
    export class $EventLogDirectory$CompressedFile extends $Record implements $EventLogDirectory$File {
        compress(): $EventLogDirectory$CompressedFile;
        id(): $EventLogDirectory$FileId;
        path(): $Path;
        openReader(): $Reader;
        constructor(arg0: $Path_, arg1: $EventLogDirectory$FileId_);
    }
}
