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
        /**
         * Get the resource key held by this Holder, or null if none is present. This method will be overriden
         * by Holder implementations to avoid allocation associated with `Holder#unwrapKey()`
         */
        getKey(): $ResourceKey<T>;
        kind(): $Holder$Kind;
        /**
         * Get the resource key held by this Holder, or null if none is present. This method will be overriden
         * by Holder implementations to avoid allocation associated with `Holder#unwrapKey()`
         */
        key(): $ResourceKey<T>;
        unwrap(): $Either<$ResourceKey<T>, T>;
        is(predicate: $Predicate_<$ResourceKey<T>>): boolean;
        is(location: $ResourceLocation_): boolean;
        tags(): $Stream<$TagKey<T>>;
        getData<A>(arg0: $DataMapType<T, A>): A;
        /**
         * Attempts to resolve the underlying `RegistryLookup` from a `Holder`.
         * 
         * This will only succeed if the underlying holder is a `Reference`.
         */
        unwrapLookup(): $HolderLookup$RegistryLookup<T>;
        static createStandAlone<T>(owner: $HolderOwner<T>, key: $ResourceKey_<T>): $Holder$Reference<T>;
        canSerializeIn(owner: $HolderOwner<T>): boolean;
        /**
         * @deprecated
         */
        static createIntrusive<T>(owner: $HolderOwner<T>, value: T | null): $Holder$Reference<T>;
        unwrapKey(): ($ResourceKey<T>) | undefined;
        isBound(): boolean;
        bindKey(key: $ResourceKey_<T>): void;
        bindValue(value: T): void;
        bindTags(tags: $Collection_<$TagKey_<T>>): void;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(location: $ResourceLocation_): boolean;
        getRegisteredName(): string;
        /**
         * @return the holder that this holder wraps
         * 
         * Used by `Registry#safeCastToReference` to resolve the underlying `Reference` for delegating holders.
         */
        getDelegate(): $Holder<T>;
        owner: $HolderOwner<T>;
        constructor(type: $Holder$Reference$Type_, owner: $HolderOwner<T>, key: $ResourceKey_<T> | null, value: T | null);
        get bound(): boolean;
        get registeredName(): string;
        get delegate(): $Holder<T>;
    }
    export class $AxisCycle extends $Enum<$AxisCycle> {
        static values(): $AxisCycle[];
        static valueOf(arg0: string): $AxisCycle;
        static between(to: $Direction$Axis_, axis2: $Direction$Axis_): $AxisCycle;
        inverse(): $AxisCycle;
        cycle(axis: $Direction$Axis_): $Direction$Axis;
        cycle(x: number, y: number, z: number, axis: $Direction$Axis_): number;
        cycle(x: number, arg1: number, y: number, arg3: $Direction$Axis_): number;
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
        /**
         * @return whether this registry should be synced to clients
         */
        isEmpty(): boolean;
        register(key: $ResourceKey_<T>, value: T, registrationInfo: $RegistrationInfo_): $Holder$Reference<T>;
        createRegistrationLookup(): $HolderGetter<T>;
        get empty(): boolean;
    }
    export class $RegistrySetBuilder$RegisteredValue<T> extends $Record {
    }
    export class $RegistrySetBuilder$UniversalLookup extends $RegistrySetBuilder$EmptyTagLookup<$Object> implements $HolderLookup<$Object> {
        listElementIds(): $Stream<$ResourceKey<$Object>>;
        listTagIds(): $Stream<$TagKey<$Object>>;
    }
    export class $HolderLookup$Provider {
        static create(lookupStream: $Stream<$HolderLookup$RegistryLookup<never>>): $HolderLookup$Provider;
    }
    export interface $HolderLookup$Provider extends $IHolderLookupProviderExtension {
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        asGetterLookup(): $HolderGetter$Provider;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
    }
    export class $RegistrySetBuilder {
        add<T>(key: $ResourceKey_<$Registry<T>>, bootstrap: $RegistrySetBuilder$RegistryBootstrap_<T>): $RegistrySetBuilder;
        add<T>(key: $ResourceKey_<$Registry<T>>, lifecycle: $Lifecycle, bootstrap: $RegistrySetBuilder$RegistryBootstrap_<T>): $RegistrySetBuilder;
        build(registryAccess: $RegistryAccess): $HolderLookup$Provider;
        static lookupFromMap<T>(registryKey: $ResourceKey_<$Registry<T>>, registryLifecycle: $Lifecycle, owner: $HolderOwner<T>, elements: $Map_<$ResourceKey_<T>, $Holder$Reference<T>>): $HolderLookup$RegistryLookup<T>;
        static wrapContextLookup<T>(owner: $HolderLookup$RegistryLookup<T>): $HolderGetter<T>;
        getEntryKeys(): $List<$ResourceKey<$Registry<never>>>;
        buildPatch(registryAccess: $RegistryAccess, lookupProvider: $HolderLookup$Provider, clonerFactory: $Cloner$Factory): $RegistrySetBuilder$PatchedRegistries;
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
        static createOfflineProfile(username: string): $GameProfile;
        static createOfflinePlayerUUID(username: string): $UUID;
        static uuidToByteArray(uuid: $UUID_): number[];
        static uuidFromIntArray(bits: number[]): $UUID;
        static uuidToIntArray(uuid: $UUID_): number[];
        static readUUID(dynamic: $Dynamic<never>): $UUID;
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
        static fromFrontAndTop(front: $Direction_, top: $Direction_): $FrontAndTop;
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
        static blockCornerToCenter(transformation: $Transformation): $Transformation;
        static blockCenterToCorner(transformation: $Transformation): $Transformation;
        static getUVLockTransform(transformation: $Transformation, direction: $Direction_): $Transformation;
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
    /**
     * The root level registry, essentially a registry of registries. It is also an access point, hence the name, for other dynamic registries.
     */
    export class $RegistryAccess {
        static fromRegistryOfRegistries(registryOfRegistries: $Registry<$Registry<never>>): $RegistryAccess$Frozen;
        static LOGGER: $Logger;
        static EMPTY: $RegistryAccess$Frozen;
    }
    export interface $RegistryAccess extends $HolderLookup$Provider {
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        freeze(): $RegistryAccess$Frozen;
        registry<E>(registryKey: $ResourceKey_<$Registry<E>>): ($Registry<E>) | undefined;
        registries(): $Stream<$RegistryAccess$RegistryEntry<never>>;
        allRegistriesLifecycle(): $Lifecycle;
        /**
         * A variant of `#registry(ResourceKey)` that throws if the registry does not exist.
         */
        registryOrThrow<E>(registryKey: $ResourceKey_<$Registry<E>>): $Registry<E>;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
    }
    export class $BlockPos extends $Vec3i {
        static min(pos1: $BlockPos_, pos2: $BlockPos_): $BlockPos;
        static max(pos1: $BlockPos_, pos2: $BlockPos_): $BlockPos;
        static of(packedPos: number): $BlockPos;
        static offset(pos: number, arg1: $Direction_): number;
        static offset(pos: number, arg1: number, dx: number, dy: number): number;
        /**
         * Offset this vector upwards by the given distance.
         */
        multiply(distance: number): $BlockPos;
        rotate(rotation: $Rotation_): $BlockPos;
        /**
         * Calculate the cross product of this and the given Vector
         */
        subtract(vector: $Vec3i): $BlockPos;
        relative(direction: $Direction_): $BlockPos;
        /**
         * Offsets this Vector by the given distance in the specified direction.
         */
        relative(direction: $Direction_, distance: number): $BlockPos;
        static getY(packedPos: number): number;
        /**
         * Offset this vector upwards by the given distance.
         */
        above(distance: number): $BlockPos;
        /**
         * Offset this vector 1 unit up
         */
        below(): $BlockPos;
        /**
         * Offset this vector upwards by the given distance.
         */
        south(distance: number): $BlockPos;
        /**
         * Offset this vector upwards by the given distance.
         */
        west(distance: number): $BlockPos;
        /**
         * @deprecated
         */
        static squareOutSouthEast(pos: $BlockPos_): $Stream<$BlockPos>;
        static findClosestMatch(pos: $BlockPos_, width: number, height: number, posFilter: $Predicate_<$BlockPos>): ($BlockPos) | undefined;
        static getFlatIndex(packedPos: number): number;
        static betweenClosed(firstPos: $BlockPos_, secondPos: $BlockPos_): $Iterable<$BlockPos>;
        /**
         * Creates an Iterable that returns all positions in the box specified by the given corners. **Coordinates must be in order**. e.g. x1 <= x2.
         * 
         * This method uses MutableBlockPos instead of regular BlockPos, which grants better performance. However, the resulting BlockPos instances can only be used inside the iteration loop (as otherwise the value will change), unless `#toImmutable()` is called. This method is ideal for searching large areas and only storing a few locations.
         * 
         * @see #betweenClosed(BlockPos, BlockPos)
         * @see #betweenClosed(int, int, int, int, int, int)
         */
        static betweenClosed(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): $Iterable<$BlockPos>;
        static spiralAround(center: $BlockPos_, size: number, rotationDirection: $Direction_, expansionDirection: $Direction_): $Iterable<$BlockPos$MutableBlockPos>;
        static randomInCube(random: $RandomSource, amount: number, center: $BlockPos_, radius: number): $Iterable<$BlockPos>;
        static withinManhattan(pos: $BlockPos_, xSize: number, ySize: number, zSize: number): $Iterable<$BlockPos>;
        /**
         * Offset this vector 1 unit up
         */
        immutable(): $BlockPos;
        /**
         * Calculate the cross product of this and the given Vector
         */
        cross(vector: $Vec3i): $BlockPos;
        static asLong(x: number, y: number, z: number): number;
        asLong(): number;
        getCenter(): $Vec3;
        static containing(position: $Position): $BlockPos;
        static containing(x: number, arg1: number, y: number): $BlockPos;
        static getZ(packedPos: number): number;
        static getX(packedPos: number): number;
        static randomBetweenClosed(random: $RandomSource, amount: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): $Iterable<$BlockPos>;
        /**
         * Returns a stream of positions in a box shape, ordered by closest to furthest. Returns by definition the given position as first element in the stream.
         */
        static withinManhattanStream(pos: $BlockPos_, xSize: number, ySize: number, zSize: number): $Stream<$BlockPos>;
        static breadthFirstTraversal(startPos: $BlockPos_, depth: number, visitLimit: number, action: $BiConsumer_<$BlockPos, $Consumer<$BlockPos>>, predicate: $Predicate_<$BlockPos>): number;
        clampLocationWithin(pos: $Vec3_): $Vec3;
        /**
         * Offset this vector upwards by the given distance.
         */
        atY(distance: number): $BlockPos;
        getBottomCenter(): $Vec3;
        static betweenClosedStream(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): $Stream<$BlockPos>;
        static betweenClosedStream(firstPos: $BlockPos_, secondPos: $BlockPos_): $Stream<$BlockPos>;
        static betweenClosedStream(aabb: $AABB_): $Stream<$BlockPos>;
        static betweenClosedStream(box: $BoundingBox): $Stream<$BlockPos>;
        mutable(): $BlockPos$MutableBlockPos;
        static ZERO: $BlockPos;
        static CODEC: $Codec<$BlockPos>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockPos>;
        static PACKED_Y_LENGTH: number;
        constructor(x: number, y: number, z: number);
        constructor(vector: $Vec3i);
        get center(): $Vec3;
        get bottomCenter(): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockPos}.
     */
    export type $BlockPos_ = [x: number, y: number, z: number, ];
    export class $HolderSet$Named<T> extends $HolderSet$ListBacked<T> {
        key(): $TagKey<T>;
        bind(contents: $List_<$Holder_<T>>): void;
        constructor(owner: $HolderOwner<T>, key: $TagKey_<T>);
    }
    export class $RegistrySetBuilder$RegistryBootstrap<T> {
    }
    export interface $RegistrySetBuilder$RegistryBootstrap<T> {
        run(context: $BootstrapContext<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$RegistryBootstrap}.
     */
    export type $RegistrySetBuilder$RegistryBootstrap_<T> = ((arg0: $BootstrapContext<T>) => void);
    export class $Direction$Axis extends $Enum<$Direction$Axis> implements $StringRepresentable, $Predicate<$Direction> {
        getName(): string;
        static values(): $Direction$Axis[];
        test(direction: $Direction_ | null): boolean;
        /**
         * @return the Axis specified by the given name or `null` if no such Axis exists
         */
        static valueOf(name: string): $Direction$Axis;
        /**
         * @return this Axis' Plane (VERTICAL for Y, HORIZONTAL for X and Z)
         */
        getPlane(): $Direction$Plane;
        /**
         * @return the Axis specified by the given name or `null` if no such Axis exists
         */
        static byName(name: string): $Direction$Axis;
        getSerializedName(): string;
        choose(x: number, y: number, z: number): number;
        choose(x: number, arg1: number, y: number): number;
        static getRandom(random: $RandomSource): $Direction$Axis;
        /**
         * @return whether this Axis is on the horizontal plane (true for X and Z)
         */
        isHorizontal(): boolean;
        /**
         * @return whether this Axis is on the horizontal plane (true for X and Z)
         */
        isVertical(): boolean;
        getRemappedEnumConstantName(): string;
        or(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        negate(): $Predicate<$Direction>;
        and(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        static CODEC: $StringRepresentable$EnumCodec<$Direction$Axis>;
        static X: $Direction$Axis;
        static Y: $Direction$Axis;
        static Z: $Direction$Axis;
        static VALUES: $Direction$Axis[];
        get plane(): $Direction$Plane;
        get serializedName(): string;
        get horizontal(): boolean;
        get vertical(): boolean;
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
        constructor(defaultKey: string, key: $ResourceKey_<$Registry<T>>, registryLifecycle: $Lifecycle, hasIntrusiveHolders: boolean);
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
        static direct<T>(value: T): $Holder<T>;
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
        is(location: $ResourceLocation_): boolean;
        /**
         * Tests the resource key held by the holder using a predicate.
         */
        test(predicate: $Predicate_<$ResourceKey<T>>): boolean;
        tags(): $Stream<$TagKey<T>>;
        canSerializeIn(owner: $HolderOwner<T>): boolean;
        unwrapKey(): ($ResourceKey<T>) | undefined;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(location: $ResourceLocation_): boolean;
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
        /**
         * @return the X axis rotation
         */
        getY(): number;
        /**
         * @return the X axis rotation
         */
        getWrappedZ(): number;
        /**
         * @return the X axis rotation
         */
        getWrappedX(): number;
        /**
         * @return the X axis rotation
         */
        getWrappedY(): number;
        /**
         * @return the X axis rotation
         */
        getZ(): number;
        /**
         * @return the X axis rotation
         */
        getX(): number;
        x: number;
        y: number;
        z: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Rotations>;
        constructor(x: number, y: number, z: number);
        constructor(tag: $ListTag_);
        get wrappedZ(): number;
        get wrappedX(): number;
        get wrappedY(): number;
    }
    export class $HolderLookup<T> {
    }
    export interface $HolderLookup<T> extends $HolderGetter<T> {
        listElements(): $Stream<$Holder$Reference<T>>;
        listElementIds(): $Stream<$ResourceKey<T>>;
        listTagIds(): $Stream<$TagKey<T>>;
        listTags(): $Stream<$HolderSet$Named<T>>;
    }
    export class $HolderOwner<T> {
    }
    export interface $HolderOwner<T> {
        canSerializeIn(owner: $HolderOwner<T>): boolean;
    }
    export class $Cloner<T> {
        clone(object: T, lookupProvider1: $HolderLookup$Provider, lookupProvider2: $HolderLookup$Provider): T;
        constructor(directCodec: $Codec<T>);
    }
    /**
     * Used to convert between chunk positions (referred to here as sections, from `LevelChunkSection`), block positions, and quart positions.
     * The latter is used to query biomes from a noise biome source.
     */
    export class $QuartPos {
        static fromBlock(value: number): number;
        static toBlock(value: number): number;
        static toSection(value: number): number;
        static fromSection(value: number): number;
        static quartLocal(value: number): number;
        static SIZE: number;
        static BITS: number;
        static MASK: number;
    }
    export class $RegistrySetBuilder$UniversalOwner implements $HolderOwner<$Object> {
        canSerializeIn(arg0: $HolderOwner<$Object>): boolean;
    }
    export class $GlobalPos extends $Record {
        static of(dimension: $ResourceKey_<$Level>, pos: $BlockPos_): $GlobalPos;
        pos(): $BlockPos;
        dimension(): $ResourceKey<$Level>;
        static CODEC: $Codec<$GlobalPos>;
        static MAP_CODEC: $MapCodec<$GlobalPos>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $GlobalPos>;
        constructor(dimension: $ResourceKey_<$Level>, pos: $BlockPos_);
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
        knownPackInfo(): ($KnownPack) | undefined;
        lifecycle(): $Lifecycle;
        static BUILT_IN: $RegistrationInfo;
        constructor(arg0: ($KnownPack_) | undefined, arg1: $Lifecycle);
    }
    export class $Cloner$Factory {
        cloner<T>(registryKey: $ResourceKey_<$Registry<T>>): $Cloner<T>;
        addCodec<T>(registryKey: $ResourceKey_<$Registry<T>>, codec: $Codec<T>): $Cloner$Factory;
        constructor();
    }
    export class $IdMapper<T> implements $IdMap<T> {
        size(): number;
        add(key: T): void;
        iterator(): $Iterator<T>;
        contains(id: number): boolean;
        /**
         * @return the integer ID used to identify the given object
         */
        getId(value: T): number;
        byId(id: number): T;
        addMapping(key: T, value: number): void;
        /**
         * @return the integer ID used to identify the given object
         */
        getIdOrThrow(value: T): number;
        byIdOrThrow(id: number): T;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        tToId: $Reference2IntMap<T>;
        nextId: number;
        idToT: $List<T>;
        constructor();
        constructor(expectedSize: number);
        [Symbol.iterator](): Iterator<T>
    }
    export class $BlockPos$MutableBlockPos extends $BlockPos {
        clamp(axis: $Direction$Axis_, min: number, max: number): $BlockPos$MutableBlockPos;
        set(packedPos: number): $BlockPos$MutableBlockPos;
        set(offset: $Vec3i): $BlockPos$MutableBlockPos;
        set(cycle: $AxisCycle_, x: number, y: number, z: number): $BlockPos$MutableBlockPos;
        set(x: number, arg1: number, y: number): $BlockPos$MutableBlockPos;
        set(x: number, y: number, z: number): $BlockPos$MutableBlockPos;
        move(x: number, y: number, z: number): $BlockPos$MutableBlockPos;
        move(offset: $Vec3i): $BlockPos$MutableBlockPos;
        move(direction: $Direction_, n: number): $BlockPos$MutableBlockPos;
        move(direction: $Direction_): $BlockPos$MutableBlockPos;
        setY(x: number): $BlockPos$MutableBlockPos;
        setZ(x: number): $BlockPos$MutableBlockPos;
        setWithOffset(pos: $Vec3i, direction: $Direction_): $BlockPos$MutableBlockPos;
        setWithOffset(vector: $Vec3i, offsetX: number, offsetY: number, offsetZ: number): $BlockPos$MutableBlockPos;
        setWithOffset(pos: $Vec3i, offset: $Vec3i): $BlockPos$MutableBlockPos;
        static ZERO: $BlockPos;
        static CODEC: $Codec<$BlockPos>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockPos>;
        static PACKED_Y_LENGTH: number;
        constructor(x: number, arg1: number, y: number);
        constructor(x: number, y: number, z: number);
        constructor();
        set y(value: number);
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
        listElements(): $Stream<$Holder$Reference<T>>;
        registryLifecycle(): $Lifecycle;
        listTags(): $Stream<$HolderSet$Named<T>>;
    }
    /**
     * Values that may be interpreted as {@link $HolderLookup$RegistryLookup$Delegate}.
     */
    export type $HolderLookup$RegistryLookup$Delegate_<T> = (() => $HolderLookup$RegistryLookup<T>);
    export class $Registry<T> {
        static register<V, T extends V>(registry: $Registry<V>, key: $ResourceKey_<V>, value: T): T;
        static register<T>(registry: $Registry<T>, name: string, value: T): T;
        static register<V, T extends V>(registry: $Registry<V>, name: $ResourceLocation_, value: T): T;
        static registerForHolder<T>(registry: $Registry<T>, name: $ResourceLocation_, value: T): $Holder$Reference<T>;
        static registerForHolder<T>(registry: $Registry<T>, key: $ResourceKey_<T>, value: T): $Holder$Reference<T>;
    }
    export interface $Registry<T> extends $Keyable, $IdMap<T>, $IRegistryExtension<T> {
        get(key: $ResourceKey_<T> | null): T;
        get(name: $ResourceLocation_ | null): T;
        stream(): $Stream<T>;
        /**
         * @return all keys in this registry
         */
        entrySet(): $Set<$Map$Entry<$ResourceKey<T>, T>>;
        /**
         * @return the name used to identify the given object within this registry or `null` if the object is not within this registry
         */
        getKey(value: T): $ResourceLocation;
        key(): $ResourceKey<$Registry<T>>;
        containsKey(key: $ResourceKey_<T>): boolean;
        containsKey(name: $ResourceLocation_): boolean;
        /**
         * @return the integer ID used to identify the given object
         */
        getId(value: T | null): number;
        keys<U>(ops: $DynamicOps<U>): $Stream<U>;
        /**
         * @return all keys in this registry
         */
        keySet(): $Set<$ResourceLocation>;
        freeze(): $Registry<T>;
        getTag(key: $TagKey_<T>): ($HolderSet$Named<T>) | undefined;
        byNameCodec(): $Codec<T>;
        getOptional(key: $ResourceKey_<T> | null): (T) | undefined;
        getOptional(location: $ResourceLocation_ | null): (T) | undefined;
        /**
         * @return all keys in this registry
         */
        registryKeySet(): $Set<$ResourceKey<T>>;
        registrationInfo(key: $ResourceKey_<T>): ($RegistrationInfo) | undefined;
        holderOwner(): $HolderOwner<T>;
        getTagOrEmpty(key: $TagKey_<T>): $Iterable<$Holder<T>>;
        getOrCreateTag(key: $TagKey_<T>): $HolderSet$Named<T>;
        registryLifecycle(): $Lifecycle;
        getTagNames(): $Stream<$TagKey<T>>;
        holderByNameCodec(): $Codec<$Holder<T>>;
        getRandomElementOf(key: $TagKey_<T>, random: $RandomSource): ($Holder<T>) | undefined;
        asTagAddingLookup(): $HolderLookup$RegistryLookup<T>;
        getAny(): ($Holder$Reference<T>) | undefined;
        holders(): $Stream<$Holder$Reference<T>>;
        resetTags(): void;
        bindTags(tagMap: $Map_<$TagKey_<T>, $List_<$Holder_<T>>>): void;
        getOrThrow(key: $ResourceKey_<T>): T;
        getHolder(location: $ResourceLocation_): ($Holder$Reference<T>) | undefined;
        getHolder(key: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        getHolder(id: number): ($Holder$Reference<T>) | undefined;
        createIntrusiveHolder(value: T): $Holder$Reference<T>;
        asHolderIdMap(): $IdMap<$Holder<T>>;
        wrapAsHolder(value: T): $Holder<T>;
        getResourceKey(value: T): ($ResourceKey<T>) | undefined;
        asLookup(): $HolderLookup$RegistryLookup<T>;
        getRandom(random: $RandomSource): ($Holder$Reference<T>) | undefined;
        getTags(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>;
        getHolderOrThrow(key: $ResourceKey_<T>): $Holder$Reference<T>;
        get tagNames(): $Stream<$TagKey<T>>;
        get any(): ($Holder$Reference<T>) | undefined;
        get tags(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>;
    }
    export class $RegistryCodecs {
        static homogeneousList<E>(registryKey: $ResourceKey_<$Registry<E>>, disallowInline: boolean): $Codec<$HolderSet<E>>;
        static homogeneousList<E>(registryKey: $ResourceKey_<$Registry<E>>): $Codec<$HolderSet<E>>;
        static homogeneousList<E>(registryKey: $ResourceKey_<$Registry<E>>, elementCodec: $Codec<E>, disallowInline: boolean): $Codec<$HolderSet<E>>;
        static homogeneousList<E>(registryKey: $ResourceKey_<$Registry<E>>, elementCodec: $Codec<E>): $Codec<$HolderSet<E>>;
        constructor();
    }
    export class $NonNullList<E> extends $AbstractList<E> {
        static copyOf<E>(arg0: $Collection_<E>): $NonNullList<E>;
        static of<E>(defaultValue: E, ...elements: E[]): $NonNullList<E>;
        static create<E>(): $NonNullList<E>;
        static codecOf<E>(arg0: $Codec<E>): $Codec<$NonNullList<E>>;
        /**
         * Creates a new NonNullList with *fixed* size and default value. The list will be filled with the default value.
         */
        static withSize<E>(size: number, defaultValue: E): $NonNullList<E>;
        static createWithCapacity<E>(initialCapacity: number): $NonNullList<E>;
        reversed(): $SequencedCollection<E>;
        constructor(list: $List_<E>, defaultValue: E | null);
    }
    export class $RegistrySetBuilder$EmptyTagRegistryLookup<T> extends $RegistrySetBuilder$EmptyTagLookup<T> implements $HolderLookup$RegistryLookup<T> {
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        filterElements(arg0: $Predicate_<T>): $HolderLookup$RegistryLookup<T>;
        filterFeatures(arg0: $FeatureFlagSet): $HolderLookup$RegistryLookup<T>;
        listElementIds(): $Stream<$ResourceKey<T>>;
        listTagIds(): $Stream<$TagKey<T>>;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
    }
    export class $Vec3i implements $Comparable<$Vec3i> {
        get(axis: $Direction$Axis_): number;
        compareTo(other: $Vec3i): number;
        offset(dx: number, dy: number, dz: number): $Vec3i;
        /**
         * Calculate the cross product of this and the given Vector
         */
        offset(vector: $Vec3i): $Vec3i;
        toShortString(): string;
        /**
         * Offset this vector upwards by the given distance.
         */
        multiply(distance: number): $Vec3i;
        /**
         * Calculate the cross product of this and the given Vector
         */
        subtract(vector: $Vec3i): $Vec3i;
        /**
         * Offsets this Vector by the given distance in the specified direction.
         */
        relative(direction: $Direction_, distance: number): $Vec3i;
        relative(axis: $Direction$Axis_, amount: number): $Vec3i;
        relative(direction: $Direction_): $Vec3i;
        getY(): number;
        /**
         * Offset this vector 1 unit up
         */
        above(): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        above(distance: number): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        below(distance: number): $Vec3i;
        /**
         * Offset this vector 1 unit up
         */
        below(): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        east(distance: number): $Vec3i;
        /**
         * Offset this vector 1 unit up
         */
        east(): $Vec3i;
        /**
         * Offset this vector 1 unit up
         */
        north(): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        north(distance: number): $Vec3i;
        /**
         * Offset this vector 1 unit up
         */
        south(): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        south(distance: number): $Vec3i;
        /**
         * Offset this vector 1 unit up
         */
        west(): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        west(distance: number): $Vec3i;
        static offsetCodec(maxOffset: number): $Codec<$Vec3i>;
        closerToCenterThan(position: $Position, distance: number): boolean;
        distToCenterSqr(position: $Position): number;
        distToCenterSqr(x: number, arg1: number, y: number): number;
        distToLowCornerSqr(x: number, arg1: number, y: number): number;
        distManhattan(other: $Vec3i): number;
        /**
         * Calculate the cross product of this and the given Vector
         */
        cross(vector: $Vec3i): $Vec3i;
        /**
         * Calculate squared distance to the given Vector
         */
        distSqr(vector: $Vec3i): number;
        getZ(): number;
        /**
         * Offset this vector upwards by the given distance.
         */
        setY(distance: number): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        setX(distance: number): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        setZ(distance: number): $Vec3i;
        getX(): number;
        closerThan(vector: $Vec3i, distance: number): boolean;
        static ZERO: $Vec3i;
        static CODEC: $Codec<$Vec3i>;
        constructor(x: number, y: number, z: number);
    }
    export class $LayeredRegistryAccess<T> {
        getLayer(key: T): $RegistryAccess$Frozen;
        compositeAccess(): $RegistryAccess$Frozen;
        replaceFrom(key: T, ...values: $RegistryAccess$Frozen[]): $LayeredRegistryAccess<T>;
        replaceFrom(key: T, values: $List_<$RegistryAccess$Frozen>): $LayeredRegistryAccess<T>;
        getAccessFrom(key: T): $RegistryAccess$Frozen;
        getAccessForLoading(key: T): $RegistryAccess$Frozen;
        constructor(keys: $List_<T>);
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
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        unwrapKey(): ($ResourceKey<T>) | undefined;
        isBound(): boolean;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(tagKey: $ResourceLocation_): boolean;
        getRegisteredName(): string;
        getDelegate(): $Holder<T>;
        getKey(): $ResourceKey<T>;
        unwrapLookup(): $HolderLookup$RegistryLookup<T>;
        getData<T>(arg0: $DataMapType<T, T>): T;
        constructor(value: T);
        get bound(): boolean;
        get registeredName(): string;
        get delegate(): $Holder<T>;
        get key(): $ResourceKey<T>;
    }
    export class $RegistrySetBuilder$RegistryContents<T> extends $Record {
    }
    export class $HolderGetter$Provider {
    }
    export interface $HolderGetter$Provider {
        get<T>(registryKey: $ResourceKey_<$Registry<T>>, key: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderGetter<T>) | undefined;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderGetter<T>;
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
        /**
         * @return the integer ID used to identify the given object
         */
        getId(value: T): number;
        byId(id: number): T;
        /**
         * @return the integer ID used to identify the given object
         */
        getIdOrThrow(value: T): number;
        byIdOrThrow(id: number): T;
    }
    export class $RegistrySetBuilder$RegistryStub<T> extends $Record {
        apply(state: $RegistrySetBuilder$BuildState_): void;
        key(): $ResourceKey<$Registry<T>>;
        bootstrap(): $RegistrySetBuilder$RegistryBootstrap<T>;
        lifecycle(): $Lifecycle;
        collectRegisteredValues(buildState: $RegistrySetBuilder$BuildState_): $RegistrySetBuilder$RegistryContents<T>;
        constructor(key: $ResourceKey_<$Registry<T>>, lifecycle: $Lifecycle, bootstrap: $RegistrySetBuilder$RegistryBootstrap_<T>);
    }
    export class $HolderSet$Direct<T> extends $HolderSet$ListBacked<T> {
        static EMPTY: $HolderSet$Direct<never>;
        constructor(contents: $List_<$Holder_<T>>);
    }
    export class $MappedRegistry<T> extends $BaseMappedRegistry<T> implements $WritableRegistry<T>, $MappedRegistryAccessor$3<any>, $MappedRegistryAccessor$1, $MappedRegistryAccessor, $MappedRegistryAccessor$2<any> {
        clear(arg0: boolean): void;
        /**
         * @return whether this registry should be synced to clients
         */
        isEmpty(): boolean;
        register(key: $ResourceKey_<T>, value: T, registrationInfo: $RegistrationInfo_): $Holder$Reference<T>;
        register(arg0: number, arg1: $ResourceKey_<T>, arg2: T, arg3: $RegistrationInfo_): $Holder$Reference<T>;
        registerIdMapping(arg0: $ResourceKey_<T>, arg1: number): void;
        /**
         * @deprecated
         */
        unfreeze(): void;
        getOrCreateHolderOrThrow(key: $ResourceKey_<T>): $Holder$Reference<T>;
        createRegistrationLookup(): $HolderGetter<T>;
        /**
         * @return whether this registry should be synced to clients
         */
        getFrozen(): boolean;
        getToId(): $Reference2IntMap<T>;
        getByValue(): $Map<T, $Holder$Reference<T>>;
        neoforge$getRegistrationInfos(): $Map<$ResourceKey<T>, $RegistrationInfo>;
        registrationInfos: $Map<$ResourceKey<T>, $RegistrationInfo>;
        frozen: boolean;
        constructor(key: $ResourceKey_<$Registry<T>>, registryLifecycle: $Lifecycle);
        constructor(key: $ResourceKey_<$Registry<T>>, registryLifecycle: $Lifecycle, hasIntrusiveHolders: boolean);
        get empty(): boolean;
        get toId(): $Reference2IntMap<T>;
        get byValue(): $Map<T, $Holder$Reference<T>>;
    }
    export class $RegistryAccess$ImmutableRegistryAccess implements $RegistryAccess {
        /**
         * Get the registry owned by this registry access by the given key. If it doesn't exist, the default registry of registries is queried instead, which contains static registries such as blocks.
         * The returned registry can not guarantee that it is writable here, so the return type is widened to `Registry` instead.
         */
        registry<E>(registryKey: $ResourceKey_<$Registry<E>>): ($Registry<E>) | undefined;
        registries(): $Stream<$RegistryAccess$RegistryEntry<never>>;
        /**
         * Get the registry owned by this registry access by the given key. If it doesn't exist, the default registry of registries is queried instead, which contains static registries such as blocks.
         * The returned registry can not guarantee that it is writable here, so the return type is widened to `Registry` instead.
         */
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        freeze(): $RegistryAccess$Frozen;
        allRegistriesLifecycle(): $Lifecycle;
        /**
         * A variant of `#registry(ResourceKey)` that throws if the registry does not exist.
         */
        registryOrThrow<E>(registryKey: $ResourceKey_<$Registry<E>>): $Registry<E>;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        asGetterLookup(): $HolderGetter$Provider;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        /**
         * Get the registry owned by this registry access by the given key. If it doesn't exist, the default registry of registries is queried instead, which contains static registries such as blocks.
         * The returned registry can not guarantee that it is writable here, so the return type is widened to `Registry` instead.
         */
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        constructor(registries: $Stream<$RegistryAccess$RegistryEntry<never>>);
        constructor(registries: $Map_<$ResourceKey_<$Registry<never>>, $Registry<never>>);
        constructor(registries: $List_<$Registry<never>>);
    }
    export class $Cursor3D {
        advance(): boolean;
        nextY(): number;
        nextZ(): number;
        nextX(): number;
        getNextType(): number;
        static TYPE_CORNER: number;
        static TYPE_INSIDE: number;
        static TYPE_FACE: number;
        static TYPE_EDGE: number;
        constructor(originX: number, originY: number, originZ: number, endX: number, endY: number, endZ: number);
        get nextType(): number;
    }
    export class $Direction$Plane extends $Enum<$Direction$Plane> implements $Iterable<$Direction>, $Predicate<$Direction> {
        length(): number;
        static values(): $Direction$Plane[];
        test(direction: $Direction_ | null): boolean;
        static valueOf(arg0: string): $Direction$Plane;
        iterator(): $Iterator<$Direction>;
        stream(): $Stream<$Direction>;
        getRandomAxis(random: $RandomSource): $Direction$Axis;
        getRandomDirection(random: $RandomSource): $Direction;
        shuffledCopy(random: $RandomSource): $List<$Direction>;
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
        include(pos: $BlockPos_): $BlockBox;
        min(): $BlockPos;
        max(): $BlockPos;
        iterator(): $Iterator<$BlockPos>;
        static of(pos: $BlockPos_): $BlockBox;
        static of(pos1: $BlockPos_, pos2: $BlockPos_): $BlockBox;
        offset(vector: $Vec3i): $BlockBox;
        contains(pos: $BlockPos_): boolean;
        move(direction: $Direction_, amount: number): $BlockBox;
        extend(direction: $Direction_, amount: number): $BlockBox;
        aabb(): $AABB;
        sizeX(): number;
        sizeY(): number;
        sizeZ(): number;
        isBlock(): boolean;
        spliterator(): $Spliterator<$BlockPos>;
        forEach(arg0: $Consumer_<$BlockPos>): void;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockBox>;
        constructor(min: $BlockPos_, max: $BlockPos_);
        [Symbol.iterator](): Iterator<$BlockPos>
        get block(): boolean;
    }
    export class $HolderLookup$RegistryLookup<T> {
    }
    export interface $HolderLookup$RegistryLookup<T> extends $HolderLookup<T>, $HolderOwner<T> {
        key(): $ResourceKey<$Registry<T>>;
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        filterElements(predicate: $Predicate_<T>): $HolderLookup$RegistryLookup<T>;
        registryLifecycle(): $Lifecycle;
        filterFeatures(enabledFeatures: $FeatureFlagSet): $HolderLookup$RegistryLookup<T>;
    }
    export class $RegistrySynchronization {
        static packRegistries(ops: $DynamicOps<$Tag_>, registryAccess: $RegistryAccess, packs: $Set_<$KnownPack_>, packetSender: $BiConsumer_<$ResourceKey<$Registry<never>>, $List<$RegistrySynchronization$PackedRegistryEntry>>): void;
        static networkedRegistries(registryAccess: $LayeredRegistryAccess<$RegistryLayer_>): $Stream<$RegistryAccess$RegistryEntry<never>>;
        static networkSafeRegistries(registryAccess: $LayeredRegistryAccess<$RegistryLayer_>): $Stream<$RegistryAccess$RegistryEntry<never>>;
        static NETWORKABLE_REGISTRIES: $Set<$ResourceKey<$Registry<never>>>;
        constructor();
    }
    export class $SectionPos extends $Vec3i {
        static of(entity: $EntityAccess): $SectionPos;
        static of(position: $Position): $SectionPos;
        static of(packed: number): $SectionPos;
        static of(chunkX: number, chunkY: number, chunkZ: number): $SectionPos;
        static of(pos: $BlockPos_): $SectionPos;
        static of(chunkPos: $ChunkPos, y: number): $SectionPos;
        static offset(packed: number, arg1: number, dx: number, dy: number): number;
        static offset(packed: number, arg1: $Direction_): number;
        static x(packed: number): number;
        x(): number;
        z(): number;
        static z(packed: number): number;
        y(): number;
        static y(packed: number): number;
        origin(): $BlockPos;
        static blockToSectionCoord(coord: number): number;
        static blockToSectionCoord(blockCoord: number): number;
        chunk(): $ChunkPos;
        static bottomOf(chunk: $ChunkAccess): $SectionPos;
        maxBlockY(): number;
        minBlockZ(): number;
        maxBlockZ(): number;
        minBlockY(): number;
        minBlockX(): number;
        maxBlockX(): number;
        static asLong(blockPos: $BlockPos_): number;
        asLong(): number;
        static asLong(x: number, y: number, z: number): number;
        center(): $BlockPos;
        static aroundAndAtBlockPos(pos: $BlockPos_, consumer: $LongConsumer_): void;
        static aroundAndAtBlockPos(x: number, y: number, z: number, consumer: $LongConsumer_): void;
        static aroundAndAtBlockPos(pos: number, arg1: $LongConsumer_): void;
        static sectionRelativePos(pos: $BlockPos_): number;
        relativeToBlockX(x: number): number;
        static sectionRelativeX(x: number): number;
        static sectionRelativeZ(x: number): number;
        relativeToBlockPos(pos: number): $BlockPos;
        static blockToSection(levelPos: number): number;
        static sectionRelativeY(x: number): number;
        relativeToBlockZ(x: number): number;
        static getZeroNode(x: number, z: number): number;
        static getZeroNode(levelPos: number): number;
        blocksInside(): $Stream<$BlockPos>;
        static aroundChunk(chunkPos: $ChunkPos, x: number, y: number, z: number): $Stream<$SectionPos>;
        static posToSectionCoord(coord: number): number;
        relativeToBlockY(x: number): number;
        static sectionRelative(blockCoord: number): number;
        static sectionToBlockCoord(blockCoord: number): number;
        static sectionToBlockCoord(pos: number, offset: number): number;
        static betweenClosedStream(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): $Stream<$SectionPos>;
        static cube(center: $SectionPos, radius: number): $Stream<$SectionPos>;
        static ZERO: $Vec3i;
        static SECTION_MASK: number;
        static CODEC: $Codec<$Vec3i>;
        static SECTION_SIZE: number;
        static SECTION_HALF_SIZE: number;
        static SECTION_MAX_INDEX: number;
        static SECTION_BITS: number;
        constructor(x: number, y: number, z: number);
    }
    export class $RegistrySetBuilder$EmptyTagLookupWrapper<T> extends $RegistrySetBuilder$EmptyTagRegistryLookup<T> implements $HolderLookup$RegistryLookup$Delegate<T> {
    }
    export class $HolderGetter<T> {
    }
    export interface $HolderGetter<T> {
        get(resourceKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        get(tagKey: $TagKey_<T>): ($HolderSet$Named<T>) | undefined;
        getOrThrow(tagKey: $TagKey_<T>): $HolderSet$Named<T>;
        getOrThrow(resourceKey: $ResourceKey_<T>): $Holder$Reference<T>;
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
        /**
         * @return the offset for this AxisDirection. 1 for POSITIVE, -1 for NEGATIVE
         */
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
        patches(): $HolderLookup$Provider;
        full(): $HolderLookup$Provider;
        constructor(full: $HolderLookup$Provider, patches: $HolderLookup$Provider);
    }
    export class $Direction extends $Enum<$Direction> implements $StringRepresentable {
        getName(): string;
        static get(axisDirection: $Direction$AxisDirection_, axis: $Direction$Axis_): $Direction;
        static values(): $Direction[];
        /**
         * @return the Direction specified by the given name or null if no such Direction exists
         */
        static valueOf(name: string): $Direction;
        static stream(): $Stream<$Direction>;
        step(): $Vector3f;
        static rotate(matrix: $Matrix4f, direction: $Direction_): $Direction;
        static fromDelta(x: number, y: number, z: number): $Direction;
        /**
         * @return the index of this horizontal facing (0-3). The order is S-W-N-E
         */
        getY(): number;
        /**
         * @return the index of this horizontal facing (0-3). The order is S-W-N-E
         */
        getX(): number;
        /**
         * @return the index of this horizontal facing (0-3). The order is S-W-N-E
         */
        getZ(): number;
        static fromAxisAndDirection(axis: $Direction$Axis_, axisDirection: $Direction$AxisDirection_): $Direction;
        /**
         * @return the Direction specified by the given name or null if no such Direction exists
         */
        static byName(name: string | null): $Direction;
        getClockWise(axis: $Direction$Axis_): $Direction;
        /**
         * Rotate this Direction around the Y axis clockwise (NORTH => EAST => SOUTH => WEST => NORTH)
         */
        getClockWise(): $Direction;
        getRotation(): $Quaternionf;
        getSerializedName(): string;
        /**
         * @return the angle in degrees corresponding to this Direction.
         * @see #fromYRot
         */
        getPitch(): number;
        /**
         * Gets the `Direction` values for the provided entity's
         * looking direction. Dependent on yaw and pitch of entity looking.
         */
        static orderedByNearest(entity: $Entity): $Direction[];
        /**
         * @return the index of this horizontal facing (0-3). The order is S-W-N-E
         */
        getHorizontalIndex(): number;
        /**
         * @return the index of this horizontal facing (0-3). The order is S-W-N-E
         */
        getIndex(): number;
        static allShuffled(random: $RandomSource): $Collection<$Direction>;
        static getFacingAxis(entity: $Entity, axis: $Direction$Axis_): $Direction;
        isFacingAngle(degrees: number): boolean;
        /**
         * @return the Direction corresponding to the given horizontal index (0-3). Out of bounds values are wrapped around. The order is S-W-N-E.
         * @see #get2DDataValue
         */
        static from2DDataValue(horizontalIndex: number): $Direction;
        /**
         * @return the Direction corresponding to the given horizontal index (0-3). Out of bounds values are wrapped around. The order is S-W-N-E.
         * @see #get2DDataValue
         */
        static from3DDataValue(horizontalIndex: number): $Direction;
        /**
         * Rotate this Direction around the Y axis clockwise (NORTH => EAST => SOUTH => WEST => NORTH)
         */
        getCounterClockWise(): $Direction;
        getCounterClockWise(axis: $Direction$Axis_): $Direction;
        static getNearest(x: number, arg1: number, y: number): $Direction;
        static getNearest(ois: $Vec3_): $Direction;
        static getNearest(x: number, y: number, z: number): $Direction;
        getAxis(): $Direction$Axis;
        /**
         * @return the Direction corresponding to the given angle in degrees (0-360). Out of bounds values are wrapped around. An angle of 0 is SOUTH, an angle of 90 would be WEST.
         */
        static fromYRot(angle: number): $Direction;
        static getRandom(random: $RandomSource): $Direction;
        /**
         * @return the angle in degrees corresponding to this Direction.
         * @see #fromYRot
         */
        getYaw(): number;
        /**
         * Rotate this Direction around the Y axis clockwise (NORTH => EAST => SOUTH => WEST => NORTH)
         */
        getOpposite(): $Direction;
        getAxisDirection(): $Direction$AxisDirection;
        /**
         * @return the normalized Vector that points in the direction of this Direction.
         */
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
        get pitch(): number;
        get horizontalIndex(): number;
        get index(): number;
        get axis(): $Direction$Axis;
        get yaw(): number;
        get opposite(): $Direction;
        get axisDirection(): $Direction$AxisDirection;
        get normal(): $Vec3i;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Direction}.
     */
    export type $Direction_ = "down" | "up" | "north" | "south" | "west" | "east";
    export class $RegistrySetBuilder$EmptyTagLookup<T> implements $HolderGetter<T> {
        getOrThrow(tagKey: $TagKey_<T>): $HolderSet$Named<T>;
        getOrThrow(resourceKey: $ResourceKey_<T>): $Holder$Reference<T>;
    }
    export class $DefaultedRegistry<T> {
    }
    export interface $DefaultedRegistry<T> extends $Registry<T> {
        get(arg0: $ResourceLocation_ | null): T;
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
        static direct<E, T>(holderFactory: $Function_<E, $Holder<T>>, ...values: E[]): $HolderSet$Direct<T>;
        static direct<T>(...contents: $Holder_<T>[]): $HolderSet$Direct<T>;
        static direct<T>(contents: $List_<$Holder_<T>>): $HolderSet$Direct<T>;
        static direct<E, T>(holderFactory: $Function_<E, $Holder<T>>, values: $Collection_<E>): $HolderSet$Direct<T>;
        /**
         * @deprecated
         */
        static emptyNamed<T>(owner: $HolderOwner<T>, key: $TagKey_<T>): $HolderSet$Named<T>;
    }
    export interface $HolderSet<T> extends $Iterable<$Holder<T>>, $IHolderSetExtension<T> {
        /**
         * @note_to_llm `HolderSet` is a set of `Holder`s that may be either direct references or tags. KubeJS has special type wrapper for `HolderSet<T>`
         * that allows you to use string literals as `HolderSet`. For example, ["minecraft:apple"] can be used as a `HolderSet<Item>`, and so can ["forge:ores"]
         * Check available literals for registry entries and tags using the #tool:prunoideae.probejs/listRegistries, #tool:prunoideae.probejs/queryRegistryObjectsByRegex and #tool:prunoideae.probejs/queryTagsByRegex tools.
         */
        size(): number;
        get(index: number): $Holder<$Holder<T>>;
        stream(): $Stream<$Holder<$Holder<T>>>;
        contains(holder: $Holder_<$Holder<T>>): boolean;
        unwrap(): $Either<$TagKey<$Holder<T>>, $List<$Holder<$Holder<T>>>>;
        getRandomElement(random: $RandomSource): ($Holder<$Holder<T>>) | undefined;
        canSerializeIn(owner: $HolderOwner<$Holder_<T>>): boolean;
        unwrapKey(): ($TagKey<$Holder<T>>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $HolderSet}.
     */
    export type $HolderSet_<T> = RegistryTypes.ResolveObject<T>[];
    export class $RegistrySetBuilder$1Entry<T> extends $Record {
    }
}
