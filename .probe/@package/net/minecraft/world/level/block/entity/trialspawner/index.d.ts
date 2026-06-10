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
        setState(arg0: $Level_, arg1: $TrialSpawnerState_): void;
        markUpdated(): void;
    }
    export class $TrialSpawner implements $IOwnedSpawner {
        getState(): $TrialSpawnerState;
        setState(arg0: $Level_, arg1: $TrialSpawnerState_): void;
        getOwner(): $Either<$BlockEntity, $Entity>;
        getData(): $TrialSpawnerData;
        getConfig(): $TrialSpawnerConfig;
        codec(): $Codec<$TrialSpawner>;
        spawnMob(arg0: $ServerLevel, arg1: $BlockPos_): ($UUID) | undefined;
        isOminous(): boolean;
        /**
         * @deprecated
         */
        overridePeacefulAndMobSpawnRule(): void;
        tickServer(arg0: $ServerLevel, arg1: $BlockPos_, arg2: boolean): void;
        tickClient(arg0: $Level_, arg1: $BlockPos_, arg2: boolean): void;
        getOminousConfig(): $TrialSpawnerConfig;
        markUpdated(): void;
        removeOminous(arg0: $ServerLevel, arg1: $BlockPos_): void;
        ejectReward(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $ResourceKey_<$LootTable>): void;
        canSpawnInLevel(arg0: $Level_): boolean;
        /**
         * @deprecated
         */
        setPlayerDetector(arg0: $PlayerDetector_): void;
        applyOminous(arg0: $ServerLevel, arg1: $BlockPos_): void;
        getEntitySelector(): $PlayerDetector$EntitySelector;
        static addSpawnParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource, arg3: $SimpleParticleType): void;
        getNormalConfig(): $TrialSpawnerConfig;
        getPlayerDetector(): $PlayerDetector;
        getRequiredPlayerRange(): number;
        getTargetCooldownLength(): number;
        static addBecomeOminousParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static addEjectItemParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        static addDetectPlayerParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource, arg3: number, arg4: $ParticleOptions_): void;
        static DETECT_PLAYER_SPAWN_BUFFER: number;
        static NORMAL_CONFIG_TAG_NAME: string;
        static OMINOUS_CONFIG_TAG_NAME: string;
        constructor(arg0: $TrialSpawnerConfig_, arg1: $TrialSpawnerConfig_, arg2: $TrialSpawnerData, arg3: number, arg4: number, arg5: $TrialSpawner$StateAccessor, arg6: $PlayerDetector_, arg7: $PlayerDetector$EntitySelector);
        constructor(arg0: $TrialSpawner$StateAccessor, arg1: $PlayerDetector_, arg2: $PlayerDetector$EntitySelector);
        get owner(): $Either<$BlockEntity, $Entity>;
        get data(): $TrialSpawnerData;
        get config(): $TrialSpawnerConfig;
        get ominous(): boolean;
        get ominousConfig(): $TrialSpawnerConfig;
        get entitySelector(): $PlayerDetector$EntitySelector;
        get normalConfig(): $TrialSpawnerConfig;
        get requiredPlayerRange(): number;
        get targetCooldownLength(): number;
    }
    export class $TrialSpawnerState extends $Enum<$TrialSpawnerState> implements $StringRepresentable {
        static values(): $TrialSpawnerState[];
        static valueOf(arg0: string): $TrialSpawnerState;
        lightLevel(): number;
        getSerializedName(): string;
        hasSpinningMob(): boolean;
        tickAndGetNext(arg0: $BlockPos_, arg1: $TrialSpawner, arg2: $ServerLevel): $TrialSpawnerState;
        spinningMobSpeed(): number;
        emitParticles(arg0: $Level_, arg1: $BlockPos_, arg2: boolean): void;
        isCapableOfSpawning(): boolean;
        getRemappedEnumConstantName(): string;
        static COOLDOWN: $TrialSpawnerState;
        static ACTIVE: $TrialSpawnerState;
        static INACTIVE: $TrialSpawnerState;
        static EJECTING_REWARD: $TrialSpawnerState;
        static WAITING_FOR_REWARD_EJECTION: $TrialSpawnerState;
        static WAITING_FOR_PLAYERS: $TrialSpawnerState;
        get serializedName(): string;
        get capableOfSpawning(): boolean;
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
        static onlySelectPlayers(arg0: $List_<$Player>): $PlayerDetector$EntitySelector;
        static onlySelectPlayer(arg0: $Player): $PlayerDetector$EntitySelector;
        static SELECT_FROM_LEVEL: $PlayerDetector$EntitySelector;
    }
    export interface $PlayerDetector$EntitySelector {
        getEntities<T extends $Entity>(arg0: $ServerLevel, arg1: $EntityTypeTest<$Entity, T>, arg2: $AABB_, arg3: $Predicate_<T>): $List<T>;
        getPlayers(arg0: $ServerLevel, arg1: $Predicate_<$Player>): $List<$Player>;
    }
    export class $PlayerDetector {
        static INCLUDING_CREATIVE_PLAYERS: $PlayerDetector;
        static NO_CREATIVE_PLAYERS: $PlayerDetector;
        static SHEEP: $PlayerDetector;
    }
    export interface $PlayerDetector {
        detect(arg0: $ServerLevel, arg1: $PlayerDetector$EntitySelector, arg2: $BlockPos_, arg3: number, arg4: boolean): $List<$UUID>;
    }
    /**
     * Values that may be interpreted as {@link $PlayerDetector}.
     */
    export type $PlayerDetector_ = ((arg0: $ServerLevel, arg1: $PlayerDetector$EntitySelector, arg2: $BlockPos, arg3: number, arg4: boolean) => $List_<$UUID_>);
    export class $TrialSpawnerConfig extends $Record {
        spawnRange(): number;
        totalMobs(): number;
        ticksBetweenSpawn(): number;
        lootTablesToEject(): $SimpleWeightedRandomList<$ResourceKey<$LootTable>>;
        ticksBetweenItemSpawners(): number;
        spawnPotentialsDefinition(): $SimpleWeightedRandomList<$SpawnData>;
        simultaneousMobsAddedPerPlayer(): number;
        calculateTargetSimultaneousMobs(arg0: number): number;
        simultaneousMobs(): number;
        totalMobsAddedPerPlayer(): number;
        itemsToDropWhenOminous(): $ResourceKey<$LootTable>;
        calculateTargetTotalMobs(arg0: number): number;
        static CODEC: $Codec<$TrialSpawnerConfig>;
        static DEFAULT: $TrialSpawnerConfig;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $SimpleWeightedRandomList<$SpawnData_>, arg7: $SimpleWeightedRandomList<$ResourceKey_<$LootTable>>, arg8: $ResourceKey_<$LootTable>);
    }
    export class $TrialSpawner$FlameParticle extends $Enum<$TrialSpawner$FlameParticle> {
        static values(): $TrialSpawner$FlameParticle[];
        static valueOf(arg0: string): $TrialSpawner$FlameParticle;
        static decode(arg0: number): $TrialSpawner$FlameParticle;
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
        getUpdateTag(arg0: $TrialSpawnerState_): $CompoundTag;
        getOSpin(): number;
        setEntityId(arg0: $TrialSpawner, arg1: $RandomSource, arg2: $EntityType_<never>): void;
        isCooldownFinished(arg0: $ServerLevel): boolean;
        getDispensingItems(arg0: $ServerLevel, arg1: $TrialSpawnerConfig_, arg2: $BlockPos_): $SimpleWeightedRandomList<$ItemStack>;
        hasMobToSpawn(arg0: $TrialSpawner, arg1: $RandomSource): boolean;
        tryDetectPlayers(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $TrialSpawner): void;
        getSpin(): number;
        resetAfterBecomingOminous(arg0: $TrialSpawner, arg1: $ServerLevel): void;
        getOrCreateNextSpawnData(arg0: $TrialSpawner, arg1: $RandomSource): $SpawnData;
        countAdditionalPlayers(arg0: $BlockPos_): number;
        getOrCreateDisplayEntity(arg0: $TrialSpawner, arg1: $Level_, arg2: $TrialSpawnerState_): $Entity;
        isReadyToSpawnNextMob(arg0: $ServerLevel, arg1: $TrialSpawnerConfig_, arg2: number): boolean;
        haveAllCurrentMobsDied(): boolean;
        isReadyToOpenShutter(arg0: $ServerLevel, arg1: number, arg2: number): boolean;
        isReadyToEjectItems(arg0: $ServerLevel, arg1: number, arg2: number): boolean;
        hasFinishedSpawningAllMobs(arg0: $TrialSpawnerConfig_, arg1: number): boolean;
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
        constructor(arg0: $Set_<$UUID_>, arg1: $Set_<$UUID_>, arg2: number, arg3: number, arg4: number, arg5: ($SpawnData_) | undefined, arg6: ($ResourceKey_<$LootTable>) | undefined);
        get OSpin(): number;
    }
    export class $TrialSpawnerState$SpinningMob {
    }
}
