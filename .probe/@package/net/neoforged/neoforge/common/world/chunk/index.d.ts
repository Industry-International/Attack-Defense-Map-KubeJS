import { $ForcedChunksSavedData } from "@package/net/minecraft/world/level";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID_, $UUID, $Map } from "@package/java/util";
import { $Comparable, $Record } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/neoforge/common/world/chunk" {
    export class $ForcedChunkManager$TicketOwner<T extends $Comparable<T>> implements $Comparable<$ForcedChunkManager$TicketOwner<T>> {
    }
    export class $TicketController extends $Record {
        id(): $ResourceLocation;
        callback(): $LoadingValidationCallback;
        forceChunk(arg0: $ServerLevel, arg1: $UUID_, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean;
        forceChunk(arg0: $ServerLevel, arg1: $BlockPos_, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean;
        forceChunk(arg0: $ServerLevel, arg1: $Entity, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean;
        constructor(id: $ResourceLocation_, callback: $LoadingValidationCallback_);
        constructor(arg0: $ResourceLocation_);
    }
    export class $LoadingValidationCallback {
    }
    export interface $LoadingValidationCallback {
        validateTickets(arg0: $ServerLevel, arg1: $TicketHelper): void;
    }
    /**
     * Values that may be interpreted as {@link $LoadingValidationCallback}.
     */
    export type $LoadingValidationCallback_ = ((arg0: $ServerLevel, arg1: $TicketHelper) => void);
    export class $RegisterTicketControllersEvent extends $Event implements $IModBusEvent {
        register(arg0: $TicketController_): void;
    }
    export class $TicketSet extends $Record {
        nonTicking(): $LongSet;
        ticking(): $LongSet;
        constructor(nonTicking: $LongSet, ticking: $LongSet);
    }
    export class $TicketHelper {
        removeTicket(arg0: $BlockPos_, arg1: number, arg2: boolean): void;
        removeTicket(arg0: $UUID_, arg1: number, arg2: boolean): void;
        getBlockTickets(): $Map<$BlockPos, $TicketSet>;
        getEntityTickets(): $Map<$UUID, $TicketSet>;
        removeAllTickets(arg0: $UUID_): void;
        removeAllTickets(arg0: $BlockPos_): void;
        get blockTickets(): $Map<$BlockPos, $TicketSet>;
        get entityTickets(): $Map<$UUID, $TicketSet>;
    }
    export class $ForcedChunkManager$TicketTracker<T extends $Comparable<T>> {
        remove(arg0: $ForcedChunkManager$TicketOwner<T>, arg1: number, arg2: boolean): boolean;
        isEmpty(): boolean;
        getChunks(): $Map<$ForcedChunkManager$TicketOwner<T>, $LongSet>;
        getTickingChunks(): $Map<$ForcedChunkManager$TicketOwner<T>, $LongSet>;
        constructor();
        get empty(): boolean;
        get chunks(): $Map<$ForcedChunkManager$TicketOwner<T>, $LongSet>;
        get tickingChunks(): $Map<$ForcedChunkManager$TicketOwner<T>, $LongSet>;
    }
    export class $ForcedChunkManager {
        static init(): void;
        static reinstatePersistentChunks(arg0: $ServerLevel, arg1: $ForcedChunksSavedData): void;
        static hasForcedChunks(arg0: $ServerLevel): boolean;
        static writeBlockPos(arg0: $BlockPos_): $CompoundTag;
        static readModForcedChunks(arg0: $CompoundTag_, arg1: $ForcedChunkManager$TicketTracker<$BlockPos_>, arg2: $ForcedChunkManager$TicketTracker<$UUID_>): void;
        static writeModForcedChunks(arg0: $CompoundTag_, arg1: $ForcedChunkManager$TicketTracker<$BlockPos_>, arg2: $ForcedChunkManager$TicketTracker<$UUID_>): void;
        constructor();
    }
}
