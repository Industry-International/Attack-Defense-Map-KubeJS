import { $Function_, $Function, $ToIntFunction } from "@package/java/util/function";
import { $NoteBlockInstrument } from "@package/net/minecraft/world/level/block/state/properties";
import { $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $BlockBehaviour$StateArgumentPredicate, $BlockBehaviour$OffsetFunction_, $BlockBehaviour$Properties, $BlockState, $BlockBehaviour$OffsetFunction, $BlockBehaviour$StatePredicate } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EntityType, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $AttributeSupplier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map } from "@package/java/util";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/fabricmc/fabric/mixin/object/builder" {
    export class $DefaultAttributeRegistryAccessor {
        static getRegistry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
        static get registry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
    }
    export interface $DefaultAttributeRegistryAccessor {
    }
    export class $AbstractBlockSettingsAccessor {
    }
    export interface $AbstractBlockSettingsAccessor {
        getIsAir(): boolean;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        setIsAir(arg0: boolean): void;
        setLiquid(arg0: boolean): void;
        getLiquid(): boolean;
        getIsRandomlyTicking(): boolean;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getSpawnTerrainParticles(): boolean;
        getRequiredFeatures(): $FeatureFlagSet;
        setIsRandomlyTicking(arg0: boolean): void;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        setSpawnTerrainParticles(arg0: boolean): void;
        getLuminance(): $ToIntFunction<$BlockState>;
        getHasCollision(): boolean;
        getDestroyTime(): number;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        setCanOcclude(arg0: boolean): void;
        setReplaceable(arg0: boolean): void;
        getDynamicShape(): boolean;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        setHasCollision(arg0: boolean): void;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getReplaceable(): boolean;
        getForceSolidOn(): boolean;
        getIgnitedByLava(): boolean;
        setDynamicShape(arg0: boolean): void;
        setForceSolidOn(arg0: boolean): void;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        getPushReaction(): $PushReaction;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        getForceSolidOff(): boolean;
        setIgnitedByLava(arg0: boolean): void;
        getCanOcclude(): boolean;
        setForceSolidOff(arg0: boolean): void;
        getInstrument(): $NoteBlockInstrument;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        getDrops(): $ResourceKey<$LootTable>;
        getMapColor(): $Function<$BlockState, $MapColor>;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        isRequiresCorrectToolForDrops(): boolean;
        getSoundType(): $SoundType;
        getExplosionResistance(): number;
        getJumpFactor(): number;
        getSpeedFactor(): number;
        getFriction(): number;
        get isRedstoneConductor(): $BlockBehaviour$StatePredicate;
        get emissiveRendering(): $BlockBehaviour$StatePredicate;
        get luminance(): $ToIntFunction<$BlockState>;
        get destroyTime(): number;
        get isSuffocating(): $BlockBehaviour$StatePredicate;
        get hasPostProcess(): $BlockBehaviour$StatePredicate;
        get isViewBlocking(): $BlockBehaviour$StatePredicate;
        get pushReaction(): $PushReaction;
        get instrument(): $NoteBlockInstrument;
        get isValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        get soundType(): $SoundType;
        get explosionResistance(): number;
        get jumpFactor(): number;
        get speedFactor(): number;
        get friction(): number;
    }
    export class $AbstractBlockAccessor {
    }
    export interface $AbstractBlockAccessor {
        getProperties(): $BlockBehaviour$Properties;
        get properties(): $BlockBehaviour$Properties;
    }
    /**
     * Values that may be interpreted as {@link $AbstractBlockAccessor}.
     */
    export type $AbstractBlockAccessor_ = (() => $BlockBehaviour$Properties);
}
