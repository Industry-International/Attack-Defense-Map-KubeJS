import { $DifficultyInstance } from "@package/net/minecraft/world";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $Holder_, $Registry, $HolderSet, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Enchantment, $ItemEnchantments$Mutable } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/item/enchantment/providers" {
    export class $EnchantmentProvider {
        static DIRECT_CODEC: $Codec<$EnchantmentProvider>;
    }
    export interface $EnchantmentProvider {
        codec(): $MapCodec<$EnchantmentProvider>;
        enchant(arg0: $ItemStack_, arg1: $ItemEnchantments$Mutable, arg2: $RandomSource, arg3: $DifficultyInstance): void;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentProvider}.
     */
    export type $EnchantmentProvider_ = RegistryTypes.EnchantmentProvider;
    export class $SingleEnchantment extends $Record implements $EnchantmentProvider {
        level(): $IntProvider;
        codec(): $MapCodec<$SingleEnchantment>;
        enchantment(): $Holder<$Enchantment>;
        enchant(arg0: $ItemStack_, arg1: $ItemEnchantments$Mutable, arg2: $RandomSource, arg3: $DifficultyInstance): void;
        static CODEC: $MapCodec<$SingleEnchantment>;
        constructor(arg0: $Holder_<$Enchantment>, arg1: $IntProvider_);
    }
    export class $EnchantmentProviderTypes {
        static bootstrap(arg0: $Registry<$MapCodec_<$EnchantmentProvider_>>): $MapCodec<$EnchantmentProvider>;
    }
    export interface $EnchantmentProviderTypes {
    }
    export class $TradeRebalanceEnchantmentProviders {
        static bootstrap(arg0: $BootstrapContext<$EnchantmentProvider_>): void;
        static TRADES_JUNGLE_ARMORER_BOOTS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_TAIGA_ARMORER_LEGGINGS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_JUNGLE_ARMORER_BOOTS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SNOW_ARMORER_BOOTS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SNOW_ARMORER_BOOTS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SAVANNA_ARMORER_LEGGINGS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_DESERT_ARMORER_LEGGINGS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_DESERT_ARMORER_LEGGINGS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SWAMP_ARMORER_LEGGINGS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_TAIGA_ARMORER_CHESTPLATE_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_DESERT_ARMORER_CHESTPLATE_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SWAMP_ARMORER_HELMET_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_PLAINS_ARMORER_CHESTPLATE_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SWAMP_ARMORER_HELMET_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_DESERT_ARMORER_CHESTPLATE_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_DESERT_ARMORER_HELMET_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_PLAINS_ARMORER_LEGGINGS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SAVANNA_ARMORER_HELMET_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SAVANNA_ARMORER_CHESTPLATE_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_PLAINS_ARMORER_LEGGINGS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SAVANNA_ARMORER_CHESTPLATE_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SAVANNA_ARMORER_HELMET_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_PLAINS_ARMORER_BOOTS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_JUNGLE_ARMORER_CHESTPLATE_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_PLAINS_ARMORER_BOOTS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SNOW_ARMORER_HELMET_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_JUNGLE_ARMORER_LEGGINGS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SWAMP_ARMORER_BOOTS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SWAMP_ARMORER_BOOTS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SAVANNA_ARMORER_BOOTS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SNOW_ARMORER_HELMET_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_PLAINS_ARMORER_HELMET_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SWAMP_ARMORER_CHESTPLATE_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_JUNGLE_ARMORER_HELMET_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_JUNGLE_ARMORER_HELMET_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_DESERT_ARMORER_BOOTS_4: $ResourceKey<$EnchantmentProvider>;
    }
    export interface $TradeRebalanceEnchantmentProviders {
    }
    export class $EnchantmentsByCost extends $Record implements $EnchantmentProvider {
        codec(): $MapCodec<$EnchantmentsByCost>;
        cost(): $IntProvider;
        enchantments(): $HolderSet<$Enchantment>;
        enchant(arg0: $ItemStack_, arg1: $ItemEnchantments$Mutable, arg2: $RandomSource, arg3: $DifficultyInstance): void;
        static CODEC: $MapCodec<$EnchantmentsByCost>;
        constructor(arg0: $HolderSet_<$Enchantment>, arg1: $IntProvider_);
    }
    export class $EnchantmentsByCostWithDifficulty extends $Record implements $EnchantmentProvider {
        codec(): $MapCodec<$EnchantmentsByCostWithDifficulty>;
        enchantments(): $HolderSet<$Enchantment>;
        enchant(arg0: $ItemStack_, arg1: $ItemEnchantments$Mutable, arg2: $RandomSource, arg3: $DifficultyInstance): void;
        minCost(): number;
        maxCostSpan(): number;
        static CODEC: $MapCodec<$EnchantmentsByCostWithDifficulty>;
        static MAX_ALLOWED_VALUE_PART: number;
        constructor(arg0: $HolderSet_<$Enchantment>, arg1: number, arg2: number);
    }
    export interface $EnchantmentProvider extends RegistryMarked<RegistryTypes.EnchantmentProviderTag, RegistryTypes.EnchantmentProvider> {}
    export class $VanillaEnchantmentProviders {
        static create(arg0: string): $ResourceKey<$EnchantmentProvider>;
        static bootstrap(arg0: $BootstrapContext<$EnchantmentProvider_>): void;
        static RAID_VINDICATOR_POST_WAVE_5: $ResourceKey<$EnchantmentProvider>;
        static PILLAGER_SPAWN_CROSSBOW: $ResourceKey<$EnchantmentProvider>;
        static RAID_PILLAGER_POST_WAVE_5: $ResourceKey<$EnchantmentProvider>;
        static RAID_PILLAGER_POST_WAVE_3: $ResourceKey<$EnchantmentProvider>;
        static RAID_VINDICATOR: $ResourceKey<$EnchantmentProvider>;
        static ENDERMAN_LOOT_DROP: $ResourceKey<$EnchantmentProvider>;
        static MOB_SPAWN_EQUIPMENT: $ResourceKey<$EnchantmentProvider>;
    }
    export interface $VanillaEnchantmentProviders {
    }
}
