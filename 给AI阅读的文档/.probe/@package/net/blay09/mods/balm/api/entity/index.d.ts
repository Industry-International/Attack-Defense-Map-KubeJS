import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/net/blay09/mods/balm/api/entity" {
    export class $BalmEntity {
    }
    export interface $BalmEntity {
        setFabricBalmData(arg0: $CompoundTag_): void;
        setForgeBalmData(arg0: $CompoundTag_): void;
        getFabricBalmData(): $CompoundTag;
        getForgeBalmData(): $CompoundTag;
        getNeoForgeBalmData(): $CompoundTag;
        setNeoForgeBalmData(arg0: $CompoundTag_): void;
    }
}
