
declare module "@package/io/github/reserveword/imblocker/mixin" {
    export class $KeyboardHandlerAccessor {
    }
    export interface $KeyboardHandlerAccessor {
        invokeCharTyped(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $KeyboardHandlerAccessor}.
     */
    export type $KeyboardHandlerAccessor_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $StringViewAccessor {
    }
    export interface $StringViewAccessor {
        getBeginIndex(): number;
        getEndIndex(): number;
        get beginIndex(): number;
        get endIndex(): number;
    }
}
