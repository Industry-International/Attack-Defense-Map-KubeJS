import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Collection } from "@package/java/util";
import { $AABB, $AABB_, $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/neoforged/neoforge/common/ticket" {
    export class $ChunkTicketManager<T> implements $ITicketGetter<T> {
        remove(arg0: $SimpleTicket<T>): void;
        add(arg0: $SimpleTicket<T>): void;
        getTickets(): $Collection<$SimpleTicket<T>>;
        pos: $ChunkPos;
        constructor(arg0: $ChunkPos);
        get tickets(): $Collection<$SimpleTicket<T>>;
    }
    export class $ITicketGetter<T> {
    }
    export interface $ITicketGetter<T> extends $ITicketManager<T> {
        getTickets(): $Collection<$SimpleTicket<T>>;
        get tickets(): $Collection<$SimpleTicket<T>>;
    }
    export class $SimpleTicket<T> {
        matches(arg0: T): boolean;
        validate(): void;
        unload(arg0: $ITicketManager<T>): boolean;
        isValid(): boolean;
        invalidate(): void;
        setManager(arg0: $ITicketManager<T>, ...arg1: $ITicketManager<T>[]): void;
        constructor();
        get valid(): boolean;
    }
    export class $AABBTicket extends $SimpleTicket<$Vec3> {
        matches(arg0: $Vec3_): boolean;
        axisAlignedBB: $AABB;
        constructor(arg0: $AABB_);
    }
    export class $ITicketManager<T> {
    }
    export interface $ITicketManager<T> {
        remove(arg0: $SimpleTicket<T>): void;
        add(arg0: $SimpleTicket<T>): void;
    }
}
