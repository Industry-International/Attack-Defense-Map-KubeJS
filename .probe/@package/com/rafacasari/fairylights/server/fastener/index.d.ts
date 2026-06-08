import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Connection, $ConnectionType } from "@package/com/rafacasari/fairylights/server/connection";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $Matrix } from "@package/com/rafacasari/fairylights/util/matrix";
import { $Enum } from "@package/java/lang";
import { $List, $UUID_, $Set_ } from "@package/java/util";
import { $Vec3_, $AABB_, $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $FastenerAccessor } from "@package/com/rafacasari/fairylights/server/fastener/accessor";
export * as accessor from "@package/com/rafacasari/fairylights/server/fastener/accessor";

declare module "@package/com/rafacasari/fairylights/server/fastener" {
    export class $FastenerType extends $Enum<$FastenerType> {
        static values(): $FastenerType[];
        static valueOf(arg0: string): $FastenerType;
        static deserialize(arg0: $CompoundTag_): $FastenerAccessor;
        static serialize(arg0: $FastenerAccessor): $CompoundTag;
        createAccessor(): $FastenerAccessor;
        static PLAYER: $FastenerType;
        static BLOCK: $FastenerType;
        static FENCE: $FastenerType;
    }
    /**
     * Values that may be interpreted as {@link $FastenerType}.
     */
    export type $FastenerType_ = "block" | "fence" | "player";
    export class $CollectFastenersEvent extends $Event {
        accept(arg0: $Entity): void;
        accept(arg0: $BlockEntity): void;
        accept(arg0: $Fastener<never>): void;
        accept(arg0: $LevelChunk): void;
        getRegion(): $AABB;
        getWorld(): $Level;
        constructor(arg0: $Level_, arg1: $AABB_, arg2: $Set_<$Fastener<never>>);
        get region(): $AABB;
        get world(): $Level;
    }
    export class $CreateBlockViewEvent extends $Event {
        getView(): $BlockView;
        setView(arg0: $BlockView): void;
        constructor(arg0: $BlockView);
    }
    export class $FastenerReference {
    }
    export interface $FastenerReference {
        setColor(arg0: number): boolean;
        isMoving(): boolean;
        getPos(): $BlockPos;
        getWorld(): $Level;
        createAccessor(): $FastenerAccessor;
        getConnectionPoint(): $Vec3;
        getFacing(): $Direction;
        hasNoConnections(): boolean;
        removeConnection(arg0: $UUID_): boolean;
        resistSnap(arg0: $Vec3_): void;
        set color(value: number);
        get moving(): boolean;
        get pos(): $BlockPos;
        get world(): $Level;
        get connectionPoint(): $Vec3;
        get facing(): $Direction;
    }
    export class $Fastener<F extends $FastenerAccessor> {
    }
    export interface $Fastener<F extends $FastenerAccessor> extends $FastenerReference {
        remove(): void;
        get(arg0: $UUID_): ($Connection) | undefined;
        update(): boolean;
        getBounds(): $AABB;
        connect(arg0: $Level_, arg1: $Fastener<never>, arg2: $ConnectionType<never>, arg3: $CompoundTag_, arg4: boolean): $Connection;
        setColor(arg0: number): boolean;
        getColor(): number;
        isMoving(): boolean;
        setDirty(): void;
        deserializeNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        serializeNBT(): $CompoundTag;
        getFirstConnection(): ($Connection) | undefined;
        getWorld(): $Level;
        createAccessor(): F;
        getAllConnections(): $List<$Connection>;
        getOwnConnections(): $List<$Connection>;
        reconnect(arg0: $Level_, arg1: $Connection, arg2: $Fastener<never>): boolean;
        hasNoConnections(): boolean;
        removeConnection(arg0: $UUID_): boolean;
        removeConnection(arg0: $Connection): boolean;
        setWorld(arg0: $Level_): void;
        resistSnap(arg0: $Vec3_): void;
        dropItems(arg0: $Level_, arg1: $BlockPos_): void;
        getConnectionTo(arg0: $FastenerAccessor): $Connection;
        createIncomingConnection(arg0: $Level_, arg1: $UUID_, arg2: $Fastener<never>, arg3: $ConnectionType<never>): void;
        createOutgoingConnection(arg0: $Level_, arg1: $UUID_, arg2: $Fastener<never>, arg3: $ConnectionType<never>, arg4: $CompoundTag_, arg5: boolean): $Connection;
        hasConnectionWith(arg0: $Fastener<never>): boolean;
        get bounds(): $AABB;
        get moving(): boolean;
        get firstConnection(): ($Connection) | undefined;
        get allConnections(): $List<$Connection>;
        get ownConnections(): $List<$Connection>;
    }
    export class $BlockView {
    }
    export interface $BlockView {
        isMoving(arg0: $Level_, arg1: $BlockPos_): boolean;
        getPosition(arg0: $Level_, arg1: $BlockPos_, arg2: $Vec3_): $Vec3;
        unrotate(arg0: $Level_, arg1: $BlockPos_, arg2: $Matrix, arg3: number): void;
    }
}
