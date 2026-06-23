import { $NioEventLoopGroup } from "@package/io/netty/channel/nio";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $ClientStatusPacketListener } from "@package/net/minecraft/network/protocol/status";
import { $Tag_, $Tag, $NbtAccounter, $CompoundTag } from "@package/net/minecraft/nbt";
import { $ConnectionProtocolExt } from "@package/com/moulberry/axiom/hooks";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $UUID_, $Map, $UUID, $List, $EnumSet, $Map_, $Date, $Collection_, $List_, $Collection, $BitSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $ByteToMessageDecoder$Cumulator, $MessageToMessageEncoder, $EncoderException, $MessageToMessageDecoder, $ByteToMessageDecoder, $MessageToByteEncoder } from "@package/io/netty/handler/codec";
import { $IntFunction_, $Supplier_, $IntFunction, $Consumer_, $Function, $BiConsumer_, $Function_, $BiFunction_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $RegistryAccess, $Registry, $SectionPos } from "@package/net/minecraft/core";
import { $IFriendlyByteBufExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Path_, $Path } from "@package/java/nio/file";
import { $EpollEventLoopGroup } from "@package/io/netty/channel/epoll";
import { $InetSocketAddress, $SocketAddress, $URI } from "@package/java/net";
import { $PacketType, $PacketFlow, $PacketFlow_, $BundlerInfo, $PacketType_, $Packet } from "@package/net/minecraft/network/protocol";
import { $NetworkManagerAccessor, $DecoderHandlerAccessor } from "@package/com/replaymod/recording/mixin";
import { $CharSequence, $Enum, $Exception, $Throwable, $Record, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $Cipher } from "@package/javax/crypto";
import { $OutputStream } from "@package/java/io";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ReferenceCounted } from "@package/io/netty/util";
import { $Marker } from "@package/org/slf4j";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $PublicKey } from "@package/java/security";
import { $Instant } from "@package/java/time";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $ChannelHandlerContext, $Channel, $ChannelDuplexHandler, $ChannelPipeline, $ChannelInboundHandlerAdapter, $DefaultEventLoopGroup, $SimpleChannelInboundHandler, $ChannelFuture, $ChannelOutboundHandlerAdapter } from "@package/io/netty/channel";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ConnectionExtension } from "@package/dev/ryanhcode/sable/mixinterface/udp";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $TriConsumer_ } from "@package/org/apache/commons/lang3/function";
import { $StreamCodec, $StreamEncoder_, $StreamDecoder_ } from "@package/net/minecraft/network/codec";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
export * as protocol from "@package/net/minecraft/network/protocol";
export * as chat from "@package/net/minecraft/network/chat";
export * as syncher from "@package/net/minecraft/network/syncher";
export * as codec from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network" {
    /**
     * Channel handler that handles protocol decryption.
     * 
     * @see Connection#setEncryptionKey
     */
    export class $CipherDecoder extends $MessageToMessageDecoder<$ByteBuf> {
        decode(context: $ChannelHandlerContext, _in: $ByteBuf, out: $List_<$Object>): void;
        constructor(cipher: $Cipher);
    }
    export class $Utf8String {
        static write(buffer: $ByteBuf, string: $CharSequence, maxLength: number): void;
        static read(buffer: $ByteBuf, maxLength: number): string;
        constructor();
    }
    export class $MonitorFrameDecoder extends $ChannelInboundHandlerAdapter {
        constructor(monitor: $BandwidthDebugMonitor);
    }
    export class $VarLong {
        static write(buffer: $ByteBuf, value: number): $ByteBuf;
        static read(buffer: $ByteBuf): number;
        static hasContinuationBit(data: number): boolean;
        static getByteSize(data: number): number;
        constructor();
    }
    /**
     * Variant of `Connection` that monitors the amount of received packets and disables receiving if the set limit is exceeded.
     */
    export class $RateKickingConnection extends $Connection {
        static PACKET_MARKER: $Marker;
        bandwidthDebugMonitor: $BandwidthDebugMonitor;
        static PACKET_SENT_MARKER: $Marker;
        static NETWORK_WORKER_GROUP: $Supplier<$NioEventLoopGroup>;
        static PACKET_RECEIVED_MARKER: $Marker;
        static LOCAL_WORKER_GROUP: $Supplier<$DefaultEventLoopGroup>;
        static ROOT_MARKER: $Marker;
        static NETWORK_EPOLL_WORKER_GROUP: $Supplier<$EpollEventLoopGroup>;
        constructor(rateLimitPacketsPerSecond: number);
    }
    export class $DisconnectionDetails extends $Record {
        reason(): $Component;
        report(): ($Path) | undefined;
        bugReportLink(): ($URI) | undefined;
        constructor(reason: $Component_);
        constructor(arg0: $Component_, arg1: ($Path_) | undefined, arg2: ($URI) | undefined);
    }
    /**
     * Describes how packets are handled. There are various implementations of this class for each possible protocol (e.g. PLAY, CLIENTBOUND; PLAY, SERVERBOUND; etc.)
     */
    export class $PacketListener {
    }
    export interface $PacketListener {
        protocol(): $ConnectionProtocol;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        onDisconnect(details: $DisconnectionDetails_): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        fillCrashReport(crashReport: $CrashReport): void;
        flow(): $PacketFlow;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        isAcceptingMessages(): boolean;
        get acceptingMessages(): boolean;
    }
    export class $ProtocolInfo$Unbound<T extends $PacketListener, B extends $ByteBuf> {
    }
    export interface $ProtocolInfo$Unbound<T extends $PacketListener, B extends $ByteBuf> {
        id(): $ConnectionProtocol;
        bind(bufferFactory: $Function_<$ByteBuf, B>): $ProtocolInfo<T>;
        flow(): $PacketFlow;
        listPackets(visitor: $ProtocolInfo$Unbound$PacketVisitor_): void;
    }
    export class $UnconfiguredPipelineHandler$Outbound extends $ChannelOutboundHandlerAdapter {
        constructor();
    }
    /**
     * Describes the set of packets a connection understands at a given point.
     * A connection always starts out in state `#HANDSHAKING`. In this state the client sends its desired protocol using
     * `ClientIntentionPacket`. The server then either accepts the connection and switches to the desired protocol or it disconnects the client (for example in case of an outdated client).
     * 
     * Each protocol has a `PacketListener` implementation tied to it for server and client respectively.
     * 
     * Every packet must correspond to exactly one protocol.
     */
    export class $ConnectionProtocol extends $Enum<$ConnectionProtocol> implements $ConnectionProtocolExt {
        static values(): $ConnectionProtocol[];
        static valueOf(arg0: string): $ConnectionProtocol;
        id(): string;
        axiom$getCustomPacketPayloadId(): number;
        isConfiguration(): boolean;
        isPlay(): boolean;
        static PLAY: $ConnectionProtocol;
        static STATUS: $ConnectionProtocol;
        static CONFIGURATION: $ConnectionProtocol;
        static LOGIN: $ConnectionProtocol;
        static HANDSHAKING: $ConnectionProtocol;
        get configuration(): boolean;
        get play(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionProtocol}.
     */
    export type $ConnectionProtocol_ = "handshaking" | "play" | "status" | "login" | "configuration";
    export class $NoOpFrameEncoder extends $ChannelOutboundHandlerAdapter {
        constructor();
    }
    export class $RegistryFriendlyByteBuf extends $FriendlyByteBuf {
        static decorator(arg0: $RegistryAccess, arg1: $ConnectionType_): $Function<$ByteBuf, $RegistryFriendlyByteBuf>;
        /**
         * @deprecated
         */
        static decorator(registry: $RegistryAccess): $Function<$ByteBuf, $RegistryFriendlyByteBuf>;
        registryAccess(): $RegistryAccess;
        getConnectionType(): $ConnectionType;
        static MAX_COMPONENT_STRING_LENGTH: number;
        static MAX_STRING_LENGTH: number;
        static DEFAULT_NBT_QUOTA: number;
        /**
         * @deprecated
         */
        constructor(source: $ByteBuf, registryAccess: $RegistryAccess);
        constructor(arg0: $ByteBuf, arg1: $RegistryAccess, arg2: $ConnectionType_);
        get connectionType(): $ConnectionType;
    }
    export class $ProtocolSwapHandler {
        static handleOutboundTerminalPacket(context: $ChannelHandlerContext, packet: $Packet<never>): void;
        static handleInboundTerminalPacket(context: $ChannelHandlerContext, packet: $Packet<never>): void;
    }
    export interface $ProtocolSwapHandler {
    }
    /**
     * Channel handler that handles protocol encryption.
     * 
     * @see Connection#setEncryptionKey
     */
    export class $CipherEncoder extends $MessageToByteEncoder<$ByteBuf> {
        encode(context: $ChannelHandlerContext, message: $ByteBuf, out: $ByteBuf): void;
        constructor(cipher: $Cipher);
    }
    export class $TickablePacketListener {
    }
    export interface $TickablePacketListener extends $PacketListener {
        tick(): void;
    }
    export class $FriendlyByteBuf extends $ByteBuf implements $IFriendlyByteBufExtension {
        writeMap<K, V>(map: $Map_<K, V>, keyWriter: $StreamEncoder_<$FriendlyByteBuf, K>, valueWriter: $StreamEncoder_<$FriendlyByteBuf, V>): void;
        clear(): $FriendlyByteBuf;
        getBytes(index: number, destination: $ByteBuffer): $FriendlyByteBuf;
        getBytes(index: number, destination: $ByteBuf, destinationIndex: number, length: number): $FriendlyByteBuf;
        getBytes(index: number, destination: $ByteBuf, length: number): $FriendlyByteBuf;
        getBytes(index: number, destination: $ByteBuf): $FriendlyByteBuf;
        getBytes(index: number, destination: number[]): $FriendlyByteBuf;
        getBytes(index: number, out: $OutputStream, length: number): $FriendlyByteBuf;
        getBytes(index: number, destination: number[], destinationIndex: number, length: number): $FriendlyByteBuf;
        writeInt(newCapacity: number): $FriendlyByteBuf;
        setShort(index: number, value: number): $FriendlyByteBuf;
        setInt(index: number, value: number): $FriendlyByteBuf;
        setDouble(index: number, value: number): $FriendlyByteBuf;
        readBytes(destination: $ByteBuf): $FriendlyByteBuf;
        readBytes(destination: $ByteBuf, length: number): $FriendlyByteBuf;
        readBytes(out: $OutputStream, length: number): $FriendlyByteBuf;
        readBytes(destination: $ByteBuffer): $FriendlyByteBuf;
        readBytes(destination: $ByteBuf, destinationIndex: number, length: number): $FriendlyByteBuf;
        writeChar(newCapacity: number): $FriendlyByteBuf;
        writeFloat(value: number): $FriendlyByteBuf;
        writeDouble(value: number): $FriendlyByteBuf;
        setIndex(index: number, value: number): $FriendlyByteBuf;
        getSource(): $ByteBuf;
        /**
         * Reads a String with a maximum length of `Short.MAX_VALUE`.
         * 
         * @see #readUtf(int)
         * @see #writeUtf
         */
        readUtf(): string;
        /**
         * Reads a string with a maximum length from this buffer.
         * 
         * @see #writeUtf
         */
        readUtf(maxLength: number): string;
        /**
         * Write a timestamp as milliseconds since the unix epoch.
         * 
         * @see #readDate
         */
        writeDate(time: $Date): $FriendlyByteBuf;
        setIntLE(index: number, value: number): $FriendlyByteBuf;
        setShortLE(index: number, value: number): $FriendlyByteBuf;
        setLongLE(index: number, value: number): $FriendlyByteBuf;
        setBytes(index: number, destination: $ByteBuf): $FriendlyByteBuf;
        setBytes(index: number, destination: $ByteBuf, destinationIndex: number, length: number): $FriendlyByteBuf;
        setBytes(index: number, destination: $ByteBuffer): $FriendlyByteBuf;
        setBytes(index: number, destination: number[], destinationIndex: number, length: number): $FriendlyByteBuf;
        setBytes(index: number, destination: number[]): $FriendlyByteBuf;
        writeZero(newCapacity: number): $FriendlyByteBuf;
        /**
         * Writes a String with a maximum length.
         * 
         * @see #readUtf
         */
        writeUtf(string: string, maxLength: number): $FriendlyByteBuf;
        /**
         * Writes a String with a maximum length of `Short.MAX_VALUE`.
         * 
         * @see #readUtf
         */
        writeUtf(string: string): $FriendlyByteBuf;
        static limitValue<T>(_function: $IntFunction_<T>, limit: number): $IntFunction<T>;
        writeIntLE(newCapacity: number): $FriendlyByteBuf;
        /**
         * Reads a compressed int from the buffer. To do so it maximally reads 5 byte-sized chunks whose most significant bit dictates whether another byte should be read.
         * 
         * @see #writeVarInt
         */
        readVarInt(): number;
        /**
         * Reads an enum of the given type T using the ordinal encoded as a VarInt from the buffer.
         * 
         * @see #writeEnum
         */
        readEnum<T extends $Enum<T>>(enumClass: $Class<T>): T;
        /**
         * Read a timestamp as milliseconds since the unix epoch.
         * 
         * @see #writeDate
         */
        readDate(): $Date;
        writeVec3(vec3: $Vec3_): void;
        readById<T>(idLookuo: $IntFunction_<T>): T;
        writeById<T>(idGetter: $ToIntFunction_<T>, value: T): $FriendlyByteBuf;
        readVec3(): $Vec3;
        /**
         * Writes an enum of the given type T using the ordinal encoded as a VarInt to the buffer.
         * 
         * @see #readEnum
         */
        writeEnum(value: $Enum<never>): $FriendlyByteBuf;
        /**
         * Read a BitSet as a long[].
         * 
         * @see #writeBitSet
         */
        readBitSet(): $BitSet;
        discardSomeReadBytes(): $FriendlyByteBuf;
        /**
         * @deprecated
         */
        readWithCodecTrusted<T>(ops: $DynamicOps<$Tag_>, codec: $Codec<T>): T;
        /**
         * Write a ResourceLocation using its String representation.
         * 
         * @see #readResourceLocation
         */
        writeResourceLocation(resourceLocation: $ResourceLocation_): $FriendlyByteBuf;
        /**
         * Read a ResourceLocation using its String representation.
         * 
         * @see #writeResourceLocation
         */
        readResourceLocation(): $ResourceLocation;
        /**
         * Write a BlockHitResult.
         * 
         * @see #readBlockHitResult
         */
        writeBlockHitResult(result: $BlockHitResult): void;
        /**
         * Reads a NBT CompoundTag from this buffer.
         * `null` is a valid value and may be returned.
         * 
         * This method will read a maximum of 0x200000 bytes.
         * 
         * @see #writeNbt
         * @see #readAnySizeNbt
         * @see #readNbt(NbtAccounter)
         */
        readNbt(): $CompoundTag;
        readNbt(nbtAccounter: $NbtAccounter): $Tag;
        static readNbt(buffer: $ByteBuf): $CompoundTag;
        static readNbt(buffer: $ByteBuf, nbtAccounter: $NbtAccounter): $Tag;
        writeNbt(tag: $Tag_ | null): $FriendlyByteBuf;
        static writeNbt(buffer: $ByteBuf, nbt: $Tag_ | null): void;
        readByteArray(maxLength: number): number[];
        static readByteArray(buffer: $ByteBuf): number[];
        static readByteArray(buffer: $ByteBuf, maxSize: number): number[];
        readByteArray(): number[];
        static writeByteArray(buffer: $ByteBuf, array: number[]): void;
        writeByteArray(destination: number[]): $FriendlyByteBuf;
        writeVector3f(vector3f: $Vector3f): void;
        static writeVector3f(buffer: $ByteBuf, vector3f: $Vector3f): void;
        writeQuaternion(quaternion: $Quaternionf): void;
        static writeQuaternion(buffer: $ByteBuf, quaternion: $Quaternionf): void;
        static readQuaternion(buffer: $ByteBuf): $Quaternionf;
        readQuaternion(): $Quaternionf;
        readNullable<T>(reader: $StreamDecoder_<$FriendlyByteBuf, T>): T;
        static readNullable<T, B extends $ByteBuf>(buffer: B, reader: $StreamDecoder_<B, T>): T;
        static writeNullable<T, B extends $ByteBuf>(buffer: B, value: T | null, writer: $StreamEncoder_<B, T>): void;
        writeNullable<T>(value: T | null, writer: $StreamEncoder_<$FriendlyByteBuf, T>): void;
        static readVector3f(buffer: $ByteBuf): $Vector3f;
        readVector3f(): $Vector3f;
        setMediumLE(index: number, value: number): $FriendlyByteBuf;
        writeShortLE(newCapacity: number): $FriendlyByteBuf;
        writeMedium(newCapacity: number): $FriendlyByteBuf;
        writeMediumLE(newCapacity: number): $FriendlyByteBuf;
        writeLongLE(value: number): $FriendlyByteBuf;
        markReaderIndex(): $FriendlyByteBuf;
        readerIndex(newCapacity: number): $FriendlyByteBuf;
        resetWriterIndex(): $FriendlyByteBuf;
        /**
         * @deprecated
         */
        readWithCodec<T>(ops: $DynamicOps<$Tag_>, codec: $Codec<T>, nbtAccounter: $NbtAccounter): T;
        writeJsonWithCodec<T>(codec: $Codec<T>, value: T): void;
        readCollection<T, C extends $Collection<T>>(collectionFactory: $IntFunction_<C>, elementReader: $StreamDecoder_<$FriendlyByteBuf, T>): C;
        writeEnumSet<E extends $Enum<E>>(enumSet: $EnumSet<E>, enumClass: $Class<E>): void;
        writeCollection<T>(collection: $Collection_<T>, elementWriter: $StreamEncoder_<$FriendlyByteBuf, T>): void;
        /**
         * Writes an array of longs to the buffer, prefixed by the length of the array (as a VarInt).
         * 
         * @see #readLongArray
         */
        writeLongArray(array: number[]): $FriendlyByteBuf;
        readJsonWithCodec<T>(codec: $Codec<T>): T;
        /**
         * Reads a length-prefixed array of longs from the buffer.
         */
        readLongArray(): number[];
        /**
         * Reads a length-prefixed array of longs with a maximum length from the buffer.
         * Will try to use the given long[] if possible. Note that if an array with the correct size is given, maxLength is ignored.
         */
        readLongArray(array: number[] | null, maxLength: number): number[];
        /**
         * Reads a length-prefixed array of longs from the buffer.
         * Will try to use the given long[] if possible. Note that if an array with the correct size is given, maxLength is ignored.
         */
        readLongArray(array: number[] | null): number[];
        /**
         * Reads a ChunkPos encoded as a long from the buffer.
         * 
         * @see #writeChunkPos
         */
        readChunkPos(): $ChunkPos;
        /**
         * Writes a ChunkPos encoded as a long to the buffer.
         * 
         * @see #readChunkPos
         */
        writeChunkPos(chunkPos: $ChunkPos): $FriendlyByteBuf;
        /**
         * Reads a compressed long from the buffer. To do so it maximally reads 10 byte-sized chunks whose most significant bit dictates whether another byte should be read.
         * 
         * @see #writeVarLong
         */
        readVarLong(): number;
        writeVarLong(value: number): $FriendlyByteBuf;
        writeFixedBitSet(bitSet: $BitSet, size: number): void;
        readRegistryKey<T>(): $ResourceKey<$Registry<T>>;
        /**
         * @deprecated
         */
        writeWithCodec<T>(ops: $DynamicOps<$Tag_>, codec: $Codec<T>, value: T): $FriendlyByteBuf;
        writeVarInt(newCapacity: number): $FriendlyByteBuf;
        /**
         * Read an IntList of VarInts from this buffer.
         * 
         * @see #writeIntIdList
         */
        readIntIdList(): $IntList;
        /**
         * Reads an array of VarInts with a maximum length from this buffer.
         * 
         * @see #writeVarIntArray
         */
        readVarIntArray(maxLength: number): number[];
        /**
         * Reads an array of VarInts from this buffer.
         * 
         * @see #writeVarIntArray
         */
        readVarIntArray(): number[];
        /**
         * Reads a SectionPos encoded as a long from the buffer.
         * 
         * @see #writeSectionPos
         */
        readSectionPos(): $SectionPos;
        readInstant(): $Instant;
        writeInstant(instant: $Instant): void;
        /**
         * Write an IntList to this buffer. Every element is encoded as a VarInt.
         * 
         * @see #readIntIdList
         */
        writeIntIdList(itIdList: $IntList): void;
        writeResourceKey(resourceKey: $ResourceKey_<never>): void;
        /**
         * Writes an array of VarInts to the buffer, prefixed by the length of the array (as a VarInt).
         * 
         * @see #readVarIntArray
         */
        writeVarIntArray(array: number[]): $FriendlyByteBuf;
        readGlobalPos(): $GlobalPos;
        readPublicKey(): $PublicKey;
        /**
         * Read a VarInt N from this buffer, then reads N values by calling `reader`.
         */
        readWithCount(reader: $Consumer_<$FriendlyByteBuf>): void;
        readOptional<T>(reader: $StreamDecoder_<$FriendlyByteBuf, T>): (T) | undefined;
        /**
         * Writes a SectionPos encoded as a long to the buffer.
         * 
         * @see #readSectionPos
         */
        writeSectionPos(sectionPos: $SectionPos): $FriendlyByteBuf;
        writePublicKey(publicKey: $PublicKey): $FriendlyByteBuf;
        /**
         * Read a BlockHitResult.
         * 
         * @see #writeBlockHitResult
         */
        readBlockHitResult(): $BlockHitResult;
        readEnumSet<E extends $Enum<E>>(enumClass: $Class<E>): $EnumSet<E>;
        readResourceKey<T>(registryKey: $ResourceKey_<$Registry<T>>): $ResourceKey<T>;
        /**
         * Write a BitSet as a long[].
         * 
         * @see #readBitSet
         */
        writeBitSet(bitSet: $BitSet): void;
        writeOptional<T>(optional: (T) | undefined, writer: $StreamEncoder_<$FriendlyByteBuf, T>): void;
        readFixedBitSet(size: number): $BitSet;
        writeGlobalPos(pos: $GlobalPos_): void;
        readMap<K, V, M extends $Map<K, V>>(mapFactory: $IntFunction_<M>, keyReader: $StreamDecoder_<$FriendlyByteBuf, K>, valueReader: $StreamDecoder_<$FriendlyByteBuf, V>): M;
        readMap<K, V>(keyReader: $StreamDecoder_<$FriendlyByteBuf, K>, valueReader: $StreamDecoder_<$FriendlyByteBuf, V>): $Map<K, V>;
        readList<T>(elementReader: $StreamDecoder_<$FriendlyByteBuf, T>): $List<T>;
        static readUUID(buffer: $ByteBuf): $UUID;
        /**
         * Reads a UUID encoded as two longs from this buffer.
         * 
         * @see #writeUUID
         */
        readUUID(): $UUID;
        /**
         * Writes a UUID encoded as two longs to this buffer.
         * 
         * @see #readUUID
         */
        writeUUID(uuid: $UUID_): $FriendlyByteBuf;
        static writeUUID(buffer: $ByteBuf, id: $UUID_): void;
        /**
         * Reads a BlockPos encoded as a long from the buffer.
         * 
         * @see #writeBlockPos
         */
        readBlockPos(): $BlockPos;
        static readBlockPos(buffer: $ByteBuf): $BlockPos;
        static writeBlockPos(buffer: $ByteBuf, pos: $BlockPos_): void;
        /**
         * Writes a BlockPos encoded as a long to the buffer.
         * 
         * @see #readBlockPos
         */
        writeBlockPos(pos: $BlockPos_): $FriendlyByteBuf;
        /**
         * Variant of `FriendlyByteBuf#writeMap(Map, StreamEncoder, StreamEncoder)` that allows writing values
         * that depend on the key.
         */
        writeMap<K, V>(map: $Map_<K, V>, keyWriter: $StreamEncoder_<$FriendlyByteBuf, K>, valueWriter: $TriConsumer_<$FriendlyByteBuf, K, V>): void;
        /**
         * Writes a byte to the buffer
         */
        writeByte(value: number): $FriendlyByteBuf;
        /**
         * Writes the entries in the given set to the buffer, by first writing the count and then writing each entry.
         */
        writeObjectCollection<T>(set: $Collection_<T>, writer: $BiConsumer_<T, $FriendlyByteBuf>): void;
        writeArray<T>(arg0: T[], arg1: $StreamEncoder_<$FriendlyByteBuf, T>): $FriendlyByteBuf;
        /**
         * Variant of `FriendlyByteBuf#readMap(StreamDecoder, StreamDecoder)` that allows reading values
         * that depend on the key.
         */
        readMap<K, V>(keyReader: $StreamDecoder_<$FriendlyByteBuf, K>, valueReader: $BiFunction_<$FriendlyByteBuf, K, V>): $Map<K, V>;
        readArray<T>(arg0: $IntFunction_<T[]>, arg1: $StreamDecoder_<$FriendlyByteBuf, T>): T[];
        retain(arg0: number): $ReferenceCounted;
        retain(): $ReferenceCounted;
        static MAX_COMPONENT_STRING_LENGTH: number;
        static MAX_STRING_LENGTH: number;
        static DEFAULT_NBT_QUOTA: number;
        constructor(source: $ByteBuf);
        get source(): $ByteBuf;
    }
    export class $VarInt {
        static write(buffer: $ByteBuf, value: number): $ByteBuf;
        static read(buffer: $ByteBuf): number;
        static hasContinuationBit(data: number): boolean;
        static getByteSize(data: number): number;
        constructor();
    }
    export class $ProtocolInfo$Unbound$PacketVisitor {
    }
    export interface $ProtocolInfo$Unbound$PacketVisitor {
        accept(packetType: $PacketType_<never>, index: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ProtocolInfo$Unbound$PacketVisitor}.
     */
    export type $ProtocolInfo$Unbound$PacketVisitor_ = ((arg0: $PacketType<never>, arg1: number) => void);
    /**
     * Used to signify that a packet encoding error is not fatal. If a packet fails to encode, but `Packet#isSkippable` returns true, then this exception is thrown instead and `Connection` will log a message instead of closing the connection.
     */
    export class $SkipPacketException extends $EncoderException {
        constructor(cause: $Throwable);
    }
    export class $UnconfiguredPipelineHandler$InboundConfigurationTask {
    }
    export interface $UnconfiguredPipelineHandler$InboundConfigurationTask {
        run(context: $ChannelHandlerContext): void;
        andThen(task: $UnconfiguredPipelineHandler$InboundConfigurationTask_): $UnconfiguredPipelineHandler$InboundConfigurationTask;
    }
    /**
     * Values that may be interpreted as {@link $UnconfiguredPipelineHandler$InboundConfigurationTask}.
     */
    export type $UnconfiguredPipelineHandler$InboundConfigurationTask_ = ((arg0: $ChannelHandlerContext) => void);
    /**
     * Main netty packet decoder. Reads the packet ID as a VarInt and creates the corresponding packet
     * based on the current `ConnectionProtocol`.
     */
    export class $PacketDecoder<T extends $PacketListener> extends $ByteToMessageDecoder implements $ProtocolSwapHandler, $DecoderHandlerAccessor<any> {
        decode(context: $ChannelHandlerContext, _in: $ByteBuf, out: $List_<$Object>): void;
        getProtocolInfo(): $ProtocolInfo<$Object>;
        static COMPOSITE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        static MERGE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        constructor(protocolInfo: $ProtocolInfo<$Object>);
        get protocolInfo(): $ProtocolInfo<$Object>;
    }
    export class $PacketSendListener {
        static thenRun(onSuccessOrFailure: $Runnable_): $PacketSendListener;
        static exceptionallySend(exceptionalPacketSupplier: $Supplier_<$Packet<never>>): $PacketSendListener;
    }
    export interface $PacketSendListener {
        onFailure(): $Packet<never>;
        onSuccess(): void;
    }
    /**
     * Handles compression of network traffic.
     * 
     * @see Connection#setupCompression
     */
    export class $CompressionEncoder extends $MessageToByteEncoder<$ByteBuf> {
        encode(context: $ChannelHandlerContext, encodingByteBuf: $ByteBuf, byteBuf: $ByteBuf): void;
        setThreshold(threshold: number): void;
        getThreshold(): number;
        constructor(threshold: number);
    }
    export class $PacketBundlePacker extends $MessageToMessageDecoder<$Packet<never>> {
        decode(context: $ChannelHandlerContext, packet: $Packet<never>, arg2: $List_<$Object>): void;
        constructor(bundlerInfo: $BundlerInfo);
    }
    export class $ClientboundPacketListener {
    }
    export interface $ClientboundPacketListener extends $PacketListener {
        flow(): $PacketFlow;
    }
    /**
     * Main netty packet encoder. Writes the packet ID as a VarInt based on the current `ConnectionProtocol` as well as the packet's data.
     */
    export class $PacketEncoder<T extends $PacketListener> extends $MessageToByteEncoder<$Packet<T>> {
        encode(arg0: $ChannelHandlerContext, arg1: $Packet<T>, arg2: $ByteBuf): void;
        getProtocolInfo(): $ProtocolInfo<T>;
        constructor(protocolInfo: $ProtocolInfo<T>);
        get protocolInfo(): $ProtocolInfo<T>;
    }
    /**
     * Prepends each frame ("packet") with its length encoded as a VarInt. Every frame's length must fit within a 3-byte VarInt.
     * 
     * @see Varint21FrameDecoder
     */
    export class $Varint21LengthFieldPrepender extends $MessageToByteEncoder<$ByteBuf> {
        encode(context: $ChannelHandlerContext, encoder: $ByteBuf, decoder: $ByteBuf): void;
        static MAX_VARINT21_BYTES: number;
        constructor();
    }
    export class $BandwidthDebugMonitor {
        tick(): void;
        onReceive(amount: number): void;
        constructor(bandwithLogger: $LocalSampleLogger);
    }
    export class $NoOpFrameDecoder extends $ChannelInboundHandlerAdapter {
        constructor();
    }
    export class $CipherBase {
        decipher(ctx: $ChannelHandlerContext, buffer: $ByteBuf): $ByteBuf;
        encipher(input: $ByteBuf, out: $ByteBuf): void;
        constructor(cipher: $Cipher);
    }
    /**
     * Handles decompression of network traffic.
     * 
     * @see Connection#setupCompression
     */
    export class $CompressionDecoder extends $ByteToMessageDecoder {
        decode(context: $ChannelHandlerContext, _in: $ByteBuf, out: $List_<$Object>): void;
        setThreshold(threshold: number, validateDecompressed: boolean): void;
        static MAXIMUM_UNCOMPRESSED_LENGTH: number;
        static MAXIMUM_COMPRESSED_LENGTH: number;
        static COMPOSITE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        static MERGE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        constructor(threshold: number, validateDecompressed: boolean);
    }
    export class $HandlerNames {
        static LEGACY_QUERY: string;
        static ENCODER: string;
        static DECOMPRESS: string;
        static BUNDLER: string;
        static PACKET_HANDLER: string;
        static COMPRESS: string;
        static INBOUND_CONFIG: string;
        static DECRYPT: string;
        static UNBUNDLER: string;
        static OUTBOUND_CONFIG: string;
        static SPLITTER: string;
        static LATENCY: string;
        static ENCRYPT: string;
        static TIMEOUT: string;
        static PREPENDER: string;
        static DECODER: string;
        constructor();
    }
    export class $PacketBundleUnpacker extends $MessageToMessageEncoder<$Packet<never>> {
        encode(context: $ChannelHandlerContext, packet: $Packet<never>, arg2: $List_<$Object>): void;
        constructor(bundlerInfo: $BundlerInfo);
    }
    export class $UnconfiguredPipelineHandler {
        static setupInboundProtocol<T extends $PacketListener>(protocolInfo: $ProtocolInfo<T>): $UnconfiguredPipelineHandler$InboundConfigurationTask;
        static setupOutboundProtocol<T extends $PacketListener>(protocolInfo: $ProtocolInfo<T>): $UnconfiguredPipelineHandler$OutboundConfigurationTask;
        constructor();
        static set upInboundProtocol(value: $ProtocolInfo<T>);
        static set upOutboundProtocol(value: $ProtocolInfo<T>);
    }
    export class $ServerboundPacketListener {
    }
    export interface $ServerboundPacketListener extends $PacketListener {
        flow(): $PacketFlow;
    }
    export class $UnconfiguredPipelineHandler$Inbound extends $ChannelDuplexHandler {
        constructor();
    }
    export class $Connection extends $SimpleChannelInboundHandler<$Packet<never>> implements $NetworkManagerAccessor, $ConnectionExtension {
        /**
         * Returns `true` if this `Connection` has an active channel, `false` otherwise.
         */
        isConnected(): boolean;
        /**
         * Returns the socket address of the remote side. Server-only.
         */
        getRemoteAddress(): $SocketAddress;
        static connect(address: $InetSocketAddress, useEpollIfAvailable: boolean, connection: $Connection): $ChannelFuture;
        /**
         * Will iterate through the outboundPacketQueue and dispatch all Packets
         */
        setReadOnly(): void;
        channel(): $Channel;
        /**
         * Will iterate through the outboundPacketQueue and dispatch all Packets
         */
        tick(): void;
        send(packet: $Packet<never>): void;
        send(packet: $Packet<never>, sendListener: $PacketSendListener | null): void;
        send(packet: $Packet<never>, sendListener: $PacketSendListener | null, flush: boolean): void;
        disconnect(disconnectionDetails: $DisconnectionDetails_): void;
        /**
         * Closes the channel with a given reason. The reason is stored for later and will be used for informational purposes (info log on server,
         * disconnection screen on the client). This method is also called on the client when the server requests disconnection via
         * `ClientboundDisconnectPacket`.
         * 
         * Closing the channel this way does not send any disconnection packets, it simply terminates the underlying netty channel.
         */
        disconnect(message: $Component_): void;
        /**
         * Returns `true` if this `Connection` has an active channel, `false` otherwise.
         */
        isEncrypted(): boolean;
        /**
         * Gets the current handler for processing packets
         */
        getPacketListener(): $PacketListener;
        getInboundProtocol(): $ProtocolInfo<never>;
        /**
         * Will iterate through the outboundPacketQueue and dispatch all Packets
         */
        tickSecond(): void;
        /**
         * The receiving packet direction (i.e. SERVERBOUND on the server and CLIENTBOUND on the client).
         */
        getSending(): $PacketFlow;
        channelRead0(context: $ChannelHandlerContext, packet: $Packet<never>): void;
        runOnceConnected(action: $Consumer_<$Connection>): void;
        /**
         * Returns `true` if this `Connection` has an active channel, `false` otherwise.
         */
        isConnecting(): boolean;
        setBandwidthLogger(bandwithLogger: $LocalSampleLogger): void;
        /**
         * Enables encryption for this connection using the given decrypting and encrypting ciphers.
         * This adds new handlers to this connection's pipeline which handle the decrypting and encrypting.
         * This happens as part of the normal network handshake.
         * 
         * @see net.minecraft.network.protocol.login.ClientboundHelloPacket
         * @see net.minecraft.network.protocol.login.ServerboundKeyPacket
         */
        setEncryptionKey(decryptingCipher: $Cipher, encryptingCipher: $Cipher): void;
        getLoggableAddress(logIps: boolean): string;
        /**
         * The receiving packet direction (i.e. SERVERBOUND on the server and CLIENTBOUND on the client).
         */
        getReceiving(): $PacketFlow;
        static connectToServer(address: $InetSocketAddress, useEpollIfAvailable: boolean, sampleLogger: $LocalSampleLogger | null): $Connection;
        /**
         * Enables or disables compression for this connection. If `threshold` is >= 0 then a `CompressionDecoder` and `CompressionEncoder`
         * are installed in the pipeline or updated if they already exist. If `threshold` is < 0 then any such codec are removed.
         * 
         * Compression is enabled as part of the connection handshake when the server sends `ClientboundLoginCompressionPacket`.
         */
        setupCompression(threshold: number, validateDecompressed: boolean): void;
        /**
         * Will iterate through the outboundPacketQueue and dispatch all Packets
         */
        flushChannel(): void;
        /**
         * The receiving packet direction (i.e. SERVERBOUND on the server and CLIENTBOUND on the client).
         */
        getDirection(): $PacketFlow;
        initiateServerboundPlayConnection<S extends $ServerboundPacketListener, C extends $ClientboundPacketListener>(hostName: string, port: number, serverboundProtocol: $ProtocolInfo<S>, clientbountProtocol: $ProtocolInfo<C>, packetListener: C, isTransfer: boolean): void;
        initiateServerboundPlayConnection(hostName: string, port: number, packetListener: $ClientLoginPacketListener): void;
        /**
         * Prepares a clientside Connection for a local in-memory connection ("single player").
         * Establishes a connection to the socket supplied and configures the channel pipeline (only the packet handler is necessary,
         * since this is for an in-memory connection). Returns the newly created instance.
         */
        static connectToLocalServer(address: $SocketAddress): $Connection;
        static configureInMemoryPipeline(pipeline: $ChannelPipeline, flow: $PacketFlow_): void;
        static configureSerialization(pipeline: $ChannelPipeline, flow: $PacketFlow_, memoryOnly: boolean, bandwithDebugMonitor: $BandwidthDebugMonitor | null): void;
        getAverageReceivedPackets(): number;
        configurePacketHandler(pipeline: $ChannelPipeline): void;
        getDisconnectionDetails(): $DisconnectionDetails;
        getAverageSentPackets(): number;
        sable$setUDPChannel(arg0: $Channel): void;
        sable$getUDPChannel(): $Channel;
        setListenerForServerboundHandshake(packetListener: $PacketListener): void;
        handler$zzh000$connectivity$on(arg0: $ChannelHandlerContext, arg1: $Throwable, arg2: $CallbackInfo): void;
        setupInboundProtocol<T extends $PacketListener>(protocolInfo: $ProtocolInfo<T>, packetInfo: T): void;
        setupOutboundProtocol(protocolInfo: $ProtocolInfo<never>): void;
        /**
         * Will iterate through the outboundPacketQueue and dispatch all Packets
         */
        handleDisconnection(): void;
        handler$jdk000$axiom$exceptionCaught(channelHandlerContext: $ChannelHandlerContext, throwable: $Throwable, ci: $CallbackInfo): void;
        initiateServerboundStatusConnection(hostName: string, port: number, packetListener: $ClientStatusPacketListener): void;
        handler$jdk000$axiom$beforeDisconnect(ci: $CallbackInfo): void;
        handler$bok000$chat_heads$chatheads$resetServerKnowledge(ci: $CallbackInfo): void;
        /**
         * Returns `true` if this `Connection` has an active channel, `false` otherwise.
         */
        isMemoryConnection(): boolean;
        getChannel(): $Channel;
        static PACKET_MARKER: $Marker;
        bandwidthDebugMonitor: $BandwidthDebugMonitor;
        static PACKET_SENT_MARKER: $Marker;
        static NETWORK_WORKER_GROUP: $Supplier<$NioEventLoopGroup>;
        static PACKET_RECEIVED_MARKER: $Marker;
        static LOCAL_WORKER_GROUP: $Supplier<$DefaultEventLoopGroup>;
        static ROOT_MARKER: $Marker;
        static NETWORK_EPOLL_WORKER_GROUP: $Supplier<$EpollEventLoopGroup>;
        constructor(receiving: $PacketFlow_);
        get connected(): boolean;
        get remoteAddress(): $SocketAddress;
        get encrypted(): boolean;
        get packetListener(): $PacketListener;
        get inboundProtocol(): $ProtocolInfo<never>;
        get sending(): $PacketFlow;
        get connecting(): boolean;
        set bandwidthLogger(value: $LocalSampleLogger);
        get receiving(): $PacketFlow;
        get direction(): $PacketFlow;
        get averageReceivedPackets(): number;
        get disconnectionDetails(): $DisconnectionDetails;
        get averageSentPackets(): number;
        set listenerForServerboundHandshake(value: $PacketListener);
        set upOutboundProtocol(value: $ProtocolInfo<never>);
        get memoryConnection(): boolean;
    }
    export class $ProtocolInfo<T extends $PacketListener> {
    }
    export interface $ProtocolInfo<T extends $PacketListener> {
        id(): $ConnectionProtocol;
        codec(): $StreamCodec<$ByteBuf, $Packet<T>>;
        bundlerInfo(): $BundlerInfo;
        flow(): $PacketFlow;
    }
    /**
     * Counterpart to `Varint21LengthFieldPrepender`. Decodes each frame ("packet") by first reading its length and then its data.
     */
    export class $Varint21FrameDecoder extends $ByteToMessageDecoder {
        decode(context: $ChannelHandlerContext, _in: $ByteBuf, out: $List_<$Object>): void;
        handlerRemoved0(context: $ChannelHandlerContext): void;
        static COMPOSITE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        static MERGE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        constructor(monitor: $BandwidthDebugMonitor | null);
    }
    export class $UnconfiguredPipelineHandler$OutboundConfigurationTask {
    }
    export interface $UnconfiguredPipelineHandler$OutboundConfigurationTask {
        run(context: $ChannelHandlerContext): void;
        andThen(task: $UnconfiguredPipelineHandler$OutboundConfigurationTask_): $UnconfiguredPipelineHandler$OutboundConfigurationTask;
    }
    /**
     * Values that may be interpreted as {@link $UnconfiguredPipelineHandler$OutboundConfigurationTask}.
     */
    export type $UnconfiguredPipelineHandler$OutboundConfigurationTask_ = ((arg0: $ChannelHandlerContext) => void);
}
