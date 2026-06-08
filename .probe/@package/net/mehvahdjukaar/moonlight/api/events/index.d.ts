import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LightningBolt } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Activity_ } from "@package/net/minecraft/world/entity/schedule";
import { $Map } from "@package/java/util";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $MemoryModuleType, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $VillagerBrainEventInternal } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
export * as platform from "@package/net/mehvahdjukaar/moonlight/api/events/platform";

declare module "@package/net/mehvahdjukaar/moonlight/api/events" {
    export class $ILightningStruckBlockEvent {
        static create(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $LightningBolt): $ILightningStruckBlockEvent;
    }
    export interface $ILightningStruckBlockEvent extends $SimpleEvent {
        getState(): $BlockState;
        getLevel(): $LevelAccessor;
        getPos(): $BlockPos;
        getEntity(): $LightningBolt;
        get state(): $BlockState;
        get level(): $LevelAccessor;
        get pos(): $BlockPos;
        get entity(): $LightningBolt;
    }
    export class $IFireConsumeBlockEvent {
        static create(arg0: $BlockPos_, arg1: $Level_, arg2: $BlockState_, arg3: number, arg4: number, arg5: $Direction_, arg6: boolean): $IFireConsumeBlockEvent;
    }
    export interface $IFireConsumeBlockEvent extends $SimpleEvent {
        getState(): $BlockState;
        getLevel(): $LevelAccessor;
        getPos(): $BlockPos;
        getAge(): number;
        wasReplacedByFire(): boolean;
        setFinalState(arg0: $BlockState_): void;
        getFinalState(): $BlockState;
        getFace(): $Direction;
        getChance(): number;
        get state(): $BlockState;
        get level(): $LevelAccessor;
        get pos(): $BlockPos;
        get age(): number;
        get face(): $Direction;
        get chance(): number;
    }
    export class $IVillagerBrainEvent {
    }
    export interface $IVillagerBrainEvent extends $SimpleEvent {
        getVillager(): $Villager;
        addTaskToActivity<P extends $Pair<number, $Behavior<$Villager>>>(arg0: $Activity_, arg1: P): boolean;
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        scheduleActivity(arg0: $Activity_, arg1: number, arg2: number): void;
        getInternal(): $VillagerBrainEventInternal;
        addSensor(arg0: $SensorType_<$Sensor<$Villager>>): void;
        addOrReplaceActivity(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>): void;
        get villager(): $Villager;
        get memories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        get internal(): $VillagerBrainEventInternal;
    }
    export class $IDropItemOnDeathEvent {
        static create(arg0: $ItemStack_, arg1: $Player, arg2: boolean): $IDropItemOnDeathEvent;
    }
    export interface $IDropItemOnDeathEvent extends $SimpleEvent {
        setReturnItemStack(arg0: $ItemStack_): void;
        isBeforeDrop(): boolean;
        setCanceled(arg0: boolean): void;
        getPlayer(): $Player;
        isCanceled(): boolean;
        getItemStack(): $ItemStack;
        getReturnItemStack(): $ItemStack;
        get beforeDrop(): boolean;
        get player(): $Player;
        get itemStack(): $ItemStack;
    }
    export class $SimpleEvent {
    }
    export interface $SimpleEvent {
    }
}
