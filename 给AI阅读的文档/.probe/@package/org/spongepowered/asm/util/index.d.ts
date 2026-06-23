import { $PrintStream } from "@package/java/io";
import { $Level, $ILogger } from "@package/org/spongepowered/asm/logging";
import { $Map_, $Collection_ } from "@package/java/util";
import { $Throwable, $Object, $StackTraceElement } from "@package/java/lang";
export * as perf from "@package/org/spongepowered/asm/util/perf";

declare module "@package/org/spongepowered/asm/util" {
    export class $PrettyPrinter {
        log(arg0: $ILogger): $PrettyPrinter;
        log(arg0: $Level): $PrettyPrinter;
        log(arg0: $ILogger, arg1: $Level): $PrettyPrinter;
        add(arg0: $Map_<never, never>): $PrettyPrinter;
        add(arg0: $PrettyPrinter$IPrettyPrintable): $PrettyPrinter;
        add(arg0: $Throwable): $PrettyPrinter;
        add(arg0: $Object[], arg1: string): $PrettyPrinter;
        add(arg0: $Object[]): $PrettyPrinter;
        add(arg0: $Object, arg1: number): $PrettyPrinter;
        add(arg0: $Object): $PrettyPrinter;
        add(arg0: $StackTraceElement[], arg1: number): $PrettyPrinter;
        add(arg0: $Throwable, arg1: number): $PrettyPrinter;
        add(): $PrettyPrinter;
        add(arg0: string): $PrettyPrinter;
        add(arg0: string, ...arg1: $Object[]): $PrettyPrinter;
        trace(arg0: string, arg1: $Level): $PrettyPrinter;
        trace(arg0: $ILogger): $PrettyPrinter;
        trace(arg0: $ILogger, arg1: $Level): $PrettyPrinter;
        trace(arg0: $PrintStream): $PrettyPrinter;
        trace(arg0: string): $PrettyPrinter;
        trace(arg0: $Level): $PrettyPrinter;
        trace(): $PrettyPrinter;
        trace(arg0: $PrintStream, arg1: $ILogger, arg2: $Level): $PrettyPrinter;
        trace(arg0: $PrintStream, arg1: $ILogger): $PrettyPrinter;
        trace(arg0: $PrintStream, arg1: string, arg2: $Level): $PrettyPrinter;
        trace(arg0: $PrintStream, arg1: $Level): $PrettyPrinter;
        trace(arg0: $PrintStream, arg1: string): $PrettyPrinter;
        static dumpStack(): void;
        print(arg0: $PrintStream): $PrettyPrinter;
        print(): $PrettyPrinter;
        static print(arg0: $Throwable): void;
        table(...arg0: $Object[]): $PrettyPrinter;
        table(...arg0: string[]): $PrettyPrinter;
        table(): $PrettyPrinter;
        th(): $PrettyPrinter;
        tr(...arg0: $Object[]): $PrettyPrinter;
        hr(): $PrettyPrinter;
        hr(arg0: string): $PrettyPrinter;
        spacing(arg0: number): $PrettyPrinter;
        centre(): $PrettyPrinter;
        kv(arg0: string, arg1: string, ...arg2: $Object[]): $PrettyPrinter;
        kv(arg0: string, arg1: $Object): $PrettyPrinter;
        addWrapped(arg0: number, arg1: string, ...arg2: $Object[]): $PrettyPrinter;
        addWrapped(arg0: string, ...arg1: $Object[]): $PrettyPrinter;
        kvWidth(arg0: number): $PrettyPrinter;
        wrapTo(): number;
        wrapTo(arg0: number): $PrettyPrinter;
        addIndexed(arg0: $Object[]): $PrettyPrinter;
        addWithIndices(arg0: $Collection_<never>): $PrettyPrinter;
        constructor();
        constructor(arg0: number);
    }
    export class $ITokenProvider {
    }
    export interface $ITokenProvider {
        getToken(arg0: string): number;
    }
    /**
     * Values that may be interpreted as {@link $ITokenProvider}.
     */
    export type $ITokenProvider_ = ((arg0: string) => number);
}
