import { $Enum, $AutoCloseable } from "@package/java/lang";

declare module "@package/net/fabricmc/fabric/api/transfer/v1/transaction" {
    export class $Transaction {
        static isOpen(): boolean;
        static getLifecycle(): $Transaction$Lifecycle;
        static openNested(arg0: $TransactionContext): $Transaction;
        static openOuter(): $Transaction;
        /**
         * @deprecated
         */
        static getCurrentUnsafe(): $TransactionContext;
        static get open(): boolean;
        static get lifecycle(): $Transaction$Lifecycle;
        static get currentUnsafe(): $TransactionContext;
    }
    export interface $Transaction extends $AutoCloseable, $TransactionContext {
        commit(): void;
        close(): void;
        abort(): void;
    }
    export class $TransactionContext$OuterCloseCallback {
    }
    export interface $TransactionContext$OuterCloseCallback {
        afterOuterClose(arg0: $TransactionContext$Result_): void;
    }
    /**
     * Values that may be interpreted as {@link $TransactionContext$OuterCloseCallback}.
     */
    export type $TransactionContext$OuterCloseCallback_ = ((arg0: $TransactionContext$Result) => void);
    export class $TransactionContext {
    }
    export interface $TransactionContext {
        nestingDepth(): number;
        openNested(): $Transaction;
        addCloseCallback(arg0: $TransactionContext$CloseCallback_): void;
        getOpenTransaction(arg0: number): $Transaction;
        addOuterCloseCallback(arg0: $TransactionContext$OuterCloseCallback_): void;
    }
    export class $Transaction$Lifecycle extends $Enum<$Transaction$Lifecycle> {
        static values(): $Transaction$Lifecycle[];
        static valueOf(arg0: string): $Transaction$Lifecycle;
        static CLOSING: $Transaction$Lifecycle;
        static NONE: $Transaction$Lifecycle;
        static OPEN: $Transaction$Lifecycle;
        static OUTER_CLOSING: $Transaction$Lifecycle;
    }
    /**
     * Values that may be interpreted as {@link $Transaction$Lifecycle}.
     */
    export type $Transaction$Lifecycle_ = "none" | "open" | "closing" | "outer_closing";
    export class $TransactionContext$Result extends $Enum<$TransactionContext$Result> {
        static values(): $TransactionContext$Result[];
        static valueOf(arg0: string): $TransactionContext$Result;
        wasAborted(): boolean;
        wasCommitted(): boolean;
        static ABORTED: $TransactionContext$Result;
        static COMMITTED: $TransactionContext$Result;
    }
    /**
     * Values that may be interpreted as {@link $TransactionContext$Result}.
     */
    export type $TransactionContext$Result_ = "aborted" | "committed";
    export class $TransactionContext$CloseCallback {
    }
    export interface $TransactionContext$CloseCallback {
        onClose(arg0: $TransactionContext, arg1: $TransactionContext$Result_): void;
    }
    /**
     * Values that may be interpreted as {@link $TransactionContext$CloseCallback}.
     */
    export type $TransactionContext$CloseCallback_ = ((arg0: $TransactionContext, arg1: $TransactionContext$Result) => void);
}
