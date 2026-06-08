import { $Type } from "@package/org/objectweb/asm";

declare module "@package/org/spongepowered/asm/mixin/injection/callback" {
    export class $CallbackInfoReturnable<R> extends $CallbackInfo {
        getReturnValueJ(): number;
        getReturnValueD(): number;
        getReturnValueS(): number;
        getReturnValueZ(): boolean;
        getReturnValueB(): number;
        getReturnValueC(): string;
        setReturnValue(arg0: R): void;
        getReturnValueI(): number;
        getReturnValueF(): number;
        getReturnValue(): R;
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: boolean);
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: string, arg1: boolean, arg2: R);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: string);
        constructor(arg0: string, arg1: boolean, arg2: number);
        get returnValueJ(): number;
        get returnValueD(): number;
        get returnValueS(): number;
        get returnValueZ(): boolean;
        get returnValueB(): number;
        get returnValueC(): string;
        get returnValueI(): number;
        get returnValueF(): number;
    }
    export class $CallbackInfo implements $Cancellable {
        getId(): string;
        cancel(): void;
        isCancelled(): boolean;
        isCancellable(): boolean;
        static getCallInfoClassName(arg0: $Type): string;
        constructor(arg0: string, arg1: boolean);
        get id(): string;
        get cancelled(): boolean;
        get cancellable(): boolean;
    }
    export class $Cancellable {
    }
    export interface $Cancellable {
        cancel(): void;
        isCancelled(): boolean;
        isCancellable(): boolean;
        get cancelled(): boolean;
        get cancellable(): boolean;
    }
}
