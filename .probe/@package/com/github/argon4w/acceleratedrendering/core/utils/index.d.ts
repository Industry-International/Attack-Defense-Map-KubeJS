import { $Object } from "@package/java/lang";

declare module "@package/com/github/argon4w/acceleratedrendering/core/utils" {
    export class $SimpleResetPool<T, C> {
        reset(): void;
        get(): T;
        get(arg0: boolean): T;
        init(arg0: T): void;
        getContext(): C;
        "delete"(): void;
        getPool(): $Object[];
        at(arg0: number): T;
        fail(): T;
        getCursor(): number;
        constructor(arg0: number, arg1: C);
        get context(): C;
        get pool(): $Object[];
        get cursor(): number;
    }
    export class $MutableSize {
        expand(arg0: number): void;
        getSize(): number;
        resize(arg0: number): void;
        resetResized(): void;
        beforeExpand(): void;
        afterExpand(): void;
        isResized(): boolean;
        doExpand(arg0: number, arg1: number): void;
        resizeTo(arg0: number): void;
        onExpand(arg0: number): void;
        constructor(arg0: number);
        get size(): number;
        get resized(): boolean;
    }
}
