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
        static getAnchor(context: $CommandContext<$CommandSourceStack>, name: string): $EntityAnchorArgument$Anchor;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $EntityAnchorArgument$Anchor;
        parse(arg0: $StringReader): $EntityAnchorArgument$Anchor;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$AllElementsNode implements $NbtPathArgument$Node {
    }
    export class $ScoreboardSlotArgument implements $ArgumentType<$DisplaySlot> {
        static displaySlot(): $ScoreboardSlotArgument;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getDisplaySlot(context: $CommandContext<$CommandSourceStack>, slot: string): $DisplaySlot;
        parse<S>(arg0: $StringReader, arg1: S): $DisplaySlot;
        parse(arg0: $StringReader): $DisplaySlot;
        static ERROR_INVALID_VALUE: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
    export class $ResourceOrIdArgument$LootPredicateArgument extends $ResourceOrIdArgument<$LootItemCondition> {
        parse(arg0: $StringReader): $LootItemCondition;
        static ERROR_FAILED_TO_PARSE: $DynamicCommandExceptionType;
        constructor(context: $CommandBuildContext);
    }
    export class $ResourceKeyArgument$Info<T> implements $ArgumentTypeInfo<$ResourceKeyArgument<T>, $ResourceKeyArgument$Info$Template> {
        serializeToNetwork(template: $ResourceKeyArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $ResourceKeyArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $ResourceKeyArgument<$ResourceKeyArgument$Info$Template>): $ResourceKeyArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $ResourceKeyArgument$Info$Template;
        constructor();
    }
    export class $ArgumentSignatures$Entry extends $Record {
        signature(): $MessageSignature;
        name(): string;
        write(buffer: $FriendlyByteBuf): void;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: string, arg1: $MessageSignature_);
    }
    export class $ResourceOrIdArgument<T> implements $ArgumentType<$Holder<T>> {
        static lootPredicate(context: $CommandBuildContext): $ResourceOrIdArgument$LootPredicateArgument;
        static lootModifier(context: $CommandBuildContext): $ResourceOrIdArgument$LootModifierArgument;
        getExamples(): $Collection<string>;
        static getLootPredicate(context: $CommandContext<$CommandSourceStack>, name: string): $Holder<$LootItemCondition>;
        static parseInlineOrId(reader: $StringReader): $Tag;
        static getLootModifier(context: $CommandContext<$CommandSourceStack>, name: string): $Holder<$LootItemFunction>;
        static getLootTable(context: $CommandContext<$CommandSourceStack>, name: string): $Holder<$LootTable>;
        static lootTable(context: $CommandBuildContext): $ResourceOrIdArgument$LootTableArgument;
        parse<S>(arg0: $StringReader, arg1: S): $Holder<T>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $Holder<T>;
        static ERROR_FAILED_TO_PARSE: $DynamicCommandExceptionType;
        constructor(registryLookup: $CommandBuildContext, registryKey: $ResourceKey_<$Registry<$Holder<T>>>, codec: $Codec<$Holder_<$Holder<T>>>);
        get examples(): $Collection<string>;
    }
    export class $ObjectiveArgument implements $ArgumentType<string> {
        static getWritableObjective(context: $CommandContext<$CommandSourceStack>, name: string): $Objective;
        getExamples(): $Collection<string>;
        static objective(): $ObjectiveArgument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getObjective(context: $CommandContext<$CommandSourceStack>, name: string): $Objective;
        parse<S>(arg0: $StringReader, arg1: S): string;
        parse(arg0: $StringReader): string;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ArgumentSignatures$Signer {
    }
    export interface $ArgumentSignatures$Signer {
        sign(argumentText: string): $MessageSignature;
    }
    /**
     * Values that may be interpreted as {@link $ArgumentSignatures$Signer}.
     */
    export type $ArgumentSignatures$Signer_ = ((arg0: string) => $MessageSignature_);
    export class $ResourceOrIdArgument$LootTableArgument extends $ResourceOrIdArgument<$LootTable> {
        parse(arg0: $StringReader): $LootTable;
        static ERROR_FAILED_TO_PARSE: $DynamicCommandExceptionType;
        constructor(context: $CommandBuildContext);
    }
    export class $ScoreHolderArgument implements $ArgumentType<$ScoreHolderArgument$Result> {
        static getName(context: $CommandContext<$CommandSourceStack>, name: string): $ScoreHolder;
        parse<S>(arg0: $StringReader, arg1: S): $ScoreHolderArgument$Result;
        /**
         * Gets one or more score holders, with no objectives list.
         */
        static getNamesWithDefaultWildcard(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$ScoreHolder>;
        /**
         * Gets one or more score holders, with no objectives list.
         */
        static getNames(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$ScoreHolder>;
        /**
         * Gets one or more score holders.
         */
        static getNames(context: $CommandContext<$CommandSourceStack>, name: string, objectives: $Supplier_<$Collection<$ScoreHolder>>): $Collection<$ScoreHolder>;
        getExamples(): $Collection<string>;
        static scoreHolder(): $ScoreHolderArgument;
        static scoreHolders(): $ScoreHolderArgument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $ScoreHolderArgument$Result;
        static SUGGEST_SCORE_HOLDERS: $SuggestionProvider<$CommandSourceStack>;
        multiple: boolean;
        constructor(multiple: boolean);
        get examples(): $Collection<string>;
    }
    export class $UuidArgument implements $ArgumentType<$UUID> {
        parse(reader: $StringReader): $UUID;
        static uuid(): $UuidArgument;
        getExamples(): $Collection<string>;
        static getUuid(context: $CommandContext<$CommandSourceStack>, name: string): $UUID;
        parse<S>(arg0: $StringReader, arg1: S): $UUID;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static ERROR_INVALID_UUID: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $TemplateRotationArgument extends $StringRepresentableArgument<$Rotation> {
        static templateRotation(): $TemplateRotationArgument;
        static getRotation(context: $CommandContext<$CommandSourceStack>, name: string): $Rotation;
    }
    export class $MessageArgument$Message extends $Record {
        parts(): $MessageArgument$Part[];
        text(): string;
        /**
         * Parses a message. The algorithm for this is simply to run through and look for selectors, ignoring any invalid selectors in the text (since players may type e.g. "[@]").
         */
        static parseText(reader: $StringReader, allowSelectors: boolean): $MessageArgument$Message;
        /**
         * Converts this message into a text component, replacing any selectors in the text with the actual evaluated selector.
         */
        toComponent(source: $CommandSourceStack, allowSelectors: boolean): $Component;
        resolveComponent(source: $CommandSourceStack): $Component;
        constructor(text: string, parts: $MessageArgument$Part_[]);
    }
    export class $AngleArgument implements $ArgumentType<$AngleArgument$SingleAngle> {
        parse(reader: $StringReader): $AngleArgument$SingleAngle;
        getExamples(): $Collection<string>;
        static getAngle(context: $CommandContext<$CommandSourceStack>, name: string): number;
        static angle(): $AngleArgument;
        parse<S>(arg0: $StringReader, arg1: S): $AngleArgument$SingleAngle;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static ERROR_INVALID_ANGLE: $SimpleCommandExceptionType;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $RangeArgument<T extends $MinMaxBounds<never>> {
        static floatRange(): $RangeArgument$Floats;
        /**
         * Note: this class is missing several fields and methods due to them not being used in particular FloatRange has no way of being created.
         */
        static intRange(): $RangeArgument$Ints;
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
        apply(targetScore: $ScoreAccess, sourceScore: $ScoreAccess): void;
    }
    /**
     * Values that may be interpreted as {@link $OperationArgument$Operation}.
     */
    export type $OperationArgument$Operation_ = ((arg0: $ScoreAccess, arg1: $ScoreAccess) => void);
    export class $ResourceOrTagArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceOrTagArgument<T>> {
        type(): $ArgumentTypeInfo<$ResourceOrTagArgument<T>, never>;
        instantiate(context: $CommandBuildContext): $ResourceOrTagArgument<T>;
        registryKey: $ResourceKey<$Registry<T>>;
        this$0: $ResourceOrTagArgument$Info<any>;
    }
    export class $ResourceOrIdArgument$LootModifierArgument extends $ResourceOrIdArgument<$LootItemFunction> {
        parse(arg0: $StringReader): $LootItemFunction;
        static ERROR_FAILED_TO_PARSE: $DynamicCommandExceptionType;
        constructor(context: $CommandBuildContext);
    }
    export class $StringRepresentableArgument<T extends $Enum<T>> implements $ArgumentType<T> {
        getExamples(): $Collection<string>;
        convertId(id: string): string;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): T;
        parse(arg0: $StringReader): T;
        constructor(codec: $Codec<T>, values: $Supplier_<T[]>);
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$MatchElementNode implements $NbtPathArgument$Node {
    }
    export class $DimensionArgument implements $ArgumentType<$ResourceLocation> {
        static getDimension(context: $CommandContext<$CommandSourceStack>, name: string): $ServerLevel;
        static dimension(): $DimensionArgument;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
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
        getExamples(): $Collection<string>;
        static getRange(context: $CommandContext<$CommandSourceStack>, name: string): $MinMaxBounds$Doubles;
        parse<S>(arg0: $StringReader, arg1: S): $MinMaxBounds$Doubles;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $MinMaxBounds$Doubles;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$IndexedElementNode implements $NbtPathArgument$Node {
    }
    export class $ScoreHolderArgument$Info implements $ArgumentTypeInfo<$ScoreHolderArgument, $ScoreHolderArgument$Info$Template> {
        serializeToNetwork(template: $ScoreHolderArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $ScoreHolderArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $ScoreHolderArgument): $ScoreHolderArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $ScoreHolderArgument$Info$Template;
        constructor();
    }
    export class $ResourceOrTagArgument$Result<T> {
    }
    export interface $ResourceOrTagArgument$Result<T> extends $Predicate<$Holder<T>> {
        cast<E>(registryKey: $ResourceKey_<$Registry<E>>): ($ResourceOrTagArgument$Result<E>) | undefined;
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
        static getStructureTemplatePool(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$StructureTemplatePool>;
        static key<T>(registryKey: $ResourceKey_<$Registry<T>>): $ResourceKeyArgument<T>;
        getExamples(): $Collection<string>;
        static getConfiguredFeature(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$ConfiguredFeature<never, never>>;
        static getStructure(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$Structure>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceKey<T>;
        parse(arg0: $StringReader): $ResourceKey<T>;
        registryKey: $ResourceKey<$Registry<$ResourceKey<T>>>;
        constructor(registryKey: $ResourceKey_<$Registry<$ResourceKey<T>>>);
        get examples(): $Collection<string>;
    }
    export class $TimeArgument implements $ArgumentType<number> {
        static time(): $TimeArgument;
        static time(minimum: number): $TimeArgument;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): number;
        parse(arg0: $StringReader): number;
        minimum: number;
        get examples(): $Collection<string>;
    }
    export class $GameProfileArgument implements $ArgumentType<$GameProfileArgument$Result> {
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getGameProfiles(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$GameProfile>;
        static gameProfile(): $GameProfileArgument;
        parse(arg0: $StringReader): $GameProfileArgument$Result;
        parse<S>(arg0: $StringReader, arg1: S): $GameProfileArgument$Result;
        static ERROR_UNKNOWN_PLAYER: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $EntityArgument$Info implements $ArgumentTypeInfo<$EntityArgument, $EntityArgument$Info$Template> {
        serializeToNetwork(template: $EntityArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $EntityArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $EntityArgument): $EntityArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $EntityArgument$Info$Template;
        constructor();
    }
    export class $MessageArgument implements $SignedArgument<$MessageArgument$Message> {
        static getMessage(context: $CommandContext<$CommandSourceStack>, name: string): $Component;
        static message(): $MessageArgument;
        parse<S>(arg0: $StringReader, arg1: S | null): $MessageArgument$Message;
        getExamples(): $Collection<string>;
        static resolveChatMessage(context: $CommandContext<$CommandSourceStack>, key: string, callback: $Consumer_<$PlayerChatMessage>): void;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $MessageArgument$Message;
        static TOO_LONG: $Dynamic2CommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ComponentArgument implements $ArgumentType<$Component> {
        static getComponent(context: $CommandContext<$CommandSourceStack>, name: string): $Component;
        static textComponent(context: $CommandBuildContext): $ComponentArgument;
        getExamples(): $Collection<string>;
        parse<S>(arg0: $StringReader, arg1: S): $Component;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $Component;
        static ERROR_INVALID_JSON: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
    export class $SlotArgument implements $ArgumentType<number> {
        static slot(): $SlotArgument;
        parse(reader: $StringReader): number;
        static getSlot(context: $CommandContext<$CommandSourceStack>, name: string): number;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): number;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ScoreHolderArgument$Result {
    }
    export interface $ScoreHolderArgument$Result {
        getNames(source: $CommandSourceStack, objectives: $Supplier_<$Collection<$ScoreHolder>>): $Collection<$ScoreHolder>;
    }
    /**
     * Values that may be interpreted as {@link $ScoreHolderArgument$Result}.
     */
    export type $ScoreHolderArgument$Result_ = ((arg0: $CommandSourceStack, arg1: $Supplier<$Collection<$ScoreHolder>>) => $Collection_<$ScoreHolder>);
    export class $ResourceOrTagKeyArgument$Result<T> {
    }
    export interface $ResourceOrTagKeyArgument$Result<T> extends $Predicate<$Holder<T>> {
        cast<E>(registryKey: $ResourceKey_<$Registry<E>>): ($ResourceOrTagKeyArgument$Result<E>) | undefined;
        unwrap(): $Either<$ResourceKey<$Holder<T>>, $TagKey<$Holder<T>>>;
        asPrintable(): string;
    }
    export class $ResourceKeyArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceKeyArgument<T>> {
        type(): $ArgumentTypeInfo<$ResourceKeyArgument<T>, never>;
        instantiate(context: $CommandBuildContext): $ResourceKeyArgument<T>;
        registryKey: $ResourceKey<$Registry<T>>;
        this$0: $ResourceKeyArgument$Info<any>;
    }
    export class $ResourceArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceArgument<T>> {
        type(): $ArgumentTypeInfo<$ResourceArgument<T>, never>;
        instantiate(context: $CommandBuildContext): $ResourceArgument<T>;
        registryKey: $ResourceKey<$Registry<T>>;
        this$0: $ResourceArgument$Info<any>;
    }
    export class $GameModeArgument implements $ArgumentType<$GameType> {
        getExamples(): $Collection<string>;
        static gameMode(): $GameModeArgument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getGameMode(context: $CommandContext<$CommandSourceStack>, name: string): $GameType;
        parse<S>(arg0: $StringReader, arg1: S): $GameType;
        parse(arg0: $StringReader): $GameType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ArgumentSignatures extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        entries(): $List<$ArgumentSignatures$Entry>;
        static signCommand(command: $SignableCommand_<never>, signer: $ArgumentSignatures$Signer_): $ArgumentSignatures;
        static EMPTY: $ArgumentSignatures;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $List_<$ArgumentSignatures$Entry_>);
    }
    export class $EntityArgument implements $ArgumentType<$EntitySelector> {
        static getEntities(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$Entity>;
        static getOptionalEntities(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$Entity>;
        parse(reader: $StringReader): $EntitySelector;
        static players(): $EntityArgument;
        static getPlayers(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$ServerPlayer>;
        static getEntity(context: $CommandContext<$CommandSourceStack>, name: string): $Entity;
        static entities(): $EntityArgument;
        static entity(): $EntityArgument;
        getExamples(): $Collection<string>;
        static getOptionalPlayers(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$ServerPlayer>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static player(): $EntityArgument;
        static getPlayer(context: $CommandContext<$CommandSourceStack>, name: string): $ServerPlayer;
        parse<S>(arg0: $StringReader, arg1: S): $EntitySelector;
        static ERROR_SELECTORS_NOT_ALLOWED: $SimpleCommandExceptionType;
        single: boolean;
        playersOnly: boolean;
        static NO_PLAYERS_FOUND: $SimpleCommandExceptionType;
        static NO_ENTITIES_FOUND: $SimpleCommandExceptionType;
        static ERROR_NOT_SINGLE_ENTITY: $SimpleCommandExceptionType;
        static ERROR_NOT_SINGLE_PLAYER: $SimpleCommandExceptionType;
        static ERROR_ONLY_PLAYERS_ALLOWED: $SimpleCommandExceptionType;
        constructor(single: boolean, playersOnly: boolean);
        get examples(): $Collection<string>;
    }
    export class $OperationArgument implements $ArgumentType<$OperationArgument$Operation> {
        static operation(): $OperationArgument;
        parse(reader: $StringReader): $OperationArgument$Operation;
        getExamples(): $Collection<string>;
        static getOperation(context: $CommandContext<$CommandSourceStack>, name: string): $OperationArgument$Operation;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $OperationArgument$Operation;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ResourceOrTagKeyArgument<T> implements $ArgumentType<$ResourceOrTagKeyArgument$Result<T>> {
        static getResourceOrTagKey<T>(context: $CommandContext<$CommandSourceStack>, argument: string, registryKey: $ResourceKey_<$Registry<T>>, dynamicCommandExceptionType: $DynamicCommandExceptionType): $ResourceOrTagKeyArgument$Result<T>;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static resourceOrTagKey<T>(registryKey: $ResourceKey_<$Registry<T>>): $ResourceOrTagKeyArgument<T>;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceOrTagKeyArgument$Result<T>;
        parse(arg0: $StringReader): $ResourceOrTagKeyArgument$Result<T>;
        registryKey: $ResourceKey<$Registry<$ResourceOrTagKeyArgument$Result<T>>>;
        constructor(registryKey: $ResourceKey_<$Registry<$ResourceOrTagKeyArgument$Result<T>>>);
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
        instantiate(context: $CommandBuildContext): $TimeArgument;
        min: number;
        this$0: $TimeArgument$Info;
        constructor(min: $TimeArgument$Info, arg1: number);
    }
    export class $ScoreHolderArgument$Info$Template implements $ArgumentTypeInfo$Template<$ScoreHolderArgument> {
        type(): $ArgumentTypeInfo<$ScoreHolderArgument, never>;
        instantiate(context: $CommandBuildContext): $ScoreHolderArgument;
        this$0: $ScoreHolderArgument$Info;
        multiple: boolean;
        constructor(multiple: $ScoreHolderArgument$Info, arg1: boolean);
    }
    export class $MessageArgument$Part extends $Record {
        end(): number;
        start(): number;
        selector(): $EntitySelector;
        /**
         * Runs the selector and returns the component produced by it. This method does not actually appear to ever return null.
         */
        toComponent(source: $CommandSourceStack): $Component;
        constructor(start: number, end: number, selector: $EntitySelector);
    }
    export class $ParticleArgument implements $ArgumentType<$ParticleOptions> {
        getExamples(): $Collection<string>;
        static particle(buildContext: $CommandBuildContext): $ParticleArgument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static readParticle(reader: $StringReader, registries: $HolderLookup$Provider): $ParticleOptions;
        static getParticle(context: $CommandContext<$CommandSourceStack>, name: string): $ParticleOptions;
        parse<S>(arg0: $StringReader, arg1: S): $ParticleOptions;
        parse(arg0: $StringReader): $ParticleOptions;
        static ERROR_INVALID_OPTIONS: $DynamicCommandExceptionType;
        static ERROR_UNKNOWN_PARTICLE: $DynamicCommandExceptionType;
        constructor(buildContext: $CommandBuildContext);
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$NbtPath {
        getOrCreate(tag: $Tag_, supplier: $Supplier_<$Tag>): $List<$Tag>;
        remove(tag: $Tag_): number;
        get(tag: $Tag_): $List<$Tag>;
        insert(index: number, rootTag: $CompoundTag_, tagsToInsert: $List_<$Tag_>): number;
        static of(path: string): $NbtPathArgument$NbtPath;
        set(tag: $Tag_, other: $Tag_): number;
        asString(): string;
        static isTooDeep(tag: $Tag_, currentDepth: number): boolean;
        countMatching(tag: $Tag_): number;
        static CODEC: $Codec<$NbtPathArgument$NbtPath>;
        constructor(original: string, nodes: $NbtPathArgument$Node[], nodeToOriginPosition: $Object2IntMap<$NbtPathArgument$Node>);
    }
    export class $EntityAnchorArgument$Anchor extends $Enum<$EntityAnchorArgument$Anchor> {
        static values(): $EntityAnchorArgument$Anchor[];
        static valueOf(name: string): $EntityAnchorArgument$Anchor;
        /**
         * Gets the coordinate based on the given command source's position. If the source is not an entity, no offsetting occurs.
         */
        apply(source: $CommandSourceStack): $Vec3;
        /**
         * Gets the coordinate based on the given entity's position.
         */
        apply(entity: $Entity): $Vec3;
        static getByName(name: string): $EntityAnchorArgument$Anchor;
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
        instantiate(context: $CommandBuildContext): $EntityArgument;
        single: boolean;
        playersOnly: boolean;
        this$0: $EntityArgument$Info;
        constructor(single: $EntityArgument$Info, playersOnly: boolean, arg2: boolean);
    }
    export class $SlotsArgument implements $ArgumentType<$SlotRange> {
        static slots(): $SlotsArgument;
        static getSlots(context: $CommandContext<$CommandSourceStack>, name: string): $SlotRange;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, suggestionBuilder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $SlotRange;
        parse(arg0: $StringReader): $SlotRange;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $GameProfileArgument$Result {
    }
    export interface $GameProfileArgument$Result {
        getNames(source: $CommandSourceStack): $Collection<$GameProfile>;
    }
    /**
     * Values that may be interpreted as {@link $GameProfileArgument$Result}.
     */
    export type $GameProfileArgument$Result_ = ((arg0: $CommandSourceStack) => $Collection_<$GameProfile>);
    export class $NbtTagArgument implements $ArgumentType<$Tag> {
        parse(reader: $StringReader): $Tag;
        getExamples(): $Collection<string>;
        static getNbtTag<S>(context: $CommandContext<S>, name: string): $Tag;
        static nbtTag(): $NbtTagArgument;
        parse<S>(arg0: $StringReader, arg1: S): $Tag;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        get examples(): $Collection<string>;
    }
    export class $ResourceLocationArgument implements $ArgumentType<$ResourceLocation> {
        static id(): $ResourceLocationArgument;
        static getId(context: $CommandContext<$CommandSourceStack>, name: string): $ResourceLocation;
        parse(reader: $StringReader): $ResourceLocation;
        getExamples(): $Collection<string>;
        static getRecipe(context: $CommandContext<$CommandSourceStack>, name: string): $RecipeHolder<never>;
        static getAdvancement(context: $CommandContext<$CommandSourceStack>, name: string): $AdvancementHolder;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceLocation;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $TimeArgument$Info implements $ArgumentTypeInfo<$TimeArgument, $TimeArgument$Info$Template> {
        serializeToNetwork(template: $TimeArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $TimeArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $TimeArgument): $TimeArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $TimeArgument$Info$Template;
        constructor();
    }
    export class $ResourceOrTagKeyArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceOrTagKeyArgument<T>> {
        type(): $ArgumentTypeInfo<$ResourceOrTagKeyArgument<T>, never>;
        instantiate(context: $CommandBuildContext): $ResourceOrTagKeyArgument<T>;
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
        static team(): $TeamArgument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getTeam(context: $CommandContext<$CommandSourceStack>, name: string): $PlayerTeam;
        parse<S>(arg0: $StringReader, arg1: S): string;
        parse(arg0: $StringReader): string;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $CompoundTagArgument implements $ArgumentType<$CompoundTag> {
        parse(reader: $StringReader): $CompoundTag;
        static compoundTag(): $CompoundTagArgument;
        getExamples(): $Collection<string>;
        static getCompoundTag<S>(context: $CommandContext<S>, name: string): $CompoundTag;
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
        getNames(source: $CommandSourceStack, objectives: $Supplier_<$Collection<$ScoreHolder>>): $Collection<$ScoreHolder>;
        constructor(selector: $EntitySelector);
    }
    export class $ResourceOrTagArgument$Info<T> implements $ArgumentTypeInfo<$ResourceOrTagArgument<T>, $ResourceOrTagArgument$Info$Template> {
        serializeToNetwork(template: $ResourceOrTagArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $ResourceOrTagArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $ResourceOrTagArgument<$ResourceOrTagArgument$Info$Template>): $ResourceOrTagArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $ResourceOrTagArgument$Info$Template;
        constructor();
    }
    export class $NbtPathArgument implements $ArgumentType<$NbtPathArgument$NbtPath> {
        static getPath(context: $CommandContext<$CommandSourceStack>, name: string): $NbtPathArgument$NbtPath;
        getExamples(): $Collection<string>;
        static createTagPredicate(tag: $CompoundTag_): $Predicate<$Tag>;
        static nbtPath(): $NbtPathArgument;
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
        serializeToNetwork(template: $ResourceOrTagKeyArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $ResourceOrTagKeyArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $ResourceOrTagKeyArgument<$ResourceOrTagKeyArgument$Info$Template>): $ResourceOrTagKeyArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $ResourceOrTagKeyArgument$Info$Template;
        constructor();
    }
    export class $ResourceArgument<T> implements $ArgumentType<$Holder$Reference<T>> {
        static getSummonableEntityType(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$EntityType<never>>;
        static getResource<T>(context: $CommandContext<$CommandSourceStack>, argument: string, registryKey: $ResourceKey_<$Registry<T>>): $Holder$Reference<T>;
        static getAttribute(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$Attribute>;
        static resource<T>(context: $CommandBuildContext, registryKey: $ResourceKey_<$Registry<T>>): $ResourceArgument<T>;
        getExamples(): $Collection<string>;
        static getConfiguredFeature(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$ConfiguredFeature<never, never>>;
        static getStructure(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$Structure>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getEnchantment(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$Enchantment>;
        static getMobEffect(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$MobEffect>;
        static getEntityType(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$EntityType<never>>;
        parse<S>(arg0: $StringReader, arg1: S): $Holder$Reference<T>;
        parse(arg0: $StringReader): $Holder$Reference<T>;
        registryKey: $ResourceKey<$Registry<$Holder$Reference<T>>>;
        static ERROR_UNKNOWN_RESOURCE: $Dynamic2CommandExceptionType;
        static ERROR_INVALID_RESOURCE_TYPE: $Dynamic3CommandExceptionType;
        constructor(context: $CommandBuildContext, registryKey: $ResourceKey_<$Registry<$Holder$Reference<T>>>);
        get examples(): $Collection<string>;
    }
    export class $GameProfileArgument$SelectorResult implements $GameProfileArgument$Result {
        getNames(source: $CommandSourceStack): $Collection<$GameProfile>;
        constructor(selector: $EntitySelector);
    }
    export class $ResourceOrTagArgument$ResourceResult<T> extends $Record implements $ResourceOrTagArgument$Result<T> {
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
    }
    export class $ResourceArgument$Info<T> implements $ArgumentTypeInfo<$ResourceArgument<T>, $ResourceArgument$Info$Template> {
        serializeToNetwork(template: $ResourceArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $ResourceArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $ResourceArgument<$ResourceArgument$Info$Template>): $ResourceArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $ResourceArgument$Info$Template;
        constructor();
    }
    export class $ResourceOrTagArgument<T> implements $ArgumentType<$ResourceOrTagArgument$Result<T>> {
        parse(reader: $StringReader): $ResourceOrTagArgument$Result<$ResourceOrTagArgument$Result<T>>;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static resourceOrTag<T>(context: $CommandBuildContext, registryKey: $ResourceKey_<$Registry<T>>): $ResourceOrTagArgument<T>;
        static getResourceOrTag<T>(context: $CommandContext<$CommandSourceStack>, argument: string, registryKey: $ResourceKey_<$Registry<T>>): $ResourceOrTagArgument$Result<T>;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceOrTagArgument$Result<T>;
        registryKey: $ResourceKey<$Registry<$ResourceOrTagArgument$Result<T>>>;
        constructor(context: $CommandBuildContext, registryKey: $ResourceKey_<$Registry<$ResourceOrTagArgument$Result<T>>>);
        get examples(): $Collection<string>;
    }
    export class $RangeArgument$Ints implements $RangeArgument<$MinMaxBounds$Ints> {
        getExamples(): $Collection<string>;
        static getRange(context: $CommandContext<$CommandSourceStack>, name: string): $MinMaxBounds$Ints;
        parse<S>(arg0: $StringReader, arg1: S): $MinMaxBounds$Ints;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $MinMaxBounds$Ints;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $AngleArgument$SingleAngle {
        getAngle(source: $CommandSourceStack): number;
        constructor(angle: number, isRelative: boolean);
    }
    export class $StyleArgument implements $ArgumentType<$Style> {
        static style(context: $CommandBuildContext): $StyleArgument;
        getExamples(): $Collection<string>;
        static getStyle(context: $CommandContext<$CommandSourceStack>, name: string): $Style;
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
        getName<T>(type: $StatType_<T>, value: $Object): string;
        static criteria(): $ObjectiveCriteriaArgument;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getCriteria(context: $CommandContext<$CommandSourceStack>, name: string): $ObjectiveCriteria;
        parse<S>(arg0: $StringReader, arg1: S): $ObjectiveCriteria;
        parse(arg0: $StringReader): $ObjectiveCriteria;
        static ERROR_INVALID_VALUE: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
    export class $HeightmapTypeArgument extends $StringRepresentableArgument<$Heightmap$Types> {
        static getHeightmap(context: $CommandContext<$CommandSourceStack>, argument: string): $Heightmap$Types;
        static heightmap(): $HeightmapTypeArgument;
    }
    export class $TemplateMirrorArgument extends $StringRepresentableArgument<$Mirror> {
        static templateMirror(): $StringRepresentableArgument<$Mirror>;
        static getMirror(context: $CommandContext<$CommandSourceStack>, name: string): $Mirror;
    }
    export class $ColorArgument implements $ArgumentType<$ChatFormatting> {
        static color(): $ColorArgument;
        getExamples(): $Collection<string>;
        static getColor(context: $CommandContext<$CommandSourceStack>, name: string): $ChatFormatting;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $ChatFormatting;
        parse(arg0: $StringReader): $ChatFormatting;
        static ERROR_INVALID_VALUE: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
}
