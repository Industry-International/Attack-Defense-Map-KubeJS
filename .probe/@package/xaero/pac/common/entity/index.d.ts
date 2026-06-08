import { $Level } from "@package/net/minecraft/world/level";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/entity" {
    export class $IEntity {
    }
    export interface $IEntity {
        getXaero_OPAC_data(): $EntityData;
        setXaero_OPAC_data(arg0: $EntityData): void;
    }
    export class $IItemEntity {
    }
    export interface $IItemEntity {
        getXaero_OPAC_target(): $UUID;
        getXaero_OPAC_thrower(): $UUID;
        setXaero_OPAC_throwerAccessor(arg0: $UUID_): void;
        getXaero_OPAC_throwerAccessor(): $UUID;
        get xaero_OPAC_target(): $UUID;
        get xaero_OPAC_thrower(): $UUID;
    }
    export class $EntityData {
        static from(arg0: $Entity): $EntityData;
        static from(arg0: $IEntity): $EntityData;
        setLootOwner(arg0: $UUID_): void;
        setDeadPlayer(arg0: $UUID_): void;
        getDeadPlayer(): $UUID;
        getLootOwner(): $UUID;
        getShouldCheckItemUseTick(): boolean;
        setLastChunkEntryDimension(arg0: $ResourceKey_<$Level>): void;
        getLastChunkEntryDimension(): $ResourceKey<$Level>;
        setShouldCheckItemUseTick(arg0: boolean): void;
        constructor();
    }
}
