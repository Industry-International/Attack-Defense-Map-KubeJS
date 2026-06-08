import { $BlockGetter, $Level } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as filtering from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
export * as scrollValue from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour" {
    export class $BlockEntityBehaviour {
        static get<T extends $BlockEntityBehaviour>(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BehaviourType<T>): T;
        static get<T extends $BlockEntityBehaviour>(arg0: $BlockEntity, arg1: $BehaviourType<T>): T;
        initialize(): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        destroy(): void;
        getType(): $BehaviourType<never>;
        unload(): void;
        tick(): void;
        getRequiredItems(): $ItemRequirement;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getPos(): $BlockPos;
        getWorld(): $Level;
        isSafeNBT(): boolean;
        lazyTick(): void;
        onNeighborChanged(arg0: $BlockPos_): void;
        onBlockChanged(arg0: $BlockState_): void;
        setLazyTickRate(arg0: number): void;
        blockEntity: $SmartBlockEntity;
        constructor(arg0: $SmartBlockEntity);
        get type(): $BehaviourType<never>;
        get requiredItems(): $ItemRequirement;
        get pos(): $BlockPos;
        get world(): $Level;
        get safeNBT(): boolean;
        set lazyTickRate(value: number);
    }
    export class $BehaviourType<T extends $BlockEntityBehaviour> {
        getName(): string;
        constructor(arg0: string);
        constructor();
        get name(): string;
    }
}
