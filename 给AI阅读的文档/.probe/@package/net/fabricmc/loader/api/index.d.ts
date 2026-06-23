import { $ModMetadata, $ModOrigin } from "@package/net/fabricmc/loader/api/metadata";
import { $Path } from "@package/java/nio/file";
import { $Collection, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
export * as metadata from "@package/net/fabricmc/loader/api/metadata";

declare module "@package/net/fabricmc/loader/api" {
    export class $Version {
        static parse(string: string): $Version;
    }
    export interface $Version extends $Comparable<$Version> {
        getFriendlyString(): string;
        get friendlyString(): string;
    }
    export class $ModContainer {
    }
    export interface $ModContainer {
        /**
         * @deprecated
         */
        getRootPath(): $Path;
        /**
         * @deprecated
         */
        getRoot(): $Path;
        /**
         * @deprecated
         */
        getPath(arg0: string): $Path;
        getOrigin(): $ModOrigin;
        getMetadata(): $ModMetadata;
        findPath(file: string): ($Path) | undefined;
        getContainedMods(): $Collection<$ModContainer>;
        getContainingMod(): ($ModContainer) | undefined;
        getRootPaths(): $List<$Path>;
        get rootPath(): $Path;
        get root(): $Path;
        get origin(): $ModOrigin;
        get metadata(): $ModMetadata;
        get containedMods(): $Collection<$ModContainer>;
        get containingMod(): ($ModContainer) | undefined;
        get rootPaths(): $List<$Path>;
    }
}
