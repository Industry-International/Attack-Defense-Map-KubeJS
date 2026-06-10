import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ScheduleDataEntry } from "@package/com/simibubi/create/content/trains/schedule";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/schedule/condition" {
    export class $ScheduleWaitCondition extends $ScheduleDataEntry {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ScheduleWaitCondition;
        getWaitingStatus(arg0: $Level_, arg1: $Train, arg2: $CompoundTag_): $MutableComponent;
        tickCompletion(arg0: $Level_, arg1: $Train, arg2: $CompoundTag_): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
    }
}
