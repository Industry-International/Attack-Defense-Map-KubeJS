import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";

declare module "@package/com/moulberry/axiom/mixin" {
    export class $MultiPlayerGameModeAccessor {
    }
    export interface $MultiPlayerGameModeAccessor {
        setDestroyDelay(arg0: number): void;
        getDestroyDelay(): number;
    }
    export class $DisplayAccessor {
        static getDataTransformationInterpolationDurationId(): $EntityDataAccessor<number>;
        static getDataPosRotInterpolationId(): $EntityDataAccessor<number>;
        static get dataTransformationInterpolationDurationId(): $EntityDataAccessor<number>;
        static get dataPosRotInterpolationId(): $EntityDataAccessor<number>;
    }
    export interface $DisplayAccessor {
    }
}
