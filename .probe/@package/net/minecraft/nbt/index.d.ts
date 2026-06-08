import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Encoder_, $DataResult, $DynamicOps, $MapLike, $ListBuilder, $Codec, $RecordBuilder$AbstractStringBuilder, $RecordBuilder, $Decoder_ } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $IModifyAbleNbtAccounter } from "@package/com/connectivity/networkstats";
import { $NbtAccounterAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID, $List, $SequencedCollection, $Map_, $UUID_, $List_, $Map, $Map$Entry, $Set, $AbstractList } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $DelegateDataOutput } from "@package/net/minecraft/util";
import { $BiConsumer, $Consumer, $Function_, $Function } from "@package/java/util/function";
import { $TypeInfo_ } from "@package/dev/latvian/mods/rhino/type";
import { $ReportedException, $CrashReport } from "@package/net/minecraft";
import { $BlockPos, $BlockPos_, $HolderGetter } from "@package/net/minecraft/core";
import { $Dynamic2CommandExceptionType, $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $Path_ } from "@package/java/nio/file";
import { $BlockState_, $StateHolder, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SpecialEquality, $CustomJavaToJsWrapper } from "@package/dev/latvian/mods/rhino/util";
import { $Enum, $RuntimeException, $Number, $StringBuilder, $Comparable, $Object } from "@package/java/lang";
import { $INbtCompound } from "@package/com/ishland/c2me/base/mixin/access";
import { $DataOutput, $DataInput, $InputStream, $OutputStream } from "@package/java/io";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $IntStream, $LongStream, $Stream } from "@package/java/util/stream";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Scriptable } from "@package/dev/latvian/mods/rhino";
export * as visitors from "@package/net/minecraft/nbt/visitors";

declare module "@package/net/minecraft/nbt" {
    export class $LongArrayTag extends $CollectionTag<$LongTag> {
        add(arg0: number, arg1: $LongTag): void;
        set(arg0: number, arg1: $LongTag): $LongTag;
        copy(): $LongArrayTag;
        getAsLongArray(): number[];
        reversed(): $SequencedCollection<$LongTag>;
        static TYPE: $TagType<$LongArrayTag>;
        constructor(arg0: $List_<number>);
        constructor(arg0: $LongSet);
        constructor(arg0: number[]);
        get asLongArray(): number[];
    }
    export class $NbtOps$NbtRecordBuilder extends $RecordBuilder$AbstractStringBuilder<$Tag, $CompoundTag> {
    }
    export class $TextComponentTagVisitor implements $TagVisitor {
        visit(arg0: $Tag_): $Component;
        visitEnd(arg0: $EndTag): void;
        visitByte(arg0: $ByteTag): void;
        visitShort(arg0: $ShortTag): void;
        visitInt(arg0: $IntTag): void;
        visitFloat(arg0: $FloatTag): void;
        visitLong(arg0: $LongTag): void;
        static handleEscapePretty(arg0: string): $Component;
        visitCompound(arg0: $CompoundTag_): void;
        visitString(arg0: $StringTag): void;
        visitDouble(arg0: $DoubleTag): void;
        visitList(arg0: $ListTag_): void;
        visitByteArray(arg0: $ByteArrayTag): void;
        visitLongArray(arg0: $LongArrayTag): void;
        visitIntArray(arg0: $IntArrayTag): void;
        constructor(arg0: string);
    }
    export class $LongTag extends $NumericTag {
        static valueOf(arg0: number): $LongTag;
        static TYPE: $TagType<$LongTag>;
        constructor(arg0: number);
    }
    export class $TagType$StaticSize<T extends $Tag> {
    }
    export interface $TagType$StaticSize<T extends $Tag> extends $TagType<T> {
        size(): number;
        skip(arg0: $DataInput, arg1: number, arg2: $NbtAccounter): void;
        skip(arg0: $DataInput, arg1: $NbtAccounter): void;
    }
    export class $NbtOps$HeterogenousListCollector implements $NbtOps$ListCollector {
    }
    export class $NbtException extends $RuntimeException {
        constructor(arg0: string);
    }
    export class $ByteTag$Cache {
    }
    export class $NbtOps$InitialListCollector implements $NbtOps$ListCollector {
    }
    export class $NbtOps$IntListCollector implements $NbtOps$ListCollector {
    }
    export class $NbtIo$StringFallbackDataOutput extends $DelegateDataOutput {
        constructor(arg0: $DataOutput);
    }
    export class $TagVisitor {
    }
    export interface $TagVisitor {
        visitEnd(arg0: $EndTag): void;
        visitByte(arg0: $ByteTag): void;
        visitShort(arg0: $ShortTag): void;
        visitInt(arg0: $IntTag): void;
        visitFloat(arg0: $FloatTag): void;
        visitLong(arg0: $LongTag): void;
        visitCompound(arg0: $CompoundTag_): void;
        visitString(arg0: $StringTag): void;
        visitDouble(arg0: $DoubleTag): void;
        visitList(arg0: $ListTag_): void;
        visitByteArray(arg0: $ByteArrayTag): void;
        visitLongArray(arg0: $LongArrayTag): void;
        visitIntArray(arg0: $IntArrayTag): void;
    }
    export class $NbtIo {
        static write(arg0: $CompoundTag_, arg1: $Path_): void;
        static write(arg0: $CompoundTag_, arg1: $DataOutput): void;
        static read(arg0: $DataInput): $CompoundTag;
        static read(arg0: $Path_): $CompoundTag;
        static read(arg0: $DataInput, arg1: $NbtAccounter): $CompoundTag;
        static parse(arg0: $DataInput, arg1: $StreamTagVisitor, arg2: $NbtAccounter): void;
        static writeUnnamedTagWithFallback(arg0: $Tag_, arg1: $DataOutput): void;
        static readAnyTag(arg0: $DataInput, arg1: $NbtAccounter): $Tag;
        static writeAnyTag(arg0: $Tag_, arg1: $DataOutput): void;
        static writeUnnamedTag(arg0: $Tag_, arg1: $DataOutput): void;
        static parseCompressed(arg0: $InputStream, arg1: $StreamTagVisitor, arg2: $NbtAccounter): void;
        static parseCompressed(arg0: $Path_, arg1: $StreamTagVisitor, arg2: $NbtAccounter): void;
        static writeCompressed(arg0: $CompoundTag_, arg1: $Path_): void;
        static writeCompressed(arg0: $CompoundTag_, arg1: $OutputStream): void;
        static readCompressed(arg0: $Path_, arg1: $NbtAccounter): $CompoundTag;
        static readCompressed(arg0: $InputStream, arg1: $NbtAccounter): $CompoundTag;
        constructor();
    }
    export class $StreamTagVisitor {
    }
    export interface $StreamTagVisitor {
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: string): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visitEnd(): $StreamTagVisitor$ValueResult;
        visitEntry(arg0: $TagType<never>, arg1: string): $StreamTagVisitor$EntryResult;
        visitEntry(arg0: $TagType<never>): $StreamTagVisitor$EntryResult;
        visitRootEntry(arg0: $TagType<never>): $StreamTagVisitor$ValueResult;
        visitContainerEnd(): $StreamTagVisitor$ValueResult;
        visitList(arg0: $TagType<never>, arg1: number): $StreamTagVisitor$ValueResult;
        visitElement(arg0: $TagType<never>, arg1: number): $StreamTagVisitor$EntryResult;
    }
    export class $NbtOps$HomogenousListCollector implements $NbtOps$ListCollector {
    }
    export class $ShortTag$Cache {
    }
    export class $Tag {
        static TAG_INT: number;
        static TAG_FLOAT: number;
        static TAG_BYTE_ARRAY: number;
        static MAX_DEPTH: number;
        static OBJECT_HEADER: number;
        static TAG_INT_ARRAY: number;
        static ARRAY_HEADER: number;
        static TAG_DOUBLE: number;
        static TAG_STRING: number;
        static OBJECT_REFERENCE: number;
        static TAG_BYTE: number;
        static TAG_ANY_NUMERIC: number;
        static TAG_COMPOUND: number;
        static TAG_SHORT: number;
        static TAG_END: number;
        static TAG_LIST: number;
        static TAG_LONG_ARRAY: number;
        static STRING_SIZE: number;
        static TAG_LONG: number;
    }
    export interface $Tag {
        toString(): string;
        write(arg0: $DataOutput): void;
        accept(arg0: $TagVisitor): void;
        accept(arg0: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        getId(): number;
        getType(): $TagType<never>;
        copy(): $Tag;
        sizeInBytes(): number;
        getAsString(): string;
        acceptAsRoot(arg0: $StreamTagVisitor): void;
        get id(): number;
        get type(): $TagType<never>;
        get asString(): string;
    }
    /**
     * Values that may be interpreted as {@link $Tag}.
     */
    export type $Tag_ = string | number | boolean | object | any[];
    export class $StreamTagVisitor$EntryResult extends $Enum<$StreamTagVisitor$EntryResult> {
        static values(): $StreamTagVisitor$EntryResult[];
        static valueOf(arg0: string): $StreamTagVisitor$EntryResult;
        static HALT: $StreamTagVisitor$EntryResult;
        static BREAK: $StreamTagVisitor$EntryResult;
        static ENTER: $StreamTagVisitor$EntryResult;
        static SKIP: $StreamTagVisitor$EntryResult;
    }
    /**
     * Values that may be interpreted as {@link $StreamTagVisitor$EntryResult}.
     */
    export type $StreamTagVisitor$EntryResult_ = "enter" | "skip" | "break" | "halt";
    export class $NbtFormatException extends $NbtException {
        constructor(arg0: string);
    }
    export class $NbtOps$LongListCollector implements $NbtOps$ListCollector {
    }
    export class $NumericTag implements $Tag, $SpecialEquality {
        getAsInt(): number;
        getAsDouble(): number;
        getAsLong(): number;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getAsFloat(): number;
        getAsByte(): number;
        getAsShort(): number;
        getAsNumber(): $Number;
        getAsString(): string;
        acceptAsRoot(arg0: $StreamTagVisitor): void;
        constructor();
        get asInt(): number;
        get asDouble(): number;
        get asLong(): number;
        get asFloat(): number;
        get asByte(): number;
        get asShort(): number;
        get asNumber(): $Number;
        get asString(): string;
    }
    export class $NbtAccounterException extends $NbtException {
        constructor(arg0: string);
    }
    export class $TagType$VariableSize<T extends $Tag> {
    }
    export interface $TagType$VariableSize<T extends $Tag> extends $TagType<T> {
        skip(arg0: $DataInput, arg1: number, arg2: $NbtAccounter): void;
    }
    export class $StringTagVisitor implements $TagVisitor {
        visit(arg0: $Tag_): string;
        visitEnd(arg0: $EndTag): void;
        visitByte(arg0: $ByteTag): void;
        visitShort(arg0: $ShortTag): void;
        visitInt(arg0: $IntTag): void;
        visitFloat(arg0: $FloatTag): void;
        visitLong(arg0: $LongTag): void;
        visitCompound(arg0: $CompoundTag_): void;
        visitString(arg0: $StringTag): void;
        visitDouble(arg0: $DoubleTag): void;
        visitList(arg0: $ListTag_): void;
        visitByteArray(arg0: $ByteArrayTag): void;
        visitLongArray(arg0: $LongArrayTag): void;
        visitIntArray(arg0: $IntArrayTag): void;
        static handleEscape(arg0: string): string;
        constructor();
    }
    export class $NbtAccounter implements $IModifyAbleNbtAccounter, $NbtAccounterAccessor {
        static create(arg0: number): $NbtAccounter;
        readUTF(arg0: string): string;
        getUsage(): number;
        getDepth(): number;
        setQuota(arg0: number): void;
        popDepth(): void;
        pushDepth(): void;
        static unlimitedHeap(): $NbtAccounter;
        getOriginalQuota(): number;
        accountBytes(arg0: number): void;
        accountBytes(arg0: number, arg1: number): void;
        create$getUsage(): number;
        quota: number;
        constructor(arg0: number, arg1: number);
        get usage(): number;
        get depth(): number;
        get originalQuota(): number;
    }
    export class $IntTag extends $NumericTag {
        static valueOf(arg0: number): $IntTag;
        static TYPE: $TagType<$IntTag>;
        constructor(arg0: number);
    }
    export class $CompoundTag implements $Tag, $CustomJavaToJsWrapper, $INbtCompound {
        remove(arg0: string): void;
        size(): number;
        get(arg0: string): $Tag;
        put(arg0: string, arg1: $Tag_): $Tag;
        getBoolean(arg0: string): boolean;
        putBoolean(arg0: string, arg1: boolean): void;
        getByte(arg0: string): number;
        putByte(arg0: string, arg1: number): void;
        getShort(arg0: string): number;
        putShort(arg0: string, arg1: number): void;
        getInt(arg0: string): number;
        putInt(arg0: string, arg1: number): void;
        getLong(arg0: string): number;
        putLong(arg0: string, arg1: number): void;
        getFloat(arg0: string): number;
        putFloat(arg0: string, arg1: number): void;
        getDouble(arg0: string): number;
        putDouble(arg0: string, arg1: number): void;
        isEmpty(): boolean;
        contains(arg0: string): boolean;
        contains(arg0: string, arg1: number): boolean;
        merge(arg0: $CompoundTag_): $CompoundTag;
        entrySet(): $Set<$Map$Entry<string, $Tag>>;
        write(arg0: $DataOutput): void;
        accept(arg0: $TagVisitor): void;
        accept(arg0: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        getId(): number;
        getType(): $TagType<$CompoundTag>;
        copy(): $CompoundTag;
        getString(arg0: string): string;
        putByteArray(arg0: string, arg1: number[]): void;
        sizeInBytes(): number;
        getAllKeys(): $Set<string>;
        getList(arg0: string, arg1: number): $ListTag;
        putString(arg0: string, arg1: string): void;
        getUUID(arg0: string): $UUID;
        putUUID(arg0: string, arg1: $UUID_): void;
        getTagType(arg0: string): number;
        hasUUID(arg0: string): boolean;
        putIntArray(arg0: string, arg1: number[]): void;
        getByteArray(arg0: string): number[];
        shallowCopy(): $CompoundTag;
        static readNamedTagData(arg0: $TagType<never>, arg1: string, arg2: $DataInput, arg3: $NbtAccounter): $Tag;
        convertJavaToJs(scope: $Scriptable, target: $TypeInfo_): $Scriptable;
        putLongArray(arg0: string, arg1: number[]): void;
        getCompound(arg0: string): $CompoundTag;
        getIntArray(arg0: string): number[];
        getLongArray(arg0: string): number[];
        getAsString(): string;
        acceptAsRoot(arg0: $StreamTagVisitor): void;
        static CODEC: $Codec<$CompoundTag>;
        static TYPE: $TagType<$CompoundTag>;
        tags: $Map<string, $Tag>;
        constructor(arg0: number);
        constructor();
        constructor(arg0: $Map_<string, $Tag_>);
        get empty(): boolean;
        get id(): number;
        get type(): $TagType<$CompoundTag>;
        get allKeys(): $Set<string>;
        get asString(): string;
    }
    /**
     * Values that may be interpreted as {@link $CompoundTag}.
     */
    export type $CompoundTag_ = object;
    export class $StreamTagVisitor$ValueResult extends $Enum<$StreamTagVisitor$ValueResult> {
        static values(): $StreamTagVisitor$ValueResult[];
        static valueOf(arg0: string): $StreamTagVisitor$ValueResult;
        static CONTINUE: $StreamTagVisitor$ValueResult;
        static HALT: $StreamTagVisitor$ValueResult;
        static BREAK: $StreamTagVisitor$ValueResult;
    }
    /**
     * Values that may be interpreted as {@link $StreamTagVisitor$ValueResult}.
     */
    export type $StreamTagVisitor$ValueResult_ = "continue" | "break" | "halt";
    export class $NbtOps implements $DynamicOps<$Tag> {
        remove(arg0: $Tag_, arg1: string): $Tag;
        getByteBuffer(arg0: $Tag_): $DataResult<$ByteBuffer>;
        getMap(arg0: $Tag_): $DataResult<$MapLike<$Tag>>;
        createMap(arg0: $Stream<$Pair<$Tag_, $Tag_>>): $Tag;
        createString(arg0: string): $Tag;
        getStream(arg0: $Tag_): $DataResult<$Stream<$Tag>>;
        createList(arg0: $Stream<$Tag_>): $Tag;
        mergeToMap(arg0: $Tag_, arg1: $MapLike<$Tag_>): $DataResult<$Tag>;
        mergeToMap(arg0: $Tag_, arg1: $Tag_, arg2: $Tag_): $DataResult<$Tag>;
        mergeToMap(arg0: $Tag_, arg1: $Map_<$Tag_, $Tag_>): $DataResult<$Tag>;
        createInt(arg0: number): $Tag;
        mapBuilder(): $RecordBuilder<$Tag>;
        getList(arg0: $Tag_): $DataResult<$Consumer<$Consumer<$Tag>>>;
        convertTo<U>(arg0: $DynamicOps<U>, arg1: $Tag_): U;
        getStringValue(arg0: $Tag_): $DataResult<string>;
        createDouble(arg0: number): $Tag;
        mergeToList(arg0: $Tag_, arg1: $Tag_): $DataResult<$Tag>;
        mergeToList(arg0: $Tag_, arg1: $List_<$Tag_>): $DataResult<$Tag>;
        getMapEntries(arg0: $Tag_): $DataResult<$Consumer<$BiConsumer<$Tag, $Tag>>>;
        createIntList(arg0: $IntStream): $Tag;
        getNumberValue(arg0: $Tag_): $DataResult<$Number>;
        createByteList(arg0: $ByteBuffer): $Tag;
        getMapValues(arg0: $Tag_): $DataResult<$Stream<$Pair<$Tag, $Tag>>>;
        createShort(arg0: number): $Tag;
        getLongStream(arg0: $Tag_): $DataResult<$LongStream>;
        getIntStream(arg0: $Tag_): $DataResult<$IntStream>;
        get(arg0: $Tag_, arg1: string): $DataResult<$Tag>;
        update(arg0: $Tag_, arg1: string, arg2: $Function_<$Tag, $Tag>): $Tag;
        set(arg0: $Tag_, arg1: string, arg2: $Tag_): $Tag;
        emptyList(): $Tag;
        emptyMap(): $Tag;
        createMap(arg0: $Map_<$Tag_, $Tag_>): $Tag;
        withParser<E>(arg0: $Decoder_<E>): $Function<$Tag, $DataResult<E>>;
        convertMap<U>(arg0: $DynamicOps<U>, arg1: $Tag_): U;
        getGeneric(arg0: $Tag_, arg1: $Tag_): $DataResult<$Tag>;
        getBooleanValue(arg0: $Tag_): $DataResult<boolean>;
        getNumberValue(arg0: $Tag_, arg1: $Number): $Number;
        convertList<U>(arg0: $DynamicOps<U>, arg1: $Tag_): U;
        withDecoder<E>(arg0: $Decoder_<E>): $Function<$Tag, $DataResult<$Pair<E, $Tag>>>;
        updateGeneric(arg0: $Tag_, arg1: $Tag_, arg2: $Function_<$Tag, $Tag>): $Tag;
        mergeToPrimitive(arg0: $Tag_, arg1: $Tag_): $DataResult<$Tag>;
        withEncoder<E>(arg0: $Encoder_<E>): $Function<E, $DataResult<$Tag>>;
        listBuilder(): $ListBuilder<$Tag>;
        compressMaps(): boolean;
        empty(): $Tag;
        createLong(arg0: number): $Tag;
        createByte(arg0: number): $Tag;
        createFloat(arg0: number): $Tag;
        createNumeric(arg0: $Number): $Tag;
        createBoolean(arg0: boolean): $Tag;
        createLongList(arg0: $LongStream): $Tag;
        static INSTANCE: $NbtOps;
        constructor();
    }
    export class $ByteTag extends $NumericTag {
        static valueOf(arg0: boolean): $ByteTag;
        static valueOf(arg0: number): $ByteTag;
        static ZERO: $ByteTag;
        static ONE: $ByteTag;
        static TYPE: $TagType<$ByteTag>;
        constructor(arg0: number);
    }
    export class $NbtUtils {
        static prettyPrint(arg0: $StringBuilder, arg1: $Tag_, arg2: number, arg3: boolean): $StringBuilder;
        static prettyPrint(arg0: $Tag_, arg1: boolean): string;
        static prettyPrint(arg0: $Tag_): string;
        static getDataVersion(arg0: $CompoundTag_, arg1: number): number;
        static writeBlockPos(arg0: $BlockPos_): $Tag;
        static readBlockPos(arg0: $CompoundTag_, arg1: string): ($BlockPos) | undefined;
        static createUUID(arg0: $UUID_): $IntArrayTag;
        static loadUUID(arg0: $Tag_): $UUID;
        static addCurrentDataVersion(arg0: $CompoundTag_): $CompoundTag;
        static writeBlockState(arg0: $BlockState_): $CompoundTag;
        static readBlockState(arg0: $HolderGetter<$Block_>, arg1: $CompoundTag_): $BlockState;
        static setValueHelper<S extends $StateHolder<never, S>, T extends $Comparable<T>>(arg0: S, arg1: $Property<T>, arg2: string, arg3: $CompoundTag_, arg4: $CompoundTag_): S;
        static structureToSnbt(arg0: $CompoundTag_): string;
        static unpackBlockState(arg0: string): $CompoundTag;
        static writeFluidState(arg0: $FluidState): $CompoundTag;
        static addDataVersion(arg0: $CompoundTag_, arg1: number): $CompoundTag;
        static packBlockState(arg0: $CompoundTag_): string;
        static compareNbt(arg0: $Tag_, arg1: $Tag_, arg2: boolean): boolean;
        static toPrettyComponent(arg0: $Tag_): $Component;
        static snbtToStructure(arg0: string): $CompoundTag;
        static packStructureTemplate(arg0: $CompoundTag_): $CompoundTag;
        static unpackStructureTemplate(arg0: $CompoundTag_): $CompoundTag;
        static SNBT_DATA_TAG: string;
    }
    export class $ListTag extends $CollectionTag<$Tag> {
        get(arg0: number): $Tag;
        getShort(arg0: number): number;
        getInt(arg0: number): number;
        getFloat(arg0: number): number;
        getDouble(arg0: number): number;
        getString(arg0: number): string;
        getList(arg0: number): $ListTag;
        getCompound(arg0: number): $CompoundTag;
        getIntArray(arg0: number): number[];
        getLongArray(arg0: number): number[];
        reversed(): $SequencedCollection<$Tag>;
        static TYPE: $TagType<$ListTag>;
        constructor(arg0: number);
        constructor();
        constructor(arg0: $List_<$Tag_>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ListTag}.
     */
    export type $ListTag_ = any[];
    export class $IntTag$Cache {
    }
    export class $NbtOps$ByteListCollector implements $NbtOps$ListCollector {
    }
    export class $DoubleTag extends $NumericTag {
        static valueOf(arg0: number): $DoubleTag;
        static ZERO: $DoubleTag;
        static TYPE: $TagType<$DoubleTag>;
    }
    export class $ByteArrayTag extends $CollectionTag<$ByteTag> {
        add(arg0: number, arg1: $ByteTag): void;
        set(arg0: number, arg1: $ByteTag): $ByteTag;
        getAsByteArray(): number[];
        reversed(): $SequencedCollection<$ByteTag>;
        static TYPE: $TagType<$ByteArrayTag>;
        constructor(arg0: number[]);
        constructor(arg0: $List_<number>);
        get asByteArray(): number[];
    }
    export class $ReportedNbtException extends $ReportedException {
        constructor(arg0: $CrashReport);
    }
    export class $TagParser {
        readValue(): $Tag;
        static parseTag(arg0: string): $CompoundTag;
        readList(): $Tag;
        readStruct(): $CompoundTag;
        readKey(): string;
        readSingleStruct(): $CompoundTag;
        readTypedValue(): $Tag;
        static ERROR_EXPECTED_VALUE: $SimpleCommandExceptionType;
        static ERROR_EXPECTED_KEY: $SimpleCommandExceptionType;
        static ERROR_TRAILING_DATA: $SimpleCommandExceptionType;
        static NAME_VALUE_SEPARATOR: string;
        static AS_CODEC: $Codec<$CompoundTag>;
        static ERROR_INSERT_MIXED_LIST: $Dynamic2CommandExceptionType;
        static ERROR_INSERT_MIXED_ARRAY: $Dynamic2CommandExceptionType;
        static ERROR_INVALID_ARRAY: $DynamicCommandExceptionType;
        static ELEMENT_SEPARATOR: string;
        static LENIENT_CODEC: $Codec<$CompoundTag>;
        constructor(arg0: $StringReader);
    }
    export class $FloatTag extends $NumericTag {
        static valueOf(arg0: number): $FloatTag;
        static ZERO: $FloatTag;
        static TYPE: $TagType<$FloatTag>;
    }
    export class $EndTag implements $Tag {
        write(arg0: $DataOutput): void;
        accept(arg0: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        accept(arg0: $TagVisitor): void;
        getId(): number;
        getType(): $TagType<$EndTag>;
        sizeInBytes(): number;
        getAsString(): string;
        acceptAsRoot(arg0: $StreamTagVisitor): void;
        copy(): $Tag;
        static INSTANCE: $EndTag;
        static TYPE: $TagType<$EndTag>;
        get id(): number;
        get type(): $TagType<$EndTag>;
        get asString(): string;
    }
    export class $ShortTag extends $NumericTag {
        static valueOf(arg0: number): $ShortTag;
        static TYPE: $TagType<$ShortTag>;
        constructor(arg0: number);
    }
    export class $SnbtPrinterTagVisitor implements $TagVisitor {
        visit(arg0: $Tag_): string;
        visitEnd(arg0: $EndTag): void;
        getKeys(arg0: $CompoundTag_): $List<string>;
        pathString(): string;
        visitByte(arg0: $ByteTag): void;
        visitShort(arg0: $ShortTag): void;
        visitInt(arg0: $IntTag): void;
        visitFloat(arg0: $FloatTag): void;
        visitLong(arg0: $LongTag): void;
        static handleEscapePretty(arg0: string): string;
        visitCompound(arg0: $CompoundTag_): void;
        visitString(arg0: $StringTag): void;
        visitDouble(arg0: $DoubleTag): void;
        visitList(arg0: $ListTag_): void;
        visitByteArray(arg0: $ByteArrayTag): void;
        visitLongArray(arg0: $LongArrayTag): void;
        visitIntArray(arg0: $IntArrayTag): void;
        constructor();
        constructor(arg0: string, arg1: number, arg2: $List_<string>);
    }
    export class $TagTypes {
        static getType(arg0: number): $TagType<never>;
        constructor();
    }
    export class $LongTag$Cache {
    }
    export class $TagType<T extends $Tag> {
        static createInvalid(arg0: number): $TagType<$EndTag>;
    }
    export interface $TagType<T extends $Tag> {
        getName(): string;
        load(arg0: $DataInput, arg1: $NbtAccounter): T;
        parse(arg0: $DataInput, arg1: $StreamTagVisitor, arg2: $NbtAccounter): $StreamTagVisitor$ValueResult;
        skip(arg0: $DataInput, arg1: $NbtAccounter): void;
        skip(arg0: $DataInput, arg1: number, arg2: $NbtAccounter): void;
        isValue(): boolean;
        parseRoot(arg0: $DataInput, arg1: $StreamTagVisitor, arg2: $NbtAccounter): void;
        getPrettyName(): string;
        get name(): string;
        get value(): boolean;
        get prettyName(): string;
    }
    export class $NbtOps$ListCollector {
    }
    export interface $NbtOps$ListCollector {
    }
    export class $CollectionTag<T extends $Tag> extends $AbstractList<T> implements $Tag, $CustomJavaToJsWrapper {
        add(arg0: number, arg1: T): void;
        set(arg0: number, arg1: T): T;
        getElementType(): number;
        setTag(arg0: number, arg1: $Tag_): boolean;
        addTag(arg0: number, arg1: $Tag_): boolean;
        convertJavaToJs(scope: $Scriptable, target: $TypeInfo_): $Scriptable;
        getAsString(): string;
        acceptAsRoot(arg0: $StreamTagVisitor): void;
        reversed(): $SequencedCollection<T>;
        constructor();
        get elementType(): number;
        get asString(): string;
    }
    /**
     * Values that may be interpreted as {@link $CollectionTag}.
     */
    export type $CollectionTag_<T> = any[];
    export class $StringTag implements $Tag, $SpecialEquality {
        static valueOf(arg0: string): $StringTag;
        write(arg0: $DataOutput): void;
        accept(arg0: $TagVisitor): void;
        accept(arg0: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        getId(): number;
        getType(): $TagType<$StringTag>;
        sizeInBytes(): number;
        specialEquals(o: $Object, shallow: boolean): boolean;
        static skipString(arg0: $DataInput): void;
        getAsString(): string;
        static quoteAndEscape(arg0: string): string;
        acceptAsRoot(arg0: $StreamTagVisitor): void;
        copy(): $Tag;
        static TYPE: $TagType<$StringTag>;
        get id(): number;
        get type(): $TagType<$StringTag>;
        get asString(): string;
    }
    export class $IntArrayTag extends $CollectionTag<$IntTag> {
        get(arg0: number): $IntTag;
        add(arg0: number, arg1: $IntTag): void;
        set(arg0: number, arg1: $IntTag): $IntTag;
        copy(): $IntArrayTag;
        getAsIntArray(): number[];
        reversed(): $SequencedCollection<$IntTag>;
        static TYPE: $TagType<$IntArrayTag>;
        constructor(arg0: number[]);
        constructor(arg0: $List_<number>);
        get asIntArray(): number[];
    }
}
