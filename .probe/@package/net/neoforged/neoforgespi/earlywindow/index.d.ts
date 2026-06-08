import { $Consumer_, $Supplier, $Supplier_, $IntConsumer_, $LongSupplier_, $IntSupplier_ } from "@package/java/util/function";
import { $Throwable, $Runnable, $ModuleLayer } from "@package/java/lang";

declare module "@package/net/neoforged/neoforgespi/earlywindow" {
    export class $ImmediateWindowProvider {
    }
    export interface $ImmediateWindowProvider {
        name(): string;
        initialize(arg0: string[]): $Runnable;
        updateFramebufferSize(arg0: $IntConsumer_, arg1: $IntConsumer_): void;
        setupMinecraftWindow(arg0: $IntSupplier_, arg1: $IntSupplier_, arg2: $Supplier_<string>, arg3: $LongSupplier_): number;
        updateModuleReads(arg0: $ModuleLayer): void;
        loadingOverlay<T>(arg0: $Supplier_<never>, arg1: $Supplier_<never>, arg2: $Consumer_<($Throwable) | undefined>, arg3: boolean): $Supplier<T>;
        periodicTick(): void;
        positionWindow(arg0: (never) | undefined, arg1: $IntConsumer_, arg2: $IntConsumer_, arg3: $IntConsumer_, arg4: $IntConsumer_): boolean;
        getGLVersion(): string;
        crash(arg0: string): void;
        get GLVersion(): string;
    }
}
