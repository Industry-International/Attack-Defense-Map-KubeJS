import { $Supplier } from "@package/java/util/function";
import { $CrashReport } from "@package/net/minecraft";
import { $Connection } from "@package/net/minecraft/network";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DeltaTracker$Timer } from "@package/net/minecraft/client";
import { $Queue } from "@package/java/util";
import { $Runnable } from "@package/java/lang";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/replaymod/core/mixin" {
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        getTimer(): $DeltaTracker$Timer;
        setTimer(arg0: $DeltaTracker$Timer): void;
        getPendingReload(): $CompletableFuture<void>;
        setConnection(arg0: $Connection): void;
        getCrashReporter(): $Supplier<$CrashReport>;
        setPendingReload(arg0: $CompletableFuture<void>): void;
        getProgressTasks(): $Queue<$Runnable>;
        set connection(value: $Connection);
        get crashReporter(): $Supplier<$CrashReport>;
        get progressTasks(): $Queue<$Runnable>;
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
        setPressTime(arg0: number): void;
        getPressTime(): number;
    }
    export class $TimerAccessor {
    }
    export interface $TimerAccessor {
        setTickLength(arg0: number): void;
        getTickLength(): number;
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
