import { $Supplier } from "@package/java/util/function";
import { $CrashReport } from "@package/net/minecraft";
import { $Connection } from "@package/net/minecraft/network";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DeltaTracker$Timer } from "@package/net/minecraft/client";
import { $Runnable } from "@package/java/lang";
import { $Queue } from "@package/java/util";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/replaymod/core/mixin" {
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        getTimer(): $DeltaTracker$Timer;
        getProgressTasks(): $Queue<$Runnable>;
        getPendingReload(): $CompletableFuture<void>;
        setPendingReload(arg0: $CompletableFuture<void>): void;
        setConnection(arg0: $Connection): void;
        getCrashReporter(): $Supplier<$CrashReport>;
        setTimer(arg0: $DeltaTracker$Timer): void;
        get progressTasks(): $Queue<$Runnable>;
        set connection(value: $Connection);
        get crashReporter(): $Supplier<$CrashReport>;
    }
    export class $AbstractButtonWidgetAccessor {
    }
    export interface $AbstractButtonWidgetAccessor {
        getHeight(): number;
        get height(): number;
    }
    /**
     * Values that may be interpreted as {@link $AbstractButtonWidgetAccessor}.
     */
    export type $AbstractButtonWidgetAccessor_ = (() => number);
    export class $KeyBindingAccessor {
    }
    export interface $KeyBindingAccessor {
        getPressTime(): number;
        setPressTime(arg0: number): void;
    }
    export class $TimerAccessor {
    }
    export interface $TimerAccessor {
        getTickLength(): number;
        setTickLength(arg0: number): void;
    }
    export class $GuiScreenAccessor {
    }
    export interface $GuiScreenAccessor {
        invokeAddButton<T extends $GuiEventListener>(arg0: T): T;
    }
    /**
     * Values that may be interpreted as {@link $GuiScreenAccessor}.
     */
    export type $GuiScreenAccessor_ = ((arg0: any) => any);
    export class $SimpleOptionAccessor<T> {
    }
    export interface $SimpleOptionAccessor<T> {
        setRawValue(arg0: T): void;
        set rawValue(value: T);
    }
    /**
     * Values that may be interpreted as {@link $SimpleOptionAccessor}.
     */
    export type $SimpleOptionAccessor_<T> = ((arg0: T) => void);
}
