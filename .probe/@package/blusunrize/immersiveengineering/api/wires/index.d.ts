import { $ChunkPos, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IICProxyProvider } from "@package/blusunrize/immersiveengineering/api/wires/proxy";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $LocalNetworkHandler, $IWorldTickable, $ILocalHandlerProvider } from "@package/blusunrize/immersiveengineering/api/wires/localhandlers";
import { $LinkedHashSet, $List, $List_, $Collection } from "@package/java/util";
import { $Consumer_, $BooleanSupplier, $Function } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DualCodec } from "@package/malte0811/dualcodecs";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Runnable_, $Record, $Comparable, $Class } from "@package/java/lang";
import { $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $SetRestrictedField } from "@package/blusunrize/immersiveengineering/api/utils";
export * as localhandlers from "@package/blusunrize/immersiveengineering/api/wires/localhandlers";

declare module "@package/blusunrize/immersiveengineering/api/wires" {
    export class $GlobalWireNetwork extends $SavedData implements $IWorldTickable {
        update(arg0: $Level_): void;
        removeConnection(arg0: $Connection): void;
        getLocalNet(arg0: $ConnectionPoint_): $LocalWireNetwork;
        getLocalNet(arg0: $BlockPos_): $LocalWireNetwork;
        readFromNBT(arg0: $CompoundTag_): void;
        static getNetwork(arg0: $Level_): $GlobalWireNetwork;
        getCollisionData(): $WireCollisionData;
        static onWorldUnload(arg0: $LevelEvent$Unload): void;
        addConnection(arg0: $Connection): void;
        updateCatenaryData(arg0: $Connection): void;
        getExistingConnector(arg0: $ConnectionPoint_): $IImmersiveConnectable;
        removeAndDropConnection(arg0: $Connection, arg1: $BlockPos_, arg2: $Level_): void;
        getNullableLocalNet(arg0: $ConnectionPoint_): $LocalWireNetwork;
        getNullableLocalNet(arg0: $BlockPos_): $LocalWireNetwork;
        onConnectorLoad(arg0: $IImmersiveConnectable, arg1: $Level_): void;
        onConnectorLoad(arg0: $IImmersiveConnectable, arg1: boolean): void;
        getAllConnectorsIn(arg0: $ChunkPos): $Collection<$ConnectionPoint>;
        getProxyProvider(): $IICProxyProvider;
        removeConnector(arg0: $IImmersiveConnectable): void;
        onConnectorUnload(arg0: $IImmersiveConnectable): void;
        removeInsertAndDropConnection(arg0: $Connection, arg1: $Player, arg2: $Level_): void;
        removeAllConnectionsAt(arg0: $ConnectionPoint_, arg1: $Consumer_<$Connection>): void;
        removeAllConnectionsAt(arg0: $IImmersiveConnectable, arg1: $Consumer_<$Connection>): void;
        static GET_NET_UNCACHED: $SetRestrictedField<$Function<$Level, $GlobalWireNetwork>>;
        static VALIDATE_CONNECTIONS: $SetRestrictedField<$BooleanSupplier>;
        static SANITIZE_CONNECTIONS: $SetRestrictedField<$BooleanSupplier>;
        constructor(arg0: boolean, arg1: $IICProxyProvider, arg2: $IWireSyncManager);
        get collisionData(): $WireCollisionData;
        get proxyProvider(): $IICProxyProvider;
    }
    export class $WireType implements $ILocalHandlerProvider {
        static getValue(arg0: string): $WireType;
        getCategory(): string;
        getMaxLength(): number;
        static getValues(): $LinkedHashSet<$WireType>;
        getWireCoil(arg0: $Connection): $ItemStack;
        static getIEWireTypes(): $Collection<$WireType>;
        getRenderDiameter(): number;
        getUniqueName(): string;
        getSlack(): number;
        getColour(arg0: $Connection): number;
        getRequestedHandlers(): $Collection<$ResourceLocation>;
        static INTERNAL_CONNECTION: $WireType;
        static HV_CATEGORY: string;
        static REDSTONE: $WireType;
        static COPPER: $WireType;
        static REDSTONE_CATEGORY: string;
        static LV_CATEGORY: string;
        static CODECS: $DualCodec<$ByteBuf, $WireType>;
        static STRUCTURE_ROPE: $WireType;
        static STRUCTURE_STEEL: $WireType;
        static STEEL: $WireType;
        static ELECTRUM_INSULATED: $WireType;
        static COPPER_INSULATED: $WireType;
        static STRUCTURE_CATEGORY: string;
        static MV_CATEGORY: string;
        static ELECTRUM: $WireType;
        constructor();
        get category(): string;
        get maxLength(): number;
        static get values(): $LinkedHashSet<$WireType>;
        static get IEWireTypes(): $Collection<$WireType>;
        get renderDiameter(): number;
        get uniqueName(): string;
        get slack(): number;
        get requestedHandlers(): $Collection<$ResourceLocation>;
    }
    export class $IConnectionTemplate {
    }
    export interface $IConnectionTemplate {
        getStoredConnections(): $List<$IConnectionTemplate$TemplateConnection>;
        get storedConnections(): $List<$IConnectionTemplate$TemplateConnection>;
    }
    /**
     * Values that may be interpreted as {@link $IConnectionTemplate}.
     */
    export type $IConnectionTemplate_ = (() => $List_<$IConnectionTemplate$TemplateConnection_>);
    export class $ConnectionPoint extends $Record implements $Comparable<$ConnectionPoint> {
        index(): number;
        compareTo(arg0: $ConnectionPoint_): number;
        position(): $BlockPos;
        getY(): number;
        getX(): number;
        createTag(): $CompoundTag;
        getZ(): number;
        static CODECS: $DualCodec<$ByteBuf, $ConnectionPoint>;
        constructor(arg0: $CompoundTag_);
        constructor(position: $BlockPos_, index: number);
        get y(): number;
        get x(): number;
        get z(): number;
    }
    export class $LocalWireNetwork implements $IWorldTickable {
        update(arg0: $Level_): void;
        getHandler<T extends $LocalNetworkHandler>(arg0: $ResourceLocation_, arg1: $Class<T>): T;
        isValid(): boolean;
        isValid(arg0: $ConnectionPoint_): boolean;
        getVersion(): number;
        setInvalid(): void;
        writeToNBT(): $CompoundTag;
        getAllHandlers(): $Collection<$LocalNetworkHandler>;
        addAsFutureTask(arg0: $Runnable_): void;
        getConnections(arg0: $ConnectionPoint_): $Collection<$Connection>;
        getConnections(arg0: $BlockPos_): $Collection<$Connection>;
        getConnector(arg0: $BlockPos_): $IImmersiveConnectable;
        getConnector(arg0: $ConnectionPoint_): $IImmersiveConnectable;
        getConnectors(): $Collection<$BlockPos>;
        getConnectionPoints(): $Collection<$ConnectionPoint>;
        constructor(arg0: $CompoundTag_, arg1: $GlobalWireNetwork);
        constructor(arg0: $GlobalWireNetwork);
        get version(): number;
        get allHandlers(): $Collection<$LocalNetworkHandler>;
        get connectors(): $Collection<$BlockPos>;
        get connectionPoints(): $Collection<$ConnectionPoint>;
    }
    export class $IConnectionTemplate$TemplateConnection extends $Record {
        type(): $WireType;
        toNBT(): $CompoundTag;
        endA(): $ConnectionPoint;
        endB(): $ConnectionPoint;
        constructor(arg0: $CompoundTag_);
        constructor(endA: $ConnectionPoint_, endB: $ConnectionPoint_, type: $WireType);
    }
    export class $Connection$CatenaryData extends $Record {
        reverse(arg0: $Vec3_): $Connection$CatenaryData;
        scale(): number;
        delta(): $Vec3;
        offsetX(): number;
        offsetY(): number;
        horLength(): number;
        getPoint(arg0: number): $Vec3;
        isVertical(): boolean;
        vecA(): $Vec3;
        getSlope(arg0: number): number;
        getDeltaY(): number;
        getDeltaZ(): number;
        getDeltaX(): number;
        getRenderPoint(arg0: number): $Vec3;
        constructor(isVertical: boolean, offsetX: number, offsetY: number, scale: number, delta: $Vec3_, horLength: number, vecA: $Vec3_);
        get vertical(): boolean;
        get deltaY(): number;
        get deltaZ(): number;
        get deltaX(): number;
    }
    export class $Connection {
        getLength(): number;
        isInternal(): boolean;
        getEndA(): $ConnectionPoint;
        transformPosition(arg0: number, arg1: $ConnectionPoint_): number;
        getPoint(arg0: number, arg1: $ConnectionPoint_): $Vec3;
        toNBT(): $CompoundTag;
        getEndB(): $ConnectionPoint;
        getSlope(arg0: number, arg1: $ConnectionPoint_): number;
        getContainingNet(arg0: $GlobalWireNetwork): $LocalWireNetwork;
        getEndBOffset(): $Vec3;
        getOtherEnd(arg0: $ConnectionPoint_): $ConnectionPoint;
        getEndFor(arg0: $BlockPos_): $ConnectionPoint;
        getEnds(): $ConnectionPoint[];
        isPositiveEnd(arg0: $ConnectionPoint_): boolean;
        getEndAOffset(): $Vec3;
        static makeCatenaryData(arg0: $Vec3_, arg1: $Vec3_, arg2: number): $Connection$CatenaryData;
        getCatenaryData(): $Connection$CatenaryData;
        isEnd(arg0: $ConnectionPoint_): boolean;
        static RENDER_POINTS_PER_WIRE: number;
        type: $WireType;
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $BlockPos_, arg1: number, arg2: number);
        constructor(arg0: $WireType, arg1: $ConnectionPoint_, arg2: $ConnectionPoint_, arg3: $GlobalWireNetwork);
        constructor(arg0: $WireType, arg1: $ConnectionPoint_, arg2: $ConnectionPoint_, arg3: $Vec3_, arg4: $Vec3_);
        get length(): number;
        get internal(): boolean;
        get endA(): $ConnectionPoint;
        get endB(): $ConnectionPoint;
        get endBOffset(): $Vec3;
        get ends(): $ConnectionPoint[];
        get endAOffset(): $Vec3;
        get catenaryData(): $Connection$CatenaryData;
    }
}
