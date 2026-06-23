import { $Explosion } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Style, $Component } from "@package/net/minecraft/network/chat";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Collection_ } from "@package/java/util";
import { $Fireball, $FireworkRocketEntity, $AbstractArrow, $WitherSkull } from "@package/net/minecraft/world/entity/projectile";
import { $DamageSourcesAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IScalingFunction, $IDeathMessageProvider } from "@package/net/neoforged/neoforge/common/damagesource";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $EnhancedDamageSource } from "@package/cn/chloeprime/commons_impl/rpg";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";

declare module "@package/net/minecraft/world/damagesource" {
    export interface $DamageType extends RegistryMarked<RegistryTypes.DamageTypeTag, RegistryTypes.DamageType> {}
    export class $DamageSources implements $DamageSourcesAccess {
        source(damageTypeKey: $ResourceKey_<$DamageType>, causingEntity: $Entity | null, directEntity: $Entity | null): $DamageSource;
        source(damageTypeKey: $ResourceKey_<$DamageType>, entity: $Entity | null): $DamageSource;
        source(damageTypeKey: $ResourceKey_<$DamageType>): $DamageSource;
        generic(): $DamageSource;
        freeze(): $DamageSource;
        thrown(causingEntity: $Entity, directEntity: $Entity | null): $DamageSource;
        magic(): $DamageSource;
        thorns(entity: $Entity): $DamageSource;
        indirectMagic(causingEntity: $Entity, directEntity: $Entity | null): $DamageSource;
        starve(): $DamageSource;
        hotFloor(): $DamageSource;
        inWall(): $DamageSource;
        sonicBoom(entity: $Entity): $DamageSource;
        fireworks(firework: $FireworkRocketEntity, shooter: $Entity | null): $DamageSource;
        sweetBerryBush(): $DamageSource;
        fallingBlock(entity: $Entity): $DamageSource;
        stalagmite(): $DamageSource;
        dragonBreath(): $DamageSource;
        spit(projectile: $Entity, thrower: $LivingEntity | null): $DamageSource;
        mobAttack(mob: $LivingEntity): $DamageSource;
        explosion(causingEntity: $Entity | null, directEntity: $Entity | null): $DamageSource;
        explosion(explosion: $Explosion | null): $DamageSource;
        dryOut(): $DamageSource;
        sting(mob: $LivingEntity): $DamageSource;
        windCharge(projectile: $Entity, thrower: $LivingEntity | null): $DamageSource;
        drown(): $DamageSource;
        cramming(): $DamageSource;
        mobProjectile(projectile: $Entity, thrower: $LivingEntity | null): $DamageSource;
        witherSkull(witherSkull: $WitherSkull, shooter: $Entity): $DamageSource;
        playerAttack(player: $Player): $DamageSource;
        genericKill(): $DamageSource;
        outOfBorder(): $DamageSource;
        badRespawnPointExplosion(position: $Vec3_): $DamageSource;
        inFire(): $DamageSource;
        arrow(arrow: $AbstractArrow, shooter: $Entity | null): $DamageSource;
        trident(causingEntity: $Entity, directEntity: $Entity | null): $DamageSource;
        fireball(fireball: $Fireball, thrower: $Entity | null): $DamageSource;
        onFire(): $DamageSource;
        lava(): $DamageSource;
        lightningBolt(): $DamageSource;
        wither(): $DamageSource;
        anvil(entity: $Entity): $DamageSource;
        cactus(): $DamageSource;
        campfire(): $DamageSource;
        fall(): $DamageSource;
        flyIntoWall(): $DamageSource;
        fellOutOfWorld(): $DamageSource;
        fallingStalactite(entity: $Entity): $DamageSource;
        noAggroMobAttack(mob: $LivingEntity): $DamageSource;
        invokeSource(damageTypeKey: $ResourceKey_<$DamageType>, causingEntity: $Entity | null, directEntity: $Entity | null): $DamageSource;
        damageTypes: $Registry<$DamageType>;
        constructor(registry: $RegistryAccess);
    }
    export class $CombatRules {
        static getDamageAfterMagicAbsorb(damage: number, enchantModifiers: number): number;
        static getDamageAfterAbsorb(entity: $LivingEntity, damage: number, damageSource: $DamageSource_, armorValue: number, armorToughness: number): number;
        static BASE_ARMOR_TOUGHNESS: number;
        static MIN_ARMOR_RATIO: number;
        static ARMOR_PROTECTION_DIVIDER: number;
        static MAX_ARMOR: number;
        constructor();
    }
    export class $DamageType extends $Record {
        deathMessageType(): $DeathMessageType;
        effects(): $DamageEffects;
        msgId(): string;
        scaling(): $DamageScaling;
        exhaustion(): number;
        static CODEC: $Codec<$Holder<$DamageType>>;
        static DIRECT_CODEC: $Codec<$DamageType>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$DamageType>>;
        constructor(arg0: string, arg1: $DamageScaling_, arg2: number, arg3: $DamageEffects_, arg4: $DeathMessageType_);
        constructor(msgId: string, exhaustion: number);
        constructor(msgId: string, exhaustion: number, effects: $DamageEffects_);
        constructor(msgId: string, scaling: $DamageScaling_, exhaustion: number, effects: $DamageEffects_);
        constructor(msgId: string, scaling: $DamageScaling_, exhaustion: number);
    }
    /**
     * Values that may be interpreted as {@link $DamageType}.
     */
    export type $DamageType_ = RegistryTypes.DamageType;
    export class $DamageSource implements $EnhancedDamageSource {
        type(): $DamageType;
        /**
         * Return whether this damage source will have its damage amount scaled based on the current difficulty.
         */
        isDirect(): boolean;
        is(damageTypeKey: $TagKey_<$DamageType>): boolean;
        is(damageTypeKey: $ResourceKey_<$DamageType>): boolean;
        getPlayer(): $Player;
        /**
         * Gets the location from which the damage originates.
         */
        sourcePositionRaw(): $Vec3;
        kuroutils$injectIs(arg0: $Collection_<any>): void;
        kuroutils$injectIs(arg0: $TagKey_<any>): void;
        typeHolder(): $Holder<$DamageType>;
        /**
         * Retrieves the immediate causer of the damage, e.g. the arrow entity, not its shooter
         */
        getActual(): $Entity;
        /**
         * @deprecated
         * Return whether this damage source will have its damage amount scaled based on the current difficulty.
         */
        scalesWithDifficulty(): boolean;
        kuroutils$injectIsNot(arg0: $Collection_<any>): void;
        kuroutils$injectIsNot(arg0: $TagKey_<any>): void;
        /**
         * Return the name of damage type.
         */
        getType(): string;
        /**
         * Gets the location from which the damage originates.
         */
        getSourcePosition(): $Vec3;
        /**
         * Retrieves the immediate causer of the damage, e.g. the arrow entity, not its shooter
         */
        getImmediate(): $Entity;
        getWeaponItem(): $ItemStack;
        /**
         * How much satiate (food) is consumed by this `DamageSource`.
         */
        getFoodExhaustion(): number;
        /**
         * Return whether this damage source will have its damage amount scaled based on the current difficulty.
         */
        isCreativePlayer(): boolean;
        /**
         * Gets the death message that is displayed when the player dies
         */
        getLocalizedDeathMessage(livingEntity: $LivingEntity): $Component;
        constructor(type: $Holder_<$DamageType>, entity: $Entity | null);
        constructor(type: $Holder_<$DamageType>, directEntity: $Entity | null, causingEntity: $Entity | null);
        constructor(type: $Holder_<$DamageType>, directEntity: $Entity | null, causingEntity: $Entity | null, damageSourcePosition: $Vec3_ | null);
        constructor(type: $Holder_<$DamageType>);
        constructor(type: $Holder_<$DamageType>, damageSourcePosition: $Vec3_);
        get direct(): boolean;
        get player(): $Player;
        get actual(): $Entity;
        get sourcePosition(): $Vec3;
        get immediate(): $Entity;
        get weaponItem(): $ItemStack;
        get foodExhaustion(): number;
        get creativePlayer(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DamageSource}.
     */
    export type $DamageSource_ = RegistryTypes.DamageType | $LivingEntity;
    export class $FallLocation extends $Record {
        id(): string;
        languageKey(): string;
        static getCurrentFallLocation(entity: $LivingEntity): $FallLocation;
        static blockToFallLocation(state: $BlockState_): $FallLocation;
        static GENERIC: $FallLocation;
        static LADDER: $FallLocation;
        static VINES: $FallLocation;
        static WEEPING_VINES: $FallLocation;
        static OTHER_CLIMBABLE: $FallLocation;
        static TWISTING_VINES: $FallLocation;
        static SCAFFOLDING: $FallLocation;
        static WATER: $FallLocation;
        constructor(arg0: string);
    }
    export class $DamageScaling extends $Enum<$DamageScaling> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $DamageScaling[];
        static valueOf(arg0: string): $DamageScaling;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getScalingFunction(): $IScalingFunction;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$DamageScaling>;
        static WHEN_CAUSED_BY_LIVING_NON_PLAYER: $DamageScaling;
        static NEVER: $DamageScaling;
        static ALWAYS: $DamageScaling;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get scalingFunction(): $IScalingFunction;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DamageScaling}.
     */
    export type $DamageScaling_ = "never" | "when_caused_by_living_non_player" | "always";
    export class $DeathMessageType extends $Enum<$DeathMessageType> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $DeathMessageType[];
        static valueOf(arg0: string): $DeathMessageType;
        getMessageFunction(): $IDeathMessageProvider;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static INTENTIONAL_GAME_DESIGN: $DeathMessageType;
        static FALL_VARIANTS: $DeathMessageType;
        static CODEC: $Codec<$DeathMessageType>;
        static DEFAULT: $DeathMessageType;
        get messageFunction(): $IDeathMessageProvider;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DeathMessageType}.
     */
    export type $DeathMessageType_ = "default" | "fall_variants" | "intentional_game_design";
    export class $CombatEntry extends $Record {
        source(): $DamageSource;
        fallLocation(): $FallLocation;
        damage(): number;
        fallDistance(): number;
        constructor(arg0: $DamageSource_, arg1: number, arg2: $FallLocation_ | null, arg3: number);
    }
    export class $DamageEffects extends $Enum<$DamageEffects> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $DamageEffects[];
        static valueOf(arg0: string): $DamageEffects;
        static getExtensionInfo(): $ExtensionInfo;
        sound(): $SoundEvent;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static FREEZING: $DamageEffects;
        static CODEC: $Codec<$DamageEffects>;
        static DROWNING: $DamageEffects;
        static POKING: $DamageEffects;
        static BURNING: $DamageEffects;
        static HURT: $DamageEffects;
        static THORNS: $DamageEffects;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DamageEffects}.
     */
    export type $DamageEffects_ = "hurt" | "thorns" | "drowning" | "burning" | "poking" | "freezing";
    export class $DamageTypes {
        static bootstrap(context: $BootstrapContext<$DamageType_>): void;
        static IN_WALL: $ResourceKey<$DamageType>;
        static FREEZE: $ResourceKey<$DamageType>;
        static LAVA: $ResourceKey<$DamageType>;
        static UNATTRIBUTED_FIREBALL: $ResourceKey<$DamageType>;
        static CRAMMING: $ResourceKey<$DamageType>;
        static EXPLOSION: $ResourceKey<$DamageType>;
        static IN_FIRE: $ResourceKey<$DamageType>;
        static BAD_RESPAWN_POINT: $ResourceKey<$DamageType>;
        static TRIDENT: $ResourceKey<$DamageType>;
        static WITHER: $ResourceKey<$DamageType>;
        static ARROW: $ResourceKey<$DamageType>;
        static GENERIC_KILL: $ResourceKey<$DamageType>;
        static LIGHTNING_BOLT: $ResourceKey<$DamageType>;
        static MAGIC: $ResourceKey<$DamageType>;
        static ON_FIRE: $ResourceKey<$DamageType>;
        static FALL: $ResourceKey<$DamageType>;
        static MOB_ATTACK_NO_AGGRO: $ResourceKey<$DamageType>;
        static PLAYER_ATTACK: $ResourceKey<$DamageType>;
        static DRY_OUT: $ResourceKey<$DamageType>;
        static DRAGON_BREATH: $ResourceKey<$DamageType>;
        static WITHER_SKULL: $ResourceKey<$DamageType>;
        static STARVE: $ResourceKey<$DamageType>;
        static FELL_OUT_OF_WORLD: $ResourceKey<$DamageType>;
        static PLAYER_EXPLOSION: $ResourceKey<$DamageType>;
        static SONIC_BOOM: $ResourceKey<$DamageType>;
        static MOB_ATTACK: $ResourceKey<$DamageType>;
        static FALLING_ANVIL: $ResourceKey<$DamageType>;
        static FIREBALL: $ResourceKey<$DamageType>;
        static CACTUS: $ResourceKey<$DamageType>;
        static CAMPFIRE: $ResourceKey<$DamageType>;
        static MOB_PROJECTILE: $ResourceKey<$DamageType>;
        static WIND_CHARGE: $ResourceKey<$DamageType>;
        static INDIRECT_MAGIC: $ResourceKey<$DamageType>;
        static OUTSIDE_BORDER: $ResourceKey<$DamageType>;
        static FALLING_BLOCK: $ResourceKey<$DamageType>;
        static FLY_INTO_WALL: $ResourceKey<$DamageType>;
        static SPIT: $ResourceKey<$DamageType>;
        static THORNS: $ResourceKey<$DamageType>;
        static GENERIC: $ResourceKey<$DamageType>;
        static FIREWORKS: $ResourceKey<$DamageType>;
        static SWEET_BERRY_BUSH: $ResourceKey<$DamageType>;
        static HOT_FLOOR: $ResourceKey<$DamageType>;
        static STING: $ResourceKey<$DamageType>;
        static DROWN: $ResourceKey<$DamageType>;
        static FALLING_STALACTITE: $ResourceKey<$DamageType>;
        static THROWN: $ResourceKey<$DamageType>;
        static STALAGMITE: $ResourceKey<$DamageType>;
    }
    export interface $DamageTypes {
    }
    export class $CombatTracker {
        getFallMessage(combatEntry: $CombatEntry_, entity: $Entity | null): $Component;
        getDeathMessage(): $Component;
        /**
         * Resets this trackers list of combat entries
         */
        recheckStatus(): void;
        recordDamage(source: $DamageSource_, damage: number): void;
        getCombatDuration(): number;
        getMostSignificantFall(): $CombatEntry;
        static INTENTIONAL_GAME_DESIGN_STYLE: $Style;
        static RESET_COMBAT_STATUS_TIME: number;
        static RESET_DAMAGE_STATUS_TIME: number;
        constructor(mob: $LivingEntity);
        get deathMessage(): $Component;
        get combatDuration(): number;
        get mostSignificantFall(): $CombatEntry;
    }
}
