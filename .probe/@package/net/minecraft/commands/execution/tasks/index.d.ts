import { $CommandResultCallback_, $ExecutionCommandSource } from "@package/net/minecraft/commands";
import { $Consumer_ } from "@package/java/util/function";
import { $UnboundEntryAction, $CommandQueueEntry, $CommandQueueEntry_, $Frame_, $ChainModifiers_, $ExecutionContext, $EntryAction, $Frame, $ExecutionControl } from "@package/net/minecraft/commands/execution";
import { $DynamicCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $List_ } from "@package/java/util";
import { $InstantiatedFunction } from "@package/net/minecraft/commands/functions";
import { $ContextChain, $CommandContext } from "@package/com/mojang/brigadier/context";

declare module "@package/net/minecraft/commands/execution/tasks" {
    export class $BuildContexts$Continuation<T extends $ExecutionCommandSource<T>> extends $BuildContexts<T> implements $EntryAction<T> {
        execute(arg0: $ExecutionContext<T>, arg1: $Frame_): void;
        static ERROR_FORK_LIMIT_REACHED: $DynamicCommandExceptionType;
        constructor(arg0: string, arg1: $ContextChain<T>, arg2: $ChainModifiers_, arg3: T, arg4: $List_<T>);
    }
    export class $CallFunction<T extends $ExecutionCommandSource<T>> implements $UnboundEntryAction<T> {
        execute(arg0: T, arg1: $ExecutionContext<T>, arg2: $Frame_): void;
        bind(arg0: T): $EntryAction<T>;
        constructor(arg0: $InstantiatedFunction<T>, arg1: $CommandResultCallback_, arg2: boolean);
    }
    export class $BuildContexts<T extends $ExecutionCommandSource<T>> {
        execute(arg0: T, arg1: $List_<T>, arg2: $ExecutionContext<T>, arg3: $Frame_, arg4: $ChainModifiers_): void;
        traceCommandStart(arg0: $ExecutionContext<T>, arg1: $Frame_): void;
        static ERROR_FORK_LIMIT_REACHED: $DynamicCommandExceptionType;
        constructor(arg0: string, arg1: $ContextChain<T>);
    }
    export class $ContinuationTask$TaskProvider<T, P> {
    }
    export interface $ContinuationTask$TaskProvider<T, P> {
        create(arg0: $Frame_, arg1: P): $CommandQueueEntry<T>;
    }
    /**
     * Values that may be interpreted as {@link $ContinuationTask$TaskProvider}.
     */
    export type $ContinuationTask$TaskProvider_<T, P> = ((arg0: $Frame, arg1: P) => $CommandQueueEntry_<T>);
    export class $ContinuationTask<T, P> implements $EntryAction<T> {
        execute(arg0: $ExecutionContext<T>, arg1: $Frame_): void;
        static schedule<T, P>(arg0: $ExecutionContext<T>, arg1: $Frame_, arg2: $List_<P>, arg3: $ContinuationTask$TaskProvider_<T, P>): void;
    }
    export class $IsolatedCall<T extends $ExecutionCommandSource<T>> implements $EntryAction<T> {
        execute(arg0: $ExecutionContext<T>, arg1: $Frame_): void;
        constructor(arg0: $Consumer_<$ExecutionControl<T>>, arg1: $CommandResultCallback_);
    }
    export class $ExecuteCommand<T extends $ExecutionCommandSource<T>> implements $UnboundEntryAction<T> {
        execute(arg0: T, arg1: $ExecutionContext<T>, arg2: $Frame_): void;
        bind(arg0: T): $EntryAction<T>;
        constructor(arg0: string, arg1: $ChainModifiers_, arg2: $CommandContext<T>);
    }
    export class $FallthroughTask<T extends $ExecutionCommandSource<T>> implements $EntryAction<T> {
        execute(arg0: $ExecutionContext<T>, arg1: $Frame_): void;
        static instance<T extends $ExecutionCommandSource<T>>(): $EntryAction<T>;
        constructor();
    }
    export class $BuildContexts$TopLevel<T extends $ExecutionCommandSource<T>> extends $BuildContexts<T> implements $EntryAction<T> {
        execute(arg0: $ExecutionContext<T>, arg1: $Frame_): void;
        static ERROR_FORK_LIMIT_REACHED: $DynamicCommandExceptionType;
        constructor(arg0: string, arg1: $ContextChain<T>, arg2: T);
    }
    export class $BuildContexts$Unbound<T extends $ExecutionCommandSource<T>> extends $BuildContexts<T> implements $UnboundEntryAction<T> {
        execute(arg0: T, arg1: $ExecutionContext<T>, arg2: $Frame_): void;
        bind(arg0: T): $EntryAction<T>;
        static ERROR_FORK_LIMIT_REACHED: $DynamicCommandExceptionType;
        constructor(arg0: string, arg1: $ContextChain<T>);
    }
}
