import { $Future } from "@package/java/util/concurrent";
import { $Entity, $ExperienceOrb, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $AdvancementHolder_, $AdvancementHolder, $AdvancementProgress } from "@package/net/minecraft/advancements";
import { $InteractionResult, $InteractionResultHolder, $InteractionHand, $ItemInteractionResult_, $InteractionHand_, $InteractionResult_, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $TriState_, $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ClientInformation, $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $NonNullList, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $EnchantmentInstance } from "@package/net/minecraft/world/item/enchantment";
import { $Connection } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Runnable_ } from "@package/java/lang";
import { $MerchantOffer } from "@package/net/minecraft/world/item/trading";
import { $File, $File_ } from "@package/java/io";
import { $GameType, $GameType_, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player$BedSleepingProblem_, $Player, $Player$BedSleepingProblem } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ServerboundPlayerActionPacket$Action_ } from "@package/net/minecraft/network/protocol/game";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $AbstractVillager } from "@package/net/minecraft/world/entity/npc";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Gui$HeartType_, $Gui$HeartType } from "@package/net/minecraft/client/gui";
import { $DimensionTransition, $DimensionTransition_ } from "@package/net/minecraft/world/level/portal";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/neoforged/neoforge/event/entity/player" {
    export class $PlayerHeartTypeEvent extends $PlayerEvent {
        getType(): $Gui$HeartType;
        setType(arg0: $Gui$HeartType_): void;
        getOriginalType(): $Gui$HeartType;
        constructor(arg0: $Player, arg1: $Gui$HeartType_);
        get originalType(): $Gui$HeartType;
    }
    export class $PlayerContainerEvent extends $PlayerEvent {
        getContainer(): $AbstractContainerMenu;
        constructor(arg0: $Player, arg1: $AbstractContainerMenu);
        get container(): $AbstractContainerMenu;
    }
    export class $ItemTooltipEvent extends $PlayerEvent {
        getContext(): $Item$TooltipContext;
        getFlags(): $TooltipFlag;
        getToolTip(): $List<$Component>;
        getItemStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $Player, arg2: $List_<$Component_>, arg3: $TooltipFlag, arg4: $Item$TooltipContext);
        get context(): $Item$TooltipContext;
        get flags(): $TooltipFlag;
        get toolTip(): $List<$Component>;
        get itemStack(): $ItemStack;
    }
    export class $PlayerEvent extends $LivingEvent {
        constructor(arg0: $Player);
    }
    export class $SweepAttackEvent extends $PlayerEvent implements $ICancellableEvent {
        getTarget(): $Entity;
        setSweeping(arg0: boolean): void;
        setCanceled(arg0: boolean): void;
        isSweeping(): boolean;
        isVanillaSweep(): boolean;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $Entity, arg2: boolean);
        get target(): $Entity;
        get vanillaSweep(): boolean;
    }
    export class $AdvancementEvent$AdvancementEarnEvent extends $AdvancementEvent {
        constructor(arg0: $Player, arg1: $AdvancementHolder_);
    }
    export class $PlayerEvent$ItemCraftedEvent extends $PlayerEvent {
        getInventory(): $Container;
        getCrafting(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $Container);
        get inventory(): $Container;
        get crafting(): $ItemStack;
    }
    export class $ItemFishedEvent extends $PlayerEvent implements $ICancellableEvent {
        getDrops(): $NonNullList<$ItemStack>;
        getRodDamage(): number;
        getHookEntity(): $FishingHook;
        damageRodBy(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $List_<$ItemStack_>, arg1: number, arg2: $FishingHook);
        get drops(): $NonNullList<$ItemStack>;
        get rodDamage(): number;
        get hookEntity(): $FishingHook;
    }
    export class $AttackEntityEvent extends $PlayerEvent implements $ICancellableEvent {
        getTarget(): $Entity;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $Entity);
        get target(): $Entity;
    }
    export class $PlayerEnchantItemEvent extends $PlayerEvent {
        getEnchantedItem(): $ItemStack;
        getEnchantments(): $List<$EnchantmentInstance>;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $List_<$EnchantmentInstance>);
        get enchantedItem(): $ItemStack;
        get enchantments(): $List<$EnchantmentInstance>;
    }
    export class $PlayerWakeUpEvent extends $PlayerEvent {
        updateLevel(): boolean;
        wakeImmediately(): boolean;
        constructor(arg0: $Player, arg1: boolean, arg2: boolean);
    }
    export class $ArrowNockEvent extends $PlayerEvent implements $ICancellableEvent {
        getLevel(): $Level;
        getBow(): $ItemStack;
        getAction(): $InteractionResultHolder<$ItemStack>;
        setAction(arg0: $InteractionResultHolder<$ItemStack_>): void;
        getHand(): $InteractionHand;
        hasAmmo(): boolean;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $InteractionHand_, arg3: $Level_, arg4: boolean);
        get level(): $Level;
        get bow(): $ItemStack;
        get hand(): $InteractionHand;
    }
    export class $PlayerInteractEvent$RightClickItem extends $PlayerInteractEvent implements $ICancellableEvent {
        getCancellationResult(): $InteractionResult;
        setCancellationResult(arg0: $InteractionResult_): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $InteractionHand_);
    }
    export class $CriticalHitEvent extends $PlayerEvent {
        getTarget(): $Entity;
        isVanillaCritical(): boolean;
        setDisableSweep(arg0: boolean): void;
        setCriticalHit(arg0: boolean): void;
        getVanillaMultiplier(): number;
        setDamageMultiplier(arg0: number): void;
        isCriticalHit(): boolean;
        disableSweep(): boolean;
        getDamageMultiplier(): number;
        constructor(arg0: $Player, arg1: $Entity, arg2: number, arg3: boolean);
        get target(): $Entity;
        get vanillaCritical(): boolean;
        get vanillaMultiplier(): number;
    }
    export class $PlayerInteractEvent$LeftClickBlock$Action extends $Enum<$PlayerInteractEvent$LeftClickBlock$Action> {
        static values(): $PlayerInteractEvent$LeftClickBlock$Action[];
        static convert(arg0: $ServerboundPlayerActionPacket$Action_): $PlayerInteractEvent$LeftClickBlock$Action;
        static valueOf(arg0: string): $PlayerInteractEvent$LeftClickBlock$Action;
        static ABORT: $PlayerInteractEvent$LeftClickBlock$Action;
        static STOP: $PlayerInteractEvent$LeftClickBlock$Action;
        static CLIENT_HOLD: $PlayerInteractEvent$LeftClickBlock$Action;
        static START: $PlayerInteractEvent$LeftClickBlock$Action;
    }
    /**
     * Values that may be interpreted as {@link $PlayerInteractEvent$LeftClickBlock$Action}.
     */
    export type $PlayerInteractEvent$LeftClickBlock$Action_ = "start" | "stop" | "abort" | "client_hold";
    export class $PlayerXpEvent$PickupXp extends $PlayerXpEvent implements $ICancellableEvent {
        getOrb(): $ExperienceOrb;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $ExperienceOrb);
        get orb(): $ExperienceOrb;
    }
    export class $PlayerSpawnPhantomsEvent extends $PlayerEvent {
        setResult(arg0: $PlayerSpawnPhantomsEvent$Result_): void;
        getResult(): $PlayerSpawnPhantomsEvent$Result;
        shouldSpawnPhantoms(arg0: $ServerLevel, arg1: $BlockPos_): boolean;
        setPhantomsToSpawn(arg0: number): void;
        getPhantomsToSpawn(): number;
        constructor(arg0: $Player, arg1: number);
    }
    export class $UseItemOnBlockEvent extends $Event implements $ICancellableEvent {
        getLevel(): $Level;
        getCancellationResult(): $ItemInteractionResult;
        getSide(): $LogicalSide;
        setCancellationResult(arg0: $ItemInteractionResult_): void;
        getPos(): $BlockPos;
        getUseOnContext(): $UseOnContext;
        cancelWithResult(arg0: $ItemInteractionResult_): void;
        getUsePhase(): $UseItemOnBlockEvent$UsePhase;
        getItemStack(): $ItemStack;
        getPlayer(): $Player;
        getHand(): $InteractionHand;
        getFace(): $Direction;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $UseOnContext, arg1: $UseItemOnBlockEvent$UsePhase_);
        get level(): $Level;
        get side(): $LogicalSide;
        get pos(): $BlockPos;
        get useOnContext(): $UseOnContext;
        get usePhase(): $UseItemOnBlockEvent$UsePhase;
        get itemStack(): $ItemStack;
        get player(): $Player;
        get hand(): $InteractionHand;
        get face(): $Direction;
    }
    export class $TradeWithVillagerEvent extends $PlayerEvent {
        getMerchantOffer(): $MerchantOffer;
        getAbstractVillager(): $AbstractVillager;
        constructor(arg0: $Player, arg1: $MerchantOffer, arg2: $AbstractVillager);
        get merchantOffer(): $MerchantOffer;
        get abstractVillager(): $AbstractVillager;
    }
    export class $PlayerEvent$LoadFromFile extends $PlayerEvent {
        getPlayerDirectory(): $File;
        getPlayerFile(arg0: string): $File;
        getPlayerUUID(): string;
        constructor(arg0: $Player, arg1: $File_, arg2: string);
        get playerDirectory(): $File;
        get playerUUID(): string;
    }
    export class $ItemEntityPickupEvent$Post extends $ItemEntityPickupEvent {
        getOriginalStack(): $ItemStack;
        getCurrentStack(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemEntity, arg2: $ItemStack_);
        get originalStack(): $ItemStack;
        get currentStack(): $ItemStack;
    }
    export class $ItemEntityPickupEvent$Pre extends $ItemEntityPickupEvent {
        setCanPickup(arg0: $TriState_): void;
        canPickup(): $TriState;
        constructor(arg0: $Player, arg1: $ItemEntity);
    }
    export class $PlayerSetSpawnEvent extends $PlayerEvent implements $ICancellableEvent {
        isForced(): boolean;
        getSpawnLevel(): $ResourceKey<$Level>;
        getNewSpawn(): $BlockPos;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $ResourceKey_<$Level>, arg2: $BlockPos_, arg3: boolean);
        get forced(): boolean;
        get spawnLevel(): $ResourceKey<$Level>;
        get newSpawn(): $BlockPos;
    }
    export class $PlayerEvent$SaveToFile extends $PlayerEvent {
        getPlayerDirectory(): $File;
        getPlayerFile(arg0: string): $File;
        getPlayerUUID(): string;
        constructor(arg0: $Player, arg1: $File_, arg2: string);
        get playerDirectory(): $File;
        get playerUUID(): string;
    }
    export class $PlayerEvent$BreakSpeed extends $PlayerEvent implements $ICancellableEvent {
        getState(): $BlockState;
        getOriginalSpeed(): number;
        setNewSpeed(arg0: number): void;
        getPosition(): ($BlockPos) | undefined;
        getNewSpeed(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $BlockState_, arg2: number, arg3: $BlockPos_);
        get state(): $BlockState;
        get originalSpeed(): number;
        get position(): ($BlockPos) | undefined;
    }
    export class $PlayerRespawnPositionEvent extends $PlayerEvent {
        getDimensionTransition(): $DimensionTransition;
        setDimensionTransition(arg0: $DimensionTransition_): void;
        copyOriginalSpawnPosition(): boolean;
        getOriginalDimensionTransition(): $DimensionTransition;
        setCopyOriginalSpawnPosition(arg0: boolean): void;
        isFromEndFight(): boolean;
        setRespawnLevel(arg0: $ResourceKey_<$Level>): void;
        constructor(arg0: $ServerPlayer, arg1: $DimensionTransition_, arg2: boolean);
        get originalDimensionTransition(): $DimensionTransition;
        get fromEndFight(): boolean;
        set respawnLevel(value: $ResourceKey_<$Level>);
    }
    export class $PlayerContainerEvent$Close extends $PlayerContainerEvent {
        constructor(arg0: $Player, arg1: $AbstractContainerMenu);
    }
    export class $PlayerDestroyItemEvent extends $PlayerEvent {
        getOriginal(): $ItemStack;
        getHand(): $InteractionHand;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $InteractionHand_);
        get original(): $ItemStack;
        get hand(): $InteractionHand;
    }
    export class $ArrowLooseEvent extends $PlayerEvent implements $ICancellableEvent {
        getLevel(): $Level;
        getBow(): $ItemStack;
        setCharge(arg0: number): void;
        getCharge(): number;
        hasAmmo(): boolean;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: number, arg4: boolean);
        get level(): $Level;
        get bow(): $ItemStack;
    }
    export class $PlayerEvent$TabListNameFormat extends $PlayerEvent {
        getDisplayName(): $Component;
        setDisplayName(arg0: $Component_): void;
        constructor(arg0: $Player);
    }
    export class $PlayerEvent$PlayerLoggedOutEvent extends $PlayerEvent {
        constructor(arg0: $Player);
    }
    export class $PlayerEvent$Clone extends $PlayerEvent {
        getOriginal(): $Player;
        isWasDeath(): boolean;
        constructor(arg0: $Player, arg1: $Player, arg2: boolean);
        get original(): $Player;
        get wasDeath(): boolean;
    }
    export class $PlayerInteractEvent$LeftClickBlock extends $PlayerInteractEvent implements $ICancellableEvent {
        setUseBlock(arg0: $TriState_): void;
        getUseBlock(): $TriState;
        getUseItem(): $TriState;
        getAction(): $PlayerInteractEvent$LeftClickBlock$Action;
        setCanceled(arg0: boolean): void;
        setUseItem(arg0: $TriState_): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $BlockPos_, arg2: $Direction_, arg3: $PlayerInteractEvent$LeftClickBlock$Action_);
        get action(): $PlayerInteractEvent$LeftClickBlock$Action;
    }
    export class $PlayerSpawnPhantomsEvent$Result extends $Enum<$PlayerSpawnPhantomsEvent$Result> {
        static values(): $PlayerSpawnPhantomsEvent$Result[];
        static valueOf(arg0: string): $PlayerSpawnPhantomsEvent$Result;
        static DENY: $PlayerSpawnPhantomsEvent$Result;
        static ALLOW: $PlayerSpawnPhantomsEvent$Result;
        static DEFAULT: $PlayerSpawnPhantomsEvent$Result;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSpawnPhantomsEvent$Result}.
     */
    export type $PlayerSpawnPhantomsEvent$Result_ = "allow" | "default" | "deny";
    export class $PlayerEvent$ItemSmeltedEvent extends $PlayerEvent {
        getSmelting(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_);
        get smelting(): $ItemStack;
    }
    export class $PlayerInteractEvent$EntityInteract extends $PlayerInteractEvent implements $ICancellableEvent {
        getTarget(): $Entity;
        getCancellationResult(): $InteractionResult;
        setCancellationResult(arg0: $InteractionResult_): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $Entity);
        get target(): $Entity;
    }
    export class $PlayerInteractEvent$RightClickBlock extends $PlayerInteractEvent implements $ICancellableEvent {
        getCancellationResult(): $InteractionResult;
        setUseBlock(arg0: $TriState_): void;
        getUseBlock(): $TriState;
        getUseItem(): $TriState;
        setCancellationResult(arg0: $InteractionResult_): void;
        setCanceled(arg0: boolean): void;
        getHitVec(): $BlockHitResult;
        setUseItem(arg0: $TriState_): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockPos_, arg3: $BlockHitResult);
        get hitVec(): $BlockHitResult;
    }
    export class $CanContinueSleepingEvent extends $LivingEvent {
        mayContinueSleeping(): boolean;
        getProblem(): $Player$BedSleepingProblem;
        setContinueSleeping(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $Player$BedSleepingProblem_);
        get problem(): $Player$BedSleepingProblem;
        set continueSleeping(value: boolean);
    }
    export class $PlayerEvent$StopTracking extends $PlayerEvent {
        getTarget(): $Entity;
        constructor(arg0: $Player, arg1: $Entity);
        get target(): $Entity;
    }
    export class $PlayerEvent$NameFormat extends $PlayerEvent {
        getUsername(): $Component;
        getDisplayname(): $Component;
        setDisplayname(arg0: $Component_): void;
        constructor(arg0: $Player, arg1: $Component_);
        get username(): $Component;
    }
    export class $PlayerEvent$PlayerLoggedInEvent extends $PlayerEvent {
        constructor(arg0: $Player);
    }
    export class $AnvilRepairEvent extends $PlayerEvent {
        getLeft(): $ItemStack;
        getRight(): $ItemStack;
        getOutput(): $ItemStack;
        setBreakChance(arg0: number): void;
        getBreakChance(): number;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_);
        get left(): $ItemStack;
        get right(): $ItemStack;
        get output(): $ItemStack;
    }
    export class $PermissionsChangedEvent extends $PlayerEvent implements $ICancellableEvent {
        getOldLevel(): number;
        getNewLevel(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ServerPlayer, arg1: number, arg2: number);
        get oldLevel(): number;
        get newLevel(): number;
    }
    export class $PlayerXpEvent$LevelChange extends $PlayerXpEvent implements $ICancellableEvent {
        setLevels(arg0: number): void;
        getLevels(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: number);
    }
    export class $PlayerEvent$PlayerChangeGameModeEvent extends $PlayerEvent implements $ICancellableEvent {
        getNewGameMode(): $GameType;
        setNewGameMode(arg0: $GameType_): void;
        getCurrentGameMode(): $GameType;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $GameType_, arg2: $GameType_);
        get currentGameMode(): $GameType;
    }
    export class $PlayerXpEvent extends $PlayerEvent {
        constructor(arg0: $Player);
    }
    export class $AdvancementEvent$AdvancementProgressEvent extends $AdvancementEvent {
        getAdvancementProgress(): $AdvancementProgress;
        getCriterionName(): string;
        getProgressType(): $AdvancementEvent$AdvancementProgressEvent$ProgressType;
        constructor(arg0: $Player, arg1: $AdvancementHolder_, arg2: $AdvancementProgress, arg3: string, arg4: $AdvancementEvent$AdvancementProgressEvent$ProgressType_);
        get advancementProgress(): $AdvancementProgress;
        get criterionName(): string;
        get progressType(): $AdvancementEvent$AdvancementProgressEvent$ProgressType;
    }
    export class $ItemEntityPickupEvent extends $Event {
        getItemEntity(): $ItemEntity;
        getPlayer(): $Player;
        constructor(arg0: $Player, arg1: $ItemEntity);
        get itemEntity(): $ItemEntity;
        get player(): $Player;
    }
    export class $PlayerNegotiationEvent extends $Event {
        enqueueWork(arg0: $Future<void>): void;
        enqueueWork(arg0: $Runnable_): void;
        getProfile(): $GameProfile;
        getConnection(): $Connection;
        constructor(arg0: $Connection, arg1: $GameProfile, arg2: $List_<$Future<void>>);
        get profile(): $GameProfile;
        get connection(): $Connection;
    }
    export class $CanPlayerSleepEvent extends $PlayerEvent {
        getState(): $BlockState;
        getLevel(): $Level;
        setProblem(arg0: $Player$BedSleepingProblem_): void;
        getPos(): $BlockPos;
        getProblem(): $Player$BedSleepingProblem;
        getVanillaProblem(): $Player$BedSleepingProblem;
        constructor(arg0: $ServerPlayer, arg1: $BlockPos_, arg2: $Player$BedSleepingProblem_);
        get state(): $BlockState;
        get level(): $Level;
        get pos(): $BlockPos;
        get vanillaProblem(): $Player$BedSleepingProblem;
    }
    export class $PlayerInteractEvent extends $PlayerEvent {
        getLevel(): $Level;
        getSide(): $LogicalSide;
        getPos(): $BlockPos;
        getItemStack(): $ItemStack;
        getHand(): $InteractionHand;
        getFace(): $Direction;
        get level(): $Level;
        get side(): $LogicalSide;
        get pos(): $BlockPos;
        get itemStack(): $ItemStack;
        get hand(): $InteractionHand;
        get face(): $Direction;
    }
    export class $PlayerInteractEvent$EntityInteractSpecific extends $PlayerInteractEvent implements $ICancellableEvent {
        getTarget(): $Entity;
        getCancellationResult(): $InteractionResult;
        getLocalPos(): $Vec3;
        setCancellationResult(arg0: $InteractionResult_): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $Entity, arg3: $Vec3_);
        get target(): $Entity;
        get localPos(): $Vec3;
    }
    export class $PlayerEvent$StartTracking extends $PlayerEvent {
        getTarget(): $Entity;
        constructor(arg0: $Player, arg1: $Entity);
        get target(): $Entity;
    }
    export class $PlayerXpEvent$XpChange extends $PlayerXpEvent implements $ICancellableEvent {
        setAmount(arg0: number): void;
        getAmount(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: number);
    }
    export class $AdvancementEvent$AdvancementProgressEvent$ProgressType extends $Enum<$AdvancementEvent$AdvancementProgressEvent$ProgressType> {
        static values(): $AdvancementEvent$AdvancementProgressEvent$ProgressType[];
        static valueOf(arg0: string): $AdvancementEvent$AdvancementProgressEvent$ProgressType;
        static GRANT: $AdvancementEvent$AdvancementProgressEvent$ProgressType;
        static REVOKE: $AdvancementEvent$AdvancementProgressEvent$ProgressType;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementEvent$AdvancementProgressEvent$ProgressType}.
     */
    export type $AdvancementEvent$AdvancementProgressEvent$ProgressType_ = "grant" | "revoke";
    export class $BonemealEvent extends $Event implements $ICancellableEvent {
        getState(): $BlockState;
        getStack(): $ItemStack;
        getLevel(): $Level;
        isValidBonemealTarget(): boolean;
        getPos(): $BlockPos;
        setCanceled(arg0: boolean): void;
        getPlayer(): $Player;
        isSuccessful(): boolean;
        setSuccessful(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $ItemStack_);
        get state(): $BlockState;
        get stack(): $ItemStack;
        get level(): $Level;
        get validBonemealTarget(): boolean;
        get pos(): $BlockPos;
        get player(): $Player;
    }
    export class $PlayerFlyableFallEvent extends $PlayerEvent {
        getMultiplier(): number;
        setMultiplier(arg0: number): void;
        getDistance(): number;
        setDistance(arg0: number): void;
        constructor(arg0: $Player, arg1: number, arg2: number);
    }
    export class $PlayerEvent$HarvestCheck extends $PlayerEvent {
        getLevel(): $BlockGetter;
        getPos(): $BlockPos;
        setCanHarvest(arg0: boolean): void;
        getTargetBlock(): $BlockState;
        canHarvest(): boolean;
        constructor(arg0: $Player, arg1: $BlockState_, arg2: $BlockGetter, arg3: $BlockPos_, arg4: boolean);
        get level(): $BlockGetter;
        get pos(): $BlockPos;
        get targetBlock(): $BlockState;
    }
    export class $ClientInformationUpdatedEvent extends $PlayerEvent {
        getOldInformation(): $ClientInformation;
        getUpdatedInformation(): $ClientInformation;
        constructor(arg0: $ServerPlayer, arg1: $ClientInformation_, arg2: $ClientInformation_);
        get oldInformation(): $ClientInformation;
        get updatedInformation(): $ClientInformation;
    }
    export class $PlayerInteractEvent$LeftClickEmpty extends $PlayerInteractEvent {
        constructor(arg0: $Player);
    }
    export class $PlayerInteractEvent$RightClickEmpty extends $PlayerInteractEvent {
        constructor(arg0: $Player, arg1: $InteractionHand_);
    }
    export class $PlayerContainerEvent$Open extends $PlayerContainerEvent {
        constructor(arg0: $Player, arg1: $AbstractContainerMenu);
    }
    export class $PlayerEvent$PlayerRespawnEvent extends $PlayerEvent {
        isEndConquered(): boolean;
        constructor(arg0: $Player, arg1: boolean);
        get endConquered(): boolean;
    }
    export class $UseItemOnBlockEvent$UsePhase extends $Enum<$UseItemOnBlockEvent$UsePhase> {
        static values(): $UseItemOnBlockEvent$UsePhase[];
        static valueOf(arg0: string): $UseItemOnBlockEvent$UsePhase;
        static ITEM_BEFORE_BLOCK: $UseItemOnBlockEvent$UsePhase;
        static BLOCK: $UseItemOnBlockEvent$UsePhase;
        static ITEM_AFTER_BLOCK: $UseItemOnBlockEvent$UsePhase;
    }
    /**
     * Values that may be interpreted as {@link $UseItemOnBlockEvent$UsePhase}.
     */
    export type $UseItemOnBlockEvent$UsePhase_ = "item_before_block" | "block" | "item_after_block";
    export class $AdvancementEvent extends $PlayerEvent {
        getAdvancement(): $AdvancementHolder;
        constructor(arg0: $Player, arg1: $AdvancementHolder_);
        get advancement(): $AdvancementHolder;
    }
    export class $PlayerEvent$PlayerChangedDimensionEvent extends $PlayerEvent {
        getFrom(): $ResourceKey<$Level>;
        getTo(): $ResourceKey<$Level>;
        constructor(arg0: $Player, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>);
        get from(): $ResourceKey<$Level>;
        get to(): $ResourceKey<$Level>;
    }
}
