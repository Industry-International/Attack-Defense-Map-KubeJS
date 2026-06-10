import { $Annotation } from "@package/java/lang/annotation";
import { $Services, $MinecraftServer, $MinecraftServer$ReloadableResources } from "@package/net/minecraft/server";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CommandDispatcher, $StringReader } from "@package/com/mojang/brigadier";
import { $EntityType_, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameTestHelperAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Set_, $List, $Collection_, $Collection } from "@package/java/util";
import { $Supplier_, $Consumer_, $Predicate_, $Consumer, $IntPredicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $BlockPos, $BlockPos_, $Vec3i, $Holder_, $Direction_ } from "@package/net/minecraft/core";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $Proxy } from "@package/java/net";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Method } from "@package/java/lang/reflect";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $RuntimeException, $Exception, $Comparable, $Thread, $Throwable, $Record, $Class, $Runnable_ } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $File_ } from "@package/java/io";
import { $GameType_, $LevelSettings } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $WorldData, $LevelStorageSource$LevelStorageAccess, $PlayerDataStorage } from "@package/net/minecraft/world/level/storage";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block, $Rotation_, $Block_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity, $StructureBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/gametest/framework" {
    export class $GameTestRunner$Builder {
        build(): $GameTestRunner;
        haltOnError(arg0: boolean): $GameTestRunner$Builder;
        static fromBatches(arg0: $Collection_<$GameTestBatch_>, arg1: $ServerLevel): $GameTestRunner$Builder;
        batcher(arg0: $GameTestRunner$GameTestBatcher_): $GameTestRunner$Builder;
        static fromInfo(arg0: $Collection_<$GameTestInfo>, arg1: $ServerLevel): $GameTestRunner$Builder;
        existingStructureSpawner(arg0: $StructureGridSpawner): $GameTestRunner$Builder;
        newStructureSpawner(arg0: $GameTestRunner$StructureSpawner_): $GameTestRunner$Builder;
    }
    export class $AfterBatch implements $Annotation {
        batch(): string;
    }
    export class $GlobalTestReporter {
        static finish(): void;
        static replaceWith(arg0: $TestReporter): void;
        static onTestFailed(arg0: $GameTestInfo): void;
        static onTestSuccess(arg0: $GameTestInfo): void;
        constructor();
    }
    export class $MultipleTestTracker {
        remove(arg0: $GameTestInfo): void;
        isDone(): boolean;
        getTotalCount(): number;
        addListener(arg0: $GameTestListener): void;
        addTestToTrack(arg0: $GameTestInfo): void;
        getFailedOptionalCount(): number;
        getFailedRequiredCount(): number;
        hasFailedOptional(): boolean;
        getFailedRequired(): $Collection<$GameTestInfo>;
        getProgressBar(): string;
        addFailureListener(arg0: $Consumer_<$GameTestInfo>): void;
        getDoneCount(): number;
        hasFailedRequired(): boolean;
        getFailedOptional(): $Collection<$GameTestInfo>;
        constructor();
        constructor(arg0: $Collection_<$GameTestInfo>);
        get done(): boolean;
        get totalCount(): number;
        get failedOptionalCount(): number;
        get failedRequiredCount(): number;
        get failedRequired(): $Collection<$GameTestInfo>;
        get progressBar(): string;
        get doneCount(): number;
        get failedOptional(): $Collection<$GameTestInfo>;
    }
    export class $StructureUtils {
        static getRotationForRotationSteps(arg0: number): $Rotation;
        static getStructureOrigin(arg0: $StructureBlockEntity): $BlockPos;
        static addCommandBlockAndButtonToStartTest(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $Rotation_, arg3: $ServerLevel): void;
        static getStructureBounds(arg0: $StructureBlockEntity): $AABB;
        static encaseStructure(arg0: $AABB_, arg1: $ServerLevel, arg2: boolean): void;
        static clearSpaceForStructure(arg0: $BoundingBox, arg1: $ServerLevel): void;
        static getStructureBoundingBox(arg0: $StructureBlockEntity): $BoundingBox;
        static getStructureBoundingBox(arg0: $BlockPos_, arg1: $Vec3i, arg2: $Rotation_): $BoundingBox;
        static prepareTestStructure(arg0: $GameTestInfo, arg1: $BlockPos_, arg2: $Rotation_, arg3: $ServerLevel): $StructureBlockEntity;
        static removeBarriers(arg0: $AABB_, arg1: $ServerLevel): void;
        static findStructureBlockContainingPos(arg0: $BlockPos_, arg1: number, arg2: $ServerLevel): ($BlockPos) | undefined;
        static findStructureByTestFunction(arg0: $BlockPos_, arg1: number, arg2: $ServerLevel, arg3: string): $Stream<$BlockPos>;
        static createNewEmptyStructureBlock(arg0: string, arg1: $BlockPos_, arg2: $Vec3i, arg3: $Rotation_, arg4: $ServerLevel): void;
        static getRotationStepsForRotation(arg0: $Rotation_): number;
        static getTransformedFarCorner(arg0: $BlockPos_, arg1: $Vec3i, arg2: $Rotation_): $BlockPos;
        static findStructureBlocks(arg0: $BlockPos_, arg1: number, arg2: $ServerLevel): $Stream<$BlockPos>;
        static lookedAtStructureBlockPos(arg0: $BlockPos_, arg1: $Entity, arg2: $ServerLevel): $Stream<$BlockPos>;
        static findNearestStructureBlock(arg0: $BlockPos_, arg1: number, arg2: $ServerLevel): ($BlockPos) | undefined;
        static DEFAULT_TEST_STRUCTURES_DIR: string;
        static testStructuresDir: string;
        static DEFAULT_Y_SEARCH_RADIUS: number;
        constructor();
    }
    export class $StructureBlockPosFinder {
    }
    export interface $StructureBlockPosFinder {
        findStructureBlockPos(): $Stream<$BlockPos>;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockPosFinder}.
     */
    export type $StructureBlockPosFinder_ = (() => $Stream<$BlockPos_>);
    export class $GameTestAssertPosException extends $GameTestAssertException {
        getMessageToShowAtBlock(): string;
        getRelativePos(): $BlockPos;
        getAbsolutePos(): $BlockPos;
        constructor(arg0: string, arg1: $BlockPos_, arg2: $BlockPos_, arg3: number);
        get messageToShowAtBlock(): string;
        get relativePos(): $BlockPos;
        get absolutePos(): $BlockPos;
    }
    export class $TestCommand$TestBatchSummaryDisplayer extends $Record implements $GameTestBatchListener {
    }
    export class $GameTestBatchListener {
    }
    export interface $GameTestBatchListener {
        testBatchFinished(arg0: $GameTestBatch_): void;
        testBatchStarting(arg0: $GameTestBatch_): void;
    }
    export class $RetryOptions extends $Record {
        static noRetries(): $RetryOptions;
        unlimitedTries(): boolean;
        numberOfTries(): number;
        hasTriesLeft(arg0: number, arg1: number): boolean;
        haltOnFailure(): boolean;
        hasRetries(): boolean;
        constructor(arg0: number, arg1: boolean);
    }
    export class $TestFinder<T> implements $StructureBlockPosFinder, $TestFunctionFinder {
        get(): T;
        source(): $CommandSourceStack;
        findStructureBlockPos(): $Stream<$BlockPos>;
        findTestFunctions(): $Stream<$TestFunction>;
        static NO_STRUCTURES: $StructureBlockPosFinder;
        static NO_FUNCTIONS: $TestFunctionFinder;
        constructor(arg0: $CommandSourceStack, arg1: $Function_<$TestFinder<T>, T>, arg2: $TestFunctionFinder_, arg3: $StructureBlockPosFinder_);
    }
    export class $JUnitLikeTestReporter implements $TestReporter {
        save(arg0: $File_): void;
        finish(): void;
        onTestFailed(arg0: $GameTestInfo): void;
        onTestSuccess(arg0: $GameTestInfo): void;
        constructor(arg0: $File_);
    }
    export class $GameTestServer extends $MinecraftServer {
        static create(arg0: $Thread, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $PackRepository, arg3: $Collection_<$TestFunction_>, arg4: $BlockPos_): $GameTestServer;
        handler$ihb000$fabric_gametest_api_v1$isDedicated(arg0: $CallbackInfoReturnable<any>): void;
        static VANILLA_BRAND: string;
        proxy: $Proxy;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        nextTickTimeNanos: number;
        resources: $MinecraftServer$ReloadableResources;
        worldData: $WorldData;
        services: $Services;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        playerDataStorage: $PlayerDataStorage;
    }
    export class $GameTestRunner$StructureSpawner {
        static NOT_SET: $GameTestRunner$StructureSpawner;
        static IN_PLACE: $GameTestRunner$StructureSpawner;
    }
    export interface $GameTestRunner$StructureSpawner {
        onBatchStart(arg0: $ServerLevel): void;
        spawnStructure(arg0: $GameTestInfo): ($GameTestInfo) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $GameTestRunner$StructureSpawner}.
     */
    export type $GameTestRunner$StructureSpawner_ = ((arg0: $GameTestInfo) => ($GameTestInfo) | undefined);
    export class $GameTest implements $Annotation {
        batch(): string;
        required(): boolean;
        template(): string;
        templateNamespace(): string;
        attempts(): number;
        timeoutTicks(): number;
        rotationSteps(): number;
        requiredSuccesses(): number;
        skyAccess(): boolean;
        manualOnly(): boolean;
        setupTicks(): number;
    }
    export class $GameTestTimeoutException extends $RuntimeException {
        constructor(arg0: string);
    }
    export class $GameTestEvent {
    }
    export class $TestCommand$TestSummaryDisplayer extends $Record implements $GameTestListener {
        level(): $ServerLevel;
        tracker(): $MultipleTestTracker;
        testAddedForRerun(arg0: $GameTestInfo, arg1: $GameTestInfo, arg2: $GameTestRunner): void;
        testStructureLoaded(arg0: $GameTestInfo): void;
        testFailed(arg0: $GameTestInfo, arg1: $GameTestRunner): void;
        testPassed(arg0: $GameTestInfo, arg1: $GameTestRunner): void;
        constructor(level: $ServerLevel, tracker: $MultipleTestTracker);
    }
    export class $TestClassNameArgument implements $ArgumentType<string> {
        parse(arg0: $StringReader): string;
        getExamples(): $Collection<string>;
        static testClassName(): $TestClassNameArgument;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getTestClassName(arg0: $CommandContext<$CommandSourceStack>, arg1: string): string;
        parse<S>(arg0: $StringReader, arg1: S): string;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $TestReporter {
    }
    export interface $TestReporter {
        finish(): void;
        onTestFailed(arg0: $GameTestInfo): void;
        onTestSuccess(arg0: $GameTestInfo): void;
    }
    export class $ReportGameListener implements $GameTestListener {
    }
    export class $TestFinder$Builder<T> {
        nearest(arg0: $CommandContext<$CommandSourceStack>): T;
        radius(arg0: $CommandContext<$CommandSourceStack>, arg1: number): T;
        failedTests(arg0: $CommandContext<$CommandSourceStack>, arg1: boolean): T;
        failedTests(arg0: $CommandContext<$CommandSourceStack>): T;
        locateByName(arg0: $CommandContext<$CommandSourceStack>, arg1: string): T;
        allTestsInClass(arg0: $CommandContext<$CommandSourceStack>, arg1: string): T;
        createMultipleCopies(arg0: number): $TestFinder$Builder<T>;
        allNearby(arg0: $CommandContext<$CommandSourceStack>): T;
        lookedAt(arg0: $CommandContext<$CommandSourceStack>): T;
        allTests(arg0: $CommandContext<$CommandSourceStack>): T;
        byArgument(arg0: $CommandContext<$CommandSourceStack>, arg1: string): T;
        constructor(arg0: $Function_<$TestFinder<T>, T>);
    }
    export class $GameTestListener {
    }
    export interface $GameTestListener {
        testAddedForRerun(arg0: $GameTestInfo, arg1: $GameTestInfo, arg2: $GameTestRunner): void;
        testStructureLoaded(arg0: $GameTestInfo): void;
        testFailed(arg0: $GameTestInfo, arg1: $GameTestRunner): void;
        testPassed(arg0: $GameTestInfo, arg1: $GameTestRunner): void;
    }
    export class $TestFunction extends $Record {
        run(arg0: $GameTestHelper): void;
        "function"(): $Consumer<$GameTestHelper>;
        required(): boolean;
        rotation(): $Rotation;
        testName(): string;
        maxAttempts(): number;
        structureName(): string;
        maxTicks(): number;
        batchName(): string;
        requiredSuccesses(): number;
        isFlaky(): boolean;
        skyAccess(): boolean;
        manualOnly(): boolean;
        setupTicks(): number;
        constructor(arg0: string, arg1: string, arg2: string, arg3: $Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: boolean, arg11: $Consumer_<$GameTestHelper>);
        constructor(arg0: string, arg1: string, arg2: string, arg3: $Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Consumer_<$GameTestHelper>);
        constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: boolean, arg6: $Consumer_<$GameTestHelper>);
        get flaky(): boolean;
    }
    export class $GameTestInfo {
        isDone(): boolean;
        fail(arg0: $Throwable): void;
        tick(arg0: $GameTestRunner): void;
        getLevel(): $ServerLevel;
        getListeners(): $Stream<$GameTestListener>;
        isOptional(): boolean;
        getError(): $Throwable;
        createSequence(): $GameTestSequence;
        addListener(arg0: $GameTestListener): void;
        isRequired(): boolean;
        getRotation(): $Rotation;
        placeStructure(): $GameTestInfo;
        hasFailed(): boolean;
        getStructureBlockPos(): $BlockPos;
        getTick(): number;
        handler$hdi000$sable$removeSublevels(arg0: $CallbackInfo, arg1: $AABB_): void;
        maxAttempts(): number;
        getStructureName(): string;
        getTestFunction(): $TestFunction;
        setRunAtTickTime(arg0: number, arg1: $Runnable_): void;
        getStructureBounds(): $AABB;
        getTimeoutTicks(): number;
        retryOptions(): $RetryOptions;
        hasSucceeded(): boolean;
        startExecution(arg0: number): $GameTestInfo;
        getTestName(): string;
        setNorthWestCorner(arg0: $BlockPos_): void;
        requiredSuccesses(): number;
        getStructureBlockEntity(): $StructureBlockEntity;
        setStructureBlockPos(arg0: $BlockPos_): void;
        prepareTestStructure(): $GameTestInfo;
        getRunTime(): number;
        copyReset(): $GameTestInfo;
        hasStarted(): boolean;
        isFlaky(): boolean;
        succeed(): void;
        sequences: $Collection<$GameTestSequence>;
        constructor(arg0: $TestFunction_, arg1: $Rotation_, arg2: $ServerLevel, arg3: $RetryOptions_);
        get done(): boolean;
        get level(): $ServerLevel;
        get listeners(): $Stream<$GameTestListener>;
        get optional(): boolean;
        get error(): $Throwable;
        get required(): boolean;
        get rotation(): $Rotation;
        get structureName(): string;
        get testFunction(): $TestFunction;
        get structureBounds(): $AABB;
        get timeoutTicks(): number;
        get testName(): string;
        set northWestCorner(value: $BlockPos_);
        get structureBlockEntity(): $StructureBlockEntity;
        get runTime(): number;
        get flaky(): boolean;
    }
    export class $TestFunctionArgument implements $ArgumentType<$TestFunction> {
        parse(arg0: $StringReader): $TestFunction;
        getExamples(): $Collection<string>;
        static suggestTestFunction<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static testFunctionArgument(): $TestFunctionArgument;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getTestFunction(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $TestFunction;
        parse<S>(arg0: $StringReader, arg1: S): $TestFunction;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $GameTestGenerator implements $Annotation {
    }
    export class $StructureGridSpawner implements $GameTestRunner$StructureSpawner {
        onBatchStart(arg0: $ServerLevel): void;
        spawnStructure(arg0: $GameTestInfo): ($GameTestInfo) | undefined;
        constructor(arg0: $BlockPos_, arg1: number, arg2: boolean);
    }
    export class $TestCommand {
        static register(arg0: $CommandDispatcher<$CommandSourceStack>): void;
        static say(arg0: $CommandSourceStack, arg1: string): void;
        static say(arg0: $ServerLevel, arg1: string, arg2: $ChatFormatting_): void;
        static toGameTestInfo(arg0: $CommandSourceStack, arg1: $RetryOptions_, arg2: $TestFunctionFinder_, arg3: number): $Stream<$GameTestInfo>;
        static toGameTestInfos(arg0: $CommandSourceStack, arg1: $RetryOptions_, arg2: $StructureBlockPosFinder_): $Stream<$GameTestInfo>;
        static createTestPositionAround(arg0: $CommandSourceStack): $BlockPos;
        static saveAndExportTestStructure(arg0: $CommandSourceStack, arg1: $StructureBlockEntity): number;
        static trackAndStartRunner(arg0: $CommandSourceStack, arg1: $ServerLevel, arg2: $GameTestRunner): number;
        static stopTests(): number;
        static STRUCTURE_BLOCK_NEARBY_SEARCH_RADIUS: number;
        static STRUCTURE_BLOCK_FULL_SEARCH_RADIUS: number;
        constructor();
    }
    export class $GameTestRegistry {
        /**
         * @deprecated
         */
        static register(arg0: $Method): void;
        /**
         * @deprecated
         */
        static register(arg0: $Method, arg1: $Set_<string>): void;
        /**
         * @deprecated
         */
        static register(arg0: $Class<never>): void;
        static getAllTestFunctions(): $Collection<$TestFunction>;
        static getAllTestClassNames(): $Collection<string>;
        static getBeforeBatchFunction(arg0: string): $Consumer<$ServerLevel>;
        static getAfterBatchFunction(arg0: string): $Consumer<$ServerLevel>;
        static getTestFunction(arg0: string): $TestFunction;
        static isTestClass(arg0: string): boolean;
        static findTestFunction(arg0: string): ($TestFunction) | undefined;
        static rememberFailedTest(arg0: $TestFunction_): void;
        static forgetFailedTests(): void;
        static getLastFailedTests(): $Stream<$TestFunction>;
        static getTestFunctionsForClassName(arg0: string): $Stream<$TestFunction>;
        constructor();
        static get allTestFunctions(): $Collection<$TestFunction>;
        static get allTestClassNames(): $Collection<string>;
        static get lastFailedTests(): $Stream<$TestFunction>;
    }
    export class $GameTestBatch extends $Record {
        name(): string;
        beforeBatchFunction(): $Consumer<$ServerLevel>;
        afterBatchFunction(): $Consumer<$ServerLevel>;
        gameTestInfos(): $Collection<$GameTestInfo>;
        static DEFAULT_BATCH_NAME: string;
        constructor(arg0: string, arg1: $Collection_<$GameTestInfo>, arg2: $Consumer_<$ServerLevel>, arg3: $Consumer_<$ServerLevel>);
    }
    export class $GameTestHelper implements $GameTestHelperAccessor {
        getBounds(): $AABB;
        fail(arg0: string, arg1: $Entity): void;
        fail(arg0: string, arg1: $BlockPos_): void;
        fail(arg0: string): void;
        getLevel(): $ServerLevel;
        spawn<E extends $Entity>(arg0: $EntityType_<E>, arg1: $BlockPos_): E;
        spawn<E extends $Entity>(arg0: $EntityType_<E>, arg1: $Vec3_): E;
        spawn<E extends $Entity>(arg0: $EntityType_<E>, arg1: number, arg2: number, arg3: number): E;
        spawn<E extends $Entity>(arg0: $EntityType_<E>, arg1: number, arg2: number, arg3: number): E;
        getEntities<T extends $Entity>(arg0: $EntityType_<T>, arg1: $BlockPos_, arg2: number): $List<T>;
        getEntities<T extends $Entity>(arg0: $EntityType_<T>): $List<T>;
        moveTo(arg0: $Mob, arg1: number, arg2: number, arg3: number): void;
        relativePos(arg0: $BlockPos_): $BlockPos;
        setBlock(arg0: number, arg1: number, arg2: number, arg3: $Block_): void;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_): void;
        setBlock(arg0: $BlockPos_, arg1: $Block_): void;
        setBlock(arg0: number, arg1: number, arg2: number, arg3: $BlockState_): void;
        spawnItem(arg0: $Item_, arg1: $BlockPos_): $ItemEntity;
        spawnItem(arg0: $Item_, arg1: $Vec3_): $ItemEntity;
        spawnItem(arg0: $Item_, arg1: number, arg2: number, arg3: number): $ItemEntity;
        randomTick(arg0: $BlockPos_): void;
        assertTrue(arg0: boolean, arg1: string): void;
        setBiome(arg0: $ResourceKey_<$Biome>): void;
        useBlock(arg0: $BlockPos_): void;
        useBlock(arg0: $BlockPos_, arg1: $Player, arg2: $BlockHitResult): void;
        useBlock(arg0: $BlockPos_, arg1: $Player): void;
        spawnWithNoFreeWill<E extends $Mob>(arg0: $EntityType_<E>, arg1: number, arg2: number, arg3: number): E;
        spawnWithNoFreeWill<E extends $Mob>(arg0: $EntityType_<E>, arg1: $Vec3_): E;
        spawnWithNoFreeWill<E extends $Mob>(arg0: $EntityType_<E>, arg1: number, arg2: number, arg3: number): E;
        spawnWithNoFreeWill<E extends $Mob>(arg0: $EntityType_<E>, arg1: $BlockPos_): E;
        assertEntityTouching(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number): void;
        assertEntityProperty<E extends $Entity>(arg0: E, arg1: $Predicate_<E>, arg2: string): void;
        assertEntityProperty<E extends $Entity, T>(arg0: E, arg1: $Function_<E, T>, arg2: string, arg3: T): void;
        killAllEntitiesOfClass(arg0: $Class<any>): void;
        assertItemEntityCountIs(arg0: $Item_, arg1: $BlockPos_, arg2: number, arg3: number): void;
        assertSameBlockState(arg0: $BlockPos_, arg1: $BlockPos_): void;
        succeedWhenEntityPresent(arg0: $EntityType_<never>, arg1: $BlockPos_): void;
        succeedWhenEntityPresent(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number): void;
        forEveryBlockInStructure(arg0: $Consumer_<$BlockPos>): void;
        assertItemEntityNotPresent(arg0: $Item_, arg1: $BlockPos_, arg2: number): void;
        assertItemEntityNotPresent(arg0: $Item_): void;
        assertEntityIsHolding<E extends $LivingEntity>(arg0: $BlockPos_, arg1: $EntityType_<E>, arg2: $Item_): void;
        assertRedstoneSignal(arg0: $BlockPos_, arg1: $Direction_, arg2: $IntPredicate_, arg3: $Supplier_<string>): void;
        succeedWhenEntityData<E extends $Entity, T>(arg0: $BlockPos_, arg1: $EntityType_<E>, arg2: $Function_<E, T>, arg3: T): void;
        assertSameBlockStates(arg0: $BoundingBox, arg1: $BlockPos_): void;
        assertEntityPosition(arg0: $Entity, arg1: $AABB_, arg2: string): void;
        assertEntityNotTouching(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number): void;
        succeedWhenBlockPresent(arg0: $Block_, arg1: number, arg2: number, arg3: number): void;
        succeedWhenBlockPresent(arg0: $Block_, arg1: $BlockPos_): void;
        assertBlockEntityData<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $Predicate_<T>, arg2: $Supplier_<string>): void;
        getTick(): number;
        startSequence(): $GameTestSequence;
        /**
         * @deprecated
         */
        makeMockServerPlayerInLevel(): $ServerPlayer;
        assertEntityInstancePresent(arg0: $Entity, arg1: $BlockPos_): void;
        assertEntityInstancePresent(arg0: $Entity, arg1: number, arg2: number, arg3: number): void;
        assertEntityInventoryContains<E extends $Entity>(arg0: $BlockPos_, arg1: $EntityType_<E>, arg2: $Item_): void;
        assertLivingEntityHasMobEffect(arg0: $LivingEntity, arg1: $Holder_<$MobEffect>, arg2: number): void;
        succeedWhenEntityNotPresent(arg0: $EntityType_<never>, arg1: $BlockPos_): void;
        succeedWhenEntityNotPresent(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number): void;
        assertAtTickTimeContainerContains(arg0: number, arg1: $BlockPos_, arg2: $Item_): void;
        assertAtTickTimeContainerEmpty(arg0: number, arg1: $BlockPos_): void;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_): T;
        destroyBlock(arg0: $BlockPos_): void;
        tickPrecipitation(): void;
        tickPrecipitation(arg0: $BlockPos_): void;
        findEntities<E extends $Entity>(arg0: $EntityType_<E>, arg1: number, arg2: number, arg3: number, arg4: number): $List<E>;
        findEntities<E extends $Entity>(arg0: $EntityType_<E>, arg1: $Vec3_, arg2: number): $List<E>;
        setDayTime(arg0: number): void;
        placeAt(arg0: $Player, arg1: $ItemStack_, arg2: $BlockPos_, arg3: $Direction_): void;
        absolutePos(arg0: $BlockPos_): $BlockPos;
        pressButton(arg0: number, arg1: number, arg2: number): void;
        pressButton(arg0: $BlockPos_): void;
        runAtTickTime(arg0: number, arg1: $Runnable_): void;
        succeedWhen(arg0: $Runnable_): void;
        assertBlockPresent(arg0: $Block_, arg1: number, arg2: number, arg3: number): void;
        assertBlockPresent(arg0: $Block_, arg1: $BlockPos_): void;
        assertBlockState(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>, arg2: $Supplier_<string>): void;
        assertFalse(arg0: boolean, arg1: string): void;
        runAfterDelay(arg0: number, arg1: $Runnable_): void;
        assertItemEntityPresent(arg0: $Item_): void;
        assertItemEntityPresent(arg0: $Item_, arg1: $BlockPos_, arg2: number): void;
        assertEntityNotPresent(arg0: $EntityType_<never>, arg1: $Vec3_, arg2: $Vec3_): void;
        assertEntityNotPresent(arg0: $EntityType_<never>): void;
        assertEntityNotPresent(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number): void;
        assertEntityNotPresent(arg0: $EntityType_<never>, arg1: $BlockPos_): void;
        assertContainerContains(arg0: $BlockPos_, arg1: $Item_): void;
        assertContainerEmpty(arg0: $BlockPos_): void;
        assertBlockProperty<T extends $Comparable<T>>(arg0: $BlockPos_, arg1: $Property<T>, arg2: $Predicate_<T>, arg3: string): void;
        assertBlockProperty<T extends $Comparable<T>>(arg0: $BlockPos_, arg1: $Property<T>, arg2: T): void;
        assertEntitiesPresent(arg0: $EntityType_<never>, arg1: $BlockPos_, arg2: number, arg3: number): void;
        assertEntitiesPresent(arg0: $EntityType_<never>, arg1: number): void;
        assertEntityPresent(arg0: $EntityType_<never>, arg1: $BlockPos_, arg2: number): void;
        assertEntityPresent(arg0: $EntityType_<never>): void;
        assertEntityPresent(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number): void;
        assertEntityPresent(arg0: $EntityType_<never>, arg1: $BlockPos_): void;
        assertEntityPresent(arg0: $EntityType_<never>, arg1: $Vec3_, arg2: $Vec3_): void;
        assertBlockNotPresent(arg0: $Block_, arg1: $BlockPos_): void;
        assertBlockNotPresent(arg0: $Block_, arg1: number, arg2: number, arg3: number): void;
        pullLever(arg0: number, arg1: number, arg2: number): void;
        pullLever(arg0: $BlockPos_): void;
        makeMockPlayer(arg0: $GameType_): $Player;
        assertValueEqual<N>(arg0: N, arg1: N, arg2: string): void;
        findClosestEntity<E extends $Entity>(arg0: $EntityType_<E>, arg1: number, arg2: number, arg3: number, arg4: number): E;
        findOneEntity<E extends $Entity>(arg0: $EntityType_<E>): E;
        makeAboutToDrown(arg0: $LivingEntity): $LivingEntity;
        absoluteVec(arg0: $Vec3_): $Vec3;
        withLowHealth(arg0: $LivingEntity): $LivingEntity;
        pulseRedstone(arg0: $BlockPos_, arg1: number): void;
        assertBlock(arg0: $BlockPos_, arg1: $Predicate_<$Block>, arg2: string): void;
        assertBlock(arg0: $BlockPos_, arg1: $Predicate_<$Block>, arg2: $Supplier_<string>): void;
        assertEntityData<E extends $Entity, T>(arg0: $BlockPos_, arg1: $EntityType_<E>, arg2: $Function_<E, T>, arg3: T): void;
        succeedOnTickWhen(arg0: number, arg1: $Runnable_): void;
        getTestRotation(): $Rotation;
        killAllEntities(): void;
        relativeVec(arg0: $Vec3_): $Vec3;
        walkTo(arg0: $Mob, arg1: $BlockPos_, arg2: number): $GameTestSequence;
        setNight(): void;
        succeed(): void;
        succeedIf(arg0: $Runnable_): void;
        failIfEver(arg0: $Runnable_): void;
        failIf(arg0: $Runnable_): void;
        onEachTick(arg0: $Runnable_): void;
        getTestInfo(): $GameTestInfo;
        getFinalCheckAdded(): boolean;
        setFinalCheckAdded(arg0: boolean): void;
        testInfo: $GameTestInfo;
        constructor(arg0: $GameTestInfo);
        get bounds(): $AABB;
        get level(): $ServerLevel;
        set biome(value: $ResourceKey_<$Biome>);
        get tick(): number;
        set dayTime(value: number);
        get testRotation(): $Rotation;
    }
    export class $LogTestReporter implements $TestReporter {
        onTestFailed(arg0: $GameTestInfo): void;
        onTestSuccess(arg0: $GameTestInfo): void;
        finish(): void;
        constructor();
    }
    export class $BeforeBatch implements $Annotation {
        batch(): string;
    }
    export class $GameTestAssertException extends $RuntimeException {
        constructor(arg0: string);
    }
    export class $GameTestTicker {
        clear(): void;
        add(arg0: $GameTestInfo): void;
        tick(): void;
        setRunner(arg0: $GameTestRunner): void;
        static SINGLETON: $GameTestTicker;
        set runner(value: $GameTestRunner);
    }
    export class $TestFunctionFinder {
    }
    export interface $TestFunctionFinder {
        findTestFunctions(): $Stream<$TestFunction>;
    }
    /**
     * Values that may be interpreted as {@link $TestFunctionFinder}.
     */
    export type $TestFunctionFinder_ = (() => $Stream<$TestFunction_>);
    export class $GameTestSequence {
        thenExecuteAfter(arg0: number, arg1: $Runnable_): $GameTestSequence;
        thenWaitUntil(arg0: $Runnable_): $GameTestSequence;
        thenWaitUntil(arg0: number, arg1: $Runnable_): $GameTestSequence;
        thenSucceed(): void;
        tickAndContinue(arg0: number): void;
        thenTrigger(): $GameTestSequence$Condition;
        thenExecute(arg0: $Runnable_): $GameTestSequence;
        thenExecuteFor(arg0: number, arg1: $Runnable_): $GameTestSequence;
        tickAndFailIfNotComplete(arg0: number): void;
        thenFail(arg0: $Supplier_<$Exception>): void;
        thenIdle(arg0: number): $GameTestSequence;
        parent: $GameTestInfo;
        constructor(arg0: $GameTestInfo);
    }
    export class $GameTestBatchFactory {
        static fromTestFunction(arg0: $Collection_<$TestFunction_>, arg1: $ServerLevel): $Collection<$GameTestBatch>;
        static toGameTestInfo(arg0: $TestFunction_, arg1: number, arg2: $ServerLevel): $GameTestInfo;
        static toGameTestBatch(arg0: $Collection_<$GameTestInfo>, arg1: string, arg2: number): $GameTestBatch;
        static fromGameTestInfo(): $GameTestRunner$GameTestBatcher;
        static fromGameTestInfo(arg0: number): $GameTestRunner$GameTestBatcher;
        constructor();
    }
    export class $ExhaustedAttemptsException extends $Throwable {
    }
    export class $GameTestRunner {
        start(): void;
        stop(): void;
        addListener(arg0: $GameTestBatchListener): void;
        static clearMarkers(arg0: $ServerLevel): void;
        getTestInfos(): $List<$GameTestInfo>;
        rerunTest(arg0: $GameTestInfo): void;
        runBatch(arg0: number): void;
        level: $ServerLevel;
        batchListeners: $List<$GameTestBatchListener>;
        static DEFAULT_TESTS_PER_ROW: number;
        currentBatch: $GameTestBatch;
        haltOnError: boolean;
        constructor(arg0: $GameTestRunner$GameTestBatcher_, arg1: $Collection_<$GameTestBatch_>, arg2: $ServerLevel, arg3: $GameTestTicker, arg4: $GameTestRunner$StructureSpawner_, arg5: $GameTestRunner$StructureSpawner_, arg6: boolean);
        get testInfos(): $List<$GameTestInfo>;
    }
    export class $GameTestRunner$GameTestBatcher {
    }
    export interface $GameTestRunner$GameTestBatcher {
        batch(arg0: $Collection_<$GameTestInfo>): $Collection<$GameTestBatch>;
    }
    /**
     * Values that may be interpreted as {@link $GameTestRunner$GameTestBatcher}.
     */
    export type $GameTestRunner$GameTestBatcher_ = ((arg0: $Collection<$GameTestInfo>) => $Collection_<$GameTestBatch_>);
    export class $TestCommand$Runner {
        run(arg0: number): number;
        run(arg0: number, arg1: number): number;
        run(arg0: $RetryOptions_, arg1: number, arg2: number): number;
        run(arg0: $RetryOptions_, arg1: number): number;
        run(arg0: $RetryOptions_): number;
        run(): number;
        reset(): number;
        clear(): number;
        verify(): number;
        "export"(): number;
        locate(): number;
        constructor(arg0: $TestFinder<$TestCommand$Runner>);
    }
    export class $GameTestSequence$Condition {
        trigger(arg0: number): void;
        assertTriggeredThisTick(): void;
        this$0: $GameTestSequence;
        constructor(arg0: $GameTestSequence);
    }
}
