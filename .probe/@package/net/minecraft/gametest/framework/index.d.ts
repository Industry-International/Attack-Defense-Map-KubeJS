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
        existingStructureSpawner(arg0: $StructureGridSpawner): $GameTestRunner$Builder;
        newStructureSpawner(arg0: $GameTestRunner$StructureSpawner_): $GameTestRunner$Builder;
        batcher(arg0: $GameTestRunner$GameTestBatcher_): $GameTestRunner$Builder;
        static fromInfo(arg0: $Collection_<$GameTestInfo>, arg1: $ServerLevel): $GameTestRunner$Builder;
        haltOnError(arg0: boolean): $GameTestRunner$Builder;
        static fromBatches(arg0: $Collection_<$GameTestBatch_>, arg1: $ServerLevel): $GameTestRunner$Builder;
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
        addListener(arg0: $GameTestListener): void;
        getTotalCount(): number;
        addTestToTrack(arg0: $GameTestInfo): void;
        getDoneCount(): number;
        addFailureListener(arg0: $Consumer_<$GameTestInfo>): void;
        getFailedRequired(): $Collection<$GameTestInfo>;
        hasFailedOptional(): boolean;
        hasFailedRequired(): boolean;
        getFailedOptional(): $Collection<$GameTestInfo>;
        getFailedOptionalCount(): number;
        getFailedRequiredCount(): number;
        getProgressBar(): string;
        constructor();
        constructor(arg0: $Collection_<$GameTestInfo>);
        get done(): boolean;
        get totalCount(): number;
        get doneCount(): number;
        get failedRequired(): $Collection<$GameTestInfo>;
        get failedOptional(): $Collection<$GameTestInfo>;
        get failedOptionalCount(): number;
        get failedRequiredCount(): number;
        get progressBar(): string;
    }
    export class $StructureUtils {
        static removeBarriers(arg0: $AABB_, arg1: $ServerLevel): void;
        static findStructureByTestFunction(arg0: $BlockPos_, arg1: number, arg2: $ServerLevel, arg3: string): $Stream<$BlockPos>;
        static findStructureBlockContainingPos(arg0: $BlockPos_, arg1: number, arg2: $ServerLevel): ($BlockPos) | undefined;
        static getStructureBoundingBox(arg0: $StructureBlockEntity): $BoundingBox;
        static getStructureBoundingBox(arg0: $BlockPos_, arg1: $Vec3i, arg2: $Rotation_): $BoundingBox;
        static prepareTestStructure(arg0: $GameTestInfo, arg1: $BlockPos_, arg2: $Rotation_, arg3: $ServerLevel): $StructureBlockEntity;
        static getRotationForRotationSteps(arg0: number): $Rotation;
        static getTransformedFarCorner(arg0: $BlockPos_, arg1: $Vec3i, arg2: $Rotation_): $BlockPos;
        static clearSpaceForStructure(arg0: $BoundingBox, arg1: $ServerLevel): void;
        static findStructureBlocks(arg0: $BlockPos_, arg1: number, arg2: $ServerLevel): $Stream<$BlockPos>;
        static findNearestStructureBlock(arg0: $BlockPos_, arg1: number, arg2: $ServerLevel): ($BlockPos) | undefined;
        static lookedAtStructureBlockPos(arg0: $BlockPos_, arg1: $Entity, arg2: $ServerLevel): $Stream<$BlockPos>;
        static addCommandBlockAndButtonToStartTest(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $Rotation_, arg3: $ServerLevel): void;
        static getStructureOrigin(arg0: $StructureBlockEntity): $BlockPos;
        static encaseStructure(arg0: $AABB_, arg1: $ServerLevel, arg2: boolean): void;
        static createNewEmptyStructureBlock(arg0: string, arg1: $BlockPos_, arg2: $Vec3i, arg3: $Rotation_, arg4: $ServerLevel): void;
        static getRotationStepsForRotation(arg0: $Rotation_): number;
        static getStructureBounds(arg0: $StructureBlockEntity): $AABB;
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
        getRelativePos(): $BlockPos;
        getAbsolutePos(): $BlockPos;
        getMessageToShowAtBlock(): string;
        constructor(arg0: string, arg1: $BlockPos_, arg2: $BlockPos_, arg3: number);
        get relativePos(): $BlockPos;
        get absolutePos(): $BlockPos;
        get messageToShowAtBlock(): string;
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
        haltOnFailure(): boolean;
        numberOfTries(): number;
        hasTriesLeft(arg0: number, arg1: number): boolean;
        unlimitedTries(): boolean;
        static noRetries(): $RetryOptions;
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
        handler$igj000$fabric_gametest_api_v1$isDedicated(arg0: $CallbackInfoReturnable<any>): void;
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
        template(): string;
        required(): boolean;
        skyAccess(): boolean;
        manualOnly(): boolean;
        setupTicks(): number;
        templateNamespace(): string;
        attempts(): number;
        timeoutTicks(): number;
        rotationSteps(): number;
        requiredSuccesses(): number;
    }
    export class $GameTestTimeoutException extends $RuntimeException {
        constructor(arg0: string);
    }
    export class $GameTestEvent {
    }
    export class $TestCommand$TestSummaryDisplayer extends $Record implements $GameTestListener {
        level(): $ServerLevel;
        testStructureLoaded(arg0: $GameTestInfo): void;
        tracker(): $MultipleTestTracker;
        testAddedForRerun(arg0: $GameTestInfo, arg1: $GameTestInfo, arg2: $GameTestRunner): void;
        testFailed(arg0: $GameTestInfo, arg1: $GameTestRunner): void;
        testPassed(arg0: $GameTestInfo, arg1: $GameTestRunner): void;
        constructor(level: $ServerLevel, tracker: $MultipleTestTracker);
    }
    export class $TestClassNameArgument implements $ArgumentType<string> {
        parse(arg0: $StringReader): string;
        getExamples(): $Collection<string>;
        static testClassName(): $TestClassNameArgument;
        static getTestClassName(arg0: $CommandContext<$CommandSourceStack>, arg1: string): string;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
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
        allTestsInClass(arg0: $CommandContext<$CommandSourceStack>, arg1: string): T;
        locateByName(arg0: $CommandContext<$CommandSourceStack>, arg1: string): T;
        radius(arg0: $CommandContext<$CommandSourceStack>, arg1: number): T;
        failedTests(arg0: $CommandContext<$CommandSourceStack>, arg1: boolean): T;
        failedTests(arg0: $CommandContext<$CommandSourceStack>): T;
        createMultipleCopies(arg0: number): $TestFinder$Builder<T>;
        allTests(arg0: $CommandContext<$CommandSourceStack>): T;
        allNearby(arg0: $CommandContext<$CommandSourceStack>): T;
        lookedAt(arg0: $CommandContext<$CommandSourceStack>): T;
        byArgument(arg0: $CommandContext<$CommandSourceStack>, arg1: string): T;
        constructor(arg0: $Function_<$TestFinder<T>, T>);
    }
    export class $GameTestListener {
    }
    export interface $GameTestListener {
        testStructureLoaded(arg0: $GameTestInfo): void;
        testAddedForRerun(arg0: $GameTestInfo, arg1: $GameTestInfo, arg2: $GameTestRunner): void;
        testFailed(arg0: $GameTestInfo, arg1: $GameTestRunner): void;
        testPassed(arg0: $GameTestInfo, arg1: $GameTestRunner): void;
    }
    export class $TestFunction extends $Record {
        run(arg0: $GameTestHelper): void;
        "function"(): $Consumer<$GameTestHelper>;
        required(): boolean;
        skyAccess(): boolean;
        manualOnly(): boolean;
        setupTicks(): number;
        batchName(): string;
        rotation(): $Rotation;
        maxTicks(): number;
        maxAttempts(): number;
        structureName(): string;
        testName(): string;
        requiredSuccesses(): number;
        isFlaky(): boolean;
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
        isRequired(): boolean;
        addListener(arg0: $GameTestListener): void;
        createSequence(): $GameTestSequence;
        getTick(): number;
        getListeners(): $Stream<$GameTestListener>;
        isOptional(): boolean;
        getError(): $Throwable;
        setStructureBlockPos(arg0: $BlockPos_): void;
        getStructureBlockEntity(): $StructureBlockEntity;
        prepareTestStructure(): $GameTestInfo;
        placeStructure(): $GameTestInfo;
        getRotation(): $Rotation;
        handler$hda000$sable$removeSublevels(arg0: $CallbackInfo, arg1: $AABB_): void;
        maxAttempts(): number;
        hasFailed(): boolean;
        getStructureName(): string;
        getTestFunction(): $TestFunction;
        startExecution(arg0: number): $GameTestInfo;
        hasSucceeded(): boolean;
        getTestName(): string;
        setNorthWestCorner(arg0: $BlockPos_): void;
        retryOptions(): $RetryOptions;
        getStructureBounds(): $AABB;
        setRunAtTickTime(arg0: number, arg1: $Runnable_): void;
        getTimeoutTicks(): number;
        succeed(): void;
        requiredSuccesses(): number;
        hasStarted(): boolean;
        copyReset(): $GameTestInfo;
        isFlaky(): boolean;
        getRunTime(): number;
        getStructureBlockPos(): $BlockPos;
        sequences: $Collection<$GameTestSequence>;
        constructor(arg0: $TestFunction_, arg1: $Rotation_, arg2: $ServerLevel, arg3: $RetryOptions_);
        get done(): boolean;
        get level(): $ServerLevel;
        get required(): boolean;
        get listeners(): $Stream<$GameTestListener>;
        get optional(): boolean;
        get error(): $Throwable;
        get structureBlockEntity(): $StructureBlockEntity;
        get rotation(): $Rotation;
        get structureName(): string;
        get testFunction(): $TestFunction;
        get testName(): string;
        set northWestCorner(value: $BlockPos_);
        get structureBounds(): $AABB;
        get timeoutTicks(): number;
        get flaky(): boolean;
        get runTime(): number;
    }
    export class $TestFunctionArgument implements $ArgumentType<$TestFunction> {
        parse(arg0: $StringReader): $TestFunction;
        getExamples(): $Collection<string>;
        static testFunctionArgument(): $TestFunctionArgument;
        static getTestFunction(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $TestFunction;
        static suggestTestFunction<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
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
        static toGameTestInfos(arg0: $CommandSourceStack, arg1: $RetryOptions_, arg2: $StructureBlockPosFinder_): $Stream<$GameTestInfo>;
        static register(arg0: $CommandDispatcher<$CommandSourceStack>): void;
        static stopTests(): number;
        static createTestPositionAround(arg0: $CommandSourceStack): $BlockPos;
        static trackAndStartRunner(arg0: $CommandSourceStack, arg1: $ServerLevel, arg2: $GameTestRunner): number;
        static saveAndExportTestStructure(arg0: $CommandSourceStack, arg1: $StructureBlockEntity): number;
        static say(arg0: $ServerLevel, arg1: string, arg2: $ChatFormatting_): void;
        static say(arg0: $CommandSourceStack, arg1: string): void;
        static toGameTestInfo(arg0: $CommandSourceStack, arg1: $RetryOptions_, arg2: $TestFunctionFinder_, arg3: number): $Stream<$GameTestInfo>;
        static STRUCTURE_BLOCK_NEARBY_SEARCH_RADIUS: number;
        static STRUCTURE_BLOCK_FULL_SEARCH_RADIUS: number;
        constructor();
    }
    export class $GameTestRegistry {
        /**
         * @deprecated
         */
        static register(arg0: $Class<never>): void;
        /**
         * @deprecated
         */
        static register(arg0: $Method, arg1: $Set_<string>): void;
        /**
         * @deprecated
         */
        static register(arg0: $Method): void;
        static getTestFunctionsForClassName(arg0: string): $Stream<$TestFunction>;
        static getTestFunction(arg0: string): $TestFunction;
        static findTestFunction(arg0: string): ($TestFunction) | undefined;
        static isTestClass(arg0: string): boolean;
        static getAllTestFunctions(): $Collection<$TestFunction>;
        static getAllTestClassNames(): $Collection<string>;
        static rememberFailedTest(arg0: $TestFunction_): void;
        static forgetFailedTests(): void;
        static getLastFailedTests(): $Stream<$TestFunction>;
        static getBeforeBatchFunction(arg0: string): $Consumer<$ServerLevel>;
        static getAfterBatchFunction(arg0: string): $Consumer<$ServerLevel>;
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
        constructor(arg0: string, arg1: $Collection_<$GameTestInfo>, arg2: $Consumer_<$ServerLevel>, arg3: $Consumer_<$ServerLevel>);
    }
    export class $GameTestHelper implements $GameTestHelperAccessor {
        getBounds(): $AABB;
        fail(arg0: string, arg1: $BlockPos_): void;
        fail(arg0: string): void;
        fail(arg0: string, arg1: $Entity): void;
        getLevel(): $ServerLevel;
        getEntities<T extends $Entity>(arg0: $EntityType_<T>): $List<T>;
        getEntities<T extends $Entity>(arg0: $EntityType_<T>, arg1: $BlockPos_, arg2: number): $List<T>;
        spawnItem(arg0: $Item_, arg1: $Vec3_): $ItemEntity;
        spawnItem(arg0: $Item_, arg1: number, arg2: number, arg3: number): $ItemEntity;
        spawnItem(arg0: $Item_, arg1: $BlockPos_): $ItemEntity;
        destroyBlock(arg0: $BlockPos_): void;
        getTick(): number;
        walkTo(arg0: $Mob, arg1: $BlockPos_, arg2: number): $GameTestSequence;
        setNight(): void;
        pressButton(arg0: $BlockPos_): void;
        pressButton(arg0: number, arg1: number, arg2: number): void;
        moveTo(arg0: $Mob, arg1: number, arg2: number, arg3: number): void;
        assertTrue(arg0: boolean, arg1: string): void;
        setBiome(arg0: $ResourceKey_<$Biome>): void;
        /**
         * @deprecated
         */
        makeMockServerPlayerInLevel(): $ServerPlayer;
        assertEntityInventoryContains<E extends $Entity>(arg0: $BlockPos_, arg1: $EntityType_<E>, arg2: $Item_): void;
        assertEntityInstancePresent(arg0: $Entity, arg1: $BlockPos_): void;
        assertEntityInstancePresent(arg0: $Entity, arg1: number, arg2: number, arg3: number): void;
        succeedWhenEntityNotPresent(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number): void;
        succeedWhenEntityNotPresent(arg0: $EntityType_<never>, arg1: $BlockPos_): void;
        assertLivingEntityHasMobEffect(arg0: $LivingEntity, arg1: $Holder_<$MobEffect>, arg2: number): void;
        assertAtTickTimeContainerEmpty(arg0: number, arg1: $BlockPos_): void;
        assertAtTickTimeContainerContains(arg0: number, arg1: $BlockPos_, arg2: $Item_): void;
        setBlock(arg0: number, arg1: number, arg2: number, arg3: $Block_): void;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_): void;
        setBlock(arg0: $BlockPos_, arg1: $Block_): void;
        setBlock(arg0: number, arg1: number, arg2: number, arg3: $BlockState_): void;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_): T;
        spawn<E extends $Entity>(arg0: $EntityType_<E>, arg1: $BlockPos_): E;
        spawn<E extends $Entity>(arg0: $EntityType_<E>, arg1: $Vec3_): E;
        spawn<E extends $Entity>(arg0: $EntityType_<E>, arg1: number, arg2: number, arg3: number): E;
        spawn<E extends $Entity>(arg0: $EntityType_<E>, arg1: number, arg2: number, arg3: number): E;
        randomTick(arg0: $BlockPos_): void;
        setDayTime(arg0: number): void;
        tickPrecipitation(): void;
        tickPrecipitation(arg0: $BlockPos_): void;
        relativePos(arg0: $BlockPos_): $BlockPos;
        placeAt(arg0: $Player, arg1: $ItemStack_, arg2: $BlockPos_, arg3: $Direction_): void;
        useBlock(arg0: $BlockPos_, arg1: $Player): void;
        useBlock(arg0: $BlockPos_): void;
        useBlock(arg0: $BlockPos_, arg1: $Player, arg2: $BlockHitResult): void;
        absolutePos(arg0: $BlockPos_): $BlockPos;
        assertFalse(arg0: boolean, arg1: string): void;
        runAfterDelay(arg0: number, arg1: $Runnable_): void;
        succeedWhen(arg0: $Runnable_): void;
        runAtTickTime(arg0: number, arg1: $Runnable_): void;
        assertBlockPresent(arg0: $Block_, arg1: $BlockPos_): void;
        assertBlockPresent(arg0: $Block_, arg1: number, arg2: number, arg3: number): void;
        assertEntitiesPresent(arg0: $EntityType_<never>, arg1: $BlockPos_, arg2: number, arg3: number): void;
        assertEntitiesPresent(arg0: $EntityType_<never>, arg1: number): void;
        assertBlockProperty<T extends $Comparable<T>>(arg0: $BlockPos_, arg1: $Property<T>, arg2: $Predicate_<T>, arg3: string): void;
        assertBlockProperty<T extends $Comparable<T>>(arg0: $BlockPos_, arg1: $Property<T>, arg2: T): void;
        assertBlockNotPresent(arg0: $Block_, arg1: number, arg2: number, arg3: number): void;
        assertBlockNotPresent(arg0: $Block_, arg1: $BlockPos_): void;
        assertContainerEmpty(arg0: $BlockPos_): void;
        assertEntityPresent(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number): void;
        assertEntityPresent(arg0: $EntityType_<never>, arg1: $BlockPos_): void;
        assertEntityPresent(arg0: $EntityType_<never>, arg1: $Vec3_, arg2: $Vec3_): void;
        assertEntityPresent(arg0: $EntityType_<never>, arg1: $BlockPos_, arg2: number): void;
        assertEntityPresent(arg0: $EntityType_<never>): void;
        assertContainerContains(arg0: $BlockPos_, arg1: $Item_): void;
        assertEntityNotPresent(arg0: $EntityType_<never>): void;
        assertEntityNotPresent(arg0: $EntityType_<never>, arg1: $BlockPos_): void;
        assertEntityNotPresent(arg0: $EntityType_<never>, arg1: $Vec3_, arg2: $Vec3_): void;
        assertEntityNotPresent(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number): void;
        assertItemEntityPresent(arg0: $Item_): void;
        assertItemEntityPresent(arg0: $Item_, arg1: $BlockPos_, arg2: number): void;
        assertBlockState(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>, arg2: $Supplier_<string>): void;
        pullLever(arg0: $BlockPos_): void;
        pullLever(arg0: number, arg1: number, arg2: number): void;
        findEntities<E extends $Entity>(arg0: $EntityType_<E>, arg1: number, arg2: number, arg3: number, arg4: number): $List<E>;
        findEntities<E extends $Entity>(arg0: $EntityType_<E>, arg1: $Vec3_, arg2: number): $List<E>;
        startSequence(): $GameTestSequence;
        makeMockPlayer(arg0: $GameType_): $Player;
        findClosestEntity<E extends $Entity>(arg0: $EntityType_<E>, arg1: number, arg2: number, arg3: number, arg4: number): E;
        makeAboutToDrown(arg0: $LivingEntity): $LivingEntity;
        assertEntityData<E extends $Entity, T>(arg0: $BlockPos_, arg1: $EntityType_<E>, arg2: $Function_<E, T>, arg3: T): void;
        relativeVec(arg0: $Vec3_): $Vec3;
        absoluteVec(arg0: $Vec3_): $Vec3;
        succeedOnTickWhen(arg0: number, arg1: $Runnable_): void;
        getTestRotation(): $Rotation;
        withLowHealth(arg0: $LivingEntity): $LivingEntity;
        findOneEntity<E extends $Entity>(arg0: $EntityType_<E>): E;
        pulseRedstone(arg0: $BlockPos_, arg1: number): void;
        killAllEntities(): void;
        assertValueEqual<N>(arg0: N, arg1: N, arg2: string): void;
        assertBlock(arg0: $BlockPos_, arg1: $Predicate_<$Block>, arg2: string): void;
        assertBlock(arg0: $BlockPos_, arg1: $Predicate_<$Block>, arg2: $Supplier_<string>): void;
        succeedIf(arg0: $Runnable_): void;
        succeed(): void;
        failIfEver(arg0: $Runnable_): void;
        failIf(arg0: $Runnable_): void;
        onEachTick(arg0: $Runnable_): void;
        assertEntityProperty<E extends $Entity>(arg0: E, arg1: $Predicate_<E>, arg2: string): void;
        assertEntityProperty<E extends $Entity, T>(arg0: E, arg1: $Function_<E, T>, arg2: string, arg3: T): void;
        forEveryBlockInStructure(arg0: $Consumer_<$BlockPos>): void;
        assertSameBlockState(arg0: $BlockPos_, arg1: $BlockPos_): void;
        assertEntityNotTouching(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number): void;
        assertEntityTouching(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number): void;
        succeedWhenEntityData<E extends $Entity, T>(arg0: $BlockPos_, arg1: $EntityType_<E>, arg2: $Function_<E, T>, arg3: T): void;
        assertEntityIsHolding<E extends $LivingEntity>(arg0: $BlockPos_, arg1: $EntityType_<E>, arg2: $Item_): void;
        assertSameBlockStates(arg0: $BoundingBox, arg1: $BlockPos_): void;
        assertEntityPosition(arg0: $Entity, arg1: $AABB_, arg2: string): void;
        succeedWhenEntityPresent(arg0: $EntityType_<never>, arg1: $BlockPos_): void;
        succeedWhenEntityPresent(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number): void;
        succeedWhenBlockPresent(arg0: $Block_, arg1: $BlockPos_): void;
        succeedWhenBlockPresent(arg0: $Block_, arg1: number, arg2: number, arg3: number): void;
        assertBlockEntityData<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $Predicate_<T>, arg2: $Supplier_<string>): void;
        assertRedstoneSignal(arg0: $BlockPos_, arg1: $Direction_, arg2: $IntPredicate_, arg3: $Supplier_<string>): void;
        killAllEntitiesOfClass(arg0: $Class<any>): void;
        spawnWithNoFreeWill<E extends $Mob>(arg0: $EntityType_<E>, arg1: $BlockPos_): E;
        spawnWithNoFreeWill<E extends $Mob>(arg0: $EntityType_<E>, arg1: number, arg2: number, arg3: number): E;
        spawnWithNoFreeWill<E extends $Mob>(arg0: $EntityType_<E>, arg1: $Vec3_): E;
        spawnWithNoFreeWill<E extends $Mob>(arg0: $EntityType_<E>, arg1: number, arg2: number, arg3: number): E;
        assertItemEntityCountIs(arg0: $Item_, arg1: $BlockPos_, arg2: number, arg3: number): void;
        assertItemEntityNotPresent(arg0: $Item_): void;
        assertItemEntityNotPresent(arg0: $Item_, arg1: $BlockPos_, arg2: number): void;
        getTestInfo(): $GameTestInfo;
        getFinalCheckAdded(): boolean;
        setFinalCheckAdded(arg0: boolean): void;
        testInfo: $GameTestInfo;
        constructor(arg0: $GameTestInfo);
        get bounds(): $AABB;
        get level(): $ServerLevel;
        get tick(): number;
        set biome(value: $ResourceKey_<$Biome>);
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
        tickAndFailIfNotComplete(arg0: number): void;
        thenIdle(arg0: number): $GameTestSequence;
        thenExecute(arg0: $Runnable_): $GameTestSequence;
        thenExecuteFor(arg0: number, arg1: $Runnable_): $GameTestSequence;
        tickAndContinue(arg0: number): void;
        thenTrigger(): $GameTestSequence$Condition;
        thenExecuteAfter(arg0: number, arg1: $Runnable_): $GameTestSequence;
        thenWaitUntil(arg0: $Runnable_): $GameTestSequence;
        thenWaitUntil(arg0: number, arg1: $Runnable_): $GameTestSequence;
        thenSucceed(): void;
        thenFail(arg0: $Supplier_<$Exception>): void;
        parent: $GameTestInfo;
        constructor(arg0: $GameTestInfo);
    }
    export class $GameTestBatchFactory {
        static toGameTestInfo(arg0: $TestFunction_, arg1: number, arg2: $ServerLevel): $GameTestInfo;
        static fromTestFunction(arg0: $Collection_<$TestFunction_>, arg1: $ServerLevel): $Collection<$GameTestBatch>;
        static fromGameTestInfo(arg0: number): $GameTestRunner$GameTestBatcher;
        static fromGameTestInfo(): $GameTestRunner$GameTestBatcher;
        static toGameTestBatch(arg0: $Collection_<$GameTestInfo>, arg1: string, arg2: number): $GameTestBatch;
        constructor();
    }
    export class $ExhaustedAttemptsException extends $Throwable {
    }
    export class $GameTestRunner {
        start(): void;
        stop(): void;
        addListener(arg0: $GameTestBatchListener): void;
        rerunTest(arg0: $GameTestInfo): void;
        runBatch(arg0: number): void;
        static clearMarkers(arg0: $ServerLevel): void;
        getTestInfos(): $List<$GameTestInfo>;
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
        run(arg0: $RetryOptions_, arg1: number): number;
        run(arg0: $RetryOptions_): number;
        run(): number;
        run(arg0: number): number;
        run(arg0: number, arg1: number): number;
        run(arg0: $RetryOptions_, arg1: number, arg2: number): number;
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
