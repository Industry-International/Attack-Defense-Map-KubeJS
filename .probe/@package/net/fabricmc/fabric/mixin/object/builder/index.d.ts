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
        getLuminance(): $ToIntFunction<$BlockState>;
        getSpeedFactor(): number;
        getJumpFactor(): number;
        getHasCollision(): boolean;
        getDynamicShape(): boolean;
        getCanOcclude(): boolean;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        getDestroyTime(): number;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getPushReaction(): $PushReaction;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        setReplaceable(arg0: boolean): void;
        getForceSolidOn(): boolean;
        getIgnitedByLava(): boolean;
        setDynamicShape(arg0: boolean): void;
        setForceSolidOn(arg0: boolean): void;
        getForceSolidOff(): boolean;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        setHasCollision(arg0: boolean): void;
        getInstrument(): $NoteBlockInstrument;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        setForceSolidOff(arg0: boolean): void;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        getReplaceable(): boolean;
        setCanOcclude(arg0: boolean): void;
        setIgnitedByLava(arg0: boolean): void;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        getDrops(): $ResourceKey<$LootTable>;
        getExplosionResistance(): number;
        getSoundType(): $SoundType;
        getFriction(): number;
        getIsRandomlyTicking(): boolean;
        getSpawnTerrainParticles(): boolean;
        getRequiredFeatures(): $FeatureFlagSet;
        setIsRandomlyTicking(arg0: boolean): void;
        setSpawnTerrainParticles(arg0: boolean): void;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        getMapColor(): $Function<$BlockState, $MapColor>;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        isRequiresCorrectToolForDrops(): boolean;
        setIsAir(arg0: boolean): void;
        setLiquid(arg0: boolean): void;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        getIsAir(): boolean;
        get luminance(): $ToIntFunction<$BlockState>;
        get speedFactor(): number;
        get jumpFactor(): number;
        get isValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        get destroyTime(): number;
        get isViewBlocking(): $BlockBehaviour$StatePredicate;
        get pushReaction(): $PushReaction;
        get instrument(): $NoteBlockInstrument;
        get isSuffocating(): $BlockBehaviour$StatePredicate;
        get hasPostProcess(): $BlockBehaviour$StatePredicate;
        get explosionResistance(): number;
        get soundType(): $SoundType;
        get friction(): number;
        get isRedstoneConductor(): $BlockBehaviour$StatePredicate;
        get emissiveRendering(): $BlockBehaviour$StatePredicate;
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
