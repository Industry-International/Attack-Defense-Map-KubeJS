
declare module "@package/com/rafacasari/fairylights/server/feature" {
    export class $FeatureType {
        static register(arg0: string): $FeatureType;
        getId(): number;
        static fromId(arg0: number): $FeatureType;
        static DEFAULT: $FeatureType;
        get id(): number;
    }
    export class $Feature {
    }
    export interface $Feature {
        getId(): number;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $Feature}.
     */
    export type $Feature_ = (() => number);
}
