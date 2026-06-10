import { $LongConsumer_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $RegistryLayer_ } from "@package/net/minecraft/server";
import { $Keyable, $DynamicOps, $Codec, $Dynamic, $MapCodec, $Lifecycle } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $Tag_, $Tag, $ListTag_, $ListTag } from "@package/net/minecraft/nbt";
import { $MappedRegistryAccessor } from "@package/org/sinytra/connector/mod/mixin/registries";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $MappedRegistryAccessor as $MappedRegistryAccessor$2 } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Set_, $Map, $Map$Entry, $Set, $Spliterator, $Iterator, $UUID, $List, $SequencedCollection, $Map_, $Collection_, $List_, $Collection, $AbstractList } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $IntFunction, $Consumer_, $Predicate_, $Predicate, $Consumer, $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $Reference2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $IHolderSetExtension$SerializationType, $IHolderExtension, $IHolderLookupProviderExtension, $IHolderSetExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryTypes } from "@special/types";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Enum, $Comparable, $Iterable, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $EntityAccess } from "@package/net/minecraft/world/level/entity";
import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $BaseMappedRegistry, $IRegistryExtension } from "@package/net/neoforged/neoforge/registries";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $KnownPack_, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $MappedRegistryAccessor as $MappedRegistryAccessor$1 } from "@package/net/fabricmc/fabric/mixin/registry/sync";
import { $ResourceKey_, $ResourceKey, $RegistryOps, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MappedRegistryAccessor as $MappedRegistryAccessor$3 } from "@package/net/neoforged/neoforge/mixins";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Transformation } from "@package/com/mojang/math";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Matrix4f, $Vector3f, $Quaternionf } from "@package/org/joml";
export * as dispenser from "@package/net/minecraft/core/dispenser";
export * as component from "@package/net/minecraft/core/component";
export * as particles from "@package/net/minecraft/core/particles";
export * as cauldron from "@package/net/minecraft/core/cauldron";
export * as registries from "@package/net/minecraft/core/registries";

declare module "@package/net/minecraft/core" {
    export class $Holder$Reference<T> implements $Holder<T> {
        value(): T;
        getKey(): $ResourceKey<T>;
        kind(): $Holder$Kind;
        key(): $ResourceKey<T>;
        unwrap(): $Either<$ResourceKey<T>, T>;
        is(arg0: $Predicate_<$ResourceKey<T>>): boolean;
        is(arg0: $ResourceLocation_): boolean;
        tags(): $Stream<$TagKey<T>>;
        getData<A>(arg0: $DataMapType<T, A>): A;
        bindKey(arg0: $ResourceKey_<T>): void;
        bindTags(arg0: $Collection_<$TagKey_<T>>): void;
        bindValue(arg0: T): void;
        unwrapKey(): ($ResourceKey<T>) | undefined;
        /**
         * @deprecated
         */
        static createIntrusive<T>(arg0: $HolderOwner<T>, arg1: T): $Holder$Reference<T>;
        static createStandAlone<T>(arg0: $HolderOwner<T>, arg1: $ResourceKey_<T>): $Holder$Reference<T>;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        unwrapLookup(): $HolderLookup$RegistryLookup<T>;
        isBound(): boolean;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(tagKey: $ResourceLocation_): boolean;
        getRegisteredName(): string;
        getDelegate(): $Holder<T>;
        owner: $HolderOwner<T>;
        constructor(arg0: $Holder$Reference$Type_, arg1: $HolderOwner<T>, arg2: $ResourceKey_<T>, arg3: T);
        get bound(): boolean;
        get registeredName(): string;
        get delegate(): $Holder<T>;
    }
    export class $AxisCycle extends $Enum<$AxisCycle> {
        static values(): $AxisCycle[];
        static valueOf(arg0: string): $AxisCycle;
        static between(arg0: $Direction$Axis_, arg1: $Direction$Axis_): $AxisCycle;
        cycle(arg0: $Direction$Axis_): $Direction$Axis;
        cycle(arg0: number, arg1: number, arg2: number, arg3: $Direction$Axis_): number;
        cycle(arg0: number, arg1: number, arg2: number, arg3: $Direction$Axis_): number;
        inverse(): $AxisCycle;
        static BACKWARD: $AxisCycle;
        static FORWARD: $AxisCycle;
        static VALUES: $AxisCycle[];
        static NONE: $AxisCycle;
        static AXIS_VALUES: $Direction$Axis[];
    }
    /**
     * Values that may be interpreted as {@link $AxisCycle}.
     */
    export type $AxisCycle_ = "none" | "forward" | "backward";
    export class $WritableRegistry<T> {
    }
    export interface $WritableRegistry<T> extends $Registry<T> {
        isEmpty(): boolean;
        register(arg0: $ResourceKey_<T>, arg1: T, arg2: $RegistrationInfo_): $Holder$Reference<T>;
        createRegistrationLookup(): $HolderGetter<T>;
        get empty(): boolean;
    }
    export class $RegistrySetBuilder$RegisteredValue<T> extends $Record {
    }
    export class $RegistrySetBuilder$UniversalLookup extends $RegistrySetBuilder$EmptyTagLookup<$Object> implements $HolderLookup<$Object> {
        listTagIds(): $Stream<$TagKey<$Object>>;
        listElementIds(): $Stream<$ResourceKey<$Object>>;
    }
    export class $HolderLookup$Provider {
        static create(arg0: $Stream<$HolderLookup$RegistryLookup<never>>): $HolderLookup$Provider;
    }
    export interface $HolderLookup$Provider extends $IHolderLookupProviderExtension {
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        createSerializationContext<V>(arg0: $DynamicOps<V>): $RegistryOps<V>;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        lookupOrThrow<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
    }
    export class $RegistrySetBuilder {
        add<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $Lifecycle, arg2: $RegistrySetBuilder$RegistryBootstrap_<T>): $RegistrySetBuilder;
        add<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $RegistrySetBuilder$RegistryBootstrap_<T>): $RegistrySetBuilder;
        build(arg0: $RegistryAccess): $HolderLookup$Provider;
        static wrapContextLookup<T>(arg0: $HolderLookup$RegistryLookup<T>): $HolderGetter<T>;
        getEntryKeys(): $List<$ResourceKey<$Registry<never>>>;
        static lookupFromMap<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $Lifecycle, arg2: $HolderOwner<T>, arg3: $Map_<$ResourceKey_<T>, $Holder$Reference<T>>): $HolderLookup$RegistryLookup<T>;
        buildPatch(arg0: $RegistryAccess, arg1: $HolderLookup$Provider, arg2: $Cloner$Factory): $RegistrySetBuilder$PatchedRegistries;
        entries: $List<$RegistrySetBuilder$RegistryStub<never>>;
        constructor();
        get entryKeys(): $List<$ResourceKey<$Registry<never>>>;
    }
    export class $Holder$Reference$Type extends $Enum<$Holder$Reference$Type> {
    }
    /**
     * Values that may be interpreted as {@link $Holder$Reference$Type}.
     */
    export type $Holder$Reference$Type_ = "stand_alone" | "intrusive";
    export class $UUIDUtil {
        static createOfflinePlayerUUID(arg0: string): $UUID;
        static createOfflineProfile(arg0: string): $GameProfile;
        static uuidToIntArray(arg0: $UUID_): number[];
        static uuidFromIntArray(arg0: number[]): $UUID;
        static uuidToByteArray(arg0: $UUID_): number[];
        static readUUID(arg0: $Dynamic<never>): $UUID;
        static CODEC_SET: $Codec<$Set<$UUID>>;
        static AUTHLIB_CODEC: $Codec<$UUID>;
        static CODEC: $Codec<$UUID>;
        static CODEC_LINKED_SET: $Codec<$Set<$UUID>>;
        static UUID_BYTES: number;
        static STRING_CODEC: $Codec<$UUID>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $UUID>;
        static LENIENT_CODEC: $Codec<$UUID>;
    }
    export class $FrontAndTop extends $Enum<$FrontAndTop> implements $StringRepresentable {
        static values(): $FrontAndTop[];
        static valueOf(arg0: string): $FrontAndTop;
        top(): $Direction;
        front(): $Direction;
        getSerializedName(): string;
        static fromFrontAndTop(arg0: $Direction_, arg1: $Direction_): $FrontAndTop;
        getRemappedEnumConstantName(): string;
        static UP_SOUTH: $FrontAndTop;
        static DOWN_NORTH: $FrontAndTop;
        static UP_EAST: $FrontAndTop;
        static UP_NORTH: $FrontAndTop;
        static NORTH_UP: $FrontAndTop;
        static SOUTH_UP: $FrontAndTop;
        static DOWN_EAST: $FrontAndTop;
        static DOWN_WEST: $FrontAndTop;
        static UP_WEST: $FrontAndTop;
        static WEST_UP: $FrontAndTop;
        static DOWN_SOUTH: $FrontAndTop;
        static EAST_UP: $FrontAndTop;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FrontAndTop}.
     */
    export type $FrontAndTop_ = "down_east" | "down_north" | "down_south" | "down_west" | "up_east" | "up_north" | "up_south" | "up_west" | "west_up" | "east_up" | "north_up" | "south_up";
    export class $BlockMath {
        static blockCornerToCenter(arg0: $Transformation): $Transformation;
        static blockCenterToCorner(arg0: $Transformation): $Transformation;
        static getUVLockTransform(arg0: $Transformation, arg1: $Direction_): $Transformation;
        static VANILLA_UV_TRANSFORM_GLOBAL_TO_LOCAL: $Map<$Direction, $Transformation>;
        static VANILLA_UV_TRANSFORM_LOCAL_TO_GLOBAL: $Map<$Direction, $Transformation>;
        constructor();
    }
    export class $RegistrySetBuilder$ValueAndHolder<T> extends $Record {
    }
    export class $RegistryAccess$RegistryEntry<T> extends $Record {
        value(): $Registry<T>;
        key(): $ResourceKey<$Registry<T>>;
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Registry<T>);
    }
    export class $RegistryAccess {
        static fromRegistryOfRegistries(arg0: $Registry<$Registry<never>>): $RegistryAccess$Frozen;
        static LOGGER: $Logger;
        static EMPTY: $RegistryAccess$Frozen;
    }
    export interface $RegistryAccess extends $HolderLookup$Provider {
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        freeze(): $RegistryAccess$Frozen;
        registry<E>(arg0: $ResourceKey_<$Registry<E>>): ($Registry<E>) | undefined;
        allRegistriesLifecycle(): $Lifecycle;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        registryOrThrow<E>(arg0: $ResourceKey_<$Registry<E>>): $Registry<E>;
        registries(): $Stream<$RegistryAccess$RegistryEntry<never>>;
    }
    export class $BlockPos extends $Vec3i {
        static min(arg0: $BlockPos_, arg1: $BlockPos_): $BlockPos;
        static max(arg0: $BlockPos_, arg1: $BlockPos_): $BlockPos;
        static of(arg0: number): $BlockPos;
        offset(arg0: number, arg1: number, arg2: number): $BlockPos;
        static offset(arg0: number, arg1: $Direction_): number;
        static offset(arg0: number, arg1: number, arg2: number, arg3: number): number;
        rotate(arg0: $Rotation_): $BlockPos;
        relative(arg0: $Direction$Axis_, arg1: number): $BlockPos;
        north(arg0: number): $BlockPos;
        west(arg0: number): $BlockPos;
        south(): $BlockPos;
        east(): $BlockPos;
        asLong(): number;
        static asLong(arg0: number, arg1: number, arg2: number): number;
        static randomBetweenClosed(arg0: $RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Iterable<$BlockPos>;
        static withinManhattanStream(arg0: $BlockPos_, arg1: number, arg2: number, arg3: number): $Stream<$BlockPos>;
        static breadthFirstTraversal(arg0: $BlockPos_, arg1: number, arg2: number, arg3: $BiConsumer_<$BlockPos, $Consumer<$BlockPos>>, arg4: $Predicate_<$BlockPos>): number;
        clampLocationWithin(arg0: $Vec3_): $Vec3;
        static getY(arg0: number): number;
        static getX(arg0: number): number;
        immutable(): $BlockPos;
        static getZ(arg0: number): number;
        getCenter(): $Vec3;
        static containing(arg0: number, arg1: number, arg2: number): $BlockPos;
        static containing(arg0: $Position): $BlockPos;
        atY(arg0: number): $BlockPos;
        static spiralAround(arg0: $BlockPos_, arg1: number, arg2: $Direction_, arg3: $Direction_): $Iterable<$BlockPos$MutableBlockPos>;
        /**
         * @deprecated
         */
        static squareOutSouthEast(arg0: $BlockPos_): $Stream<$BlockPos>;
        static getFlatIndex(arg0: number): number;
        static randomInCube(arg0: $RandomSource, arg1: number, arg2: $BlockPos_, arg3: number): $Iterable<$BlockPos>;
        static withinManhattan(arg0: $BlockPos_, arg1: number, arg2: number, arg3: number): $Iterable<$BlockPos>;
        static findClosestMatch(arg0: $BlockPos_, arg1: number, arg2: number, arg3: $Predicate_<$BlockPos>): ($BlockPos) | undefined;
        static betweenClosed(arg0: $BlockPos_, arg1: $BlockPos_): $Iterable<$BlockPos>;
        static betweenClosed(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Iterable<$BlockPos>;
        below(): $BlockPos;
        above(): $BlockPos;
        above(arg0: number): $BlockPos;
        getBottomCenter(): $Vec3;
        static betweenClosedStream(arg0: $AABB_): $Stream<$BlockPos>;
        static betweenClosedStream(arg0: $BoundingBox): $Stream<$BlockPos>;
        static betweenClosedStream(arg0: $BlockPos_, arg1: $BlockPos_): $Stream<$BlockPos>;
        static betweenClosedStream(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Stream<$BlockPos>;
        mutable(): $BlockPos$MutableBlockPos;
        static ZERO: $BlockPos;
        static PACKED_Y_MASK: number;
        static CODEC: $Codec<$BlockPos>;
        static PACKED_Z_MASK: number;
        static X_OFFSET: number;
        static PACKED_X_MASK: number;
        static Z_OFFSET: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockPos>;
        static PACKED_X_LENGTH: number;
        static PACKED_Z_LENGTH: number;
        static PACKED_Y_LENGTH: number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $Vec3i);
        get center(): $Vec3;
        get bottomCenter(): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockPos}.
     */
    export type $BlockPos_ = [x: number, y: number, z: number, ];
    export class $HolderSet$Named<T> extends $HolderSet$ListBacked<T> {
        key(): $TagKey<T>;
        bind(arg0: $List_<$Holder_<T>>): void;
        constructor(arg0: $HolderOwner<T>, arg1: $TagKey_<T>);
    }
    export class $RegistrySetBuilder$RegistryBootstrap<T> {
    }
    export interface $RegistrySetBuilder$RegistryBootstrap<T> {
        run(arg0: $BootstrapContext<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$RegistryBootstrap}.
     */
    export type $RegistrySetBuilder$RegistryBootstrap_<T> = ((arg0: $BootstrapContext<T>) => void);
    export class $Direction$Axis extends $Enum<$Direction$Axis> implements $StringRepresentable, $Predicate<$Direction> {
        getName(): string;
        static values(): $Direction$Axis[];
        test(arg0: $Direction_): boolean;
        static valueOf(arg0: string): $Direction$Axis;
        isHorizontal(): boolean;
        static byName(arg0: string): $Direction$Axis;
        choose(arg0: number, arg1: number, arg2: number): number;
        choose(arg0: number, arg1: number, arg2: number): number;
        static getRandom(arg0: $RandomSource): $Direction$Axis;
        getSerializedName(): string;
        isVertical(): boolean;
        getPlane(): $Direction$Plane;
        getRemappedEnumConstantName(): string;
        or(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        negate(): $Predicate<$Direction>;
        and(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        static CODEC: $StringRepresentable$EnumCodec<$Direction$Axis>;
        static X: $Direction$Axis;
        static Y: $Direction$Axis;
        static Z: $Direction$Axis;
        static VALUES: $Direction$Axis[];
        get horizontal(): boolean;
        get serializedName(): string;
        get vertical(): boolean;
        get plane(): $Direction$Plane;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Direction$Axis}.
     */
    export type $Direction$Axis_ = "x" | "y" | "z";
    export class $RegistrySetBuilder$BuildState extends $Record {
    }
    export class $DefaultedMappedRegistry<T> extends $MappedRegistry<T> implements $DefaultedRegistry<T> {
        getDefaultKey(): $ResourceLocation;
        registrationInfos: $Map<$ResourceKey<T>, $RegistrationInfo>;
        frozen: boolean;
        constructor(arg0: string, arg1: $ResourceKey_<$Registry<T>>, arg2: $Lifecycle, arg3: boolean);
        get defaultKey(): $ResourceLocation;
    }
    export class $Holder$Kind extends $Enum<$Holder$Kind> {
        static values(): $Holder$Kind[];
        static valueOf(arg0: string): $Holder$Kind;
        static REFERENCE: $Holder$Kind;
        static DIRECT: $Holder$Kind;
    }
    /**
     * Values that may be interpreted as {@link $Holder$Kind}.
     */
    export type $Holder$Kind_ = "reference" | "direct";
    export class $RegistrySynchronization$PackedRegistryEntry extends $Record {
        data(): ($Tag) | undefined;
        id(): $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RegistrySynchronization$PackedRegistryEntry>;
        constructor(arg0: $ResourceLocation_, arg1: ($Tag_) | undefined);
    }
    export class $Holder<T> {
        /**
         * @note_to_llm `Holder` is a reference that may be either direct references or tags. KubeJS has special type wrapper for `Holder<T>`
         * that allows you to use string literals as `Holder`. For example, "minecraft:apple" can be used as a `Holder<Item>`, and so can "forge:ores".
         * Check available literals for registry entries and tags using the #tool:prunoideae.probejs/listRegistries, #tool:prunoideae.probejs/queryRegistryObjectsByRegex and #tool:prunoideae.probejs/queryTagsByRegex tools.
         */
        static direct<T>(arg0: T): $Holder<T>;
    }
    export interface $Holder<T> extends $IHolderExtension<T> {
        /**
         * @note_to_llm `Holder` is a reference that may be either direct references or tags. KubeJS has special type wrapper for `Holder<T>`
         * that allows you to use string literals as `Holder`. For example, "minecraft:apple" can be used as a `Holder<Item>`, and so can "forge:ores".
         * Check available literals for registry entries and tags using the #tool:prunoideae.probejs/listRegistries, #tool:prunoideae.probejs/queryRegistryObjectsByRegex and #tool:prunoideae.probejs/queryTagsByRegex tools.
         */
        value(): T;
        kind(): $Holder$Kind;
        unwrap(): $Either<$ResourceKey<T>, T>;
        /**
         * Test if the holder holds an object registered with given resource location.
         */
        is(arg0: $ResourceLocation_): boolean;
        /**
         * Tests the resource key held by the holder using a predicate.
         */
        test(arg0: $Predicate_<$ResourceKey<T>>): boolean;
        tags(): $Stream<$TagKey<T>>;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(tagKey: $ResourceLocation_): boolean;
        unwrapKey(): ($ResourceKey<T>) | undefined;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        isBound(): boolean;
        getRegisteredName(): string;
        get bound(): boolean;
        get registeredName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Holder}.
     */
    export type $Holder_<T> = RegistryTypes.ResolveObject<T>;
    export class $Rotations {
        save(): $ListTag;
        getY(): number;
        getX(): number;
        getZ(): number;
        getWrappedX(): number;
        getWrappedY(): number;
        getWrappedZ(): number;
        x: number;
        y: number;
        z: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Rotations>;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $ListTag_);
        get wrappedX(): number;
        get wrappedY(): number;
        get wrappedZ(): number;
    }
    export class $HolderLookup<T> {
    }
    export interface $HolderLookup<T> extends $HolderGetter<T> {
        listTags(): $Stream<$HolderSet$Named<T>>;
        listTagIds(): $Stream<$TagKey<T>>;
        listElements(): $Stream<$Holder$Reference<T>>;
        listElementIds(): $Stream<$ResourceKey<T>>;
    }
    export class $HolderOwner<T> {
    }
    export interface $HolderOwner<T> {
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
    }
    export class $Cloner<T> {
        clone(arg0: T, arg1: $HolderLookup$Provider, arg2: $HolderLookup$Provider): T;
        constructor(arg0: $Codec<T>);
    }
    export class $QuartPos {
        static toSection(arg0: number): number;
        static toBlock(arg0: number): number;
        static fromBlock(arg0: number): number;
        static fromSection(arg0: number): number;
        static quartLocal(arg0: number): number;
        static SIZE: number;
        static BITS: number;
        static MASK: number;
    }
    export class $RegistrySetBuilder$UniversalOwner implements $HolderOwner<$Object> {
        canSerializeIn(arg0: $HolderOwner<$Object>): boolean;
    }
    export class $GlobalPos extends $Record {
        static of(arg0: $ResourceKey_<$Level>, arg1: $BlockPos_): $GlobalPos;
        pos(): $BlockPos;
        dimension(): $ResourceKey<$Level>;
        static CODEC: $Codec<$GlobalPos>;
        static MAP_CODEC: $MapCodec<$GlobalPos>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $GlobalPos>;
        constructor(arg0: $ResourceKey_<$Level>, arg1: $BlockPos_);
    }
    export class $RegistryAccess$1FrozenAccess extends $RegistryAccess$ImmutableRegistryAccess implements $RegistryAccess$Frozen {
    }
    export class $HolderSet$ListBacked<T> implements $HolderSet<T> {
        size(): number;
        get(arg0: number): $Holder<T>;
        iterator(): $Iterator<$Holder<T>>;
        stream(): $Stream<$Holder<T>>;
        spliterator(): $Spliterator<$Holder<T>>;
        contents(): $List<$Holder<T>>;
        getRandomElement(arg0: $RandomSource): ($Holder<T>) | undefined;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        forEach(arg0: $Consumer_<T>): void;
        addInvalidationListener(arg0: $Runnable_): void;
        serializationType(): $IHolderSetExtension$SerializationType;
        constructor();
        [Symbol.iterator](): Iterator<$Holder<T>>
    }
    export class $RegistrationInfo extends $Record {
        lifecycle(): $Lifecycle;
        knownPackInfo(): ($KnownPack) | undefined;
        static BUILT_IN: $RegistrationInfo;
        constructor(arg0: ($KnownPack_) | undefined, arg1: $Lifecycle);
    }
    export class $Cloner$Factory {
        cloner<T>(arg0: $ResourceKey_<$Registry<T>>): $Cloner<T>;
        addCodec<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $Codec<T>): $Cloner$Factory;
        constructor();
    }
    export class $IdMapper<T> implements $IdMap<T> {
        size(): number;
        add(arg0: T): void;
        iterator(): $Iterator<T>;
        contains(arg0: number): boolean;
        getId(arg0: T): number;
        addMapping(arg0: T, arg1: number): void;
        byId(arg0: number): T;
        byIdOrThrow(arg0: number): T;
        getIdOrThrow(arg0: T): number;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        tToId: $Reference2IntMap<T>;
        nextId: number;
        idToT: $List<T>;
        constructor();
        constructor(arg0: number);
        [Symbol.iterator](): Iterator<T>
    }
    export class $BlockPos$MutableBlockPos extends $BlockPos {
        clamp(arg0: $Direction$Axis_, arg1: number, arg2: number): $BlockPos$MutableBlockPos;
        set(arg0: number): $BlockPos$MutableBlockPos;
        set(arg0: $Vec3i): $BlockPos$MutableBlockPos;
        set(arg0: $AxisCycle_, arg1: number, arg2: number, arg3: number): $BlockPos$MutableBlockPos;
        set(arg0: number, arg1: number, arg2: number): $BlockPos$MutableBlockPos;
        set(arg0: number, arg1: number, arg2: number): $BlockPos$MutableBlockPos;
        move(arg0: number, arg1: number, arg2: number): $BlockPos$MutableBlockPos;
        move(arg0: $Vec3i): $BlockPos$MutableBlockPos;
        move(arg0: $Direction_, arg1: number): $BlockPos$MutableBlockPos;
        move(arg0: $Direction_): $BlockPos$MutableBlockPos;
        setZ(arg0: number): $BlockPos$MutableBlockPos;
        setWithOffset(arg0: $Vec3i, arg1: $Vec3i): $BlockPos$MutableBlockPos;
        setWithOffset(arg0: $Vec3i, arg1: $Direction_): $BlockPos$MutableBlockPos;
        setWithOffset(arg0: $Vec3i, arg1: number, arg2: number, arg3: number): $BlockPos$MutableBlockPos;
        static ZERO: $BlockPos;
        static PACKED_Y_MASK: number;
        static CODEC: $Codec<$BlockPos>;
        static PACKED_Z_MASK: number;
        static X_OFFSET: number;
        static PACKED_X_MASK: number;
        static Z_OFFSET: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockPos>;
        static PACKED_X_LENGTH: number;
        static PACKED_Z_LENGTH: number;
        static PACKED_Y_LENGTH: number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor();
        set z(value: number);
    }
    export class $RegistryAccess$Frozen {
    }
    export interface $RegistryAccess$Frozen extends $RegistryAccess {
    }
    export class $HolderLookup$RegistryLookup$Delegate<T> {
    }
    export interface $HolderLookup$RegistryLookup$Delegate<T> extends $HolderLookup$RegistryLookup<T> {
        parent(): $HolderLookup$RegistryLookup<T>;
        get(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        get(arg0: $TagKey_<T>): ($HolderSet$Named<T>) | undefined;
        key(): $ResourceKey<$Registry<T>>;
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        listTags(): $Stream<$HolderSet$Named<T>>;
        listElements(): $Stream<$Holder$Reference<T>>;
        registryLifecycle(): $Lifecycle;
    }
    /**
     * Values that may be interpreted as {@link $HolderLookup$RegistryLookup$Delegate}.
     */
    export type $HolderLookup$RegistryLookup$Delegate_<T> = (() => $HolderLookup$RegistryLookup<T>);
    export class $Registry<T> {
        static register<V, T extends V>(arg0: $Registry<V>, arg1: $ResourceKey_<V>, arg2: T): T;
        static register<T>(arg0: $Registry<T>, arg1: string, arg2: T): T;
        static register<V, T extends V>(arg0: $Registry<V>, arg1: $ResourceLocation_, arg2: T): T;
        static registerForHolder<T>(arg0: $Registry<T>, arg1: $ResourceKey_<T>, arg2: T): $Holder$Reference<T>;
        static registerForHolder<T>(arg0: $Registry<T>, arg1: $ResourceLocation_, arg2: T): $Holder$Reference<T>;
    }
    export interface $Registry<T> extends $Keyable, $IdMap<T>, $IRegistryExtension<T> {
        get(arg0: $ResourceKey_<T>): T;
        get(arg0: $ResourceLocation_): T;
        stream(): $Stream<T>;
        entrySet(): $Set<$Map$Entry<$ResourceKey<T>, T>>;
        getKey(arg0: T): $ResourceLocation;
        key(): $ResourceKey<$Registry<T>>;
        containsKey(arg0: $ResourceLocation_): boolean;
        containsKey(arg0: $ResourceKey_<T>): boolean;
        getId(arg0: T): number;
        keys<U>(arg0: $DynamicOps<U>): $Stream<U>;
        keySet(): $Set<$ResourceLocation>;
        freeze(): $Registry<T>;
        getTag(arg0: $TagKey_<T>): ($HolderSet$Named<T>) | undefined;
        getOptional(arg0: $ResourceLocation_): (T) | undefined;
        getOptional(arg0: $ResourceKey_<T>): (T) | undefined;
        asHolderIdMap(): $IdMap<$Holder<T>>;
        getTags(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>;
        byNameCodec(): $Codec<T>;
        bindTags(arg0: $Map_<$TagKey_<T>, $List_<$Holder_<T>>>): void;
        resetTags(): void;
        holders(): $Stream<$Holder$Reference<T>>;
        getOrThrow(arg0: $ResourceKey_<T>): T;
        getAny(): ($Holder$Reference<T>) | undefined;
        asLookup(): $HolderLookup$RegistryLookup<T>;
        holderByNameCodec(): $Codec<$Holder<T>>;
        asTagAddingLookup(): $HolderLookup$RegistryLookup<T>;
        holderOwner(): $HolderOwner<T>;
        getTagNames(): $Stream<$TagKey<T>>;
        getRandomElementOf(arg0: $TagKey_<T>, arg1: $RandomSource): ($Holder<T>) | undefined;
        registryKeySet(): $Set<$ResourceKey<T>>;
        registryLifecycle(): $Lifecycle;
        registrationInfo(arg0: $ResourceKey_<T>): ($RegistrationInfo) | undefined;
        getOrCreateTag(arg0: $TagKey_<T>): $HolderSet$Named<T>;
        getTagOrEmpty(arg0: $TagKey_<T>): $Iterable<$Holder<T>>;
        getHolder(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        getHolder(arg0: number): ($Holder$Reference<T>) | undefined;
        getHolder(arg0: $ResourceLocation_): ($Holder$Reference<T>) | undefined;
        getRandom(arg0: $RandomSource): ($Holder$Reference<T>) | undefined;
        wrapAsHolder(arg0: T): $Holder<T>;
        getResourceKey(arg0: T): ($ResourceKey<T>) | undefined;
        getHolderOrThrow(arg0: $ResourceKey_<T>): $Holder$Reference<T>;
        createIntrusiveHolder(arg0: T): $Holder$Reference<T>;
        get tags(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>;
        get any(): ($Holder$Reference<T>) | undefined;
        get tagNames(): $Stream<$TagKey<T>>;
    }
    export class $RegistryCodecs {
        static homogeneousList<E>(arg0: $ResourceKey_<$Registry<E>>, arg1: boolean): $Codec<$HolderSet<E>>;
        static homogeneousList<E>(arg0: $ResourceKey_<$Registry<E>>): $Codec<$HolderSet<E>>;
        static homogeneousList<E>(arg0: $ResourceKey_<$Registry<E>>, arg1: $Codec<E>, arg2: boolean): $Codec<$HolderSet<E>>;
        static homogeneousList<E>(arg0: $ResourceKey_<$Registry<E>>, arg1: $Codec<E>): $Codec<$HolderSet<E>>;
        constructor();
    }
    export class $NonNullList<E> extends $AbstractList<E> {
        static copyOf<E>(arg0: $Collection_<E>): $NonNullList<E>;
        static of<E>(arg0: E, ...arg1: E[]): $NonNullList<E>;
        static create<E>(): $NonNullList<E>;
        static withSize<E>(arg0: number, arg1: E): $NonNullList<E>;
        static codecOf<E>(arg0: $Codec<E>): $Codec<$NonNullList<E>>;
        static createWithCapacity<E>(arg0: number): $NonNullList<E>;
        reversed(): $SequencedCollection<E>;
        constructor(arg0: $List_<E>, arg1: E);
    }
    export class $RegistrySetBuilder$EmptyTagRegistryLookup<T> extends $RegistrySetBuilder$EmptyTagLookup<T> implements $HolderLookup$RegistryLookup<T> {
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        filterElements(arg0: $Predicate_<T>): $HolderLookup$RegistryLookup<T>;
        filterFeatures(arg0: $FeatureFlagSet): $HolderLookup$RegistryLookup<T>;
        listTagIds(): $Stream<$TagKey<T>>;
        listElementIds(): $Stream<$ResourceKey<T>>;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
    }
    export class $Vec3i implements $Comparable<$Vec3i> {
        get(arg0: $Direction$Axis_): number;
        compareTo(arg0: $Vec3i): number;
        offset(arg0: number, arg1: number, arg2: number): $Vec3i;
        offset(arg0: $Vec3i): $Vec3i;
        toShortString(): string;
        multiply(arg0: number): $Vec3i;
        subtract(arg0: $Vec3i): $Vec3i;
        relative(arg0: $Direction_, arg1: number): $Vec3i;
        relative(arg0: $Direction_): $Vec3i;
        relative(arg0: $Direction$Axis_, arg1: number): $Vec3i;
        north(arg0: number): $Vec3i;
        north(): $Vec3i;
        west(arg0: number): $Vec3i;
        west(): $Vec3i;
        south(arg0: number): $Vec3i;
        south(): $Vec3i;
        east(): $Vec3i;
        east(arg0: number): $Vec3i;
        getY(): number;
        getX(): number;
        getZ(): number;
        closerThan(arg0: $Vec3i, arg1: number): boolean;
        static offsetCodec(arg0: number): $Codec<$Vec3i>;
        distManhattan(arg0: $Vec3i): number;
        closerToCenterThan(arg0: $Position, arg1: number): boolean;
        distToLowCornerSqr(arg0: number, arg1: number, arg2: number): number;
        distToCenterSqr(arg0: number, arg1: number, arg2: number): number;
        distToCenterSqr(arg0: $Position): number;
        distSqr(arg0: $Vec3i): number;
        below(arg0: number): $Vec3i;
        below(): $Vec3i;
        setX(arg0: number): $Vec3i;
        setZ(arg0: number): $Vec3i;
        setY(arg0: number): $Vec3i;
        above(): $Vec3i;
        above(arg0: number): $Vec3i;
        cross(arg0: $Vec3i): $Vec3i;
        static ZERO: $Vec3i;
        static CODEC: $Codec<$Vec3i>;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $LayeredRegistryAccess<T> {
        getLayer(arg0: T): $RegistryAccess$Frozen;
        replaceFrom(arg0: T, ...arg1: $RegistryAccess$Frozen[]): $LayeredRegistryAccess<T>;
        replaceFrom(arg0: T, arg1: $List_<$RegistryAccess$Frozen>): $LayeredRegistryAccess<T>;
        compositeAccess(): $RegistryAccess$Frozen;
        getAccessFrom(arg0: T): $RegistryAccess$Frozen;
        getAccessForLoading(arg0: T): $RegistryAccess$Frozen;
        constructor(arg0: $List_<T>);
    }
    export class $Direction8 extends $Enum<$Direction8> {
        static values(): $Direction8[];
        static valueOf(arg0: string): $Direction8;
        getStepX(): number;
        getStepZ(): number;
        getDirections(): $Set<$Direction>;
        static NORTH_WEST: $Direction8;
        static NORTH: $Direction8;
        static NORTH_EAST: $Direction8;
        static WEST: $Direction8;
        static SOUTH_EAST: $Direction8;
        static SOUTH: $Direction8;
        static SOUTH_WEST: $Direction8;
        static EAST: $Direction8;
        get stepX(): number;
        get stepZ(): number;
        get directions(): $Set<$Direction>;
    }
    /**
     * Values that may be interpreted as {@link $Direction8}.
     */
    export type $Direction8_ = "north" | "north_east" | "east" | "south_east" | "south" | "south_west" | "west" | "north_west";
    export class $Holder$Direct<T> extends $Record implements $Holder<T> {
        value(): T;
        kind(): $Holder$Kind;
        unwrap(): $Either<$ResourceKey<T>, T>;
        is(arg0: $ResourceLocation_): boolean;
        is(arg0: $Predicate_<$ResourceKey<T>>): boolean;
        tags(): $Stream<$TagKey<T>>;
        unwrapKey(): ($ResourceKey<T>) | undefined;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        isBound(): boolean;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(tagKey: $ResourceLocation_): boolean;
        getRegisteredName(): string;
        getKey(): $ResourceKey<T>;
        getDelegate(): $Holder<T>;
        unwrapLookup(): $HolderLookup$RegistryLookup<T>;
        getData<T>(arg0: $DataMapType<T, T>): T;
        constructor(value: T);
        get bound(): boolean;
        get registeredName(): string;
        get key(): $ResourceKey<T>;
        get delegate(): $Holder<T>;
    }
    export class $RegistrySetBuilder$RegistryContents<T> extends $Record {
    }
    export class $HolderGetter$Provider {
    }
    export interface $HolderGetter$Provider {
        get<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($HolderGetter<T>) | undefined;
        lookupOrThrow<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderGetter<T>;
    }
    /**
     * Values that may be interpreted as {@link $HolderGetter$Provider}.
     */
    export type $HolderGetter$Provider_ = ((arg0: $ResourceKey<$Registry<any>>) => ($HolderGetter<T>) | undefined);
    export class $IdMap<T> {
        static DEFAULT: number;
    }
    export interface $IdMap<T> extends $Iterable<T> {
        size(): number;
        getId(arg0: T): number;
        byIdOrThrow(arg0: number): T;
        getIdOrThrow(arg0: T): number;
        byId(arg0: number): T;
    }
    export class $RegistrySetBuilder$RegistryStub<T> extends $Record {
        apply(arg0: $RegistrySetBuilder$BuildState_): void;
        key(): $ResourceKey<$Registry<T>>;
        bootstrap(): $RegistrySetBuilder$RegistryBootstrap<T>;
        collectRegisteredValues(arg0: $RegistrySetBuilder$BuildState_): $RegistrySetBuilder$RegistryContents<T>;
        lifecycle(): $Lifecycle;
        constructor(key: $ResourceKey_<$Registry<T>>, lifecycle: $Lifecycle, bootstrap: $RegistrySetBuilder$RegistryBootstrap_<T>);
    }
    export class $HolderSet$Direct<T> extends $HolderSet$ListBacked<T> {
        static EMPTY: $HolderSet$Direct<never>;
        constructor(arg0: $List_<$Holder_<T>>);
    }
    export class $MappedRegistry<T> extends $BaseMappedRegistry<T> implements $WritableRegistry<T>, $MappedRegistryAccessor$3<any>, $MappedRegistryAccessor$1, $MappedRegistryAccessor, $MappedRegistryAccessor$2<any> {
        clear(arg0: boolean): void;
        isEmpty(): boolean;
        register(arg0: $ResourceKey_<T>, arg1: T, arg2: $RegistrationInfo_): $Holder$Reference<T>;
        register(arg0: number, arg1: $ResourceKey_<T>, arg2: T, arg3: $RegistrationInfo_): $Holder$Reference<T>;
        /**
         * @deprecated
         */
        unfreeze(): void;
        registerIdMapping(arg0: $ResourceKey_<T>, arg1: number): void;
        getOrCreateHolderOrThrow(arg0: $ResourceKey_<T>): $Holder$Reference<T>;
        createRegistrationLookup(): $HolderGetter<T>;
        neoforge$getRegistrationInfos(): $Map<$ResourceKey<T>, $RegistrationInfo>;
        getToId(): $Reference2IntMap<T>;
        getByValue(): $Map<T, $Holder$Reference<T>>;
        getFrozen(): boolean;
        registrationInfos: $Map<$ResourceKey<T>, $RegistrationInfo>;
        frozen: boolean;
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Lifecycle);
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Lifecycle, arg2: boolean);
        get empty(): boolean;
        get toId(): $Reference2IntMap<T>;
        get byValue(): $Map<T, $Holder$Reference<T>>;
    }
    export class $RegistryAccess$ImmutableRegistryAccess implements $RegistryAccess {
        registry<E>(arg0: $ResourceKey_<$Registry<E>>): ($Registry<E>) | undefined;
        registries(): $Stream<$RegistryAccess$RegistryEntry<never>>;
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        freeze(): $RegistryAccess$Frozen;
        allRegistriesLifecycle(): $Lifecycle;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        registryOrThrow<E>(arg0: $ResourceKey_<$Registry<E>>): $Registry<E>;
        createSerializationContext<V>(arg0: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        constructor(arg0: $Stream<$RegistryAccess$RegistryEntry<never>>);
        constructor(arg0: $Map_<$ResourceKey_<$Registry<never>>, $Registry<never>>);
        constructor(arg0: $List_<$Registry<never>>);
    }
    export class $Cursor3D {
        advance(): boolean;
        nextZ(): number;
        nextY(): number;
        nextX(): number;
        getNextType(): number;
        static TYPE_CORNER: number;
        static TYPE_INSIDE: number;
        static TYPE_FACE: number;
        static TYPE_EDGE: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get nextType(): number;
    }
    export class $Direction$Plane extends $Enum<$Direction$Plane> implements $Iterable<$Direction>, $Predicate<$Direction> {
        length(): number;
        static values(): $Direction$Plane[];
        test(arg0: $Direction_): boolean;
        static valueOf(arg0: string): $Direction$Plane;
        iterator(): $Iterator<$Direction>;
        stream(): $Stream<$Direction>;
        shuffledCopy(arg0: $RandomSource): $List<$Direction>;
        getRandomAxis(arg0: $RandomSource): $Direction$Axis;
        getRandomDirection(arg0: $RandomSource): $Direction;
        spliterator(): $Spliterator<$Direction>;
        forEach(arg0: $Consumer_<$Direction>): void;
        or(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        negate(): $Predicate<$Direction>;
        and(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        static VERTICAL: $Direction$Plane;
        static HORIZONTAL: $Direction$Plane;
        [Symbol.iterator](): Iterator<$Direction>
    }
    /**
     * Values that may be interpreted as {@link $Direction$Plane}.
     */
    export type $Direction$Plane_ = "horizontal" | "vertical";
    export class $BlockBox extends $Record implements $Iterable<$BlockPos> {
        min(): $BlockPos;
        max(): $BlockPos;
        iterator(): $Iterator<$BlockPos>;
        static of(arg0: $BlockPos_, arg1: $BlockPos_): $BlockBox;
        static of(arg0: $BlockPos_): $BlockBox;
        offset(arg0: $Vec3i): $BlockBox;
        contains(arg0: $BlockPos_): boolean;
        move(arg0: $Direction_, arg1: number): $BlockBox;
        aabb(): $AABB;
        isBlock(): boolean;
        sizeX(): number;
        sizeY(): number;
        sizeZ(): number;
        extend(arg0: $Direction_, arg1: number): $BlockBox;
        include(arg0: $BlockPos_): $BlockBox;
        spliterator(): $Spliterator<$BlockPos>;
        forEach(arg0: $Consumer_<$BlockPos>): void;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockBox>;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_);
        [Symbol.iterator](): Iterator<$BlockPos>
        get block(): boolean;
    }
    export class $HolderLookup$RegistryLookup<T> {
    }
    export interface $HolderLookup$RegistryLookup<T> extends $HolderLookup<T>, $HolderOwner<T> {
        key(): $ResourceKey<$Registry<T>>;
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        filterElements(arg0: $Predicate_<T>): $HolderLookup$RegistryLookup<T>;
        registryLifecycle(): $Lifecycle;
        filterFeatures(arg0: $FeatureFlagSet): $HolderLookup$RegistryLookup<T>;
    }
    export class $RegistrySynchronization {
        static packRegistries(arg0: $DynamicOps<$Tag_>, arg1: $RegistryAccess, arg2: $Set_<$KnownPack_>, arg3: $BiConsumer_<$ResourceKey<$Registry<never>>, $List<$RegistrySynchronization$PackedRegistryEntry>>): void;
        static networkedRegistries(arg0: $LayeredRegistryAccess<$RegistryLayer_>): $Stream<$RegistryAccess$RegistryEntry<never>>;
        static networkSafeRegistries(arg0: $LayeredRegistryAccess<$RegistryLayer_>): $Stream<$RegistryAccess$RegistryEntry<never>>;
        static NETWORKABLE_REGISTRIES: $Set<$ResourceKey<$Registry<never>>>;
        constructor();
    }
    export class $SectionPos extends $Vec3i {
        static of(arg0: $EntityAccess): $SectionPos;
        static of(arg0: $Position): $SectionPos;
        static of(arg0: number): $SectionPos;
        static of(arg0: number, arg1: number, arg2: number): $SectionPos;
        static of(arg0: $BlockPos_): $SectionPos;
        static of(arg0: $ChunkPos, arg1: number): $SectionPos;
        static offset(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static offset(arg0: number, arg1: $Direction_): number;
        x(): number;
        static x(arg0: number): number;
        static z(arg0: number): number;
        z(): number;
        y(): number;
        static y(arg0: number): number;
        origin(): $BlockPos;
        chunk(): $ChunkPos;
        static blockToSectionCoord(arg0: number): number;
        static blockToSectionCoord(arg0: number): number;
        static asLong(arg0: number, arg1: number, arg2: number): number;
        asLong(): number;
        static asLong(arg0: $BlockPos_): number;
        static sectionToBlockCoord(arg0: number): number;
        static sectionToBlockCoord(arg0: number, arg1: number): number;
        static cube(arg0: $SectionPos, arg1: number): $Stream<$SectionPos>;
        center(): $BlockPos;
        static aroundAndAtBlockPos(arg0: $BlockPos_, arg1: $LongConsumer_): void;
        static aroundAndAtBlockPos(arg0: number, arg1: $LongConsumer_): void;
        static aroundAndAtBlockPos(arg0: number, arg1: number, arg2: number, arg3: $LongConsumer_): void;
        minBlockX(): number;
        minBlockY(): number;
        minBlockZ(): number;
        maxBlockX(): number;
        maxBlockZ(): number;
        static bottomOf(arg0: $ChunkAccess): $SectionPos;
        maxBlockY(): number;
        static sectionRelative(arg0: number): number;
        static sectionRelativePos(arg0: $BlockPos_): number;
        static sectionRelativeX(arg0: number): number;
        static sectionRelativeZ(arg0: number): number;
        static sectionRelativeY(arg0: number): number;
        relativeToBlockX(arg0: number): number;
        static posToSectionCoord(arg0: number): number;
        relativeToBlockY(arg0: number): number;
        static getZeroNode(arg0: number, arg1: number): number;
        static getZeroNode(arg0: number): number;
        static aroundChunk(arg0: $ChunkPos, arg1: number, arg2: number, arg3: number): $Stream<$SectionPos>;
        relativeToBlockPos(arg0: number): $BlockPos;
        relativeToBlockZ(arg0: number): number;
        static blockToSection(arg0: number): number;
        blocksInside(): $Stream<$BlockPos>;
        static betweenClosedStream(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Stream<$SectionPos>;
        static ZERO: $Vec3i;
        static SECTION_MASK: number;
        static CODEC: $Codec<$Vec3i>;
        static SECTION_SIZE: number;
        static SECTION_HALF_SIZE: number;
        static SECTION_MAX_INDEX: number;
        static SECTION_BITS: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $RegistrySetBuilder$EmptyTagLookupWrapper<T> extends $RegistrySetBuilder$EmptyTagRegistryLookup<T> implements $HolderLookup$RegistryLookup$Delegate<T> {
    }
    export class $HolderGetter<T> {
    }
    export interface $HolderGetter<T> {
        get(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        get(arg0: $TagKey_<T>): ($HolderSet$Named<T>) | undefined;
        getOrThrow(arg0: $TagKey_<T>): $HolderSet$Named<T>;
        getOrThrow(arg0: $ResourceKey_<T>): $Holder$Reference<T>;
    }
    export class $Position {
    }
    export interface $Position {
        x(): number;
        z(): number;
        y(): number;
    }
    export class $Direction$AxisDirection extends $Enum<$Direction$AxisDirection> {
        getName(): string;
        static values(): $Direction$AxisDirection[];
        static valueOf(arg0: string): $Direction$AxisDirection;
        getStep(): number;
        opposite(): $Direction$AxisDirection;
        static POSITIVE: $Direction$AxisDirection;
        static NEGATIVE: $Direction$AxisDirection;
        get step(): number;
    }
    /**
     * Values that may be interpreted as {@link $Direction$AxisDirection}.
     */
    export type $Direction$AxisDirection_ = "positive" | "negative";
    export class $RegistrySetBuilder$PatchedRegistries extends $Record {
        full(): $HolderLookup$Provider;
        patches(): $HolderLookup$Provider;
        constructor(full: $HolderLookup$Provider, patches: $HolderLookup$Provider);
    }
    export class $Direction extends $Enum<$Direction> implements $StringRepresentable {
        getName(): string;
        static get(arg0: $Direction$AxisDirection_, arg1: $Direction$Axis_): $Direction;
        static values(): $Direction[];
        static valueOf(arg0: string): $Direction;
        static stream(): $Stream<$Direction>;
        step(): $Vector3f;
        static rotate(arg0: $Matrix4f, arg1: $Direction_): $Direction;
        getClockWise(arg0: $Direction$Axis_): $Direction;
        getClockWise(): $Direction;
        static byName(arg0: string): $Direction;
        static getNearest(arg0: number, arg1: number, arg2: number): $Direction;
        static getNearest(arg0: number, arg1: number, arg2: number): $Direction;
        static getNearest(arg0: $Vec3_): $Direction;
        getY(): number;
        getX(): number;
        getZ(): number;
        getRotation(): $Quaternionf;
        static getRandom(arg0: $RandomSource): $Direction;
        getSerializedName(): string;
        getAxisDirection(): $Direction$AxisDirection;
        getOpposite(): $Direction;
        getCounterClockWise(arg0: $Direction$Axis_): $Direction;
        getCounterClockWise(): $Direction;
        static fromAxisAndDirection(arg0: $Direction$Axis_, arg1: $Direction$AxisDirection_): $Direction;
        getYaw(): number;
        getPitch(): number;
        static allShuffled(arg0: $RandomSource): $Collection<$Direction>;
        getIndex(): number;
        getHorizontalIndex(): number;
        isFacingAngle(arg0: number): boolean;
        static orderedByNearest(arg0: $Entity): $Direction[];
        static from2DDataValue(arg0: number): $Direction;
        static getFacingAxis(arg0: $Entity, arg1: $Direction$Axis_): $Direction;
        static from3DDataValue(arg0: number): $Direction;
        getAxis(): $Direction$Axis;
        static fromYRot(arg0: number): $Direction;
        static fromDelta(arg0: number, arg1: number, arg2: number): $Direction;
        getNormal(): $Vec3i;
        getRemappedEnumConstantName(): string;
        static DOWN: $Direction;
        static CODEC: $StringRepresentable$EnumCodec<$Direction>;
        static NORTH: $Direction;
        static WEST: $Direction;
        static VERTICAL_CODEC: $Codec<$Direction>;
        static BY_ID: $IntFunction<$Direction>;
        static UP: $Direction;
        static SOUTH: $Direction;
        static EAST: $Direction;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Direction>;
        get y(): number;
        get x(): number;
        get z(): number;
        get rotation(): $Quaternionf;
        get serializedName(): string;
        get axisDirection(): $Direction$AxisDirection;
        get opposite(): $Direction;
        get yaw(): number;
        get pitch(): number;
        get index(): number;
        get horizontalIndex(): number;
        get axis(): $Direction$Axis;
        get normal(): $Vec3i;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Direction}.
     */
    export type $Direction_ = "down" | "up" | "north" | "south" | "west" | "east";
    export class $RegistrySetBuilder$EmptyTagLookup<T> implements $HolderGetter<T> {
        getOrThrow(arg0: $TagKey_<T>): $HolderSet$Named<T>;
        getOrThrow(arg0: $ResourceKey_<T>): $Holder$Reference<T>;
    }
    export class $DefaultedRegistry<T> {
    }
    export interface $DefaultedRegistry<T> extends $Registry<T> {
        get(arg0: $ResourceLocation_): T;
        getKey(arg0: T): $ResourceLocation;
        getDefaultKey(): $ResourceLocation;
        byId(arg0: number): T;
        get defaultKey(): $ResourceLocation;
    }
    export class $RegistrySetBuilder$LazyHolder<T> extends $Holder$Reference<T> {
        owner: $HolderOwner<T>;
    }
    export class $HolderSet<T> {
        /**
         * @note_to_llm `HolderSet` is a set of `Holder`s that may be either direct references or tags. KubeJS has special type wrapper for `HolderSet<T>`
         * that allows you to use string literals as `HolderSet`. For example, ["minecraft:apple"] can be used as a `HolderSet<Item>`, and so can ["forge:ores"]
         * Check available literals for registry entries and tags using the #tool:prunoideae.probejs/listRegistries, #tool:prunoideae.probejs/queryRegistryObjectsByRegex and #tool:prunoideae.probejs/queryTagsByRegex tools.
         */
        static empty<T>(): $HolderSet<T>;
        static direct<E, T>(arg0: $Function_<E, $Holder<T>>, ...arg1: E[]): $HolderSet$Direct<T>;
        static direct<T>(...arg0: $Holder_<T>[]): $HolderSet$Direct<T>;
        static direct<T>(arg0: $List_<$Holder_<T>>): $HolderSet$Direct<T>;
        static direct<E, T>(arg0: $Function_<E, $Holder<T>>, arg1: $Collection_<E>): $HolderSet$Direct<T>;
        /**
         * @deprecated
         */
        static emptyNamed<T>(arg0: $HolderOwner<T>, arg1: $TagKey_<T>): $HolderSet$Named<T>;
    }
    export interface $HolderSet<T> extends $Iterable<$Holder<T>>, $IHolderSetExtension<T> {
        /**
         * @note_to_llm `HolderSet` is a set of `Holder`s that may be either direct references or tags. KubeJS has special type wrapper for `HolderSet<T>`
         * that allows you to use string literals as `HolderSet`. For example, ["minecraft:apple"] can be used as a `HolderSet<Item>`, and so can ["forge:ores"]
         * Check available literals for registry entries and tags using the #tool:prunoideae.probejs/listRegistries, #tool:prunoideae.probejs/queryRegistryObjectsByRegex and #tool:prunoideae.probejs/queryTagsByRegex tools.
         */
        size(): number;
        get(arg0: number): $Holder<$Holder<T>>;
        stream(): $Stream<$Holder<$Holder<T>>>;
        contains(arg0: $Holder_<$Holder<T>>): boolean;
        unwrap(): $Either<$TagKey<$Holder<T>>, $List<$Holder<$Holder<T>>>>;
        unwrapKey(): ($TagKey<$Holder<T>>) | undefined;
        getRandomElement(arg0: $RandomSource): ($Holder<$Holder<T>>) | undefined;
        canSerializeIn(arg0: $HolderOwner<$Holder_<T>>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $HolderSet}.
     */
    export type $HolderSet_<T> = RegistryTypes.ResolveObject<T>[];
    export class $RegistrySetBuilder$1Entry<T> extends $Record {
    }
}
