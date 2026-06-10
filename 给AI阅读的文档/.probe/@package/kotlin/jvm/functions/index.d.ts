import { $Function } from "@package/kotlin";

declare module "@package/kotlin/jvm/functions" {
    export class $Function2<P1, P2, R> {
    }
    export interface $Function2<P1, P2, R> extends $Function<R> {
        invoke(arg0: P1, arg1: P2): R;
    }
    /**
     * Values that may be interpreted as {@link $Function2}.
     */
    export type $Function2_<P1, P2, R> = ((arg0: P1, arg1: P2) => R);
    export class $Function1<P1, R> {
    }
    export interface $Function1<P1, R> extends $Function<R> {
        invoke(arg0: P1): R;
    }
    /**
     * Values that may be interpreted as {@link $Function1}.
     */
    export type $Function1_<P1, R> = ((arg0: P1) => R);
    export class $Function0<R> {
    }
    export interface $Function0<R> extends $Function<R> {
        invoke(): R;
    }
    /**
     * Values that may be interpreted as {@link $Function0}.
     */
    export type $Function0_<R> = (() => R);
}
