import { $LevelSimulatedReader } from "@package/net/minecraft/world/level";
import { $BiConsumer_ } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $List, $Set_, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/feature/treedecorators" {
    export class $AttachedToLeavesDecorator extends $TreeDecorator {
        requiredEmptyBlocks: number;
        static CODEC: $MapCodec<$AttachedToLeavesDecorator>;
        directions: $List<$Direction>;
        probability: number;
        exclusionRadiusY: number;
        blockProvider: $BlockStateProvider;
        exclusionRadiusXZ: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $BlockStateProvider, arg4: number, arg5: $List_<$Direction_>);
    }
    export class $BeehiveDecorator extends $TreeDecorator {
        static CODEC: $MapCodec<$BeehiveDecorator>;
        constructor(arg0: number);
    }
    export class $LeaveVineDecorator extends $TreeDecorator {
        static CODEC: $MapCodec<$LeaveVineDecorator>;
        constructor(arg0: number);
    }
    export class $TreeDecoratorType<P extends $TreeDecorator> {
        codec(): $MapCodec<P>;
        static BEEHIVE: $TreeDecoratorType<$BeehiveDecorator>;
        static LEAVE_VINE: $TreeDecoratorType<$LeaveVineDecorator>;
        static TRUNK_VINE: $TreeDecoratorType<$TrunkVineDecorator>;
        static ATTACHED_TO_LEAVES: $TreeDecoratorType<$AttachedToLeavesDecorator>;
        static COCOA: $TreeDecoratorType<$CocoaDecorator>;
        static ALTER_GROUND: $TreeDecoratorType<$AlterGroundDecorator>;
        constructor(arg0: $MapCodec_<P>);
    }
    /**
     * Values that may be interpreted as {@link $TreeDecoratorType}.
     */
    export type $TreeDecoratorType_<P> = RegistryTypes.WorldgenTreeDecoratorType;
    export class $TreeDecorator$Context {
        roots(): $ObjectArrayList<$BlockPos>;
        random(): $RandomSource;
        level(): $LevelSimulatedReader;
        leaves(): $ObjectArrayList<$BlockPos>;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_): void;
        placeVine(arg0: $BlockPos_, arg1: $BooleanProperty): void;
        logs(): $ObjectArrayList<$BlockPos>;
        isAir(arg0: $BlockPos_): boolean;
        constructor(arg0: $LevelSimulatedReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $Set_<$BlockPos_>, arg4: $Set_<$BlockPos_>, arg5: $Set_<$BlockPos_>);
    }
    export interface $TreeDecoratorType extends RegistryMarked<RegistryTypes.WorldgenTreeDecoratorTypeTag, RegistryTypes.WorldgenTreeDecoratorType> {}
    export class $CocoaDecorator extends $TreeDecorator {
        static CODEC: $MapCodec<$CocoaDecorator>;
        constructor(arg0: number);
    }
    export class $TrunkVineDecorator extends $TreeDecorator {
        static CODEC: $MapCodec<$TrunkVineDecorator>;
        static INSTANCE: $TrunkVineDecorator;
        constructor();
    }
    export class $AlterGroundDecorator extends $TreeDecorator {
        static CODEC: $MapCodec<$AlterGroundDecorator>;
        constructor(arg0: $BlockStateProvider);
    }
    export class $TreeDecorator {
        type(): $TreeDecoratorType<never>;
        place(arg0: $TreeDecorator$Context): void;
        static CODEC: $Codec<$TreeDecorator>;
        constructor();
    }
}
