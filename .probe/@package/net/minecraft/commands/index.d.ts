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
        static suggest2DCoordinates(arg0: string, arg1: $Collection_<$SharedSuggestionProvider$TextCoordinates>, arg2: $SuggestionsBuilder, arg3: $Predicate_<string>): $CompletableFuture<$Suggestions>;
        static suggestResource(arg0: $Stream<$ResourceLocation_>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggestResource(arg0: $Stream<$ResourceLocation_>, arg1: $SuggestionsBuilder, arg2: string): $CompletableFuture<$Suggestions>;
        static suggestResource(arg0: $Iterable_<$ResourceLocation>, arg1: $SuggestionsBuilder, arg2: string): $CompletableFuture<$Suggestions>;
        static suggestResource(arg0: $Iterable_<$ResourceLocation>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggestResource<T>(arg0: $Iterable_<T>, arg1: $SuggestionsBuilder, arg2: $Function_<T, $ResourceLocation>, arg3: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggestResource<T>(arg0: $Stream<T>, arg1: $SuggestionsBuilder, arg2: $Function_<T, $ResourceLocation>, arg3: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggestCoordinates(arg0: string, arg1: $Collection_<$SharedSuggestionProvider$TextCoordinates>, arg2: $SuggestionsBuilder, arg3: $Predicate_<string>): $CompletableFuture<$Suggestions>;
        static suggest(arg0: string[], arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggest(arg0: $Iterable_<string>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggest(arg0: $Stream<string>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggest<T>(arg0: $Iterable_<T>, arg1: $SuggestionsBuilder, arg2: $Function_<T, string>, arg3: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static filterResources<T>(arg0: $Iterable_<T>, arg1: string, arg2: $Function_<T, $ResourceLocation>, arg3: $Consumer_<T>): void;
        static filterResources<T>(arg0: $Iterable_<T>, arg1: string, arg2: string, arg3: $Function_<T, $ResourceLocation>, arg4: $Consumer_<T>): void;
        static matchesSubStr(arg0: string, arg1: string): boolean;
    }
    export interface $SharedSuggestionProvider {
        levels(): $Set<$ResourceKey<$Level>>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getSelectedEntities(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getOnlinePlayerNames(): $Collection<string>;
        suggestRegistryElements(arg0: $Registry<never>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder): void;
        suggestRegistryElements(arg0: $ResourceKey_<$Registry<never>>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder, arg3: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        hasPermission(arg0: number): boolean;
        getAllTeams(): $Collection<string>;
        customSuggestion(arg0: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getCustomTabSugggestions(): $Collection<string>;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get selectedEntities(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get onlinePlayerNames(): $Collection<string>;
        get allTeams(): $Collection<string>;
        get customTabSugggestions(): $Collection<string>;
    }
    export class $CommandSource {
        static NULL: $CommandSource;
    }
    export interface $CommandSource {
        sendSystemMessage(arg0: $Component_): void;
        shouldInformAdmins(): boolean;
        acceptsSuccess(): boolean;
        acceptsFailure(): boolean;
        alwaysAccepts(): boolean;
    }
    export class $ExecutionCommandSource<T extends $ExecutionCommandSource<T>> {
        static resultConsumer<T extends $ExecutionCommandSource<T>>(): $ResultConsumer<T>;
    }
    export interface $ExecutionCommandSource<T extends $ExecutionCommandSource<T>> {
        handleError(arg0: $CommandExceptionType, arg1: $Message_, arg2: boolean, arg3: $TraceCallbacks): void;
        handleError(arg0: $CommandSyntaxException, arg1: boolean, arg2: $TraceCallbacks): void;
        dispatcher(): $CommandDispatcher<T>;
        withCallback(arg0: $CommandResultCallback_): T;
        callback(): $CommandResultCallback;
        isSilent(): boolean;
        hasPermission(arg0: number): boolean;
        clearCallbacks(): T;
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
        onResult(arg0: boolean, arg1: number): void;
        onFailure(): void;
        onSuccess(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $CommandResultCallback}.
     */
    export type $CommandResultCallback_ = ((arg0: boolean, arg1: number) => void);
    export class $CommandSourceStack implements $ExecutionCommandSource<$CommandSourceStack>, $SharedSuggestionProvider, $ICommandSourceStackExtension, $ClientCommandRegistrationEvent$ClientCommandSourceStack {
        getDisplayName(): $Component;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ServerLevel;
        handleError(arg0: $CommandExceptionType, arg1: $Message_, arg2: boolean, arg3: $TraceCallbacks): void;
        getEntity(): $Entity;
        dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        shouldFilterMessageTo(arg0: $ServerPlayer): boolean;
        withRotation(arg0: $Vec2): $CommandSourceStack;
        withLevel(arg0: $ServerLevel): $CommandSourceStack;
        sendChatMessage(arg0: $OutgoingChatMessage, arg1: boolean, arg2: $ChatType$Bound_): void;
        getRotation(): $Vec2;
        isPlayer(): boolean;
        sendSystemMessage(arg0: $Component_): void;
        withPosition(arg0: $Vec3_): $CommandSourceStack;
        getPlayer(): $ServerPlayer;
        withCallback(arg0: $CommandResultCallback_, arg1: $BinaryOperator_<$CommandResultCallback>): $CommandSourceStack;
        arch$sendFailure(message: $Component_): void;
        withSigningContext(arg0: $CommandSigningContext_, arg1: $TaskChainer_): $CommandSourceStack;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        sendSuccess(component: $Component_, broadcastToAdmins: boolean): void;
        arch$getPosition(): $Vec3;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getTextName(): string;
        arch$getLevel(): $ClientLevel;
        arch$getRotation(): $Vec2;
        arch$getPlayer(): $LocalPlayer;
        arch$sendSuccess(message: $Supplier_<any>, broadcastToAdmins: boolean): void;
        sendFailure(arg0: $Component_): void;
        callback(): $CommandResultCallback;
        getPosition(): $Vec3;
        isSilent(): boolean;
        getServer(): $MinecraftServer;
        facing(arg0: $Entity, arg1: $EntityAnchorArgument$Anchor_): $CommandSourceStack;
        facing(arg0: $Vec3_): $CommandSourceStack;
        getOnlinePlayerNames(): $Collection<string>;
        getChatMessageChainer(): $TaskChainer;
        suggestRegistryElements(arg0: $ResourceKey_<$Registry<never>>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder, arg3: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        withSuppressedOutput(): $CommandSourceStack;
        hasPermission(arg0: number): boolean;
        getSigningContext(): $CommandSigningContext;
        getAllTeams(): $Collection<string>;
        customSuggestion(arg0: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        withPermission(arg0: number): $CommandSourceStack;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getAnchor(): $EntityAnchorArgument$Anchor;
        withEntity(arg0: $Entity): $CommandSourceStack;
        withAnchor(arg0: $EntityAnchorArgument$Anchor_): $CommandSourceStack;
        withSource(arg0: $CommandSource): $CommandSourceStack;
        getEntityOrException(): $Entity;
        getPlayerOrException(): $ServerPlayer;
        withMaximumPermission(arg0: number): $CommandSourceStack;
        sendSuccessLazy(component: $LazyComponentKJS_, broadcastToAdmins: boolean): void;
        handleError(arg0: $CommandSyntaxException, arg1: boolean, arg2: $TraceCallbacks): void;
        clearCallbacks(): $CommandSourceStack;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getSelectedEntities(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        suggestRegistryElements(arg0: $Registry<never>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder): void;
        getCustomTabSugggestions(): $Collection<string>;
        getScoreboard(): $Scoreboard;
        getUnsidedLevel(): $Level;
        getAdvancement(arg0: $ResourceLocation_): $AdvancementHolder;
        getRecipeManager(): $RecipeManager;
        withCallback(arg0: $CommandResultCallback_): $CommandSourceStack;
        source: $CommandSource;
        static ERROR_NOT_ENTITY: $SimpleCommandExceptionType;
        static ERROR_NOT_PLAYER: $SimpleCommandExceptionType;
        constructor(arg0: $CommandSource, arg1: $Vec3_, arg2: $Vec2, arg3: $ServerLevel, arg4: number, arg5: string, arg6: $Component_, arg7: $MinecraftServer, arg8: $Entity);
        constructor(arg0: $CommandSource, arg1: $Vec3_, arg2: $Vec2, arg3: $ServerLevel, arg4: number, arg5: string, arg6: $Component_, arg7: $MinecraftServer, arg8: $Entity, arg9: boolean, arg10: $CommandResultCallback_, arg11: $EntityAnchorArgument$Anchor_, arg12: $CommandSigningContext_, arg13: $TaskChainer_);
        get displayName(): $Component;
        get level(): $ServerLevel;
        get entity(): $Entity;
        get rotation(): $Vec2;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get textName(): string;
        get position(): $Vec3;
        get silent(): boolean;
        get server(): $MinecraftServer;
        get onlinePlayerNames(): $Collection<string>;
        get chatMessageChainer(): $TaskChainer;
        get signingContext(): $CommandSigningContext;
        get allTeams(): $Collection<string>;
        get anchor(): $EntityAnchorArgument$Anchor;
        get entityOrException(): $Entity;
        get playerOrException(): $ServerPlayer;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get selectedEntities(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get customTabSugggestions(): $Collection<string>;
        get scoreboard(): $Scoreboard;
        get unsidedLevel(): $Level;
        get recipeManager(): $RecipeManager;
    }
    export class $SharedSuggestionProvider$ElementSuggestionType extends $Enum<$SharedSuggestionProvider$ElementSuggestionType> {
        static values(): $SharedSuggestionProvider$ElementSuggestionType[];
        static valueOf(arg0: string): $SharedSuggestionProvider$ElementSuggestionType;
        shouldSuggestElements(): boolean;
        shouldSuggestTags(): boolean;
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
        static validate(): void;
        static argument<T>(arg0: string, arg1: $ArgumentType_<T>): $RequiredArgumentBuilder<$CommandSourceStack, T>;
        static literal(arg0: string): $LiteralArgumentBuilder<$CommandSourceStack>;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        performCommand(arg0: $ParseResults<$CommandSourceStack>, arg1: string): void;
        performPrefixedCommand(arg0: $CommandSourceStack, arg1: string): void;
        static createValidator(arg0: $Commands$ParseFunction_): $Predicate<string>;
        sendCommands(arg0: $ServerPlayer): void;
        static mapSource<S>(arg0: $ParseResults<S>, arg1: $UnaryOperator_<S>): $ParseResults<S>;
        static getParseException<S>(arg0: $ParseResults<S>): $CommandSyntaxException;
        static validateParseResults<S>(arg0: $ParseResults<S>): void;
        static createValidationContext(arg0: $HolderLookup$Provider): $CommandBuildContext;
        static executeCommandInContext(arg0: $CommandSourceStack, arg1: $Consumer_<$ExecutionContext<$CommandSourceStack>>): void;
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
        dispatcherExpectedArgumentSeparator(): $SimpleCommandExceptionType;
        readerInvalidDouble(): $DynamicCommandExceptionType;
        dispatcherParseException(): $DynamicCommandExceptionType;
        readerExpectedEndOfQuote(): $SimpleCommandExceptionType;
        dispatcherUnknownCommand(): $SimpleCommandExceptionType;
        dispatcherUnknownArgument(): $SimpleCommandExceptionType;
        readerExpectedStartOfQuote(): $SimpleCommandExceptionType;
        readerInvalidEscape(): $DynamicCommandExceptionType;
        readerExpectedDouble(): $SimpleCommandExceptionType;
        readerExpectedSymbol(): $DynamicCommandExceptionType;
        readerExpectedFloat(): $SimpleCommandExceptionType;
        readerInvalidInt(): $DynamicCommandExceptionType;
        readerInvalidLong(): $DynamicCommandExceptionType;
        doubleTooHigh(): $Dynamic2CommandExceptionType;
        integerTooLow(): $Dynamic2CommandExceptionType;
        literalIncorrect(): $DynamicCommandExceptionType;
        floatTooLow(): $Dynamic2CommandExceptionType;
        floatTooHigh(): $Dynamic2CommandExceptionType;
        readerExpectedLong(): $SimpleCommandExceptionType;
        readerInvalidBool(): $DynamicCommandExceptionType;
        readerInvalidFloat(): $DynamicCommandExceptionType;
        readerExpectedInt(): $SimpleCommandExceptionType;
        longTooHigh(): $Dynamic2CommandExceptionType;
        integerTooHigh(): $Dynamic2CommandExceptionType;
        readerExpectedBool(): $SimpleCommandExceptionType;
        doubleTooLow(): $Dynamic2CommandExceptionType;
        longTooLow(): $Dynamic2CommandExceptionType;
        constructor();
    }
    export class $ParserUtils {
        static parseJson<T>(arg0: $HolderLookup$Provider, arg1: $StringReader, arg2: $Codec<T>): T;
        static readWhile(arg0: $StringReader, arg1: $CharPredicate_): string;
        constructor();
    }
}
