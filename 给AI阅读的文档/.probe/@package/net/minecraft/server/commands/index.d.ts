import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $EntityType_, $RelativeMovement_, $Entity } from "@package/net/minecraft/world/entity";
import { $Set_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $BlockInput } from "@package/net/minecraft/commands/arguments/blocks";
import { $NumberFormat } from "@package/net/minecraft/network/chat/numbers";
import { $Difficulty_, $Container } from "@package/net/minecraft/world";
import { $Predicate, $IntPredicate_, $Function_, $Consumer_, $Predicate_, $Supplier } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Holder$Reference } from "@package/net/minecraft/core";
import { $Dynamic2CommandExceptionType, $CommandSyntaxException, $Dynamic3CommandExceptionType, $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $Suggestions, $SuggestionProvider, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $ConfiguredFeature_ } from "@package/net/minecraft/world/level/levelgen/feature";
import { $ContextChain, $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Enum, $Record } from "@package/java/lang";
import { $BoundingBox, $Structure_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Level, $GameRules$Key, $GameRules$Value } from "@package/net/minecraft/world/level";
import { $ChainModifiers_, $TraceCallbacks, $CustomCommandExecutor$CommandAdapter, $CustomCommandExecutor$WithErrorHandling, $ExecutionControl, $CustomModifierExecutor$ModifierAdapter } from "@package/net/minecraft/commands/execution";
import { $Logger } from "@package/org/slf4j";
import { $BlockInWorld } from "@package/net/minecraft/world/level/block/state/pattern";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceOrTagKeyArgument$Result, $ResourceOrTagArgument$Result, $NbtPathArgument$NbtPath } from "@package/net/minecraft/commands/arguments";
import { $BiMap } from "@package/com/google/common/collect";
import { $CustomBossEvent } from "@package/net/minecraft/server/bossevents";
import { $Duration_ } from "@package/java/time";
import { $CommandSource, $ExecutionCommandSource, $CommandSourceStack, $CommandBuildContext } from "@package/net/minecraft/commands";
import { $DataAccessor } from "@package/net/minecraft/server/commands/data";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Rotation_, $Mirror_ } from "@package/net/minecraft/world/level/block";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GameRuleCommandAccessor } from "@package/net/fabricmc/fabric/mixin/gamerule";
export * as data from "@package/net/minecraft/server/commands/data";

declare module "@package/net/minecraft/server/commands" {
    export class $CloneCommands$Mode extends $Enum<$CloneCommands$Mode> {
    }
    /**
     * Values that may be interpreted as {@link $CloneCommands$Mode}.
     */
    export type $CloneCommands$Mode_ = "force" | "move" | "normal";
    export class $DebugPathCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $OpCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $EnchantCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        constructor();
    }
    export class $LootCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        static SUGGEST_LOOT_TABLE: $SuggestionProvider<$CommandSourceStack>;
        constructor();
    }
    export class $BanListCommands {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $MsgCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $GiveCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        static MAX_ALLOWED_ITEMSTACKS: number;
        constructor();
    }
    export class $CloneCommands$CloneBlockInfo extends $Record {
    }
    export class $WhitelistCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $EmoteCommands {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $ScoreboardCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        constructor();
    }
    export class $SummonCommand {
        static createEntity(source: $CommandSourceStack, type: $Holder$Reference<$EntityType_<never>>, pos: $Vec3_, tag: $CompoundTag_, randomizeProperties: boolean): $Entity;
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        constructor();
    }
    export class $RaidCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        constructor();
    }
    export class $TeamMsgCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $SetBlockCommand$Filter {
    }
    export interface $SetBlockCommand$Filter {
        filter(boundingBox: $BoundingBox, pos: $BlockPos_, blockInput: $BlockInput, level: $ServerLevel): $BlockInput;
    }
    /**
     * Values that may be interpreted as {@link $SetBlockCommand$Filter}.
     */
    export type $SetBlockCommand$Filter_ = ((arg0: $BoundingBox, arg1: $BlockPos, arg2: $BlockInput, arg3: $ServerLevel) => $BlockInput);
    export class $SaveOffCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $JfrCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
    }
    export class $HelpCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $PerfCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $SetWorldSpawnCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $LocateCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        static showLocateResult(source: $CommandSourceStack, result: $ResourceOrTagArgument$Result<never>, sourcePosition: $BlockPos_, resultWithPosition: $Pair<$BlockPos_, $Holder_<never>>, translationKey: string, absoluteY: boolean, duration: $Duration_): number;
        static showLocateResult(source: $CommandSourceStack, result: $ResourceOrTagKeyArgument$Result<never>, sourcePosition: $BlockPos_, resultWithPosition: $Pair<$BlockPos_, $Holder_<never>>, translationKey: string, absoluteY: boolean, duration: $Duration_): number;
        constructor();
    }
    export class $SpectateCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $TagCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $CloneCommands$DimensionAndPosition extends $Record {
    }
    export class $PlaySoundCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $TellRawCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        constructor();
    }
    export class $ReturnCommand {
        static register<T extends $ExecutionCommandSource<T>>(dispatcher: $CommandDispatcher<T>): void;
        constructor();
    }
    export class $FillBiomeCommand {
        static fill(level: $ServerLevel, from: $BlockPos_, to: $BlockPos_, biome: $Holder_<$Biome>, filter: $Predicate_<$Holder<$Biome>>, messageOutput: $Consumer_<$Supplier<$Component>>): $Either<number, $CommandSyntaxException>;
        static fill(level: $ServerLevel, from: $BlockPos_, to: $BlockPos_, biome: $Holder_<$Biome>): $Either<number, $CommandSyntaxException>;
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        static ERROR_NOT_LOADED: $SimpleCommandExceptionType;
        constructor();
    }
    export class $PardonCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $DefaultGameModeCommands {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $SeedCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, notIntegratedServer: boolean): void;
        constructor();
    }
    export class $ServerPackCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $ExecuteCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        static scheduleFunctionConditionsAndTest<T extends $ExecutionCommandSource<T>>(originalSource: T, sources: $List_<T>, sourceModifier: $Function_<T, T>, successCheck: $IntPredicate_, contextChain: $ContextChain<T>, _arguments: $CompoundTag_ | null, executionControl: $ExecutionControl<T>, functions: $ExecuteCommand$CommandGetter_<T, $Collection<$CommandFunction<T>>>, chainModifiers: $ChainModifiers_): void;
        static ERROR_FUNCTION_CONDITION_INSTANTATION_FAILURE: $Dynamic2CommandExceptionType;
        constructor();
    }
    export class $PublishCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static getSuccessMessage(port: number): $MutableComponent;
        constructor();
    }
    export class $ExecuteCommand$CommandNumericPredicate {
    }
    export interface $ExecuteCommand$CommandNumericPredicate {
    }
    /**
     * Values that may be interpreted as {@link $ExecuteCommand$CommandNumericPredicate}.
     */
    export type $ExecuteCommand$CommandNumericPredicate_ = (() => void);
    export class $FunctionCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static modifySenderForExecution(source: $CommandSourceStack): $CommandSourceStack;
        static getArgumentTag(nbtPath: $NbtPathArgument$NbtPath, dataAccessor: $DataAccessor): $CompoundTag;
        static queueFunctions<T extends $ExecutionCommandSource<T>>(functions: $Collection_<$CommandFunction<T>>, _arguments: $CompoundTag_ | null, originalSource: T, source: T, executionControl: $ExecutionControl<T>, callbacks: $FunctionCommand$Callbacks_<T>, chainModifiers: $ChainModifiers_): void;
        static ERROR_FUNCTION_INSTANTATION_FAILURE: $Dynamic2CommandExceptionType;
        static SUGGEST_FUNCTION: $SuggestionProvider<$CommandSourceStack>;
        static FULL_CONTEXT_CALLBACKS: $FunctionCommand$Callbacks<$CommandSourceStack>;
        static ERROR_NO_FUNCTIONS: $DynamicCommandExceptionType;
        constructor();
    }
    export class $PlaceCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static placeStructure(source: $CommandSourceStack, feature: $Holder$Reference<$Structure_>, pos: $BlockPos_): number;
        static placeFeature(source: $CommandSourceStack, feature: $Holder$Reference<$ConfiguredFeature_<never, never>>, pos: $BlockPos_): number;
        static placeJigsaw(source: $CommandSourceStack, templatePool: $Holder_<$StructureTemplatePool>, target: $ResourceLocation_, maxDepth: number, pos: $BlockPos_): number;
        static placeTemplate(source: $CommandSourceStack, template: $ResourceLocation_, pos: $BlockPos_, rotation: $Rotation_, mirror: $Mirror_, integrity: number, seed: number): number;
        constructor();
    }
    export class $DebugCommand$Tracer implements $CommandSource, $TraceCallbacks {
        alwaysAccepts(): boolean;
    }
    export class $SetSpawnCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $DataPackCommand$Inserter {
    }
    export interface $DataPackCommand$Inserter {
    }
    /**
     * Values that may be interpreted as {@link $DataPackCommand$Inserter}.
     */
    export type $DataPackCommand$Inserter_ = (() => void);
    export class $SayCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $ExecuteCommand$CommandGetter<T, R> {
    }
    export interface $ExecuteCommand$CommandGetter<T, R> {
        get(context: $CommandContext<T>): R;
    }
    /**
     * Values that may be interpreted as {@link $ExecuteCommand$CommandGetter}.
     */
    export type $ExecuteCommand$CommandGetter_<T, R> = ((arg0: $CommandContext<T>) => R);
    export class $SpreadPlayersCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $DebugMobSpawningCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $ExperienceCommand$Type extends $Enum<$ExperienceCommand$Type> {
    }
    /**
     * Values that may be interpreted as {@link $ExperienceCommand$Type}.
     */
    export type $ExperienceCommand$Type_ = "points" | "levels";
    export class $ExperienceCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $ScheduleCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $StopSoundCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $SaveOnCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $DifficultyCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static setDifficulty(source: $CommandSourceStack, difficulty: $Difficulty_): number;
        constructor();
    }
    export class $PardonIpCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $EffectCommands {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        constructor();
    }
    export class $ScoreboardCommand$NumberFormatCommandExecutor {
    }
    export interface $ScoreboardCommand$NumberFormatCommandExecutor {
        run(context: $CommandContext<$CommandSourceStack>, format: $NumberFormat | null): number;
    }
    /**
     * Values that may be interpreted as {@link $ScoreboardCommand$NumberFormatCommandExecutor}.
     */
    export type $ScoreboardCommand$NumberFormatCommandExecutor_ = ((arg0: $CommandContext<$CommandSourceStack>, arg1: $NumberFormat) => number);
    export class $SetPlayerIdleTimeoutCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $BanPlayerCommands {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $FunctionCommand$Callbacks<T> {
    }
    export interface $FunctionCommand$Callbacks<T> {
        signalResult(source: T, _function: $ResourceLocation_, commands: number): void;
    }
    /**
     * Values that may be interpreted as {@link $FunctionCommand$Callbacks}.
     */
    export type $FunctionCommand$Callbacks_<T> = ((arg0: T, arg1: $ResourceLocation, arg2: number) => void);
    export class $SpreadPlayersCommand$Position {
    }
    export class $ForceLoadCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $KillCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $CloneCommands {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        static FILTER_AIR: $Predicate<$BlockInWorld>;
        constructor();
    }
    export class $AdvancementCommands {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $TriggerCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static suggestObjectives(source: $CommandSourceStack, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        constructor();
    }
    export class $ReturnCommand$ReturnFailCustomExecutor<T extends $ExecutionCommandSource<T>> implements $CustomCommandExecutor$CommandAdapter<T> {
        run(arg0: $CommandContext<T>): number;
    }
    export class $DeOpCommands {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $TimeCommand {
        static addTime(source: $CommandSourceStack, amount: number): number;
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static setTime(source: $CommandSourceStack, amount: number): number;
        constructor();
    }
    export class $DebugCommand$TraceCustomExecutor extends $CustomCommandExecutor$WithErrorHandling<$CommandSourceStack> implements $CustomCommandExecutor$CommandAdapter<$CommandSourceStack> {
        run(context: $CommandContext<$CommandSourceStack>): number;
    }
    export class $TeleportCommand$LookAt {
    }
    export interface $TeleportCommand$LookAt {
    }
    /**
     * Values that may be interpreted as {@link $TeleportCommand$LookAt}.
     */
    export type $TeleportCommand$LookAt_ = (() => void);
    export class $StopCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $TeleportCommand$LookAtPosition extends $Record implements $TeleportCommand$LookAt {
    }
    export class $LootCommand$Callback {
    }
    export interface $LootCommand$Callback {
    }
    /**
     * Values that may be interpreted as {@link $LootCommand$Callback}.
     */
    export type $LootCommand$Callback_ = (() => void);
    export class $TeleportCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static performTeleport(source: $CommandSourceStack, entity: $Entity, level: $ServerLevel, x: number, arg4: number, y: number, arg6: $Set_<$RelativeMovement_>, z: number, arg8: number, relativeList: $TeleportCommand$LookAt_ | null): void;
        constructor();
    }
    export class $GameModeCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static PERMISSION_LEVEL: number;
        constructor();
    }
    export class $AdvancementCommands$Action extends $Enum<$AdvancementCommands$Action> {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementCommands$Action}.
     */
    export type $AdvancementCommands$Action_ = "grant" | "revoke";
    export class $LootCommand$TailProvider {
    }
    export interface $LootCommand$TailProvider {
    }
    /**
     * Values that may be interpreted as {@link $LootCommand$TailProvider}.
     */
    export type $LootCommand$TailProvider_ = (() => void);
    export class $SetBlockCommand$Mode extends $Enum<$SetBlockCommand$Mode> {
        static values(): $SetBlockCommand$Mode[];
        static valueOf(arg0: string): $SetBlockCommand$Mode;
        static DESTROY: $SetBlockCommand$Mode;
        static REPLACE: $SetBlockCommand$Mode;
    }
    /**
     * Values that may be interpreted as {@link $SetBlockCommand$Mode}.
     */
    export type $SetBlockCommand$Mode_ = "replace" | "destroy";
    export class $ClearInventoryCommands {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        constructor();
    }
    export class $ReturnCommand$ReturnFromCommandCustomModifier<T extends $ExecutionCommandSource<T>> implements $CustomModifierExecutor$ModifierAdapter<T> {
        apply(arg0: $CommandContext<T>): $Collection<T>;
    }
    export class $ReturnCommand$ReturnValueCustomExecutor<T extends $ExecutionCommandSource<T>> implements $CustomCommandExecutor$CommandAdapter<T> {
        run(arg0: $CommandContext<T>): number;
    }
    export class $FillCommand$Mode extends $Enum<$FillCommand$Mode> {
    }
    /**
     * Values that may be interpreted as {@link $FillCommand$Mode}.
     */
    export type $FillCommand$Mode_ = "replace" | "outline" | "hollow" | "destroy";
    export class $TitleCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        constructor();
    }
    export class $ReloadCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static reloadPacks(selectedIds: $Collection_<string>, source: $CommandSourceStack): void;
        constructor();
    }
    export class $FillCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        static HOLLOW_CORE: $BlockInput;
        constructor();
    }
    export class $ItemCommands {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        static getContainer(source: $CommandSourceStack, pos: $BlockPos_, exception: $Dynamic3CommandExceptionType): $Container;
        static ERROR_TARGET_INAPPLICABLE_SLOT: $DynamicCommandExceptionType;
        static ERROR_SOURCE_NOT_A_CONTAINER: $Dynamic3CommandExceptionType;
        static ERROR_TARGET_NOT_A_CONTAINER: $Dynamic3CommandExceptionType;
        constructor();
    }
    export class $CloneCommands$CommandFunction<T, R> {
    }
    export interface $CloneCommands$CommandFunction<T, R> {
    }
    /**
     * Values that may be interpreted as {@link $CloneCommands$CommandFunction}.
     */
    export type $CloneCommands$CommandFunction_<T, R> = (() => void);
    export class $SetBlockCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        constructor();
    }
    export class $TeamCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        constructor();
    }
    export class $TransferCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $DamageCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        constructor();
    }
    export class $ExecuteCommand$ExecuteIfFunctionCustomModifier implements $CustomModifierExecutor$ModifierAdapter<$CommandSourceStack> {
        apply(context: $CommandContext<$CommandSourceStack>): $Collection<$CommandSourceStack>;
    }
    export class $SaveAllCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $WardenSpawnTrackerCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $ChaseCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static DIMENSION_NAMES: $BiMap<string, $ResourceKey<$Level>>;
        constructor();
    }
    export class $ExecuteCommand$CommandPredicate {
    }
    export interface $ExecuteCommand$CommandPredicate {
    }
    /**
     * Values that may be interpreted as {@link $ExecuteCommand$CommandPredicate}.
     */
    export type $ExecuteCommand$CommandPredicate_ = (() => void);
    export class $RideCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $ListPlayersCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $FunctionCommand$1Accumulator {
    }
    export class $BanIpCommands {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $AdvancementCommands$Mode extends $Enum<$AdvancementCommands$Mode> {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementCommands$Mode}.
     */
    export type $AdvancementCommands$Mode_ = "only" | "through" | "from" | "until" | "everything";
    export class $SpawnArmorTrimsCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $WorldBorderCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $BossBarCommands {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        static getBossBar(source: $CommandContext<$CommandSourceStack>): $CustomBossEvent;
        static SUGGEST_BOSS_BAR: $SuggestionProvider<$CommandSourceStack>;
        constructor();
    }
    export class $TickCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $GameRuleCommand implements $GameRuleCommandAccessor {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static setRule<T extends $GameRules$Value<T>>(source: $CommandContext<$CommandSourceStack>, gameRule: $GameRules$Key<T>): number;
        static invokeQueryRule$fabric_game_rule_api_v1_$md$dd6cb9$0(source: $CommandSourceStack, gameRule: $GameRules$Key<any>): number;
        static queryRule<T extends $GameRules$Value<T>>(source: $CommandSourceStack, gameRule: $GameRules$Key<T>): number;
        constructor();
    }
    export class $ParticleCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        constructor();
    }
    export class $DebugCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static NO_RETURN_RUN: $SimpleCommandExceptionType;
        static LOGGER: $Logger;
        static NO_RECURSIVE_TRACES: $SimpleCommandExceptionType;
        constructor();
    }
    export class $TeleportCommand$LookAtEntity extends $Record implements $TeleportCommand$LookAt {
    }
    export class $AttributeCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext): void;
        constructor();
    }
    export class $LootCommand$DropConsumer {
    }
    export interface $LootCommand$DropConsumer {
    }
    /**
     * Values that may be interpreted as {@link $LootCommand$DropConsumer}.
     */
    export type $LootCommand$DropConsumer_ = (() => void);
    export class $WeatherCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $KickCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $DataPackCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $CloneCommands$CloneBlockEntityInfo extends $Record {
    }
    export class $FunctionCommand$FunctionCustomExecutor extends $CustomCommandExecutor$WithErrorHandling<$CommandSourceStack> implements $CustomCommandExecutor$CommandAdapter<$CommandSourceStack> {
        run(context: $CommandContext<$CommandSourceStack>): number;
    }
    export class $RecipeCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $ExecuteCommand$IntBiPredicate {
    }
    export interface $ExecuteCommand$IntBiPredicate {
    }
    /**
     * Values that may be interpreted as {@link $ExecuteCommand$IntBiPredicate}.
     */
    export type $ExecuteCommand$IntBiPredicate_ = (() => void);
    export class $DebugConfigCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $RandomCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
}
