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
        isRequiresCorrectToolForDrops(): boolean;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        getHasCollision(): boolean;
        getIsAir(): boolean;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        setLiquid(arg0: boolean): void;
        setIsAir(arg0: boolean): void;
        getDestroyTime(): number;
        getCanOcclude(): boolean;
        setForceSolidOn(arg0: boolean): void;
        getForceSolidOff(): boolean;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getReplaceable(): boolean;
        getInstrument(): $NoteBlockInstrument;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        setDynamicShape(arg0: boolean): void;
        setCanOcclude(arg0: boolean): void;
        setIgnitedByLava(arg0: boolean): void;
        setHasCollision(arg0: boolean): void;
        getIgnitedByLava(): boolean;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        getPushReaction(): $PushReaction;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        setReplaceable(arg0: boolean): void;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        getForceSolidOn(): boolean;
        setForceSolidOff(arg0: boolean): void;
        getDynamicShape(): boolean;
        getJumpFactor(): number;
        getSpeedFactor(): number;
        getSoundType(): $SoundType;
        getFriction(): number;
        getLuminance(): $ToIntFunction<$BlockState>;
        getLiquid(): boolean;
        getDrops(): $ResourceKey<$LootTable>;
        getExplosionResistance(): number;
        getMapColor(): $Function<$BlockState, $MapColor>;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        getIsRandomlyTicking(): boolean;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getRequiredFeatures(): $FeatureFlagSet;
        setIsRandomlyTicking(arg0: boolean): void;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getSpawnTerrainParticles(): boolean;
        setSpawnTerrainParticles(arg0: boolean): void;
        get destroyTime(): number;
        get isSuffocating(): $BlockBehaviour$StatePredicate;
        get isViewBlocking(): $BlockBehaviour$StatePredicate;
        get instrument(): $NoteBlockInstrument;
        get isValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        get pushReaction(): $PushReaction;
        get hasPostProcess(): $BlockBehaviour$StatePredicate;
        get jumpFactor(): number;
        get speedFactor(): number;
        get soundType(): $SoundType;
        get friction(): number;
        get luminance(): $ToIntFunction<$BlockState>;
        get explosionResistance(): number;
        get emissiveRendering(): $BlockBehaviour$StatePredicate;
        get isRedstoneConductor(): $BlockBehaviour$StatePredicate;
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
