import { $CommandResultCallback_, $ExecutionCommandSource, $CommandResultCallback } from "@package/net/minecraft/commands";
import { $CommandSyntaxException } from "@package/com/mojang/brigadier/exceptions";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Command, $RedirectModifier } from "@package/com/mojang/brigadier";
import { $ContextChain, $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Record, $AutoCloseable } from "@package/java/lang";
import { $List, $List_, $Collection } from "@package/java/util";
import { $InstantiatedFunction } from "@package/net/minecraft/commands/functions";
export * as tasks from "@package/net/minecraft/commands/execution/tasks";

declare module "@package/net/minecraft/commands/execution" {
    export class $ExecutionContext<T> implements $AutoCloseable {
        close(): void;
        profiler(): $ProfilerFiller;
        tracer(): $TraceCallbacks;
        tracer(arg0: $TraceCallbacks): void;
        static queueInitialCommandExecution<T extends $ExecutionCommandSource<T>>(arg0: $ExecutionContext<T>, arg1: string, arg2: $ContextChain<T>, arg3: T, arg4: $CommandResultCallback_): void;
        runCommandQueue(): void;
        static queueInitialFunctionCall<T extends $ExecutionCommandSource<T>>(arg0: $ExecutionContext<T>, arg1: $InstantiatedFunction<T>, arg2: T, arg3: $CommandResultCallback_): void;
        discardAtDepthOrHigher(arg0: number): void;
        frameControlForDepth(arg0: number): $Frame$FrameControl;
        incrementCost(): void;
        forkLimit(): number;
        queueNext(arg0: $CommandQueueEntry_<T>): void;
        constructor(arg0: number, arg1: number, arg2: $ProfilerFiller);
    }
    export class $ChainModifiers extends $Record {
        flags(): number;
        isReturn(): boolean;
        setReturn(): $ChainModifiers;
        isForked(): boolean;
        setForked(): $ChainModifiers;
        static DEFAULT: $ChainModifiers;
        constructor(arg0: number);
    }
    export class $Frame$FrameControl {
    }
    export interface $Frame$FrameControl {
        discard(): void;
    }
    /**
     * Values that may be interpreted as {@link $Frame$FrameControl}.
     */
    export type $Frame$FrameControl_ = (() => void);
    export class $TraceCallbacks {
    }
    export interface $TraceCallbacks extends $AutoCloseable {
        close(): void;
        onError(arg0: string): void;
        onReturn(arg0: number, arg1: string, arg2: number): void;
        onCall(arg0: number, arg1: $ResourceLocation_, arg2: number): void;
        onCommand(arg0: number, arg1: string): void;
    }
    export class $UnboundEntryAction<T> {
    }
    export interface $UnboundEntryAction<T> {
        execute(arg0: T, arg1: $ExecutionContext<T>, arg2: $Frame_): void;
        bind(arg0: T): $EntryAction<T>;
    }
    /**
     * Values that may be interpreted as {@link $UnboundEntryAction}.
     */
    export type $UnboundEntryAction_<T> = ((arg0: T, arg1: $ExecutionContext<T>, arg2: $Frame) => void);
    export class $CustomCommandExecutor<T> {
    }
    export interface $CustomCommandExecutor<T> {
        run(arg0: T, arg1: $ContextChain<T>, arg2: $ChainModifiers_, arg3: $ExecutionControl<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomCommandExecutor}.
     */
    export type $CustomCommandExecutor_<T> = ((arg0: T, arg1: $ContextChain<T>, arg2: $ChainModifiers, arg3: $ExecutionControl<T>) => void);
    export class $ExecutionControl<T> {
        static create<T extends $ExecutionCommandSource<T>>(arg0: $ExecutionContext<T>, arg1: $Frame_): $ExecutionControl<T>;
    }
    export interface $ExecutionControl<T> {
        currentFrame(): $Frame;
        tracer(): $TraceCallbacks;
        tracer(arg0: $TraceCallbacks): void;
        queueNext(arg0: $EntryAction_<T>): void;
    }
    export class $CustomCommandExecutor$CommandAdapter<T> {
    }
    export interface $CustomCommandExecutor$CommandAdapter<T> extends $Command<T>, $CustomCommandExecutor<T> {
        run(arg0: $CommandContext<T>): number;
    }
    /**
     * Values that may be interpreted as {@link $CustomCommandExecutor$CommandAdapter}.
     */
    export type $CustomCommandExecutor$CommandAdapter_<T> = (() => void);
    export class $CommandQueueEntry<T> extends $Record {
        execute(arg0: $ExecutionContext<T>): void;
        action(): $EntryAction<T>;
        frame(): $Frame;
        constructor(arg0: $Frame_, arg1: $EntryAction_<T>);
    }
    export class $CustomModifierExecutor<T> {
    }
    export interface $CustomModifierExecutor<T> {
        apply(arg0: T, arg1: $List_<T>, arg2: $ContextChain<T>, arg3: $ChainModifiers_, arg4: $ExecutionControl<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomModifierExecutor}.
     */
    export type $CustomModifierExecutor_<T> = ((arg0: T, arg1: $List<T>, arg2: $ContextChain<T>, arg3: $ChainModifiers, arg4: $ExecutionControl<T>) => void);
    export class $CustomModifierExecutor$ModifierAdapter<T> {
    }
    export interface $CustomModifierExecutor$ModifierAdapter<T> extends $RedirectModifier<T>, $CustomModifierExecutor<T> {
        apply(arg0: $CommandContext<T>): $Collection<T>;
    }
    /**
     * Values that may be interpreted as {@link $CustomModifierExecutor$ModifierAdapter}.
     */
    export type $CustomModifierExecutor$ModifierAdapter_<T> = (() => void);
    export class $EntryAction<T> {
    }
    export interface $EntryAction<T> {
        execute(arg0: $ExecutionContext<T>, arg1: $Frame_): void;
    }
    /**
     * Values that may be interpreted as {@link $EntryAction}.
     */
    export type $EntryAction_<T> = ((arg0: $ExecutionContext<T>, arg1: $Frame) => void);
    export class $Frame extends $Record {
        depth(): number;
        discard(): void;
        returnSuccess(arg0: number): void;
        returnFailure(): void;
        frameControl(): $Frame$FrameControl;
        returnValueConsumer(): $CommandResultCallback;
        constructor(arg0: number, arg1: $CommandResultCallback_, arg2: $Frame$FrameControl_);
    }
    export class $CustomCommandExecutor$WithErrorHandling<T extends $ExecutionCommandSource<T>> implements $CustomCommandExecutor<T> {
        run(arg0: T, arg1: $ContextChain<T>, arg2: $ChainModifiers_, arg3: $ExecutionControl<T>): void;
        onError(arg0: $CommandSyntaxException, arg1: T, arg2: $ChainModifiers_, arg3: $TraceCallbacks): void;
        runGuarded(arg0: T, arg1: $ContextChain<T>, arg2: $ChainModifiers_, arg3: $ExecutionControl<T>): void;
        constructor();
    }
}
