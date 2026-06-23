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
        forceUpdate(): $Map<number, number>;
        watch(): $PlayerVariable;
        setActiveThermalImaging(arg0: boolean): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        readFromNBT(arg0: $CompoundTag_): void;
        writeToNBT(): $CompoundTag;
        static modify(arg0: $Player, arg1: $Consumer_<$PlayerVariable>): void;
        getActiveThermalImaging(): boolean;
        compareAndUpdate(): $Map<number, number>;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static Companion: $PlayerVariable$Companion;
        ammo: $Map<$Ammo, number>;
        constructor();
    }
    export class $PlayerVariable$Companion {
        getOrDefault(arg0: $Entity): $PlayerVariable;
        clonePlayer(arg0: $PlayerEvent$Clone): void;
        onPlayerRespawn(arg0: $PlayerEvent$PlayerRespawnEvent): void;
        modify(arg0: $Player, arg1: $Consumer_<$PlayerVariable>): void;
        onPlayerChangeDimension(arg0: $PlayerEvent$PlayerChangedDimensionEvent): void;
        onPlayerLoggedIn(arg0: $PlayerEvent$PlayerLoggedInEvent): void;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
