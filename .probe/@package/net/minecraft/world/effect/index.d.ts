import { $Codec } from "@package/com/mojang/serialization";
import { $Tag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $Entity$RemovalReason_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $MobEffectInstanceAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $AttributeModifier, $Attribute, $AttributeModifier$Operation_, $AttributeModifier$Operation, $AttributeMap } from "@package/net/minecraft/world/entity/ai/attributes";
import { $IClientMobEffectExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $List, $Set_, $Map, $Set } from "@package/java/util";
import { $BiConsumer_, $Consumer_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Holder_, $Holder, $Registry } from "@package/net/minecraft/core";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $IMobEffectExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Record, $Runnable_, $Comparable } from "@package/java/lang";
import { $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $Int2DoubleFunction, $Int2DoubleFunction_, $Int2IntFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/effect" {
    export class $InstantenousMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
        constructor(arg0: $MobEffectCategory_, arg1: number);
    }
    export class $MobEffect implements $FeatureElement, $IMobEffectExtension {
        getDisplayName(): $Component;
        getCategory(): $MobEffectCategory;
        requiredFeatures(...arg0: $FeatureFlag[]): $MobEffect;
        requiredFeatures(): $FeatureFlagSet;
        getColor(): number;
        applyEffectTick(arg0: $LivingEntity, arg1: number): boolean;
        withSoundOnAdded(arg0: $SoundEvent_): $MobEffect;
        setBlendDuration(arg0: number): $MobEffect;
        isBeneficial(): boolean;
        createModifiers(arg0: number, arg1: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        isInstantenous(): boolean;
        shouldApplyEffectTickThisTick(arg0: number, arg1: number): boolean;
        addAttributeModifiers(arg0: $AttributeMap, arg1: number): void;
        removeAttributeModifiers(arg0: $AttributeMap): void;
        onMobHurt(arg0: $LivingEntity, arg1: number, arg2: $DamageSource_, arg3: number): void;
        getDescriptionId(): string;
        onEffectStarted(arg0: $LivingEntity, arg1: number): void;
        onEffectAdded(arg0: $LivingEntity, arg1: number): void;
        onMobRemoved(arg0: $LivingEntity, arg1: number, arg2: $Entity$RemovalReason_): void;
        getBlendDurationTicks(): number;
        addAttributeModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_, arg2: $AttributeModifier$Operation_, arg3: $Int2DoubleFunction_): $MobEffect;
        addAttributeModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_, arg2: number, arg3: $AttributeModifier$Operation_): $MobEffect;
        createParticleOptions(arg0: $MobEffectInstance): $ParticleOptions;
        getOrCreateDescriptionId(): string;
        applyInstantenousEffect(arg0: $Entity, arg1: $Entity, arg2: $LivingEntity, arg3: number, arg4: number): void;
        /**
         * @deprecated
         */
        initializeClient(arg0: $Consumer_<$IClientMobEffectExtensions>): void;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        fillEffectCures(arg0: $Set_<$EffectCure>, arg1: $MobEffectInstance): void;
        getSortOrder(arg0: $MobEffectInstance): number;
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
        constructor(arg0: $MobEffectCategory_, arg1: number);
        constructor(arg0: $MobEffectCategory_, arg1: number, arg2: $ParticleOptions_);
        get displayName(): $Component;
        get category(): $MobEffectCategory;
        get color(): number;
        set blendDuration(value: number);
        get beneficial(): boolean;
        get instantenous(): boolean;
        get descriptionId(): string;
        get blendDurationTicks(): number;
        get orCreateDescriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $MobEffect}.
     */
    export type $MobEffect_ = RegistryTypes.MobEffect;
    export class $MobEffectInstance$Details extends $Record {
    }
    export class $HealOrHarmMobEffect extends $InstantenousMobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $PoisonMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $HungerMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffects {
        static bootstrap(arg0: $Registry<$MobEffect_>): $Holder<$MobEffect>;
        static INVISIBILITY: $Holder<$MobEffect>;
        static SLOW_FALLING: $Holder<$MobEffect>;
        static DAMAGE_RESISTANCE: $Holder<$MobEffect>;
        static HEAL: $Holder<$MobEffect>;
        static BAD_OMEN: $Holder<$MobEffect>;
        static WEAKNESS: $Holder<$MobEffect>;
        static DOLPHINS_GRACE: $Holder<$MobEffect>;
        static JUMP: $Holder<$MobEffect>;
        static TRIAL_OMEN: $Holder<$MobEffect>;
        static MOVEMENT_SLOWDOWN: $Holder<$MobEffect>;
        static WITHER: $Holder<$MobEffect>;
        static LUCK: $Holder<$MobEffect>;
        static FIRE_RESISTANCE: $Holder<$MobEffect>;
        static HARM: $Holder<$MobEffect>;
        static WIND_CHARGED: $Holder<$MobEffect>;
        static WATER_BREATHING: $Holder<$MobEffect>;
        static GLOWING: $Holder<$MobEffect>;
        static OOZING: $Holder<$MobEffect>;
        static DIG_SPEED: $Holder<$MobEffect>;
        static ABSORPTION: $Holder<$MobEffect>;
        static HUNGER: $Holder<$MobEffect>;
        static DIG_SLOWDOWN: $Holder<$MobEffect>;
        static HERO_OF_THE_VILLAGE: $Holder<$MobEffect>;
        static REGENERATION: $Holder<$MobEffect>;
        static INFESTED: $Holder<$MobEffect>;
        static WEAVING: $Holder<$MobEffect>;
        static BLINDNESS: $Holder<$MobEffect>;
        static MOVEMENT_SPEED: $Holder<$MobEffect>;
        static DAMAGE_BOOST: $Holder<$MobEffect>;
        static LEVITATION: $Holder<$MobEffect>;
        static UNLUCK: $Holder<$MobEffect>;
        static CONDUIT_POWER: $Holder<$MobEffect>;
        static RAID_OMEN: $Holder<$MobEffect>;
        static CONFUSION: $Holder<$MobEffect>;
        static POISON: $Holder<$MobEffect>;
        static HEALTH_BOOST: $Holder<$MobEffect>;
        static DARKNESS: $Holder<$MobEffect>;
        static NIGHT_VISION: $Holder<$MobEffect>;
        static SATURATION: $Holder<$MobEffect>;
        constructor();
    }
    export class $MobEffectInstance implements $Comparable<$MobEffectInstance>, $MobEffectInstanceAccessor {
        /**
         * @note_to_llm Check MobEffectUtils binding for easier way to create MobEffectInstance.
         */
        compareTo(arg0: $MobEffectInstance): number;
        update(arg0: $MobEffectInstance): boolean;
        static load(arg0: $CompoundTag_): $MobEffectInstance;
        save(): $Tag;
        is(arg0: $Holder_<$MobEffect>): boolean;
        tick(arg0: $LivingEntity, arg1: $Runnable_): boolean;
        getDuration(): number;
        getCures(): $Set<$EffectCure>;
        isVisible(): boolean;
        getEffect(): $Holder<$MobEffect>;
        isAmbient(): boolean;
        onMobHurt(arg0: $LivingEntity, arg1: $DamageSource_, arg2: number): void;
        setDetailsFrom(arg0: $MobEffectInstance): void;
        getBlendFactor(arg0: $LivingEntity, arg1: number): number;
        isInfiniteDuration(): boolean;
        skipBlending(): void;
        mapDuration(arg0: $Int2IntFunction_): number;
        getDescriptionId(): string;
        showIcon(): boolean;
        endsWithin(arg0: number): boolean;
        getParticleOptions(): $ParticleOptions;
        getAmplifier(): number;
        onEffectStarted(arg0: $LivingEntity): void;
        onEffectAdded(arg0: $LivingEntity): void;
        onMobRemoved(arg0: $LivingEntity, arg1: $Entity$RemovalReason_): void;
        copyBlendState(arg0: $MobEffectInstance): void;
        create$getHiddenEffect(): $MobEffectInstance;
        static MAX_AMPLIFIER: number;
        static CODEC: $Codec<$MobEffectInstance>;
        static INFINITE_DURATION: number;
        static MIN_AMPLIFIER: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MobEffectInstance>;
        constructor(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean);
        constructor(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $MobEffectInstance);
        constructor(arg0: $MobEffectInstance);
        constructor(arg0: $Holder_<$MobEffect>);
        constructor(arg0: $Holder_<$MobEffect>, arg1: number);
        constructor(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number);
        constructor(arg0: $Holder_<$MobEffect>, arg1: number, arg2: number, arg3: boolean, arg4: boolean);
        get duration(): number;
        get cures(): $Set<$EffectCure>;
        get visible(): boolean;
        get effect(): $Holder<$MobEffect>;
        get ambient(): boolean;
        set detailsFrom(value: $MobEffectInstance);
        get infiniteDuration(): boolean;
        get descriptionId(): string;
        get particleOptions(): $ParticleOptions;
        get amplifier(): number;
    }
    export class $SaturationMobEffect extends $InstantenousMobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $BadOmenMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffectUtil {
        static getDigSpeedAmplification(arg0: $LivingEntity): number;
        static hasDigSpeed(arg0: $LivingEntity): boolean;
        static addEffectToPlayersAround(arg0: $ServerLevel, arg1: $Entity, arg2: $Vec3_, arg3: number, arg4: $MobEffectInstance, arg5: number): $List<$ServerPlayer>;
        static hasWaterBreathing(arg0: $LivingEntity): boolean;
        static formatDuration(arg0: $MobEffectInstance, arg1: number, arg2: number): $Component;
        constructor();
    }
    export class $AbsorptionMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $WindChargedMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffectCategory extends $Enum<$MobEffectCategory> {
        static values(): $MobEffectCategory[];
        static valueOf(arg0: string): $MobEffectCategory;
        getTooltipFormatting(): $ChatFormatting;
        static HARMFUL: $MobEffectCategory;
        static BENEFICIAL: $MobEffectCategory;
        static NEUTRAL: $MobEffectCategory;
        get tooltipFormatting(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectCategory}.
     */
    export type $MobEffectCategory_ = "beneficial" | "harmful" | "neutral";
    export interface $MobEffect extends RegistryMarked<RegistryTypes.MobEffectTag, RegistryTypes.MobEffect> {}
    export class $MobEffect$AttributeTemplate extends $Record {
        id(): $ResourceLocation;
        create(arg0: number): $AttributeModifier;
        amount(): number;
        operation(): $AttributeModifier$Operation;
        curve(): $Int2DoubleFunction;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $AttributeModifier$Operation_);
        constructor(id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_, curve: $Int2DoubleFunction_);
    }
    export class $WeavingMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $RaidOmenMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $InfestedMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $OozingMobEffect$NearbySlimes {
    }
    export interface $OozingMobEffect$NearbySlimes {
    }
    /**
     * Values that may be interpreted as {@link $OozingMobEffect$NearbySlimes}.
     */
    export type $OozingMobEffect$NearbySlimes_ = (() => void);
    export class $RegenerationMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffectInstance$BlendState {
    }
    export class $WitherMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $OozingMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
}
