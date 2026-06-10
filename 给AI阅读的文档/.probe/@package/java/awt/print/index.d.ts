import { $Graphics } from "@package/java/awt";
import { $Object, $Cloneable } from "@package/java/lang";

declare module "@package/java/awt/print" {
    export class $Printable {
        static PAGE_EXISTS: number;
        static NO_SUCH_PAGE: number;
    }
    export interface $Printable {
        print(arg0: $Graphics, arg1: $PageFormat, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Printable}.
     */
    export type $Printable_ = ((arg0: $Graphics, arg1: $PageFormat, arg2: number) => number);
    export class $PageFormat implements $Cloneable {
        getWidth(): number;
        clone(): $Object;
        getOrientation(): number;
        setOrientation(arg0: number): void;
        getMatrix(): number[];
        getHeight(): number;
        getImageableY(): number;
        getImageableHeight(): number;
        getImageableX(): number;
        getImageableWidth(): number;
        getPaper(): $Paper;
        setPaper(arg0: $Paper): void;
        static REVERSE_LANDSCAPE: number;
        static LANDSCAPE: number;
        static PORTRAIT: number;
        constructor();
        get width(): number;
        get matrix(): number[];
        get height(): number;
        get imageableY(): number;
        get imageableHeight(): number;
        get imageableX(): number;
        get imageableWidth(): number;
    }
    export class $Paper implements $Cloneable {
        getWidth(): number;
        clone(): $Object;
        setSize(arg0: number, arg1: number): void;
        getHeight(): number;
        getImageableY(): number;
        getImageableHeight(): number;
        getImageableX(): number;
        getImageableWidth(): number;
        setImageableArea(arg0: number, arg1: number, arg2: number, arg3: number): void;
        constructor();
        get width(): number;
        get height(): number;
        get imageableY(): number;
        get imageableHeight(): number;
        get imageableX(): number;
        get imageableWidth(): number;
    }
}
