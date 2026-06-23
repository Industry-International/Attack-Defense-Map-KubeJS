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
import { $INbtList, $INbtCompound } from "@package/com/ishland/c2me/base/mixin/access";
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
        add(index: number, tag: $LongTag): void;
        set(index: number, tag: $LongTag): $LongTag;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $LongArrayTag;
        getAsLongArray(): number[];
        reversed(): $SequencedCollection<$LongTag>;
        static TYPE: $TagType<$LongArrayTag>;
        constructor(dataList: $List_<number>);
        constructor(dataSet: $LongSet);
        constructor(data: number[]);
        get asLongArray(): number[];
    }
    export class $NbtOps$NbtRecordBuilder extends $RecordBuilder$AbstractStringBuilder<$Tag, $CompoundTag> {
    }
    export class $TextComponentTagVisitor implements $TagVisitor {
        visit(tag: $Tag_): $Component;
        visitEnd(tag: $EndTag): void;
        visitIntArray(tag: $IntArrayTag): void;
        visitLongArray(tag: $LongArrayTag): void;
        visitByteArray(tag: $ByteArrayTag): void;
        visitDouble(tag: $DoubleTag): void;
        visitString(tag: $StringTag): void;
        visitCompound(tag: $CompoundTag_): void;
        visitList(tag: $ListTag_): void;
        visitLong(tag: $LongTag): void;
        visitByte(tag: $ByteTag): void;
        visitFloat(tag: $FloatTag): void;
        visitShort(tag: $ShortTag): void;
        visitInt(tag: $IntTag): void;
        static handleEscapePretty(text: string): $Component;
        constructor(indentation: string);
    }
    export class $LongTag extends $NumericTag {
        static valueOf(data: number): $LongTag;
        static TYPE: $TagType<$LongTag>;
        constructor(data: number);
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
        constructor(message: string);
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
        visitEnd(tag: $EndTag): void;
        visitIntArray(tag: $IntArrayTag): void;
        visitLongArray(tag: $LongArrayTag): void;
        visitByteArray(tag: $ByteArrayTag): void;
        visitDouble(tag: $DoubleTag): void;
        visitString(tag: $StringTag): void;
        visitCompound(tag: $CompoundTag_): void;
        visitList(tag: $ListTag_): void;
        visitLong(tag: $LongTag): void;
        visitByte(tag: $ByteTag): void;
        visitFloat(tag: $FloatTag): void;
        visitShort(tag: $ShortTag): void;
        visitInt(tag: $IntTag): void;
    }
    export class $NbtIo {
        static write(compoundTag: $CompoundTag_, path: $Path_): void;
        static write(compoundTag: $CompoundTag_, output: $DataOutput): void;
        /**
         * Reads a compound tag from a file. The size of the file can be infinite.
         */
        static read(input: $DataInput): $CompoundTag;
        static read(path: $Path_): $CompoundTag;
        /**
         * Reads a compound tag from a file. The size of the file is limited by the `accounter`.
         * @throws RuntimeException if the size of the file is larger than the maximum amount of bytes specified by the `accounter`
         */
        static read(input: $DataInput, accounter: $NbtAccounter): $CompoundTag;
        static parse(input: $DataInput, visitor: $StreamTagVisitor, accounter: $NbtAccounter): void;
        static writeUnnamedTagWithFallback(tag: $Tag_, output: $DataOutput): void;
        static parseCompressed(zippedStream: $InputStream, visitor: $StreamTagVisitor, accounter: $NbtAccounter): void;
        static parseCompressed(path: $Path_, visitor: $StreamTagVisitor, accounter: $NbtAccounter): void;
        static writeCompressed(compoundTag: $CompoundTag_, path: $Path_): void;
        /**
         * Writes and compresses a compound tag to a GNU zipped file.
         * @see #writeCompressed(CompoundTag, File)
         */
        static writeCompressed(compoundTag: $CompoundTag_, outputStream: $OutputStream): void;
        static readCompressed(zippedStream: $InputStream, accounter: $NbtAccounter): $CompoundTag;
        static readCompressed(path: $Path_, accounter: $NbtAccounter): $CompoundTag;
        static readAnyTag(input: $DataInput, accounter: $NbtAccounter): $Tag;
        static writeUnnamedTag(tag: $Tag_, output: $DataOutput): void;
        static writeAnyTag(tag: $Tag_, output: $DataOutput): void;
        constructor();
    }
    export class $StreamTagVisitor {
    }
    export interface $StreamTagVisitor {
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number[]): $StreamTagVisitor$ValueResult;
        visit(entry: number[]): $StreamTagVisitor$ValueResult;
        visit(entry: number[]): $StreamTagVisitor$ValueResult;
        visit(entry: string): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visitEnd(): $StreamTagVisitor$ValueResult;
        visitElement(type: $TagType<never>, size: number): $StreamTagVisitor$EntryResult;
        visitEntry(type: $TagType<never>, id: string): $StreamTagVisitor$EntryResult;
        visitEntry(type: $TagType<never>): $StreamTagVisitor$EntryResult;
        visitRootEntry(type: $TagType<never>): $StreamTagVisitor$ValueResult;
        visitContainerEnd(): $StreamTagVisitor$ValueResult;
        visitList(type: $TagType<never>, size: number): $StreamTagVisitor$ValueResult;
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
        write(output: $DataOutput): void;
        accept(visitor: $TagVisitor): void;
        accept(visitor: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        getId(): number;
        getType(): $TagType<never>;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $Tag;
        sizeInBytes(): number;
        getAsString(): string;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
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
        getAsNumber(): $Number;
        getAsFloat(): number;
        getAsByte(): number;
        getAsShort(): number;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getAsString(): string;
        acceptAsRoot(arg0: $StreamTagVisitor): void;
        constructor();
        get asInt(): number;
        get asDouble(): number;
        get asLong(): number;
        get asNumber(): $Number;
        get asFloat(): number;
        get asByte(): number;
        get asShort(): number;
        get asString(): string;
    }
    export class $NbtAccounterException extends $NbtException {
        constructor(message: string);
    }
    export class $TagType$VariableSize<T extends $Tag> {
    }
    export interface $TagType$VariableSize<T extends $Tag> extends $TagType<T> {
        skip(arg0: $DataInput, arg1: number, arg2: $NbtAccounter): void;
    }
    export class $StringTagVisitor implements $TagVisitor {
        visit(tag: $Tag_): string;
        visitEnd(tag: $EndTag): void;
        visitIntArray(tag: $IntArrayTag): void;
        visitLongArray(tag: $LongArrayTag): void;
        visitByteArray(tag: $ByteArrayTag): void;
        visitDouble(tag: $DoubleTag): void;
        visitString(tag: $StringTag): void;
        visitCompound(tag: $CompoundTag_): void;
        static handleEscape(text: string): string;
        visitList(tag: $ListTag_): void;
        visitLong(tag: $LongTag): void;
        visitByte(tag: $ByteTag): void;
        visitFloat(tag: $FloatTag): void;
        visitShort(tag: $ShortTag): void;
        visitInt(tag: $IntTag): void;
        constructor();
    }
    export class $NbtAccounter implements $IModifyAbleNbtAccounter, $NbtAccounterAccessor {
        static create(quota: number): $NbtAccounter;
        readUTF(arg0: string): string;
        getDepth(): number;
        getUsage(): number;
        popDepth(): void;
        /**
         * Adds the bytes to the current number of read bytes. If the number of bytes is greater than the stored quota, an exception will occur.
         * @throws RuntimeException if the number of `usage` bytes exceed the number of `quota` bytes
         */
        setQuota(bytes: number): void;
        pushDepth(): void;
        static unlimitedHeap(): $NbtAccounter;
        accountBytes(bytesPerItem: number, arg1: number): void;
        /**
         * Adds the bytes to the current number of read bytes. If the number of bytes is greater than the stored quota, an exception will occur.
         * @throws RuntimeException if the number of `usage` bytes exceed the number of `quota` bytes
         */
        accountBytes(bytes: number): void;
        getOriginalQuota(): number;
        create$getUsage(): number;
        quota: number;
        constructor(quota: number, arg1: number);
        get depth(): number;
        get usage(): number;
        get originalQuota(): number;
    }
    export class $IntTag extends $NumericTag {
        static valueOf(data: number): $IntTag;
        static TYPE: $TagType<$IntTag>;
        constructor(data: number);
    }
    export class $CompoundTag implements $Tag, $CustomJavaToJsWrapper, $INbtCompound {
        remove(key: string): void;
        size(): number;
        get(key: string): $Tag;
        put(key: string, value: $Tag_): $Tag;
        getBoolean(key: string): boolean;
        putBoolean(key: string, value: boolean): void;
        getByte(key: string): number;
        putByte(key: string, value: number): void;
        getShort(key: string): number;
        putShort(key: string, value: number): void;
        getInt(key: string): number;
        putInt(key: string, value: number): void;
        getLong(key: string): number;
        putLong(key: string, value: number): void;
        getFloat(key: string): number;
        putFloat(key: string, value: number): void;
        getDouble(key: string): number;
        putDouble(key: string, value: number): void;
        isEmpty(): boolean;
        contains(key: string): boolean;
        /**
         * Returns whether the tag of the specified `key` is a particular `tagType`. If the `tagType` is `99`, all numeric tags will be checked against the type of the stored tag.
         */
        contains(key: string, tagType: number): boolean;
        /**
         * Copies all the tags of `other` into this tag, then returns itself.
         * @see #copy()
         */
        merge(other: $CompoundTag_): $CompoundTag;
        entrySet(): $Set<$Map$Entry<string, $Tag>>;
        write(output: $DataOutput): void;
        accept(visitor: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        accept(visitor: $TagVisitor): void;
        getId(): number;
        getType(): $TagType<$CompoundTag>;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $CompoundTag;
        getString(key: string): string;
        putByteArray(key: string, value: number[]): void;
        sizeInBytes(): number;
        putString(key: string, value: string): void;
        getList(key: string, tagType: number): $ListTag;
        getAllKeys(): $Set<string>;
        getUUID(key: string): $UUID;
        hasUUID(key: string): boolean;
        getTagType(key: string): number;
        putUUID(key: string, value: $UUID_): void;
        putIntArray(key: string, value: number[]): void;
        putLongArray(key: string, value: number[]): void;
        getByteArray(key: string): number[];
        getCompound(key: string): $CompoundTag;
        getLongArray(key: string): number[];
        convertJavaToJs(scope: $Scriptable, target: $TypeInfo_): $Scriptable;
        static readNamedTagData(type: $TagType<never>, name: string, input: $DataInput, accounter: $NbtAccounter): $Tag;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        shallowCopy(): $CompoundTag;
        getIntArray(key: string): number[];
        getAsString(): string;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
        static CODEC: $Codec<$CompoundTag>;
        static TYPE: $TagType<$CompoundTag>;
        tags: $Map<string, $Tag>;
        constructor(arg0: number);
        constructor();
        constructor(tags: $Map_<string, $Tag_>);
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
        remove(map: $Tag_, removeKey: string): $Tag;
        empty(): $Tag;
        getByteBuffer(tag: $Tag_): $DataResult<$ByteBuffer>;
        getMap(tag: $Tag_): $DataResult<$MapLike<$Tag>>;
        createMap(data: $Stream<$Pair<$Tag_, $Tag_>>): $Tag;
        createLong(data: number): $Tag;
        getStream(tag: $Tag_): $DataResult<$Stream<$Tag>>;
        createList(data: $Stream<$Tag_>): $Tag;
        getStringValue(tag: $Tag_): $DataResult<string>;
        getList(tag: $Tag_): $DataResult<$Consumer<$Consumer<$Tag>>>;
        mergeToMap(map: $Tag_, otherMap: $MapLike<$Tag_>): $DataResult<$Tag>;
        mergeToMap(arg0: $Tag_, arg1: $Map_<$Tag_, $Tag_>): $DataResult<$Tag>;
        mergeToMap(map: $Tag_, key: $Tag_, value: $Tag_): $DataResult<$Tag>;
        convertTo<U>(ops: $DynamicOps<U>, tag: $Tag_): U;
        createInt(data: number): $Tag;
        mapBuilder(): $RecordBuilder<$Tag>;
        createFloat(data: number): $Tag;
        createDouble(data: number): $Tag;
        getNumberValue(tag: $Tag_): $DataResult<$Number>;
        getMapEntries(tag: $Tag_): $DataResult<$Consumer<$BiConsumer<$Tag, $Tag>>>;
        createBoolean(data: boolean): $Tag;
        getLongStream(tag: $Tag_): $DataResult<$LongStream>;
        createByteList(data: $ByteBuffer): $Tag;
        createLongList(data: $LongStream): $Tag;
        createNumeric(data: $Number): $Tag;
        createIntList(data: $IntStream): $Tag;
        getIntStream(tag: $Tag_): $DataResult<$IntStream>;
        mergeToList(list: $Tag_, tags: $List_<$Tag_>): $DataResult<$Tag>;
        mergeToList(list: $Tag_, tag: $Tag_): $DataResult<$Tag>;
        getMapValues(tag: $Tag_): $DataResult<$Stream<$Pair<$Tag, $Tag>>>;
        get(arg0: $Tag_, arg1: string): $DataResult<$Tag>;
        update(arg0: $Tag_, arg1: string, arg2: $Function_<$Tag, $Tag>): $Tag;
        set(arg0: $Tag_, arg1: string, arg2: $Tag_): $Tag;
        emptyList(): $Tag;
        emptyMap(): $Tag;
        createMap(arg0: $Map_<$Tag_, $Tag_>): $Tag;
        getBooleanValue(arg0: $Tag_): $DataResult<boolean>;
        convertMap<U>(arg0: $DynamicOps<U>, arg1: $Tag_): U;
        withParser<E>(arg0: $Decoder_<E>): $Function<$Tag, $DataResult<E>>;
        getGeneric(arg0: $Tag_, arg1: $Tag_): $DataResult<$Tag>;
        getNumberValue(arg0: $Tag_, arg1: $Number): $Number;
        listBuilder(): $ListBuilder<$Tag>;
        mergeToPrimitive(arg0: $Tag_, arg1: $Tag_): $DataResult<$Tag>;
        withEncoder<E>(arg0: $Encoder_<E>): $Function<E, $DataResult<$Tag>>;
        updateGeneric(arg0: $Tag_, arg1: $Tag_, arg2: $Function_<$Tag, $Tag>): $Tag;
        withDecoder<E>(arg0: $Decoder_<E>): $Function<$Tag, $DataResult<$Pair<E, $Tag>>>;
        convertList<U>(arg0: $DynamicOps<U>, arg1: $Tag_): U;
        compressMaps(): boolean;
        createString(arg0: string): $Tag;
        createByte(arg0: number): $Tag;
        createShort(arg0: number): $Tag;
        static INSTANCE: $NbtOps;
        constructor();
    }
    export class $ByteTag extends $NumericTag {
        static valueOf(data: boolean): $ByteTag;
        static valueOf(data: number): $ByteTag;
        static ZERO: $ByteTag;
        static ONE: $ByteTag;
        static TYPE: $TagType<$ByteTag>;
        constructor(data: number);
    }
    export class $NbtUtils {
        static packStructureTemplate(tag: $CompoundTag_): $CompoundTag;
        static unpackStructureTemplate(tag: $CompoundTag_): $CompoundTag;
        static snbtToStructure(text: string): $CompoundTag;
        static toPrettyComponent(tag: $Tag_): $Component;
        static prettyPrint(tag: $Tag_, prettyPrintArray: boolean): string;
        static prettyPrint(stringBuilder: $StringBuilder, tag: $Tag_, indentLevel: number, prettyPrintArray: boolean): $StringBuilder;
        static prettyPrint(tag: $Tag_): string;
        static createUUID(uuid: $UUID_): $IntArrayTag;
        static loadUUID(tag: $Tag_): $UUID;
        static compareNbt(tag: $Tag_ | null, other: $Tag_ | null, compareListTag: boolean): boolean;
        static readBlockPos(tag: $CompoundTag_, key: string): ($BlockPos) | undefined;
        static writeBlockPos(pos: $BlockPos_): $Tag;
        static getDataVersion(tag: $CompoundTag_, defaultValue: number): number;
        static writeBlockState(state: $BlockState_): $CompoundTag;
        static readBlockState(blockGetter: $HolderGetter<$Block_>, tag: $CompoundTag_): $BlockState;
        static addCurrentDataVersion(tag: $CompoundTag_): $CompoundTag;
        static setValueHelper<S extends $StateHolder<never, S>, T extends $Comparable<T>>(stateHolder: S, property: $Property<T>, propertyName: string, propertiesTag: $CompoundTag_, blockStateTag: $CompoundTag_): S;
        static structureToSnbt(tag: $CompoundTag_): string;
        static packBlockState(tag: $CompoundTag_): string;
        static unpackBlockState(text: string): $CompoundTag;
        static writeFluidState(state: $FluidState): $CompoundTag;
        static addDataVersion(tag: $CompoundTag_, dataVersion: number): $CompoundTag;
        static SNBT_DATA_TAG: string;
    }
    export class $ListTag extends $CollectionTag<$Tag> implements $INbtList {
        get(index: number): $Tag;
        getShort(index: number): number;
        getInt(index: number): number;
        getFloat(index: number): number;
        getDouble(index: number): number;
        getString(index: number): string;
        getList(index: number): $ListTag;
        getCompound(index: number): $CompoundTag;
        getLongArray(index: number): number[];
        getIntArray(index: number): number[];
        reversed(): $SequencedCollection<$Tag>;
        static TYPE: $TagType<$ListTag>;
        constructor(arg0: number);
        constructor();
        constructor(list: $List_<$Tag_>, type: number);
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
        static valueOf(data: number): $DoubleTag;
        static ZERO: $DoubleTag;
        static TYPE: $TagType<$DoubleTag>;
    }
    export class $ByteArrayTag extends $CollectionTag<$ByteTag> {
        add(index: number, tag: $ByteTag): void;
        set(index: number, tag: $ByteTag): $ByteTag;
        getAsByteArray(): number[];
        reversed(): $SequencedCollection<$ByteTag>;
        static TYPE: $TagType<$ByteArrayTag>;
        constructor(data: number[]);
        constructor(dataList: $List_<number>);
        get asByteArray(): number[];
    }
    export class $ReportedNbtException extends $ReportedException {
        constructor(arg0: $CrashReport);
    }
    export class $TagParser {
        readValue(): $Tag;
        readSingleStruct(): $CompoundTag;
        readTypedValue(): $Tag;
        readList(): $Tag;
        readStruct(): $CompoundTag;
        readKey(): string;
        static parseTag(text: string): $CompoundTag;
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
        constructor(reader: $StringReader);
    }
    export class $FloatTag extends $NumericTag {
        static valueOf(data: number): $FloatTag;
        static ZERO: $FloatTag;
        static TYPE: $TagType<$FloatTag>;
    }
    export class $EndTag implements $Tag {
        write(output: $DataOutput): void;
        accept(visitor: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        accept(visitor: $TagVisitor): void;
        getId(): number;
        getType(): $TagType<$EndTag>;
        sizeInBytes(): number;
        getAsString(): string;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $Tag;
        static INSTANCE: $EndTag;
        static TYPE: $TagType<$EndTag>;
        get id(): number;
        get type(): $TagType<$EndTag>;
        get asString(): string;
    }
    export class $ShortTag extends $NumericTag {
        static valueOf(data: number): $ShortTag;
        static TYPE: $TagType<$ShortTag>;
        constructor(data: number);
    }
    export class $SnbtPrinterTagVisitor implements $TagVisitor {
        visit(tag: $Tag_): string;
        visitEnd(tag: $EndTag): void;
        getKeys(tag: $CompoundTag_): $List<string>;
        pathString(): string;
        visitIntArray(tag: $IntArrayTag): void;
        visitLongArray(tag: $LongArrayTag): void;
        visitByteArray(tag: $ByteArrayTag): void;
        visitDouble(tag: $DoubleTag): void;
        visitString(tag: $StringTag): void;
        visitCompound(tag: $CompoundTag_): void;
        visitList(tag: $ListTag_): void;
        visitLong(tag: $LongTag): void;
        visitByte(tag: $ByteTag): void;
        visitFloat(tag: $FloatTag): void;
        visitShort(tag: $ShortTag): void;
        visitInt(tag: $IntTag): void;
        static handleEscapePretty(text: string): string;
        constructor();
        constructor(indentation: string, depth: number, path: $List_<string>);
    }
    export class $TagTypes {
        static getType(id: number): $TagType<never>;
        constructor();
    }
    export class $LongTag$Cache {
    }
    export class $TagType<T extends $Tag> {
        static createInvalid(id: number): $TagType<$EndTag>;
    }
    export interface $TagType<T extends $Tag> {
        getName(): string;
        load(input: $DataInput, accounter: $NbtAccounter): T;
        parse(input: $DataInput, visitor: $StreamTagVisitor, accounter: $NbtAccounter): $StreamTagVisitor$ValueResult;
        skip(input: $DataInput, accounter: $NbtAccounter): void;
        skip(input: $DataInput, entries: number, accounter: $NbtAccounter): void;
        isValue(): boolean;
        getPrettyName(): string;
        parseRoot(input: $DataInput, visitor: $StreamTagVisitor, nbtAccounter: $NbtAccounter): void;
        get name(): string;
        get value(): boolean;
        get prettyName(): string;
    }
    export class $NbtOps$ListCollector {
    }
    export interface $NbtOps$ListCollector {
    }
    export class $CollectionTag<T extends $Tag> extends $AbstractList<T> implements $Tag, $CustomJavaToJsWrapper {
        add(index: number, tag: T): void;
        set(index: number, tag: T): T;
        getElementType(): number;
        convertJavaToJs(scope: $Scriptable, target: $TypeInfo_): $Scriptable;
        setTag(index: number, tag: $Tag_): boolean;
        addTag(index: number, tag: $Tag_): boolean;
        getAsString(): string;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
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
        static valueOf(data: string): $StringTag;
        write(output: $DataOutput): void;
        accept(visitor: $TagVisitor): void;
        accept(visitor: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        getId(): number;
        getType(): $TagType<$StringTag>;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $StringTag;
        sizeInBytes(): number;
        static quoteAndEscape(text: string): string;
        static skipString(input: $DataInput): void;
        getAsString(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
        static TYPE: $TagType<$StringTag>;
        get id(): number;
        get type(): $TagType<$StringTag>;
        get asString(): string;
    }
    export class $IntArrayTag extends $CollectionTag<$IntTag> {
        get(index: number): $IntTag;
        add(index: number, tag: $IntTag): void;
        set(index: number, tag: $IntTag): $IntTag;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $IntArrayTag;
        getAsIntArray(): number[];
        reversed(): $SequencedCollection<$IntTag>;
        static TYPE: $TagType<$IntArrayTag>;
        constructor(data: number[]);
        constructor(dataList: $List_<number>);
        get asIntArray(): number[];
    }
}
