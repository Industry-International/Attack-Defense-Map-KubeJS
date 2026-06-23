import { $Collection } from "@package/java/util";
import { $PrettyPrinter } from "@package/org/spongepowered/asm/util";

declare module "@package/org/spongepowered/asm/util/perf" {
    export class $Profiler {
        reset(): void;
        get(arg0: string): $Profiler$Section;
        begin(arg0: string): $Profiler$Section;
        begin(arg0: number, arg1: string): $Profiler$Section;
        begin(...arg0: string[]): $Profiler$Section;
        begin(arg0: number, ...arg1: string[]): $Profiler$Section;
        mark(arg0: string): void;
        printer(arg0: boolean, arg1: boolean): $PrettyPrinter;
        static setActive(arg0: boolean): void;
        static printAuditSummary(): void;
        printSummary(): void;
        getSections(): $Collection<$Profiler$Section>;
        static getProfilers(): $Collection<$Profiler>;
        static getProfiler(arg0: string): $Profiler;
        static ROOT: number;
        static FINE: number;
        constructor(arg0: string);
        static set active(value: boolean);
        get sections(): $Collection<$Profiler$Section>;
        static get profilers(): $Collection<$Profiler>;
    }
    export class $Profiler$Section {
        getName(): string;
        end(): $Profiler$Section;
        next(arg0: string): $Profiler$Section;
        getCount(): number;
        getTime(): number;
        getSeconds(): number;
        getTotalSeconds(): number;
        isRoot(): boolean;
        getInfo(): string;
        setInfo(arg0: string): void;
        getTimes(): number[];
        isFine(): boolean;
        getTotalAverageTime(): number;
        getTotalCount(): number;
        getTotalTime(): number;
        getAverageTime(): number;
        getBaseName(): string;
        get name(): string;
        get count(): number;
        get time(): number;
        get seconds(): number;
        get totalSeconds(): number;
        get root(): boolean;
        get times(): number[];
        get fine(): boolean;
        get totalAverageTime(): number;
        get totalCount(): number;
        get totalTime(): number;
        get averageTime(): number;
        get baseName(): string;
    }
}
