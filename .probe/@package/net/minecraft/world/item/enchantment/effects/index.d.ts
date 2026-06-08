import { $Level$ExplosionInteraction, $Level$ExplosionInteraction_ } from "@package/net/minecraft/world/level";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $BlockItemStateProperties_, $BlockItemStateProperties } from "@package/net/minecraft/world/item/component";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $BlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $GameEvent } from "@package/net/minecraft/world/level/gameevent";
import { $AttributeModifier, $Attribute, $AttributeModifier$Operation_, $AttributeModifier$Operation } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $List_ } from "@package/java/util";
import { $BlockPredicate } from "@package/net/minecraft/world/level/levelgen/blockpredicates";
import { $StringRepresentable, $RandomSource, $StringRepresentable_ } from "@package/net/minecraft/util";
import { $Function_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $Holder_, $HolderSet, $HolderSet_, $Holder, $BlockPos_, $Registry, $Vec3i } from "@package/net/minecraft/core";
import { $FloatProvider } from "@package/net/minecraft/util/valueproviders";
import { $LevelBasedValue, $EnchantedItemInUse_ } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/item/enchantment/effects" {
    export class $SummonEntityEffect extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        codec(): $MapCodec<$SummonEntityEffect>;
        entityTypes(): $HolderSet<$EntityType<never>>;
        joinTeam(): boolean;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$SummonEntityEffect>;
        constructor(arg0: $HolderSet_<$EntityType<never>>, arg1: boolean);
    }
    export class $ReplaceBlock extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        offset(): $Vec3i;
        predicate(): ($BlockPredicate) | undefined;
        triggerGameEvent(): ($Holder<$GameEvent>) | undefined;
        codec(): $MapCodec<$ReplaceBlock>;
        blockState(): $BlockStateProvider;
        handler$zea000$openpartiesandclaims$onApplyHead(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: $CallbackInfo): void;
        handler$zea000$openpartiesandclaims$onApplyReturn(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: $CallbackInfo): void;
        modify$zea000$openpartiesandclaims$replaceSetBlockPos(arg0: $BlockPos_): $BlockPos;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$ReplaceBlock>;
        constructor(arg0: $Vec3i, arg1: ($BlockPredicate) | undefined, arg2: $BlockStateProvider, arg3: ($Holder_<$GameEvent>) | undefined);
    }
    export class $DamageEntity extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        codec(): $MapCodec<$DamageEntity>;
        maxDamage(): $LevelBasedValue;
        damageType(): $Holder<$DamageType>;
        minDamage(): $LevelBasedValue;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$DamageEntity>;
        constructor(arg0: $LevelBasedValue, arg1: $LevelBasedValue, arg2: $Holder_<$DamageType>);
    }
    export class $Ignite extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        duration(): $LevelBasedValue;
        codec(): $MapCodec<$Ignite>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$Ignite>;
        constructor(arg0: $LevelBasedValue);
    }
    export class $DamageItem extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        amount(): $LevelBasedValue;
        codec(): $MapCodec<$DamageItem>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$DamageItem>;
        constructor(arg0: $LevelBasedValue);
    }
    export class $RunFunction extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        "function"(): $ResourceLocation;
        codec(): $MapCodec<$RunFunction>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$RunFunction>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $DamageImmunity extends $Record {
        static CODEC: $Codec<$DamageImmunity>;
        static INSTANCE: $DamageImmunity;
        constructor();
    }
    export class $MultiplyValue extends $Record implements $EnchantmentValueEffect {
        process(arg0: number, arg1: $RandomSource, arg2: number): number;
        factor(): $LevelBasedValue;
        codec(): $MapCodec<$MultiplyValue>;
        static CODEC: $MapCodec<$MultiplyValue>;
        constructor(arg0: $LevelBasedValue);
    }
    export class $EnchantmentEntityEffect {
        static bootstrap(arg0: $Registry<$MapCodec_<$EnchantmentEntityEffect>>): $MapCodec<$EnchantmentEntityEffect>;
        static CODEC: $Codec<$EnchantmentEntityEffect>;
    }
    export interface $EnchantmentEntityEffect extends $EnchantmentLocationBasedEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        codec(): $MapCodec<$EnchantmentEntityEffect>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
    }
    export class $EnchantmentAttributeEffect extends $Record implements $EnchantmentLocationBasedEffect {
        id(): $ResourceLocation;
        attribute(): $Holder<$Attribute>;
        amount(): $LevelBasedValue;
        operation(): $AttributeModifier$Operation;
        codec(): $MapCodec<$EnchantmentAttributeEffect>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        getModifier(arg0: number, arg1: $StringRepresentable_): $AttributeModifier;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$EnchantmentAttributeEffect>;
        constructor(arg0: $ResourceLocation_, arg1: $Holder_<$Attribute>, arg2: $LevelBasedValue, arg3: $AttributeModifier$Operation_);
    }
    export class $EnchantmentLocationBasedEffect {
        static bootstrap(arg0: $Registry<$MapCodec_<$EnchantmentLocationBasedEffect>>): $MapCodec<$EnchantmentLocationBasedEffect>;
        static CODEC: $Codec<$EnchantmentLocationBasedEffect>;
    }
    export interface $EnchantmentLocationBasedEffect {
        codec(): $MapCodec<$EnchantmentLocationBasedEffect>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
    }
    export class $ReplaceDisk extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        offset(): $Vec3i;
        predicate(): ($BlockPredicate) | undefined;
        triggerGameEvent(): ($Holder<$GameEvent>) | undefined;
        height(): $LevelBasedValue;
        codec(): $MapCodec<$ReplaceDisk>;
        blockState(): $BlockStateProvider;
        handler$zeb001$openpartiesandclaims$onApplyHead(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: $CallbackInfo): void;
        localvar$zeb000$openpartiesandclaims$captureLevel(arg0: $BlockPos_, arg1: $ServerLevel, arg2: number, arg3: $EnchantedItemInUse_, arg4: $Entity, arg5: $Vec3_): $BlockPos;
        handler$zeb001$openpartiesandclaims$onApplyReturn(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: $CallbackInfo): void;
        radius(): $LevelBasedValue;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$ReplaceDisk>;
        constructor(arg0: $LevelBasedValue, arg1: $LevelBasedValue, arg2: $Vec3i, arg3: ($BlockPredicate) | undefined, arg4: $BlockStateProvider, arg5: ($Holder_<$GameEvent>) | undefined);
    }
    export class $PlaySoundEffect extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        codec(): $MapCodec<$PlaySoundEffect>;
        volume(): $FloatProvider;
        pitch(): $FloatProvider;
        soundEvent(): $Holder<$SoundEvent>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$PlaySoundEffect>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: $FloatProvider, arg2: $FloatProvider);
    }
    export class $SpawnParticlesEffect extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        verticalPosition(): $SpawnParticlesEffect$PositionSource;
        horizontalVelocity(): $SpawnParticlesEffect$VelocitySource;
        verticalVelocity(): $SpawnParticlesEffect$VelocitySource;
        horizontalPosition(): $SpawnParticlesEffect$PositionSource;
        static fixedVelocity(arg0: $FloatProvider): $SpawnParticlesEffect$VelocitySource;
        static movementScaled(arg0: number): $SpawnParticlesEffect$VelocitySource;
        static inBoundingBox(): $SpawnParticlesEffect$PositionSource;
        codec(): $MapCodec<$SpawnParticlesEffect>;
        static offsetFromEntityPosition(arg0: number): $SpawnParticlesEffect$PositionSource;
        speed(): $FloatProvider;
        particle(): $ParticleOptions;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$SpawnParticlesEffect>;
        constructor(arg0: $ParticleOptions_, arg1: $SpawnParticlesEffect$PositionSource_, arg2: $SpawnParticlesEffect$PositionSource_, arg3: $SpawnParticlesEffect$VelocitySource_, arg4: $SpawnParticlesEffect$VelocitySource_, arg5: $FloatProvider);
    }
    export class $ExplodeEffect extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        offset(): $Vec3;
        largeParticle(): $ParticleOptions;
        smallParticle(): $ParticleOptions;
        attributeToUser(): boolean;
        codec(): $MapCodec<$ExplodeEffect>;
        blockInteraction(): $Level$ExplosionInteraction;
        immuneBlocks(): ($HolderSet<$Block>) | undefined;
        sound(): $Holder<$SoundEvent>;
        knockbackMultiplier(): ($LevelBasedValue) | undefined;
        radius(): $LevelBasedValue;
        damageType(): ($Holder<$DamageType>) | undefined;
        createFire(): boolean;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$ExplodeEffect>;
        constructor(arg0: boolean, arg1: ($Holder_<$DamageType>) | undefined, arg2: ($LevelBasedValue) | undefined, arg3: ($HolderSet_<$Block>) | undefined, arg4: $Vec3_, arg5: $LevelBasedValue, arg6: boolean, arg7: $Level$ExplosionInteraction_, arg8: $ParticleOptions_, arg9: $ParticleOptions_, arg10: $Holder_<$SoundEvent>);
    }
    export class $SpawnParticlesEffect$VelocitySource extends $Record {
        base(): $FloatProvider;
        movementScale(): number;
        getVelocity(arg0: number, arg1: $RandomSource): number;
        static CODEC: $MapCodec<$SpawnParticlesEffect$VelocitySource>;
        constructor(arg0: number, arg1: $FloatProvider);
    }
    export class $SpawnParticlesEffect$PositionSourceType$CoordinateSource {
    }
    export interface $SpawnParticlesEffect$PositionSourceType$CoordinateSource {
    }
    /**
     * Values that may be interpreted as {@link $SpawnParticlesEffect$PositionSourceType$CoordinateSource}.
     */
    export type $SpawnParticlesEffect$PositionSourceType$CoordinateSource_ = (() => void);
    export class $EnchantmentValueEffect {
        static bootstrap(arg0: $Registry<$MapCodec_<$EnchantmentValueEffect>>): $MapCodec<$EnchantmentValueEffect>;
        static CODEC: $Codec<$EnchantmentValueEffect>;
    }
    export interface $EnchantmentValueEffect {
        process(arg0: number, arg1: $RandomSource, arg2: number): number;
        codec(): $MapCodec<$EnchantmentValueEffect>;
    }
    export class $RemoveBinomial extends $Record implements $EnchantmentValueEffect {
        process(arg0: number, arg1: $RandomSource, arg2: number): number;
        codec(): $MapCodec<$RemoveBinomial>;
        chance(): $LevelBasedValue;
        static CODEC: $MapCodec<$RemoveBinomial>;
        constructor(arg0: $LevelBasedValue);
    }
    export class $ApplyMobEffect extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        minDuration(): $LevelBasedValue;
        minAmplifier(): $LevelBasedValue;
        maxAmplifier(): $LevelBasedValue;
        maxDuration(): $LevelBasedValue;
        codec(): $MapCodec<$ApplyMobEffect>;
        toApply(): $HolderSet<$MobEffect>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$ApplyMobEffect>;
        constructor(arg0: $HolderSet_<$MobEffect>, arg1: $LevelBasedValue, arg2: $LevelBasedValue, arg3: $LevelBasedValue, arg4: $LevelBasedValue);
    }
    export class $AllOf$EntityEffects extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        codec(): $MapCodec<$AllOf$EntityEffects>;
        effects(): $List<$EnchantmentEntityEffect>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$AllOf$EntityEffects>;
        constructor(arg0: $List_<$EnchantmentEntityEffect>);
    }
    export class $AllOf {
        static valueEffects(...arg0: $EnchantmentValueEffect[]): $AllOf$ValueEffects;
        static entityEffects(...arg0: $EnchantmentEntityEffect[]): $AllOf$EntityEffects;
        static codec<T, A extends T>(arg0: $Codec<T>, arg1: $Function_<$List<T>, A>, arg2: $Function_<A, $List<T>>): $MapCodec<A>;
        static locationBasedEffects(...arg0: $EnchantmentLocationBasedEffect[]): $AllOf$LocationBasedEffects;
    }
    export interface $AllOf {
    }
    export class $SpawnParticlesEffect$PositionSource extends $Record {
        type(): $SpawnParticlesEffect$PositionSourceType;
        scale(): number;
        offset(): number;
        getCoordinate(arg0: number, arg1: number, arg2: number, arg3: $RandomSource): number;
        static CODEC: $MapCodec<$SpawnParticlesEffect$PositionSource>;
        constructor(arg0: $SpawnParticlesEffect$PositionSourceType_, arg1: number, arg2: number);
    }
    export class $AllOf$LocationBasedEffects extends $Record implements $EnchantmentLocationBasedEffect {
        codec(): $MapCodec<$AllOf$LocationBasedEffects>;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        effects(): $List<$EnchantmentLocationBasedEffect>;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$AllOf$LocationBasedEffects>;
        constructor(arg0: $List_<$EnchantmentLocationBasedEffect>);
    }
    export class $SetValue extends $Record implements $EnchantmentValueEffect {
        value(): $LevelBasedValue;
        process(arg0: number, arg1: $RandomSource, arg2: number): number;
        codec(): $MapCodec<$SetValue>;
        static CODEC: $MapCodec<$SetValue>;
        constructor(arg0: $LevelBasedValue);
    }
    export class $AddValue extends $Record implements $EnchantmentValueEffect {
        value(): $LevelBasedValue;
        process(arg0: number, arg1: $RandomSource, arg2: number): number;
        codec(): $MapCodec<$AddValue>;
        static CODEC: $MapCodec<$AddValue>;
        constructor(arg0: $LevelBasedValue);
    }
    export class $AllOf$ValueEffects extends $Record implements $EnchantmentValueEffect {
        process(arg0: number, arg1: $RandomSource, arg2: number): number;
        codec(): $MapCodec<$AllOf$ValueEffects>;
        effects(): $List<$EnchantmentValueEffect>;
        static CODEC: $MapCodec<$AllOf$ValueEffects>;
        constructor(arg0: $List_<$EnchantmentValueEffect>);
    }
    export class $SpawnParticlesEffect$PositionSourceType extends $Enum<$SpawnParticlesEffect$PositionSourceType> implements $StringRepresentable {
        static values(): $SpawnParticlesEffect$PositionSourceType[];
        static valueOf(arg0: string): $SpawnParticlesEffect$PositionSourceType;
        getCoordinate(arg0: number, arg1: number, arg2: number, arg3: $RandomSource): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static BOUNDING_BOX: $SpawnParticlesEffect$PositionSourceType;
        static CODEC: $Codec<$SpawnParticlesEffect$PositionSourceType>;
        static ENTITY_POSITION: $SpawnParticlesEffect$PositionSourceType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SpawnParticlesEffect$PositionSourceType}.
     */
    export type $SpawnParticlesEffect$PositionSourceType_ = "entity_position" | "in_bounding_box";
    export class $SetBlockProperties extends $Record implements $EnchantmentEntityEffect {
        apply(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_): void;
        offset(): $Vec3i;
        properties(): $BlockItemStateProperties;
        triggerGameEvent(): ($Holder<$GameEvent>) | undefined;
        codec(): $MapCodec<$SetBlockProperties>;
        handler$zee002$openpartiesandclaims$onApplyHead(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: $CallbackInfo): void;
        handler$zee002$openpartiesandclaims$onApplyReturn(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: $CallbackInfo): void;
        modify$zee001$openpartiesandclaims$replaceSetBlockPos(arg0: $BlockPos_): $BlockPos;
        onChangedBlock(arg0: $ServerLevel, arg1: number, arg2: $EnchantedItemInUse_, arg3: $Entity, arg4: $Vec3_, arg5: boolean): void;
        onDeactivated(arg0: $EnchantedItemInUse_, arg1: $Entity, arg2: $Vec3_, arg3: number): void;
        static CODEC: $MapCodec<$SetBlockProperties>;
        constructor(arg0: $BlockItemStateProperties_);
        constructor(arg0: $BlockItemStateProperties_, arg1: $Vec3i, arg2: ($Holder_<$GameEvent>) | undefined);
    }
}
