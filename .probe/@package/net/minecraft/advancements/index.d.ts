import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $PlayerAdvancements } from "@package/net/minecraft/server";
import { $DataResult, $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Set_, $Map, $Set, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable, $ProblemReporter } from "@package/net/minecraft/util";
import { $DistanceTrigger, $EffectsChangedTrigger, $UsedEnderEyeTrigger, $EnterBlockTrigger, $BredAnimalsTrigger, $SlideDownBlockTrigger, $LootTableTrigger, $ShotCrossbowTrigger, $BrewedPotionTrigger, $TameAnimalTrigger, $FilledBucketTrigger, $PlayerHurtEntityTrigger, $KilledTrigger, $PickedUpItemTrigger, $PlayerInteractTrigger, $EntityHurtPlayerTrigger, $SummonedEntityTrigger, $UsingItemTrigger, $RecipeCraftedTrigger, $StartRidingTrigger, $AnyBlockInteractionTrigger, $ConsumeItemTrigger, $ChangeDimensionTrigger, $PlayerTrigger, $ImpossibleTrigger, $DefaultBlockInteractionTrigger, $InventoryChangeTrigger, $ItemDurabilityTrigger, $ConstructBeaconTrigger, $UsedTotemTrigger, $CriterionValidator, $FallAfterExplosionTrigger, $BeeNestDestroyedTrigger, $KilledByCrossbowTrigger, $RecipeUnlockedTrigger, $EnchantedItemTrigger, $CuredZombieVillagerTrigger, $LevitationTrigger, $LightningStrikeTrigger, $TradeTrigger, $ItemUsedOnLocationTrigger, $ChanneledLightningTrigger, $TargetBlockTrigger, $FishingRodHookedTrigger } from "@package/net/minecraft/advancements/critereon";
import { $CacheableFunction } from "@package/net/minecraft/commands";
import { $Instant } from "@package/java/time";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Registry, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $IAdvancementBuilderExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $WithConditions } from "@package/net/neoforged/neoforge/common/conditions";
import { $AdvancementNodeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Enum, $Comparable, $Iterable, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as critereon from "@package/net/minecraft/advancements/critereon";

declare module "@package/net/minecraft/advancements" {
    export class $Advancement$Builder implements $IAdvancementBuilderExtension {
        /**
         * @deprecated
         */
        parent(arg0: $ResourceLocation_): $Advancement$Builder;
        parent(arg0: $AdvancementHolder_): $Advancement$Builder;
        save(arg0: $Consumer_<$AdvancementHolder>, arg1: string): $AdvancementHolder;
        display(arg0: $DisplayInfo): $Advancement$Builder;
        display(arg0: $ItemStack_, arg1: $Component_, arg2: $Component_, arg3: $ResourceLocation_, arg4: $AdvancementType_, arg5: boolean, arg6: boolean, arg7: boolean): $Advancement$Builder;
        display(arg0: $ItemLike_, arg1: $Component_, arg2: $Component_, arg3: $ResourceLocation_, arg4: $AdvancementType_, arg5: boolean, arg6: boolean, arg7: boolean): $Advancement$Builder;
        build(arg0: $ResourceLocation_): $AdvancementHolder;
        requirements(arg0: $AdvancementRequirements_): $Advancement$Builder;
        requirements(arg0: $AdvancementRequirements$Strategy_): $Advancement$Builder;
        rewards(arg0: $AdvancementRewards$Builder): $Advancement$Builder;
        rewards(arg0: $AdvancementRewards_): $Advancement$Builder;
        static advancement(): $Advancement$Builder;
        sendsTelemetryEvent(): $Advancement$Builder;
        addCriterion(arg0: string, arg1: $Criterion_<never>): $Advancement$Builder;
        static recipeAdvancement(): $Advancement$Builder;
        save(arg0: $Consumer_<$AdvancementHolder>, arg1: $ResourceLocation_, arg2: $ExistingFileHelper): $AdvancementHolder;
        constructor();
    }
    export class $AdvancementRequirements$Strategy {
        static OR: $AdvancementRequirements$Strategy;
        static AND: $AdvancementRequirements$Strategy;
    }
    export interface $AdvancementRequirements$Strategy {
        create(arg0: $Collection_<string>): $AdvancementRequirements;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementRequirements$Strategy}.
     */
    export type $AdvancementRequirements$Strategy_ = ((arg0: $Collection<string>) => $AdvancementRequirements_);
    export interface $CriterionTrigger extends RegistryMarked<RegistryTypes.TriggerTypeTag, RegistryTypes.TriggerType> {}
    export class $CriterionTrigger<T extends $CriterionTriggerInstance> {
    }
    export interface $CriterionTrigger<T extends $CriterionTriggerInstance> {
        codec(): $Codec<T>;
        removePlayerListener(arg0: $PlayerAdvancements, arg1: $CriterionTrigger$Listener_<T>): void;
        removePlayerListeners(arg0: $PlayerAdvancements): void;
        addPlayerListener(arg0: $PlayerAdvancements, arg1: $CriterionTrigger$Listener_<T>): void;
        createCriterion(arg0: T): $Criterion<T>;
    }
    /**
     * Values that may be interpreted as {@link $CriterionTrigger}.
     */
    export type $CriterionTrigger_<T> = RegistryTypes.TriggerType;
    export class $CriteriaTriggers {
        static register<T extends $CriterionTrigger<never>>(arg0: string, arg1: T): T;
        static bootstrap(arg0: $Registry<$CriterionTrigger_<never>>): $CriterionTrigger<never>;
        static ENCHANTED_ITEM: $EnchantedItemTrigger;
        static TRADE: $TradeTrigger;
        static DEFAULT_BLOCK_USE: $DefaultBlockInteractionTrigger;
        static RECIPE_CRAFTED: $RecipeCraftedTrigger;
        static KILLED_BY_CROSSBOW: $KilledByCrossbowTrigger;
        static TAME_ANIMAL: $TameAnimalTrigger;
        static CHANGED_DIMENSION: $ChangeDimensionTrigger;
        static ITEM_DURABILITY_CHANGED: $ItemDurabilityTrigger;
        static ENTITY_KILLED_PLAYER: $KilledTrigger;
        static AVOID_VIBRATION: $PlayerTrigger;
        static BREWED_POTION: $BrewedPotionTrigger;
        static PLAYER_HURT_ENTITY: $PlayerHurtEntityTrigger;
        static ALLAY_DROP_ITEM_ON_BLOCK: $ItemUsedOnLocationTrigger;
        static RAID_WIN: $PlayerTrigger;
        static SHOT_CROSSBOW: $ShotCrossbowTrigger;
        static RIDE_ENTITY_IN_LAVA_TRIGGER: $DistanceTrigger;
        static NETHER_TRAVEL: $DistanceTrigger;
        static BEE_NEST_DESTROYED: $BeeNestDestroyedTrigger;
        static KILL_MOB_NEAR_SCULK_CATALYST: $KilledTrigger;
        static CRAFTER_RECIPE_CRAFTED: $RecipeCraftedTrigger;
        static CODEC: $Codec<$CriterionTrigger<never>>;
        static FILLED_BUCKET: $FilledBucketTrigger;
        static LIGHTNING_STRIKE: $LightningStrikeTrigger;
        static ENTITY_HURT_PLAYER: $EntityHurtPlayerTrigger;
        static RAID_OMEN: $PlayerTrigger;
        static ANY_BLOCK_USE: $AnyBlockInteractionTrigger;
        static SUMMONED_ENTITY: $SummonedEntityTrigger;
        static TICK: $PlayerTrigger;
        static ITEM_USED_ON_BLOCK: $ItemUsedOnLocationTrigger;
        static TARGET_BLOCK_HIT: $TargetBlockTrigger;
        static EFFECTS_CHANGED: $EffectsChangedTrigger;
        static PLAYER_KILLED_ENTITY: $KilledTrigger;
        static LOCATION: $PlayerTrigger;
        static GENERATE_LOOT: $LootTableTrigger;
        static PLAYER_INTERACTED_WITH_ENTITY: $PlayerInteractTrigger;
        static THROWN_ITEM_PICKED_UP_BY_PLAYER: $PickedUpItemTrigger;
        static RECIPE_UNLOCKED: $RecipeUnlockedTrigger;
        static BRED_ANIMALS: $BredAnimalsTrigger;
        static INVENTORY_CHANGED: $InventoryChangeTrigger;
        static SLEPT_IN_BED: $PlayerTrigger;
        static IMPOSSIBLE: $ImpossibleTrigger;
        static USED_TOTEM: $UsedTotemTrigger;
        static CONSUME_ITEM: $ConsumeItemTrigger;
        static PLACED_BLOCK: $ItemUsedOnLocationTrigger;
        static CURED_ZOMBIE_VILLAGER: $CuredZombieVillagerTrigger;
        static USED_ENDER_EYE: $UsedEnderEyeTrigger;
        static START_RIDING_TRIGGER: $StartRidingTrigger;
        static HONEY_BLOCK_SLIDE: $SlideDownBlockTrigger;
        static CONSTRUCT_BEACON: $ConstructBeaconTrigger;
        static ENTER_BLOCK: $EnterBlockTrigger;
        static FISHING_ROD_HOOKED: $FishingRodHookedTrigger;
        static LEVITATION: $LevitationTrigger;
        static CHANNELED_LIGHTNING: $ChanneledLightningTrigger;
        static FALL_AFTER_EXPLOSION: $FallAfterExplosionTrigger;
        static THROWN_ITEM_PICKED_UP_BY_ENTITY: $PickedUpItemTrigger;
        static USING_ITEM: $UsingItemTrigger;
        static FALL_FROM_HEIGHT: $DistanceTrigger;
        constructor();
    }
    export class $AdvancementTree {
        remove(arg0: $Set_<$ResourceLocation_>): void;
        get(arg0: $ResourceLocation_): $AdvancementNode;
        get(arg0: $AdvancementHolder_): $AdvancementNode;
        clear(): void;
        addAll(arg0: $Collection_<$AdvancementHolder_>): void;
        roots(): $Iterable<$AdvancementNode>;
        nodes(): $Collection<$AdvancementNode>;
        setListener(arg0: $AdvancementTree$Listener): void;
        constructor();
        set listener(value: $AdvancementTree$Listener);
    }
    export class $CriterionProgress {
        isDone(): boolean;
        revoke(): void;
        grant(): void;
        serializeToNetwork(arg0: $FriendlyByteBuf): void;
        static fromNetwork(arg0: $FriendlyByteBuf): $CriterionProgress;
        getObtained(): $Instant;
        constructor();
        constructor(arg0: $Instant);
        get done(): boolean;
        get obtained(): $Instant;
    }
    export class $AdvancementRewards$Builder {
        static "function"(arg0: $ResourceLocation_): $AdvancementRewards$Builder;
        build(): $AdvancementRewards;
        static recipe(arg0: $ResourceLocation_): $AdvancementRewards$Builder;
        runs(arg0: $ResourceLocation_): $AdvancementRewards$Builder;
        static loot(arg0: $ResourceKey_<$LootTable>): $AdvancementRewards$Builder;
        static experience(arg0: number): $AdvancementRewards$Builder;
        addRecipe(arg0: $ResourceLocation_): $AdvancementRewards$Builder;
        addLootTable(arg0: $ResourceKey_<$LootTable>): $AdvancementRewards$Builder;
        addExperience(arg0: number): $AdvancementRewards$Builder;
        constructor();
    }
    export class $AdvancementTree$Listener {
    }
    export interface $AdvancementTree$Listener {
        onAdvancementsCleared(): void;
        onAddAdvancementRoot(arg0: $AdvancementNode): void;
        onRemoveAdvancementRoot(arg0: $AdvancementNode): void;
        onRemoveAdvancementTask(arg0: $AdvancementNode): void;
        onAddAdvancementTask(arg0: $AdvancementNode): void;
    }
    export class $Criterion<T extends $CriterionTriggerInstance> extends $Record {
        trigger(): $CriterionTrigger<T>;
        triggerInstance(): T;
        static CODEC: $Codec<$Criterion<never>>;
        constructor(arg0: $CriterionTrigger_<T>, arg1: T);
    }
    export class $Advancement extends $Record {
        name(): ($Component) | undefined;
        static name(arg0: $AdvancementHolder_): $Component;
        parent(): ($ResourceLocation) | undefined;
        validate(arg0: $ProblemReporter, arg1: $HolderGetter$Provider_): void;
        display(): ($DisplayInfo) | undefined;
        isRoot(): boolean;
        requirements(): $AdvancementRequirements;
        rewards(): $AdvancementRewards;
        criteria(): $Map<string, $Criterion<never>>;
        sendsTelemetryEvent(): boolean;
        static CODEC: $Codec<$Advancement>;
        static CONDITIONAL_CODEC: $Codec<($WithConditions<$Advancement>) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Advancement>;
        constructor(arg0: ($ResourceLocation_) | undefined, arg1: ($DisplayInfo) | undefined, arg2: $AdvancementRewards_, arg3: $Map_<string, $Criterion_<never>>, arg4: $AdvancementRequirements_, arg5: boolean);
        constructor(parent: ($ResourceLocation_) | undefined, display: ($DisplayInfo) | undefined, rewards: $AdvancementRewards_, criteria: $Map_<string, $Criterion_<never>>, requirements: $AdvancementRequirements_, sendsTelemetryEvent: boolean, name: ($Component_) | undefined);
        get root(): boolean;
    }
    export class $AdvancementRequirements extends $Record {
        size(): number;
        test(arg0: $Predicate_<string>): boolean;
        isEmpty(): boolean;
        count(arg0: $Predicate_<string>): number;
        validate(arg0: $Set_<string>): $DataResult<$AdvancementRequirements>;
        write(arg0: $FriendlyByteBuf): void;
        names(): $Set<string>;
        static allOf(arg0: $Collection_<string>): $AdvancementRequirements;
        requirements(): $List<$List<string>>;
        static anyOf(arg0: $Collection_<string>): $AdvancementRequirements;
        static CODEC: $Codec<$AdvancementRequirements>;
        static EMPTY: $AdvancementRequirements;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: $List_<$List_<string>>);
        get empty(): boolean;
    }
    export class $AdvancementRewards extends $Record {
        "function"(): ($CacheableFunction) | undefined;
        grant(arg0: $ServerPlayer): void;
        loot(): $List<$ResourceKey<$LootTable>>;
        experience(): number;
        recipes(): $List<$ResourceLocation>;
        static CODEC: $Codec<$AdvancementRewards>;
        static EMPTY: $AdvancementRewards;
        constructor(experience: number, loot: $List_<$ResourceKey_<$LootTable>>, recipes: $List_<$ResourceLocation_>, arg3: ($CacheableFunction) | undefined);
    }
    export class $CriterionTrigger$Listener<T extends $CriterionTriggerInstance> extends $Record {
        run(arg0: $PlayerAdvancements): void;
        trigger(): T;
        criterion(): string;
        advancement(): $AdvancementHolder;
        constructor(arg0: T, arg1: $AdvancementHolder_, arg2: string);
    }
    export class $AdvancementType extends $Enum<$AdvancementType> implements $StringRepresentable {
        static values(): $AdvancementType[];
        static valueOf(arg0: string): $AdvancementType;
        getDisplayName(): $Component;
        getChatColor(): $ChatFormatting;
        getSerializedName(): string;
        createAnnouncement(arg0: $AdvancementHolder_, arg1: $ServerPlayer): $MutableComponent;
        getRemappedEnumConstantName(): string;
        static CHALLENGE: $AdvancementType;
        static TASK: $AdvancementType;
        static GOAL: $AdvancementType;
        static CODEC: $Codec<$AdvancementType>;
        get displayName(): $Component;
        get chatColor(): $ChatFormatting;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementType}.
     */
    export type $AdvancementType_ = "task" | "challenge" | "goal";
    export class $AdvancementProgress implements $Comparable<$AdvancementProgress> {
        compareTo(arg0: $AdvancementProgress): number;
        update(arg0: $AdvancementRequirements_): void;
        isDone(): boolean;
        getPercent(): number;
        getCompletedCriteria(): $Iterable<string>;
        getRemainingCriteria(): $Iterable<string>;
        getCriterion(arg0: string): $CriterionProgress;
        hasProgress(): boolean;
        serializeToNetwork(arg0: $FriendlyByteBuf): void;
        static fromNetwork(arg0: $FriendlyByteBuf): $AdvancementProgress;
        revokeProgress(arg0: string): boolean;
        grantProgress(arg0: string): boolean;
        getFirstProgressDate(): $Instant;
        getProgressText(): $Component;
        static CODEC: $Codec<$AdvancementProgress>;
        constructor();
        get done(): boolean;
        get percent(): number;
        get completedCriteria(): $Iterable<string>;
        get remainingCriteria(): $Iterable<string>;
        get firstProgressDate(): $Instant;
        get progressText(): $Component;
    }
    export class $DisplayInfo {
        isHidden(): boolean;
        getType(): $AdvancementType;
        getY(): number;
        getX(): number;
        getTitle(): $Component;
        setLocation(arg0: number, arg1: number): void;
        getBackground(): ($ResourceLocation) | undefined;
        getDescription(): $Component;
        getIcon(): $ItemStack;
        shouldAnnounceChat(): boolean;
        shouldShowToast(): boolean;
        static CODEC: $Codec<$DisplayInfo>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DisplayInfo>;
        constructor(arg0: $ItemStack_, arg1: $Component_, arg2: $Component_, arg3: ($ResourceLocation_) | undefined, arg4: $AdvancementType_, arg5: boolean, arg6: boolean, arg7: boolean);
        get hidden(): boolean;
        get type(): $AdvancementType;
        get y(): number;
        get x(): number;
        get title(): $Component;
        get background(): ($ResourceLocation) | undefined;
        get description(): $Component;
        get icon(): $ItemStack;
    }
    export class $AdvancementNode implements $AdvancementNodeKJS {
        parent(): $AdvancementNode;
        root(): $AdvancementNode;
        holder(): $AdvancementHolder;
        static getRoot(arg0: $AdvancementNode): $AdvancementNode;
        children(): $Iterable<$AdvancementNode>;
        addChild(arg0: $AdvancementNode): void;
        advancement(): $Advancement;
        getTitle(): $Component;
        self(): $AdvancementNode;
        getId(): $ResourceLocation;
        getParent(): $AdvancementNode;
        getDisplay(): $DisplayInfo;
        getChildren(): $Set<$AdvancementNode>;
        getDisplayText(): $Component;
        addChild(a: $AdvancementNode): void;
        hasDisplay(): boolean;
        getDescription(): $Component;
        constructor(arg0: $AdvancementHolder_, arg1: $AdvancementNode);
        get title(): $Component;
        get id(): $ResourceLocation;
        get display(): $DisplayInfo;
        get displayText(): $Component;
        get description(): $Component;
    }
    export class $TreeNodePosition {
        static run(arg0: $AdvancementNode): void;
        constructor(arg0: $AdvancementNode, arg1: $TreeNodePosition, arg2: $TreeNodePosition, arg3: number, arg4: number);
    }
    export class $AdvancementHolder extends $Record {
        value(): $Advancement;
        id(): $ResourceLocation;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$AdvancementHolder>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AdvancementHolder>;
        constructor(arg0: $ResourceLocation_, arg1: $Advancement_);
    }
    export class $CriterionTriggerInstance {
    }
    export interface $CriterionTriggerInstance {
        validate(arg0: $CriterionValidator): void;
    }
    /**
     * Values that may be interpreted as {@link $CriterionTriggerInstance}.
     */
    export type $CriterionTriggerInstance_ = ((arg0: $CriterionValidator) => void);
}
