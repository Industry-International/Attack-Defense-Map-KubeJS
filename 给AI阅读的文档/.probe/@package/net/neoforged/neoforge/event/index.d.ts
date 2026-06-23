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
    /**
     * Fired for registering structure conversions for pre-1.18.2 worlds. This is used by `StructuresBecomeConfiguredFix`
     * for converting old structure IDs in pre-1.18.2 worlds to their new equivalents, which can be differentiated per biome.
     * 
     * By default, structures whose old ID has a namespace which is not equal to {@value ResourceLocation#DEFAULT_NAMESPACE}
     * will be assumed to belong to a modded structure and will be used as the new ID. Mods may choose to register structure
     * conversions for their structures, if they wish to override this default behavior.
     * 
     * This event will only fire if `StructuresBecomeConfiguredFix` is used, as a result of converting a
     * pre-1.18.2 world to the current version.
     * 
     * This event is not cancelable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical server.
     */
    export class $RegisterStructureConversionsEvent extends $Event {
        /**
         * Registers a conversion for a structure.
         * 
         * A structure conversion can be of two kinds:
         * 
         * - A *trivial* conversion, created using `Conversion#trivial(String)`,
         * contains only the new structure ID and simply converts all mentions of the old structure ID to the new
         * structure ID.
         * - A *biome-mapped* conversion, created using `Conversion#biomeMapped(Map, String)`, contains a fallback structure ID, and a
         * biome-specific conversion map. Each entry in the map is composed of a list of biome IDs and the new structure
         * ID.
         * 
         * If a structure is in a biome which exists in the map, the
         * structure ID in the corresponding entry is used as the new structure ID. If there is no such biome found,
         * the new structure ID will be the fallback structure ID.
         * 
         * For example, the following registers a biome-mapped conversion for `exampleStructure` with the
         * following logic:
         * 
         * If the structure is within either a `minecraft:desert` or a `minecraft:jungle` biome,
         * it is mapped to `examplemod:deserted_structure`.
         * - If the structure is within a `minecraft:ocean` biome, it is mapped to
         * `examplemod:flooded_structure`.
         * - Otherwise, the structure is mapped to `examplemod:structure`.
         * 
         * {@code
         * event.register("exampleStructure", StructuresBecomeConfiguredFix.Conversion.biomeMapped(Map.of(
         * List.of("minecraft:desert", "minecraft:jungle"), "examplemod:deserted_structure",
         * List.of("minecraft:ocean"), "examplemod:flooded_structure"), "examplemod:structure"));
         * }
         */
        register(oldStructureID: string, conversion: $StructuresBecomeConfiguredFix$Conversion_): void;
        constructor(map: $Map_<string, $StructuresBecomeConfiguredFix$Conversion_>);
    }
    /**
     * Fired when either anvil input slot or item name is changed,
     * provided that the left input slot holds an item (checked after the change).
     * 
     * Called from `AnvilMenu#createResult()`.
     * 
     * If the event is canceled, vanilla logic is skipped and the output is set to `ItemStack#EMPTY`.
     * 
     * If not canceled and `output` is non-empty, the provided stack is used and vanilla logic is skipped.
     * 
     * If not canceled and `output` is empty, vanilla behavior proceeds as normal.
     */
    export class $AnvilUpdateEvent extends $Event implements $ICancellableEvent {
        getLeft(): $ItemStack;
        /**
         * This is the name as sent by the client. It may be null if none has been sent.
         * 
         * If empty, it indicates the user wishes to clear the custom name from the item.
         */
        getName(): string;
        getRight(): $ItemStack;
        getOutput(): $ItemStack;
        /**
         * Changes the level cost of this operation.
         * 
         * The level cost does prevent the output from being available.
         * 
         * That is, a player without enough experience may not take the output.
         * 
         * Values will be clamped to the range 0 - MAX_INT.
         */
        setCost(cost: number): void;
        /**
         * Sets the output slot to a specific itemstack.
         */
        setOutput(output: $ItemStack_): void;
        getPlayer(): $Player;
        /**
         * The material cost is how many units of the right input stack are consumed.
         */
        getMaterialCost(): number;
        /**
         * Sets how many right inputs are consumed.
         * 
         * A material cost of zero consumes the entire stack.
         * 
         * A material cost higher than the count of the right stack
         * consumes the entire stack.
         * 
         * The material cost does not prevent the output from being available.
         */
        setMaterialCost(materialCost: number): void;
        /**
         * This is the level cost of this anvil operation.
         * 
         * When unchanged, it is guaranteed to be left.getRepairCost() + right.getRepairCost().
         */
        getCost(): number;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(left: $ItemStack_, right: $ItemStack_, name: string, cost: number, player: $Player);
        get left(): $ItemStack;
        get name(): string;
        get right(): $ItemStack;
        get player(): $Player;
    }
    /**
     * This event provides the functionality of the pair of functions used for the Bundle, in one event:
     * 
     * - `Item#overrideOtherStackedOnMe(ItemStack, ItemStack, Slot, ClickAction, Player, SlotAccess)`
     * - `Item#overrideStackedOnOther(ItemStack, Slot, ClickAction, Player)`
     * 
     * This event is fired before either of the above are called, when a carried item is clicked on top of another in a GUI slot.
     * This event (and items stacking on others in general) is fired on both sides, but only on the client in the creative menu.
     * Practically, that means that listeners of this event should require the player to be in survival mode if using capabilities that are not synced.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the container's logic halts, the carried item and the slot will not be swapped, and handling is assumed to have been done by the mod.
     * This also means that the two vanilla checks described above will not be called.
     */
    export class $ItemStackedOnOtherEvent extends $Event implements $ICancellableEvent {
        /**
         * @return the slot being clicked on
         */
        getSlot(): $Slot;
        /**
         * @return a fake slot allowing the listener to see and change what item is being carried
         */
        getCarriedSlotAccess(): $SlotAccess;
        /**
         * @return the player doing the item swap attempt
         */
        getPlayer(): $Player;
        /**
         * @return the stack being carried by the mouse This may be empty!
         */
        getCarriedItem(): $ItemStack;
        /**
         * @return the stack being carried by the mouse This may be empty!
         */
        getStackedOnItem(): $ItemStack;
        /**
         * @return the click action being used By default ClickAction#PRIMARY corresponds to left-click, and ClickAction#SECONDARY is right-click.
         */
        getClickAction(): $ClickAction;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(carriedItem: $ItemStack_, stackedOnItem: $ItemStack_, slot: $Slot, action: $ClickAction_, player: $Player, carriedSlotAccess: $SlotAccess);
        get slot(): $Slot;
        get carriedSlotAccess(): $SlotAccess;
        get player(): $Player;
        get carriedItem(): $ItemStack;
        get stackedOnItem(): $ItemStack;
        get clickAction(): $ClickAction;
    }
    export class $ItemAttributeModifierEvent$ItemAttributeModifiersBuilder$Key extends $Record {
    }
    /**
     * VanillaGameEvent is fired on the server whenever one of Vanilla's GameEvents fire.
     * 
     * This allows for listening to Vanilla's events in a more structured and global way that is not tied to needing a block entity listener.
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     * 
     * Cancel this event to prevent Vanilla from posting the `GameEvent` to all nearby GameEventListeners.
     */
    export class $VanillaGameEvent extends $Event implements $ICancellableEvent {
        getCause(): $Entity;
        getContext(): $GameEvent$Context;
        getLevel(): $Level;
        getVanillaEvent(): $Holder<$GameEvent>;
        getEventPosition(): $Vec3;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(level: $Level_, vanillaEvent: $Holder_<$GameEvent>, position: $Vec3_, context: $GameEvent$Context_);
        get cause(): $Entity;
        get context(): $GameEvent$Context;
        get level(): $Level;
        get vanillaEvent(): $Holder<$GameEvent>;
        get eventPosition(): $Vec3;
    }
    export class $ModMismatchEvent$MismatchResolutionResult extends $Record {
        resolver(): $ModContainer;
        modid(): string;
        versionDifference(): $ModMismatchEvent$MismatchedVersionInfo;
        wasSelfResolved(): boolean;
        constructor(modid: string, versionDifference: $ModMismatchEvent$MismatchedVersionInfo_, resolver: $ModContainer);
    }
    /**
     * The event used to modify the default components of an item.
     * 
     * This event is fired on the mod event bus.
     * 
     * Example usage:
     * {@snippet :
     * import net.minecraft.core.component.DataComponents;
     * import net.minecraft.world.item.Items;
     * 
     * public void modifyComponents(ModifyDefaultComponentsEvent event) {
     * event.modify(Items.MELON_SEEDS, builder -> builder
     * .set(DataComponents.MAX_STACK_SIZE, 16)); // Stack melon seeds to at most 16 items
     * 
     * event.modify(Items.APPLE, builder -> builder
     * .remove(DataComponents.FOOD)); // Remove the ability of eating apples
     * }
     * 
     * // Lowest priority listener
     * public void modifyComponentsLow(ModifyDefaultComponentsEvent event) {
     * event.modifyMatching(item -> item.components().has(DataComponents.FIRE_RESISTANT), builder -> builder
     * .set(DataComponents.ENCHANTMENT_GLINT_OVERRIDE, true)); // Make all fire resistant items have a glint
     * }
     * }
     */
    export class $ModifyDefaultComponentsEvent extends $Event implements $IModBusEvent {
        /**
         * Patches the default components of all items matching the given `predicate`.
         * 
         * If this method is used to modify components based on the item's current default components, the
         * event listener should use the lowest priority so that other mods' modifications are
         * already applied.
         */
        modifyMatching(predicate: $Predicate_<$Item>, patch: $Consumer_<$DataComponentPatch$Builder>): void;
        /**
         * @return all registered items
         */
        getAllItems(): $Stream<$Item>;
        /**
         * Patches the default components of the given `item`.
         */
        modify(item: $ItemLike_, patch: $Consumer_<$DataComponentPatch$Builder>): void;
        constructor();
        get allItems(): $Stream<$Item>;
    }
    /**
     * Commands are rebuilt whenever `ReloadableServerResources` is recreated.
     * You can use this event to register your commands whenever the `Commands` class in constructed.
     * 
     * The event is fired on the `NeoForge#EVENT_BUS`
     */
    export class $RegisterCommandsEvent extends $Event {
        /**
         * @return the environment the command is being registered for
         */
        getCommandSelection(): $Commands$CommandSelection;
        /**
         * @return the command dispatcher for registering commands to be executed on the client
         */
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        /**
         * @return the context to build the commands for
         */
        getBuildContext(): $CommandBuildContext;
        constructor(dispatcher: $CommandDispatcher<$CommandSourceStack>, environment: $Commands$CommandSelection_, context: $CommandBuildContext);
        get commandSelection(): $Commands$CommandSelection;
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get buildContext(): $CommandBuildContext;
    }
    /**
     * Fired when a `Player` is awarded a `Stat`. This event is fired in `Player#awardStat(Stat, int)`
     * 
     * This event is cancelable.
     * 
     * This event does not have a result.
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $StatAwardEvent extends $PlayerEvent implements $ICancellableEvent {
        /**
         * @return the `Stat` being awarded
         */
        getStat(): $Stat<never>;
        /**
         * @return the current value to be awarded to the `Stat`
         */
        getValue(): number;
        /**
         * Replaces the value to be awarded.
         */
        setValue(value: number): void;
        /**
         * Replaces the `Stat` to be awarded
         */
        setStat(stat: $Stat_<never>): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(player: $Player, stat: $Stat_<never>, value: number);
    }
    /**
     * This event is fired when the attributes for an item stack are queried (for any reason) through `ItemStack#getAttributeModifiers()`.
     * 
     * This event is fired regardless of if the stack has `DataComponents#ATTRIBUTE_MODIFIERS` or not. If your attribute should be
     * ignored when attributes are overridden, you can check for the presence of the component.
     * 
     * This event may be fired on both the logical server and logical client.
     */
    export class $ItemAttributeModifierEvent extends $Event {
        /**
         * Returns an unmodifiable view of the attribute modifier entries. Do not use the returned value to create an `ItemAttributeModifiers`
         * since the underlying list is not immutable.
         * 
         * If you need an `ItemAttributeModifiers`, you may need to call `#build()`
         */
        getModifiers(): $List<$ItemAttributeModifiers$Entry>;
        /**
         * Removes modifiers based on a condition.
         */
        removeIf(condition: $Predicate_<$ItemAttributeModifiers$Entry>): boolean;
        /**
         * @return the default attribute modifiers before changes made by the event
         */
        build(): $ItemAttributeModifiers;
        /**
         * @return the item stack whose attribute modifiers are being computed
         */
        getItemStack(): $ItemStack;
        /**
         * Removes an attribute modifier for the target attribute by id
         */
        removeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): boolean;
        /**
         * @return the default attribute modifiers before changes made by the event
         */
        getDefaultModifiers(): $ItemAttributeModifiers;
        /**
         * Removes all modifiers for the given attribute.
         */
        removeAllModifiersFor(attribute: $Holder_<$Attribute>): boolean;
        /**
         * Adds a new attribute modifier to the given stack. Two modifiers with the same id may not exist for the same attribute, and this method will fail if one exists.
         */
        addModifier(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_, slot: $EquipmentSlotGroup_): boolean;
        /**
         * Adds a new attribute modifier to the given stack, optionally replacing any existing modifiers with the same id.
         */
        replaceModifier(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_, slot: $EquipmentSlotGroup_): void;
        /**
         * Removes all modifiers for all attributes.
         */
        clearModifiers(): void;
        constructor(stack: $ItemStack_, defaultModifiers: $ItemAttributeModifiers_);
        get modifiers(): $List<$ItemAttributeModifiers$Entry>;
        get itemStack(): $ItemStack;
        get defaultModifiers(): $ItemAttributeModifiers;
    }
    export class $ItemAttributeModifierEvent$ItemAttributeModifiersBuilder {
    }
    /**
     * PlayLevelSoundEvent is fired when a sound is played on a `Level`.
     * This event is fired from `Level#playSound`, `Level#playSeededSound`, and `LocalPlayer#playSound`.
     * 
     * `#getLevel()` contains the level the sound is being played in.
     * `#getSound()` contains the sound event to be played.
     * `#getOriginalVolume()` contains the original volume for the sound to be played at.
     * `#getOriginalPitch()` contains the original pitch for the sound to be played at.
     * `#getNewVolume()` contains the volume the sound will be played at.
     * `#getNewPitch()` contains the pitch the sound will be played at.
     * 
     * This event is cancelable.
     * If this event is canceled, the sound is not played.
     * 
     * This event does not have a result.
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $PlayLevelSoundEvent extends $Event implements $ICancellableEvent {
        /**
         * @return the level the sound is being played in
         */
        getLevel(): $Level;
        /**
         * @return the sound source
         */
        getSource(): $SoundSource;
        /**
         * Sets the sound source.
         */
        setSource(source: $SoundSource_): void;
        /**
         * Sets the sound event to be played.
         */
        setSound(sound: $Holder_<$SoundEvent>): void;
        /**
         * @return the original volume for the sound to be played at
         */
        getNewVolume(): number;
        /**
         * @return the original volume for the sound to be played at
         */
        getNewPitch(): number;
        /**
         * @return the sound event to be played
         */
        getSound(): $Holder<$SoundEvent>;
        /**
         * @return the original volume for the sound to be played at
         */
        getOriginalVolume(): number;
        /**
         * Sets the volume the sound will be played at.
         */
        setNewVolume(newVolume: number): void;
        /**
         * Sets the volume the sound will be played at.
         */
        setNewPitch(newVolume: number): void;
        /**
         * @return the original volume for the sound to be played at
         */
        getOriginalPitch(): number;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(level: $Level_, sound: $Holder_<$SoundEvent>, source: $SoundSource_, volume: number, pitch: number);
        get level(): $Level;
        get originalVolume(): number;
        get originalPitch(): number;
    }
    /**
     * The main ResourceManager is recreated on each reload, just after `ReloadableServerResources`'s creation.
     * 
     * The event is fired on each reload and lets modders add their own ReloadListeners, for server-side resources.
     * The event is fired on the `NeoForge#EVENT_BUS`
     */
    export class $AddReloadListenerEvent extends $Event {
        /**
         * Provides access to the loaded registries associated with these server resources.
         * All built-in and dynamic registries are loaded and frozen by this point.
         */
        getRegistryAccess(): $RegistryAccess;
        getServerResources(): $ReloadableServerResources;
        addListener(listener: $PreparableReloadListener_): void;
        getListeners(): $List<$PreparableReloadListener>;
        /**
         * This context object holds data relevant to the current reload, such as staged tags.
         */
        getConditionContext(): $ICondition$IContext;
        constructor(serverResources: $ReloadableServerResources, registryAccess: $RegistryAccess);
        get registryAccess(): $RegistryAccess;
        get serverResources(): $ReloadableServerResources;
        get listeners(): $List<$PreparableReloadListener>;
        get conditionContext(): $ICondition$IContext;
    }
    export class $EventHooks {
        static onPlayerBrewedPotion(player: $Player, stack: $ItemStack_): void;
        static firePlayerCraftingEvent(player: $Player, crafted: $ItemStack_, craftMatrix: $Container): void;
        static firePlayerSmeltedEvent(player: $Player, stack: $ItemStack_): void;
        /**
         * Fires `GetEnchantmentLevelEvent` and for a single enchantment, returning the (possibly event-modified) level.
         */
        static getEnchantmentLevelSpecific(level: number, stack: $ItemStack_, ench: $Holder_<$Enchantment>): number;
        static onStatAward(player: $Player, stat: $Stat_<never>, value: number): $StatAwardEvent;
        static onEnchantmentLevelSet(level: $Level_, pos: $BlockPos_, enchantRow: number, power: number, itemStack: $ItemStack_, enchantmentLevel: number): number;
        static onPotionAttemptBrew(stacks: $NonNullList<$ItemStack_>): boolean;
        static getAllEnchantmentLevels(arg0: $ItemEnchantments_, arg1: $ItemStack_, arg2: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        static onEntityDestroyBlock(entity: $LivingEntity, pos: $BlockPos_, state: $BlockState_): boolean;
        static onChorusFruitTeleport(entity: $LivingEntity, targetX: number, targetY: number, targetZ: number): $EntityTeleportEvent$ChorusFruit;
        /**
         * Finalizes the spawn of a mob by firing the `FinalizeSpawnEvent` and calling `Mob#finalizeSpawn` with the result.
         * 
         * Mods should call this method in place of calling `Mob#finalizeSpawn`, unless calling super from within an override.
         * Vanilla calls to `Mob#finalizeSpawn` are replaced with calls to this method via coremod, so calls to this method will not show in an IDE.
         * 
         * When interfacing with this event, write all code as normal, and replace the call to `Mob#finalizeSpawn` with a call to this method.
         * As an example, the following code block:
         * `
         * var zombie = new Zombie(level);
         * zombie.finalizeSpawn(level, difficulty, spawnType, spawnData);
         * level.tryAddFreshEntityWithPassengers(zombie);
         * if (zombie.isAddedToLevel()) {
         * // Do stuff with your new zombie
         * }
         * `
         * Would become:
         * `
         * var zombie = new Zombie(level);
         * EventHooks.finalizeMobSpawn(zombie, level, difficulty, spawnType, spawnData);
         * level.tryAddFreshEntityWithPassengers(zombie);
         * if (zombie.isAddedToLevel()) {
         * // Do stuff with your new zombie
         * }
         * `
         * The only code that changes is the `Mob#finalizeSpawn` call.
         */
        static finalizeMobSpawn(mob: $Mob, level: $ServerLevelAccessor, difficulty: $DifficultyInstance, spawnType: $MobSpawnType_, spawnData: $SpawnGroupData): $SpawnGroupData;
        static onPlaySoundAtPosition(level: $Level_, x: number, y: number, z: number, name: $Holder_<$SoundEvent>, category: $SoundSource_, volume: number, pitch: number): $PlayLevelSoundEvent$AtPosition;
        static onPlaySoundAtEntity(entity: $Entity, name: $Holder_<$SoundEvent>, category: $SoundSource_, volume: number, pitch: number): $PlayLevelSoundEvent$AtEntity;
        static alterGround(arg0: $TreeDecorator$Context, arg1: $List_<$BlockPos_>, arg2: $AlterGroundEvent$StateProvider_): $AlterGroundEvent$StateProvider;
        static onCreateWorldSpawn(level: $Level_, settings: $ServerLevelData): boolean;
        /**
         * Fires `Pre`. Called from the head of `MinecraftServer#tickServer(BooleanSupplier)`.
         */
        static fireServerTickPost(haveTime: $BooleanSupplier_, server: $MinecraftServer): void;
        /**
         * Fires `Pre`. Called from the head of `MinecraftServer#tickServer(BooleanSupplier)`.
         */
        static fireServerTickPre(haveTime: $BooleanSupplier_, server: $MinecraftServer): void;
        /**
         * Finalizes the spawn of a mob by firing the `FinalizeSpawnEvent` and calling `Mob#finalizeSpawn` with the result.
         * 
         * This method is separate since mob spawners perform special finalizeSpawn handling when NBT data is present, but we still want to fire the event.
         * 
         * This overload is also the only way to pass through an `IOwnedSpawner` instance.
         */
        static finalizeMobSpawnSpawner(mob: $Mob, level: $ServerLevelAccessor, difficulty: $DifficultyInstance, spawnType: $MobSpawnType_, spawnData: $SpawnGroupData, spawner: $IOwnedSpawner_, def: boolean): $FinalizeSpawnEvent;
        /**
         * Fires `Pre`. Called from `Minecraft#tick()` and `MinecraftServer#tickChildren(BooleanSupplier)` just before the try block for level tick is entered.
         */
        static fireLevelTickPost(level: $Level_, haveTime: $BooleanSupplier_): void;
        /**
         * Fires `Pre`. Called from `Minecraft#tick()` and `MinecraftServer#tickChildren(BooleanSupplier)` just before the try block for level tick is entered.
         */
        static fireLevelTickPre(level: $Level_, haveTime: $BooleanSupplier_): void;
        /**
         * Checks if a fluid is allowed to create a fluid source. This fires the `CreateFluidSourceEvent`.
         * By default, a fluid can create a source if it returns true to `IFluidStateExtension#canConvertToSource(Level, BlockPos)`
         */
        static canCreateFluidSource(level: $Level_, pos: $BlockPos_, state: $BlockState_): boolean;
        static fireFluidPlaceBlockEvent(level: $LevelAccessor, pos: $BlockPos_, liquidPos: $BlockPos_, state: $BlockState_): $BlockState;
        /**
         * Fires `SpawnClusterSizeEvent` and returns the size as a result of the event.
         * 
         * Called in `NaturalSpawner#spawnCategoryForPosition` where `Mob#getMaxSpawnClusterSize()` would normally be called.
         */
        static getMaxSpawnClusterSize(entity: $Mob): number;
        static onUseItemStop(entity: $LivingEntity, item: $ItemStack_, duration: number): boolean;
        static onItemUseStart(entity: $LivingEntity, item: $ItemStack_, hand: $InteractionHand_, duration: number): number;
        /**
         * @deprecated
         */
        static onItemUseStart(entity: $LivingEntity, item: $ItemStack_, duration: number): number;
        static onItemUseFinish(entity: $LivingEntity, item: $ItemStack_, duration: number, result: $ItemStack_): $ItemStack;
        static onResourceReload(serverResources: $ReloadableServerResources, registryAccess: $RegistryAccess): $List<$PreparableReloadListener>;
        static onPlayerClone(player: $Player, oldPlayer: $Player, wasDeath: boolean): void;
        static onPlayerSpawnSet(player: $Player, levelKey: $ResourceKey_<$Level>, pos: $BlockPos_, forced: boolean): boolean;
        static onItemExpire(entity: $ItemEntity): number;
        /**
         * Called in `ItemEntity#playerTouch(Player)` after an item was successfully picked up.
         * 
         * Fires `Post`.
         */
        static fireItemPickupPost(itemEntity: $ItemEntity, player: $Player, copy: $ItemStack_): void;
        /**
         * Called in `ItemEntity#playerTouch(Player)` before any other processing occurs.
         * 
         * Fires `Pre` and returns the event.
         */
        static fireItemPickupPre(itemEntity: $ItemEntity, player: $Player): $ItemEntityPickupEvent$Pre;
        static onTrySpawnPortal(level: $LevelAccessor, pos: $BlockPos_, size: ($PortalShape) | undefined): ($PortalShape) | undefined;
        static onSleepFinished(level: $ServerLevel, newTime: number, minTime: number): number;
        /**
         * Fires the `ModifyCustomSpawnersEvent`. Returns the custom spawners list.
         */
        static getCustomSpawners(serverLevel: $ServerLevel, customSpawners: $List_<$CustomSpawner_>): $List<$CustomSpawner>;
        static getPlayerTabListDisplayName(player: $Player): $Component;
        static canPlayerStartSleeping(player: $ServerPlayer, pos: $BlockPos_, vanillaResult: $Either<$Player$BedSleepingProblem_, $Unit_>): $Either<$Player$BedSleepingProblem, $Unit>;
        /**
         * Fires the mob split event. Returns the event for cancellation checking.
         */
        static onMobSplit(parent: $Mob, children: $List_<$Mob>): $MobSplitEvent;
        static onToolUse(originalState: $BlockState_, context: $UseOnContext, itemAbility: $ItemAbility_, simulate: boolean): $BlockState;
        static onLivingHeal(entity: $LivingEntity, amount: number): number;
        static getExperienceDrop(entity: $LivingEntity, attackingPlayer: $Player, originalExperience: number): number;
        /**
         * Checks if an entity can perform a griefing action.
         * 
         * If an entity is provided, this method fires `EntityMobGriefingEvent`.
         * If an entity is not provided, this method returns the value of `GameRules#RULE_MOBGRIEFING`.
         */
        static canEntityGrief(level: $Level_, entity: $Entity): boolean;
        static onAnimalTame(animal: $Animal, tamer: $Player): boolean;
        static onEnderPearlLand(entity: $ServerPlayer, targetX: number, targetY: number, targetZ: number, pearlEntity: $ThrownEnderpearl, attackDamage: number, hitResult: $HitResult): $EntityTeleportEvent$EnderPearl;
        static onEnderTeleport(entity: $LivingEntity, targetX: number, targetY: number, targetZ: number): $EntityTeleportEvent$EnderEntity;
        static firePlayerTickPre(player: $Player): void;
        static firePlayerTickPost(player: $Player): void;
        static getBreakSpeed(player: $Player, state: $BlockState_, original: number, pos: $BlockPos_): number;
        static onStartEntityTracking(entity: $Entity, player: $Player): void;
        static onStopEntityTracking(entity: $Entity, player: $Player): void;
        static onEffectRemoved(entity: $LivingEntity, effectInstance: $MobEffectInstance, cure: $EffectCure): boolean;
        static onEffectRemoved(entity: $LivingEntity, effect: $Holder_<$MobEffect>, cure: $EffectCure): boolean;
        static onProjectileImpact(projectile: $Projectile, ray: $HitResult): boolean;
        /**
         * Fires the `BlockGrowFeatureEvent` and returns the event object.
         */
        static fireBlockGrowFeature(level: $LevelAccessor, rand: $RandomSource, pos: $BlockPos_, holder: $Holder_<$ConfiguredFeature<never, never>>): $BlockGrowFeatureEvent;
        /**
         * Fires the `BuildCreativeModeTabContentsEvent`.
         */
        static onCreativeModeTabBuildContents(tab: $CreativeModeTab_, tabKey: $ResourceKey_<$CreativeModeTab>, originalGenerator: $CreativeModeTab$DisplayItemsGenerator_, params: $CreativeModeTab$ItemDisplayParameters_, output: $CreativeModeTab$Output_): void;
        static canMountEntity(entityMounting: $Entity, entityBeingMounted: $Entity, isMounting: boolean): boolean;
        /**
         * Fires `Pre`. Called from the head of `LivingEntity#tick()`.
         */
        static fireEntityTickPre(entity: $Entity): $EntityTickEvent$Pre;
        /**
         * Fires `Post`. Called from the tail of `LivingEntity#tick()`.
         */
        static fireEntityTickPost(entity: $Entity): void;
        static getEntitySizeForge(entity: $Entity, pose: $Pose_, size: $EntityDimensions_): $EntityEvent$Size;
        static getEntitySizeForge(entity: $Entity, pose: $Pose_, oldSize: $EntityDimensions_, newSize: $EntityDimensions_): $EntityEvent$Size;
        static firePlayerChangedDimensionEvent(player: $Player, fromDim: $ResourceKey_<$Level>, toDim: $ResourceKey_<$Level>): void;
        static onEntityStruckByLightning(entity: $Entity, bolt: $LightningBolt): boolean;
        /**
         * To be called when an explosion has calculated the knockback velocity
         * but has not yet added the knockback to the entity caught in blast.
         */
        static getExplosionKnockback(level: $Level_, explosion: $Explosion, entity: $Entity, initialVelocity: $Vec3_): $Vec3;
        static onExplosionDetonate(level: $Level_, explosion: $Explosion, list: $List_<$Entity>, diameter: number): void;
        static onExplosionStart(level: $Level_, explosion: $Explosion): boolean;
        static onNeighborNotify(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnumSet<$Direction_>, arg4: boolean): $BlockEvent$NeighborNotifyEvent;
        static onItemUseTick(entity: $LivingEntity, item: $ItemStack_, duration: number): number;
        static onPlayerDestroyItem(player: $Player, stack: $ItemStack_, hand: $InteractionHand_): void;
        static canEntityContinueSleeping(arg0: $LivingEntity, arg1: $Player$BedSleepingProblem_): boolean;
        /**
         * Specialized variant of `#checkSpawnPosition` for spawners, as they have slightly different checks, and pass through the `BaseSpawner` to the event.
         */
        static checkSpawnPositionSpawner(mob: $Mob, level: $ServerLevelAccessor, spawnType: $MobSpawnType_, spawnData: $SpawnData_, spawner: $BaseSpawner): boolean;
        static canLivingConvert(entity: $LivingEntity, outcome: $EntityType_<$LivingEntity>, timer: $Consumer_<number>): boolean;
        static onLivingConvert(entity: $LivingEntity, outcome: $LivingEntity): void;
        static onArrowNock(item: $ItemStack_, level: $Level_, player: $Player, hand: $InteractionHand_, hasAmmo: boolean): $InteractionResultHolder<$ItemStack>;
        static onArrowLoose(stack: $ItemStack_, level: $Level_, player: $Player, charge: number, hasAmmo: boolean): number;
        /**
         * Called when bone meal (or equivalent) is used on a block. Fires the `BonemealEvent` and returns the event.
         */
        static fireBonemealEvent(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_, stack: $ItemStack_): $BonemealEvent;
        static onMultiBlockPlace(entity: $Entity, blockSnapshots: $List_<$BlockSnapshot>, direction: $Direction_): boolean;
        static onBlockPlace(entity: $Entity, blockSnapshot: $BlockSnapshot, direction: $Direction_): boolean;
        static onPistonMovePost(level: $Level_, pos: $BlockPos_, direction: $Direction_, extending: boolean): void;
        static onPistonMovePre(level: $Level_, pos: $BlockPos_, direction: $Direction_, extending: boolean): boolean;
        /**
         * Fires `MobDespawnEvent` and returns true if the default logic should be ignored.
         */
        static checkMobDespawn(mob: $Mob): boolean;
        static onPotionBrewed(brewingItemStacks: $NonNullList<$ItemStack_>): void;
        static onItemTooltip(itemStack: $ItemStack_, entityPlayer: $Player, list: $List_<$Component_>, flags: $TooltipFlag, context: $Item$TooltipContext): $ItemTooltipEvent;
        static getItemBurnTime(itemStack: $ItemStack_, burnTime: number, recipeType: $RecipeType_<never>): number;
        static doPlayerHarvestCheck(player: $Player, state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        static getPlayerDisplayName(player: $Player, username: $Component_): $Component;
        static onPlayerFall(player: $Player, distance: number, multiplier: number): void;
        static onPlayerWakeup(player: $Player, wakeImmediately: boolean, updateLevel: boolean): void;
        static onCommandRegister(dispatcher: $CommandDispatcher<$CommandSourceStack>, environment: $Commands$CommandSelection_, context: $CommandBuildContext): void;
        /**
         * @deprecated
         * Use the instead
         */
        static loadLootTable(name: $ResourceLocation_, table: $LootTable): $LootTable;
        /**
         * Fires the `LootTableLoadEvent` for non-empty loot tables and returns the table if the event was not
         * canceled and the table was not set to `LootTable#EMPTY` in the event. Otherwise returns `null`
         * which maps to an empty `Optional` in `LootDataType#deserialize(ResourceLocation, DynamicOps, Object)`
         */
        static loadLootTable(registries: $HolderLookup$Provider, name: $ResourceLocation_, table: $LootTable): $LootTable;
        static onAdvancementProgressedEvent(arg0: $Player, arg1: $AdvancementHolder_, arg2: $AdvancementProgress, arg3: string, arg4: $AdvancementEvent$AdvancementProgressEvent$ProgressType_): void;
        static fireChunkUnWatch(entity: $ServerPlayer, chunkpos: $ChunkPos, level: $ServerLevel): void;
        static fireChunkWatch(entity: $ServerPlayer, chunk: $LevelChunk, level: $ServerLevel): void;
        static onAdvancementEarnedEvent(player: $Player, earned: $AdvancementHolder_): void;
        /**
         * Called by `PlayerList#respawn(ServerPlayer, boolean)` before creating the new `ServerPlayer`
         * to fire the `PlayerRespawnPositionEvent`
         */
        static firePlayerRespawnPositionEvent(player: $ServerPlayer, dimensionTransition: $DimensionTransition_, fromEndFight: boolean): $PlayerRespawnPositionEvent;
        static fireChunkTicketLevelUpdated(level: $ServerLevel, chunkPos: number, oldTicketLevel: number, newTicketLevel: number, chunkHolder: $ChunkHolder): void;
        /**
         * Internal, should only be called via `SpawnPlacements#checkSpawnRules`.
         */
        static checkSpawnPlacements(entityType: $EntityType_<never>, level: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource, defaultResult: boolean): boolean;
        static fireChunkSent(entity: $ServerPlayer, chunk: $LevelChunk, level: $ServerLevel): void;
        static getPotentialSpawns(level: $LevelAccessor, category: $MobCategory_, pos: $BlockPos_, oldList: $WeightedRandomList<$MobSpawnSettings$SpawnerData>): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        static firePlayerLoggedIn(player: $Player): void;
        /**
         * Checks if the current position of the passed mob is valid for spawning, by firing `PositionCheck`.
         * 
         * The default check is to perform the logical and of `Mob#checkSpawnRules` and `Mob#checkSpawnObstruction`.
         */
        static checkSpawnPosition(mob: $Mob, level: $ServerLevelAccessor, spawnType: $MobSpawnType_): boolean;
        static onEntityTeleportSpreadPlayersCommand(entity: $Entity, targetX: number, targetY: number, targetZ: number): $EntityTeleportEvent$SpreadPlayersCommand;
        /**
         * Called from `PhantomSpawner#tick` just before the spawn conditions for phantoms are evaluated.
         * Fires the `PlayerSpawnPhantomsEvent` and returns the event.
         */
        static firePlayerSpawnPhantoms(player: $ServerPlayer, level: $ServerLevel, pos: $BlockPos_): $PlayerSpawnPhantomsEvent;
        /**
         * Called by `PlayerList#respawn(ServerPlayer, boolean)` after creating and initializing the new `ServerPlayer`.
         */
        static firePlayerRespawnEvent(player: $ServerPlayer, fromEndFight: boolean): void;
        static onEntityTeleportCommand(entity: $Entity, targetX: number, targetY: number, targetZ: number): $EntityTeleportEvent$TeleportCommand;
        static firePlayerLoggedOut(player: $Player): void;
        static firePlayerLoadingEvent(player: $Player, playerFileData: $PlayerDataStorage, uuidString: string): void;
        static firePlayerLoadingEvent(player: $Player, playerDirectory: $File_, uuidString: string): void;
        static firePlayerSavingEvent(player: $Player, playerDirectory: $File_, uuidString: string): void;
        /**
         * Called by `HeartType#forPlayer` to allow for modification of the displayed heart type in the
         * health bar.
         */
        static firePlayerHeartTypeEvent(player: $Player, heartType: $Gui$HeartType_): $Gui$HeartType;
        static onPermissionChanged(gameProfile: $GameProfile, newLevel: number, playerList: $PlayerList): boolean;
        constructor();
    }
    export class $ModMismatchEvent$MismatchedVersionInfo extends $Record {
        isMissing(): boolean;
        oldVersion(): $ArtifactVersion;
        newVersion(): $ArtifactVersion;
        wasUpgrade(): boolean;
        constructor(oldVersion: $ArtifactVersion, newVersion: $ArtifactVersion);
        get missing(): boolean;
    }
    /**
     * Fires when a player joins the server or when the reload command is ran,
     * before tags and crafting recipes are sent to the client. Send datapack data
     * to clients when this event fires.
     */
    export class $OnDatapackSyncEvent extends $Event {
        /**
         * Gets the server's player list, containing all players, when the event fires.
         */
        getPlayerList(): $PlayerList;
        /**
         * Gets the player that is joining the server, or null when syncing for all players, such as when the reload command runs.
         */
        getPlayer(): $ServerPlayer;
        /**
         * Creates a stream of players that need to receive data during this event, which is the specified player (if present) or all players.
         */
        getRelevantPlayers(): $Stream<$ServerPlayer>;
        constructor(playerList: $PlayerList, player: $ServerPlayer);
        get playerList(): $PlayerList;
        get player(): $ServerPlayer;
        get relevantPlayers(): $Stream<$ServerPlayer>;
    }
    /**
     * Fired on `PackRepository` creation to allow mods to add new pack finders.
     */
    export class $AddPackFindersEvent extends $Event implements $IModBusEvent {
        /**
         * @return whether or not the pack repository being assembled is the one used to provide known packs to the client to avoid syncing from the server
         */
        isTrusted(): boolean;
        /**
         * Adds a new source to the list of pack finders.
         * 
         * Sources are processed in the order that they are added to the event.
         * Use `Position#TOP` to add high priority packs,
         * and `Position#BOTTOM` to add low priority packs.
         */
        addRepositorySource(source: $RepositorySource_): void;
        getPackType(): $PackType;
        /**
         * Helper method to register a pack found under the `resources/` folder.
         */
        addPackFinders(packLocation: $ResourceLocation_, packType: $PackType_, packNameDisplay: $Component_, packSource: $PackSource, alwaysActive: boolean, packPosition: $Pack$Position_): void;
        constructor(packType: $PackType_, sources: $Consumer_<$RepositorySource>, trusted: boolean);
        get trusted(): boolean;
        get packType(): $PackType;
    }
    /**
     * Fired when tags are updated on either server or client. This event can be used to refresh data that depends on tags.
     */
    export class $TagsUpdatedEvent extends $Event {
        getUpdateCause(): $TagsUpdatedEvent$UpdateCause;
        getRegistryAccess(): $RegistryAccess;
        /**
         * Whether static data (which in single player is shared between server and client thread) should be updated as a
         * result of this event. Effectively this means that in single player only the server-side updates this data.
         */
        shouldUpdateStaticData(): boolean;
        constructor(registryAccess: $RegistryAccess, fromClientPacket: boolean, isIntegratedServerConnection: boolean);
        get updateCause(): $TagsUpdatedEvent$UpdateCause;
        get registryAccess(): $RegistryAccess;
    }
    /**
     * Allows injecting new blocks into a block entity's `BlockEntityType#validBlocks` field in a safe manner.
     * The class of the newly injected block should share the highest common class that all existing blocks in the targeted validBlocks has.
     * Please use this event instead of manipulating `BlockEntityType` directly.
     * 
     * Example: If the valid blocks list has StandingSignBlock entry and WallSignBlock entry, the common class is SignBlock,
     * the given block must be a SignBlock or have `SignBlock` as a parent class in its hierarchy. Example:
     * {@snippet :
     * public static void onBlockEntityValidBlocks(BlockEntityTypeAddBlocksEvent event) {
     * event.modify(BlockEntityType.SIGN, MODDED_SIGN_BLOCK.get());
     * }
     * }
     */
    export class $BlockEntityTypeAddBlocksEvent extends $Event implements $IModBusEvent {
        modify(arg0: $ResourceKey_<$BlockEntityType<never>>, ...arg1: $Block_[]): void;
        modify(arg0: $BlockEntityType_<never>, ...arg1: $Block_[]): void;
        modify(arg0: $BiPredicate_<$ResourceKey<$BlockEntityType<never>>, $BlockEntityType<never>>, ...arg1: $Block_[]): void;
        constructor();
    }
    /**
     * CommandEvent is fired after a command is parsed, but before it is executed.
     * This event is fired during the invocation of `Commands#performCommand(ParseResults, String)`.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the command will not be executed.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical server.
     */
    export class $CommandEvent extends $Event implements $ICancellableEvent {
        /**
         * @return an exception to be thrown when performing the command, starts null
         */
        getException(): $Throwable;
        setException(exception: $Throwable): void;
        setParseResults(parse: $ParseResults<$CommandSourceStack>): void;
        /**
         * @return the parsed command results
         */
        getParseResults(): $ParseResults<$CommandSourceStack>;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(parse: $ParseResults<$CommandSourceStack>);
    }
    /**
     * This event is `ICancellableEvent`
     * 
     * `OnPlaceItem` is fired when the inputs to a grindstone are changed.
     * 
     * The following rules apply:
     * 
     * - If the event is canceled, vanilla behavior will not run, and the output will be empty.
     * - If the event is not canceled
     * - and the output is empty, the output will be determined by vanilla.
     * - and the output is not empty, the output will be set, without running vanilla behavior.
     * 
     * Vanilla XP calculation logic will be used unless all of the following criterias are met:
     * 
     * - the amount of experience is greater than or equal to `0`;
     * - the event is not canceled;
     * - the output is not empty.
     */
    export class $GrindstoneEvent$OnPlaceItem extends $GrindstoneEvent implements $ICancellableEvent {
        /**
         * This is the output as determined by the event, not by the vanilla behavior between these two items.
         * 
         * If you are the first receiver of this event, it is guaranteed to be empty.
         * 
         * It will only be non-empty if changed by an event handler.
         * 
         * If this event is cancelled, this output stack is discarded.
         */
        getOutput(): $ItemStack;
        /**
         * Sets the output slot to a specific itemstack.
         */
        setOutput(output: $ItemStack_): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(top: $ItemStack_, bottom: $ItemStack_, xp: number);
    }
    /**
     * Fires when the mod loader is in the process of loading a world that was last saved
     * with mod versions that differ from the currently-loaded versions. This can be used to
     * enqueue work to run at a later point, such as multi-file migration of data.
     * 
     * **Note that level and world information has not yet been fully loaded;** as such, it is
     * unsafe to access server or level information during handling of this event.
     * 
     * This event is not cancellable, and does not have a result.
     * This event is fired on the mod-specific event bus, on both logical sides.
     */
    export class $ModMismatchEvent extends $Event implements $IModBusEvent {
        getResolved(): $Stream<$ModMismatchEvent$MismatchResolutionResult>;
        /**
         * Fetch a previous version of a given mod, if it has been mismatched.
         */
        getCurrentVersion(modId: string): $ArtifactVersion;
        getVersionDifference(modid: string): ($ModMismatchEvent$MismatchedVersionInfo) | undefined;
        /**
         * Marks the mod version mismatch as having been resolved safely by the current mod.
         */
        markResolved(modId: string): void;
        getUnresolved(): $Stream<$ModMismatchEvent$MismatchResolutionResult>;
        anyResolved(): boolean;
        anyUnresolved(): boolean;
        /**
         * Fetch a previous version of a given mod, if it has been mismatched.
         */
        getPreviousVersion(modId: string): $ArtifactVersion;
        /**
         * Gets the current level directory for the world being loaded.
         * Can be used for file operations and manual modification of mod files before world load.
         */
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        /**
         * Fetches the status of a mod mismatch handling state.
         */
        wasResolved(modId: string): boolean;
        getResolver(modid: string): ($ModContainer) | undefined;
        constructor(levelDirectory: $LevelStorageSource$LevelDirectory_, previousVersions: $Map_<string, $ArtifactVersion>, missingVersions: $Map_<string, $ArtifactVersion>);
        get resolved(): $Stream<$ModMismatchEvent$MismatchResolutionResult>;
        get unresolved(): $Stream<$ModMismatchEvent$MismatchResolutionResult>;
        get levelDirectory(): $LevelStorageSource$LevelDirectory;
    }
    /**
     * Fired when a `LootTable` is loaded from JSON.
     * Can be used to modify the loot table, cancel loading it, or outright replace it.
     * This event is currently fired for all loot tables coming from vanilla, mods, and user datapacks.
     * This event is fired whenever server resources are loaded or reloaded.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the loot table will be made empty.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical server.
     */
    export class $LootTableLoadEvent extends $Event implements $ICancellableEvent {
        getName(): $ResourceLocation;
        getKey(): $ResourceKey<$LootTable>;
        getTable(): $LootTable;
        setTable(table: $LootTable): void;
        /**
         * @return a lookup provider that can be used to access registries
         */
        getRegistries(): $HolderLookup$Provider;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        /**
         * @deprecated
         */
        constructor(name: $ResourceLocation_, table: $LootTable);
        constructor(registries: $HolderLookup$Provider, name: $ResourceLocation_, table: $LootTable);
        get name(): $ResourceLocation;
        get key(): $ResourceKey<$LootTable>;
        get registries(): $HolderLookup$Provider;
    }
    /**
     * Game tests are registered on client or server startup.
     * It is only run once for a given instance of the game if `GameTestHooks#isGametestEnabled` returns true.
     * This is the preferred way to register your game tests.
     * 
     * Fired on the Mod bus, see `IModBusEvent`.
     */
    export class $RegisterGameTestsEvent extends $Event implements $IModBusEvent {
        /**
         * Registers an entire class to the game test registry.
         * All methods annotated with `GameTest` or `GameTestGenerator` will be registered.
         * If the set of enabled namespaces is non-empty,
         * a method will only be registered if its template namespace is in an enabled namespace.
         */
        register(testClass: $Class<never>): void;
        /**
         * Registers a single method to the game test registry.
         * The method will only be registered if it is annotated with `GameTest` or `GameTestGenerator`.
         * If the set of enabled namespaces is non-empty,
         * the method will only be registered if its template namespace is an enabled namespace.
         */
        register(testMethod: $Method): void;
        constructor(gameTestMethods: $Set_<$Method>);
    }
    /**
     * PlayLevelSoundEvent.AtEntity is fired when a sound is played on the `Level` at an Entity's position.
     * This event is fired from `Level#playSound`, `Level#playSeededSound`, and `LocalPlayer#playSound`.
     * 
     * This event is cancelable.
     * If this event is canceled, the sound is not played.
     * 
     * This event does not have a result.
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $PlayLevelSoundEvent$AtEntity extends $PlayLevelSoundEvent {
        /**
         * @return the entity the sound is being played on
         */
        getEntity(): $Entity;
        constructor(entity: $Entity, sound: $Holder_<$SoundEvent>, source: $SoundSource_, volume: number, pitch: number);
        get entity(): $Entity;
    }
    export class $GrindstoneEvent extends $Event {
        /**
         * This is the experience amount determined by the event. It will be `-1` unless `#setXp(int)` is called.
         */
        getXp(): number;
        getTopItem(): $ItemStack;
        /**
         * Sets the experience amount.
         */
        setXp(xp: number): void;
        getBottomItem(): $ItemStack;
        get topItem(): $ItemStack;
        get bottomItem(): $ItemStack;
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
    /**
     * Fired when the contents of a specific creative mode tab are being populated in `ItemDisplayParameters)`.
     * 
     * This event may be fired multiple times if the operator status of the local player or enabled feature flags changes.
     * 
     * In vanilla, this is only fired on the logical client, but mods may request creative mode tab contents on the server.
     */
    export class $BuildCreativeModeTabContentsEvent extends $Event implements $IModBusEvent, $CreativeModeTab$Output {
        /**
         * Inserts the new entry after the specified existing entry.
         */
        insertBefore(existingEntry: $ItemStack_, newEntry: $ItemStack_, visibility: $CreativeModeTab$TabVisibility_): void;
        /**
         * Inserts the new stack at the end of the given tab at this point in time.
         */
        remove(newEntry: $ItemStack_, visibility: $CreativeModeTab$TabVisibility_): void;
        /**
         * Inserts the new stack at the end of the given tab at this point in time.
         */
        accept(newEntry: $ItemStack_, visibility: $CreativeModeTab$TabVisibility_): void;
        getParameters(): $CreativeModeTab$ItemDisplayParameters;
        getFlags(): $FeatureFlagSet;
        /**
         * Inserts the new stack at the end of the given tab at this point in time.
         */
        insertFirst(newEntry: $ItemStack_, visibility: $CreativeModeTab$TabVisibility_): void;
        /**
         * @return the creative mode tab currently populating its contents
         */
        getTab(): $CreativeModeTab;
        hasPermissions(): boolean;
        /**
         * The current immutable ordered set of the parent tab entries in the order to be added to the Creative Menu.
         * Purely for querying to see what in it. Please use the other event methods for modifications.
         */
        getParentEntries(): $ObjectSortedSet<$ItemStack>;
        /**
         * The current immutable ordered set of the parent tab entries in the order to be added to the Creative Menu.
         * Purely for querying to see what in it. Please use the other event methods for modifications.
         */
        getSearchEntries(): $ObjectSortedSet<$ItemStack>;
        /**
         * Inserts the new entry after the specified existing entry.
         */
        insertAfter(existingEntry: $ItemStack_, newEntry: $ItemStack_, visibility: $CreativeModeTab$TabVisibility_): void;
        /**
         * @return the key of the creative mode tab currently populating its contents
         */
        getTabKey(): $ResourceKey<$CreativeModeTab>;
        accept(item: $ItemLike_): void;
        accept(item: $ItemLike_, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        accept(stack: $ItemStack_): void;
        acceptAll(stacks: $Collection_<$ItemStack_>): void;
        acceptAll(stacks: $Collection_<$ItemStack_>, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        constructor(tab: $CreativeModeTab_, tabKey: $ResourceKey_<$CreativeModeTab>, parameters: $CreativeModeTab$ItemDisplayParameters_, parentEntries: $InsertableLinkedOpenCustomHashSet<$ItemStack_>, searchEntries: $InsertableLinkedOpenCustomHashSet<$ItemStack_>);
        get parameters(): $CreativeModeTab$ItemDisplayParameters;
        get flags(): $FeatureFlagSet;
        get tab(): $CreativeModeTab;
        get parentEntries(): $ObjectSortedSet<$ItemStack>;
        get searchEntries(): $ObjectSortedSet<$ItemStack>;
        get tabKey(): $ResourceKey<$CreativeModeTab>;
    }
    /**
     * This event is `ICancellableEvent`
     * 
     * `OnTakeItem` is fired when the output in a grindstone are is taken.
     * 
     * It is called from `GrindstoneMenu#GrindstoneMenu(int, Inventory)`.
     * 
     * If the event is canceled, vanilla behavior will not run, and no inputs will be consumed.
     * 
     * if the amount of experience is larger than or equal 0, the vanilla behavior for calculating experience will not run.
     */
    export class $GrindstoneEvent$OnTakeItem extends $GrindstoneEvent implements $ICancellableEvent {
        getPlayer(): $Player;
        getNewTopItem(): $ItemStack;
        getNewBottomItem(): $ItemStack;
        getContainerAccess(): $ContainerLevelAccess;
        /**
         * Sets the itemstack in the top slot.
         */
        setNewBottomItem(newTop: $ItemStack_): void;
        /**
         * Sets the itemstack in the top slot.
         */
        setNewTopItem(newTop: $ItemStack_): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ContainerLevelAccess_, arg1: $Player, arg2: $ItemStack_, arg3: $ItemStack_, arg4: number);
        /**
         * @deprecated
         */
        constructor(top: $ItemStack_, bottom: $ItemStack_, xp: number);
        get player(): $Player;
        get containerAccess(): $ContainerLevelAccess;
    }
    /**
     * A simple marker event that notifies when the game is about to close.
     * Fires once on the physical client and physical server.
     * Does not fire for the Integrated Server on a physical Client.
     * 
     * On the client, the GL Context is still valid when the event is fired.
     * Fired on the FORGE event bus.
     */
    export class $GameShuttingDownEvent extends $Event {
        constructor();
    }
    /**
     * This event is fired whenever a `ServerboundChatPacket` is received from a client
     * who has submitted their chat message.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the message will not be sent to clients.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical server.
     */
    export class $ServerChatEvent extends $Event implements $ICancellableEvent {
        /**
         * @return the message that will be sent to the relevant clients, if the event is not cancelled
         */
        getMessage(): $Component;
        /**
         * Set the message to be sent to the relevant clients.
         */
        setMessage(message: $Component_): void;
        /**
         * @return the username of the player who initiated the chat action
         */
        getRawText(): string;
        /**
         * @return the player who initiated the chat action
         */
        getPlayer(): $ServerPlayer;
        /**
         * @return the username of the player who initiated the chat action
         */
        getUsername(): string;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(player: $ServerPlayer, rawText: string, message: $Component_);
        get rawText(): string;
        get player(): $ServerPlayer;
        get username(): string;
    }
    export class $AddReloadListenerEvent$WrappedStateAwareListener extends $ContextAwareReloadListener implements $PreparableReloadListener {
    }
    /**
     * DifficultyChangeEvent is fired when difficulty is changing.
     * 
     * This event is fired via the `CommonHooks#onDifficultyChange(Difficulty, Difficulty)`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $DifficultyChangeEvent extends $Event {
        getDifficulty(): $Difficulty;
        getOldDifficulty(): $Difficulty;
        constructor(difficulty: $Difficulty_, oldDifficulty: $Difficulty_);
        get difficulty(): $Difficulty;
        get oldDifficulty(): $Difficulty;
    }
    /**
     * PlayLevelSoundEvent.AtPosition is fired when a sound is played on the `Level` at a specific position.
     * This event is fired from `Level#playSound` and `Level#playSeededSound`.
     * 
     * This event is cancelable.
     * If this event is canceled, the sound is not played.
     * 
     * This event does not have a result.
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $PlayLevelSoundEvent$AtPosition extends $PlayLevelSoundEvent {
        /**
         * @return the position the sound is being played at
         */
        getPosition(): $Vec3;
        constructor(level: $Level_, position: $Vec3_, sound: $Holder_<$SoundEvent>, source: $SoundSource_, volume: number, pitch: number);
        get position(): $Vec3;
    }
}
