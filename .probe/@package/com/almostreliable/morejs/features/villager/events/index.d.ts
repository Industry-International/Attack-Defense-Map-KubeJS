import { $Level } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Table } from "@package/com/google/common/collect";
import { $List, $List_ } from "@package/java/util";
import { $AbstractVillager, $VillagerTrades$ItemListing, $VillagerProfession, $VillagerTrades$ItemListing_, $VillagerData, $VillagerProfession_ } from "@package/net/minecraft/world/entity/npc";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $KubeLivingEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $Holder_, $RegistryAccess } from "@package/net/minecraft/core";
import { $SimpleTrade, $TransformableTrade$Transformer_ } from "@package/com/almostreliable/morejs/features/villager/trades";
import { $TradeItem, $TradeFilter_, $OfferExtension, $IntRange } from "@package/com/almostreliable/morejs/features/villager";
import { $Object } from "@package/java/lang";
import { $Merchant, $MerchantOffer, $MerchantOffers } from "@package/net/minecraft/world/item/trading";

declare module "@package/com/almostreliable/morejs/features/villager/events" {
    export class $SingleUpdateOfferEventJS extends $UpdateOfferEventJS {
        getOffer(): $MerchantOffer;
        createRandomOffer(): $MerchantOffer;
        getUsedTrades(): $List<$VillagerTrades$ItemListing>;
        setOffer(arg0: $VillagerTrades$ItemListing_): void;
        setOffer(arg0: $MerchantOffer): void;
        constructor(arg0: $AbstractVillager, arg1: $MerchantOffers, arg2: $VillagerTrades$ItemListing_[], arg3: $MerchantOffer);
        get usedTrades(): $List<$VillagerTrades$ItemListing>;
    }
    export class $VillagerTradingEventJS implements $KubeEvent {
        getTrades(arg0: $Holder_<$VillagerProfession>, arg1: number): $List<$VillagerTrades$ItemListing>;
        addTrade<T extends $VillagerTrades$ItemListing>(arg0: $Holder_<$VillagerProfession>, arg1: number, arg2: T): T;
        addTrade(arg0: $Holder_<$VillagerProfession>, arg1: number, arg2: $TradeItem[], arg3: $TradeItem): $SimpleTrade;
        forEachTrades(arg0: $List_<$Holder_<$VillagerProfession>>, arg1: $IntRange, arg2: $Consumer_<$List<$VillagerTrades$ItemListing>>): void;
        forEachTrades(arg0: $VillagerTradingEventJS$ForEachCallback_): void;
        addCustomTrade(arg0: $Holder_<$VillagerProfession>, arg1: number, arg2: $TransformableTrade$Transformer_): void;
        removeTrades(arg0: $TradeFilter_): void;
        removeModdedTypedTrades(arg0: $List_<$Holder_<$VillagerProfession>>, arg1: $IntRange): void;
        removeModdedTypedTrades(arg0: $List_<$Holder_<$VillagerProfession>>): void;
        removeModdedTypedTrades(): void;
        removeVanillaTypedTrades(arg0: $List_<$Holder_<$VillagerProfession>>, arg1: $IntRange): void;
        removeVanillaTypedTrades(arg0: $List_<$Holder_<$VillagerProfession>>): void;
        removeVanillaTypedTrades(): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $Table<$VillagerProfession_, number, $List_<$VillagerTrades$ItemListing_>>);
    }
    export class $PostUpdateOfferEventJS extends $UpdateOfferEventJS {
        static invoke(arg0: $AbstractVillager, arg1: $MerchantOffers): void;
        addTrade(arg0: $VillagerTrades$ItemListing_): void;
        addOffer(arg0: $MerchantOffer): void;
        constructor(arg0: $AbstractVillager, arg1: $MerchantOffers);
    }
    export class $StartTradingEventJS implements $KubePlayerEvent {
        forEachOffers(arg0: $BiConsumer_<$OfferExtension, number>): void;
        getMerchant(): $Merchant;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $Player, arg1: $Merchant);
        get merchant(): $Merchant;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $VillagerTradingEventJS$ForEachCallback {
    }
    export interface $VillagerTradingEventJS$ForEachCallback {
        accept(arg0: $List_<$VillagerTrades$ItemListing_>, arg1: number, arg2: $VillagerProfession_): void;
    }
    /**
     * Values that may be interpreted as {@link $VillagerTradingEventJS$ForEachCallback}.
     */
    export type $VillagerTradingEventJS$ForEachCallback_ = ((arg0: $List<$VillagerTrades$ItemListing>, arg1: number, arg2: $VillagerProfession) => void);
    export class $UpdateOfferEventJS implements $KubeLivingEntityEvent {
        getRandom(): $RandomSource;
        getVillagerLevel(): number;
        getVillagerData(): $VillagerData;
        getProfession(): $VillagerProfession;
        getVillagerTrades(arg0: $VillagerProfession_, arg1: number): $List<$VillagerTrades$ItemListing>;
        getVillagerTrades(arg0: $VillagerProfession_): $List<$VillagerTrades$ItemListing>;
        getWandererTrades(arg0: number): $List<$VillagerTrades$ItemListing>;
        getWandererTrades(): $List<$VillagerTrades$ItemListing>;
        createRandomOffer(arg0: $List_<$VillagerTrades$ItemListing_>): $MerchantOffer;
        isUnknownTrader(): boolean;
        getAllOffers(): $MerchantOffers;
        isProfession(arg0: $VillagerProfession_): boolean;
        isVillager(): boolean;
        isWanderer(): boolean;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $AbstractVillager, arg1: $MerchantOffers);
        get random(): $RandomSource;
        get villagerLevel(): number;
        get villagerData(): $VillagerData;
        get unknownTrader(): boolean;
        get allOffers(): $MerchantOffers;
        get villager(): boolean;
        get wanderer(): boolean;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $WandererTradingEventJS implements $KubeEvent {
        getTrades(arg0: number): $List<$VillagerTrades$ItemListing>;
        addTrade<T extends $VillagerTrades$ItemListing>(arg0: number, arg1: T): T;
        addTrade(arg0: number, arg1: $TradeItem[], arg2: $TradeItem): $SimpleTrade;
        addCustomTrade(arg0: number, arg1: $TransformableTrade$Transformer_): void;
        removeTrades(arg0: $TradeFilter_): void;
        /**
         * @deprecated
         */
        removeModdedTrades(): void;
        /**
         * @deprecated
         */
        removeModdedTrades(arg0: number): void;
        removeModdedTypedTrades(arg0: number): void;
        removeModdedTypedTrades(): void;
        removeVanillaTypedTrades(arg0: number): void;
        removeVanillaTypedTrades(): void;
        /**
         * @deprecated
         */
        removeVanillaTrades(): void;
        /**
         * @deprecated
         */
        removeVanillaTrades(arg0: number): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $Int2ObjectMap<$List_<$VillagerTrades$ItemListing_>>);
    }
}
