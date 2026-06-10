import { $Level_ } from "@package/net/minecraft/world/level";
import { $DiscoveredPath } from "@package/com/simibubi/create/content/trains/graph";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ScheduleDataEntry, $ScheduleRuntime } from "@package/com/simibubi/create/content/trains/schedule";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/schedule/destination" {
    export class $ScheduleInstruction extends $ScheduleDataEntry {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        start(arg0: $ScheduleRuntime, arg1: $Level_): $DiscoveredPath;
        supportsConditions(): boolean;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ScheduleInstruction;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
    }
}
