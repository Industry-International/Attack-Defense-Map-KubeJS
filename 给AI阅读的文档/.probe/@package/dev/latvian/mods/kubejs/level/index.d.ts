import { $Explosion, $Level$ExplosionInteraction, $Level$ExplosionInteraction_, $Level, $ExplosionDamageCalculator, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockProviderKJS, $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Record, $Object } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $ExplosionEvent$Detonate, $LevelEvent$Unload, $ExplosionEvent$Start, $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as ruletest from "@package/dev/latvian/mods/kubejs/level/ruletest";

declare module "@package/dev/latvian/mods/kubejs/level" {
    export class $ExplosionKubeEvent$After extends $ExplosionKubeEvent {
        /**
         * Gets a list of all blocks affected by the explosion.
         */
        getAffectedBlocks(): $List<$LevelBlock>;
        /**
         * Gets a list of all entities affected by the explosion.
         */
        getAffectedEntities(): $EntityArrayList;
        /**
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
        /**
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
        /**
         * Remove all blocks from the list of affected blocks.
         */
        removeAllAffectedBlocks(): void;
        /**
         * Remove a block from the list of affected blocks.
         */
        removeAffectedBlock(block: $LevelBlock): void;
        /**
         * Remove all knockback from all affected *players*.
         */
        removeKnockback(): void;
        constructor(level: $Level_, explosion: $Explosion, affectedEntities: $List_<$Entity>);
        get affectedBlocks(): $List<$LevelBlock>;
        get affectedEntities(): $EntityArrayList;
    }
    export class $WrappedSpawner extends $Record {
        static of(spawner: $Either<$BlockEntity, $Entity>): $WrappedSpawner;
        block(): $LevelBlock;
        entity(): $Entity;
        isWorldgen(): boolean;
        constructor(entity: $Entity, block: $LevelBlock);
        get worldgen(): boolean;
    }
    export class $KubeLevelEvent {
    }
    export interface $KubeLevelEvent extends $KubeEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    /**
     * Values that may be interpreted as {@link $KubeLevelEvent}.
     */
    export type $KubeLevelEvent_ = (() => $Level_);
    export class $CachedLevelBlock implements $LevelBlock {
        clearCache(): void;
        getLevel(): $Level;
        getEntity(): $BlockEntity;
        setBlockState(state: $BlockState_, flags: number): void;
        getPos(): $BlockPos;
        getBlockState(): $BlockState;
        createEntity(type: $EntityType_<never>): $Entity;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getItem(): $ItemStack;
        getY(): number;
        getDimension(): $ResourceLocation;
        getLight(): number;
        getWest(): $LevelBlock;
        getNorth(): $LevelBlock;
        getDown(): $LevelBlock;
        getSouth(): $LevelBlock;
        getEast(): $LevelBlock;
        popItem(item: $ItemStack_): void;
        getCenterY(): number;
        getBiomeId(): $ResourceLocation;
        getUp(): $LevelBlock;
        setBlockState(state: $BlockState_): void;
        getCenterX(): number;
        getCenterZ(): number;
        explode(properties: $ExplosionProperties_): $Explosion;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        getBlock(): $Block;
        canSeeSkyFromBelowWater(): boolean;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        getZ(): number;
        getX(): number;
        getEntityId(): string;
        getEntityData(): $CompoundTag;
        getDimensionKey(): $ResourceKey<$Level>;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        mergeEntityData(tag: $CompoundTag_): void;
        getSkyLight(): number;
        toBlockStateString(): string;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        getBlockLight(): number;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        getCanSeeSky(): boolean;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean): void;
        getKey(): $ResourceKey<$Block>;
        getTypeData(): $Map<string, $Object>;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        asHolder(): $Holder<$Block>;
        getId(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        minecraftLevel: $Level;
        constructor(w: $Level_, p: $BlockPos_);
        get level(): $Level;
        get entity(): $BlockEntity;
        get pos(): $BlockPos;
        get properties(): $Map<string, string>;
        get item(): $ItemStack;
        get y(): number;
        get dimension(): $ResourceLocation;
        get light(): number;
        get west(): $LevelBlock;
        get north(): $LevelBlock;
        get down(): $LevelBlock;
        get south(): $LevelBlock;
        get east(): $LevelBlock;
        get centerY(): number;
        get biomeId(): $ResourceLocation;
        get up(): $LevelBlock;
        get centerX(): number;
        get centerZ(): number;
        get block(): $Block;
        get z(): number;
        get x(): number;
        get entityId(): string;
        get dimensionKey(): $ResourceKey<$Level>;
        get skyLight(): number;
        get blockLight(): number;
        get canSeeSky(): boolean;
        get key(): $ResourceKey<$Block>;
        get typeData(): $Map<string, $Object>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get id(): string;
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $ExplosionProperties extends $Record {
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        causesFire(): (boolean) | undefined;
        particles(): (boolean) | undefined;
        strength(): (number) | undefined;
        damageSource(): $DamageSource;
        damageCalculator(): $ExplosionDamageCalculator;
        explosionSound(): $Holder<$SoundEvent>;
        largeParticles(): $ParticleOptions;
        smallParticles(): $ParticleOptions;
        constructor(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_ | null, particles: (boolean) | undefined, smallParticles: $ParticleOptions_ | null, largeParticles: $ParticleOptions_ | null, explosionSound: $Holder_<$SoundEvent> | null);
    }
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(l: $Level_);
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $KubeJSWorldEventHandler {
        static serverTickEvent(event: $LevelTickEvent$Post): void;
        static serverLevelLoad(event: $LevelEvent$Load): void;
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        constructor();
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        createEntity(type: $EntityType_<never>): $Entity;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getLevel(): $Level;
        getItem(): $ItemStack;
        getY(): number;
        getDimension(): $ResourceLocation;
        getLight(): number;
        getWest(): $LevelBlock;
        getNorth(): $LevelBlock;
        getDown(): $LevelBlock;
        getSouth(): $LevelBlock;
        getEast(): $LevelBlock;
        popItem(item: $ItemStack_): void;
        getCenterY(): number;
        getBiomeId(): $ResourceLocation;
        getUp(): $LevelBlock;
        getEntity(): $BlockEntity;
        setBlockState(state: $BlockState_, flags: number): void;
        setBlockState(state: $BlockState_): void;
        getCenterX(): number;
        getCenterZ(): number;
        getPos(): $BlockPos;
        explode(properties: $ExplosionProperties_): $Explosion;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        getBlock(): $Block;
        canSeeSkyFromBelowWater(): boolean;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        getBlockState(): $BlockState;
        getZ(): number;
        getX(): number;
        getEntityId(): string;
        getEntityData(): $CompoundTag;
        getDimensionKey(): $ResourceKey<$Level>;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        mergeEntityData(tag: $CompoundTag_): void;
        getSkyLight(): number;
        toBlockStateString(): string;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        getBlockLight(): number;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        getCanSeeSky(): boolean;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean): void;
        get properties(): $Map<string, string>;
        get level(): $Level;
        get item(): $ItemStack;
        get y(): number;
        get dimension(): $ResourceLocation;
        get light(): number;
        get west(): $LevelBlock;
        get north(): $LevelBlock;
        get down(): $LevelBlock;
        get south(): $LevelBlock;
        get east(): $LevelBlock;
        get centerY(): number;
        get biomeId(): $ResourceLocation;
        get up(): $LevelBlock;
        get entity(): $BlockEntity;
        get centerX(): number;
        get centerZ(): number;
        get pos(): $BlockPos;
        get block(): $Block;
        get z(): number;
        get x(): number;
        get entityId(): string;
        get dimensionKey(): $ResourceKey<$Level>;
        get skyLight(): number;
        get blockLight(): number;
        get canSeeSky(): boolean;
    }
    export class $ExplosionKubeEvent$Before extends $ExplosionKubeEvent {
        /**
         * Returns the size of the explosion.
         */
        getSize(): number;
        /**
         * Sets the size of the explosion.
         */
        setSize(s: number): void;
        constructor(level: $Level_, explosion: $Explosion);
    }
    export class $ExplosionKubeEvent implements $KubeLevelEvent {
        getPosition(): $Vec3;
        getLevel(): $Level;
        getY(): number;
        getBlock(): $LevelBlock;
        getZ(): number;
        getX(): number;
        getExploder(): $LivingEntity;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(level: $Level_, explosion: $Explosion);
        get position(): $Vec3;
        get level(): $Level;
        get y(): number;
        get block(): $LevelBlock;
        get z(): number;
        get x(): number;
        get exploder(): $LivingEntity;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
}
