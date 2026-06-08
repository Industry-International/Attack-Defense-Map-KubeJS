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
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
        /**
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
        /**
         * Remove a block from the list of affected blocks.
         */
        removeAffectedBlock(block: $LevelBlock): void;
        /**
         * Remove all blocks from the list of affected blocks.
         */
        removeAllAffectedBlocks(): void;
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
        getBlockState(): $BlockState;
        getPos(): $BlockPos;
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getItem(): $ItemStack;
        createEntity(type: $EntityType_<never>): $Entity;
        getDimension(): $ResourceLocation;
        getCenterY(): number;
        popItem(item: $ItemStack_): void;
        getBiomeId(): $ResourceLocation;
        getEast(): $LevelBlock;
        getNorth(): $LevelBlock;
        getUp(): $LevelBlock;
        getWest(): $LevelBlock;
        getSouth(): $LevelBlock;
        getDown(): $LevelBlock;
        getLight(): number;
        getY(): number;
        getX(): number;
        getBlock(): $Block;
        getEntityData(): $CompoundTag;
        setBlockState(state: $BlockState_): void;
        getZ(): number;
        explode(properties: $ExplosionProperties_): $Explosion;
        getCenterX(): number;
        getCenterZ(): number;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        getSkyLight(): number;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        getCanSeeSky(): boolean;
        getEntityId(): string;
        mergeEntityData(tag: $CompoundTag_): void;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(effectOnly: boolean): void;
        spawnLightning(): void;
        getBlockLight(): number;
        toBlockStateString(): string;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        getDimensionKey(): $ResourceKey<$Level>;
        canSeeSkyFromBelowWater(): boolean;
        getTypeData(): $Map<string, $Object>;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
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
        get dimension(): $ResourceLocation;
        get centerY(): number;
        get biomeId(): $ResourceLocation;
        get east(): $LevelBlock;
        get north(): $LevelBlock;
        get up(): $LevelBlock;
        get west(): $LevelBlock;
        get south(): $LevelBlock;
        get down(): $LevelBlock;
        get light(): number;
        get y(): number;
        get x(): number;
        get block(): $Block;
        get z(): number;
        get centerX(): number;
        get centerZ(): number;
        get skyLight(): number;
        get canSeeSky(): boolean;
        get entityId(): string;
        get blockLight(): number;
        get dimensionKey(): $ResourceKey<$Level>;
        get typeData(): $Map<string, $Object>;
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $ExplosionProperties extends $Record {
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        strength(): (number) | undefined;
        particles(): (boolean) | undefined;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        damageCalculator(): $ExplosionDamageCalculator;
        explosionSound(): $Holder<$SoundEvent>;
        damageSource(): $DamageSource;
        smallParticles(): $ParticleOptions;
        largeParticles(): $ParticleOptions;
        causesFire(): (boolean) | undefined;
        constructor(source: $Entity, damageSource: $DamageSource_, damageCalculator: $ExplosionDamageCalculator, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_, particles: (boolean) | undefined, smallParticles: $ParticleOptions_, largeParticles: $ParticleOptions_, explosionSound: $Holder_<$SoundEvent>);
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
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        static serverLevelLoad(event: $LevelEvent$Load): void;
        static serverTickEvent(event: $LevelTickEvent$Post): void;
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
        createEntity(type: $EntityType_<never>): $Entity;
        getDimension(): $ResourceLocation;
        getCenterY(): number;
        popItem(item: $ItemStack_): void;
        getBiomeId(): $ResourceLocation;
        getEast(): $LevelBlock;
        getNorth(): $LevelBlock;
        getUp(): $LevelBlock;
        getWest(): $LevelBlock;
        getSouth(): $LevelBlock;
        getDown(): $LevelBlock;
        getLight(): number;
        getEntity(): $BlockEntity;
        getY(): number;
        getX(): number;
        getBlock(): $Block;
        getEntityData(): $CompoundTag;
        setBlockState(state: $BlockState_): void;
        setBlockState(state: $BlockState_, flags: number): void;
        getBlockState(): $BlockState;
        getZ(): number;
        explode(properties: $ExplosionProperties_): $Explosion;
        getPos(): $BlockPos;
        getCenterX(): number;
        getCenterZ(): number;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        getSkyLight(): number;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        getCanSeeSky(): boolean;
        getEntityId(): string;
        mergeEntityData(tag: $CompoundTag_): void;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(effectOnly: boolean): void;
        spawnLightning(): void;
        getBlockLight(): number;
        toBlockStateString(): string;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        getDimensionKey(): $ResourceKey<$Level>;
        canSeeSkyFromBelowWater(): boolean;
        get properties(): $Map<string, string>;
        get level(): $Level;
        get item(): $ItemStack;
        get dimension(): $ResourceLocation;
        get centerY(): number;
        get biomeId(): $ResourceLocation;
        get east(): $LevelBlock;
        get north(): $LevelBlock;
        get up(): $LevelBlock;
        get west(): $LevelBlock;
        get south(): $LevelBlock;
        get down(): $LevelBlock;
        get light(): number;
        get entity(): $BlockEntity;
        get y(): number;
        get x(): number;
        get block(): $Block;
        get z(): number;
        get pos(): $BlockPos;
        get centerX(): number;
        get centerZ(): number;
        get skyLight(): number;
        get canSeeSky(): boolean;
        get entityId(): string;
        get blockLight(): number;
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
        getPosition(): $Vec3;
        getY(): number;
        getX(): number;
        getBlock(): $LevelBlock;
        getZ(): number;
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
        get level(): $Level;
        get position(): $Vec3;
        get y(): number;
        get x(): number;
        get block(): $LevelBlock;
        get z(): number;
        get exploder(): $LivingEntity;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
}
