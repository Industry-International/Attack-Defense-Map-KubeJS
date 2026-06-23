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
        batcher(batcher: $GameTestRunner$GameTestBatcher_): $GameTestRunner$Builder;
        static fromInfo(batches: $Collection_<$GameTestInfo>, level: $ServerLevel): $GameTestRunner$Builder;
        haltOnError(haltOnError: boolean): $GameTestRunner$Builder;
        static fromBatches(batches: $Collection_<$GameTestBatch_>, level: $ServerLevel): $GameTestRunner$Builder;
        existingStructureSpawner(existingStructureSpawner: $StructureGridSpawner): $GameTestRunner$Builder;
        newStructureSpawner(newStructureSpawner: $GameTestRunner$StructureSpawner_): $GameTestRunner$Builder;
    }
    /**
     * Annotate a method with this annotation in order to have it run after the specified `#batch()`.
     */
    export class $AfterBatch implements $Annotation {
        batch(): string;
    }
    export class $GlobalTestReporter {
        static finish(): void;
        static replaceWith(testReporter: $TestReporter): void;
        static onTestSuccess(testInfo: $GameTestInfo): void;
        static onTestFailed(testInfo: $GameTestInfo): void;
        constructor();
    }
    export class $MultipleTestTracker {
        remove(testInfo: $GameTestInfo): void;
        isDone(): boolean;
        addListener(testListener: $GameTestListener): void;
        getTotalCount(): number;
        addFailureListener(onFail: $Consumer_<$GameTestInfo>): void;
        getFailedOptionalCount(): number;
        getFailedRequiredCount(): number;
        addTestToTrack(testInfo: $GameTestInfo): void;
        getProgressBar(): string;
        getFailedRequired(): $Collection<$GameTestInfo>;
        getFailedOptional(): $Collection<$GameTestInfo>;
        getDoneCount(): number;
        hasFailedRequired(): boolean;
        hasFailedOptional(): boolean;
        constructor();
        constructor(testInfos: $Collection_<$GameTestInfo>);
        get done(): boolean;
        get totalCount(): number;
        get failedOptionalCount(): number;
        get failedRequiredCount(): number;
        get progressBar(): string;
        get failedRequired(): $Collection<$GameTestInfo>;
        get failedOptional(): $Collection<$GameTestInfo>;
        get doneCount(): number;
    }
    export class $StructureUtils {
        static encaseStructure(bounds: $AABB_, level: $ServerLevel, placeBarriers: boolean): void;
        static getStructureOrigin(structureBlockEntity: $StructureBlockEntity): $BlockPos;
        static createNewEmptyStructureBlock(structureName: string, pos: $BlockPos_, size: $Vec3i, rotation: $Rotation_, serverLevel: $ServerLevel): void;
        static findStructureBlockContainingPos(pos: $BlockPos_, radius: number, level: $ServerLevel): ($BlockPos) | undefined;
        static getRotationForRotationSteps(rotationSteps: number): $Rotation;
        static getStructureBounds(structureBlockEntity: $StructureBlockEntity): $AABB;
        static removeBarriers(bounds: $AABB_, level: $ServerLevel): void;
        static addCommandBlockAndButtonToStartTest(structureBlockPos: $BlockPos_, offset: $BlockPos_, rotation: $Rotation_, serverLevel: $ServerLevel): void;
        static getStructureBoundingBox(pos: $BlockPos_, offset: $Vec3i, rotation: $Rotation_): $BoundingBox;
        static getStructureBoundingBox(structureBlockEntity: $StructureBlockEntity): $BoundingBox;
        static prepareTestStructure(gameTestInfo: $GameTestInfo, pos: $BlockPos_, rotation: $Rotation_, level: $ServerLevel): $StructureBlockEntity;
        static clearSpaceForStructure(boundingBox: $BoundingBox, level: $ServerLevel): void;
        static getRotationStepsForRotation(rotation: $Rotation_): number;
        static findStructureByTestFunction(pos: $BlockPos_, radius: number, level: $ServerLevel, testName: string): $Stream<$BlockPos>;
        static findNearestStructureBlock(pos: $BlockPos_, radius: number, level: $ServerLevel): ($BlockPos) | undefined;
        static findStructureBlocks(pos: $BlockPos_, radius: number, level: $ServerLevel): $Stream<$BlockPos>;
        static getTransformedFarCorner(pos: $BlockPos_, offset: $Vec3i, rotation: $Rotation_): $BlockPos;
        static lookedAtStructureBlockPos(pos: $BlockPos_, entity: $Entity, level: $ServerLevel): $Stream<$BlockPos>;
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
        getAbsolutePos(): $BlockPos;
        getRelativePos(): $BlockPos;
        getMessageToShowAtBlock(): string;
        constructor(exceptionMessage: string, absolutePos: $BlockPos_, relativePos: $BlockPos_, tick: number);
        get absolutePos(): $BlockPos;
        get relativePos(): $BlockPos;
        get messageToShowAtBlock(): string;
    }
    export class $TestCommand$TestBatchSummaryDisplayer extends $Record implements $GameTestBatchListener {
    }
    export class $GameTestBatchListener {
    }
    export interface $GameTestBatchListener {
        testBatchFinished(batch: $GameTestBatch_): void;
        testBatchStarting(batch: $GameTestBatch_): void;
    }
    export class $RetryOptions extends $Record {
        hasRetries(): boolean;
        static noRetries(): $RetryOptions;
        numberOfTries(): number;
        hasTriesLeft(attempts: number, successes: number): boolean;
        haltOnFailure(): boolean;
        unlimitedTries(): boolean;
        constructor(arg0: number, arg1: boolean);
    }
    export class $TestFinder<T> implements $StructureBlockPosFinder, $TestFunctionFinder {
        get(): T;
        source(): $CommandSourceStack;
        findTestFunctions(): $Stream<$TestFunction>;
        findStructureBlockPos(): $Stream<$BlockPos>;
        static NO_STRUCTURES: $StructureBlockPosFinder;
        static NO_FUNCTIONS: $TestFunctionFinder;
        constructor(source: $CommandSourceStack, contextProvider: $Function_<$TestFinder<T>, T>, testFunctionFinder: $TestFunctionFinder_, structureBlockPosFinder: $StructureBlockPosFinder_);
    }
    export class $JUnitLikeTestReporter implements $TestReporter {
        save(destination: $File_): void;
        finish(): void;
        onTestSuccess(testInfo: $GameTestInfo): void;
        onTestFailed(testInfo: $GameTestInfo): void;
        constructor(destination: $File_);
    }
    export class $GameTestServer extends $MinecraftServer {
        static create(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, testBatches: $Collection_<$TestFunction_>, spawnPos: $BlockPos_): $GameTestServer;
        handler$idn000$fabric_gametest_api_v1$isDedicated(arg0: $CallbackInfoReturnable<any>): void;
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
        onBatchStart(level: $ServerLevel): void;
        spawnStructure(gameTestInfo: $GameTestInfo): ($GameTestInfo) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $GameTestRunner$StructureSpawner}.
     */
    export type $GameTestRunner$StructureSpawner_ = ((arg0: $GameTestInfo) => ($GameTestInfo) | undefined);
    export class $GameTest implements $Annotation {
        batch(): string;
        required(): boolean;
        template(): string;
        attempts(): number;
        templateNamespace(): string;
        timeoutTicks(): number;
        rotationSteps(): number;
        requiredSuccesses(): number;
        skyAccess(): boolean;
        manualOnly(): boolean;
        setupTicks(): number;
    }
    export class $GameTestTimeoutException extends $RuntimeException {
        constructor(exceptionMessage: string);
    }
    export class $GameTestEvent {
    }
    export class $TestCommand$TestSummaryDisplayer extends $Record implements $GameTestListener {
        level(): $ServerLevel;
        tracker(): $MultipleTestTracker;
        testStructureLoaded(testInfo: $GameTestInfo): void;
        testAddedForRerun(oldTest: $GameTestInfo, newTest: $GameTestInfo, runner: $GameTestRunner): void;
        testPassed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testFailed(test: $GameTestInfo, runner: $GameTestRunner): void;
        constructor(level: $ServerLevel, tracker: $MultipleTestTracker);
    }
    export class $TestClassNameArgument implements $ArgumentType<string> {
        parse(reader: $StringReader): string;
        static testClassName(): $TestClassNameArgument;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getTestClassName(context: $CommandContext<$CommandSourceStack>, argument: string): string;
        parse<S>(arg0: $StringReader, arg1: S): string;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $TestReporter {
    }
    export interface $TestReporter {
        finish(): void;
        onTestSuccess(testInfo: $GameTestInfo): void;
        onTestFailed(testInfo: $GameTestInfo): void;
    }
    export class $ReportGameListener implements $GameTestListener {
    }
    export class $TestFinder$Builder<T> {
        radius(context: $CommandContext<$CommandSourceStack>, radius: number): T;
        nearest(context: $CommandContext<$CommandSourceStack>): T;
        allTests(context: $CommandContext<$CommandSourceStack>): T;
        lookedAt(context: $CommandContext<$CommandSourceStack>): T;
        allNearby(context: $CommandContext<$CommandSourceStack>): T;
        byArgument(context: $CommandContext<$CommandSourceStack>, className: string): T;
        failedTests(context: $CommandContext<$CommandSourceStack>): T;
        failedTests(context: $CommandContext<$CommandSourceStack>, onlyRequired: boolean): T;
        allTestsInClass(context: $CommandContext<$CommandSourceStack>, className: string): T;
        locateByName(context: $CommandContext<$CommandSourceStack>, className: string): T;
        createMultipleCopies(count: number): $TestFinder$Builder<T>;
        constructor(contextProvider: $Function_<$TestFinder<T>, T>);
    }
    export class $GameTestListener {
    }
    export interface $GameTestListener {
        testStructureLoaded(testInfo: $GameTestInfo): void;
        testAddedForRerun(oldTest: $GameTestInfo, newTest: $GameTestInfo, runner: $GameTestRunner): void;
        testPassed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testFailed(test: $GameTestInfo, runner: $GameTestRunner): void;
    }
    export class $TestFunction extends $Record {
        run(gameTestHelper: $GameTestHelper): void;
        "function"(): $Consumer<$GameTestHelper>;
        required(): boolean;
        isFlaky(): boolean;
        testName(): string;
        rotation(): $Rotation;
        maxAttempts(): number;
        structureName(): string;
        maxTicks(): number;
        batchName(): string;
        requiredSuccesses(): number;
        skyAccess(): boolean;
        manualOnly(): boolean;
        setupTicks(): number;
        constructor(arg0: string, arg1: string, arg2: string, arg3: $Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: boolean, arg11: $Consumer_<$GameTestHelper>);
        constructor(batchName: string, testName: string, structureName: string, rotation: $Rotation_, maxTicks: number, setupTicks: number, arg6: boolean, required: $Consumer_<$GameTestHelper>);
        constructor(batchName: string, testName: string, structureName: string, maxTicks: number, setupTicks: number, arg5: boolean, required: $Consumer_<$GameTestHelper>);
        get flaky(): boolean;
    }
    export class $GameTestInfo {
        isDone(): boolean;
        fail(error: $Throwable): void;
        tick(runner: $GameTestRunner): void;
        getLevel(): $ServerLevel;
        addListener(listener: $GameTestListener): void;
        createSequence(): $GameTestSequence;
        getListeners(): $Stream<$GameTestListener>;
        isRequired(): boolean;
        isFlaky(): boolean;
        getError(): $Throwable;
        isOptional(): boolean;
        placeStructure(): $GameTestInfo;
        getRotation(): $Rotation;
        getTick(): number;
        getTestFunction(): $TestFunction;
        hasFailed(): boolean;
        maxAttempts(): number;
        getStructureName(): string;
        setRunAtTickTime(tickTime: number, arg1: $Runnable_): void;
        getTimeoutTicks(): number;
        setNorthWestCorner(northWestCorner: $BlockPos_): void;
        startExecution(delay: number): $GameTestInfo;
        getStructureBounds(): $AABB;
        getTestName(): string;
        copyReset(): $GameTestInfo;
        handler$gop000$sable$removeSublevels(arg0: $CallbackInfo, arg1: $AABB_): void;
        getStructureBlockEntity(): $StructureBlockEntity;
        prepareTestStructure(): $GameTestInfo;
        setStructureBlockPos(northWestCorner: $BlockPos_): void;
        getStructureBlockPos(): $BlockPos;
        retryOptions(): $RetryOptions;
        getRunTime(): number;
        succeed(): void;
        hasSucceeded(): boolean;
        requiredSuccesses(): number;
        hasStarted(): boolean;
        sequences: $Collection<$GameTestSequence>;
        constructor(testFunction: $TestFunction_, rotation: $Rotation_, level: $ServerLevel, retryOptions: $RetryOptions_);
        get done(): boolean;
        get level(): $ServerLevel;
        get listeners(): $Stream<$GameTestListener>;
        get required(): boolean;
        get flaky(): boolean;
        get error(): $Throwable;
        get optional(): boolean;
        get rotation(): $Rotation;
        get testFunction(): $TestFunction;
        get structureName(): string;
        get timeoutTicks(): number;
        set northWestCorner(value: $BlockPos_);
        get structureBounds(): $AABB;
        get testName(): string;
        get structureBlockEntity(): $StructureBlockEntity;
        get runTime(): number;
    }
    export class $TestFunctionArgument implements $ArgumentType<$TestFunction> {
        static suggestTestFunction<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(reader: $StringReader): $TestFunction;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getTestFunction(context: $CommandContext<$CommandSourceStack>, argument: string): $TestFunction;
        static testFunctionArgument(): $TestFunctionArgument;
        parse<S>(arg0: $StringReader, arg1: S): $TestFunction;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $GameTestGenerator implements $Annotation {
    }
    export class $StructureGridSpawner implements $GameTestRunner$StructureSpawner {
        onBatchStart(level: $ServerLevel): void;
        spawnStructure(gameTestInfo: $GameTestInfo): ($GameTestInfo) | undefined;
        constructor(northTestNorthWestCorner: $BlockPos_, testsPerRow: number, clearOnBatch: boolean);
    }
    export class $TestCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static say(source: $CommandSourceStack, message: string): void;
        static say(serverLevel: $ServerLevel, message: string, formatting: $ChatFormatting_): void;
        static stopTests(): number;
        static toGameTestInfo(source: $CommandSourceStack, retryOptions: $RetryOptions_, testFunctionFinder: $TestFunctionFinder_, rotationSteps: number): $Stream<$GameTestInfo>;
        static toGameTestInfos(source: $CommandSourceStack, retryOptions: $RetryOptions_, structureBlockPosFinder: $StructureBlockPosFinder_): $Stream<$GameTestInfo>;
        static createTestPositionAround(source: $CommandSourceStack): $BlockPos;
        static saveAndExportTestStructure(source: $CommandSourceStack, structureBlockEntity: $StructureBlockEntity): number;
        static trackAndStartRunner(source: $CommandSourceStack, level: $ServerLevel, runner: $GameTestRunner): number;
        static STRUCTURE_BLOCK_NEARBY_SEARCH_RADIUS: number;
        static STRUCTURE_BLOCK_FULL_SEARCH_RADIUS: number;
        constructor();
    }
    export class $GameTestRegistry {
        static getAllTestFunctions(): $Collection<$TestFunction>;
        static getAllTestClassNames(): $Collection<string>;
        /**
         * @deprecated
         */
        static register(testClass: $Class<never>): void;
        /**
         * @deprecated
         */
        static register(testMethod: $Method): void;
        /**
         * @deprecated
         */
        static register(arg0: $Method, arg1: $Set_<string>): void;
        static getTestFunction(testName: string): $TestFunction;
        static isTestClass(className: string): boolean;
        static findTestFunction(testName: string): ($TestFunction) | undefined;
        static rememberFailedTest(testFunction: $TestFunction_): void;
        static getTestFunctionsForClassName(className: string): $Stream<$TestFunction>;
        static getBeforeBatchFunction(functionName: string): $Consumer<$ServerLevel>;
        static getAfterBatchFunction(functionName: string): $Consumer<$ServerLevel>;
        static getLastFailedTests(): $Stream<$TestFunction>;
        static forgetFailedTests(): void;
        constructor();
        static get allTestFunctions(): $Collection<$TestFunction>;
        static get allTestClassNames(): $Collection<string>;
        static get lastFailedTests(): $Stream<$TestFunction>;
    }
    export class $GameTestBatch extends $Record {
        name(): string;
        afterBatchFunction(): $Consumer<$ServerLevel>;
        gameTestInfos(): $Collection<$GameTestInfo>;
        beforeBatchFunction(): $Consumer<$ServerLevel>;
        static DEFAULT_BATCH_NAME: string;
        constructor(name: string, gameTestInfos: $Collection_<$GameTestInfo>, beforeBatchFunction: $Consumer_<$ServerLevel>, afterBatchFunction: $Consumer_<$ServerLevel>);
    }
    export class $GameTestHelper implements $GameTestHelperAccessor {
        getEntities<T extends $Entity>(entityType: $EntityType_<T>, pos: $BlockPos_, radius: number): $List<T>;
        getEntities<T extends $Entity>(entityType: $EntityType_<T>): $List<T>;
        getBounds(): $AABB;
        fail(exceptionMessage: string): void;
        fail(exceptionMessage: string, entity: $Entity): void;
        fail(exceptionMessage: string, pos: $BlockPos_): void;
        getLevel(): $ServerLevel;
        setDayTime(time: number): void;
        assertTrue(condition: boolean, failureMessage: string): void;
        moveTo(mob: $Mob, x: number, y: number, z: number): void;
        startSequence(): $GameTestSequence;
        spawnItem(item: $Item_, x: number, y: number, z: number): $ItemEntity;
        spawnItem(item: $Item_, pos: $Vec3_): $ItemEntity;
        spawnItem(item: $Item_, pos: $BlockPos_): $ItemEntity;
        useBlock(pos: $BlockPos_, player: $Player, result: $BlockHitResult): void;
        useBlock(pos: $BlockPos_): void;
        useBlock(pos: $BlockPos_, player: $Player): void;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_): T;
        spawn<E extends $Entity>(type: $EntityType_<E>, pos: $Vec3_): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, pos: $BlockPos_): E;
        tickPrecipitation(): void;
        tickPrecipitation(pos: $BlockPos_): void;
        getTick(): number;
        pressButton(pos: $BlockPos_): void;
        pressButton(x: number, y: number, z: number): void;
        randomTick(pos: $BlockPos_): void;
        destroyBlock(pos: $BlockPos_): void;
        findEntities<E extends $Entity>(type: $EntityType_<E>, pos: $Vec3_, radius: number): $List<E>;
        findEntities<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number, radius: number): $List<E>;
        getBlockState(pos: $BlockPos_): $BlockState;
        setBlock(x: number, y: number, z: number, state: $BlockState_): void;
        setBlock(x: number, y: number, z: number, block: $Block_): void;
        setBlock(pos: $BlockPos_, block: $Block_): void;
        setBlock(pos: $BlockPos_, state: $BlockState_): void;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        setBiome(biome: $ResourceKey_<$Biome>): void;
        placeAt(player: $Player, stack: $ItemStack_, pos: $BlockPos_, direction: $Direction_): void;
        relativePos(pos: $BlockPos_): $BlockPos;
        succeedWhen(criterion: $Runnable_): void;
        runAtTickTime(delay: number, arg1: $Runnable_): void;
        assertBlockPresent(block: $Block_, pos: $BlockPos_): void;
        assertBlockPresent(block: $Block_, x: number, y: number, z: number): void;
        assertFalse(condition: boolean, failureMessage: string): void;
        runAfterDelay(delay: number, arg1: $Runnable_): void;
        absolutePos(pos: $BlockPos_): $BlockPos;
        succeedOnTickWhen(tick: number, criterion: $Runnable_): void;
        getTestRotation(): $Rotation;
        absoluteVec(relativeVec3: $Vec3_): $Vec3;
        withLowHealth(entity: $LivingEntity): $LivingEntity;
        assertValueEqual<N>(actual: N, expected: N, valueName: string): void;
        killAllEntities(): void;
        findClosestEntity<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number, radius: number): E;
        findOneEntity<E extends $Entity>(type: $EntityType_<E>): E;
        makeMockPlayer(gameType: $GameType_): $Player;
        pulseRedstone(pos: $BlockPos_, delay: number): void;
        assertBlock(pos: $BlockPos_, predicate: $Predicate_<$Block>, exceptionMessage: string): void;
        assertBlock(pos: $BlockPos_, predicate: $Predicate_<$Block>, exceptionMessage: $Supplier_<string>): void;
        relativeVec(relativeVec3: $Vec3_): $Vec3;
        makeAboutToDrown(entity: $LivingEntity): $LivingEntity;
        assertEntityData<E extends $Entity, T>(pos: $BlockPos_, type: $EntityType_<E>, entityDataGetter: $Function_<E, T>, testEntityData: T | null): void;
        pullLever(x: number, y: number, z: number): void;
        pullLever(pos: $BlockPos_): void;
        assertContainerEmpty(pos: $BlockPos_): void;
        assertEntitiesPresent(entityType: $EntityType_<never>, count: number): void;
        assertEntitiesPresent(entityType: $EntityType_<never>, pos: $BlockPos_, count: number, radius: number): void;
        assertEntityNotPresent(type: $EntityType_<never>): void;
        assertEntityNotPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        assertEntityNotPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        assertEntityNotPresent(type: $EntityType_<never>, from: $Vec3_, to: $Vec3_): void;
        assertContainerContains(pos: $BlockPos_, item: $Item_): void;
        assertBlockNotPresent(block: $Block_, x: number, y: number, z: number): void;
        assertBlockNotPresent(block: $Block_, pos: $BlockPos_): void;
        assertBlockProperty<T extends $Comparable<T>>(pos: $BlockPos_, property: $Property<T>, predicate: $Predicate_<T>, exceptionMessage: string): void;
        assertBlockProperty<T extends $Comparable<T>>(pos: $BlockPos_, property: $Property<T>, value: T): void;
        assertEntityPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        assertEntityPresent(type: $EntityType_<never>, from: $Vec3_, to: $Vec3_): void;
        assertEntityPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        assertEntityPresent(type: $EntityType_<never>): void;
        assertEntityPresent(type: $EntityType_<never>, pos: $BlockPos_, expansionAmount: number): void;
        assertItemEntityPresent(item: $Item_, pos: $BlockPos_, radius: number): void;
        assertItemEntityPresent(item: $Item_): void;
        assertBlockState(pos: $BlockPos_, predicate: $Predicate_<$BlockState>, exceptionMessage: $Supplier_<string>): void;
        killAllEntitiesOfClass(entityClass: $Class<any>): void;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, pos: $Vec3_): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, pos: $BlockPos_): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        succeedWhenBlockPresent(block: $Block_, x: number, y: number, z: number): void;
        succeedWhenBlockPresent(block: $Block_, pos: $BlockPos_): void;
        assertSameBlockStates(boundingBox: $BoundingBox, pos: $BlockPos_): void;
        assertBlockEntityData<T extends $BlockEntity>(pos: $BlockPos_, predicate: $Predicate_<T>, exceptionMessage: $Supplier_<string>): void;
        assertEntityPosition(entity: $Entity, box: $AABB_, exceptionMessage: string): void;
        assertEntityProperty<E extends $Entity, T>(entity: E, entityPropertyGetter: $Function_<E, T>, valueName: string, testEntityProperty: T): void;
        assertEntityProperty<E extends $Entity>(entity: E, predicate: $Predicate_<E>, name: string): void;
        assertEntityNotTouching(type: $EntityType_<never>, x: number, arg2: number, y: number): void;
        assertRedstoneSignal(pos: $BlockPos_, direction: $Direction_, signalStrengthPredicate: $IntPredicate_, exceptionMessage: $Supplier_<string>): void;
        forEveryBlockInStructure(consumer: $Consumer_<$BlockPos>): void;
        assertSameBlockState(testPos: $BlockPos_, comparisonPos: $BlockPos_): void;
        assertEntityIsHolding<E extends $LivingEntity>(pos: $BlockPos_, entityType: $EntityType_<E>, item: $Item_): void;
        succeedWhenEntityData<E extends $Entity, T>(pos: $BlockPos_, type: $EntityType_<E>, entityDataGetter: $Function_<E, T>, testEntityData: T): void;
        succeedWhenEntityPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        succeedWhenEntityPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        assertItemEntityCountIs(item: $Item_, pos: $BlockPos_, expansionAmount: number, arg3: number): void;
        assertItemEntityNotPresent(item: $Item_): void;
        assertItemEntityNotPresent(item: $Item_, pos: $BlockPos_, radius: number): void;
        assertEntityTouching(type: $EntityType_<never>, x: number, arg2: number, y: number): void;
        assertEntityInventoryContains<E extends $Entity>(pos: $BlockPos_, entityType: $EntityType_<E>, item: $Item_): void;
        assertLivingEntityHasMobEffect(entity: $LivingEntity, effect: $Holder_<$MobEffect>, amplifier: number): void;
        assertEntityInstancePresent(entity: $Entity, x: number, y: number, z: number): void;
        assertEntityInstancePresent(entity: $Entity, pos: $BlockPos_): void;
        /**
         * @deprecated
         */
        makeMockServerPlayerInLevel(): $ServerPlayer;
        assertAtTickTimeContainerContains(tickTime: number, arg1: $BlockPos_, pos: $Item_): void;
        assertAtTickTimeContainerEmpty(tickTime: number, arg1: $BlockPos_): void;
        succeedWhenEntityNotPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        succeedWhenEntityNotPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        walkTo(mob: $Mob, pos: $BlockPos_, speed: number): $GameTestSequence;
        setNight(): void;
        failIf(criterion: $Runnable_): void;
        failIfEver(criterion: $Runnable_): void;
        onEachTick(criterion: $Runnable_): void;
        succeed(): void;
        succeedIf(criterion: $Runnable_): void;
        getTestInfo(): $GameTestInfo;
        setFinalCheckAdded(arg0: boolean): void;
        getFinalCheckAdded(): boolean;
        testInfo: $GameTestInfo;
        constructor(testInfo: $GameTestInfo);
        get bounds(): $AABB;
        get level(): $ServerLevel;
        set dayTime(value: number);
        get tick(): number;
        set biome(value: $ResourceKey_<$Biome>);
        get testRotation(): $Rotation;
    }
    export class $LogTestReporter implements $TestReporter {
        onTestSuccess(arg0: $GameTestInfo): void;
        onTestFailed(arg0: $GameTestInfo): void;
        finish(): void;
        constructor();
    }
    /**
     * Annotate a method with this annotation in order to have it run before the specified `#batch()`.
     */
    export class $BeforeBatch implements $Annotation {
        batch(): string;
    }
    export class $GameTestAssertException extends $RuntimeException {
        constructor(exceptionMessage: string);
    }
    export class $GameTestTicker {
        clear(): void;
        add(testInfo: $GameTestInfo): void;
        tick(): void;
        setRunner(runner: $GameTestRunner): void;
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
        thenExecute(task: $Runnable_): $GameTestSequence;
        thenExecuteFor(tick: number, task: $Runnable_): $GameTestSequence;
        tickAndContinue(tick: number): void;
        thenTrigger(): $GameTestSequence$Condition;
        thenExecuteAfter(tick: number, task: $Runnable_): $GameTestSequence;
        thenWaitUntil(expectedDelay: number, arg1: $Runnable_): $GameTestSequence;
        thenWaitUntil(task: $Runnable_): $GameTestSequence;
        thenSucceed(): void;
        thenIdle(tick: number): $GameTestSequence;
        tickAndFailIfNotComplete(tick: number): void;
        thenFail(exception: $Supplier_<$Exception>): void;
        parent: $GameTestInfo;
        constructor(testInfo: $GameTestInfo);
    }
    export class $GameTestBatchFactory {
        static fromGameTestInfo(maxTests: number): $GameTestRunner$GameTestBatcher;
        static fromGameTestInfo(): $GameTestRunner$GameTestBatcher;
        static toGameTestInfo(testFunction: $TestFunction_, rotationSteps: number, level: $ServerLevel): $GameTestInfo;
        static fromTestFunction(testFunctions: $Collection_<$TestFunction_>, level: $ServerLevel): $Collection<$GameTestBatch>;
        static toGameTestBatch(gameTestInfos: $Collection_<$GameTestInfo>, functionName: string, index: number): $GameTestBatch;
        constructor();
    }
    export class $ExhaustedAttemptsException extends $Throwable {
    }
    export class $GameTestRunner {
        start(): void;
        stop(): void;
        addListener(listener: $GameTestBatchListener): void;
        static clearMarkers(serverLevel: $ServerLevel): void;
        getTestInfos(): $List<$GameTestInfo>;
        runBatch(index: number): void;
        rerunTest(test: $GameTestInfo): void;
        level: $ServerLevel;
        batchListeners: $List<$GameTestBatchListener>;
        static DEFAULT_TESTS_PER_ROW: number;
        currentBatch: $GameTestBatch;
        haltOnError: boolean;
        constructor(testBatcher: $GameTestRunner$GameTestBatcher_, batches: $Collection_<$GameTestBatch_>, level: $ServerLevel, testTicker: $GameTestTicker, existingStructureSpawner: $GameTestRunner$StructureSpawner_, newStructureSpawner: $GameTestRunner$StructureSpawner_, haltOnError: boolean);
        get testInfos(): $List<$GameTestInfo>;
    }
    export class $GameTestRunner$GameTestBatcher {
    }
    export interface $GameTestRunner$GameTestBatcher {
        batch(infos: $Collection_<$GameTestInfo>): $Collection<$GameTestBatch>;
    }
    /**
     * Values that may be interpreted as {@link $GameTestRunner$GameTestBatcher}.
     */
    export type $GameTestRunner$GameTestBatcher_ = ((arg0: $Collection<$GameTestInfo>) => $Collection_<$GameTestBatch_>);
    export class $TestCommand$Runner {
        run(rotationSteps: number): number;
        run(rotationSteps: number, testsPerRow: number): number;
        run(retryOptions: $RetryOptions_, rotationSteps: number, testsPerRow: number): number;
        run(retryOptions: $RetryOptions_, rotationSteps: number): number;
        run(retryOptions: $RetryOptions_): number;
        run(): number;
        reset(): number;
        clear(): number;
        verify(): number;
        "export"(): number;
        locate(): number;
        constructor(finder: $TestFinder<$TestCommand$Runner>);
    }
    export class $GameTestSequence$Condition {
        trigger(triggerTime: number): void;
        assertTriggeredThisTick(): void;
        this$0: $GameTestSequence;
        constructor(arg0: $GameTestSequence);
    }
}
