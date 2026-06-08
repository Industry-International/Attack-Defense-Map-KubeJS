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
         * Remove all knockback from all affected *players*.
         */
        removeKnockback(): void;
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
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
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
        getPos(): $BlockPos;
        getEntity(): $BlockEntity;
        setBlockState(state: $BlockState_, flags: number): void;
        getBlockState(): $BlockState;
        getY(): number;
        getX(): number;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        offset(f: $Direction_, d: number): $LevelBlock;
        set(block: $Block_): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        getProperties(): $Map<string, string>;
        getItem(): $ItemStack;
        createEntity(type: $EntityType_<never>): $Entity;
        canSeeSkyFromBelowWater(): boolean;
        explode(properties: $ExplosionProperties_): $Explosion;
        getCenterX(): number;
        getCenterZ(): number;
        getDimensionKey(): $ResourceKey<$Level>;
        getDimension(): $ResourceLocation;
        setBlockState(state: $BlockState_): void;
        getZ(): number;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        getDrops(): $List<$ItemStack>;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getBlock(): $Block;
        getEntityData(): $CompoundTag;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        mergeEntityData(tag: $CompoundTag_): void;
        getSkyLight(): number;
        getCanSeeSky(): boolean;
        getEntityId(): string;
        getBlockLight(): number;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        toBlockStateString(): string;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        setEntityData(tag: $CompoundTag_): void;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        getUp(): $LevelBlock;
        getNorth(): $LevelBlock;
        getDown(): $LevelBlock;
        getSouth(): $LevelBlock;
        getCenterY(): number;
        getBiomeId(): $ResourceLocation;
        getLight(): number;
        popItem(item: $ItemStack_): void;
        getEast(): $LevelBlock;
        getWest(): $LevelBlock;
        getKey(): $ResourceKey<$Block>;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getId(): string;
        getTypeData(): $Map<string, $Object>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<$Block>>;
        getIdLocation(): $ResourceLocation;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        minecraftLevel: $Level;
        constructor(w: $Level_, p: $BlockPos_);
        get level(): $Level;
        get pos(): $BlockPos;
        get entity(): $BlockEntity;
        get y(): number;
        get x(): number;
        get properties(): $Map<string, string>;
        get item(): $ItemStack;
        get centerX(): number;
        get centerZ(): number;
        get dimensionKey(): $ResourceKey<$Level>;
        get dimension(): $ResourceLocation;
        get z(): number;
        get block(): $Block;
        get skyLight(): number;
        get canSeeSky(): boolean;
        get entityId(): string;
        get blockLight(): number;
        get up(): $LevelBlock;
        get north(): $LevelBlock;
        get down(): $LevelBlock;
        get south(): $LevelBlock;
        get centerY(): number;
        get biomeId(): $ResourceLocation;
        get light(): number;
        get east(): $LevelBlock;
        get west(): $LevelBlock;
        get key(): $ResourceKey<$Block>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get id(): string;
        get typeData(): $Map<string, $Object>;
        get tags(): $List<$ResourceLocation>;
        get tagKeys(): $List<$TagKey<$Block>>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
    }
    export class $ExplosionProperties extends $Record {
        largeParticles(): $ParticleOptions;
        smallParticles(): $ParticleOptions;
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        strength(): (number) | undefined;
        causesFire(): (boolean) | undefined;
        particles(): (boolean) | undefined;
        damageSource(): $DamageSource;
        explosionSound(): $Holder<$SoundEvent>;
        damageCalculator(): $ExplosionDamageCalculator;
        constructor(source: $Entity, damageSource: $DamageSource_, damageCalculator: $ExplosionDamageCalculator, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_, particles: (boolean) | undefined, smallParticles: $ParticleOptions_, largeParticles: $ParticleOptions_, explosionSound: $Holder_<$SoundEvent>);
    }
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
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
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $KubeJSWorldEventHandler {
        static serverLevelLoad(event: $LevelEvent$Load): void;
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        static serverTickEvent(event: $LevelTickEvent$Post): void;
        constructor();
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        getY(): number;
        getX(): number;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        offset(f: $Direction_, d: number): $LevelBlock;
        set(block: $Block_): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        getProperties(): $Map<string, string>;
        getLevel(): $Level;
        getItem(): $ItemStack;
        createEntity(type: $EntityType_<never>): $Entity;
        canSeeSkyFromBelowWater(): boolean;
        getPos(): $BlockPos;
        explode(properties: $ExplosionProperties_): $Explosion;
        getCenterX(): number;
        getCenterZ(): number;
        getDimensionKey(): $ResourceKey<$Level>;
        getDimension(): $ResourceLocation;
        getEntity(): $BlockEntity;
        setBlockState(state: $BlockState_): void;
        setBlockState(state: $BlockState_, flags: number): void;
        getBlockState(): $BlockState;
        getZ(): number;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        getDrops(): $List<$ItemStack>;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getBlock(): $Block;
        getEntityData(): $CompoundTag;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        mergeEntityData(tag: $CompoundTag_): void;
        getSkyLight(): number;
        getCanSeeSky(): boolean;
        getEntityId(): string;
        getBlockLight(): number;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        toBlockStateString(): string;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        setEntityData(tag: $CompoundTag_): void;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        getUp(): $LevelBlock;
        getNorth(): $LevelBlock;
        getDown(): $LevelBlock;
        getSouth(): $LevelBlock;
        getCenterY(): number;
        getBiomeId(): $ResourceLocation;
        getLight(): number;
        popItem(item: $ItemStack_): void;
        getEast(): $LevelBlock;
        getWest(): $LevelBlock;
        get y(): number;
        get x(): number;
        get properties(): $Map<string, string>;
        get level(): $Level;
        get item(): $ItemStack;
        get pos(): $BlockPos;
        get centerX(): number;
        get centerZ(): number;
        get dimensionKey(): $ResourceKey<$Level>;
        get dimension(): $ResourceLocation;
        get entity(): $BlockEntity;
        get z(): number;
        get block(): $Block;
        get skyLight(): number;
        get canSeeSky(): boolean;
        get entityId(): string;
        get blockLight(): number;
        get up(): $LevelBlock;
        get north(): $LevelBlock;
        get down(): $LevelBlock;
        get south(): $LevelBlock;
        get centerY(): number;
        get biomeId(): $ResourceLocation;
        get light(): number;
        get east(): $LevelBlock;
        get west(): $LevelBlock;
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
        getY(): number;
        getX(): number;
        getLevel(): $Level;
        getBlock(): $LevelBlock;
        getZ(): number;
        getExploder(): $LivingEntity;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
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
        get position(): $Vec3;
        get y(): number;
        get x(): number;
        get level(): $Level;
        get block(): $LevelBlock;
        get z(): number;
        get exploder(): $LivingEntity;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
}
