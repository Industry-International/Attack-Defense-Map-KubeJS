import { $Path_, $Path } from "@package/java/nio/file";

declare module "@package/xaero/hud/path" {
    export class $XaeroPath {
        resolve(arg0: $XaeroPath): $XaeroPath;
        resolve(arg0: string): $XaeroPath;
        getParent(): $XaeroPath;
        static root(arg0: string, arg1: boolean): $XaeroPath;
        static root(arg0: string): $XaeroPath;
        getRoot(): $XaeroPath;
        resolveSibling(arg0: string): $XaeroPath;
        getNodeCount(): number;
        getAtIndex(arg0: number): $XaeroPath;
        getSubPath(arg0: number): $XaeroPath;
        getLastNode(): string;
        applyToFilePath(arg0: $Path_): $Path;
        isSubOf(arg0: $XaeroPath): boolean;
        get parent(): $XaeroPath;
        get nodeCount(): number;
        get lastNode(): string;
    }
}
