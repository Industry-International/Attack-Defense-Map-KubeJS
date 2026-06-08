import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Services_ } from "@package/net/minecraft/server";
import { $DispenserBlockEntityAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder, $AbstractCookingRecipe, $RecipeHolder_, $RecipeManager$CachedCheck, $CampfireCookingRecipe, $RecipeType_, $CraftingInput, $CraftingInput$Positioned, $SingleRecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AccessorBlockEntity, $AccessorBlockEntityType } from "@package/com/railwayteam/railways/mixin";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $FormattedCharSequence, $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $RandomizableContainer, $MenuProvider, $Nameable, $Container, $Clearable, $LockCode_, $WorldlyContainer, $LockCode } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IBlockEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $IRenderableEntity } from "@package/me/srrapero720/chloride/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $Connection } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $BeaconLightBehavior_, $BeaconLightBehavior } from "@package/dev/lambdaurora/lambdynlights/api/behavior";
import { $DataComponentMap$Builder, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $CraftingContainer, $AbstractContainerMenu, $ContainerData, $StackedContentsCompatible, $RecipeCraftingHolder } from "@package/net/minecraft/world/inventory";
import { $TransactionContext } from "@package/net/fabricmc/fabric/api/transfer/v1/transaction";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $Item, $JukeboxSongPlayer, $Item_, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $FilteredText_ } from "@package/net/minecraft/server/network";
import { $Inventory, $Player, $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $SpecialLogicInventory } from "@package/net/fabricmc/fabric/impl/transfer/item";
import { $BETypeAccess, $FurnaceTEAccess, $BaseContainerBEAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ExtendedBlockEntityType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem, $VibrationSystem$Listener } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $BlockEntityTypeAccessor } from "@package/net/neoforged/neoforge/mixins";
import { $Mirror_, $Mirror, $Block, $Block_, $Rotation_, $SculkSpreader, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityAccessor } from "@package/com/copycatsplus/copycats/mixin/foundation/copycat";
import { $Type } from "@package/com/mojang/datafixers/types";
import { $RenderDataBlockEntity } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $FabricBlockEntityType, $FabricBlockEntityType$Builder } from "@package/net/fabricmc/fabric/api/object/builder/v1/block/entity";
import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $BeaconBlockEntityLightSource } from "@package/dev/lambdaurora/lambdynlights/echo";
import { $GameEventListener, $GameEvent, $GameEventListener$Provider, $PositionSource, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $BlockEntityRenderPredicate, $BlockEntityRenderPredicate_ } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $UUID_, $Set_, $Map, $List, $Map_, $List_, $Set, $UUID } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BlockEntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $ObjIntConsumer_, $UnaryOperator_, $BooleanSupplier_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Vec3i, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList, $Direction, $Registry, $HolderGetter, $Holder_ } from "@package/net/minecraft/core";
import { $RenderAttachmentBlockEntity } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $IBlockEntity } from "@package/com/ishland/c2me/base/mixin/access";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ContainerSingleItem$BlockContainerSingleItem } from "@package/net/minecraft/world/ticks";
import { $ItemLike_, $Spawner, $BlockGetter, $BaseCommandBlock, $BaseSpawner, $Level_, $Level } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $TrialSpawner$StateAccessor, $TrialSpawner, $TrialSpawnerState_, $TrialSpawnerState } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $Logger } from "@package/org/slf4j";
import { $BlockEntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $CustomData, $ResolvableProfile_, $ResolvableProfile } from "@package/net/minecraft/world/item/component";
import { $ClientboundBlockEntityDataPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AbstractFurnaceBlockEntityAccess } from "@package/snownee/jade/mixin";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as trialspawner from "@package/net/minecraft/world/level/block/entity/trialspawner";
export * as vault from "@package/net/minecraft/world/level/block/entity/vault";

declare module "@package/net/minecraft/world/level/block/entity" {
    export class $BeehiveBlockEntity$BeeReleaseStatus extends $Enum<$BeehiveBlockEntity$BeeReleaseStatus> {
        static values(): $BeehiveBlockEntity$BeeReleaseStatus[];
        static valueOf(arg0: string): $BeehiveBlockEntity$BeeReleaseStatus;
        static BEE_RELEASED: $BeehiveBlockEntity$BeeReleaseStatus;
        static EMERGENCY: $BeehiveBlockEntity$BeeReleaseStatus;
        static HONEY_DELIVERED: $BeehiveBlockEntity$BeeReleaseStatus;
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$BeeReleaseStatus}.
     */
    export type $BeehiveBlockEntity$BeeReleaseStatus_ = "honey_delivered" | "bee_released" | "emergency";
    export class $SculkCatalystBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$SculkCatalystBlockEntity$CatalystListener> {
        getListener(): $SculkCatalystBlockEntity$CatalystListener;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SculkCatalystBlockEntity): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get listener(): $SculkCatalystBlockEntity$CatalystListener;
    }
    export class $HopperBlockEntity extends $RandomizableContainerBlockEntity implements $Hopper {
        static addItem(arg0: $Container, arg1: $ItemEntity): boolean;
        static addItem(arg0: $Container, arg1: $Container, arg2: $ItemStack_, arg3: $Direction_): $ItemStack;
        static pushItemsTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $HopperBlockEntity): void;
        static getContainerAt(arg0: $Level_, arg1: $BlockPos_): $Container;
        static entityInside(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Entity, arg4: $HopperBlockEntity): void;
        getLevelX(): number;
        getLevelY(): number;
        getLevelZ(): number;
        getLastUpdateTime(): number;
        static suckInItems(arg0: $Level_, arg1: $Hopper): boolean;
        setCooldown(arg0: number): void;
        isGridAligned(): boolean;
        static getItemsAtAndAbove(arg0: $Level_, arg1: $Hopper): $List<$ItemEntity>;
        static isFullContainer(arg0: $Container, arg1: $Direction_): boolean;
        isOnCustomCooldown(): boolean;
        getSuckAabb(): $AABB;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static MOVE_ITEM_SPEED: number;
        static ATTACHMENTS_NBT_KEY: string;
        static HOPPER_CONTAINER_SIZE: number;
        lockKey: $LockCode;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get lastUpdateTime(): number;
        set cooldown(value: number);
        get gridAligned(): boolean;
        get onCustomCooldown(): boolean;
        get suckAabb(): $AABB;
    }
    export interface $DecoratedPotPattern extends RegistryMarked<RegistryTypes.DecoratedPotPatternTag, RegistryTypes.DecoratedPotPattern> {}
    export class $BlockEntityTicker<T extends $BlockEntity> {
    }
    export interface $BlockEntityTicker<T extends $BlockEntity> {
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: T): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTicker}.
     */
    export type $BlockEntityTicker_<T> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: T) => void);
    export class $SkullBlockEntity extends $BlockEntity {
        static clear(): void;
        static setup(arg0: $Services_, arg1: $Executor_): void;
        setOwner(arg0: $ResolvableProfile_): void;
        getNoteBlockSound(): $ResourceLocation;
        static fetchGameProfile(arg0: string): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(arg0: $UUID_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchProfileById(arg0: $UUID_, arg1: $Services_, arg2: $BooleanSupplier_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchProfileByName(arg0: string, arg1: $Services_): $CompletableFuture<($GameProfile) | undefined>;
        getAnimation(arg0: number): number;
        getOwnerProfile(): $ResolvableProfile;
        static animation(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SkullBlockEntity): void;
        worldPosition: $BlockPos;
        static CHECKED_MAIN_THREAD_EXECUTOR: $Executor;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set owner(value: $ResolvableProfile_);
        get noteBlockSound(): $ResourceLocation;
        get ownerProfile(): $ResolvableProfile;
    }
    export class $LidBlockEntity {
    }
    export interface $LidBlockEntity {
        getOpenNess(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LidBlockEntity}.
     */
    export type $LidBlockEntity_ = ((arg0: number) => number);
    export class $ComparatorBlockEntity extends $BlockEntity {
        getOutputSignal(): number;
        setOutputSignal(arg0: number): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $DecoratedPotPattern extends $Record {
        assetId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotPattern}.
     */
    export type $DecoratedPotPattern_ = RegistryTypes.DecoratedPotPattern;
    export class $JigsawBlockEntity$JointType extends $Enum<$JigsawBlockEntity$JointType> implements $StringRepresentable {
        static values(): $JigsawBlockEntity$JointType[];
        static valueOf(arg0: string): $JigsawBlockEntity$JointType;
        static byName(arg0: string): ($JigsawBlockEntity$JointType) | undefined;
        getSerializedName(): string;
        getTranslatedName(): $Component;
        getRemappedEnumConstantName(): string;
        static ROLLABLE: $JigsawBlockEntity$JointType;
        static ALIGNED: $JigsawBlockEntity$JointType;
        get serializedName(): string;
        get translatedName(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $JigsawBlockEntity$JointType}.
     */
    export type $JigsawBlockEntity$JointType_ = "rollable" | "aligned";
    export class $CommandBlockEntity$Mode extends $Enum<$CommandBlockEntity$Mode> {
        static values(): $CommandBlockEntity$Mode[];
        static valueOf(arg0: string): $CommandBlockEntity$Mode;
        static AUTO: $CommandBlockEntity$Mode;
        static REDSTONE: $CommandBlockEntity$Mode;
        static SEQUENCE: $CommandBlockEntity$Mode;
    }
    /**
     * Values that may be interpreted as {@link $CommandBlockEntity$Mode}.
     */
    export type $CommandBlockEntity$Mode_ = "sequence" | "auto" | "redstone";
    export class $ChestLidController {
        shouldBeOpen(arg0: boolean): void;
        getOpenness(arg0: number): number;
        tickLid(): void;
        constructor();
    }
    export class $BlockEntity$DataComponentInput {
    }
    export interface $BlockEntity$DataComponentInput {
    }
    export class $BeehiveBlockEntity$BeeData {
    }
    export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable, $BeaconBlockEntityLightSource {
        getName(): $Component;
        getDisplayName(): $Component;
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BeaconBlockEntity): void;
        lambdynlights$getDynamicLightBeam(): $BeaconLightBehavior;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        lambdynlights$setDynamicLightBeam(beam: $BeaconLightBehavior_): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getBeamSections(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        static filterEffect(arg0: $Holder_<$MobEffect>): $Holder<$MobEffect>;
        static playSound(arg0: $Level_, arg1: $BlockPos_, arg2: $SoundEvent_): void;
        getCustomName(): $Component;
        setCustomName(arg0: $Component_): void;
        lambdynlights$getLevels(): number;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        primaryPower: $Holder<$MobEffect>;
        static BEACON_EFFECTS: $List<$List<$Holder<$MobEffect>>>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        beamSections: $List<$BeaconBlockEntity$BeaconBeamSection>;
        worldPosition: $BlockPos;
        secondaryPower: $Holder<$MobEffect>;
        static DATA_SECONDARY: number;
        static NUM_DATA_VALUES: number;
        static DATA_LEVELS: number;
        levels: number;
        static DATA_PRIMARY: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $SculkShriekerBlockEntity$VibrationUser implements $VibrationSystem$User {
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        requiresAdjacentChunksToBeTicking(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $SignText {
        getMessage(arg0: number, arg1: boolean): $Component;
        setColor(arg0: $DyeColor_): $SignText;
        getMessages(arg0: boolean): $Component[];
        setMessage(arg0: number, arg1: $Component_, arg2: $Component_): $SignText;
        setMessage(arg0: number, arg1: $Component_): $SignText;
        getColor(): $DyeColor;
        hasGlowingText(): boolean;
        getRenderMessages(arg0: boolean, arg1: $Function_<$Component, $FormattedCharSequence>): $FormattedCharSequence[];
        setHasGlowingText(arg0: boolean): $SignText;
        hasMessage(arg0: $Player): boolean;
        hasAnyClickCommands(arg0: $Player): boolean;
        static DIRECT_CODEC: $Codec<$SignText>;
        static LINES: number;
        constructor();
        constructor(arg0: $Component_[], arg1: $Component_[], arg2: $DyeColor_, arg3: boolean);
    }
    export class $BedBlockEntity extends $BlockEntity {
        setColor(arg0: $DyeColor_): void;
        getColor(): $DyeColor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_, arg2: $DyeColor_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $TrappedChestBlockEntity extends $ChestBlockEntity {
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityType<T extends $BlockEntity> implements $BlockEntityTypeAccessor, $ExtendedBlockEntityType<any>, $BETypeAccess, $BlockEntityTypeExtension<any>, $FabricBlockEntityType, $AccessorBlockEntityType, $IRenderableEntity {
        static getKey(arg0: $BlockEntityType_<never>): $ResourceLocation;
        create(arg0: $BlockPos_, arg1: $BlockState_): $Object;
        isValid(arg0: $BlockState_): boolean;
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): boolean;
        chloride$whitelisted(): boolean;
        flywheel$setVisualizer(visualizer: $BlockEntityVisualizer<any>): void;
        flywheel$getVisualizer(): $BlockEntityVisualizer<any>;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $Object;
        addSupportedBlock(arg0: $Block_): void;
        builtInRegistryHolder(): $Holder$Reference<$BlockEntityType<never>>;
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): void;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<any>[];
        setValidBlocks(arg0: $Set_<$Block_>): void;
        neoforge$setValidBlocks(arg0: $Set_<$Block_>): void;
        getValidBlocks(): $Set<$Block>;
        static BLAST_FURNACE: $BlockEntityType<$BlastFurnaceBlockEntity>;
        static HANGING_SIGN: $BlockEntityType<$HangingSignBlockEntity>;
        static COMPARATOR: $BlockEntityType<$ComparatorBlockEntity>;
        static VAULT: $BlockEntityType<$VaultBlockEntity>;
        static SKULL: $BlockEntityType<$SkullBlockEntity>;
        static CHISELED_BOOKSHELF: $BlockEntityType<$ChiseledBookShelfBlockEntity>;
        static JIGSAW: $BlockEntityType<$JigsawBlockEntity>;
        static DECORATED_POT: $BlockEntityType<$DecoratedPotBlockEntity>;
        static BEACON: $BlockEntityType<$BeaconBlockEntity>;
        static CRAFTER: $BlockEntityType<$CrafterBlockEntity>;
        validBlocks: $Set<$Block>;
        static FURNACE: $BlockEntityType<$FurnaceBlockEntity>;
        static BEEHIVE: $BlockEntityType<$BeehiveBlockEntity>;
        static PISTON: $BlockEntityType<$PistonMovingBlockEntity>;
        static TRAPPED_CHEST: $BlockEntityType<$TrappedChestBlockEntity>;
        static END_PORTAL: $BlockEntityType<$TheEndPortalBlockEntity>;
        static ENDER_CHEST: $BlockEntityType<$EnderChestBlockEntity>;
        static COMMAND_BLOCK: $BlockEntityType<$CommandBlockEntity>;
        static SIGN: $BlockEntityType<$SignBlockEntity>;
        static STRUCTURE_BLOCK: $BlockEntityType<$StructureBlockEntity>;
        static BELL: $BlockEntityType<$BellBlockEntity>;
        static ENCHANTING_TABLE: $BlockEntityType<$EnchantingTableBlockEntity>;
        static BREWING_STAND: $BlockEntityType<$BrewingStandBlockEntity>;
        static BED: $BlockEntityType<$BedBlockEntity>;
        static MOB_SPAWNER: $BlockEntityType<$SpawnerBlockEntity>;
        static CALIBRATED_SCULK_SENSOR: $BlockEntityType<$CalibratedSculkSensorBlockEntity>;
        static SCULK_CATALYST: $BlockEntityType<$SculkCatalystBlockEntity>;
        static CONDUIT: $BlockEntityType<$ConduitBlockEntity>;
        static CAMPFIRE: $BlockEntityType<$CampfireBlockEntity>;
        static END_GATEWAY: $BlockEntityType<$TheEndGatewayBlockEntity>;
        static SMOKER: $BlockEntityType<$SmokerBlockEntity>;
        static DISPENSER: $BlockEntityType<$DispenserBlockEntity>;
        static SCULK_SHRIEKER: $BlockEntityType<$SculkShriekerBlockEntity>;
        static HOPPER: $BlockEntityType<$HopperBlockEntity>;
        static CHEST: $BlockEntityType<$ChestBlockEntity>;
        static DAYLIGHT_DETECTOR: $BlockEntityType<$DaylightDetectorBlockEntity>;
        static BANNER: $BlockEntityType<$BannerBlockEntity>;
        static SCULK_SENSOR: $BlockEntityType<$SculkSensorBlockEntity>;
        static TRIAL_SPAWNER: $BlockEntityType<$TrialSpawnerBlockEntity>;
        static LECTERN: $BlockEntityType<$LecternBlockEntity>;
        static SHULKER_BOX: $BlockEntityType<$ShulkerBoxBlockEntity>;
        static BRUSHABLE_BLOCK: $BlockEntityType<$BrushableBlockEntity>;
        static JUKEBOX: $BlockEntityType<$JukeboxBlockEntity>;
        static BARREL: $BlockEntityType<$BarrelBlockEntity>;
        static DROPPER: $BlockEntityType<$DropperBlockEntity>;
        constructor(arg0: $BlockEntityType$BlockEntitySupplier_<$Object>, arg1: $Set_<$Block_>, arg2: $Type<never>);
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType}.
     */
    export type $BlockEntityType_<T> = RegistryTypes.BlockEntityType;
    export class $SmokerBlockEntity extends $AbstractFurnaceBlockEntity {
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $CampfireBlockEntity extends $BlockEntity implements $Clearable {
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        clearContent(): void;
        getCookableRecipe(arg0: $ItemStack_): ($RecipeHolder<$CampfireCookingRecipe>) | undefined;
        static cooldownTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CampfireBlockEntity): void;
        static particleTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CampfireBlockEntity): void;
        dowse(): void;
        placeFood(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): boolean;
        static cookTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CampfireBlockEntity): void;
        getItems(): $NonNullList<$ItemStack>;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        cookingTime: number[];
        remove: boolean;
        cookingProgress: number[];
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get items(): $NonNullList<$ItemStack>;
    }
    export class $BarrelBlockEntity extends $RandomizableContainerBlockEntity {
        recheckOpen(): void;
        playSound(arg0: $BlockState_, arg1: $SoundEvent_): void;
        updateBlockState(arg0: $BlockState_, arg1: boolean): void;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BeaconBlockEntity$BeaconBeamSection {
        getColor(): number;
        getHeight(): number;
        increaseHeight(): void;
        color: number;
        constructor(arg0: number);
        get height(): number;
    }
    export class $SculkSensorBlockEntity$VibrationUser implements $VibrationSystem$User {
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        requiresAdjacentChunksToBeTicking(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $PotDecorations extends $Record {
        static load(arg0: $CompoundTag_): $PotDecorations;
        save(arg0: $CompoundTag_): $CompoundTag;
        left(): ($Item) | undefined;
        right(): ($Item) | undefined;
        front(): ($Item) | undefined;
        back(): ($Item) | undefined;
        ordered(): $List<$Item>;
        static CODEC: $Codec<$PotDecorations>;
        static EMPTY: $PotDecorations;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotDecorations>;
        constructor(arg0: ($Item_) | undefined, arg1: ($Item_) | undefined, arg2: ($Item_) | undefined, arg3: ($Item_) | undefined);
        constructor(arg0: $Item_, arg1: $Item_, arg2: $Item_, arg3: $Item_);
    }
    export class $BannerPatternLayers extends $Record {
        layers(): $List<$BannerPatternLayers$Layer>;
        removeLast(): $BannerPatternLayers;
        static CODEC: $Codec<$BannerPatternLayers>;
        static LOGGER: $Logger;
        static EMPTY: $BannerPatternLayers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers>;
        constructor(arg0: $List_<$BannerPatternLayers$Layer_>);
    }
    export class $ChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity {
        static lidAnimateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ChestBlockEntity): void;
        recheckOpen(): void;
        static getOpenCount(arg0: $BlockGetter, arg1: $BlockPos_): number;
        getOpenNess(arg0: number): number;
        static swapContents(arg0: $ChestBlockEntity, arg1: $ChestBlockEntity): void;
        signalOpenCount(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: number): void;
        static playSound(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SoundEvent_): void;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BeehiveBlockEntity$Occupant extends $Record {
        static of(arg0: $Entity): $BeehiveBlockEntity$Occupant;
        static create(arg0: number): $BeehiveBlockEntity$Occupant;
        createEntity(arg0: $Level_, arg1: $BlockPos_): $Entity;
        entityData(): $CustomData;
        ticksInHive(): number;
        minTicksInHive(): number;
        static CODEC: $Codec<$BeehiveBlockEntity$Occupant>;
        static LIST_CODEC: $Codec<$List<$BeehiveBlockEntity$Occupant>>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BeehiveBlockEntity$Occupant>;
        constructor(arg0: $CustomData, arg1: number, arg2: number);
    }
    export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntity extends $AttachmentHolder implements $IBlockEntityExtension, $RenderDataBlockEntity, $RenderAttachmentBlockEntity, $Cullable, $AccessorBlockEntity, $BlockEntityAccessor, $IHaveGoggleInformation, $IBlockEntity {
        getType(): $BlockEntityType<never>;
        getLevel(): $Level;
        setLevel(arg0: $Level_): void;
        setTimeout(): void;
        components(): $DataComponentMap;
        applyComponentsFromItemStack(arg0: $ItemStack_): void;
        getBlockPos(): $BlockPos;
        getUpdateTag(arg0: $HolderLookup$Provider): $CompoundTag;
        setComponents(arg0: $DataComponentMap_): void;
        static addEntityType(arg0: $CompoundTag_, arg1: $BlockEntityType_<never>): void;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        clearRemoved(): void;
        saveCustomOnly(arg0: $HolderLookup$Provider): $CompoundTag;
        /**
         * @deprecated
         */
        setBlockState(arg0: $BlockState_): void;
        addToGoggleTooltip(arg0: $List_<any>, arg1: boolean): boolean;
        getUpdatePacket(): $Packet<$ClientGamePacketListener>;
        getRenderData(): $Object;
        isValidBlockState(arg0: $BlockState_): boolean;
        static getPosFromTag(arg0: $CompoundTag_): $BlockPos;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadWithComponents(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadCustomOnly(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        saveWithId(arg0: $HolderLookup$Provider): $CompoundTag;
        hasLevel(): boolean;
        static loadStatic(arg0: $BlockPos_, arg1: $BlockState_, arg2: $CompoundTag_, arg3: $HolderLookup$Provider): $BlockEntity;
        saveToItem(arg0: $ItemStack_, arg1: $HolderLookup$Provider): void;
        getBlockState(): $BlockState;
        isRemoved(): boolean;
        collectComponents(): $DataComponentMap;
        applyComponents(arg0: $DataComponentMap_, arg1: $DataComponentPatch_): void;
        /**
         * @deprecated
         */
        removeComponentsFromTag(arg0: $CompoundTag_): void;
        saveCustomAndMetadata(arg0: $HolderLookup$Provider): $CompoundTag;
        getPersistentData(): $CompoundTag;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        setRemoved(): void;
        onlyOpCanSetNbt(): boolean;
        isForcedVisible(): boolean;
        setOutOfCamera(value: boolean): void;
        isOutOfCamera(): boolean;
        applyImplicitComponents(arg0: $BlockEntity$DataComponentInput): void;
        collectImplicitComponents(arg0: $DataComponentMap$Builder): void;
        getRenderAttachmentData(): $Object;
        saveWithFullMetadata(arg0: $HolderLookup$Provider): $CompoundTag;
        saveWithoutMetadata(arg0: $HolderLookup$Provider): $CompoundTag;
        static parseCustomNameSafe(arg0: string, arg1: $HolderLookup$Provider): $Component;
        handler$dmd000$yumi_mc_core$yumi$onPopulateCrashDetails(crashReportCategory: $CrashReportCategory, ci: $CallbackInfo): void;
        isCulled(): boolean;
        setCulled(value: boolean): void;
        setChanged(): void;
        static setChanged(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        onLoad(): void;
        getModelData(): $ModelData;
        onDataPacket(arg0: $Connection, arg1: $ClientboundBlockEntityDataPacket, arg2: $HolderLookup$Provider): void;
        onChunkUnloaded(): void;
        handleUpdateTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        invalidateCapabilities(): void;
        requestModelDataUpdate(): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        setWorldPosition(arg0: $BlockPos_): void;
        callSaveMetadata(arg0: $CompoundTag_): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get type(): $BlockEntityType<never>;
        get blockPos(): $BlockPos;
        get updatePacket(): $Packet<$ClientGamePacketListener>;
        get renderData(): $Object;
        get persistentData(): $CompoundTag;
        get forcedVisible(): boolean;
        get renderAttachmentData(): $Object;
        get modelData(): $ModelData;
    }
    export class $ShulkerBoxBlockEntity$AnimationStatus extends $Enum<$ShulkerBoxBlockEntity$AnimationStatus> {
        static values(): $ShulkerBoxBlockEntity$AnimationStatus[];
        static valueOf(arg0: string): $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSED: $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENED: $ShulkerBoxBlockEntity$AnimationStatus;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerBoxBlockEntity$AnimationStatus}.
     */
    export type $ShulkerBoxBlockEntity$AnimationStatus_ = "closed" | "opening" | "opened" | "closing";
    export class $ShulkerBoxBlockEntity extends $RandomizableContainerBlockEntity implements $WorldlyContainer {
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ShulkerBoxBlockEntity): void;
        isClosed(): boolean;
        getColor(): $DyeColor;
        getProgress(arg0: number): number;
        getAnimationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        getSlotsForFace(arg0: $Direction_): number[];
        getBoundingBox(arg0: $BlockState_): $AABB;
        loadFromTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static EVENT_SET_OPEN_COUNT: number;
        static CONTAINER_SIZE: number;
        static COLUMNS: number;
        static OPENING_TICK_LENGTH: number;
        lockKey: $LockCode;
        static MAX_LID_HEIGHT: number;
        static MAX_LID_ROTATION: number;
        lootTableSeed: number;
        static ROWS: number;
        constructor(arg0: $DyeColor_, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get closed(): boolean;
        get color(): $DyeColor;
        get animationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
    }
    export class $DecoratedPotBlockEntity$WobbleStyle extends $Enum<$DecoratedPotBlockEntity$WobbleStyle> {
        static values(): $DecoratedPotBlockEntity$WobbleStyle[];
        static valueOf(arg0: string): $DecoratedPotBlockEntity$WobbleStyle;
        duration: number;
        static POSITIVE: $DecoratedPotBlockEntity$WobbleStyle;
        static NEGATIVE: $DecoratedPotBlockEntity$WobbleStyle;
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotBlockEntity$WobbleStyle}.
     */
    export type $DecoratedPotBlockEntity$WobbleStyle_ = "positive" | "negative";
    export interface $BannerPattern extends RegistryMarked<RegistryTypes.BannerPatternTag, RegistryTypes.BannerPattern> {}
    export class $BlockEntity$ComponentHelper {
        static COMPONENTS_CODEC: $Codec<$DataComponentMap>;
    }
    export class $BrushableBlockEntity extends $BlockEntity {
        getItem(): $ItemStack;
        unpackLootTable(arg0: $Player): void;
        getHitDirection(): $Direction;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        checkReset(): void;
        brush(arg0: number, arg1: $Player, arg2: $Direction_): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get item(): $ItemStack;
        get hitDirection(): $Direction;
    }
    export class $EnderChestBlockEntity extends $BlockEntity implements $LidBlockEntity {
        static lidAnimateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnderChestBlockEntity): void;
        recheckOpen(): void;
        getOpenNess(arg0: number): number;
        stillValid(arg0: $Player): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BaseContainerBlockEntity extends $BlockEntity implements $Container, $MenuProvider, $Nameable, $BaseContainerBEAccess, $SpecialLogicInventory {
        getName(): $Component;
        isEmpty(): boolean;
        getDisplayName(): $Component;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        clearContent(): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        createMenu(arg0: number, arg1: $Inventory): $AbstractContainerMenu;
        setItem(arg0: number, arg1: $ItemStack_): void;
        getDefaultName(): $Component;
        fabric_setSuppress(arg0: boolean): void;
        getCustomName(): $Component;
        removeItemNoUpdate(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        canOpen(arg0: $Player): boolean;
        wrapOperation$fml000$fabric_transfer_api_v1$fabric_redirectMarkDirty(arg0: $BaseContainerBlockEntity, arg1: $Operation_<any>): void;
        getItems(): $NonNullList<$ItemStack>;
        setItems(arg0: $NonNullList<$ItemStack_>): void;
        static canUnlock(arg0: $Player, arg1: $LockCode_, arg2: $Component_): boolean;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        getStackInSlot(slot: number): $ItemStack;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        setChanged(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        asContainer(): $Container;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        setName(arg0: $Component_): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get displayName(): $Component;
        get defaultName(): $Component;
        get customName(): $Component;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$Builder<T extends $BlockEntity> implements $FabricBlockEntityType$Builder<any> {
        static of<T extends $BlockEntity>(arg0: $BlockEntityType$BlockEntitySupplier_<T>, ...arg1: $Block_[]): $BlockEntityType$Builder<T>;
        build(): $BlockEntityType<any>;
        build(arg0: $Type<never>): $BlockEntityType<$Object>;
        validBlocks: $Set<$Block>;
    }
    export class $CommandBlockEntity extends $BlockEntity {
        isAutomatic(): boolean;
        getMode(): $CommandBlockEntity$Mode;
        getCommandBlock(): $BaseCommandBlock;
        markConditionMet(): boolean;
        isConditional(): boolean;
        wasConditionMet(): boolean;
        setAutomatic(arg0: boolean): void;
        onModeSwitch(): void;
        isPowered(): boolean;
        setPowered(arg0: boolean): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get mode(): $CommandBlockEntity$Mode;
        get commandBlock(): $BaseCommandBlock;
        get conditional(): boolean;
    }
    export class $DecoratedPotPatterns {
        static bootstrap(arg0: $Registry<$DecoratedPotPattern_>): $DecoratedPotPattern;
        static getPatternFromItem(arg0: $Item_): $ResourceKey<$DecoratedPotPattern>;
        static GUSTER: $ResourceKey<$DecoratedPotPattern>;
        static MINER: $ResourceKey<$DecoratedPotPattern>;
        static SNORT: $ResourceKey<$DecoratedPotPattern>;
        static DANGER: $ResourceKey<$DecoratedPotPattern>;
        static ARMS_UP: $ResourceKey<$DecoratedPotPattern>;
        static FRIEND: $ResourceKey<$DecoratedPotPattern>;
        static SHEAF: $ResourceKey<$DecoratedPotPattern>;
        static ANGLER: $ResourceKey<$DecoratedPotPattern>;
        static SKULL: $ResourceKey<$DecoratedPotPattern>;
        static BREWER: $ResourceKey<$DecoratedPotPattern>;
        static SCRAPE: $ResourceKey<$DecoratedPotPattern>;
        static ARCHER: $ResourceKey<$DecoratedPotPattern>;
        static FLOW: $ResourceKey<$DecoratedPotPattern>;
        static BURN: $ResourceKey<$DecoratedPotPattern>;
        static HEART: $ResourceKey<$DecoratedPotPattern>;
        static BLANK: $ResourceKey<$DecoratedPotPattern>;
        static EXPLORER: $ResourceKey<$DecoratedPotPattern>;
        static SHELTER: $ResourceKey<$DecoratedPotPattern>;
        static PLENTY: $ResourceKey<$DecoratedPotPattern>;
        static BLADE: $ResourceKey<$DecoratedPotPattern>;
        static HEARTBREAK: $ResourceKey<$DecoratedPotPattern>;
        static HOWL: $ResourceKey<$DecoratedPotPattern>;
        static MOURNER: $ResourceKey<$DecoratedPotPattern>;
        static PRIZE: $ResourceKey<$DecoratedPotPattern>;
        constructor();
    }
    export class $StructureBlockEntity$UpdateType extends $Enum<$StructureBlockEntity$UpdateType> {
        static values(): $StructureBlockEntity$UpdateType[];
        static valueOf(arg0: string): $StructureBlockEntity$UpdateType;
        static UPDATE_DATA: $StructureBlockEntity$UpdateType;
        static SAVE_AREA: $StructureBlockEntity$UpdateType;
        static LOAD_AREA: $StructureBlockEntity$UpdateType;
        static SCAN_AREA: $StructureBlockEntity$UpdateType;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockEntity$UpdateType}.
     */
    export type $StructureBlockEntity$UpdateType_ = "update_data" | "save_area" | "load_area" | "scan_area";
    export class $SculkCatalystBlockEntity$CatalystListener implements $GameEventListener {
        getSculkSpreader(): $SculkSpreader;
        handleGameEvent(arg0: $ServerLevel, arg1: $Holder_<$GameEvent>, arg2: $GameEvent$Context_, arg3: $Vec3_): boolean;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        getListenerSource(): $PositionSource;
        getListenerRadius(): number;
        static PULSE_TICKS: number;
        sculkSpreader: $SculkSpreader;
        constructor(arg0: $BlockState_, arg1: $PositionSource);
        get deliveryMode(): $GameEventListener$DeliveryMode;
        get listenerSource(): $PositionSource;
        get listenerRadius(): number;
    }
    export class $DaylightDetectorBlockEntity extends $BlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export interface $BlockEntityType extends RegistryMarked<RegistryTypes.BlockEntityTypeTag, RegistryTypes.BlockEntityType> {}
    export class $CrafterBlockEntity extends $RandomizableContainerBlockEntity implements $CraftingContainer {
        getWidth(): number;
        setTriggered(arg0: boolean): void;
        getRedstoneSignal(): number;
        getHeight(): number;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CrafterBlockEntity): void;
        isSlotDisabled(arg0: number): boolean;
        setSlotState(arg0: number, arg1: boolean): void;
        isTriggered(): boolean;
        setCraftingTicksRemaining(arg0: number): void;
        fillStackedContents(arg0: $StackedContents): void;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        asCraftInput(): $CraftingInput;
        getItems(): $List<$ItemStack>;
        static CONTAINER_WIDTH: number;
        level: $Level;
        static SLOT_ENABLED: number;
        static SLOT_DISABLED: number;
        static ATTACHMENTS_NBT_KEY: string;
        static NUM_DATA: number;
        remove: boolean;
        static CONTAINER_HEIGHT: number;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static DATA_TRIGGERED: number;
        static CONTAINER_SIZE: number;
        lockKey: $LockCode;
        containerData: $ContainerData;
        lootTableSeed: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get width(): number;
        get redstoneSignal(): number;
        get height(): number;
        set craftingTicksRemaining(value: number);
        get items(): $List<$ItemStack>;
    }
    export class $HangingSignBlockEntity extends $SignBlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BellBlockEntity$ResonationEndAction {
    }
    export interface $BellBlockEntity$ResonationEndAction {
    }
    /**
     * Values that may be interpreted as {@link $BellBlockEntity$ResonationEndAction}.
     */
    export type $BellBlockEntity$ResonationEndAction_ = (() => void);
    export class $BrewingStandBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer {
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BrewingStandBlockEntity): void;
        getSlotsForFace(arg0: $Direction_): number[];
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        static DATA_BREW_TIME: number;
        dataAccess: $ContainerData;
        worldPosition: $BlockPos;
        static DATA_FUEL_USES: number;
        level: $Level;
        fuel: number;
        brewTime: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        static FUEL_USES: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $StructureBlockEntity extends $BlockEntity {
        setSeed(arg0: number): void;
        getSeed(): number;
        setMode(arg0: $StructureMode_): void;
        getMode(): $StructureMode;
        placeStructureIfSameSize(arg0: $ServerLevel): boolean;
        isStructureLoadable(): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        saveStructure(): boolean;
        saveStructure(arg0: boolean): boolean;
        unloadStructure(): void;
        placeStructure(arg0: $ServerLevel): void;
        getRotation(): $Rotation;
        setRotation(arg0: $Rotation_): void;
        getStructureName(): string;
        getStructurePos(): $BlockPos;
        getIntegrity(): number;
        setIntegrity(arg0: number): void;
        setStructureSize(arg0: $Vec3i): void;
        getShowBoundingBox(): boolean;
        hasStructureName(): boolean;
        getStructureSize(): $Vec3i;
        setIgnoreEntities(arg0: boolean): void;
        loadStructureInfo(arg0: $ServerLevel): boolean;
        setShowBoundingBox(arg0: boolean): void;
        setStructureName(arg0: $ResourceLocation_): void;
        setStructureName(arg0: string): void;
        getMetaData(): string;
        static createRandom(arg0: number): $RandomSource;
        setMetaData(arg0: string): void;
        isIgnoreEntities(): boolean;
        setStructurePos(arg0: $BlockPos_): void;
        isPowered(): boolean;
        setPowered(arg0: boolean): void;
        createdBy(arg0: $LivingEntity): void;
        usedBy(arg0: $Player): boolean;
        getMirror(): $Mirror;
        setMirror(arg0: $Mirror_): void;
        setShowAir(arg0: boolean): void;
        detectSize(): boolean;
        getShowAir(): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static AUTHOR_TAG: string;
        static MAX_OFFSET_PER_AXIS: number;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        static MAX_SIZE_PER_AXIS: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get structureLoadable(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeCraftingHolder, $StackedContentsCompatible, $FurnaceTEAccess, $SpecialLogicInventory, $AbstractFurnaceBlockEntityAccess, $Clearable {
        static add(arg0: $Map_<$Item_, number>, arg1: $TagKey_<$Item>, arg2: number): void;
        static add(arg0: $Map_<$Item_, number>, arg1: $ItemLike_, arg2: number): void;
        awardUsedRecipesAndPopExperience(arg0: $ServerPlayer): void;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $AbstractFurnaceBlockEntity): void;
        static invalidateCache(): void;
        setRecipeUsed(arg0: $RecipeHolder_<never>): void;
        getBurnDuration(arg0: $ItemStack_): number;
        getSlotsForFace(arg0: $Direction_): number[];
        awardUsedRecipes(arg0: $Player, arg1: $List_<$ItemStack_>): void;
        getRecipeUsed(): $RecipeHolder<never>;
        handler$fmh000$fabric_transfer_api_v1$setStackSuppressUpdate(arg0: number, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        getRecipesToAwardAndPopExperience(arg0: $ServerLevel, arg1: $Vec3_): $List<$RecipeHolder<never>>;
        /**
         * @deprecated
         */
        static getFuel(): $Map<$Item, number>;
        static isFuel(arg0: $ItemStack_): boolean;
        static buildFuels(arg0: $ObjIntConsumer_<$Either<$Item, $TagKey<$Item>>>): void;
        fillStackedContents(arg0: $StackedContents): void;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        setRecipeUsed(arg0: $Level_, arg1: $ServerPlayer, arg2: $RecipeHolder_<never>): boolean;
        getDataAccess(): $ContainerData;
        getCookingProgress(): number;
        getQuickCheck(): $RecipeManager$CachedCheck<$SingleRecipeInput, $AbstractCookingRecipe>;
        getCookingTotalTime(): number;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $RecipeType_<$AbstractCookingRecipe>);
        get quickCheck(): $RecipeManager$CachedCheck<$SingleRecipeInput, $AbstractCookingRecipe>;
    }
    export class $EnchantingTableBlockEntity extends $BlockEntity implements $Nameable {
        getName(): $Component;
        static bookAnimationTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnchantingTableBlockEntity): void;
        getCustomName(): $Component;
        setCustomName(arg0: $Component_): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        oFlip: number;
        flipA: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        worldPosition: $BlockPos;
        rot: number;
        tRot: number;
        flipT: number;
        oOpen: number;
        time: number;
        oRot: number;
        flip: number;
        open: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $BeehiveBlockEntity extends $BlockEntity {
        isEmpty(): boolean;
        isFull(): boolean;
        getOccupantCount(): number;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BeehiveBlockEntity): void;
        static getHoneyLevel(arg0: $BlockState_): number;
        addOccupant(arg0: $Entity): void;
        isFireNearby(): boolean;
        emptyAllLivingFromHive(arg0: $Player, arg1: $BlockState_, arg2: $BeehiveBlockEntity$BeeReleaseStatus_): void;
        isSedated(): boolean;
        storeBee(arg0: $BeehiveBlockEntity$Occupant_): void;
        static IGNORED_BEE_TAGS: $List<string>;
        worldPosition: $BlockPos;
        level: $Level;
        static MIN_OCCUPATION_TICKS_NECTARLESS: number;
        static MAX_OCCUPANTS: number;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get empty(): boolean;
        get full(): boolean;
        get occupantCount(): number;
        get fireNearby(): boolean;
        get sedated(): boolean;
    }
    export class $TickingBlockEntity {
    }
    export interface $TickingBlockEntity {
        getType(): string;
        tick(): void;
        getPos(): $BlockPos;
        isRemoved(): boolean;
        get type(): string;
        get pos(): $BlockPos;
        get removed(): boolean;
    }
    export class $SpawnerBlockEntity extends $BlockEntity implements $Spawner {
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SpawnerBlockEntity): void;
        static clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SpawnerBlockEntity): void;
        setEntityId(arg0: $EntityType_<never>, arg1: $RandomSource): void;
        getSpawner(): $BaseSpawner;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get spawner(): $BaseSpawner;
    }
    export class $BellBlockEntity extends $BlockEntity {
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BellBlockEntity): void;
        static clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BellBlockEntity): void;
        onHit(arg0: $Direction_): void;
        worldPosition: $BlockPos;
        ticks: number;
        level: $Level;
        clickDirection: $Direction;
        static ATTACHMENTS_NBT_KEY: string;
        shaking: boolean;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $DropperBlockEntity extends $DispenserBlockEntity {
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $SignBlockEntity extends $BlockEntity {
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SignBlockEntity): void;
        getText(arg0: boolean): $SignText;
        setText(arg0: $SignText, arg1: boolean): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        isFacingFrontText(arg0: $Player): boolean;
        getTextLineHeight(): number;
        getBackText(): $SignText;
        updateSignText(arg0: $Player, arg1: boolean, arg2: $List_<$FilteredText_>): void;
        getFrontText(): $SignText;
        getSignInteractionFailedSoundEvent(): $SoundEvent;
        executeClickCommandsIfPresent(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: boolean): boolean;
        isWaxed(): boolean;
        setAllowedPlayerEditor(arg0: $UUID_): void;
        getPlayerWhoMayEdit(): $UUID;
        canExecuteClickCommands(arg0: boolean, arg1: $Player): boolean;
        updateText(arg0: $UnaryOperator_<$SignText>, arg1: boolean): boolean;
        setWaxed(arg0: boolean): boolean;
        getMaxTextLineWidth(): number;
        createDefaultSignText(): $SignText;
        playerIsTooFarAwayToEdit(arg0: $UUID_): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockEntityType_<any>, arg1: $BlockPos_, arg2: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get textLineHeight(): number;
        get backText(): $SignText;
        get frontText(): $SignText;
        get signInteractionFailedSoundEvent(): $SoundEvent;
        set allowedPlayerEditor(value: $UUID_);
        get playerWhoMayEdit(): $UUID;
        get maxTextLineWidth(): number;
    }
    export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem$BlockContainerSingleItem, $SpecialLogicInventory {
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $JukeboxBlockEntity): void;
        getSongPlayer(): $JukeboxSongPlayer;
        popOutTheItem(): void;
        getMaxStackSize(): number;
        fabric_setSuppress(arg0: boolean): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        onSongChanged(): void;
        splitTheItem(arg0: number): $ItemStack;
        tryForcePlaySong(): void;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        setTheItem(arg0: $ItemStack_): void;
        getTheItem(): $ItemStack;
        getComparatorOutput(): number;
        getContainerBlockEntity(): $BlockEntity;
        setSongItemWithoutPlaying(arg0: $ItemStack_): void;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        stillValid(arg0: $Player): boolean;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        removeTheItem(): $ItemStack;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        getMaxStackSize(arg0: $ItemStack_): number;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        getStackInSlot(slot: number): $ItemStack;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        setChanged(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        asContainer(): $Container;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        worldPosition: $BlockPos;
        static SONG_ITEM_TAG_ID: string;
        level: $Level;
        jukeboxSongPlayer: $JukeboxSongPlayer;
        static TICKS_SINCE_SONG_STARTED_TAG_ID: string;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get songPlayer(): $JukeboxSongPlayer;
        get comparatorOutput(): number;
        get containerBlockEntity(): $BlockEntity;
        set songItemWithoutPlaying(value: $ItemStack_);
        get containerSize(): number;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
    }
    export interface $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
        create(arg0: $BlockPos_, arg1: $BlockState_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType$BlockEntitySupplier}.
     */
    export type $BlockEntityType$BlockEntitySupplier_<T> = ((arg0: $BlockPos, arg1: $BlockState) => T);
    export class $TheEndPortalBlockEntity extends $BlockEntity {
        shouldRenderFace(arg0: $Direction_): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BannerPatternLayers$Builder {
        add(arg0: $BannerPatternLayers$Layer_): $BannerPatternLayers$Builder;
        add(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_): $BannerPatternLayers$Builder;
        addAll(arg0: $BannerPatternLayers_): $BannerPatternLayers$Builder;
        build(): $BannerPatternLayers;
        /**
         * @deprecated
         */
        addIfRegistered(arg0: $HolderGetter<$BannerPattern_>, arg1: $ResourceKey_<$BannerPattern>, arg2: $DyeColor_): $BannerPatternLayers$Builder;
        constructor();
    }
    export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        createVibrationUser(): $VibrationSystem$User;
        setLastVibrationFrequency(arg0: number): void;
        getVibrationUser(): $VibrationSystem$User;
        getVibrationData(): $VibrationSystem$Data;
        getLastVibrationFrequency(): number;
        getListener(): $VibrationSystem$Listener;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
    export class $TrialSpawnerBlockEntity extends $BlockEntity implements $Spawner, $TrialSpawner$StateAccessor {
        getState(): $TrialSpawnerState;
        setState(arg0: $Level_, arg1: $TrialSpawnerState_): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getTrialSpawner(): $TrialSpawner;
        markUpdated(): void;
        setEntityId(arg0: $EntityType_<never>, arg1: $RandomSource): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get trialSpawner(): $TrialSpawner;
    }
    export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity implements $DispenserBlockEntityAccessor {
        getRandomSlot(arg0: $RandomSource): number;
        insertItem(arg0: $ItemStack_): $ItemStack;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
        isSpawning(): boolean;
        static triggerCooldown(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $TheEndGatewayBlockEntity): void;
        getPortalPosition(arg0: $ServerLevel, arg1: $BlockPos_): $Vec3;
        getParticleAmount(): number;
        isCoolingDown(): boolean;
        static beamAnimationTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $TheEndGatewayBlockEntity): void;
        getCooldownPercent(arg0: number): number;
        getSpawnPercent(arg0: number): number;
        setExitPosition(arg0: $BlockPos_, arg1: boolean): void;
        static portalTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $TheEndGatewayBlockEntity): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get spawning(): boolean;
        get particleAmount(): number;
        get coolingDown(): boolean;
    }
    export class $FurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BannerPatterns {
        static register(arg0: $BootstrapContext<$BannerPattern_>, arg1: $ResourceKey_<$BannerPattern>): void;
        static bootstrap(arg0: $BootstrapContext<$BannerPattern_>): void;
        static GUSTER: $ResourceKey<$BannerPattern>;
        static STRIPE_BOTTOM: $ResourceKey<$BannerPattern>;
        static GLOBE: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_MIDDLE: $ResourceKey<$BannerPattern>;
        static TRIANGLE_TOP: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_CENTER: $ResourceKey<$BannerPattern>;
        static STRAIGHT_CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_LEFT: $ResourceKey<$BannerPattern>;
        static SKULL: $ResourceKey<$BannerPattern>;
        static RHOMBUS_MIDDLE: $ResourceKey<$BannerPattern>;
        static CIRCLE_MIDDLE: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL: $ResourceKey<$BannerPattern>;
        static GRADIENT: $ResourceKey<$BannerPattern>;
        static FLOW: $ResourceKey<$BannerPattern>;
        static BASE: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_RIGHT: $ResourceKey<$BannerPattern>;
        static CREEPER: $ResourceKey<$BannerPattern>;
        static STRIPE_LEFT: $ResourceKey<$BannerPattern>;
        static BRICKS: $ResourceKey<$BannerPattern>;
        static TRIANGLES_BOTTOM: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_LEFT: $ResourceKey<$BannerPattern>;
        static FLOWER: $ResourceKey<$BannerPattern>;
        static STRIPE_SMALL: $ResourceKey<$BannerPattern>;
        static TRIANGLE_BOTTOM: $ResourceKey<$BannerPattern>;
        static CURLY_BORDER: $ResourceKey<$BannerPattern>;
        static TRIANGLES_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNLEFT: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNRIGHT: $ResourceKey<$BannerPattern>;
        static PIGLIN: $ResourceKey<$BannerPattern>;
        static GRADIENT_UP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT: $ResourceKey<$BannerPattern>;
        static BORDER: $ResourceKey<$BannerPattern>;
        static MOJANG: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL: $ResourceKey<$BannerPattern>;
        static CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_RIGHT: $ResourceKey<$BannerPattern>;
        constructor();
    }
    export class $RandomizableContainerBlockEntity extends $BaseContainerBlockEntity implements $RandomizableContainer {
        setLootTable(arg0: $ResourceKey_<$LootTable>): void;
        setLootTableSeed(arg0: number): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        unpackLootTable(arg0: $Player): void;
        trySaveLootTable(arg0: $CompoundTag_): boolean;
        tryLoadLootTable(arg0: $CompoundTag_): boolean;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $BlastFurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BannerPattern extends $Record {
        translationKey(): string;
        assetId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$BannerPattern>>;
        static DIRECT_CODEC: $Codec<$BannerPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$BannerPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $BannerPattern}.
     */
    export type $BannerPattern_ = RegistryTypes.BannerPattern;
    export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider {
        getDisplayName(): $Component;
        clearContent(): void;
        getRedstoneSignal(): number;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        onBookItemRemove(): void;
        setBook(arg0: $ItemStack_): void;
        setBook(arg0: $ItemStack_, arg1: $Player): void;
        getBook(): $ItemStack;
        setPage(arg0: number): void;
        getPage(): number;
        hasBook(): boolean;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        worldPosition: $BlockPos;
        static NUM_SLOTS: number;
        static DATA_PAGE: number;
        level: $Level;
        book: $ItemStack;
        static ATTACHMENTS_NBT_KEY: string;
        page: number;
        static SLOT_BOOK: number;
        static NUM_DATA: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get displayName(): $Component;
        get redstoneSignal(): number;
    }
    export class $BannerBlockEntity extends $BlockEntity implements $Nameable {
        getName(): $Component;
        getItem(): $ItemStack;
        getCustomName(): $Component;
        fromItem(arg0: $ItemStack_, arg1: $DyeColor_): void;
        getPatterns(): $BannerPatternLayers;
        getBaseColor(): $DyeColor;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        static MAX_PATTERNS: number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_, arg2: $DyeColor_);
        get name(): $Component;
        get item(): $ItemStack;
        get customName(): $Component;
        get patterns(): $BannerPatternLayers;
        get baseColor(): $DyeColor;
        get displayName(): $Component;
    }
    export class $Hopper {
        static SUCK_AABB: $AABB;
    }
    export interface $Hopper extends $Container {
        getLevelX(): number;
        getLevelY(): number;
        getLevelZ(): number;
        getSuckAabb(): $AABB;
        isGridAligned(): boolean;
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get suckAabb(): $AABB;
        get gridAligned(): boolean;
    }
    export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container {
        isEmpty(): boolean;
        count(): number;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        clearContent(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        getMaxStackSize(): number;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        getLastInteractedSlot(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        getStackInSlot(slot: number): $ItemStack;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        setChanged(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        asContainer(): $Container;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        worldPosition: $BlockPos;
        static MAX_BOOKS_IN_STORAGE: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get containerSize(): number;
        get lastInteractedSlot(): number;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ConduitBlockEntity extends $BlockEntity {
        isActive(): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ConduitBlockEntity): void;
        static clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ConduitBlockEntity): void;
        getActiveRotation(arg0: number): number;
        isHunting(): boolean;
        worldPosition: $BlockPos;
        tickCount: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get active(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get hunting(): boolean;
    }
    export class $ContainerOpenersCounter {
        onClose(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        getOpenerCount(): number;
        incrementOpeners(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): void;
        recheckOpeners(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        decrementOpeners(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): void;
        onOpen(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        openerCountChanged(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: number): void;
        isOwnContainer(arg0: $Player): boolean;
        constructor();
        get openerCount(): number;
    }
    export class $JigsawBlockEntity extends $BlockEntity {
        getName(): $ResourceLocation;
        setName(arg0: $ResourceLocation_): void;
        getPool(): $ResourceKey<$StructureTemplatePool>;
        getTarget(): $ResourceLocation;
        setTarget(arg0: $ResourceLocation_): void;
        generate(arg0: $ServerLevel, arg1: number, arg2: boolean): void;
        setSelectionPriority(arg0: number): void;
        getPlacementPriority(): number;
        getSelectionPriority(): number;
        setPlacementPriority(arg0: number): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        setFinalState(arg0: string): void;
        getFinalState(): string;
        getJoint(): $JigsawBlockEntity$JointType;
        setJoint(arg0: $JigsawBlockEntity$JointType_): void;
        setPool(arg0: $ResourceKey_<$StructureTemplatePool>): void;
        static TARGET: string;
        worldPosition: $BlockPos;
        level: $Level;
        static FINAL_STATE: string;
        static SELECTION_PRIORITY: string;
        static POOL: string;
        static PLACEMENT_PRIORITY: string;
        static ATTACHMENTS_NBT_KEY: string;
        static JOINT: string;
        remove: boolean;
        static NAME: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $CalibratedSculkSensorBlockEntity$VibrationUser extends $SculkSensorBlockEntity$VibrationUser {
    }
    export class $BannerPatternLayers$Layer extends $Record {
        pattern(): $Holder<$BannerPattern>;
        color(): $DyeColor;
        description(): $MutableComponent;
        static CODEC: $Codec<$BannerPatternLayers$Layer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers$Layer>;
        constructor(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_);
    }
    export class $DecoratedPotBlockEntity extends $BlockEntity implements $RandomizableContainer, $ContainerSingleItem$BlockContainerSingleItem {
        static createDecoratedPotItem(arg0: $PotDecorations_): $ItemStack;
        getDecorations(): $PotDecorations;
        getPotAsItem(): $ItemStack;
        getDirection(): $Direction;
        setLootTable(arg0: $ResourceKey_<$LootTable>): void;
        setLootTableSeed(arg0: number): void;
        splitTheItem(arg0: number): $ItemStack;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        setFromItem(arg0: $ItemStack_): void;
        wobble(arg0: $DecoratedPotBlockEntity$WobbleStyle_): void;
        setTheItem(arg0: $ItemStack_): void;
        getTheItem(): $ItemStack;
        getContainerBlockEntity(): $BlockEntity;
        unpackLootTable(arg0: $Player): void;
        trySaveLootTable(arg0: $CompoundTag_): boolean;
        tryLoadLootTable(arg0: $CompoundTag_): boolean;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        stillValid(arg0: $Player): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        clearContent(): void;
        removeTheItem(): $ItemStack;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        getStackInSlot(slot: number): $ItemStack;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        setChanged(): void;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        asContainer(): $Container;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        static TAG_SHERDS: string;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        lastWobbleStyle: $DecoratedPotBlockEntity$WobbleStyle;
        static TAG_ITEM: string;
        level: $Level;
        wobbleStartedAtTick: number;
        static ATTACHMENTS_NBT_KEY: string;
        static EVENT_POT_WOBBLES: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get decorations(): $PotDecorations;
        get potAsItem(): $ItemStack;
        get direction(): $Direction;
        set fromItem(value: $ItemStack_);
        get containerBlockEntity(): $BlockEntity;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        static tryGetPlayer(arg0: $Entity): $ServerPlayer;
        getVibrationUser(): $VibrationSystem$User;
        getVibrationData(): $VibrationSystem$Data;
        tryRespond(arg0: $ServerLevel): void;
        tryShriek(arg0: $ServerLevel, arg1: $ServerPlayer): void;
        getListener(): $VibrationSystem$Listener;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
}
