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
        getLiquid(): boolean;
        getHasCollision(): boolean;
        getExplosionResistance(): number;
        getDrops(): $ResourceKey<$LootTable>;
        getRequiredFeatures(): $FeatureFlagSet;
        getSpawnTerrainParticles(): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        getIsRandomlyTicking(): boolean;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        setSpawnTerrainParticles(arg0: boolean): void;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        getLuminance(): $ToIntFunction<$BlockState>;
        getSoundType(): $SoundType;
        getFriction(): number;
        isRequiresCorrectToolForDrops(): boolean;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        getSpeedFactor(): number;
        getJumpFactor(): number;
        getMapColor(): $Function<$BlockState, $MapColor>;
        setReplaceable(arg0: boolean): void;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        setForceSolidOff(arg0: boolean): void;
        getForceSolidOff(): boolean;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        setCanOcclude(arg0: boolean): void;
        getCanOcclude(): boolean;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        setForceSolidOn(arg0: boolean): void;
        getForceSolidOn(): boolean;
        setHasCollision(arg0: boolean): void;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        getInstrument(): $NoteBlockInstrument;
        getDynamicShape(): boolean;
        setIgnitedByLava(arg0: boolean): void;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getIgnitedByLava(): boolean;
        getPushReaction(): $PushReaction;
        getDestroyTime(): number;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        getReplaceable(): boolean;
        setDynamicShape(arg0: boolean): void;
        setLiquid(arg0: boolean): void;
        getIsAir(): boolean;
        setIsAir(arg0: boolean): void;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        get explosionResistance(): number;
        get isRedstoneConductor(): $BlockBehaviour$StatePredicate;
        get emissiveRendering(): $BlockBehaviour$StatePredicate;
        get luminance(): $ToIntFunction<$BlockState>;
        get soundType(): $SoundType;
        get friction(): number;
        get speedFactor(): number;
        get jumpFactor(): number;
        get isValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        get hasPostProcess(): $BlockBehaviour$StatePredicate;
        get instrument(): $NoteBlockInstrument;
        get isViewBlocking(): $BlockBehaviour$StatePredicate;
        get pushReaction(): $PushReaction;
        get destroyTime(): number;
        get isSuffocating(): $BlockBehaviour$StatePredicate;
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
