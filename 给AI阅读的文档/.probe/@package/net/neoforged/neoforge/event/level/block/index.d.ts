import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enum } from "@package/java/lang";
import { $BlockEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/net/neoforged/neoforge/event/level/block" {
    export class $CropGrowEvent$Post extends $CropGrowEvent {
        getOriginalState(): $BlockState;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_);
        get originalState(): $BlockState;
    }
    export class $CropGrowEvent$Pre extends $CropGrowEvent {
        setResult(arg0: $CropGrowEvent$Pre$Result_): void;
        getResult(): $CropGrowEvent$Pre$Result;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $CropGrowEvent extends $BlockEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $CreateFluidSourceEvent extends $BlockEvent {
        canConvert(): boolean;
        getFluidState(): $FluidState;
        setCanConvert(arg0: boolean): void;
        getVanillaResult(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
        get fluidState(): $FluidState;
        get vanillaResult(): boolean;
    }
    export class $CropGrowEvent$Pre$Result extends $Enum<$CropGrowEvent$Pre$Result> {
        static values(): $CropGrowEvent$Pre$Result[];
        static valueOf(arg0: string): $CropGrowEvent$Pre$Result;
        static GROW: $CropGrowEvent$Pre$Result;
        static DO_NOT_GROW: $CropGrowEvent$Pre$Result;
        static DEFAULT: $CropGrowEvent$Pre$Result;
    }
    /**
     * Values that may be interpreted as {@link $CropGrowEvent$Pre$Result}.
     */
    export type $CropGrowEvent$Pre$Result_ = "grow" | "default" | "do_not_grow";
}
