import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $ServerFunctionManager, $MinecraftServer } from "@package/net/minecraft/server";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Message, $ResultConsumer, $Message_, $StringReader, $CommandDispatcher, $ParseResults } from "@package/com/mojang/brigadier";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Map_, $Collection_, $Collection, $Map, $Set } from "@package/java/util";
import { $TaskChainer_, $TaskChainer } from "@package/net/minecraft/util";
import { $AdvancementHolder } from "@package/net/minecraft/advancements";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Predicate, $Supplier_, $Function_, $BinaryOperator_, $Consumer_, $UnaryOperator_, $Predicate_ } from "@package/java/util/function";
import { $CharPredicate_ } from "@package/net/minecraft";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ICommandSourceStackExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Dynamic2CommandExceptionType, $CommandSyntaxException, $DynamicCommandExceptionType, $CommandExceptionType, $SimpleCommandExceptionType, $BuiltInExceptionProvider } from "@package/com/mojang/brigadier/exceptions";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $LiteralArgumentBuilder, $RequiredArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Iterable_, $Enum, $Record, $Exception } from "@package/java/lang";
import { $Level } from "@package/net/minecraft/world/level";
import { $ExecutionContext, $TraceCallbacks } from "@package/net/minecraft/commands/execution";
import { $Component_, $PlayerChatMessage, $ChatType$Bound_, $Component, $OutgoingChatMessage, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $ClientCommandRegistrationEvent$ClientCommandSourceStack } from "@package/dev/architectury/event/events/client";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $EntityAnchorArgument$Anchor_, $EntityAnchorArgument$Anchor } from "@package/net/minecraft/commands/arguments";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $LazyComponentKJS_ } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ArgumentType_ } from "@package/com/mojang/brigadier/arguments";
export * as execution from "@package/net/minecraft/commands/execution";
export * as functions from "@package/net/minecraft/commands/functions";
export * as arguments from "@package/net/minecraft/commands/arguments";
export * as synchronization from "@package/net/minecraft/commands/synchronization";

declare module "@package/net/minecraft/commands" {
    export class $CacheableFunction {
        get(arg0: $ServerFunctionManager): ($CommandFunction<$CommandSourceStack>) | undefined;
        getId(): $ResourceLocation;
        static CODEC: $Codec<$CacheableFunction>;
        constructor(arg0: $ResourceLocation_);
        get id(): $ResourceLocation;
    }
    export class $CommandBuildContext {
        static simple(arg0: $HolderLookup$Provider, arg1: $FeatureFlagSet): $CommandBuildContext;
    }
    export interface $CommandBuildContext extends $HolderLookup$Provider {
    }
    export class $SharedSuggestionProvider {
        static matchesSubStr(arg0: string, arg1: string): boolean;
        static filterResources<T>(arg0: $Iterable_<T>, arg1: string, arg2: string, arg3: $Function_<T, $ResourceLocation>, arg4: $Consumer_<T>): void;
        static filterResources<T>(arg0: $Iterable_<T>, arg1: string, arg2: $Function_<T, $ResourceLocation>, arg3: $Consumer_<T>): void;
        static suggest2DCoordinates(arg0: string, arg1: $Collection_<$SharedSuggestionProvider$TextCoordinates>, arg2: $SuggestionsBuilder, arg3: $Predicate_<string>): $CompletableFuture<$Suggestions>;
        static suggest<T>(arg0: $Iterable_<T>, arg1: $SuggestionsBuilder, arg2: $Function_<T, string>, arg3: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggest(arg0: string[], arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggest(arg0: $Stream<string>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggest(arg0: $Iterable_<string>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggestCoordinates(arg0: string, arg1: $Collection_<$SharedSuggestionProvider$TextCoordinates>, arg2: $SuggestionsBuilder, arg3: $Predicate_<string>): $CompletableFuture<$Suggestions>;
        static suggestResource(arg0: $Stream<$ResourceLocation_>, arg1: $SuggestionsBuilder, arg2: string): $CompletableFuture<$Suggestions>;
        static suggestResource(arg0: $Iterable_<$ResourceLocation>, arg1: $SuggestionsBuilder, arg2: string): $CompletableFuture<$Suggestions>;
        static suggestResource<T>(arg0: $Stream<T>, arg1: $SuggestionsBuilder, arg2: $Function_<T, $ResourceLocation>, arg3: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggestResource<T>(arg0: $Iterable_<T>, arg1: $SuggestionsBuilder, arg2: $Function_<T, $ResourceLocation>, arg3: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggestResource(arg0: $Stream<$ResourceLocation_>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggestResource(arg0: $Iterable_<$ResourceLocation>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
    }
    export interface $SharedSuggestionProvider {
        levels(): $Set<$ResourceKey<$Level>>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getCustomTabSugggestions(): $Collection<string>;
        customSuggestion(arg0: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getSelectedEntities(): $Collection<string>;
        getOnlinePlayerNames(): $Collection<string>;
        suggestRegistryElements(arg0: $Registry<never>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder): void;
        suggestRegistryElements(arg0: $ResourceKey_<$Registry<never>>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder, arg3: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        hasPermission(arg0: number): boolean;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get customTabSugggestions(): $Collection<string>;
        get allTeams(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get selectedEntities(): $Collection<string>;
        get onlinePlayerNames(): $Collection<string>;
    }
    export class $CommandSource {
        static NULL: $CommandSource;
    }
    export interface $CommandSource {
        sendSystemMessage(arg0: $Component_): void;
        shouldInformAdmins(): boolean;
        acceptsFailure(): boolean;
        acceptsSuccess(): boolean;
        alwaysAccepts(): boolean;
    }
    export class $ExecutionCommandSource<T extends $ExecutionCommandSource<T>> {
        static resultConsumer<T extends $ExecutionCommandSource<T>>(): $ResultConsumer<T>;
    }
    export interface $ExecutionCommandSource<T extends $ExecutionCommandSource<T>> {
        callback(): $CommandResultCallback;
        dispatcher(): $CommandDispatcher<T>;
        handleError(arg0: $CommandSyntaxException, arg1: boolean, arg2: $TraceCallbacks): void;
        handleError(arg0: $CommandExceptionType, arg1: $Message_, arg2: boolean, arg3: $TraceCallbacks): void;
        clearCallbacks(): T;
        isSilent(): boolean;
        withCallback(arg0: $CommandResultCallback_): T;
        hasPermission(arg0: number): boolean;
        get silent(): boolean;
    }
    export class $CommandSigningContext$SignedArguments extends $Record implements $CommandSigningContext {
        "arguments"(): $Map<string, $PlayerChatMessage>;
        getArgument(arg0: string): $PlayerChatMessage;
        constructor(arg0: $Map_<string, $PlayerChatMessage_>);
    }
    export class $CommandResultCallback {
        static chain(arg0: $CommandResultCallback_, arg1: $CommandResultCallback_): $CommandResultCallback;
        static EMPTY: $CommandResultCallback;
    }
    export interface $CommandResultCallback {
        onSuccess(arg0: number): void;
        onFailure(): void;
        onResult(arg0: boolean, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $CommandResultCallback}.
     */
    export type $CommandResultCallback_ = ((arg0: boolean, arg1: number) => void);
    export class $CommandSourceStack implements $ExecutionCommandSource<$CommandSourceStack>, $SharedSuggestionProvider, $ICommandSourceStackExtension, $ClientCommandRegistrationEvent$ClientCommandSourceStack {
        callback(): $CommandResultCallback;
        getPosition(): $Vec3;
        getDisplayName(): $Component;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ServerLevel;
        withLevel(arg0: $ServerLevel): $CommandSourceStack;
        dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        handleError(arg0: $CommandExceptionType, arg1: $Message_, arg2: boolean, arg3: $TraceCallbacks): void;
        getEntity(): $Entity;
        isPlayer(): boolean;
        arch$getRotation(): $Vec2;
        arch$sendSuccess(message: $Supplier_<any>, broadcastToAdmins: boolean): void;
        getTextName(): string;
        arch$sendFailure(message: $Component_): void;
        arch$getPlayer(): $LocalPlayer;
        arch$getLevel(): $ClientLevel;
        sendSuccess(component: $Component_, broadcastToAdmins: boolean): void;
        withSigningContext(arg0: $CommandSigningContext_, arg1: $TaskChainer_): $CommandSourceStack;
        arch$getPosition(): $Vec3;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        shouldFilterMessageTo(arg0: $ServerPlayer): boolean;
        getPlayer(): $ServerPlayer;
        getRotation(): $Vec2;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        sendFailure(arg0: $Component_): void;
        withSuppressedOutput(): $CommandSourceStack;
        withAnchor(arg0: $EntityAnchorArgument$Anchor_): $CommandSourceStack;
        withSource(arg0: $CommandSource): $CommandSourceStack;
        isSilent(): boolean;
        getServer(): $MinecraftServer;
        facing(arg0: $Entity, arg1: $EntityAnchorArgument$Anchor_): $CommandSourceStack;
        facing(arg0: $Vec3_): $CommandSourceStack;
        sendSystemMessage(arg0: $Component_): void;
        withMaximumPermission(arg0: number): $CommandSourceStack;
        sendSuccessLazy(component: $LazyComponentKJS_, broadcastToAdmins: boolean): void;
        getEntityOrException(): $Entity;
        getPlayerOrException(): $ServerPlayer;
        withEntity(arg0: $Entity): $CommandSourceStack;
        sendChatMessage(arg0: $OutgoingChatMessage, arg1: boolean, arg2: $ChatType$Bound_): void;
        customSuggestion(arg0: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getSigningContext(): $CommandSigningContext;
        getAllTeams(): $Collection<string>;
        withPosition(arg0: $Vec3_): $CommandSourceStack;
        getOnlinePlayerNames(): $Collection<string>;
        getChatMessageChainer(): $TaskChainer;
        suggestRegistryElements(arg0: $ResourceKey_<$Registry<never>>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder, arg3: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        withRotation(arg0: $Vec2): $CommandSourceStack;
        withCallback(arg0: $CommandResultCallback_): $CommandSourceStack;
        withCallback(arg0: $CommandResultCallback_, arg1: $BinaryOperator_<$CommandResultCallback>): $CommandSourceStack;
        withPermission(arg0: number): $CommandSourceStack;
        hasPermission(arg0: number): boolean;
        getAnchor(): $EntityAnchorArgument$Anchor;
        handleError(arg0: $CommandSyntaxException, arg1: boolean, arg2: $TraceCallbacks): void;
        clearCallbacks(): $CommandSourceStack;
        getCustomTabSugggestions(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getSelectedEntities(): $Collection<string>;
        suggestRegistryElements(arg0: $Registry<never>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder): void;
        getRecipeManager(): $RecipeManager;
        getScoreboard(): $Scoreboard;
        getAdvancement(arg0: $ResourceLocation_): $AdvancementHolder;
        getUnsidedLevel(): $Level;
        source: $CommandSource;
        static ERROR_NOT_ENTITY: $SimpleCommandExceptionType;
        static ERROR_NOT_PLAYER: $SimpleCommandExceptionType;
        constructor(arg0: $CommandSource, arg1: $Vec3_, arg2: $Vec2, arg3: $ServerLevel, arg4: number, arg5: string, arg6: $Component_, arg7: $MinecraftServer, arg8: $Entity);
        constructor(arg0: $CommandSource, arg1: $Vec3_, arg2: $Vec2, arg3: $ServerLevel, arg4: number, arg5: string, arg6: $Component_, arg7: $MinecraftServer, arg8: $Entity, arg9: boolean, arg10: $CommandResultCallback_, arg11: $EntityAnchorArgument$Anchor_, arg12: $CommandSigningContext_, arg13: $TaskChainer_);
        get position(): $Vec3;
        get displayName(): $Component;
        get level(): $ServerLevel;
        get entity(): $Entity;
        get textName(): string;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get rotation(): $Vec2;
        get silent(): boolean;
        get server(): $MinecraftServer;
        get entityOrException(): $Entity;
        get playerOrException(): $ServerPlayer;
        get signingContext(): $CommandSigningContext;
        get allTeams(): $Collection<string>;
        get onlinePlayerNames(): $Collection<string>;
        get chatMessageChainer(): $TaskChainer;
        get anchor(): $EntityAnchorArgument$Anchor;
        get customTabSugggestions(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get selectedEntities(): $Collection<string>;
        get recipeManager(): $RecipeManager;
        get scoreboard(): $Scoreboard;
        get unsidedLevel(): $Level;
    }
    export class $SharedSuggestionProvider$ElementSuggestionType extends $Enum<$SharedSuggestionProvider$ElementSuggestionType> {
        static values(): $SharedSuggestionProvider$ElementSuggestionType[];
        static valueOf(arg0: string): $SharedSuggestionProvider$ElementSuggestionType;
        shouldSuggestTags(): boolean;
        shouldSuggestElements(): boolean;
        static ELEMENTS: $SharedSuggestionProvider$ElementSuggestionType;
        static ALL: $SharedSuggestionProvider$ElementSuggestionType;
        static TAGS: $SharedSuggestionProvider$ElementSuggestionType;
    }
    /**
     * Values that may be interpreted as {@link $SharedSuggestionProvider$ElementSuggestionType}.
     */
    export type $SharedSuggestionProvider$ElementSuggestionType_ = "tags" | "elements" | "all";
    export class $Commands$ParseFunction {
    }
    export interface $Commands$ParseFunction {
        parse(arg0: $StringReader): void;
    }
    /**
     * Values that may be interpreted as {@link $Commands$ParseFunction}.
     */
    export type $Commands$ParseFunction_ = ((arg0: $StringReader) => void);
    export class $Commands {
        static executeCommandInContext(arg0: $CommandSourceStack, arg1: $Consumer_<$ExecutionContext<$CommandSourceStack>>): void;
        static validateParseResults<S>(arg0: $ParseResults<S>): void;
        static validate(): void;
        static argument<T>(arg0: string, arg1: $ArgumentType_<T>): $RequiredArgumentBuilder<$CommandSourceStack, T>;
        static literal(arg0: string): $LiteralArgumentBuilder<$CommandSourceStack>;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        static mapSource<S>(arg0: $ParseResults<S>, arg1: $UnaryOperator_<S>): $ParseResults<S>;
        performCommand(arg0: $ParseResults<$CommandSourceStack>, arg1: string): void;
        sendCommands(arg0: $ServerPlayer): void;
        performPrefixedCommand(arg0: $CommandSourceStack, arg1: string): void;
        static createValidationContext(arg0: $HolderLookup$Provider): $CommandBuildContext;
        static createValidator(arg0: $Commands$ParseFunction_): $Predicate<string>;
        static getParseException<S>(arg0: $ParseResults<S>): $CommandSyntaxException;
        static LEVEL_MODERATORS: number;
        static LEVEL_ALL: number;
        static LEVEL_ADMINS: number;
        static LEVEL_OWNERS: number;
        static LEVEL_GAMEMASTERS: number;
        constructor(arg0: $Commands$CommandSelection_, arg1: $CommandBuildContext);
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
    }
    export class $FunctionInstantiationException extends $Exception {
        messageComponent(): $Component;
        constructor(arg0: $Component_);
    }
    export class $SharedSuggestionProvider$TextCoordinates {
        static DEFAULT_GLOBAL: $SharedSuggestionProvider$TextCoordinates;
        static DEFAULT_LOCAL: $SharedSuggestionProvider$TextCoordinates;
        x: string;
        y: string;
        z: string;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    export class $Commands$CommandSelection extends $Enum<$Commands$CommandSelection> {
        static values(): $Commands$CommandSelection[];
        static valueOf(arg0: string): $Commands$CommandSelection;
        static ALL: $Commands$CommandSelection;
        static INTEGRATED: $Commands$CommandSelection;
        static DEDICATED: $Commands$CommandSelection;
        includeIntegrated: boolean;
        includeDedicated: boolean;
    }
    /**
     * Values that may be interpreted as {@link $Commands$CommandSelection}.
     */
    export type $Commands$CommandSelection_ = "all" | "dedicated" | "integrated";
    export class $CommandSigningContext {
        static ANONYMOUS: $CommandSigningContext;
    }
    export interface $CommandSigningContext {
        getArgument(arg0: string): $PlayerChatMessage;
    }
    /**
     * Values that may be interpreted as {@link $CommandSigningContext}.
     */
    export type $CommandSigningContext_ = ((arg0: string) => $PlayerChatMessage_);
    export class $BrigadierExceptions implements $BuiltInExceptionProvider {
        readerInvalidLong(): $DynamicCommandExceptionType;
        readerExpectedLong(): $SimpleCommandExceptionType;
        floatTooLow(): $Dynamic2CommandExceptionType;
        integerTooLow(): $Dynamic2CommandExceptionType;
        literalIncorrect(): $DynamicCommandExceptionType;
        longTooHigh(): $Dynamic2CommandExceptionType;
        readerInvalidBool(): $DynamicCommandExceptionType;
        readerInvalidInt(): $DynamicCommandExceptionType;
        readerExpectedBool(): $SimpleCommandExceptionType;
        readerInvalidFloat(): $DynamicCommandExceptionType;
        doubleTooHigh(): $Dynamic2CommandExceptionType;
        floatTooHigh(): $Dynamic2CommandExceptionType;
        doubleTooLow(): $Dynamic2CommandExceptionType;
        integerTooHigh(): $Dynamic2CommandExceptionType;
        readerExpectedInt(): $SimpleCommandExceptionType;
        dispatcherExpectedArgumentSeparator(): $SimpleCommandExceptionType;
        readerExpectedStartOfQuote(): $SimpleCommandExceptionType;
        readerInvalidEscape(): $DynamicCommandExceptionType;
        readerExpectedDouble(): $SimpleCommandExceptionType;
        dispatcherUnknownCommand(): $SimpleCommandExceptionType;
        readerExpectedSymbol(): $DynamicCommandExceptionType;
        dispatcherUnknownArgument(): $SimpleCommandExceptionType;
        readerExpectedEndOfQuote(): $SimpleCommandExceptionType;
        readerInvalidDouble(): $DynamicCommandExceptionType;
        readerExpectedFloat(): $SimpleCommandExceptionType;
        dispatcherParseException(): $DynamicCommandExceptionType;
        longTooLow(): $Dynamic2CommandExceptionType;
        constructor();
    }
    export class $ParserUtils {
        static parseJson<T>(arg0: $HolderLookup$Provider, arg1: $StringReader, arg2: $Codec<T>): T;
        static readWhile(arg0: $StringReader, arg1: $CharPredicate_): string;
        constructor();
    }
}
