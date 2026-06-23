import { $SpawnData, $Level_, $SpawnData_ } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SimpleParticleType, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $UUID, $List, $Set, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Predicate_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $IOwnedSpawner } from "@package/net/neoforged/neoforge/common/extensions";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $Enum, $Record } from "@package/java/lang";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $EntityTypeTest } from "@package/net/minecraft/world/level/entity";

declare module "@package/net/minecraft/world/level/block/entity/trialspawner" {
    export class $TrialSpawner$StateAccessor {
    }
    export interface $TrialSpawner$StateAccessor {
        getState(): $TrialSpawnerState;
        setState(level: $Level_, state: $TrialSpawnerState_): void;
        markUpdated(): void;
    }
    export class $TrialSpawner implements $IOwnedSpawner {
        getState(): $TrialSpawnerState;
        setState(level: $Level_, state: $TrialSpawnerState_): void;
        /**
         * Returns the block entity or entity which owns this spawner object.
         * 
         * For a `BaseSpawner`, this is the `MobSpawnerBlockEntity` or `MinecartSpawner`.
         * 
         * For a `TrialSpawner`, this is the `TrialSpawnerBlockEntity`.
         */
        getOwner(): $Either<$BlockEntity, $Entity>;
        getData(): $TrialSpawnerData;
        getConfig(): $TrialSpawnerConfig;
        isOminous(): boolean;
        spawnMob(level: $ServerLevel, pos: $BlockPos_): ($UUID) | undefined;
        tickClient(level: $Level_, pos: $BlockPos_, isOminous: boolean): void;
        tickServer(level: $ServerLevel, pos: $BlockPos_, isOminous: boolean): void;
        codec(): $Codec<$TrialSpawner>;
        getRequiredPlayerRange(): number;
        getTargetCooldownLength(): number;
        static addEjectItemParticles(level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        static addBecomeOminousParticles(level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        static addDetectPlayerParticles(level: $Level_, pos: $BlockPos_, random: $RandomSource, type: number, particle: $ParticleOptions_): void;
        /**
         * @deprecated
         */
        overridePeacefulAndMobSpawnRule(): void;
        static addSpawnParticles(level: $Level_, pos: $BlockPos_, random: $RandomSource, particleType: $SimpleParticleType): void;
        /**
         * @deprecated
         */
        setPlayerDetector(playerDetector: $PlayerDetector_): void;
        ejectReward(level: $ServerLevel, pos: $BlockPos_, lootTable: $ResourceKey_<$LootTable>): void;
        getNormalConfig(): $TrialSpawnerConfig;
        applyOminous(level: $ServerLevel, pos: $BlockPos_): void;
        getPlayerDetector(): $PlayerDetector;
        getOminousConfig(): $TrialSpawnerConfig;
        getEntitySelector(): $PlayerDetector$EntitySelector;
        canSpawnInLevel(level: $Level_): boolean;
        markUpdated(): void;
        removeOminous(level: $ServerLevel, pos: $BlockPos_): void;
        static DETECT_PLAYER_SPAWN_BUFFER: number;
        static NORMAL_CONFIG_TAG_NAME: string;
        static OMINOUS_CONFIG_TAG_NAME: string;
        constructor(normalConfig: $TrialSpawnerConfig_, ominousConfig: $TrialSpawnerConfig_, data: $TrialSpawnerData, targetCooldownLength: number, requiredPlayerRange: number, stateAccessor: $TrialSpawner$StateAccessor, playerDetector: $PlayerDetector_, entitySelector: $PlayerDetector$EntitySelector);
        constructor(stateAccessor: $TrialSpawner$StateAccessor, playerDetector: $PlayerDetector_, entitySelector: $PlayerDetector$EntitySelector);
        get owner(): $Either<$BlockEntity, $Entity>;
        get data(): $TrialSpawnerData;
        get config(): $TrialSpawnerConfig;
        get ominous(): boolean;
        get requiredPlayerRange(): number;
        get targetCooldownLength(): number;
        get normalConfig(): $TrialSpawnerConfig;
        get ominousConfig(): $TrialSpawnerConfig;
        get entitySelector(): $PlayerDetector$EntitySelector;
    }
    export class $TrialSpawnerState extends $Enum<$TrialSpawnerState> implements $StringRepresentable {
        static values(): $TrialSpawnerState[];
        static valueOf(arg0: string): $TrialSpawnerState;
        isCapableOfSpawning(): boolean;
        getSerializedName(): string;
        tickAndGetNext(pos: $BlockPos_, spawner: $TrialSpawner, level: $ServerLevel): $TrialSpawnerState;
        spinningMobSpeed(): number;
        hasSpinningMob(): boolean;
        emitParticles(level: $Level_, pos: $BlockPos_, isOminous: boolean): void;
        lightLevel(): number;
        getRemappedEnumConstantName(): string;
        static COOLDOWN: $TrialSpawnerState;
        static ACTIVE: $TrialSpawnerState;
        static INACTIVE: $TrialSpawnerState;
        static EJECTING_REWARD: $TrialSpawnerState;
        static WAITING_FOR_REWARD_EJECTION: $TrialSpawnerState;
        static WAITING_FOR_PLAYERS: $TrialSpawnerState;
        get capableOfSpawning(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TrialSpawnerState}.
     */
    export type $TrialSpawnerState_ = "inactive" | "waiting_for_players" | "active" | "waiting_for_reward_ejection" | "ejecting_reward" | "cooldown";
    export class $TrialSpawnerState$LightLevel {
    }
    export class $TrialSpawnerState$ParticleEmission {
    }
    export interface $TrialSpawnerState$ParticleEmission {
    }
    /**
     * Values that may be interpreted as {@link $TrialSpawnerState$ParticleEmission}.
     */
    export type $TrialSpawnerState$ParticleEmission_ = (() => void);
    export class $PlayerDetector$EntitySelector {
        static onlySelectPlayer(player: $Player): $PlayerDetector$EntitySelector;
        static onlySelectPlayers(players: $List_<$Player>): $PlayerDetector$EntitySelector;
        static SELECT_FROM_LEVEL: $PlayerDetector$EntitySelector;
    }
    export interface $PlayerDetector$EntitySelector {
        getEntities<T extends $Entity>(level: $ServerLevel, typeTest: $EntityTypeTest<$Entity, T>, boundingBox: $AABB_, predicate: $Predicate_<T>): $List<T>;
        getPlayers(level: $ServerLevel, predicate: $Predicate_<$Player>): $List<$Player>;
    }
    export class $PlayerDetector {
        static INCLUDING_CREATIVE_PLAYERS: $PlayerDetector;
        static NO_CREATIVE_PLAYERS: $PlayerDetector;
        static SHEEP: $PlayerDetector;
    }
    export interface $PlayerDetector {
        detect(level: $ServerLevel, entitySelector: $PlayerDetector$EntitySelector, pos: $BlockPos_, maxDistance: number, arg4: boolean): $List<$UUID>;
    }
    /**
     * Values that may be interpreted as {@link $PlayerDetector}.
     */
    export type $PlayerDetector_ = ((arg0: $ServerLevel, arg1: $PlayerDetector$EntitySelector, arg2: $BlockPos, arg3: number, arg4: boolean) => $List_<$UUID_>);
    export class $TrialSpawnerConfig extends $Record {
        spawnRange(): number;
        spawnPotentialsDefinition(): $SimpleWeightedRandomList<$SpawnData>;
        ticksBetweenItemSpawners(): number;
        lootTablesToEject(): $SimpleWeightedRandomList<$ResourceKey<$LootTable>>;
        ticksBetweenSpawn(): number;
        simultaneousMobsAddedPerPlayer(): number;
        calculateTargetSimultaneousMobs(players: number): number;
        simultaneousMobs(): number;
        totalMobs(): number;
        calculateTargetTotalMobs(players: number): number;
        totalMobsAddedPerPlayer(): number;
        itemsToDropWhenOminous(): $ResourceKey<$LootTable>;
        static CODEC: $Codec<$TrialSpawnerConfig>;
        static DEFAULT: $TrialSpawnerConfig;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $SimpleWeightedRandomList<$SpawnData_>, arg7: $SimpleWeightedRandomList<$ResourceKey_<$LootTable>>, arg8: $ResourceKey_<$LootTable>);
    }
    export class $TrialSpawner$FlameParticle extends $Enum<$TrialSpawner$FlameParticle> {
        static values(): $TrialSpawner$FlameParticle[];
        static valueOf(arg0: string): $TrialSpawner$FlameParticle;
        static decode(id: number): $TrialSpawner$FlameParticle;
        encode(): number;
        static OMINOUS: $TrialSpawner$FlameParticle;
        particleType: $SimpleParticleType;
        static NORMAL: $TrialSpawner$FlameParticle;
    }
    /**
     * Values that may be interpreted as {@link $TrialSpawner$FlameParticle}.
     */
    export type $TrialSpawner$FlameParticle_ = "normal" | "ominous";
    export class $TrialSpawnerData {
        reset(): void;
        getUpdateTag(spawnerState: $TrialSpawnerState_): $CompoundTag;
        isReadyToSpawnNextMob(level: $ServerLevel, config: $TrialSpawnerConfig_, players: number): boolean;
        isReadyToOpenShutter(level: $ServerLevel, delay: number, targetCooldownLength: number): boolean;
        haveAllCurrentMobsDied(): boolean;
        hasFinishedSpawningAllMobs(config: $TrialSpawnerConfig_, players: number): boolean;
        countAdditionalPlayers(pos: $BlockPos_): number;
        isReadyToEjectItems(level: $ServerLevel, delay: number, targetCooldownLength: number): boolean;
        getOrCreateDisplayEntity(spawner: $TrialSpawner, level: $Level_, spawnerState: $TrialSpawnerState_): $Entity;
        getOrCreateNextSpawnData(spawner: $TrialSpawner, random: $RandomSource): $SpawnData;
        resetAfterBecomingOminous(spawner: $TrialSpawner, level: $ServerLevel): void;
        hasMobToSpawn(trialSpawner: $TrialSpawner, random: $RandomSource): boolean;
        tryDetectPlayers(level: $ServerLevel, pos: $BlockPos_, spawner: $TrialSpawner): void;
        isCooldownFinished(level: $ServerLevel): boolean;
        getDispensingItems(level: $ServerLevel, config: $TrialSpawnerConfig_, pos: $BlockPos_): $SimpleWeightedRandomList<$ItemStack>;
        getSpin(): number;
        getOSpin(): number;
        setEntityId(spawner: $TrialSpawner, random: $RandomSource, entityType: $EntityType_<never>): void;
        nextMobSpawnsAt: number;
        oSpin: number;
        totalMobsSpawned: number;
        static MAP_CODEC: $MapCodec<$TrialSpawnerData>;
        detectedPlayers: $Set<$UUID>;
        ejectingLootTable: ($ResourceKey<$LootTable>) | undefined;
        spin: number;
        displayEntity: $Entity;
        static TAG_SPAWN_DATA: string;
        cooldownEndsAt: number;
        currentMobs: $Set<$UUID>;
        nextSpawnData: ($SpawnData) | undefined;
        constructor();
        constructor(detectedPlayers: $Set_<$UUID_>, currentMobs: $Set_<$UUID_>, cooldownEndsAt: number, arg3: number, nextMobSpawnsAt: number, arg5: ($SpawnData_) | undefined, totalMobsSpawned: ($ResourceKey_<$LootTable>) | undefined);
        get OSpin(): number;
    }
    export class $TrialSpawnerState$SpinningMob {
    }
}
