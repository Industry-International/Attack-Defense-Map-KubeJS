import { $File_ } from "@package/java/io";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Item } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $ObjectiveCriteria } from "@package/net/minecraft/world/scores/criteria";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Spliterator, $Iterator, $Set, $Collection_ } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $Consumer_ } from "@package/java/util/function";
import { $DecimalFormat } from "@package/java/text";
import { $Registry } from "@package/net/minecraft/core";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $RecipeBookType_, $RecipeBookMenu } from "@package/net/minecraft/world/inventory";
import { $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/stats" {
    export class $ServerRecipeBook extends $RecipeBook {
        toNbt(): $CompoundTag;
        fromNbt(arg0: $CompoundTag_, arg1: $RecipeManager): void;
        addRecipes(arg0: $Collection_<$RecipeHolder_<never>>, arg1: $ServerPlayer): number;
        removeRecipes(arg0: $Collection_<$RecipeHolder_<never>>, arg1: $ServerPlayer): number;
        sendInitialRecipeBook(arg0: $ServerPlayer): void;
        highlight: $Set<$ResourceLocation>;
        known: $Set<$ResourceLocation>;
        static RECIPE_BOOK_TAG: string;
        constructor();
    }
    export class $RecipeBookSettings$TypeSettings {
    }
    export class $Stats {
        static INTERACT_WITH_LOOM: $ResourceLocation;
        static ANIMALS_BRED: $ResourceLocation;
        static INTERACT_WITH_BLAST_FURNACE: $ResourceLocation;
        static TUNE_NOTEBLOCK: $ResourceLocation;
        static PLAY_NOTEBLOCK: $ResourceLocation;
        static PLAY_TIME: $ResourceLocation;
        static DEATHS: $ResourceLocation;
        static INTERACT_WITH_BREWINGSTAND: $ResourceLocation;
        static PLAY_RECORD: $ResourceLocation;
        static JUMP: $ResourceLocation;
        static POT_FLOWER: $ResourceLocation;
        static INTERACT_WITH_ANVIL: $ResourceLocation;
        static WALK_ON_WATER_ONE_CM: $ResourceLocation;
        static INTERACT_WITH_STONECUTTER: $ResourceLocation;
        static RAID_WIN: $ResourceLocation;
        static SWIM_ONE_CM: $ResourceLocation;
        static INTERACT_WITH_LECTERN: $ResourceLocation;
        static RAID_TRIGGER: $ResourceLocation;
        static CROUCH_ONE_CM: $ResourceLocation;
        static STRIDER_ONE_CM: $ResourceLocation;
        static USE_CAULDRON: $ResourceLocation;
        static DAMAGE_DEALT: $ResourceLocation;
        static BELL_RING: $ResourceLocation;
        static CLEAN_SHULKER_BOX: $ResourceLocation;
        static TIME_SINCE_DEATH: $ResourceLocation;
        static TRIGGER_TRAPPED_CHEST: $ResourceLocation;
        static ITEM_BROKEN: $StatType<$Item>;
        static FLY_ONE_CM: $ResourceLocation;
        static EAT_CAKE_SLICE: $ResourceLocation;
        static DAMAGE_ABSORBED: $ResourceLocation;
        static INTERACT_WITH_FURNACE: $ResourceLocation;
        static AVIATE_ONE_CM: $ResourceLocation;
        static INTERACT_WITH_GRINDSTONE: $ResourceLocation;
        static TARGET_HIT: $ResourceLocation;
        static FISH_CAUGHT: $ResourceLocation;
        static TIME_SINCE_REST: $ResourceLocation;
        static INTERACT_WITH_CRAFTING_TABLE: $ResourceLocation;
        static BLOCK_MINED: $StatType<$Block>;
        static DAMAGE_DEALT_RESISTED: $ResourceLocation;
        static INSPECT_HOPPER: $ResourceLocation;
        static ITEM_DROPPED: $StatType<$Item>;
        static DAMAGE_TAKEN: $ResourceLocation;
        static LEAVE_GAME: $ResourceLocation;
        static FALL_ONE_CM: $ResourceLocation;
        static INTERACT_WITH_CARTOGRAPHY_TABLE: $ResourceLocation;
        static TOTAL_WORLD_TIME: $ResourceLocation;
        static WALK_UNDER_WATER_ONE_CM: $ResourceLocation;
        static CLEAN_ARMOR: $ResourceLocation;
        static MINECART_ONE_CM: $ResourceLocation;
        static FILL_CAULDRON: $ResourceLocation;
        static CLIMB_ONE_CM: $ResourceLocation;
        static DROP: $ResourceLocation;
        static SPRINT_ONE_CM: $ResourceLocation;
        static ITEM_USED: $StatType<$Item>;
        static ENCHANT_ITEM: $ResourceLocation;
        static INTERACT_WITH_SMITHING_TABLE: $ResourceLocation;
        static CUSTOM: $StatType<$ResourceLocation>;
        static OPEN_ENDERCHEST: $ResourceLocation;
        static MOB_KILLS: $ResourceLocation;
        static SLEEP_IN_BED: $ResourceLocation;
        static HORSE_ONE_CM: $ResourceLocation;
        static INTERACT_WITH_BEACON: $ResourceLocation;
        static PIG_ONE_CM: $ResourceLocation;
        static ENTITY_KILLED: $StatType<$EntityType<never>>;
        static ITEM_PICKED_UP: $StatType<$Item>;
        static OPEN_BARREL: $ResourceLocation;
        static INSPECT_DISPENSER: $ResourceLocation;
        static ENTITY_KILLED_BY: $StatType<$EntityType<never>>;
        static WALK_ONE_CM: $ResourceLocation;
        static TALKED_TO_VILLAGER: $ResourceLocation;
        static DAMAGE_DEALT_ABSORBED: $ResourceLocation;
        static TRADED_WITH_VILLAGER: $ResourceLocation;
        static BOAT_ONE_CM: $ResourceLocation;
        static DAMAGE_RESISTED: $ResourceLocation;
        static INTERACT_WITH_SMOKER: $ResourceLocation;
        static CROUCH_TIME: $ResourceLocation;
        static CLEAN_BANNER: $ResourceLocation;
        static ITEM_CRAFTED: $StatType<$Item>;
        static DAMAGE_BLOCKED_BY_SHIELD: $ResourceLocation;
        static OPEN_SHULKER_BOX: $ResourceLocation;
        static INTERACT_WITH_CAMPFIRE: $ResourceLocation;
        static INSPECT_DROPPER: $ResourceLocation;
        static OPEN_CHEST: $ResourceLocation;
        static PLAYER_KILLS: $ResourceLocation;
        constructor();
    }
    export class $RecipeBookSettings {
        isOpen(arg0: $RecipeBookType_): boolean;
        write(arg0: $FriendlyByteBuf): void;
        write(arg0: $CompoundTag_): void;
        static read(arg0: $FriendlyByteBuf): $RecipeBookSettings;
        static read(arg0: $CompoundTag_): $RecipeBookSettings;
        copy(): $RecipeBookSettings;
        replaceFrom(arg0: $RecipeBookSettings): void;
        setOpen(arg0: $RecipeBookType_, arg1: boolean): void;
        setFiltering(arg0: $RecipeBookType_, arg1: boolean): void;
        isFiltering(arg0: $RecipeBookType_): boolean;
        constructor();
    }
    export class $RecipeBook {
        remove(arg0: $RecipeHolder_<never>): void;
        remove(arg0: $ResourceLocation_): void;
        add(arg0: $ResourceLocation_): void;
        add(arg0: $RecipeHolder_<never>): void;
        contains(arg0: $ResourceLocation_): boolean;
        contains(arg0: $RecipeHolder_<never>): boolean;
        isOpen(arg0: $RecipeBookType_): boolean;
        copyOverData(arg0: $RecipeBook): void;
        setOpen(arg0: $RecipeBookType_, arg1: boolean): void;
        willHighlight(arg0: $RecipeHolder_<never>): boolean;
        removeHighlight(arg0: $RecipeHolder_<never>): void;
        setBookSettings(arg0: $RecipeBookSettings): void;
        setFiltering(arg0: $RecipeBookType_, arg1: boolean): void;
        isFiltering(arg0: $RecipeBookMenu<never, never>): boolean;
        isFiltering(arg0: $RecipeBookType_): boolean;
        getBookSettings(): $RecipeBookSettings;
        addHighlight(arg0: $ResourceLocation_): void;
        addHighlight(arg0: $RecipeHolder_<never>): void;
        setBookSetting(arg0: $RecipeBookType_, arg1: boolean, arg2: boolean): void;
        highlight: $Set<$ResourceLocation>;
        known: $Set<$ResourceLocation>;
        constructor();
    }
    export class $StatsCounter {
        getValue<T>(arg0: $StatType_<T>, arg1: T): number;
        getValue(arg0: $Stat_<never>): number;
        increment(arg0: $Player, arg1: $Stat_<never>, arg2: number): void;
        setValue(arg0: $Player, arg1: $Stat_<never>, arg2: number): void;
        stats: $Object2IntMap<$Stat<never>>;
        constructor();
    }
    export class $Stat<T> extends $ObjectiveCriteria {
        getValue(): T;
        format(arg0: number): string;
        getType(): $StatType<T>;
        static buildName<T>(arg0: $StatType_<T>, arg1: T): string;
        static DEATH_COUNT: $ObjectiveCriteria;
        static ARMOR: $ObjectiveCriteria;
        static TRIGGER: $ObjectiveCriteria;
        static KILL_COUNT_ALL: $ObjectiveCriteria;
        static AIR: $ObjectiveCriteria;
        static LEVEL: $ObjectiveCriteria;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Stat<never>>;
        static DUMMY: $ObjectiveCriteria;
        static EXPERIENCE: $ObjectiveCriteria;
        static HEALTH: $ObjectiveCriteria;
        static KILL_COUNT_PLAYERS: $ObjectiveCriteria;
        static TEAM_KILL: $ObjectiveCriteria[];
        static KILLED_BY_TEAM: $ObjectiveCriteria[];
        static FOOD: $ObjectiveCriteria;
        constructor(arg0: $StatType_<T>, arg1: T, arg2: $StatFormatter_);
        get value(): T;
        get type(): $StatType<T>;
    }
    /**
     * Values that may be interpreted as {@link $Stat}.
     */
    export type $Stat_<T> = string;
    export interface $StatType extends RegistryMarked<RegistryTypes.StatTypeTag, RegistryTypes.StatType> {}
    export class $ServerStatsCounter extends $StatsCounter {
        save(): void;
        toJson(): string;
        parseLocal(arg0: $DataFixer, arg1: string): void;
        sendStats(arg0: $ServerPlayer): void;
        markAllDirty(): void;
        stats: $Object2IntMap<$Stat<never>>;
        constructor(arg0: $MinecraftServer, arg1: $File_);
    }
    export class $StatFormatter {
        static DISTANCE: $StatFormatter;
        static DECIMAL_FORMAT: $DecimalFormat;
        static DIVIDE_BY_TEN: $StatFormatter;
        static TIME: $StatFormatter;
        static DEFAULT: $StatFormatter;
    }
    export interface $StatFormatter {
        format(arg0: number): string;
    }
    /**
     * Values that may be interpreted as {@link $StatFormatter}.
     */
    export type $StatFormatter_ = ((arg0: number) => string);
    export class $StatType<T> implements $Iterable<$Stat<T>> {
        get(arg0: $Stat_<T>): $Stat<$Stat<T>>;
        get(arg0: $Stat_<T>, arg1: $StatFormatter_): $Stat<$Stat<T>>;
        iterator(): $Iterator<$Stat<$Stat<T>>>;
        contains(arg0: $Stat_<T>): boolean;
        getDisplayName(): $Component;
        getRegistry(): $Registry<$Stat<T>>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $Stat<$Stat<T>>>;
        spliterator(): $Spliterator<$Stat<T>>;
        forEach(arg0: $Consumer_<$Stat<T>>): void;
        constructor(arg0: $Registry<$Stat_<T>>, arg1: $Component_);
        [Symbol.iterator](): Iterator<$Stat<$Stat<T>>>
        get displayName(): $Component;
        get registry(): $Registry<$Stat<T>>;
    }
    /**
     * Values that may be interpreted as {@link $StatType}.
     */
    export type $StatType_<T> = RegistryTypes.StatType;
}
