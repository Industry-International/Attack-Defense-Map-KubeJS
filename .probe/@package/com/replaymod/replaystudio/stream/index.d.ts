import { $StreamFilter } from "@package/com/replaymod/replaystudio/filter";
import { $Packet } from "@package/com/replaymod/replaystudio/protocol";
import { $Collection, $List } from "@package/java/util";
import { $PacketData } from "@package/com/replaymod/replaystudio";

declare module "@package/com/replaymod/replaystudio/stream" {
    export class $PacketStream {
    }
    export interface $PacketStream {
        insert(arg0: $PacketData): void;
        insert(arg0: number, arg1: $Packet): void;
        end(): $List<$PacketData>;
        next(): $PacketData;
        start(): void;
        addFilter(arg0: $StreamFilter, arg1: number, arg2: number): void;
        addFilter(arg0: $StreamFilter): void;
        removeFilter(arg0: $StreamFilter): void;
        getFilters(): $Collection<$PacketStream$FilterInfo>;
        get filters(): $Collection<$PacketStream$FilterInfo>;
    }
}
