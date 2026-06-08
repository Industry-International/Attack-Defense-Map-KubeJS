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
        getMapColor(): $Function<$BlockState, $MapColor>;
        getSoundType(): $SoundType;
        getFriction(): number;
        getLuminance(): $ToIntFunction<$BlockState>;
        getLiquid(): boolean;
        getDrops(): $ResourceKey<$LootTable>;
        getJumpFactor(): number;
        getSpeedFactor(): number;
        getExplosionResistance(): number;
        getHasCollision(): boolean;
        setLiquid(arg0: boolean): void;
        getIsAir(): boolean;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        setIsAir(arg0: boolean): void;
        isRequiresCorrectToolForDrops(): boolean;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        getSpawnTerrainParticles(): boolean;
        getRequiredFeatures(): $FeatureFlagSet;
        setIsRandomlyTicking(arg0: boolean): void;
        getIsRandomlyTicking(): boolean;
        setSpawnTerrainParticles(arg0: boolean): void;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getCanOcclude(): boolean;
        getDestroyTime(): number;
        getDynamicShape(): boolean;
        getInstrument(): $NoteBlockInstrument;
        getReplaceable(): boolean;
        setCanOcclude(arg0: boolean): void;
        setReplaceable(arg0: boolean): void;
        setDynamicShape(arg0: boolean): void;
        setForceSolidOn(arg0: boolean): void;
        getPushReaction(): $PushReaction;
        getIgnitedByLava(): boolean;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        setIgnitedByLava(arg0: boolean): void;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getForceSolidOff(): boolean;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        setHasCollision(arg0: boolean): void;
        setForceSolidOff(arg0: boolean): void;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        getForceSolidOn(): boolean;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        get soundType(): $SoundType;
        get friction(): number;
        get luminance(): $ToIntFunction<$BlockState>;
        get jumpFactor(): number;
        get speedFactor(): number;
        get explosionResistance(): number;
        get emissiveRendering(): $BlockBehaviour$StatePredicate;
        get isRedstoneConductor(): $BlockBehaviour$StatePredicate;
        get destroyTime(): number;
        get instrument(): $NoteBlockInstrument;
        get pushReaction(): $PushReaction;
        get isSuffocating(): $BlockBehaviour$StatePredicate;
        get isViewBlocking(): $BlockBehaviour$StatePredicate;
        get isValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        get hasPostProcess(): $BlockBehaviour$StatePredicate;
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
