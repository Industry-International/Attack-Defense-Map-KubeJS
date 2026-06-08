import { $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $ReloadableServerResources, $MinecraftServer } from "@package/net/minecraft/server";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CommandDispatcher, $ParseResults } from "@package/com/mojang/brigadier";
import { $LightningBolt, $EntityType_, $MobCategory_, $EntityDimensions_, $Entity, $EquipmentSlotGroup_, $Pose_, $LivingEntity, $Mob, $SlotAccess, $SpawnGroupData, $MobSpawnType_ } from "@package/net/minecraft/world/entity";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $PreparableReloadListener_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $RandomSource, $Unit_, $Unit } from "@package/net/minecraft/util";
import { $AdvancementProgress, $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Difficulty_, $Container, $InteractionResultHolder, $DifficultyInstance, $Difficulty } from "@package/net/minecraft/world";
import { $SoundSource_, $SoundEvent, $SoundSource } from "@package/net/minecraft/sounds";
import { $BlockSnapshot, $InsertableLinkedOpenCustomHashSet } from "@package/net/neoforged/neoforge/common/util";
import { $IOwnedSpawner_ } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PackType_, $PackType } from "@package/net/minecraft/server/packs";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Method } from "@package/java/lang/reflect";
import { $DataComponentPatch$Builder } from "@package/net/minecraft/core/component";
import { $ContainerLevelAccess_, $ClickAction_, $Slot, $ContainerLevelAccess, $ClickAction } from "@package/net/minecraft/world/inventory";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $ItemAbility_, $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $Item, $CreativeModeTab$ItemDisplayParameters_, $TooltipFlag, $CreativeModeTab_, $CreativeModeTab$DisplayItemsGenerator_, $CreativeModeTab$ItemDisplayParameters, $CreativeModeTab, $CreativeModeTab$TabVisibility_, $Item$TooltipContext, $ItemStack_, $ItemStack, $CreativeModeTab$Output_, $CreativeModeTab$Output } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player$BedSleepingProblem, $Player$BedSleepingProblem_, $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $LevelStorageSource$LevelDirectory_, $LevelStorageSource$LevelDirectory, $PlayerDataStorage, $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $Projectile, $ThrownEnderpearl } from "@package/net/minecraft/world/entity/projectile";
import { $CommandBuildContext, $Commands$CommandSelection_, $Commands$CommandSelection, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Pack$Position_, $RepositorySource, $PackSource, $RepositorySource_ } from "@package/net/minecraft/server/packs/repository";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $EntityTeleportEvent$ChorusFruit, $EntityTeleportEvent$EnderPearl, $EntityTeleportEvent$TeleportCommand, $EntityEvent$Size, $EntityTeleportEvent$EnderEntity, $EntityTeleportEvent$SpreadPlayersCommand } from "@package/net/neoforged/neoforge/event/entity";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $Stat_, $Stat } from "@package/net/minecraft/stats";
import { $StructuresBecomeConfiguredFix$Conversion_ } from "@package/net/minecraft/util/datafix/fixes";
import { $ContextAwareReloadListener } from "@package/net/neoforged/neoforge/resource";
import { $GameEvent, $GameEvent$Context_, $GameEvent$Context } from "@package/net/minecraft/world/level/gameevent";
import { $AttributeModifier_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Set_, $List, $EnumSet, $Map_, $Collection_, $List_ } from "@package/java/util";
import { $PlayerSpawnPhantomsEvent, $AdvancementEvent$AdvancementProgressEvent$ProgressType_, $PlayerEvent, $PlayerRespawnPositionEvent, $BonemealEvent, $ItemTooltipEvent, $ItemEntityPickupEvent$Pre } from "@package/net/neoforged/neoforge/event/entity/player";
import { $ArtifactVersion } from "@package/org/apache/maven/artifact/versioning";
import { $BooleanSupplier_, $Consumer_, $Predicate_, $BiPredicate_ } from "@package/java/util/function";
import { $ObjectSortedSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$RegistryLookup, $BlockPos_, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList, $RegistryAccess, $Holder_ } from "@package/net/minecraft/core";
import { $ChunkHolder, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemEnchantments, $Enchantment, $ItemEnchantments_, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $Throwable, $Enum, $Record, $Class } from "@package/java/lang";
import { $BlockGrowFeatureEvent, $BlockEvent$NeighborNotifyEvent, $AlterGroundEvent$StateProvider_, $AlterGroundEvent$StateProvider } from "@package/net/neoforged/neoforge/event/level";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $File_ } from "@package/java/io";
import { $ServerLevelAccessor, $CustomSpawner_, $Explosion, $LevelAccessor, $ItemLike_, $ChunkPos, $BlockGetter, $CustomSpawner, $BaseSpawner, $Level_, $Level, $SpawnData_ } from "@package/net/minecraft/world/level";
import { $TreeDecorator$Context } from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $ItemAttributeModifiers, $ItemAttributeModifiers_, $ItemAttributeModifiers$Entry } from "@package/net/minecraft/world/item/component";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $EntityTickEvent$Pre } from "@package/net/neoforged/neoforge/event/tick";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FinalizeSpawnEvent, $MobSplitEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Gui$HeartType, $Gui$HeartType_ } from "@package/net/minecraft/client/gui";
import { $DimensionTransition_, $PortalShape } from "@package/net/minecraft/world/level/portal";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
export * as entity from "@package/net/neoforged/neoforge/event/entity";
export * as brewing from "@package/net/neoforged/neoforge/event/brewing";
export * as level from "@package/net/neoforged/neoforge/event/level";
export * as tick from "@package/net/neoforged/neoforge/event/tick";
export * as server from "@package/net/neoforged/neoforge/event/server";
export * as village from "@package/net/neoforged/neoforge/event/village";
export * as furnace from "@package/net/neoforged/neoforge/event/furnace";
export * as enchanting from "@package/net/neoforged/neoforge/event/enchanting";

declare module "@package/net/neoforged/neoforge/event" {
    export class $RegisterStructureConversionsEvent extends $Event {
        register(arg0: string, arg1: $StructuresBecomeConfiguredFix$Conversion_): void;
        constructor(arg0: $Map_<string, $StructuresBecomeConfiguredFix$Conversion_>);
    }
    export class $AnvilUpdateEvent extends $Event implements $ICancellableEvent {
        getName(): string;
        getLeft(): $ItemStack;
        getRight(): $ItemStack;
        getOutput(): $ItemStack;
        getPlayer(): $Player;
        getMaterialCost(): number;
        setMaterialCost(arg0: number): void;
        setCost(arg0: number): void;
        setOutput(arg0: $ItemStack_): void;
        getCost(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: string, arg3: number, arg4: $Player);
        get name(): string;
        get left(): $ItemStack;
        get right(): $ItemStack;
        get player(): $Player;
    }
    export class $ItemStackedOnOtherEvent extends $Event implements $ICancellableEvent {
        getSlot(): $Slot;
        getPlayer(): $Player;
        getCarriedSlotAccess(): $SlotAccess;
        getCarriedItem(): $ItemStack;
        getClickAction(): $ClickAction;
        getStackedOnItem(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Slot, arg3: $ClickAction_, arg4: $Player, arg5: $SlotAccess);
        get slot(): $Slot;
        get player(): $Player;
        get carriedSlotAccess(): $SlotAccess;
        get carriedItem(): $ItemStack;
        get clickAction(): $ClickAction;
        get stackedOnItem(): $ItemStack;
    }
    export class $ItemAttributeModifierEvent$ItemAttributeModifiersBuilder$Key extends $Record {
    }
    export class $VanillaGameEvent extends $Event implements $ICancellableEvent {
        getCause(): $Entity;
        getContext(): $GameEvent$Context;
        getLevel(): $Level;
        getEventPosition(): $Vec3;
        getVanillaEvent(): $Holder<$GameEvent>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $Holder_<$GameEvent>, arg2: $Vec3_, arg3: $GameEvent$Context_);
        get cause(): $Entity;
        get context(): $GameEvent$Context;
        get level(): $Level;
        get eventPosition(): $Vec3;
        get vanillaEvent(): $Holder<$GameEvent>;
    }
    export class $ModMismatchEvent$MismatchResolutionResult extends $Record {
        resolver(): $ModContainer;
        modid(): string;
        versionDifference(): $ModMismatchEvent$MismatchedVersionInfo;
        wasSelfResolved(): boolean;
        constructor(modid: string, versionDifference: $ModMismatchEvent$MismatchedVersionInfo_, resolver: $ModContainer);
    }
    export class $ModifyDefaultComponentsEvent extends $Event implements $IModBusEvent {
        modify(arg0: $ItemLike_, arg1: $Consumer_<$DataComponentPatch$Builder>): void;
        getAllItems(): $Stream<$Item>;
        modifyMatching(arg0: $Predicate_<$Item>, arg1: $Consumer_<$DataComponentPatch$Builder>): void;
        constructor();
        get allItems(): $Stream<$Item>;
    }
    export class $RegisterCommandsEvent extends $Event {
        getBuildContext(): $CommandBuildContext;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        getCommandSelection(): $Commands$CommandSelection;
        constructor(arg0: $CommandDispatcher<$CommandSourceStack>, arg1: $Commands$CommandSelection_, arg2: $CommandBuildContext);
        get buildContext(): $CommandBuildContext;
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get commandSelection(): $Commands$CommandSelection;
    }
    export class $StatAwardEvent extends $PlayerEvent implements $ICancellableEvent {
        getValue(): number;
        setValue(arg0: number): void;
        getStat(): $Stat<never>;
        setStat(arg0: $Stat_<never>): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $Stat_<never>, arg2: number);
    }
    export class $ItemAttributeModifierEvent extends $Event {
        getModifiers(): $List<$ItemAttributeModifiers$Entry>;
        removeIf(arg0: $Predicate_<$ItemAttributeModifiers$Entry>): boolean;
        build(): $ItemAttributeModifiers;
        getItemStack(): $ItemStack;
        removeModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): boolean;
        addModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_, arg2: $EquipmentSlotGroup_): boolean;
        replaceModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_, arg2: $EquipmentSlotGroup_): void;
        clearModifiers(): void;
        removeAllModifiersFor(arg0: $Holder_<$Attribute>): boolean;
        getDefaultModifiers(): $ItemAttributeModifiers;
        constructor(arg0: $ItemStack_, arg1: $ItemAttributeModifiers_);
        get modifiers(): $List<$ItemAttributeModifiers$Entry>;
        get itemStack(): $ItemStack;
        get defaultModifiers(): $ItemAttributeModifiers;
    }
    export class $ItemAttributeModifierEvent$ItemAttributeModifiersBuilder {
    }
    export class $PlayLevelSoundEvent extends $Event implements $ICancellableEvent {
        getOriginalVolume(): number;
        getOriginalPitch(): number;
        setNewVolume(arg0: number): void;
        setNewPitch(arg0: number): void;
        getLevel(): $Level;
        getSource(): $SoundSource;
        setSource(arg0: $SoundSource_): void;
        setSound(arg0: $Holder_<$SoundEvent>): void;
        getSound(): $Holder<$SoundEvent>;
        getNewVolume(): number;
        getNewPitch(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $Holder_<$SoundEvent>, arg2: $SoundSource_, arg3: number, arg4: number);
        get originalVolume(): number;
        get originalPitch(): number;
        get level(): $Level;
    }
    export class $AddReloadListenerEvent extends $Event {
        addListener(arg0: $PreparableReloadListener_): void;
        getListeners(): $List<$PreparableReloadListener>;
        getRegistryAccess(): $RegistryAccess;
        getConditionContext(): $ICondition$IContext;
        getServerResources(): $ReloadableServerResources;
        constructor(arg0: $ReloadableServerResources, arg1: $RegistryAccess);
        get listeners(): $List<$PreparableReloadListener>;
        get registryAccess(): $RegistryAccess;
        get conditionContext(): $ICondition$IContext;
        get serverResources(): $ReloadableServerResources;
    }
    export class $EventHooks {
        static onEntityTeleportCommand(arg0: $Entity, arg1: number, arg2: number, arg3: number): $EntityTeleportEvent$TeleportCommand;
        static onPermissionChanged(arg0: $GameProfile, arg1: number, arg2: $PlayerList): boolean;
        static firePlayerHeartTypeEvent(arg0: $Player, arg1: $Gui$HeartType_): $Gui$HeartType;
        static firePlayerSpawnPhantoms(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $BlockPos_): $PlayerSpawnPhantomsEvent;
        static firePlayerLoggedOut(arg0: $Player): void;
        static firePlayerRespawnEvent(arg0: $ServerPlayer, arg1: boolean): void;
        static firePlayerLoadingEvent(arg0: $Player, arg1: $PlayerDataStorage, arg2: string): void;
        static firePlayerLoadingEvent(arg0: $Player, arg1: $File_, arg2: string): void;
        static firePlayerSavingEvent(arg0: $Player, arg1: $File_, arg2: string): void;
        static fireChunkSent(arg0: $ServerPlayer, arg1: $LevelChunk, arg2: $ServerLevel): void;
        static getPotentialSpawns(arg0: $LevelAccessor, arg1: $MobCategory_, arg2: $BlockPos_, arg3: $WeightedRandomList<$MobSpawnSettings$SpawnerData>): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        static firePlayerLoggedIn(arg0: $Player): void;
        static checkSpawnPosition(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_): boolean;
        static doPlayerHarvestCheck(arg0: $Player, arg1: $BlockState_, arg2: $BlockGetter, arg3: $BlockPos_): boolean;
        static getPlayerDisplayName(arg0: $Player, arg1: $Component_): $Component;
        static onExplosionStart(arg0: $Level_, arg1: $Explosion): boolean;
        static onNeighborNotify(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnumSet<$Direction_>, arg4: boolean): $BlockEvent$NeighborNotifyEvent;
        static onChorusFruitTeleport(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number): $EntityTeleportEvent$ChorusFruit;
        static getBreakSpeed(arg0: $Player, arg1: $BlockState_, arg2: number, arg3: $BlockPos_): number;
        static onPlayerWakeup(arg0: $Player, arg1: boolean, arg2: boolean): void;
        static onPlayerFall(arg0: $Player, arg1: number, arg2: number): void;
        static getEnchantmentLevelSpecific(arg0: number, arg1: $ItemStack_, arg2: $Holder_<$Enchantment>): number;
        static onCommandRegister(arg0: $CommandDispatcher<$CommandSourceStack>, arg1: $Commands$CommandSelection_, arg2: $CommandBuildContext): void;
        static loadLootTable(arg0: $HolderLookup$Provider, arg1: $ResourceLocation_, arg2: $LootTable): $LootTable;
        /**
         * @deprecated
         */
        static loadLootTable(arg0: $ResourceLocation_, arg1: $LootTable): $LootTable;
        static finalizeMobSpawn(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: $DifficultyInstance, arg3: $MobSpawnType_, arg4: $SpawnGroupData): $SpawnGroupData;
        static onStartEntityTracking(arg0: $Entity, arg1: $Player): void;
        static onStopEntityTracking(arg0: $Entity, arg1: $Player): void;
        static finalizeMobSpawnSpawner(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: $DifficultyInstance, arg3: $MobSpawnType_, arg4: $SpawnGroupData, arg5: $IOwnedSpawner_, arg6: boolean): $FinalizeSpawnEvent;
        static onPistonMovePost(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: boolean): void;
        static onPistonMovePre(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: boolean): boolean;
        static canPlayerStartSleeping(arg0: $ServerPlayer, arg1: $BlockPos_, arg2: $Either<$Player$BedSleepingProblem_, $Unit_>): $Either<$Player$BedSleepingProblem, $Unit>;
        static onCreateWorldSpawn(arg0: $Level_, arg1: $ServerLevelData): boolean;
        static fireServerTickPre(arg0: $BooleanSupplier_, arg1: $MinecraftServer): void;
        static fireServerTickPost(arg0: $BooleanSupplier_, arg1: $MinecraftServer): void;
        static onResourceReload(arg0: $ReloadableServerResources, arg1: $RegistryAccess): $List<$PreparableReloadListener>;
        static fireLevelTickPre(arg0: $Level_, arg1: $BooleanSupplier_): void;
        static fireLevelTickPost(arg0: $Level_, arg1: $BooleanSupplier_): void;
        static checkMobDespawn(arg0: $Mob): boolean;
        static onProjectileImpact(arg0: $Projectile, arg1: $HitResult): boolean;
        static onPotionBrewed(arg0: $NonNullList<$ItemStack_>): void;
        static onItemTooltip(arg0: $ItemStack_, arg1: $Player, arg2: $List_<$Component_>, arg3: $TooltipFlag, arg4: $Item$TooltipContext): $ItemTooltipEvent;
        static getItemBurnTime(arg0: $ItemStack_, arg1: number, arg2: $RecipeType_<never>): number;
        static onEffectRemoved(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $EffectCure): boolean;
        static onEffectRemoved(arg0: $LivingEntity, arg1: $Holder_<$MobEffect>, arg2: $EffectCure): boolean;
        static onLivingHeal(arg0: $LivingEntity, arg1: number): number;
        static canEntityGrief(arg0: $Level_, arg1: $Entity): boolean;
        static getExperienceDrop(arg0: $LivingEntity, arg1: $Player, arg2: number): number;
        static onItemUseStart(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $InteractionHand_, arg3: number): number;
        /**
         * @deprecated
         */
        static onItemUseStart(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): number;
        static onItemUseFinish(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: $ItemStack_): $ItemStack;
        static onUseItemStop(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): boolean;
        static onItemUseTick(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): number;
        static canEntityContinueSleeping(arg0: $LivingEntity, arg1: $Player$BedSleepingProblem_): boolean;
        static onPlayerDestroyItem(arg0: $Player, arg1: $ItemStack_, arg2: $InteractionHand_): void;
        static onToolUse(arg0: $BlockState_, arg1: $UseOnContext, arg2: $ItemAbility_, arg3: boolean): $BlockState;
        static getEntitySizeForge(arg0: $Entity, arg1: $Pose_, arg2: $EntityDimensions_, arg3: $EntityDimensions_): $EntityEvent$Size;
        static getEntitySizeForge(arg0: $Entity, arg1: $Pose_, arg2: $EntityDimensions_): $EntityEvent$Size;
        static fireEntityTickPre(arg0: $Entity): $EntityTickEvent$Pre;
        static fireEntityTickPost(arg0: $Entity): void;
        static canMountEntity(arg0: $Entity, arg1: $Entity, arg2: boolean): boolean;
        static firePlayerTickPost(arg0: $Player): void;
        static firePlayerTickPre(arg0: $Player): void;
        static canLivingConvert(arg0: $LivingEntity, arg1: $EntityType_<$LivingEntity>, arg2: $Consumer_<number>): boolean;
        static onLivingConvert(arg0: $LivingEntity, arg1: $LivingEntity): void;
        static onEntityTeleportSpreadPlayersCommand(arg0: $Entity, arg1: number, arg2: number, arg3: number): $EntityTeleportEvent$SpreadPlayersCommand;
        static onCreativeModeTabBuildContents(arg0: $CreativeModeTab_, arg1: $ResourceKey_<$CreativeModeTab>, arg2: $CreativeModeTab$DisplayItemsGenerator_, arg3: $CreativeModeTab$ItemDisplayParameters_, arg4: $CreativeModeTab$Output_): void;
        static firePlayerChangedDimensionEvent(arg0: $Player, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>): void;
        static getPlayerTabListDisplayName(arg0: $Player): $Component;
        static onPlaySoundAtPosition(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: $Holder_<$SoundEvent>, arg5: $SoundSource_, arg6: number, arg7: number): $PlayLevelSoundEvent$AtPosition;
        static onPlaySoundAtEntity(arg0: $Entity, arg1: $Holder_<$SoundEvent>, arg2: $SoundSource_, arg3: number, arg4: number): $PlayLevelSoundEvent$AtEntity;
        static onPlayerClone(arg0: $Player, arg1: $Player, arg2: boolean): void;
        static onPlayerSpawnSet(arg0: $Player, arg1: $ResourceKey_<$Level>, arg2: $BlockPos_, arg3: boolean): boolean;
        static onTrySpawnPortal(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: ($PortalShape) | undefined): ($PortalShape) | undefined;
        static onSleepFinished(arg0: $ServerLevel, arg1: number, arg2: number): number;
        static getCustomSpawners(arg0: $ServerLevel, arg1: $List_<$CustomSpawner_>): $List<$CustomSpawner>;
        static fireItemPickupPost(arg0: $ItemEntity, arg1: $Player, arg2: $ItemStack_): void;
        static fireItemPickupPre(arg0: $ItemEntity, arg1: $Player): $ItemEntityPickupEvent$Pre;
        static onItemExpire(arg0: $ItemEntity): number;
        static onEntityStruckByLightning(arg0: $Entity, arg1: $LightningBolt): boolean;
        static fireFluidPlaceBlockEvent(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $BlockState_): $BlockState;
        static canCreateFluidSource(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        static onMultiBlockPlace(arg0: $Entity, arg1: $List_<$BlockSnapshot>, arg2: $Direction_): boolean;
        static onBlockPlace(arg0: $Entity, arg1: $BlockSnapshot, arg2: $Direction_): boolean;
        static fireBlockGrowFeature(arg0: $LevelAccessor, arg1: $RandomSource, arg2: $BlockPos_, arg3: $Holder_<$ConfiguredFeature<never, never>>): $BlockGrowFeatureEvent;
        static onArrowLoose(arg0: $ItemStack_, arg1: $Level_, arg2: $Player, arg3: number, arg4: boolean): number;
        static onArrowNock(arg0: $ItemStack_, arg1: $Level_, arg2: $Player, arg3: $InteractionHand_, arg4: boolean): $InteractionResultHolder<$ItemStack>;
        static fireBonemealEvent(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $ItemStack_): $BonemealEvent;
        static onMobSplit(arg0: $Mob, arg1: $List_<$Mob>): $MobSplitEvent;
        static getMaxSpawnClusterSize(arg0: $Mob): number;
        static onAdvancementProgressedEvent(arg0: $Player, arg1: $AdvancementHolder_, arg2: $AdvancementProgress, arg3: string, arg4: $AdvancementEvent$AdvancementProgressEvent$ProgressType_): void;
        static checkSpawnPlacements(arg0: $EntityType_<never>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource, arg5: boolean): boolean;
        static onAdvancementEarnedEvent(arg0: $Player, arg1: $AdvancementHolder_): void;
        static fireChunkUnWatch(arg0: $ServerPlayer, arg1: $ChunkPos, arg2: $ServerLevel): void;
        static fireChunkWatch(arg0: $ServerPlayer, arg1: $LevelChunk, arg2: $ServerLevel): void;
        static firePlayerRespawnPositionEvent(arg0: $ServerPlayer, arg1: $DimensionTransition_, arg2: boolean): $PlayerRespawnPositionEvent;
        static fireChunkTicketLevelUpdated(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: $ChunkHolder): void;
        static onEnchantmentLevelSet(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: number, arg4: $ItemStack_, arg5: number): number;
        static onPotionAttemptBrew(arg0: $NonNullList<$ItemStack_>): boolean;
        static getAllEnchantmentLevels(arg0: $ItemEnchantments_, arg1: $ItemStack_, arg2: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        static onEntityDestroyBlock(arg0: $LivingEntity, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        static onExplosionDetonate(arg0: $Level_, arg1: $Explosion, arg2: $List_<$Entity>, arg3: number): void;
        static getExplosionKnockback(arg0: $Level_, arg1: $Explosion, arg2: $Entity, arg3: $Vec3_): $Vec3;
        static alterGround(arg0: $TreeDecorator$Context, arg1: $List_<$BlockPos_>, arg2: $AlterGroundEvent$StateProvider_): $AlterGroundEvent$StateProvider;
        static onStatAward(arg0: $Player, arg1: $Stat_<never>, arg2: number): $StatAwardEvent;
        static checkSpawnPositionSpawner(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $SpawnData_, arg4: $BaseSpawner): boolean;
        static firePlayerCraftingEvent(arg0: $Player, arg1: $ItemStack_, arg2: $Container): void;
        static firePlayerSmeltedEvent(arg0: $Player, arg1: $ItemStack_): void;
        static onPlayerBrewedPotion(arg0: $Player, arg1: $ItemStack_): void;
        static onAnimalTame(arg0: $Animal, arg1: $Player): boolean;
        static onEnderTeleport(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number): $EntityTeleportEvent$EnderEntity;
        static onEnderPearlLand(arg0: $ServerPlayer, arg1: number, arg2: number, arg3: number, arg4: $ThrownEnderpearl, arg5: number, arg6: $HitResult): $EntityTeleportEvent$EnderPearl;
        constructor();
    }
    export class $ModMismatchEvent$MismatchedVersionInfo extends $Record {
        wasUpgrade(): boolean;
        newVersion(): $ArtifactVersion;
        isMissing(): boolean;
        oldVersion(): $ArtifactVersion;
        constructor(oldVersion: $ArtifactVersion, newVersion: $ArtifactVersion);
        get missing(): boolean;
    }
    export class $OnDatapackSyncEvent extends $Event {
        getPlayer(): $ServerPlayer;
        getRelevantPlayers(): $Stream<$ServerPlayer>;
        getPlayerList(): $PlayerList;
        constructor(arg0: $PlayerList, arg1: $ServerPlayer);
        get player(): $ServerPlayer;
        get relevantPlayers(): $Stream<$ServerPlayer>;
        get playerList(): $PlayerList;
    }
    export class $AddPackFindersEvent extends $Event implements $IModBusEvent {
        isTrusted(): boolean;
        getPackType(): $PackType;
        addPackFinders(arg0: $ResourceLocation_, arg1: $PackType_, arg2: $Component_, arg3: $PackSource, arg4: boolean, arg5: $Pack$Position_): void;
        addRepositorySource(arg0: $RepositorySource_): void;
        constructor(arg0: $PackType_, arg1: $Consumer_<$RepositorySource>, arg2: boolean);
        get trusted(): boolean;
        get packType(): $PackType;
    }
    export class $TagsUpdatedEvent extends $Event {
        getRegistryAccess(): $RegistryAccess;
        getUpdateCause(): $TagsUpdatedEvent$UpdateCause;
        shouldUpdateStaticData(): boolean;
        constructor(arg0: $RegistryAccess, arg1: boolean, arg2: boolean);
        get registryAccess(): $RegistryAccess;
        get updateCause(): $TagsUpdatedEvent$UpdateCause;
    }
    export class $BlockEntityTypeAddBlocksEvent extends $Event implements $IModBusEvent {
        modify(arg0: $BlockEntityType_<never>, ...arg1: $Block_[]): void;
        modify(arg0: $BiPredicate_<$ResourceKey<$BlockEntityType<never>>, $BlockEntityType<never>>, ...arg1: $Block_[]): void;
        modify(arg0: $ResourceKey_<$BlockEntityType<never>>, ...arg1: $Block_[]): void;
        constructor();
    }
    export class $CommandEvent extends $Event implements $ICancellableEvent {
        getException(): $Throwable;
        setException(arg0: $Throwable): void;
        getParseResults(): $ParseResults<$CommandSourceStack>;
        setParseResults(arg0: $ParseResults<$CommandSourceStack>): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ParseResults<$CommandSourceStack>);
    }
    export class $GrindstoneEvent$OnPlaceItem extends $GrindstoneEvent implements $ICancellableEvent {
        getOutput(): $ItemStack;
        setOutput(arg0: $ItemStack_): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number);
    }
    export class $ModMismatchEvent extends $Event implements $IModBusEvent {
        getResolved(): $Stream<$ModMismatchEvent$MismatchResolutionResult>;
        getCurrentVersion(arg0: string): $ArtifactVersion;
        getUnresolved(): $Stream<$ModMismatchEvent$MismatchResolutionResult>;
        anyResolved(): boolean;
        anyUnresolved(): boolean;
        getResolver(arg0: string): ($ModContainer) | undefined;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        getPreviousVersion(arg0: string): $ArtifactVersion;
        wasResolved(arg0: string): boolean;
        markResolved(arg0: string): void;
        getVersionDifference(arg0: string): ($ModMismatchEvent$MismatchedVersionInfo) | undefined;
        constructor(arg0: $LevelStorageSource$LevelDirectory_, arg1: $Map_<string, $ArtifactVersion>, arg2: $Map_<string, $ArtifactVersion>);
        get resolved(): $Stream<$ModMismatchEvent$MismatchResolutionResult>;
        get unresolved(): $Stream<$ModMismatchEvent$MismatchResolutionResult>;
        get levelDirectory(): $LevelStorageSource$LevelDirectory;
    }
    export class $LootTableLoadEvent extends $Event implements $ICancellableEvent {
        getName(): $ResourceLocation;
        getKey(): $ResourceKey<$LootTable>;
        getTable(): $LootTable;
        getRegistries(): $HolderLookup$Provider;
        setTable(arg0: $LootTable): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        /**
         * @deprecated
         */
        constructor(arg0: $ResourceLocation_, arg1: $LootTable);
        constructor(arg0: $HolderLookup$Provider, arg1: $ResourceLocation_, arg2: $LootTable);
        get name(): $ResourceLocation;
        get key(): $ResourceKey<$LootTable>;
        get registries(): $HolderLookup$Provider;
    }
    export class $RegisterGameTestsEvent extends $Event implements $IModBusEvent {
        register(arg0: $Class<never>): void;
        register(arg0: $Method): void;
        constructor(arg0: $Set_<$Method>);
    }
    export class $PlayLevelSoundEvent$AtEntity extends $PlayLevelSoundEvent {
        getEntity(): $Entity;
        constructor(arg0: $Entity, arg1: $Holder_<$SoundEvent>, arg2: $SoundSource_, arg3: number, arg4: number);
        get entity(): $Entity;
    }
    export class $GrindstoneEvent extends $Event {
        getBottomItem(): $ItemStack;
        getXp(): number;
        setXp(arg0: number): void;
        getTopItem(): $ItemStack;
        get bottomItem(): $ItemStack;
        get topItem(): $ItemStack;
    }
    export class $BuildCreativeModeTabContentsEvent extends $Event implements $IModBusEvent, $CreativeModeTab$Output {
        remove(arg0: $ItemStack_, arg1: $CreativeModeTab$TabVisibility_): void;
        accept(arg0: $ItemStack_, arg1: $CreativeModeTab$TabVisibility_): void;
        getParameters(): $CreativeModeTab$ItemDisplayParameters;
        getFlags(): $FeatureFlagSet;
        insertBefore(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $CreativeModeTab$TabVisibility_): void;
        insertFirst(arg0: $ItemStack_, arg1: $CreativeModeTab$TabVisibility_): void;
        getTab(): $CreativeModeTab;
        getSearchEntries(): $ObjectSortedSet<$ItemStack>;
        getParentEntries(): $ObjectSortedSet<$ItemStack>;
        insertAfter(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $CreativeModeTab$TabVisibility_): void;
        hasPermissions(): boolean;
        getTabKey(): $ResourceKey<$CreativeModeTab>;
        accept(arg0: $ItemLike_): void;
        accept(arg0: $ItemLike_, arg1: $CreativeModeTab$TabVisibility_): void;
        accept(arg0: $ItemStack_): void;
        acceptAll(arg0: $Collection_<$ItemStack_>): void;
        acceptAll(arg0: $Collection_<$ItemStack_>, arg1: $CreativeModeTab$TabVisibility_): void;
        constructor(arg0: $CreativeModeTab_, arg1: $ResourceKey_<$CreativeModeTab>, arg2: $CreativeModeTab$ItemDisplayParameters_, arg3: $InsertableLinkedOpenCustomHashSet<$ItemStack_>, arg4: $InsertableLinkedOpenCustomHashSet<$ItemStack_>);
        get parameters(): $CreativeModeTab$ItemDisplayParameters;
        get flags(): $FeatureFlagSet;
        get tab(): $CreativeModeTab;
        get searchEntries(): $ObjectSortedSet<$ItemStack>;
        get parentEntries(): $ObjectSortedSet<$ItemStack>;
        get tabKey(): $ResourceKey<$CreativeModeTab>;
    }
    export class $TagsUpdatedEvent$UpdateCause extends $Enum<$TagsUpdatedEvent$UpdateCause> {
        static values(): $TagsUpdatedEvent$UpdateCause[];
        static valueOf(arg0: string): $TagsUpdatedEvent$UpdateCause;
        static SERVER_DATA_LOAD: $TagsUpdatedEvent$UpdateCause;
        static CLIENT_PACKET_RECEIVED: $TagsUpdatedEvent$UpdateCause;
    }
    /**
     * Values that may be interpreted as {@link $TagsUpdatedEvent$UpdateCause}.
     */
    export type $TagsUpdatedEvent$UpdateCause_ = "server_data_load" | "client_packet_received";
    export class $GrindstoneEvent$OnTakeItem extends $GrindstoneEvent implements $ICancellableEvent {
        getPlayer(): $Player;
        getNewBottomItem(): $ItemStack;
        getNewTopItem(): $ItemStack;
        setNewTopItem(arg0: $ItemStack_): void;
        setNewBottomItem(arg0: $ItemStack_): void;
        getContainerAccess(): $ContainerLevelAccess;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ContainerLevelAccess_, arg1: $Player, arg2: $ItemStack_, arg3: $ItemStack_, arg4: number);
        /**
         * @deprecated
         */
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number);
        get player(): $Player;
        get containerAccess(): $ContainerLevelAccess;
    }
    export class $GameShuttingDownEvent extends $Event {
        constructor();
    }
    export class $ServerChatEvent extends $Event implements $ICancellableEvent {
        getMessage(): $Component;
        setMessage(arg0: $Component_): void;
        getPlayer(): $ServerPlayer;
        getUsername(): string;
        getRawText(): string;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ServerPlayer, arg1: string, arg2: $Component_);
        get player(): $ServerPlayer;
        get username(): string;
        get rawText(): string;
    }
    export class $AddReloadListenerEvent$WrappedStateAwareListener extends $ContextAwareReloadListener implements $PreparableReloadListener {
    }
    export class $DifficultyChangeEvent extends $Event {
        getDifficulty(): $Difficulty;
        getOldDifficulty(): $Difficulty;
        constructor(arg0: $Difficulty_, arg1: $Difficulty_);
        get difficulty(): $Difficulty;
        get oldDifficulty(): $Difficulty;
    }
    export class $PlayLevelSoundEvent$AtPosition extends $PlayLevelSoundEvent {
        getPosition(): $Vec3;
        constructor(arg0: $Level_, arg1: $Vec3_, arg2: $Holder_<$SoundEvent>, arg3: $SoundSource_, arg4: number, arg5: number);
        get position(): $Vec3;
    }
}
