export * as lookup from "@package/dev/lambdaurora/lambdynlights/engine/lookup";
export * as scheduler from "@package/dev/lambdaurora/lambdynlights/engine/scheduler";
export * as source from "@package/dev/lambdaurora/lambdynlights/engine/source";

declare module "@package/dev/lambdaurora/lambdynlights/engine" {
    export class $CellHasher {
    }
    export interface $CellHasher {
        hashAt(arg0: number, arg1: number, arg2: number): number;
        hashCell(arg0: number, arg1: number, arg2: number): number;
    }
}
