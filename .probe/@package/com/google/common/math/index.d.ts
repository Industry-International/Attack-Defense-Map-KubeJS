import { $Map, $Collection_ } from "@package/java/util";
import { $Number } from "@package/java/lang";

declare module "@package/com/google/common/math" {
    export class $Quantiles$ScaleAndIndexes {
        computeInPlace(...dataset: number[]): $Map<number, number>;
        compute(...dataset: number[]): $Map<number, number>;
        compute(...dataset: number[]): $Map<number, number>;
        compute(dataset: $Collection_<$Number>): $Map<number, number>;
        compute(...dataset: number[]): $Map<number, number>;
    }
}
