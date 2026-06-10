import { $JsonObject_ } from "@package/com/google/gson";
import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $ObjectiveCriteria } from "@package/net/minecraft/world/scores/criteria";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $UUID, $List, $Collection_, $List_, $Collection } from "@package/java/util";
import { $AdvancementHolder } from "@package/net/minecraft/advancements";
import { $Supplier_, $Consumer_, $Predicate_, $Predicate, $Supplier } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderSet$Named, $Registry, $Holder$Reference, $HolderLookup$Provider, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Dynamic2CommandExceptionType, $Dynamic3CommandExceptionType, $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $Suggestions, $SuggestionProvider, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $SlotRange } from "@package/net/minecraft/world/inventory";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $GameType } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $MessageSignature_, $MessageSignature, $Style, $SignableCommand_, $PlayerChatMessage, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $EntitySelector } from "@package/net/minecraft/commands/arguments/selector";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $MinMaxBounds$Doubles, $MinMaxBounds$Ints, $MinMaxBounds } from "@package/net/minecraft/advancements/critereon";
import { $CommandBuildContext, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Mirror, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Objective, $PlayerTeam, $ScoreHolder, $DisplaySlot, $ScoreAccess } from "@package/net/minecraft/world/scores";
import { $ArgumentTypeInfo$Template, $ArgumentTypeInfo } from "@package/net/minecraft/commands/synchronization";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $StatType_ } from "@package/net/minecraft/stats";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";
export * as coordinates from "@package/net/minecraft/commands/arguments/coordinates";
export * as item from "@package/net/minecraft/commands/arguments/item";
export * as selector from "@package/net/minecraft/commands/arguments/selector";
export * as blocks from "@package/net/minecraft/commands/arguments/blocks";

declare module "@package/net/minecraft/commands/arguments" {
    export class $EntityAnchorArgument implements $ArgumentType<$EntityAnchorArgument$Anchor> {
        static anchor(): $EntityAnchorArgument;
        getExamples(): $Collection<string>;
        static getAnchor(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $EntityAnchorArgument$Anchor;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $EntityAnchorArgument$Anchor;
        parse(arg0: $StringReader): $EntityAnchorArgument$Anchor;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$AllElementsNode implements $NbtPathArgument$Node {
    }
    export class $ScoreboardSlotArgument implements $ArgumentType<$DisplaySlot> {
        getExamples(): $Collection<string>;
        static displaySlot(): $ScoreboardSlotArgument;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getDisplaySlot(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $DisplaySlot;
        parse<S>(arg0: $StringReader, arg1: S): $DisplaySlot;
        parse(arg0: $StringReader): $DisplaySlot;
        static ERROR_INVALID_VALUE: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
    export class $ResourceOrIdArgument$LootPredicateArgument extends $ResourceOrIdArgument<$LootItemCondition> {
        parse(arg0: $StringReader): $LootItemCondition;
        static ERROR_FAILED_TO_PARSE: $DynamicCommandExceptionType;
        constructor(arg0: $CommandBuildContext);
    }
    export class $ResourceKeyArgument$Info<T> implements $ArgumentTypeInfo<$ResourceKeyArgument<T>, $ResourceKeyArgument$Info$Template> {
        unpack(arg0: $ResourceKeyArgument<$ResourceKeyArgument$Info$Template>): $ResourceKeyArgument$Info$Template;
        serializeToJson(arg0: $ResourceKeyArgument$Info$Template, arg1: $JsonObject_): void;
        serializeToNetwork(arg0: $ResourceKeyArgument$Info$Template, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): $ResourceKeyArgument$Info$Template;
        constructor();
    }
    export class $ArgumentSignatures$Entry extends $Record {
        signature(): $MessageSignature;
        name(): string;
        write(arg0: $FriendlyByteBuf): void;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: string, arg1: $MessageSignature_);
    }
    export class $ResourceOrIdArgument<T> implements $ArgumentType<$Holder<T>> {
        static lootTable(arg0: $CommandBuildContext): $ResourceOrIdArgument$LootTableArgument;
        getExamples(): $Collection<string>;
        static lootPredicate(arg0: $CommandBuildContext): $ResourceOrIdArgument$LootPredicateArgument;
        static lootModifier(arg0: $CommandBuildContext): $ResourceOrIdArgument$LootModifierArgument;
        static getLootTable(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Holder<$LootTable>;
        static getLootModifier(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Holder<$LootItemFunction>;
        static getLootPredicate(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Holder<$LootItemCondition>;
        static parseInlineOrId(arg0: $StringReader): $Tag;
        parse<S>(arg0: $StringReader, arg1: S): $Holder<T>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $Holder<T>;
        static ERROR_FAILED_TO_PARSE: $DynamicCommandExceptionType;
        constructor(arg0: $CommandBuildContext, arg1: $ResourceKey_<$Registry<$Holder<T>>>, arg2: $Codec<$Holder_<$Holder<T>>>);
        get examples(): $Collection<string>;
    }
    export class $ObjectiveArgument implements $ArgumentType<string> {
        parse(arg0: $StringReader): string;
        getExamples(): $Collection<string>;
        static getWritableObjective(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Objective;
        static objective(): $ObjectiveArgument;
        static getObjective(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Objective;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): string;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ArgumentSignatures$Signer {
    }
    export interface $ArgumentSignatures$Signer {
        sign(arg0: string): $MessageSignature;
    }
    /**
     * Values that may be interpreted as {@link $ArgumentSignatures$Signer}.
     */
    export type $ArgumentSignatures$Signer_ = ((arg0: string) => $MessageSignature_);
    export class $ResourceOrIdArgument$LootTableArgument extends $ResourceOrIdArgument<$LootTable> {
        parse(arg0: $StringReader): $LootTable;
        static ERROR_FAILED_TO_PARSE: $DynamicCommandExceptionType;
        constructor(arg0: $CommandBuildContext);
    }
    export class $ScoreHolderArgument implements $ArgumentType<$ScoreHolderArgument$Result> {
        static getName(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $ScoreHolder;
        parse(arg0: $StringReader): $ScoreHolderArgument$Result;
        parse<S>(arg0: $StringReader, arg1: S): $ScoreHolderArgument$Result;
        static getNames(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Collection<$ScoreHolder>;
        static getNames(arg0: $CommandContext<$CommandSourceStack>, arg1: string, arg2: $Supplier_<$Collection<$ScoreHolder>>): $Collection<$ScoreHolder>;
        getExamples(): $Collection<string>;
        static getNamesWithDefaultWildcard(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Collection<$ScoreHolder>;
        static scoreHolder(): $ScoreHolderArgument;
        static scoreHolders(): $ScoreHolderArgument;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static SUGGEST_SCORE_HOLDERS: $SuggestionProvider<$CommandSourceStack>;
        multiple: boolean;
        constructor(arg0: boolean);
        get examples(): $Collection<string>;
    }
    export class $UuidArgument implements $ArgumentType<$UUID> {
        parse(arg0: $StringReader): $UUID;
        static uuid(): $UuidArgument;
        getExamples(): $Collection<string>;
        static getUuid(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $UUID;
        parse<S>(arg0: $StringReader, arg1: S): $UUID;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static ERROR_INVALID_UUID: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $TemplateRotationArgument extends $StringRepresentableArgument<$Rotation> {
        static templateRotation(): $TemplateRotationArgument;
        static getRotation(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Rotation;
    }
    export class $MessageArgument$Message extends $Record {
        parts(): $MessageArgument$Part[];
        text(): string;
        static parseText(arg0: $StringReader, arg1: boolean): $MessageArgument$Message;
        toComponent(arg0: $CommandSourceStack, arg1: boolean): $Component;
        resolveComponent(arg0: $CommandSourceStack): $Component;
        constructor(text: string, parts: $MessageArgument$Part_[]);
    }
    export class $AngleArgument implements $ArgumentType<$AngleArgument$SingleAngle> {
        parse(arg0: $StringReader): $AngleArgument$SingleAngle;
        getExamples(): $Collection<string>;
        static getAngle(arg0: $CommandContext<$CommandSourceStack>, arg1: string): number;
        static angle(): $AngleArgument;
        parse<S>(arg0: $StringReader, arg1: S): $AngleArgument$SingleAngle;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static ERROR_INVALID_ANGLE: $SimpleCommandExceptionType;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $RangeArgument<T extends $MinMaxBounds<never>> {
        static intRange(): $RangeArgument$Ints;
        static floatRange(): $RangeArgument$Floats;
    }
    export interface $RangeArgument<T extends $MinMaxBounds<never>> extends $ArgumentType<T> {
    }
    /**
     * Values that may be interpreted as {@link $RangeArgument}.
     */
    export type $RangeArgument_<T> = (() => void);
    export class $OperationArgument$Operation {
    }
    export interface $OperationArgument$Operation {
        apply(arg0: $ScoreAccess, arg1: $ScoreAccess): void;
    }
    /**
     * Values that may be interpreted as {@link $OperationArgument$Operation}.
     */
    export type $OperationArgument$Operation_ = ((arg0: $ScoreAccess, arg1: $ScoreAccess) => void);
    export class $ResourceOrTagArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceOrTagArgument<T>> {
        type(): $ArgumentTypeInfo<$ResourceOrTagArgument<T>, never>;
        instantiate(arg0: $CommandBuildContext): $ResourceOrTagArgument<T>;
        registryKey: $ResourceKey<$Registry<T>>;
        this$0: $ResourceOrTagArgument$Info<any>;
    }
    export class $ResourceOrIdArgument$LootModifierArgument extends $ResourceOrIdArgument<$LootItemFunction> {
        parse(arg0: $StringReader): $LootItemFunction;
        static ERROR_FAILED_TO_PARSE: $DynamicCommandExceptionType;
        constructor(arg0: $CommandBuildContext);
    }
    export class $StringRepresentableArgument<T extends $Enum<T>> implements $ArgumentType<T> {
        getExamples(): $Collection<string>;
        convertId(arg0: string): string;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): T;
        parse(arg0: $StringReader): T;
        constructor(arg0: $Codec<T>, arg1: $Supplier_<T[]>);
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$MatchElementNode implements $NbtPathArgument$Node {
    }
    export class $DimensionArgument implements $ArgumentType<$ResourceLocation> {
        static getDimension(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $ServerLevel;
        static dimension(): $DimensionArgument;
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceLocation;
        parse(arg0: $StringReader): $ResourceLocation;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$CompoundChildNode implements $NbtPathArgument$Node {
    }
    export class $NbtPathArgument$MatchObjectNode implements $NbtPathArgument$Node {
    }
    export class $RangeArgument$Floats implements $RangeArgument<$MinMaxBounds$Doubles> {
        static getRange(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $MinMaxBounds$Doubles;
        getExamples(): $Collection<string>;
        parse<S>(arg0: $StringReader, arg1: S): $MinMaxBounds$Doubles;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $MinMaxBounds$Doubles;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$IndexedElementNode implements $NbtPathArgument$Node {
    }
    export class $ScoreHolderArgument$Info implements $ArgumentTypeInfo<$ScoreHolderArgument, $ScoreHolderArgument$Info$Template> {
        unpack(arg0: $ScoreHolderArgument): $ScoreHolderArgument$Info$Template;
        serializeToJson(arg0: $ScoreHolderArgument$Info$Template, arg1: $JsonObject_): void;
        serializeToNetwork(arg0: $ScoreHolderArgument$Info$Template, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): $ScoreHolderArgument$Info$Template;
        constructor();
    }
    export class $ResourceOrTagArgument$Result<T> {
    }
    export interface $ResourceOrTagArgument$Result<T> extends $Predicate<$Holder<T>> {
        cast<E>(arg0: $ResourceKey_<$Registry<E>>): ($ResourceOrTagArgument$Result<E>) | undefined;
        unwrap(): $Either<$Holder$Reference<$Holder<T>>, $HolderSet$Named<$Holder<T>>>;
        asPrintable(): string;
    }
    export class $NbtPathArgument$MatchRootObjectNode implements $NbtPathArgument$Node {
    }
    export class $NbtPathArgument$Node {
    }
    export interface $NbtPathArgument$Node {
    }
    export class $ResourceKeyArgument<T> implements $ArgumentType<$ResourceKey<T>> {
        static key<T>(arg0: $ResourceKey_<$Registry<T>>): $ResourceKeyArgument<T>;
        getExamples(): $Collection<string>;
        static getStructureTemplatePool(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Holder$Reference<$StructureTemplatePool>;
        static getConfiguredFeature(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Holder$Reference<$ConfiguredFeature<never, never>>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getStructure(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Holder$Reference<$Structure>;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceKey<T>;
        parse(arg0: $StringReader): $ResourceKey<T>;
        registryKey: $ResourceKey<$Registry<$ResourceKey<T>>>;
        constructor(arg0: $ResourceKey_<$Registry<$ResourceKey<T>>>);
        get examples(): $Collection<string>;
    }
    export class $TimeArgument implements $ArgumentType<number> {
        static time(): $TimeArgument;
        static time(arg0: number): $TimeArgument;
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): number;
        parse(arg0: $StringReader): number;
        minimum: number;
        get examples(): $Collection<string>;
    }
    export class $GameProfileArgument implements $ArgumentType<$GameProfileArgument$Result> {
        getExamples(): $Collection<string>;
        static gameProfile(): $GameProfileArgument;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getGameProfiles(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Collection<$GameProfile>;
        parse(arg0: $StringReader): $GameProfileArgument$Result;
        parse<S>(arg0: $StringReader, arg1: S): $GameProfileArgument$Result;
        static ERROR_UNKNOWN_PLAYER: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $EntityArgument$Info implements $ArgumentTypeInfo<$EntityArgument, $EntityArgument$Info$Template> {
        unpack(arg0: $EntityArgument): $EntityArgument$Info$Template;
        serializeToJson(arg0: $EntityArgument$Info$Template, arg1: $JsonObject_): void;
        serializeToNetwork(arg0: $EntityArgument$Info$Template, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): $EntityArgument$Info$Template;
        constructor();
    }
    export class $MessageArgument implements $SignedArgument<$MessageArgument$Message> {
        static getMessage(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Component;
        static message(): $MessageArgument;
        parse(arg0: $StringReader): $MessageArgument$Message;
        getExamples(): $Collection<string>;
        static resolveChatMessage(arg0: $CommandContext<$CommandSourceStack>, arg1: string, arg2: $Consumer_<$PlayerChatMessage>): void;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $MessageArgument$Message;
        static TOO_LONG: $Dynamic2CommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ComponentArgument implements $ArgumentType<$Component> {
        getExamples(): $Collection<string>;
        static getComponent(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Component;
        static textComponent(arg0: $CommandBuildContext): $ComponentArgument;
        parse<S>(arg0: $StringReader, arg1: S): $Component;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $Component;
        static ERROR_INVALID_JSON: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
    export class $SlotArgument implements $ArgumentType<number> {
        static slot(): $SlotArgument;
        parse(arg0: $StringReader): number;
        static getSlot(arg0: $CommandContext<$CommandSourceStack>, arg1: string): number;
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): number;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ScoreHolderArgument$Result {
    }
    export interface $ScoreHolderArgument$Result {
        getNames(arg0: $CommandSourceStack, arg1: $Supplier_<$Collection<$ScoreHolder>>): $Collection<$ScoreHolder>;
    }
    /**
     * Values that may be interpreted as {@link $ScoreHolderArgument$Result}.
     */
    export type $ScoreHolderArgument$Result_ = ((arg0: $CommandSourceStack, arg1: $Supplier<$Collection<$ScoreHolder>>) => $Collection_<$ScoreHolder>);
    export class $ResourceOrTagKeyArgument$Result<T> {
    }
    export interface $ResourceOrTagKeyArgument$Result<T> extends $Predicate<$Holder<T>> {
        cast<E>(arg0: $ResourceKey_<$Registry<E>>): ($ResourceOrTagKeyArgument$Result<E>) | undefined;
        unwrap(): $Either<$ResourceKey<$Holder<T>>, $TagKey<$Holder<T>>>;
        asPrintable(): string;
    }
    export class $ResourceKeyArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceKeyArgument<T>> {
        type(): $ArgumentTypeInfo<$ResourceKeyArgument<T>, never>;
        instantiate(arg0: $CommandBuildContext): $ResourceKeyArgument<T>;
        registryKey: $ResourceKey<$Registry<T>>;
        this$0: $ResourceKeyArgument$Info<any>;
    }
    export class $ResourceArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceArgument<T>> {
        type(): $ArgumentTypeInfo<$ResourceArgument<T>, never>;
        instantiate(arg0: $CommandBuildContext): $ResourceArgument<T>;
        registryKey: $ResourceKey<$Registry<T>>;
        this$0: $ResourceArgument$Info<any>;
    }
    export class $GameModeArgument implements $ArgumentType<$GameType> {
        getExamples(): $Collection<string>;
        static gameMode(): $GameModeArgument;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getGameMode(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $GameType;
        parse<S>(arg0: $StringReader, arg1: S): $GameType;
        parse(arg0: $StringReader): $GameType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ArgumentSignatures extends $Record {
        write(arg0: $FriendlyByteBuf): void;
        entries(): $List<$ArgumentSignatures$Entry>;
        static signCommand(arg0: $SignableCommand_<never>, arg1: $ArgumentSignatures$Signer_): $ArgumentSignatures;
        static EMPTY: $ArgumentSignatures;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: $List_<$ArgumentSignatures$Entry_>);
    }
    export class $EntityArgument implements $ArgumentType<$EntitySelector> {
        parse<S>(arg0: $StringReader, arg1: S): $EntitySelector;
        static getEntity(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Entity;
        static entities(): $EntityArgument;
        static entity(): $EntityArgument;
        static getEntities(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Collection<$Entity>;
        getExamples(): $Collection<string>;
        static player(): $EntityArgument;
        static getOptionalEntities(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Collection<$Entity>;
        static players(): $EntityArgument;
        static getPlayer(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $ServerPlayer;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getOptionalPlayers(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Collection<$ServerPlayer>;
        static getPlayers(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Collection<$ServerPlayer>;
        parse(arg0: $StringReader): $EntitySelector;
        static ERROR_SELECTORS_NOT_ALLOWED: $SimpleCommandExceptionType;
        single: boolean;
        playersOnly: boolean;
        static NO_PLAYERS_FOUND: $SimpleCommandExceptionType;
        static NO_ENTITIES_FOUND: $SimpleCommandExceptionType;
        static ERROR_NOT_SINGLE_ENTITY: $SimpleCommandExceptionType;
        static ERROR_NOT_SINGLE_PLAYER: $SimpleCommandExceptionType;
        static ERROR_ONLY_PLAYERS_ALLOWED: $SimpleCommandExceptionType;
        constructor(arg0: boolean, arg1: boolean);
        get examples(): $Collection<string>;
    }
    export class $OperationArgument implements $ArgumentType<$OperationArgument$Operation> {
        static operation(): $OperationArgument;
        getExamples(): $Collection<string>;
        static getOperation(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $OperationArgument$Operation;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $OperationArgument$Operation;
        parse(arg0: $StringReader): $OperationArgument$Operation;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ResourceOrTagKeyArgument<T> implements $ArgumentType<$ResourceOrTagKeyArgument$Result<T>> {
        getExamples(): $Collection<string>;
        static getResourceOrTagKey<T>(arg0: $CommandContext<$CommandSourceStack>, arg1: string, arg2: $ResourceKey_<$Registry<T>>, arg3: $DynamicCommandExceptionType): $ResourceOrTagKeyArgument$Result<T>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static resourceOrTagKey<T>(arg0: $ResourceKey_<$Registry<T>>): $ResourceOrTagKeyArgument<T>;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceOrTagKeyArgument$Result<T>;
        parse(arg0: $StringReader): $ResourceOrTagKeyArgument$Result<T>;
        registryKey: $ResourceKey<$Registry<$ResourceOrTagKeyArgument$Result<T>>>;
        constructor(arg0: $ResourceKey_<$Registry<$ResourceOrTagKeyArgument$Result<T>>>);
        get examples(): $Collection<string>;
    }
    export class $SignedArgument<T> {
    }
    export interface $SignedArgument<T> extends $ArgumentType<T> {
    }
    /**
     * Values that may be interpreted as {@link $SignedArgument}.
     */
    export type $SignedArgument_<T> = (() => void);
    export class $TimeArgument$Info$Template implements $ArgumentTypeInfo$Template<$TimeArgument> {
        type(): $ArgumentTypeInfo<$TimeArgument, never>;
        instantiate(arg0: $CommandBuildContext): $TimeArgument;
        min: number;
        this$0: $TimeArgument$Info;
        constructor(arg0: $TimeArgument$Info, arg1: number);
    }
    export class $ScoreHolderArgument$Info$Template implements $ArgumentTypeInfo$Template<$ScoreHolderArgument> {
        type(): $ArgumentTypeInfo<$ScoreHolderArgument, never>;
        instantiate(arg0: $CommandBuildContext): $ScoreHolderArgument;
        this$0: $ScoreHolderArgument$Info;
        multiple: boolean;
        constructor(arg0: $ScoreHolderArgument$Info, arg1: boolean);
    }
    export class $MessageArgument$Part extends $Record {
        end(): number;
        start(): number;
        selector(): $EntitySelector;
        toComponent(arg0: $CommandSourceStack): $Component;
        constructor(start: number, end: number, selector: $EntitySelector);
    }
    export class $ParticleArgument implements $ArgumentType<$ParticleOptions> {
        getExamples(): $Collection<string>;
        static getParticle(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $ParticleOptions;
        static particle(arg0: $CommandBuildContext): $ParticleArgument;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static readParticle(arg0: $StringReader, arg1: $HolderLookup$Provider): $ParticleOptions;
        parse<S>(arg0: $StringReader, arg1: S): $ParticleOptions;
        parse(arg0: $StringReader): $ParticleOptions;
        static ERROR_INVALID_OPTIONS: $DynamicCommandExceptionType;
        static ERROR_UNKNOWN_PARTICLE: $DynamicCommandExceptionType;
        constructor(arg0: $CommandBuildContext);
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$NbtPath {
        remove(arg0: $Tag_): number;
        get(arg0: $Tag_): $List<$Tag>;
        insert(arg0: number, arg1: $CompoundTag_, arg2: $List_<$Tag_>): number;
        static of(arg0: string): $NbtPathArgument$NbtPath;
        set(arg0: $Tag_, arg1: $Tag_): number;
        asString(): string;
        getOrCreate(arg0: $Tag_, arg1: $Supplier_<$Tag>): $List<$Tag>;
        static isTooDeep(arg0: $Tag_, arg1: number): boolean;
        countMatching(arg0: $Tag_): number;
        static CODEC: $Codec<$NbtPathArgument$NbtPath>;
        constructor(arg0: string, arg1: $NbtPathArgument$Node[], arg2: $Object2IntMap<$NbtPathArgument$Node>);
    }
    export class $EntityAnchorArgument$Anchor extends $Enum<$EntityAnchorArgument$Anchor> {
        static values(): $EntityAnchorArgument$Anchor[];
        static valueOf(arg0: string): $EntityAnchorArgument$Anchor;
        apply(arg0: $CommandSourceStack): $Vec3;
        apply(arg0: $Entity): $Vec3;
        static getByName(arg0: string): $EntityAnchorArgument$Anchor;
        static EYES: $EntityAnchorArgument$Anchor;
        static BY_NAME: $Map<string, $EntityAnchorArgument$Anchor>;
        static FEET: $EntityAnchorArgument$Anchor;
    }
    /**
     * Values that may be interpreted as {@link $EntityAnchorArgument$Anchor}.
     */
    export type $EntityAnchorArgument$Anchor_ = "feet" | "eyes";
    export class $ResourceOrTagKeyArgument$ResourceResult<T> extends $Record implements $ResourceOrTagKeyArgument$Result<T> {
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
    }
    export class $EntityArgument$Info$Template implements $ArgumentTypeInfo$Template<$EntityArgument> {
        type(): $ArgumentTypeInfo<$EntityArgument, never>;
        instantiate(arg0: $CommandBuildContext): $EntityArgument;
        single: boolean;
        playersOnly: boolean;
        this$0: $EntityArgument$Info;
        constructor(arg0: $EntityArgument$Info, arg1: boolean, arg2: boolean);
    }
    export class $SlotsArgument implements $ArgumentType<$SlotRange> {
        static slots(): $SlotsArgument;
        getExamples(): $Collection<string>;
        static getSlots(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $SlotRange;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $SlotRange;
        parse(arg0: $StringReader): $SlotRange;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $GameProfileArgument$Result {
    }
    export interface $GameProfileArgument$Result {
        getNames(arg0: $CommandSourceStack): $Collection<$GameProfile>;
    }
    /**
     * Values that may be interpreted as {@link $GameProfileArgument$Result}.
     */
    export type $GameProfileArgument$Result_ = ((arg0: $CommandSourceStack) => $Collection_<$GameProfile>);
    export class $NbtTagArgument implements $ArgumentType<$Tag> {
        parse(arg0: $StringReader): $Tag;
        static nbtTag(): $NbtTagArgument;
        getExamples(): $Collection<string>;
        static getNbtTag<S>(arg0: $CommandContext<S>, arg1: string): $Tag;
        parse<S>(arg0: $StringReader, arg1: S): $Tag;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        get examples(): $Collection<string>;
    }
    export class $ResourceLocationArgument implements $ArgumentType<$ResourceLocation> {
        static id(): $ResourceLocationArgument;
        static getId(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $ResourceLocation;
        parse(arg0: $StringReader): $ResourceLocation;
        getExamples(): $Collection<string>;
        static getRecipe(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $RecipeHolder<never>;
        static getAdvancement(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $AdvancementHolder;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceLocation;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $TimeArgument$Info implements $ArgumentTypeInfo<$TimeArgument, $TimeArgument$Info$Template> {
        unpack(arg0: $TimeArgument): $TimeArgument$Info$Template;
        serializeToJson(arg0: $TimeArgument$Info$Template, arg1: $JsonObject_): void;
        serializeToNetwork(arg0: $TimeArgument$Info$Template, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): $TimeArgument$Info$Template;
        constructor();
    }
    export class $ResourceOrTagKeyArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceOrTagKeyArgument<T>> {
        type(): $ArgumentTypeInfo<$ResourceOrTagKeyArgument<T>, never>;
        instantiate(arg0: $CommandBuildContext): $ResourceOrTagKeyArgument<T>;
        registryKey: $ResourceKey<$Registry<T>>;
        this$0: $ResourceOrTagKeyArgument$Info<any>;
    }
    export class $ResourceOrTagArgument$TagResult<T> extends $Record implements $ResourceOrTagArgument$Result<T> {
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
    }
    export class $TeamArgument implements $ArgumentType<string> {
        getExamples(): $Collection<string>;
        static getTeam(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $PlayerTeam;
        static team(): $TeamArgument;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): string;
        parse(arg0: $StringReader): string;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $CompoundTagArgument implements $ArgumentType<$CompoundTag> {
        parse(arg0: $StringReader): $CompoundTag;
        getExamples(): $Collection<string>;
        static compoundTag(): $CompoundTagArgument;
        static getCompoundTag<S>(arg0: $CommandContext<S>, arg1: string): $CompoundTag;
        parse<S>(arg0: $StringReader, arg1: S): $CompoundTag;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        get examples(): $Collection<string>;
    }
    export class $ResourceOrTagKeyArgument$TagResult<T> extends $Record implements $ResourceOrTagKeyArgument$Result<T> {
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
    }
    export class $ScoreHolderArgument$SelectorResult implements $ScoreHolderArgument$Result {
        getNames(arg0: $CommandSourceStack, arg1: $Supplier_<$Collection<$ScoreHolder>>): $Collection<$ScoreHolder>;
        constructor(arg0: $EntitySelector);
    }
    export class $ResourceOrTagArgument$Info<T> implements $ArgumentTypeInfo<$ResourceOrTagArgument<T>, $ResourceOrTagArgument$Info$Template> {
        unpack(arg0: $ResourceOrTagArgument<$ResourceOrTagArgument$Info$Template>): $ResourceOrTagArgument$Info$Template;
        serializeToJson(arg0: $ResourceOrTagArgument$Info$Template, arg1: $JsonObject_): void;
        serializeToNetwork(arg0: $ResourceOrTagArgument$Info$Template, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): $ResourceOrTagArgument$Info$Template;
        constructor();
    }
    export class $NbtPathArgument implements $ArgumentType<$NbtPathArgument$NbtPath> {
        static getPath(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $NbtPathArgument$NbtPath;
        static nbtPath(): $NbtPathArgument;
        getExamples(): $Collection<string>;
        static createTagPredicate(arg0: $CompoundTag_): $Predicate<$Tag>;
        parse<S>(arg0: $StringReader, arg1: S): $NbtPathArgument$NbtPath;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $NbtPathArgument$NbtPath;
        static ERROR_EXPECTED_LIST: $DynamicCommandExceptionType;
        static ERROR_DATA_TOO_DEEP: $SimpleCommandExceptionType;
        static ERROR_NOTHING_FOUND: $DynamicCommandExceptionType;
        static ERROR_INVALID_INDEX: $DynamicCommandExceptionType;
        static ERROR_INVALID_NODE: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ResourceOrTagKeyArgument$Info<T> implements $ArgumentTypeInfo<$ResourceOrTagKeyArgument<T>, $ResourceOrTagKeyArgument$Info$Template> {
        unpack(arg0: $ResourceOrTagKeyArgument<$ResourceOrTagKeyArgument$Info$Template>): $ResourceOrTagKeyArgument$Info$Template;
        serializeToJson(arg0: $ResourceOrTagKeyArgument$Info$Template, arg1: $JsonObject_): void;
        serializeToNetwork(arg0: $ResourceOrTagKeyArgument$Info$Template, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): $ResourceOrTagKeyArgument$Info$Template;
        constructor();
    }
    export class $ResourceArgument<T> implements $ArgumentType<$Holder$Reference<T>> {
        static getResource<T>(arg0: $CommandContext<$CommandSourceStack>, arg1: string, arg2: $ResourceKey_<$Registry<T>>): $Holder$Reference<T>;
        static getAttribute(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Holder$Reference<$Attribute>;
        static resource<T>(arg0: $CommandBuildContext, arg1: $ResourceKey_<$Registry<T>>): $ResourceArgument<T>;
        getExamples(): $Collection<string>;
        static getSummonableEntityType(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Holder$Reference<$EntityType<never>>;
        static getConfiguredFeature(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Holder$Reference<$ConfiguredFeature<never, never>>;
        static getEntityType(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Holder$Reference<$EntityType<never>>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getMobEffect(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Holder$Reference<$MobEffect>;
        static getEnchantment(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Holder$Reference<$Enchantment>;
        static getStructure(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Holder$Reference<$Structure>;
        parse<S>(arg0: $StringReader, arg1: S): $Holder$Reference<T>;
        parse(arg0: $StringReader): $Holder$Reference<T>;
        registryKey: $ResourceKey<$Registry<$Holder$Reference<T>>>;
        static ERROR_UNKNOWN_RESOURCE: $Dynamic2CommandExceptionType;
        static ERROR_INVALID_RESOURCE_TYPE: $Dynamic3CommandExceptionType;
        constructor(arg0: $CommandBuildContext, arg1: $ResourceKey_<$Registry<$Holder$Reference<T>>>);
        get examples(): $Collection<string>;
    }
    export class $GameProfileArgument$SelectorResult implements $GameProfileArgument$Result {
        getNames(arg0: $CommandSourceStack): $Collection<$GameProfile>;
        constructor(arg0: $EntitySelector);
    }
    export class $ResourceOrTagArgument$ResourceResult<T> extends $Record implements $ResourceOrTagArgument$Result<T> {
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
    }
    export class $ResourceArgument$Info<T> implements $ArgumentTypeInfo<$ResourceArgument<T>, $ResourceArgument$Info$Template> {
        unpack(arg0: $ResourceArgument<$ResourceArgument$Info$Template>): $ResourceArgument$Info$Template;
        serializeToJson(arg0: $ResourceArgument$Info$Template, arg1: $JsonObject_): void;
        serializeToNetwork(arg0: $ResourceArgument$Info$Template, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): $ResourceArgument$Info$Template;
        constructor();
    }
    export class $ResourceOrTagArgument<T> implements $ArgumentType<$ResourceOrTagArgument$Result<T>> {
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getResourceOrTag<T>(arg0: $CommandContext<$CommandSourceStack>, arg1: string, arg2: $ResourceKey_<$Registry<T>>): $ResourceOrTagArgument$Result<T>;
        static resourceOrTag<T>(arg0: $CommandBuildContext, arg1: $ResourceKey_<$Registry<T>>): $ResourceOrTagArgument<T>;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceOrTagArgument$Result<T>;
        parse(arg0: $StringReader): $ResourceOrTagArgument$Result<T>;
        registryKey: $ResourceKey<$Registry<$ResourceOrTagArgument$Result<T>>>;
        constructor(arg0: $CommandBuildContext, arg1: $ResourceKey_<$Registry<$ResourceOrTagArgument$Result<T>>>);
        get examples(): $Collection<string>;
    }
    export class $RangeArgument$Ints implements $RangeArgument<$MinMaxBounds$Ints> {
        static getRange(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $MinMaxBounds$Ints;
        getExamples(): $Collection<string>;
        parse<S>(arg0: $StringReader, arg1: S): $MinMaxBounds$Ints;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $MinMaxBounds$Ints;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $AngleArgument$SingleAngle {
        getAngle(arg0: $CommandSourceStack): number;
        constructor(arg0: number, arg1: boolean);
    }
    export class $StyleArgument implements $ArgumentType<$Style> {
        static style(arg0: $CommandBuildContext): $StyleArgument;
        getExamples(): $Collection<string>;
        static getStyle(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Style;
        parse<S>(arg0: $StringReader, arg1: S): $Style;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $Style;
        static ERROR_INVALID_JSON: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
    export class $OperationArgument$SimpleOperation {
    }
    export interface $OperationArgument$SimpleOperation extends $OperationArgument$Operation {
    }
    /**
     * Values that may be interpreted as {@link $OperationArgument$SimpleOperation}.
     */
    export type $OperationArgument$SimpleOperation_ = (() => void);
    export class $ObjectiveCriteriaArgument implements $ArgumentType<$ObjectiveCriteria> {
        getName<T>(arg0: $StatType_<T>, arg1: $Object): string;
        static criteria(): $ObjectiveCriteriaArgument;
        getExamples(): $Collection<string>;
        static getCriteria(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $ObjectiveCriteria;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $ObjectiveCriteria;
        parse(arg0: $StringReader): $ObjectiveCriteria;
        static ERROR_INVALID_VALUE: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
    export class $HeightmapTypeArgument extends $StringRepresentableArgument<$Heightmap$Types> {
        static heightmap(): $HeightmapTypeArgument;
        static getHeightmap(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Heightmap$Types;
    }
    export class $TemplateMirrorArgument extends $StringRepresentableArgument<$Mirror> {
        static templateMirror(): $StringRepresentableArgument<$Mirror>;
        static getMirror(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Mirror;
    }
    export class $ColorArgument implements $ArgumentType<$ChatFormatting> {
        static color(): $ColorArgument;
        getExamples(): $Collection<string>;
        static getColor(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $ChatFormatting;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $ChatFormatting;
        parse(arg0: $StringReader): $ChatFormatting;
        static ERROR_INVALID_VALUE: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
}
