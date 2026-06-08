import { $Consumer } from "@package/java/util/function";

declare module "@package/com/lowdragmc/lowdraglib2/utils/search" {
    export class $ISearch<T> {
    }
    export interface $ISearch<T> {
        search(arg0: string, arg1: $IResultHandler_<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $ISearch}.
     */
    export type $ISearch_<T> = ((arg0: string, arg1: $IResultHandler<T>) => void);
    export class $IResultHandler<T> {
    }
    export interface $IResultHandler<T> extends $Consumer<T> {
        accept(arg0: T): void;
        acceptResult(arg0: T): void;
    }
    /**
     * Values that may be interpreted as {@link $IResultHandler}.
     */
    export type $IResultHandler_<T> = ((arg0: T) => void);
}
