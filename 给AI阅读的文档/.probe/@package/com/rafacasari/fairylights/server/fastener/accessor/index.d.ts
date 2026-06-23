import { $Level_ } from "@package/net/minecraft/world/level";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $FastenerType } from "@package/com/rafacasari/fairylights/server/fastener";

declare module "@package/com/rafacasari/fairylights/server/fastener/accessor" {
    export class $FastenerAccessor {
    }
    export interface $FastenerAccessor {
        get<T>(arg0: $Level_): (T) | undefined;
        get<T>(arg0: $Level_, arg1: boolean): (T) | undefined;
        getType(): $FastenerType;
        serialize(): $CompoundTag;
        deserialize(arg0: $CompoundTag_): void;
        isGone(arg0: $Level_): boolean;
        get type(): $FastenerType;
    }
}
