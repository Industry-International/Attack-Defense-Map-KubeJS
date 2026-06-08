import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FeatureType } from "@package/com/rafacasari/fairylights/server/feature";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $UUID_ } from "@package/java/util";
import { $FastenerAccessor } from "@package/com/rafacasari/fairylights/server/fastener/accessor";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos } from "@package/net/minecraft/core";
import { $Fastener } from "@package/com/rafacasari/fairylights/server/fastener";
import { $Intersection_, $CollidableList$Builder, $Collidable } from "@package/com/rafacasari/fairylights/server/collision";
import { $Curve, $NBTSerializable } from "@package/com/rafacasari/fairylights/util";
import { $Enum, $Object } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/rafacasari/fairylights/server/connection" {
    export class $PlayerAction extends $Enum<$PlayerAction> {
        static values(): $PlayerAction[];
        static valueOf(arg0: string): $PlayerAction;
        static INTERACT: $PlayerAction;
        static ATTACK: $PlayerAction;
    }
    /**
     * Values that may be interpreted as {@link $PlayerAction}.
     */
    export type $PlayerAction_ = "attack" | "interact";
    export class $ConnectionType<T> {
        create(arg0: $Level_, arg1: $Object, arg2: $UUID_): T;
        getItem(): $Item;
        constructor(arg0: $ConnectionType$Builder<T>);
        get item(): $Item;
    }
    export class $ConnectionType$Builder<T> {
        static create<T>(arg0: $ConnectionType$Factory_<T>): $ConnectionType$Builder<T>;
        build(): $ConnectionType<T>;
        item(arg0: $Supplier_<$Item>): $ConnectionType$Builder<T>;
    }
    export class $NetworkedConnection {
    }
    export interface $NetworkedConnection {
        getFastenerAccessor(): $FastenerAccessor;
        getFastenerPos(): $BlockPos;
        getConnectionId(): $UUID;
        get fastenerAccessor(): $FastenerAccessor;
        get fastenerPos(): $BlockPos;
        get connectionId(): $UUID;
    }
    export class $Connection implements $NBTSerializable, $NetworkedConnection {
        remove(): void;
        update(arg0: $Vec3_): boolean;
        matches(arg0: $ItemStack_): boolean;
        getType(): $ConnectionType<never>;
        reconnect(arg0: $Fastener<never>): boolean;
        onConnect(arg0: $Level_, arg1: $Player, arg2: $ItemStack_): void;
        getRadius(): number;
        isDynamic(): boolean;
        disconnect(arg0: $Vec3_): void;
        getDestination(): $FastenerAccessor;
        processClientAction(arg0: $Player, arg1: $PlayerAction_, arg2: $Intersection_): void;
        serializeLogic(): $CompoundTag;
        deserialize(arg0: $CompoundTag_): void;
        deserialize(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        deserialize(arg0: $Fastener<never>, arg1: $CompoundTag_, arg2: boolean, arg3: $HolderLookup$Provider): void;
        setDestination(arg0: $Fastener<never>): void;
        serialize(): $CompoundTag;
        isRemoved(): boolean;
        setDrop(): void;
        shouldDrop(): boolean;
        interact(arg0: $Player, arg1: $Vec3_, arg2: $FeatureType, arg3: number, arg4: $ItemStack_, arg5: $InteractionHand_): boolean;
        getUUID(): $UUID;
        setWorld(arg0: $Level_): void;
        getFastener(): $Fastener<never>;
        getFastenerAccessor(): $FastenerAccessor;
        noDrop(): void;
        deserializeLogic(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getCollision(): $Collidable;
        addCollision(arg0: $CollidableList$Builder, arg1: $Vec3_): void;
        hasStaticCatenary(): boolean;
        isDestination(arg0: $FastenerAccessor): boolean;
        computeCatenary(): void;
        isModifiable(arg0: $Player): boolean;
        getItemStack(): $ItemStack;
        getWorld(): $Level;
        getFastenerPos(): $BlockPos;
        getConnectionId(): $UUID;
        getCatenary(): $Curve;
        getPrevCatenary(): $Curve;
        static CORD_FEATURE: $FeatureType;
        static MAX_LENGTH: number;
        static PULL_RANGE: number;
        constructor(arg0: $ConnectionType<never>, arg1: $Level_, arg2: $Fastener<never>, arg3: $UUID_);
        get type(): $ConnectionType<never>;
        get radius(): number;
        get dynamic(): boolean;
        get removed(): boolean;
        get UUID(): $UUID;
        get fastener(): $Fastener<never>;
        get fastenerAccessor(): $FastenerAccessor;
        get collision(): $Collidable;
        get itemStack(): $ItemStack;
        get fastenerPos(): $BlockPos;
        get connectionId(): $UUID;
        get catenary(): $Curve;
        get prevCatenary(): $Curve;
    }
    export class $ConnectionType$Factory<T> {
    }
    export interface $ConnectionType$Factory<T> {
        create(arg0: $ConnectionType<T>, arg1: $Level_, arg2: $Object, arg3: $UUID_): T;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionType$Factory}.
     */
    export type $ConnectionType$Factory_<T> = ((arg0: $ConnectionType<T>, arg1: $Level, arg2: $Object, arg3: $UUID) => T);
}
