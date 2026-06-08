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
        getAtIndex(arg0: number): $XaeroPath;
        isSubOf(arg0: $XaeroPath): boolean;
        getNodeCount(): number;
        getLastNode(): string;
        getSubPath(arg0: number): $XaeroPath;
        applyToFilePath(arg0: $Path_): $Path;
        get parent(): $XaeroPath;
        get nodeCount(): number;
        get lastNode(): string;
    }
}
