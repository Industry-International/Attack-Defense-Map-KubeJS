import { $Keyable, $MapCodec_, $Decoder$Simple, $DataResult, $MapEncoder, $DynamicOps, $Codec, $MapLike, $ListBuilder, $Decoder$Boxed, $Lifecycle, $Encoder, $RecordBuilder$AbstractUniversalBuilder, $Dynamic, $MapCodec, $Decoder, $Codec$ResultFunction, $Encoder_, $RecordBuilder, $Decoder$Terminal, $Decoder_ } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $TimeUnit, $Semaphore, $CompletableFuture, $TimeUnit_, $Executor_ } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $EntityType_, $Mob, $MobSpawnType_ } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $ByteBuffer } from "@package/java/nio";
import { $ReportedException, $CrashReportCategory } from "@package/net/minecraft";
import { $Proxy, $URI, $URL } from "@package/java/net";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $RemappedEnumConstant } from "@package/dev/latvian/mods/rhino/util";
import { $Cipher, $SecretKey } from "@package/javax/crypto";
import { $Item } from "@package/net/minecraft/world/item";
import { $Component_, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $Palette } from "@package/net/minecraft/world/level/chunk";
import { $Instant } from "@package/java/time";
import { $Float2FloatFunction_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $IntProvider_, $UniformInt } from "@package/net/minecraft/util/valueproviders";
import { $AABB_, $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Vector4f, $Vector3f, $AxisAngle4f, $Quaternionf } from "@package/org/joml";
import { $JsonObject_, $JsonObject, $JsonElement_, $TypeAdapterFactory, $TypeAdapter, $JsonElement, $JsonArray_, $JsonDeserializationContext_, $JsonArray, $Gson } from "@package/com/google/gson";
import { $Annotation } from "@package/java/lang/annotation";
import { $TypeToken } from "@package/com/google/gson/reflect";
import { $UUID_, $Set_, $AbstractSet, $Map, $Spliterator, $Base64$Encoder, $List, $Map_, $List_, $Collection, $AbstractList, $OptionalLong, $Comparator, $RandomAccess, $Iterator, $UUID, $Deque, $BitSet, $AbstractCollection } from "@package/java/util";
import { $IntFunction_, $Supplier_, $Function, $BiConsumer_, $LongSupplier, $IntConsumer_, $UnaryOperator_, $ToIntFunction_, $IntFunction, $Consumer_, $Predicate, $BiConsumer, $Consumer, $IntPredicate_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $Vec3i, $Holder, $Direction_, $IdMap, $Direction$Axis_, $Holder_, $HolderSet } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $EncoderCacheAccessor } from "@package/org/embeddedt/modernfix/common/mixin/perf/encoder_cache_leak";
import { $Cloneable, $Number, $Exception, $Throwable, $Enum, $RuntimeException, $Comparable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $PropertyMap } from "@package/com/mojang/authlib/properties";
import { $PositionalRandomFactory } from "@package/net/minecraft/world/level/levelgen";
import { $BitStorageExtension } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $Int2IntFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $DataOutput, $Reader, $Writer, $Serializable, $Closeable, $InputStream, $File_, $IOException } from "@package/java/io";
import { $Fraction } from "@package/org/apache/commons/lang3/math";
import { $Logger } from "@package/org/slf4j";
import { $HashCode, $HashFunction } from "@package/com/google/common/hash";
import { $Multimap, $AbstractIterator } from "@package/com/google/common/collect";
import { $KeyPair, $PublicKey, $Key, $PrivateKey } from "@package/java/security";
import { $Pattern } from "@package/java/util/regex";
import { $TemporalAccessor } from "@package/java/time/temporal";
import { $LoadingCache } from "@package/com/google/common/cache";
import { $BigInteger, $BigDecimal } from "@package/java/math";
import { $ServicesKeyType_, $ServicesKeySet_ } from "@package/com/mojang/authlib/yggdrasil";
import { $LongStream, $Stream, $IntStream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BaseMapCodec } from "@package/com/mojang/serialization/codecs";
import { $JsonWriter } from "@package/com/google/gson/stream";
export * as datafix from "@package/net/minecraft/util/datafix";
export * as thread from "@package/net/minecraft/util/thread";
export * as debugchart from "@package/net/minecraft/util/debugchart";
export * as profiling from "@package/net/minecraft/util/profiling";
export * as random from "@package/net/minecraft/util/random";
export * as parsing from "@package/net/minecraft/util/parsing";
export * as worldupdate from "@package/net/minecraft/util/worldupdate";
export * as valueproviders from "@package/net/minecraft/util/valueproviders";
export * as eventlog from "@package/net/minecraft/util/eventlog";
export * as monitoring from "@package/net/minecraft/util/monitoring";

declare module "@package/net/minecraft/util" {
    export class $SequencedPriorityIterator<T> extends $AbstractIterator<T> {
        add(arg0: T, arg1: number): void;
        computeNext(): T;
        constructor();
    }
    export class $SmoothDouble {
        reset(): void;
        getNewDeltaValue(arg0: number, arg1: number): number;
        constructor();
    }
    export class $SimpleBitStorage implements $BitStorage, $BitStorageExtension {
        get(arg0: number): number;
        set(arg0: number, arg1: number): void;
        copy(): $BitStorage;
        getSize(): number;
        getAndSet(arg0: number, arg1: number): number;
        getAll(arg0: $IntConsumer_): void;
        getBits(): number;
        unpack(arg0: number[]): void;
        getRaw(): number[];
        sodium$unpack(arg0: $Object[], arg1: $Palette<any>): void;
        constructor(arg0: number, arg1: number, arg2: number[]);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: number[]);
        get size(): number;
        get bits(): number;
        get raw(): number[];
    }
    /**
     * @deprecated
     */
    export class $StringRepresentable$EnumCodec<E extends $Enum<E>> extends $StringRepresentable$StringRepresentableCodec<E> {
        byName(arg0: string): E;
        byName(arg0: string, arg1: E): E;
        fieldOf(arg0: string): $MapEncoder<E>;
        promotePartial(arg0: $Consumer_<string>): $Decoder<E>;
        constructor(arg0: E[], arg1: $Function_<string, E>);
    }
    export class $LowerCaseEnumTypeAdapterFactory implements $TypeAdapterFactory {
        create<T>(arg0: $Gson, arg1: $TypeToken<T>): $TypeAdapter<T>;
        toLowercase(arg0: $Object): string;
        constructor();
    }
    export class $SpawnUtil {
        static trySpawnMob<T extends $Mob>(arg0: $EntityType_<T>, arg1: $MobSpawnType_, arg2: $ServerLevel, arg3: $BlockPos_, arg4: number, arg5: number, arg6: number, arg7: $SpawnUtil$Strategy_): (T) | undefined;
        constructor();
    }
    export class $CubicSampler$Vec3Fetcher {
    }
    export interface $CubicSampler$Vec3Fetcher {
        fetch(arg0: number, arg1: number, arg2: number): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $CubicSampler$Vec3Fetcher}.
     */
    export type $CubicSampler$Vec3Fetcher_ = ((arg0: number, arg1: number, arg2: number) => $Vec3_);
    export class $CryptException extends $Exception {
        constructor(arg0: $Throwable);
    }
    export class $ExtraCodecs$1ContextRetrievalCodec extends $MapCodec<E> {
    }
    export class $FastBufferedInputStream extends $InputStream {
        constructor(arg0: $InputStream);
        constructor(arg0: $InputStream, arg1: number);
    }
    export class $ArrayListDeque$ReversedView extends $AbstractList<T> implements $ListAndDeque<T> {
        remove(): T;
        peek(): T;
        element(): T;
        poll(): T;
        push(arg0: T): void;
        pop(): T;
        offer(arg0: T): boolean;
        reversed(): $Deque<T>;
    }
    export class $CsvOutput$Builder {
        build(arg0: $Writer): $CsvOutput;
        addColumn(arg0: string): $CsvOutput$Builder;
        constructor();
    }
    export class $FileZipper implements $Closeable {
        add(arg0: $Path_): void;
        add(arg0: $Path_, arg1: string): void;
        add(arg0: $Path_, arg1: $File_): void;
        close(): void;
        constructor(arg0: $Path_);
    }
    /**
     * @deprecated
     */
    export class $LazyLoadedValue<T> {
        get(): T;
        constructor(arg0: $Supplier_<T>);
    }
    export class $NativeModuleLister {
        static listModules(): $List<$NativeModuleLister$NativeModuleInfo>;
        static addCrashSection(arg0: $CrashReportCategory): void;
        constructor();
    }
    export class $TimeSource {
    }
    export interface $TimeSource {
        get(arg0: $TimeUnit_): number;
    }
    /**
     * Values that may be interpreted as {@link $TimeSource}.
     */
    export type $TimeSource_ = ((arg0: $TimeUnit) => number);
    export class $Graph {
        static depthFirstSearch<T>(arg0: $Map_<T, $Set_<T>>, arg1: $Set_<T>, arg2: $Set_<T>, arg3: $Consumer_<T>, arg4: T): boolean;
    }
    export class $ExtraCodecs {
        static converter<T>(arg0: $DynamicOps<T>): $Codec<T>;
        static nonEmptyList<T>(arg0: $Codec<$List_<T>>): $Codec<$List<T>>;
        static optionalEmptyMap<A>(arg0: $Codec<A>): $Codec<(A) | undefined>;
        static overrideLifecycle<E>(arg0: $Codec<E>, arg1: $Function_<E, $Lifecycle>): $Codec<E>;
        static overrideLifecycle<E>(arg0: $Codec<E>, arg1: $Function_<E, $Lifecycle>, arg2: $Function_<E, $Lifecycle>): $Codec<E>;
        static sizeLimitedMap<K, V>(arg0: $Codec<$Map_<K, V>>, arg1: number): $Codec<$Map<K, V>>;
        static nonEmptyHolderSet<T>(arg0: $Codec<$HolderSet_<T>>): $Codec<$HolderSet<T>>;
        static retrieveContext<E>(arg0: $Function_<$DynamicOps<never>, $DataResult<E>>): $MapCodec<E>;
        static orElsePartial<A>(arg0: A): $Codec$ResultFunction<A>;
        static temporalCodec(arg0: $DateTimeFormatter): $Codec<$TemporalAccessor>;
        static asOptionalLong(arg0: $MapCodec_<(number) | undefined>): $MapCodec<$OptionalLong>;
        static ensureHomogenous<E, L extends $Collection<E>, T>(arg0: $Function_<E, T>): $Function<L, $DataResult<L>>;
        static object2BooleanMap<T>(arg0: $Codec<T>): $Codec<$Object2BooleanMap<T>>;
        static strictUnboundedMap<K, V>(arg0: $Codec<K>, arg1: $Codec<V>): $ExtraCodecs$StrictUnboundedMapCodec<K, V>;
        static catchDecoderException<A>(arg0: $Codec<A>): $Codec<A>;
        /**
         * @deprecated
         */
        static dispatchOptionalValue<K, V>(arg0: string, arg1: string, arg2: $Codec<K>, arg3: $Function_<V, K>, arg4: $Function_<K, $Codec<V>>): $MapCodec<V>;
        static intRange(arg0: number, arg1: number): $Codec<number>;
        static orCompressed<E>(arg0: $Codec<E>, arg1: $Codec<E>): $Codec<E>;
        static orCompressed<E>(arg0: $MapCodec_<E>, arg1: $MapCodec_<E>): $MapCodec<E>;
        static idResolverCodec<E>(arg0: $ToIntFunction_<E>, arg1: $IntFunction_<E>, arg2: number): $Codec<E>;
        static intervalCodec<P, I>(arg0: $Codec<P>, arg1: string, arg2: string, arg3: $BiFunction_<P, P, $DataResult<I>>, arg4: $Function_<I, P>, arg5: $Function_<I, P>): $Codec<I>;
        static JAVA: $Codec<$Object>;
        static POSITIVE_FLOAT: $Codec<number>;
        static QUATERNIONF: $Codec<$Quaternionf>;
        static BIT_SET: $Codec<$BitSet>;
        static JSON: $Codec<$JsonElement>;
        static ARGB_COLOR_CODEC: $Codec<number>;
        static UNSIGNED_BYTE: $Codec<number>;
        static PATTERN: $Codec<$Pattern>;
        static TAG_OR_ELEMENT_ID: $Codec<$ExtraCodecs$TagOrElementLocation>;
        static VECTOR4F: $Codec<$Vector4f>;
        static BASE64_STRING: $Codec<number[]>;
        static PLAYER_NAME: $Codec<string>;
        static toOptionalLong: $Function<(number) | undefined, $OptionalLong>;
        static POSITIVE_INT: $Codec<number>;
        static QUATERNIONF_COMPONENTS: $Codec<$Quaternionf>;
        static fromOptionalLong: $Function<$OptionalLong, (number) | undefined>;
        static ESCAPED_STRING: $Codec<string>;
        static AXISANGLE4F: $Codec<$AxisAngle4f>;
        static GAME_PROFILE: $Codec<$GameProfile>;
        static NON_NEGATIVE_INT: $Codec<number>;
        static PROPERTY_MAP: $Codec<$PropertyMap>;
        static VECTOR3F: $Codec<$Vector3f>;
        static INSTANT_ISO8601: $Codec<$Instant>;
        static NON_EMPTY_STRING: $Codec<string>;
        static CODEPOINT: $Codec<number>;
        static RESOURCE_PATH_CODEC: $Codec<string>;
        static MATRIX4F: $Codec<$Matrix4f>;
        constructor();
    }
    export class $Crypt$ByteArrayToKeyFunction<T extends $Key> {
    }
    export interface $Crypt$ByteArrayToKeyFunction<T extends $Key> {
    }
    /**
     * Values that may be interpreted as {@link $Crypt$ByteArrayToKeyFunction}.
     */
    export type $Crypt$ByteArrayToKeyFunction_<T> = (() => void);
    export class $Crypt {
        static generateKeyPair(): $KeyPair;
        static stringToRsaPublicKey(arg0: string): $PublicKey;
        static stringToPemRsaPrivateKey(arg0: string): $PrivateKey;
        static byteToPublicKey(arg0: number[]): $PublicKey;
        static getCipher(arg0: number, arg1: $Key): $Cipher;
        static digestData(arg0: string, arg1: $PublicKey, arg2: $SecretKey): number[];
        static pemRsaPrivateKeyToString(arg0: $PrivateKey): string;
        static decryptByteToSecretKey(arg0: $PrivateKey, arg1: number[]): $SecretKey;
        static rsaPublicKeyToString(arg0: $PublicKey): string;
        static generateSecretKey(): $SecretKey;
        static encryptUsingKey(arg0: $Key, arg1: number[]): number[];
        static decryptUsingKey(arg0: $Key, arg1: number[]): number[];
        static PUBLIC_KEY_CODEC: $Codec<$PublicKey>;
        static PRIVATE_KEY_CODEC: $Codec<$PrivateKey>;
        static SIGNATURE_BYTES: number;
        static SIGNING_ALGORITHM: string;
        static MIME_ENCODER: $Base64$Encoder;
        static MIME_LINE_SEPARATOR: string;
        static RSA_PUBLIC_KEY_HEADER: string;
        constructor();
    }
    export class $LinearCongruentialGenerator {
        static next(arg0: number, arg1: number): number;
        constructor();
    }
    export class $SingleKeyCache<K, V> {
        getValue(arg0: K): V;
        constructor(arg0: $Function_<K, V>);
    }
    export class $DirectoryLock$LockException extends $IOException {
        static alreadyLocked(arg0: $Path_): $DirectoryLock$LockException;
    }
    export class $NativeModuleLister$NativeModuleInfo {
        name: string;
        version: ($NativeModuleLister$NativeModuleVersion) | undefined;
        constructor(arg0: string, arg1: ($NativeModuleLister$NativeModuleVersion) | undefined);
    }
    export class $SegmentedAnglePrecision {
        toDegrees(arg0: number): number;
        normalize(arg0: number): number;
        getMask(): number;
        isSameAxis(arg0: number, arg1: number): boolean;
        fromDegreesWithTurns(arg0: number): number;
        fromDegrees(arg0: number): number;
        fromDirection(arg0: $Direction_): number;
        toDegreesWithTurns(arg0: number): number;
        constructor(arg0: number);
        get mask(): number;
    }
    export class $AbortableIterationConsumer$Continuation extends $Enum<$AbortableIterationConsumer$Continuation> {
        static values(): $AbortableIterationConsumer$Continuation[];
        static valueOf(arg0: string): $AbortableIterationConsumer$Continuation;
        shouldAbort(): boolean;
        static CONTINUE: $AbortableIterationConsumer$Continuation;
        static ABORT: $AbortableIterationConsumer$Continuation;
    }
    /**
     * Values that may be interpreted as {@link $AbortableIterationConsumer$Continuation}.
     */
    export type $AbortableIterationConsumer$Continuation_ = "continue" | "abort";
    export class $CubicSpline$Builder<C, I extends $ToFloatFunction<C>> {
        build(): $CubicSpline<C, I>;
        addPoint(arg0: number, arg1: number, arg2: number): $CubicSpline$Builder<C, I>;
        addPoint(arg0: number, arg1: $CubicSpline<C, I>): $CubicSpline$Builder<C, I>;
        addPoint(arg0: number, arg1: number): $CubicSpline$Builder<C, I>;
        constructor(arg0: I);
        constructor(arg0: I, arg1: $ToFloatFunction<number>);
    }
    export class $FutureChain implements $TaskChainer, $AutoCloseable {
        append<T>(arg0: $CompletableFuture<T>, arg1: $Consumer_<T>): void;
        close(): void;
        append(arg0: $Runnable_): void;
        constructor(arg0: $Executor_);
    }
    export class $ProgressListener {
    }
    export interface $ProgressListener {
        stop(): void;
        progressStagePercentage(arg0: number): void;
        progressStartNoAbort(arg0: $Component_): void;
        progressStage(arg0: $Component_): void;
        progressStart(arg0: $Component_): void;
    }
    export class $CommonLinks {
        static extendRealms(arg0: string, arg1: $UUID_, arg2: boolean): string;
        static extendRealms(arg0: string, arg1: $UUID_): string;
        static ACCESSIBILITY_HELP: $URI;
        static ATTRIBUTION: $URI;
        static BUY_REALMS: $URI;
        static EULA: $URI;
        static GENERAL_HELP: $URI;
        static SNAPSHOT_FEEDBACK: $URI;
        static SYMLINK_HELP: $URI;
        static PRIVACY_STATEMENT: $URI;
        static RELEASE_FEEDBACK: $URI;
        static REALMS_CONTENT_CREATION: $URI;
        static SUSPENSION_HELP: $URI;
        static REALMS_TERMS: $URI;
        static BLOCKING_HELP: $URI;
        static LICENSES: $URI;
        static ACCOUNT_SETTINGS: $URI;
        static BUY_MINECRAFT_JAVA: $URI;
        static SNAPSHOT_BUGS_FEEDBACK: $URI;
        static START_REALMS_TRIAL: $URI;
        static GDPR: $URI;
        static REPORTING_HELP: $URI;
        constructor();
    }
    export class $DelegateDataOutput implements $DataOutput {
        write(arg0: number[], arg1: number, arg2: number): void;
        write(arg0: number[]): void;
        write(arg0: number): void;
        writeInt(arg0: number): void;
        writeUTF(arg0: string): void;
        writeBytes(arg0: string): void;
        writeChar(arg0: number): void;
        writeFloat(arg0: number): void;
        writeBoolean(arg0: boolean): void;
        writeByte(arg0: number): void;
        writeShort(arg0: number): void;
        writeLong(arg0: number): void;
        writeDouble(arg0: number): void;
        writeChars(arg0: string): void;
        constructor(arg0: $DataOutput);
    }
    export class $OptionEnum {
    }
    export interface $OptionEnum {
        getKey(): string;
        getId(): number;
        getCaption(): $Component;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    export class $KeyDispatchDataCodec<A> extends $Record {
        static of<A>(arg0: $MapCodec_<A>): $KeyDispatchDataCodec<A>;
        codec(): $MapCodec<A>;
        constructor(arg0: $MapCodec_<A>);
    }
    export class $SignatureUpdater {
    }
    export interface $SignatureUpdater {
        update(arg0: $SignatureUpdater$Output_): void;
    }
    /**
     * Values that may be interpreted as {@link $SignatureUpdater}.
     */
    export type $SignatureUpdater_ = ((arg0: $SignatureUpdater$Output) => void);
    export class $ClassInstanceMultiMap<T> extends $AbstractCollection<T> {
        find<S>(arg0: $Class<S>): $Collection<S>;
        getAllInstances(): $List<T>;
        constructor(arg0: $Class<T>);
        get allInstances(): $List<T>;
    }
    export class $Mth {
        static length(arg0: number, arg1: number): number;
        static length(arg0: number, arg1: number, arg2: number): number;
        static abs(arg0: number): number;
        static abs(arg0: number): number;
        static sin(arg0: number): number;
        static cos(arg0: number): number;
        static atan2(arg0: number, arg1: number): number;
        static sqrt(arg0: number): number;
        static floor(arg0: number): number;
        static floor(arg0: number): number;
        static ceil(arg0: number): number;
        static ceil(arg0: number): number;
        static getInt(arg0: string, arg1: number): number;
        static clamp(arg0: number, arg1: number, arg2: number): number;
        static clamp(arg0: number, arg1: number, arg2: number): number;
        static clamp(arg0: number, arg1: number, arg2: number): number;
        static clamp(arg0: number, arg1: number, arg2: number): number;
        static map(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static map(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static equal(arg0: number, arg1: number): boolean;
        static equal(arg0: number, arg1: number): boolean;
        static sign(arg0: number): number;
        static color(arg0: number, arg1: number, arg2: number): number;
        static nextDouble(arg0: $RandomSource, arg1: number, arg2: number): number;
        static floorDiv(arg0: number, arg1: number): number;
        static binarySearch(arg0: number, arg1: number, arg2: $IntPredicate_): number;
        static nextInt(arg0: $RandomSource, arg1: number, arg2: number): number;
        static normal(arg0: $RandomSource, arg1: number, arg2: number): number;
        static square(arg0: number): number;
        static square(arg0: number): number;
        static square(arg0: number): number;
        static square(arg0: number): number;
        static nextFloat(arg0: $RandomSource, arg1: number, arg2: number): number;
        /**
         * @deprecated
         */
        static getSeed(arg0: number, arg1: number, arg2: number): number;
        /**
         * @deprecated
         */
        static getSeed(arg0: $Vec3i): number;
        static ceillog2(arg0: number): number;
        static isPowerOfTwo(arg0: number): boolean;
        static lengthSquared(arg0: number, arg1: number, arg2: number): number;
        static lengthSquared(arg0: number, arg1: number, arg2: number): number;
        static lengthSquared(arg0: number, arg1: number): number;
        static log2(arg0: number): number;
        static absMax(arg0: number, arg1: number): number;
        static rotLerp(arg0: number, arg1: number, arg2: number): number;
        static rotLerp(arg0: number, arg1: number, arg2: number): number;
        static smallestEncompassingPowerOfTwo(arg0: number): number;
        static lfloor(arg0: number): number;
        static approach(arg0: number, arg1: number, arg2: number): number;
        static lerp2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        static hsvToArgb(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static lerp3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): number;
        static frac(arg0: number): number;
        static frac(arg0: number): number;
        static lerpInt(arg0: number, arg1: number, arg2: number): number;
        static hsvToRgb(arg0: number, arg1: number, arg2: number): number;
        static smoothstep(arg0: number): number;
        static wobble(arg0: number): number;
        static catmullrom(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static clampedMap(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static clampedMap(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static quantize(arg0: number, arg1: number): number;
        static wrapDegrees(arg0: number): number;
        static wrapDegrees(arg0: number): number;
        static wrapDegrees(arg0: number): number;
        static createInsecureUUID(): $UUID;
        static createInsecureUUID(arg0: $RandomSource): $UUID;
        static degreesDifference(arg0: number, arg1: number): number;
        static approachDegrees(arg0: number, arg1: number, arg2: number): number;
        static positiveModulo(arg0: number, arg1: number): number;
        static positiveModulo(arg0: number, arg1: number): number;
        static positiveModulo(arg0: number, arg1: number): number;
        static rotateIfNecessary(arg0: number, arg1: number, arg2: number): number;
        static inverseLerp(arg0: number, arg1: number, arg2: number): number;
        static inverseLerp(arg0: number, arg1: number, arg2: number): number;
        static rayIntersectsAABB(arg0: $Vec3_, arg1: $Vec3_, arg2: $AABB_): boolean;
        /**
         * @deprecated
         */
        static fastInvSqrt(arg0: number): number;
        static clampedLerp(arg0: number, arg1: number, arg2: number): number;
        static clampedLerp(arg0: number, arg1: number, arg2: number): number;
        static fastInvCubeRoot(arg0: number): number;
        static murmurHash3Mixer(arg0: number): number;
        static isMultipleOf(arg0: number, arg1: number): boolean;
        static lerpDiscrete(arg0: number, arg1: number, arg2: number): number;
        static positiveCeilDiv(arg0: number, arg1: number): number;
        static mulAndTruncate(arg0: $Fraction, arg1: number): number;
        static outFromOrigin(arg0: number, arg1: number, arg2: number, arg3: number): $IntStream;
        static outFromOrigin(arg0: number, arg1: number, arg2: number): $IntStream;
        static rotationAroundAxis(arg0: $Vector3f, arg1: $Quaternionf, arg2: $Quaternionf): $Quaternionf;
        static roundToward(arg0: number, arg1: number): number;
        static randomBetween(arg0: $RandomSource, arg1: number, arg2: number): number;
        static triangleWave(arg0: number, arg1: number): number;
        static lerp(arg0: number, arg1: number, arg2: number): number;
        static lerp(arg0: number, arg1: number, arg2: number): number;
        static invSqrt(arg0: number): number;
        static invSqrt(arg0: number): number;
        static degreesDifferenceAbs(arg0: number, arg1: number): number;
        static smoothstepDerivative(arg0: number): number;
        static randomBetweenInclusive(arg0: $RandomSource, arg1: number, arg2: number): number;
        static SQRT_OF_TWO: number;
        static PI: number;
        static TWO_PI: number;
        static Z_AXIS: $Vector3f;
        static X_AXIS: $Vector3f;
        static HALF_PI: number;
        static DEG_TO_RAD: number;
        static RAD_TO_DEG: number;
        static EPSILON: number;
        static Y_AXIS: $Vector3f;
        constructor();
    }
    export class $HttpUtil$DownloadProgressListener {
    }
    export interface $HttpUtil$DownloadProgressListener {
        requestStart(): void;
        requestFinished(arg0: boolean): void;
        downloadedBytes(arg0: number): void;
        downloadStart(arg0: $OptionalLong): void;
    }
    export class $CubicSpline$Constant<C, I extends $ToFloatFunction<C>> extends $Record implements $CubicSpline<C, I> {
        value(): number;
        apply(arg0: C): number;
        maxValue(): number;
        mapAll(arg0: $CubicSpline$CoordinateVisitor_<I>): $CubicSpline<C, I>;
        minValue(): number;
        parityString(): string;
        comap<C2>(arg0: $Function_<C2, C>): $ToFloatFunction<C2>;
        constructor(arg0: number);
    }
    export class $NullOps$NullMapBuilder extends $RecordBuilder$AbstractUniversalBuilder<$Unit, $Unit> {
    }
    export class $CrudeIncrementalIntIdentityHashBiMap<K> implements $IdMap<K> {
        size(): number;
        clear(): void;
        add(arg0: K): number;
        iterator(): $Iterator<K>;
        contains(arg0: K): boolean;
        contains(arg0: number): boolean;
        getId(arg0: K): number;
        copy(): $CrudeIncrementalIntIdentityHashBiMap<K>;
        static create<A>(arg0: number): $CrudeIncrementalIntIdentityHashBiMap<A>;
        addMapping(arg0: K, arg1: number): void;
        byId(arg0: number): K;
        byIdOrThrow(arg0: number): K;
        getIdOrThrow(arg0: K): number;
        spliterator(): $Spliterator<K>;
        forEach(arg0: $Consumer_<K>): void;
        [Symbol.iterator](): Iterator<K>
    }
    export class $ModCheck extends $Record {
        merge(arg0: $ModCheck_): $ModCheck;
        description(): string;
        shouldReportAsModified(): boolean;
        static identify(arg0: string, arg1: $Supplier_<string>, arg2: string, arg3: $Class<never>): $ModCheck;
        confidence(): $ModCheck$Confidence;
        fullDescription(): string;
        constructor(arg0: $ModCheck$Confidence_, arg1: string);
    }
    export class $SignatureUpdater$Output {
    }
    export interface $SignatureUpdater$Output {
        update(arg0: number[]): void;
    }
    /**
     * Values that may be interpreted as {@link $SignatureUpdater$Output}.
     */
    export type $SignatureUpdater$Output_ = ((arg0: number[]) => void);
    export class $FastColor {
        static as8BitChannel(arg0: number): number;
        constructor();
    }
    export class $FastColor$ARGB32 {
        static color(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static color(arg0: number, arg1: number, arg2: number): number;
        static color(arg0: number, arg1: number): number;
        static multiply(arg0: number, arg1: number): number;
        static red(arg0: number): number;
        static average(arg0: number, arg1: number): number;
        static blue(arg0: number): number;
        static green(arg0: number): number;
        static colorFromFloat(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static alpha(arg0: number): number;
        static opaque(arg0: number): number;
        static lerp(arg0: number, arg1: number, arg2: number): number;
        constructor();
    }
    export class $ExtraCodecs$TagOrElementLocation extends $Record {
        id(): $ResourceLocation;
        tag(): boolean;
        decoratedId(): string;
        constructor(arg0: $ResourceLocation_, arg1: boolean);
    }
    export class $PngInfo extends $Record {
        width(): number;
        static fromStream(arg0: $InputStream): $PngInfo;
        static fromBytes(arg0: number[]): $PngInfo;
        height(): number;
        static validateHeader(arg0: $ByteBuffer): void;
        constructor(arg0: number, arg1: number);
    }
    export class $FormattedCharSink {
    }
    export interface $FormattedCharSink {
        accept(arg0: number, arg1: $Style, arg2: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FormattedCharSink}.
     */
    export type $FormattedCharSink_ = ((arg0: number, arg1: $Style, arg2: number) => boolean);
    export class $NullOps implements $DynamicOps<$Unit> {
        remove(arg0: $Unit_, arg1: string): $Unit;
        empty(): $Unit;
        emptyList(): $Unit;
        getByteBuffer(arg0: $Unit_): $DataResult<$ByteBuffer>;
        emptyMap(): $Unit;
        getMap(arg0: $Unit_): $DataResult<$MapLike<$Unit>>;
        createMap(arg0: $Map_<$Unit_, $Unit_>): $Unit;
        createMap(arg0: $Stream<$Pair<$Unit_, $Unit_>>): $Unit;
        getStream(arg0: $Unit_): $DataResult<$Stream<$Unit>>;
        getBooleanValue(arg0: $Unit_): $DataResult<boolean>;
        getStringValue(arg0: $Unit_): $DataResult<string>;
        createFloat(arg0: number): $Unit;
        convertTo<U>(arg0: $DynamicOps<U>, arg1: $Unit_): U;
        createInt(arg0: number): $Unit;
        mapBuilder(): $RecordBuilder<$Unit>;
        createByte(arg0: number): $Unit;
        mergeToMap(arg0: $Unit_, arg1: $Map_<$Unit_, $Unit_>): $DataResult<$Unit>;
        mergeToMap(arg0: $Unit_, arg1: $Unit_, arg2: $Unit_): $DataResult<$Unit>;
        mergeToMap(arg0: $Unit_, arg1: $MapLike<$Unit_>): $DataResult<$Unit>;
        getList(arg0: $Unit_): $DataResult<$Consumer<$Consumer<$Unit>>>;
        getNumberValue(arg0: $Unit_): $DataResult<$Number>;
        createIntList(arg0: $IntStream): $Unit;
        createLongList(arg0: $LongStream): $Unit;
        getLongStream(arg0: $Unit_): $DataResult<$LongStream>;
        createShort(arg0: number): $Unit;
        mergeToList(arg0: $Unit_, arg1: $Unit_): $DataResult<$Unit>;
        mergeToList(arg0: $Unit_, arg1: $List_<$Unit_>): $DataResult<$Unit>;
        createBoolean(arg0: boolean): $Unit;
        getMapEntries(arg0: $Unit_): $DataResult<$Consumer<$BiConsumer<$Unit, $Unit>>>;
        getIntStream(arg0: $Unit_): $DataResult<$IntStream>;
        getMapValues(arg0: $Unit_): $DataResult<$Stream<$Pair<$Unit, $Unit>>>;
        get(arg0: $Unit_, arg1: string): $DataResult<$Unit>;
        update(arg0: $Unit_, arg1: string, arg2: $Function_<$Unit, $Unit>): $Unit;
        set(arg0: $Unit_, arg1: string, arg2: $Unit_): $Unit;
        getGeneric(arg0: $Unit_, arg1: $Unit_): $DataResult<$Unit>;
        withParser<E>(arg0: $Decoder_<E>): $Function<$Unit, $DataResult<E>>;
        convertMap<U>(arg0: $DynamicOps<U>, arg1: $Unit_): U;
        listBuilder(): $ListBuilder<$Unit>;
        convertList<U>(arg0: $DynamicOps<U>, arg1: $Unit_): U;
        updateGeneric(arg0: $Unit_, arg1: $Unit_, arg2: $Function_<$Unit, $Unit>): $Unit;
        withEncoder<E>(arg0: $Encoder_<E>): $Function<E, $DataResult<$Unit>>;
        withDecoder<E>(arg0: $Decoder_<E>): $Function<$Unit, $DataResult<$Pair<E, $Unit>>>;
        mergeToPrimitive(arg0: $Unit_, arg1: $Unit_): $DataResult<$Unit>;
        getNumberValue(arg0: $Unit_, arg1: $Number): $Number;
        compressMaps(): boolean;
        createLong(arg0: number): $Unit;
        createString(arg0: string): $Unit;
        createList(arg0: $Stream<$Unit_>): $Unit;
        createDouble(arg0: number): $Unit;
        createByteList(arg0: $ByteBuffer): $Unit;
        createNumeric(arg0: $Number): $Unit;
        static INSTANCE: $NullOps;
    }
    export class $Unit extends $Enum<$Unit> {
        static values(): $Unit[];
        static valueOf(arg0: string): $Unit;
        static CODEC: $Codec<$Unit>;
        static INSTANCE: $Unit;
    }
    /**
     * Values that may be interpreted as {@link $Unit}.
     */
    export type $Unit_ = "instance" | any;
    export class $MemoryReserve {
        static release(): void;
        static allocate(): void;
        constructor();
    }
    export class $EncoderCache$Key<A, T> extends $Record {
    }
    export class $CubicSpline$CoordinateVisitor<I> {
    }
    export interface $CubicSpline$CoordinateVisitor<I> {
        visit(arg0: I): I;
    }
    /**
     * Values that may be interpreted as {@link $CubicSpline$CoordinateVisitor}.
     */
    export type $CubicSpline$CoordinateVisitor_<I> = ((arg0: I) => I);
    export class $NativeModuleLister$NativeModuleVersion {
        description: string;
        company: string;
        version: string;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    export class $GsonHelper {
        static parse(arg0: $Reader, arg1: boolean): $JsonObject;
        static parse(arg0: $Reader): $JsonObject;
        static parse(arg0: string, arg1: boolean): $JsonObject;
        static parse(arg0: string): $JsonObject;
        static getType(arg0: $JsonElement_): string;
        static getAsInt(arg0: $JsonObject_, arg1: string, arg2: number): number;
        static getAsInt(arg0: $JsonObject_, arg1: string): number;
        static getAsDouble(arg0: $JsonObject_, arg1: string, arg2: number): number;
        static getAsDouble(arg0: $JsonObject_, arg1: string): number;
        static getAsLong(arg0: $JsonObject_, arg1: string): number;
        static getAsLong(arg0: $JsonObject_, arg1: string, arg2: number): number;
        static getAsBoolean(arg0: $JsonObject_, arg1: string, arg2: boolean): boolean;
        static getAsBoolean(arg0: $JsonObject_, arg1: string): boolean;
        static parseArray(arg0: $Reader): $JsonArray;
        static parseArray(arg0: string): $JsonArray;
        static getAsString(arg0: $JsonObject_, arg1: string, arg2: string): string;
        static getAsString(arg0: $JsonObject_, arg1: string): string;
        static getAsBigDecimal(arg0: $JsonObject_, arg1: string): $BigDecimal;
        static getAsBigDecimal(arg0: $JsonObject_, arg1: string, arg2: $BigDecimal): $BigDecimal;
        static getAsJsonObject(arg0: $JsonObject_, arg1: string, arg2: $JsonObject_): $JsonObject;
        static getAsJsonObject(arg0: $JsonObject_, arg1: string): $JsonObject;
        static getAsCharacter(arg0: $JsonObject_, arg1: string, arg2: string): string;
        static getAsCharacter(arg0: $JsonObject_, arg1: string): string;
        static getAsBigInteger(arg0: $JsonObject_, arg1: string, arg2: $BigInteger): $BigInteger;
        static getAsBigInteger(arg0: $JsonObject_, arg1: string): $BigInteger;
        static getAsJsonArray(arg0: $JsonObject_, arg1: string): $JsonArray;
        static getAsJsonArray(arg0: $JsonObject_, arg1: string, arg2: $JsonArray_): $JsonArray;
        static getAsFloat(arg0: $JsonObject_, arg1: string): number;
        static getAsFloat(arg0: $JsonObject_, arg1: string, arg2: number): number;
        static getAsByte(arg0: $JsonObject_, arg1: string): number;
        static getAsByte(arg0: $JsonObject_, arg1: string, arg2: number): number;
        static getAsShort(arg0: $JsonObject_, arg1: string): number;
        static getAsShort(arg0: $JsonObject_, arg1: string, arg2: number): number;
        static writeValue(arg0: $JsonWriter, arg1: $JsonElement_, arg2: $Comparator<string>): void;
        static fromJson<T>(arg0: $Gson, arg1: $Reader, arg2: $Class<T>, arg3: boolean): T;
        static fromJson<T>(arg0: $Gson, arg1: $Reader, arg2: $TypeToken<T>, arg3: boolean): T;
        static fromJson<T>(arg0: $Gson, arg1: $Reader, arg2: $TypeToken<T>): T;
        static fromJson<T>(arg0: $Gson, arg1: $Reader, arg2: $Class<T>): T;
        static fromJson<T>(arg0: $Gson, arg1: string, arg2: $Class<T>): T;
        static fromJson<T>(arg0: $Gson, arg1: string, arg2: $Class<T>, arg3: boolean): T;
        static getAsObject<T>(arg0: $JsonObject_, arg1: string, arg2: T, arg3: $JsonDeserializationContext_, arg4: $Class<T>): T;
        static getAsObject<T>(arg0: $JsonObject_, arg1: string, arg2: $JsonDeserializationContext_, arg3: $Class<T>): T;
        static convertToObject<T>(arg0: $JsonElement_, arg1: string, arg2: $JsonDeserializationContext_, arg3: $Class<T>): T;
        static convertToDouble(arg0: $JsonElement_, arg1: string): number;
        static getAsItem(arg0: $JsonObject_, arg1: string): $Holder<$Item>;
        static getAsItem(arg0: $JsonObject_, arg1: string, arg2: $Holder_<$Item>): $Holder<$Item>;
        static getNonNull(arg0: $JsonObject_, arg1: string): $JsonElement;
        static convertToCharacter(arg0: $JsonElement_, arg1: string): string;
        static convertToJsonArray(arg0: $JsonElement_, arg1: string): $JsonArray;
        static isBooleanValue(arg0: $JsonObject_, arg1: string): boolean;
        static isBooleanValue(arg0: $JsonElement_): boolean;
        static isValidPrimitive(arg0: $JsonObject_, arg1: string): boolean;
        static convertToString(arg0: $JsonElement_, arg1: string): string;
        static convertToInt(arg0: $JsonElement_, arg1: string): number;
        static isArrayNode(arg0: $JsonObject_, arg1: string): boolean;
        static convertToByte(arg0: $JsonElement_, arg1: string): number;
        static isNumberValue(arg0: $JsonElement_): boolean;
        static isNumberValue(arg0: $JsonObject_, arg1: string): boolean;
        static toStableString(arg0: $JsonElement_): string;
        static convertToLong(arg0: $JsonElement_, arg1: string): number;
        static isValidNode(arg0: $JsonObject_, arg1: string): boolean;
        static convertToShort(arg0: $JsonElement_, arg1: string): number;
        static isObjectNode(arg0: $JsonObject_, arg1: string): boolean;
        static fromNullableJson<T>(arg0: $Gson, arg1: string, arg2: $TypeToken<T>): T;
        static fromNullableJson<T>(arg0: $Gson, arg1: $Reader, arg2: $Class<T>, arg3: boolean): T;
        static fromNullableJson<T>(arg0: $Gson, arg1: string, arg2: $Class<T>, arg3: boolean): T;
        static fromNullableJson<T>(arg0: $Gson, arg1: string, arg2: $TypeToken<T>, arg3: boolean): T;
        static fromNullableJson<T>(arg0: $Gson, arg1: $Reader, arg2: $TypeToken<T>, arg3: boolean): T;
        static isStringValue(arg0: $JsonElement_): boolean;
        static isStringValue(arg0: $JsonObject_, arg1: string): boolean;
        static convertToItem(arg0: $JsonElement_, arg1: string): $Holder<$Item>;
        static convertToBoolean(arg0: $JsonElement_, arg1: string): boolean;
        static convertToFloat(arg0: $JsonElement_, arg1: string): number;
        static convertToBigDecimal(arg0: $JsonElement_, arg1: string): $BigDecimal;
        static convertToBigInteger(arg0: $JsonElement_, arg1: string): $BigInteger;
        static convertToJsonObject(arg0: $JsonElement_, arg1: string): $JsonObject;
        constructor();
    }
    export class $SignatureValidator {
        static from(arg0: $PublicKey, arg1: string): $SignatureValidator;
        static from(arg0: $ServicesKeySet_, arg1: $ServicesKeyType_): $SignatureValidator;
        static NO_VALIDATION: $SignatureValidator;
        static LOGGER: $Logger;
    }
    export interface $SignatureValidator {
        validate(arg0: $SignatureUpdater_, arg1: number[]): boolean;
        validate(arg0: number[], arg1: number[]): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SignatureValidator}.
     */
    export type $SignatureValidator_ = ((arg0: $SignatureUpdater, arg1: number[]) => boolean);
    export class $SimpleBitStorage$InitializationException extends $RuntimeException {
        constructor(arg0: string);
    }
    export class $CommonColors {
        static RED: number;
        static SOFT_RED: number;
        static SOFT_YELLOW: number;
        static WHITE: number;
        static GRAY: number;
        static LIGHT_GRAY: number;
        static LIGHTER_GRAY: number;
        static BLUE: number;
        static BLACK: number;
        static YELLOW: number;
        static GREEN: number;
        constructor();
    }
    export class $DebugBuffer<T> {
        dump(): $List<T>;
        push(arg0: T): void;
        constructor(arg0: number);
    }
    export class $CsvOutput {
        static builder(): $CsvOutput$Builder;
        writeRow(...arg0: $Object[]): void;
        constructor(arg0: $Writer, arg1: $List_<string>);
    }
    export class $ProblemReporter$Collector implements $ProblemReporter {
        get(): $Multimap<string, string>;
        report(arg0: string): void;
        getReport(): (string) | undefined;
        forChild(arg0: string): $ProblemReporter;
        constructor();
    }
    export class $Signer {
        static from(arg0: $PrivateKey, arg1: string): $Signer;
        static LOGGER: $Logger;
    }
    export interface $Signer {
        sign(arg0: $SignatureUpdater_): number[];
        sign(arg0: number[]): number[];
    }
    /**
     * Values that may be interpreted as {@link $Signer}.
     */
    export type $Signer_ = ((arg0: $SignatureUpdater) => number[]);
    export class $SortedArraySet$ArrayIterator implements $Iterator<T> {
        remove(): void;
        forEachRemaining(arg0: $Consumer_<T>): void;
    }
    export class $ParticleUtils {
        static spawnParticlesAlongAxis(arg0: $Direction$Axis_, arg1: $Level_, arg2: $BlockPos_, arg3: number, arg4: $ParticleOptions_, arg5: $UniformInt): void;
        static spawnParticles(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: $ParticleOptions_): void;
        static spawnParticlesOnBlockFaces(arg0: $Level_, arg1: $BlockPos_, arg2: $ParticleOptions_, arg3: $IntProvider_): void;
        static spawnParticlesOnBlockFace(arg0: $Level_, arg1: $BlockPos_, arg2: $ParticleOptions_, arg3: $IntProvider_, arg4: $Direction_, arg5: $Supplier_<$Vec3>, arg6: number): void;
        static spawnSmashAttackParticles(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number): void;
        static spawnParticleInBlock(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number, arg3: $ParticleOptions_): void;
        static spawnParticleBelow(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource, arg3: $ParticleOptions_): void;
        static spawnParticleOnFace(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $ParticleOptions_, arg4: $Vec3_, arg5: number): void;
        constructor();
    }
    export class $TimeUtil {
        static rangeOfSeconds(arg0: number, arg1: number): $UniformInt;
        static SECONDS_PER_HOUR: number;
        static SECONDS_PER_MINUTE: number;
        static NANOSECONDS_PER_SECOND: number;
        static MILLISECONDS_PER_SECOND: number;
        static NANOSECONDS_PER_MILLISECOND: number;
        constructor();
    }
    export class $RandomSource {
        static create(arg0: number): $RandomSource;
        static create(): $RandomSource;
        /**
         * @deprecated
         */
        static createThreadSafe(): $RandomSource;
        static createNewThreadLocalInstance(): $RandomSource;
        /**
         * @deprecated
         */
        static GAUSSIAN_SPREAD_FACTOR: number;
    }
    export interface $RandomSource {
        nextDouble(): number;
        nextInt(arg0: number): number;
        nextInt(): number;
        nextInt(arg0: number, arg1: number): number;
        setSeed(arg0: number): void;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextGaussian(): number;
        fork(): $RandomSource;
        triangle(arg0: number, arg1: number): number;
        forkPositional(): $PositionalRandomFactory;
        consumeCount(arg0: number): void;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        set seed(value: number);
    }
    export class $ExtraCodecs$StrictUnboundedMapCodec<K, V> extends $Record implements $Codec<$Map<K, V>>, $BaseMapCodec<K, V> {
        decode<T>(arg0: $DynamicOps<T>, arg1: $MapLike<T>): $DataResult<$Map<K, V>>;
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<$Map<K, V>, T>>;
        encode<T>(arg0: $Map_<K, V>, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        keyCodec(): $Codec<K>;
        elementCodec(): $Codec<V>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $Map<K, V>>, arg2: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$Map<K, V>, $DataResult<$Map<K, V>>>): $Codec<$Map<K, V>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElse(arg0: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElse(arg0: $Consumer_<string>, arg1: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        listOf(): $Codec<$List<$Map<K, V>>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$Map<K, V>>>;
        deprecated(arg0: number): $Codec<$Map<K, V>>;
        mapResult(arg0: $Codec$ResultFunction<$Map_<K, V>>): $Codec<$Map<K, V>>;
        flatXmap<S>(arg0: $Function_<$Map<K, V>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$Map<K, V>>>): $Codec<S>;
        xmap<S>(arg0: $Function_<$Map<K, V>, S>, arg1: $Function_<S, $Map<K, V>>): $Codec<S>;
        stable(): $Codec<$Map<K, V>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Map_<K, V>): $MapCodec<$Map<K, V>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Map_<K, V>, arg2: $Lifecycle): $MapCodec<$Map<K, V>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Map_<K, V>, arg3: $Lifecycle): $MapCodec<$Map<K, V>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($Map<K, V>) | undefined>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $Map<K, V>>, arg2: $Function_<$Map<K, V>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $MapCodec<E>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$Map<K, V>>>, arg2: $Function_<$Map<K, V>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchStable<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$Map<K, V>>>;
        flatComapMap<S>(arg0: $Function_<$Map<K, V>, S>, arg1: $Function_<S, $DataResult<$Map<K, V>>>): $Codec<S>;
        comapFlatMap<S>(arg0: $Function_<$Map<K, V>, $DataResult<S>>, arg1: $Function_<S, $Map<K, V>>): $Codec<S>;
        withLifecycle(arg0: $Lifecycle): $Codec<$Map<K, V>>;
        optionalFieldOf(arg0: string, arg1: $Map_<K, V>, arg2: $Lifecycle): $MapCodec<$Map<K, V>>;
        optionalFieldOf(arg0: string, arg1: $Map_<K, V>): $MapCodec<$Map<K, V>>;
        optionalFieldOf(arg0: string): $MapCodec<($Map<K, V>) | undefined>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Map_<K, V>, arg3: $Lifecycle): $MapCodec<$Map<K, V>>;
        encode<T>(arg0: $Map_<K, V>, arg1: $DynamicOps<T>, arg2: $RecordBuilder<T>): $RecordBuilder<T>;
        comap<B>(arg0: $Function_<B, $Map<K, V>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$Map<K, V>>>): $Encoder<B>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: $Map_<K, V>): $DataResult<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$Map<K, V>, T>>;
        map<B>(arg0: $Function_<$Map<K, V>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$Map<K, V>, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Map<K, V>>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$Map<K, V>>;
        boxed(): $Decoder$Boxed<$Map<K, V>>;
        terminal(): $Decoder$Terminal<$Map<K, V>>;
        simple(): $Decoder$Simple<$Map<K, V>>;
        fieldOf(arg0: string): $MapEncoder<$Map<K, V>>;
        promotePartial(arg0: $Consumer_<string>): $Decoder<$Map<K, V>>;
        constructor(arg0: $Codec<K>, arg1: $Codec<V>);
    }
    export class $ArrayListDeque<T> extends $AbstractList<T> implements $ListAndDeque<T> {
        capacity(): number;
        pollFirst(): T;
        pollLast(): T;
        offerLast(arg0: T): boolean;
        peekFirst(): T;
        removeFirstOccurrence(arg0: $Object): boolean;
        offerFirst(arg0: T): boolean;
        peekLast(): T;
        removeLastOccurrence(arg0: $Object): boolean;
        descendingIterator(): $Iterator<T>;
        remove(): T;
        peek(): T;
        element(): T;
        poll(): T;
        push(arg0: T): void;
        pop(): T;
        offer(arg0: T): boolean;
        constructor();
        constructor(arg0: number);
    }
    export class $BitStorage {
    }
    export interface $BitStorage {
        get(arg0: number): number;
        set(arg0: number, arg1: number): void;
        copy(): $BitStorage;
        getSize(): number;
        getAndSet(arg0: number, arg1: number): number;
        getAll(arg0: $IntConsumer_): void;
        getBits(): number;
        unpack(arg0: number[]): void;
        getRaw(): number[];
        get size(): number;
        get bits(): number;
        get raw(): number[];
    }
    export class $Crypt$SaltSupplier {
        static getLong(): number;
        constructor();
        static get long(): number;
    }
    export class $CubicSpline$1Point<C, I extends $ToFloatFunction<C>> extends $Record {
    }
    export class $AbortableIterationConsumer<T> {
        static forConsumer<T>(arg0: $Consumer_<T>): $AbortableIterationConsumer<T>;
    }
    export interface $AbortableIterationConsumer<T> {
        accept(arg0: T): $AbortableIterationConsumer$Continuation;
    }
    /**
     * Values that may be interpreted as {@link $AbortableIterationConsumer}.
     */
    export type $AbortableIterationConsumer_<T> = ((arg0: T) => $AbortableIterationConsumer$Continuation_);
    export class $DirectoryLock implements $AutoCloseable {
        close(): void;
        static create(arg0: $Path_): $DirectoryLock;
        static isLocked(arg0: $Path_): boolean;
        isValid(): boolean;
        static LOCK_FILE: string;
        get valid(): boolean;
    }
    export class $CubicSpline$Multipoint<C, I extends $ToFloatFunction<C>> extends $Record implements $CubicSpline<C, I> {
        values(): $List<$CubicSpline<C, I>>;
        apply(arg0: C): number;
        static create<C, I extends $ToFloatFunction<C>>(arg0: I, arg1: number[], arg2: $List_<$CubicSpline<C, I>>, arg3: number[]): $CubicSpline$Multipoint<C, I>;
        locations(): number[];
        maxValue(): number;
        mapAll(arg0: $CubicSpline$CoordinateVisitor_<I>): $CubicSpline<C, I>;
        minValue(): number;
        coordinate(): I;
        derivatives(): number[];
        parityString(): string;
        comap<C2>(arg0: $Function_<C2, C>): $ToFloatFunction<C2>;
        constructor(arg0: I, arg1: number[], arg2: $List_<$CubicSpline<C, I>>, arg3: number[], arg4: number, arg5: number);
    }
    export class $Brightness extends $Record {
        block(): number;
        pack(): number;
        static unpack(arg0: number): $Brightness;
        sky(): number;
        static FULL_BRIGHT: $Brightness;
        static CODEC: $Codec<$Brightness>;
        static LIGHT_VALUE_CODEC: $Codec<number>;
        constructor(arg0: number, arg1: number);
    }
    export class $ModCheck$Confidence extends $Enum<$ModCheck$Confidence> {
        static values(): $ModCheck$Confidence[];
        static valueOf(arg0: string): $ModCheck$Confidence;
        shouldReportAsModified: boolean;
        static VERY_LIKELY: $ModCheck$Confidence;
        description: string;
        static PROBABLY_NOT: $ModCheck$Confidence;
        static DEFINITELY: $ModCheck$Confidence;
    }
    /**
     * Values that may be interpreted as {@link $ModCheck$Confidence}.
     */
    export type $ModCheck$Confidence_ = "probably_not" | "very_likely" | "definitely";
    export class $DependencySorter$Entry<K> {
    }
    export interface $DependencySorter$Entry<K> {
        visitOptionalDependencies(arg0: $Consumer_<K>): void;
        visitRequiredDependencies(arg0: $Consumer_<K>): void;
    }
    export class $HttpUtil {
        static getAvailablePort(): number;
        static downloadFile(arg0: $Path_, arg1: $URL, arg2: $Map_<string, string>, arg3: $HashFunction, arg4: $HashCode, arg5: number, arg6: $Proxy, arg7: $HttpUtil$DownloadProgressListener): $Path;
        static isPortAvailable(arg0: number): boolean;
        static get availablePort(): number;
    }
    export class $ThreadingDetector {
        checkAndUnlock(): void;
        checkAndLock(): void;
        static makeThreadingException(arg0: string, arg1: $Thread): $ReportedException;
        lock: $Semaphore;
        constructor(arg0: string);
    }
    export class $VisibleForDebug implements $Annotation {
    }
    export class $StringRepresentable {
        static keys(arg0: $StringRepresentable_[]): $Keyable;
        static fromEnumWithMapping<E extends $Enum<E>>(arg0: $Supplier_<E[]>, arg1: $Function_<string, string>): $StringRepresentable$EnumCodec<E>;
        static createNameLookup<T extends $StringRepresentable>(arg0: T[], arg1: $Function_<string, string>): $Function<string, T>;
        static fromEnum<E extends $Enum<E>>(arg0: $Supplier_<E[]>): $StringRepresentable$EnumCodec<E>;
        static fromValues<T extends $StringRepresentable>(arg0: $Supplier_<T[]>): $Codec<T>;
        static PRE_BUILT_MAP_THRESHOLD: number;
    }
    export interface $StringRepresentable extends $RemappedEnumConstant {
        getRemappedEnumConstantName(): string;
        getSerializedName(): string;
        get remappedEnumConstantName(): string;
        get serializedName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StringRepresentable}.
     */
    export type $StringRepresentable_ = (() => string);
    export class $ToFloatFunction<C> {
        static createUnlimited(arg0: $Float2FloatFunction_): $ToFloatFunction<number>;
        static IDENTITY: $ToFloatFunction<number>;
    }
    export interface $ToFloatFunction<C> {
        apply(arg0: C): number;
        maxValue(): number;
        minValue(): number;
        comap<C2>(arg0: $Function_<C2, C>): $ToFloatFunction<C2>;
    }
    export class $ClassTreeIdRegistry {
        getCount(arg0: $Class<never>): number;
        define(arg0: $Class<never>): number;
        getLastIdFor(arg0: $Class<never>): number;
        static NO_ID_VALUE: number;
        constructor();
    }
    export class $StaticCache2D<T> {
        get(arg0: number, arg1: number): T;
        contains(arg0: number, arg1: number): boolean;
        forEach(arg0: $Consumer_<T>): void;
        static create<T>(arg0: number, arg1: number, arg2: number, arg3: $StaticCache2D$Initializer_<T>): $StaticCache2D<T>;
    }
    export class $ResourceLocationPattern {
        locationPredicate(): $Predicate<$ResourceLocation>;
        pathPredicate(): $Predicate<string>;
        namespacePredicate(): $Predicate<string>;
        static CODEC: $Codec<$ResourceLocationPattern>;
    }
    export class $Tuple<A, B> {
        getA(): A;
        getB(): B;
        setB(arg0: B): void;
        setA(arg0: A): void;
        constructor(arg0: A, arg1: B);
    }
    export class $TaskChainer {
        static immediate(arg0: $Executor_): $TaskChainer;
        static LOGGER: $Logger;
    }
    export interface $TaskChainer {
        append<T>(arg0: $CompletableFuture<T>, arg1: $Consumer_<T>): void;
        append(arg0: $Runnable_): void;
    }
    /**
     * Values that may be interpreted as {@link $TaskChainer}.
     */
    export type $TaskChainer_ = ((arg0: $CompletableFuture<any>, arg1: $Consumer<any>) => void);
    export class $ColorRGBA extends $Record {
        rgba(): number;
        static CODEC: $Codec<$ColorRGBA>;
        constructor(arg0: number);
    }
    export class $ArrayListDeque$DescendingIterator implements $Iterator<T> {
        remove(): void;
        forEachRemaining(arg0: $Consumer_<T>): void;
    }
    export class $StringDecomposer {
        static iterate(arg0: string, arg1: $Style, arg2: $FormattedCharSink_): boolean;
        static iterateBackwards(arg0: string, arg1: $Style, arg2: $FormattedCharSink_): boolean;
        static filterBrokenSurrogates(arg0: string): string;
        static iterateFormatted(arg0: string, arg1: number, arg2: $Style, arg3: $FormattedCharSink_): boolean;
        static iterateFormatted(arg0: string, arg1: $Style, arg2: $FormattedCharSink_): boolean;
        static iterateFormatted(arg0: $FormattedText, arg1: $Style, arg2: $FormattedCharSink_): boolean;
        static iterateFormatted(arg0: string, arg1: number, arg2: $Style, arg3: $Style, arg4: $FormattedCharSink_): boolean;
        static getPlainText(arg0: $FormattedText): string;
        constructor();
    }
    export class $Crypt$SaltSignaturePair extends $Record {
        signature(): number[];
        static write(arg0: $FriendlyByteBuf, arg1: $Crypt$SaltSignaturePair_): void;
        isValid(): boolean;
        salt(): number;
        saltAsBytes(): number[];
        static EMPTY: $Crypt$SaltSignaturePair;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: number, arg1: number[]);
        get valid(): boolean;
    }
    export class $ExceptionCollector<T extends $Throwable> {
        add(arg0: T): void;
        throwIfPresent(): void;
        constructor();
    }
    export class $StaticCache2D$Initializer<T> {
    }
    export interface $StaticCache2D$Initializer<T> {
        get(arg0: number, arg1: number): T;
    }
    /**
     * Values that may be interpreted as {@link $StaticCache2D$Initializer}.
     */
    export type $StaticCache2D$Initializer_<T> = ((arg0: number, arg1: number) => T);
    export class $ProblemReporter {
    }
    export interface $ProblemReporter {
        report(arg0: string): void;
        forChild(arg0: string): $ProblemReporter;
    }
    export class $ListAndDeque<T> {
    }
    export interface $ListAndDeque<T> extends $Serializable, $Cloneable, $Deque<T>, $List<T>, $RandomAccess {
        remove(): T;
        peek(): T;
        getFirst(): T;
        getLast(): T;
        element(): T;
        addFirst(arg0: T): void;
        addLast(arg0: T): void;
        removeFirst(): T;
        removeLast(): T;
        poll(): T;
        push(arg0: T): void;
        pop(): T;
        offer(arg0: T): boolean;
        reversed(): $Deque<T>;
        get first(): T;
        get last(): T;
    }
    export class $DependencySorter<K, V extends $DependencySorter$Entry<K>> {
        addEntry(arg0: K, arg1: V): $DependencySorter<K, V>;
        orderByDependencies(arg0: $BiConsumer_<K, V>): void;
        constructor();
    }
    export class $FormattedCharSequence {
        static fromList(arg0: $List_<$FormattedCharSequence_>): $FormattedCharSequence;
        static codepoint(arg0: number, arg1: $Style): $FormattedCharSequence;
        static composite(...arg0: $FormattedCharSequence_[]): $FormattedCharSequence;
        static composite(arg0: $FormattedCharSequence_, arg1: $FormattedCharSequence_): $FormattedCharSequence;
        static composite(arg0: $List_<$FormattedCharSequence_>): $FormattedCharSequence;
        static composite(arg0: $FormattedCharSequence_): $FormattedCharSequence;
        static composite(): $FormattedCharSequence;
        static decorateOutput(arg0: $FormattedCharSink_, arg1: $Int2IntFunction_): $FormattedCharSink;
        static forward(text: string, style: $Style): $FormattedCharSequence;
        static forward(arg0: string, arg1: $Style, arg2: $Int2IntFunction_): $FormattedCharSequence;
        static backward(arg0: string, arg1: $Style, arg2: $Int2IntFunction_): $FormattedCharSequence;
        static backward(arg0: string, arg1: $Style): $FormattedCharSequence;
        static fromPair(arg0: $FormattedCharSequence_, arg1: $FormattedCharSequence_): $FormattedCharSequence;
        static EMPTY: $FormattedCharSequence;
    }
    export interface $FormattedCharSequence {
        accept(arg0: $FormattedCharSink_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FormattedCharSequence}.
     */
    export type $FormattedCharSequence_ = ((arg0: $FormattedCharSink) => boolean);
    export class $ByIdMap {
        static sparse<T>(arg0: $ToIntFunction_<T>, arg1: T[], arg2: T): $IntFunction<T>;
        static continuous<T>(arg0: $ToIntFunction_<T>, arg1: T[], arg2: $ByIdMap$OutOfBoundsStrategy_): $IntFunction<T>;
        constructor();
    }
    export class $TimeSource$NanoTimeSource {
    }
    export interface $TimeSource$NanoTimeSource extends $TimeSource, $LongSupplier {
        get(arg0: $TimeUnit_): number;
    }
    /**
     * Values that may be interpreted as {@link $TimeSource$NanoTimeSource}.
     */
    export type $TimeSource$NanoTimeSource_ = (() => void);
    export class $CubicSampler {
        static gaussianSampleVec3(arg0: $Vec3_, arg1: $CubicSampler$Vec3Fetcher_): $Vec3;
    }
    export class $ByIdMap$OutOfBoundsStrategy extends $Enum<$ByIdMap$OutOfBoundsStrategy> {
        static values(): $ByIdMap$OutOfBoundsStrategy[];
        static valueOf(arg0: string): $ByIdMap$OutOfBoundsStrategy;
        static ZERO: $ByIdMap$OutOfBoundsStrategy;
        static WRAP: $ByIdMap$OutOfBoundsStrategy;
        static CLAMP: $ByIdMap$OutOfBoundsStrategy;
    }
    /**
     * Values that may be interpreted as {@link $ByIdMap$OutOfBoundsStrategy}.
     */
    export type $ByIdMap$OutOfBoundsStrategy_ = "zero" | "wrap" | "clamp";
    export class $InclusiveRange<T extends $Comparable<T>> extends $Record {
        contains(arg0: $InclusiveRange_<T>): boolean;
        static create<T extends $Comparable<T>>(arg0: T, arg1: T): $DataResult<$InclusiveRange<T>>;
        static codec<T extends $Comparable<T>>(arg0: $Codec<T>, arg1: T, arg2: T): $Codec<$InclusiveRange<T>>;
        static codec<T extends $Comparable<T>>(arg0: $Codec<T>): $Codec<$InclusiveRange<T>>;
        maxInclusive(): T;
        minInclusive(): T;
        isValueInRange(arg0: T): boolean;
        static INT: $Codec<$InclusiveRange<number>>;
        constructor(arg0: T, arg1: T);
        constructor(arg0: T);
    }
    export class $SpawnUtil$Strategy {
        static ON_TOP_OF_COLLIDER: $SpawnUtil$Strategy;
        /**
         * @deprecated
         */
        static LEGACY_IRON_GOLEM: $SpawnUtil$Strategy;
    }
    export interface $SpawnUtil$Strategy {
        canSpawnOn(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockState_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpawnUtil$Strategy}.
     */
    export type $SpawnUtil$Strategy_ = ((arg0: $ServerLevel, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockPos, arg4: $BlockState) => boolean);
    export class $CubicSpline<C, I extends $ToFloatFunction<C>> {
        static builder<C, I extends $ToFloatFunction<C>>(arg0: I): $CubicSpline$Builder<C, I>;
        static builder<C, I extends $ToFloatFunction<C>>(arg0: I, arg1: $ToFloatFunction<number>): $CubicSpline$Builder<C, I>;
        static constant<C, I extends $ToFloatFunction<C>>(arg0: number): $CubicSpline<C, I>;
        static codec<C, I extends $ToFloatFunction<C>>(arg0: $Codec<I>): $Codec<$CubicSpline<C, I>>;
    }
    export interface $CubicSpline<C, I extends $ToFloatFunction<C>> extends $ToFloatFunction<C> {
        mapAll(arg0: $CubicSpline$CoordinateVisitor_<I>): $CubicSpline<C, I>;
        parityString(): string;
    }
    export class $SortedArraySet<T> extends $AbstractSet<T> {
        get(arg0: T): T;
        last(): T;
        first(): T;
        static create<T>(arg0: $Comparator<T>): $SortedArraySet<T>;
        static create<T extends $Comparable<T>>(arg0: number): $SortedArraySet<T>;
        static create<T extends $Comparable<T>>(): $SortedArraySet<T>;
        static create<T>(arg0: $Comparator<T>, arg1: number): $SortedArraySet<T>;
        removeInternal(arg0: number): void;
        addOrGet(arg0: T): T;
        contents: T[];
    }
    export class $ZeroBitStorage implements $BitStorage, $BitStorageExtension {
        get(arg0: number): number;
        set(arg0: number, arg1: number): void;
        copy(): $BitStorage;
        getSize(): number;
        getAndSet(arg0: number, arg1: number): number;
        getAll(arg0: $IntConsumer_): void;
        getBits(): number;
        unpack(arg0: number[]): void;
        getRaw(): number[];
        sodium$unpack(arg0: $Object[], arg1: $Palette<any>): void;
        static RAW: number[];
        constructor(arg0: number);
        get size(): number;
        get bits(): number;
        get raw(): number[];
    }
    export class $StringRepresentable$StringRepresentableCodec<S extends $StringRepresentable> implements $Codec<S> {
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<S, T>>;
        encode<T>(arg0: S, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        dispatch<E>(arg0: string, arg1: $Function_<E, S>, arg2: $Function_<S, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, S>, arg1: $Function_<S, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<S, $DataResult<S>>): $Codec<S>;
        orElse(arg0: $UnaryOperator_<string>, arg1: S): $Codec<S>;
        orElse(arg0: S): $Codec<S>;
        orElse(arg0: $Consumer_<string>, arg1: S): $Codec<S>;
        orElseGet(arg0: $Supplier_<S>): $Codec<S>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<S>): $Codec<S>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<S>): $Codec<S>;
        listOf(): $Codec<$List<S>>;
        listOf(arg0: number, arg1: number): $Codec<$List<S>>;
        deprecated(arg0: number): $Codec<S>;
        mapResult(arg0: $Codec$ResultFunction<S>): $Codec<S>;
        flatXmap<S>(arg0: $Function_<S, $DataResult<S>>, arg1: $Function_<S, $DataResult<S>>): $Codec<S>;
        xmap<S>(arg0: $Function_<S, S>, arg1: $Function_<S, S>): $Codec<S>;
        stable(): $Codec<S>;
        lenientOptionalFieldOf(arg0: string, arg1: S): $MapCodec<S>;
        lenientOptionalFieldOf(arg0: string, arg1: S, arg2: $Lifecycle): $MapCodec<S>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: S, arg3: $Lifecycle): $MapCodec<S>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<(S) | undefined>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, S>, arg2: $Function_<S, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, S>, arg1: $Function_<S, $MapCodec<E>>): $MapCodec<E>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<S>>, arg2: $Function_<S, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchStable<E>(arg0: $Function_<E, S>, arg1: $Function_<S, $MapCodec<E>>): $Codec<E>;
        sizeLimitedListOf(arg0: number): $Codec<$List<S>>;
        flatComapMap<S>(arg0: $Function_<S, S>, arg1: $Function_<S, $DataResult<S>>): $Codec<S>;
        comapFlatMap<S>(arg0: $Function_<S, $DataResult<S>>, arg1: $Function_<S, S>): $Codec<S>;
        withLifecycle(arg0: $Lifecycle): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: S, arg2: $Lifecycle): $MapCodec<S>;
        optionalFieldOf(arg0: string, arg1: S): $MapCodec<S>;
        optionalFieldOf(arg0: string): $MapCodec<(S) | undefined>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: S, arg3: $Lifecycle): $MapCodec<S>;
        comap<B>(arg0: $Function_<B, S>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<S>>): $Encoder<B>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: S): $DataResult<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<S, T>>;
        map<B>(arg0: $Function_<S, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<S, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<S>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<S>;
        boxed(): $Decoder$Boxed<S>;
        terminal(): $Decoder$Terminal<S>;
        simple(): $Decoder$Simple<S>;
        fieldOf(arg0: string): $MapEncoder<S>;
        promotePartial(arg0: $Consumer_<string>): $Decoder<S>;
        constructor(arg0: S[], arg1: $Function_<string, S>, arg2: $ToIntFunction_<S>);
    }
    export class $EncoderCache implements $EncoderCacheAccessor {
        wrap<A>(arg0: $Codec<A>): $Codec<A>;
        mfix$getCache(): $LoadingCache<never, never>;
        cache: $LoadingCache<$EncoderCache$Key<never, never>, $DataResult<never>>;
        constructor(arg0: number);
    }
    export class $FastColor$ABGR32 {
        static color(arg0: number, arg1: number): number;
        static color(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static red(arg0: number): number;
        static blue(arg0: number): number;
        static green(arg0: number): number;
        static alpha(arg0: number): number;
        static fromArgb32(arg0: number): number;
        static transparent(arg0: number): number;
        static opaque(arg0: number): number;
        constructor();
    }
    export class $StringUtil {
        static isWhitespace(arg0: number): boolean;
        static isBlank(arg0: string): boolean;
        static isNullOrEmpty(arg0: string): boolean;
        static isValidPlayerName(arg0: string): boolean;
        static stripColor(arg0: string): string;
        static lineCount(arg0: string): number;
        static filterText(arg0: string, arg1: boolean): string;
        static filterText(arg0: string): string;
        static endsWithNewLine(arg0: string): boolean;
        static isAllowedChatCharacter(arg0: string): boolean;
        static formatTickDuration(arg0: number, arg1: number): string;
        static trimChatMessage(arg0: string): string;
        static truncateStringIfNecessary(arg0: string, arg1: number, arg2: boolean): string;
        constructor();
    }
}
