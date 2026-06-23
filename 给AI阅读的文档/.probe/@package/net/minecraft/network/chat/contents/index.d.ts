import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $ComponentContents$Type, $MutableComponent, $Component_, $Style, $ComponentContents, $FormattedText$ContentConsumer_, $Component, $FormattedText$StyledContentConsumer_, $FormattedText } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $NbtPathArgument$NbtPath } from "@package/net/minecraft/commands/arguments";
import { $EntitySelector } from "@package/net/minecraft/commands/arguments/selector";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Function_, $Function, $Supplier } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Coordinates } from "@package/net/minecraft/commands/arguments/coordinates";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Throwable, $Record, $Object, $IllegalArgumentException } from "@package/java/lang";

declare module "@package/net/minecraft/network/chat/contents" {
    export class $DataSource {
        static CODEC: $MapCodec<$DataSource>;
    }
    export interface $DataSource {
        type(): $DataSource$Type<never>;
        getData(source: $CommandSourceStack): $Stream<$CompoundTag>;
    }
    export class $NbtContents implements $ComponentContents {
        type(): $ComponentContents$Type<never>;
        resolve(nbtPathPattern: $CommandSourceStack | null, entity: $Entity | null, recursionDepth: number): $MutableComponent;
        getSeparator(): ($Component) | undefined;
        getNbtPath(): string;
        isInterpreting(): boolean;
        getDataSource(): $DataSource;
        visit<T>(contentConsumer: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(styledContentConsumer: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        static CODEC: $MapCodec<$NbtContents>;
        compiledNbtPath: $NbtPathArgument$NbtPath;
        static TYPE: $ComponentContents$Type<$NbtContents>;
        constructor(nbtPathPattern: string, interpreting: boolean, separator: ($Component_) | undefined, dataSource: $DataSource);
        get separator(): ($Component) | undefined;
        get nbtPath(): string;
        get interpreting(): boolean;
        get dataSource(): $DataSource;
    }
    export class $TranslatableFormatException extends $IllegalArgumentException {
        constructor(contents: $TranslatableContents, error: string);
        constructor(component: $TranslatableContents, invalidIndex: number);
        constructor(contents: $TranslatableContents, cause: $Throwable);
    }
    export class $ScoreContents implements $ComponentContents {
        getName(): string;
        type(): $ComponentContents$Type<never>;
        resolve(nbtPathPattern: $CommandSourceStack | null, entity: $Entity | null, recursionDepth: number): $MutableComponent;
        getSelector(): $EntitySelector;
        getObjective(): string;
        visit<T>(contentConsumer: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(styledContentConsumer: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        static CODEC: $MapCodec<$ScoreContents>;
        static TYPE: $ComponentContents$Type<$ScoreContents>;
        static INNER_CODEC: $MapCodec<$ScoreContents>;
        constructor(name: string, objective: string);
        get name(): string;
        get selector(): $EntitySelector;
        get objective(): string;
    }
    export class $PlainTextContents$LiteralContents extends $Record implements $PlainTextContents {
        text(): string;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        type(): $ComponentContents$Type<never>;
        resolve(arg0: $CommandSourceStack | null, arg1: $Entity | null, arg2: number): $MutableComponent;
        constructor(arg0: string);
    }
    export class $TranslatableContents implements $ComponentContents {
        type(): $ComponentContents$Type<never>;
        getKey(): string;
        resolve(nbtPathPattern: $CommandSourceStack | null, entity: $Entity | null, recursionDepth: number): $MutableComponent;
        visit<T>(styledContentConsumer: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        visit<T>(contentConsumer: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        getArgs(): $Object[];
        getArgument(index: number): $FormattedText;
        static isAllowedPrimitiveArgument(other: $Object | null): boolean;
        getFallback(): string;
        args: $Object[];
        static CODEC: $MapCodec<$TranslatableContents>;
        static NO_ARGS: $Object[];
        static TYPE: $ComponentContents$Type<$TranslatableContents>;
        constructor(key: string, fallback: string | null, args: $Object[]);
        get key(): string;
        get fallback(): string;
    }
    export class $KeybindResolver {
        static setKeyResolver(keyResolver: $Function_<string, $Supplier<$Component>>): void;
        static keyResolver: $Function<string, $Supplier<$Component>>;
        constructor();
    }
    export class $SelectorContents implements $ComponentContents {
        getPattern(): string;
        type(): $ComponentContents$Type<never>;
        resolve(nbtPathPattern: $CommandSourceStack | null, entity: $Entity | null, recursionDepth: number): $MutableComponent;
        getSeparator(): ($Component) | undefined;
        visit<T>(styledContentConsumer: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        visit<T>(contentConsumer: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        getSelector(): $EntitySelector;
        static CODEC: $MapCodec<$SelectorContents>;
        static TYPE: $ComponentContents$Type<$SelectorContents>;
        separator: ($Component) | undefined;
        constructor(pattern: string, separator: ($Component_) | undefined);
        get pattern(): string;
        get selector(): $EntitySelector;
    }
    export class $EntityDataSource extends $Record implements $DataSource {
        type(): $DataSource$Type<never>;
        getData(source: $CommandSourceStack): $Stream<$CompoundTag>;
        selectorPattern(): string;
        compiledSelector(): $EntitySelector;
        static SUB_CODEC: $MapCodec<$EntityDataSource>;
        static TYPE: $DataSource$Type<$EntityDataSource>;
        constructor(selectorPattern: string);
        constructor(arg0: string, arg1: $EntitySelector | null);
    }
    export class $DataSource$Type<T extends $DataSource> extends $Record implements $StringRepresentable {
        id(): string;
        codec(): $MapCodec<T>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        constructor(arg0: $MapCodec_<T>, arg1: string);
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    export class $PlainTextContents {
        static create(text: string): $PlainTextContents;
        static CODEC: $MapCodec<$PlainTextContents>;
        static TYPE: $ComponentContents$Type<$PlainTextContents>;
        static EMPTY: $PlainTextContents;
    }
    export interface $PlainTextContents extends $ComponentContents {
        type(): $ComponentContents$Type<never>;
        text(): string;
    }
    /**
     * Values that may be interpreted as {@link $PlainTextContents}.
     */
    export type $PlainTextContents_ = (() => string);
    export class $KeybindContents implements $ComponentContents {
        getName(): string;
        type(): $ComponentContents$Type<never>;
        visit<T>(styledContentConsumer: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        visit<T>(contentConsumer: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        resolve(nbtPathPattern: $CommandSourceStack | null, entity: $Entity | null, recursionDepth: number): $MutableComponent;
        static CODEC: $MapCodec<$KeybindContents>;
        static TYPE: $ComponentContents$Type<$KeybindContents>;
        constructor(name: string);
        get name(): string;
    }
    export class $BlockDataSource extends $Record implements $DataSource {
        type(): $DataSource$Type<never>;
        getData(source: $CommandSourceStack): $Stream<$CompoundTag>;
        posPattern(): string;
        compiledPos(): $Coordinates;
        static SUB_CODEC: $MapCodec<$BlockDataSource>;
        static TYPE: $DataSource$Type<$BlockDataSource>;
        constructor(posPattern: string);
        constructor(arg0: string, arg1: $Coordinates | null);
    }
    export class $StorageDataSource extends $Record implements $DataSource {
        type(): $DataSource$Type<never>;
        id(): $ResourceLocation;
        getData(source: $CommandSourceStack): $Stream<$CompoundTag>;
        static SUB_CODEC: $MapCodec<$StorageDataSource>;
        static TYPE: $DataSource$Type<$StorageDataSource>;
        constructor(arg0: $ResourceLocation_);
    }
}
