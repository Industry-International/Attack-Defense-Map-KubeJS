import { $Consumer_ } from "@package/java/util/function";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Ammo } from "@package/com/atsuishio/superbwarfare/data/gun";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map } from "@package/java/util";
import { $PlayerEvent$Clone, $PlayerEvent$PlayerRespawnEvent, $PlayerEvent$PlayerChangedDimensionEvent, $PlayerEvent$PlayerLoggedInEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/com/atsuishio/superbwarfare/capability/player" {
    export class $PlayerVariable implements $INBTSerializable<$CompoundTag> {
        static getOrDefault(arg0: $Entity): $PlayerVariable;
        copy(): $PlayerVariable;
        sync(arg0: $Entity): void;
        watch(): $PlayerVariable;
        static modify(arg0: $Player, arg1: $Consumer_<$PlayerVariable>): void;
        forceUpdate(): $Map<number, number>;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        writeToNBT(): $CompoundTag;
        readFromNBT(arg0: $CompoundTag_): void;
        compareAndUpdate(): $Map<number, number>;
        setActiveThermalImaging(arg0: boolean): void;
        getActiveThermalImaging(): boolean;
        static Companion: $PlayerVariable$Companion;
        ammo: $Map<$Ammo, number>;
        constructor();
    }
    export class $PlayerVariable$Companion {
        getOrDefault(arg0: $Entity): $PlayerVariable;
        modify(arg0: $Player, arg1: $Consumer_<$PlayerVariable>): void;
        onPlayerLoggedIn(arg0: $PlayerEvent$PlayerLoggedInEvent): void;
        onPlayerRespawn(arg0: $PlayerEvent$PlayerRespawnEvent): void;
        onPlayerChangeDimension(arg0: $PlayerEvent$PlayerChangedDimensionEvent): void;
        clonePlayer(arg0: $PlayerEvent$Clone): void;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
