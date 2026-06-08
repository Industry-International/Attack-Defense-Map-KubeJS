import { $Path_, $Path } from "@package/java/nio/file";

declare module "@package/xaero/hud/path" {
    export class $XaeroPath {
        getAtIndex(arg0: number): $XaeroPath;
        resolve(arg0: string): $XaeroPath;
        resolve(arg0: $XaeroPath): $XaeroPath;
        getParent(): $XaeroPath;
        static root(arg0: string, arg1: boolean): $XaeroPath;
        static root(arg0: string): $XaeroPath;
        getRoot(): $XaeroPath;
        resolveSibling(arg0: string): $XaeroPath;
        isSubOf(arg0: $XaeroPath): boolean;
        getLastNode(): string;
        getNodeCount(): number;
        applyToFilePath(arg0: $Path_): $Path;
        getSubPath(arg0: number): $XaeroPath;
        get parent(): $XaeroPath;
        get lastNode(): string;
        get nodeCount(): number;
    }
}
