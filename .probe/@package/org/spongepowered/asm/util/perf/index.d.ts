import { $Collection } from "@package/java/util";
import { $PrettyPrinter } from "@package/org/spongepowered/asm/util";

declare module "@package/org/spongepowered/asm/util/perf" {
    export class $Profiler {
        reset(): void;
        get(arg0: string): $Profiler$Section;
        begin(arg0: number, ...arg1: string[]): $Profiler$Section;
        begin(arg0: string): $Profiler$Section;
        begin(...arg0: string[]): $Profiler$Section;
        begin(arg0: number, arg1: string): $Profiler$Section;
        mark(arg0: string): void;
        printer(arg0: boolean, arg1: boolean): $PrettyPrinter;
        static getProfiler(arg0: string): $Profiler;
        static getProfilers(): $Collection<$Profiler>;
        static printAuditSummary(): void;
        getSections(): $Collection<$Profiler$Section>;
        printSummary(): void;
        static setActive(arg0: boolean): void;
        static ROOT: number;
        static FINE: number;
        constructor(arg0: string);
        static get profilers(): $Collection<$Profiler>;
        get sections(): $Collection<$Profiler$Section>;
        static set active(value: boolean);
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
        getTotalTime(): number;
        getTotalCount(): number;
        getBaseName(): string;
        getAverageTime(): number;
        getTimes(): number[];
        isFine(): boolean;
        setInfo(arg0: string): void;
        getTotalAverageTime(): number;
        get name(): string;
        get count(): number;
        get time(): number;
        get seconds(): number;
        get totalSeconds(): number;
        get root(): boolean;
        get totalTime(): number;
        get totalCount(): number;
        get baseName(): string;
        get averageTime(): number;
        get times(): number[];
        get fine(): boolean;
        get totalAverageTime(): number;
    }
}
