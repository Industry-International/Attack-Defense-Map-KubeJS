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
         * Gets a list of all entities affected by the explosion.
         */
        getAffectedEntities(): $EntityArrayList;
        /**
         * Gets a list of all blocks affected by the explosion.
         */
        getAffectedBlocks(): $List<$LevelBlock>;
        /**
         * Remove all knockback from all affected *players*.
         */
        removeKnockback(): void;
        /**
         * Remove all blocks from the list of affected blocks.
         */
        removeAllAffectedBlocks(): void;
        /**
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
        /**
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
        /**
         * Remove a block from the list of affected blocks.
         */
        removeAffectedBlock(block: $LevelBlock): void;
        constructor(level: $Level_, explosion: $Explosion, affectedEntities: $List_<$Entity>);
        get affectedEntities(): $EntityArrayList;
        get affectedBlocks(): $List<$LevelBlock>;
    }
    export class $WrappedSpawner extends $Record {
        static of(spawner: $Either<$BlockEntity, $Entity>): $WrappedSpawner;
        block(): $LevelBlock;
        isWorldgen(): boolean;
        entity(): $Entity;
        constructor(entity: $Entity, block: $LevelBlock);
        get worldgen(): boolean;
    }
    export class $KubeLevelEvent {
    }
    export interface $KubeLevelEvent extends $KubeEvent {
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    /**
     * Values that may be interpreted as {@link $KubeLevelEvent}.
     */
    export type $KubeLevelEvent_ = (() => $Level_);
    export class $CachedLevelBlock implements $LevelBlock {
        clearCache(): void;
        getLevel(): $Level;
        getEntity(): $BlockEntity;
        getBlockState(): $BlockState;
        getPos(): $BlockPos;
        setBlockState(state: $BlockState_, flags: number): void;
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getItem(): $ItemStack;
        getDimension(): $ResourceLocation;
        createEntity(type: $EntityType_<never>): $Entity;
        getY(): number;
        getX(): number;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        spawnLightning(effectOnly: boolean): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(): void;
        getEntityId(): string;
        getPlayersInRadius(): $EntityArrayList;
        getPlayersInRadius(radius: number): $EntityArrayList;
        toBlockStateString(): string;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        getCanSeeSky(): boolean;
        getBlockLight(): number;
        setEntityData(tag: $CompoundTag_): void;
        mergeEntityData(tag: $CompoundTag_): void;
        getSkyLight(): number;
        getBlock(): $Block;
        getEntityData(): $CompoundTag;
        canSeeSkyFromBelowWater(): boolean;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        explode(properties: $ExplosionProperties_): $Explosion;
        getCenterZ(): number;
        getCenterX(): number;
        getZ(): number;
        getSouth(): $LevelBlock;
        getWest(): $LevelBlock;
        getEast(): $LevelBlock;
        getDown(): $LevelBlock;
        popItem(item: $ItemStack_): void;
        getBiomeId(): $ResourceLocation;
        getUp(): $LevelBlock;
        getNorth(): $LevelBlock;
        getLight(): number;
        getCenterY(): number;
        setBlockState(state: $BlockState_): void;
        getDimensionKey(): $ResourceKey<$Level>;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        getTypeData(): $Map<string, $Object>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getTagKeys(): $List<$TagKey<$Block>>;
        getIdLocation(): $ResourceLocation;
        getTags(): $List<$ResourceLocation>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        minecraftLevel: $Level;
        constructor(w: $Level_, p: $BlockPos_);
        get level(): $Level;
        get entity(): $BlockEntity;
        get pos(): $BlockPos;
        get properties(): $Map<string, string>;
        get item(): $ItemStack;
        get dimension(): $ResourceLocation;
        get y(): number;
        get x(): number;
        get entityId(): string;
        get canSeeSky(): boolean;
        get blockLight(): number;
        get skyLight(): number;
        get block(): $Block;
        get centerZ(): number;
        get centerX(): number;
        get z(): number;
        get south(): $LevelBlock;
        get west(): $LevelBlock;
        get east(): $LevelBlock;
        get down(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get up(): $LevelBlock;
        get north(): $LevelBlock;
        get light(): number;
        get centerY(): number;
        get dimensionKey(): $ResourceKey<$Level>;
        get typeData(): $Map<string, $Object>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
        get idLocation(): $ResourceLocation;
        get tags(): $List<$ResourceLocation>;
    }
    export class $ExplosionProperties extends $Record {
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        damageCalculator(): $ExplosionDamageCalculator;
        explosionSound(): $Holder<$SoundEvent>;
        damageSource(): $DamageSource;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        smallParticles(): $ParticleOptions;
        largeParticles(): $ParticleOptions;
        strength(): (number) | undefined;
        particles(): (boolean) | undefined;
        causesFire(): (boolean) | undefined;
        constructor(source: $Entity, damageSource: $DamageSource_, damageCalculator: $ExplosionDamageCalculator, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_, particles: (boolean) | undefined, smallParticles: $ParticleOptions_, largeParticles: $ParticleOptions_, explosionSound: $Holder_<$SoundEvent>);
    }
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(l: $Level_);
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $KubeJSWorldEventHandler {
        static serverTickEvent(event: $LevelTickEvent$Post): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        static serverLevelLoad(event: $LevelEvent$Load): void;
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        constructor();
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getLevel(): $Level;
        getItem(): $ItemStack;
        getDimension(): $ResourceLocation;
        createEntity(type: $EntityType_<never>): $Entity;
        getEntity(): $BlockEntity;
        getY(): number;
        getX(): number;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        spawnLightning(effectOnly: boolean): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(): void;
        getEntityId(): string;
        getPlayersInRadius(): $EntityArrayList;
        getPlayersInRadius(radius: number): $EntityArrayList;
        toBlockStateString(): string;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        getCanSeeSky(): boolean;
        getBlockLight(): number;
        setEntityData(tag: $CompoundTag_): void;
        mergeEntityData(tag: $CompoundTag_): void;
        getSkyLight(): number;
        getBlockState(): $BlockState;
        getBlock(): $Block;
        getEntityData(): $CompoundTag;
        canSeeSkyFromBelowWater(): boolean;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        explode(properties: $ExplosionProperties_): $Explosion;
        getPos(): $BlockPos;
        getCenterZ(): number;
        getCenterX(): number;
        getZ(): number;
        getSouth(): $LevelBlock;
        getWest(): $LevelBlock;
        getEast(): $LevelBlock;
        getDown(): $LevelBlock;
        popItem(item: $ItemStack_): void;
        getBiomeId(): $ResourceLocation;
        getUp(): $LevelBlock;
        getNorth(): $LevelBlock;
        getLight(): number;
        getCenterY(): number;
        setBlockState(state: $BlockState_): void;
        setBlockState(state: $BlockState_, flags: number): void;
        getDimensionKey(): $ResourceKey<$Level>;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        get properties(): $Map<string, string>;
        get level(): $Level;
        get item(): $ItemStack;
        get dimension(): $ResourceLocation;
        get entity(): $BlockEntity;
        get y(): number;
        get x(): number;
        get entityId(): string;
        get canSeeSky(): boolean;
        get blockLight(): number;
        get skyLight(): number;
        get block(): $Block;
        get pos(): $BlockPos;
        get centerZ(): number;
        get centerX(): number;
        get z(): number;
        get south(): $LevelBlock;
        get west(): $LevelBlock;
        get east(): $LevelBlock;
        get down(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get up(): $LevelBlock;
        get north(): $LevelBlock;
        get light(): number;
        get centerY(): number;
        get dimensionKey(): $ResourceKey<$Level>;
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
        getLevel(): $Level;
        getBlock(): $LevelBlock;
        getY(): number;
        getX(): number;
        getZ(): number;
        getPosition(): $Vec3;
        getExploder(): $LivingEntity;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(level: $Level_, explosion: $Explosion);
        get level(): $Level;
        get block(): $LevelBlock;
        get y(): number;
        get x(): number;
        get z(): number;
        get position(): $Vec3;
        get exploder(): $LivingEntity;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
}
