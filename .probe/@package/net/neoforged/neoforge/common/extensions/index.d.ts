import { $RecipeType_, $Recipe, $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $EquipmentSlot_, $EquipmentSlot, $LivingEntity, $Mob, $MobCategory, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType_, $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $InteractionResult, $MenuProvider, $InteractionHand_ } from "@package/net/minecraft/world";
import { $DecimalFormat } from "@package/java/text";
import { $TriState, $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $PacketSendListener, $Connection, $RegistryFriendlyByteBuf, $PacketListener, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $DataComponentType, $DataComponentType_, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $IBlockStateExtensionMixin, $IBlockExtensionMixin } from "@package/net/fabricmc/fabric/mixin/block";
import { $SoundAction, $ItemAbility_, $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $IWithData } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $IContainerFactory_ } from "@package/net/neoforged/neoforge/network";
import { $Item, $Item$Properties, $Item$TooltipContext, $TooltipFlag, $ItemStack_, $ItemStack, $ArmorMaterial$Layer } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $TextColor, $TextColor_, $Component } from "@package/net/minecraft/network/chat";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $ConfigurationTask$Type_ } from "@package/net/minecraft/server/network";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ModelDataManager, $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $RailShape, $RailShape_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $SoundType, $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $Transformation } from "@package/com/mojang/math";
import { $Boat, $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";
import { $HitResult, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $FabricItem } from "@package/net/fabricmc/fabric/api/item/v1";
import { $ItemCapability, $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $Vector3f, $Vector4f } from "@package/org/joml";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $TagsProvider$TagAppender, $IntrinsicHolderTagsProvider$IntrinsicTagAppender } from "@package/net/minecraft/data/tags";
import { $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $AttributeModifier$Operation_, $AttributeModifier_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Set_, $Map, $OptionalInt, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $FabricBlockState, $FabricBlock } from "@package/net/fabricmc/fabric/api/block/v1";
import { $IntFunction_, $Supplier_, $Consumer_, $BiConsumer_, $BiPredicate_, $BiFunction_ } from "@package/java/util/function";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerPlayer$RespawnPosAngle, $ServerChunkCache, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enchantment, $EnchantmentInstance, $Enchantment_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Iterable_, $Runnable_ } from "@package/java/lang";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $ChunkPos, $BlockGetter, $SignalGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagBuilder, $TagEntry, $TagKey_ } from "@package/net/minecraft/tags";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $FluidState, $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $ItemAttributeModifiers, $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $FoodProperties } from "@package/net/minecraft/world/food";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamEncoder_, $StreamDecoder_ } from "@package/net/minecraft/network/codec";
import { $TriConsumer_ } from "@package/org/apache/commons/lang3/function";

declare module "@package/net/neoforged/neoforge/common/extensions" {
    export class $IServerCommonPacketListenerExtension {
    }
    export interface $IServerCommonPacketListenerExtension extends $ICommonPacketListener {
        send(arg0: $CustomPacketPayload_): void;
        send(arg0: $Packet<never>, arg1: $PacketSendListener): void;
        send(arg0: $CustomPacketPayload_, arg1: $PacketSendListener): void;
    }
    export class $IEnchantmentExtension {
    }
    export interface $IEnchantmentExtension {
    }
    export class $ILevelExtension {
        static TRANSLATION_PREFIX: string;
    }
    export interface $ILevelExtension {
        getDescription(): $Component;
        increaseMaxEntityRadius(arg0: number): number;
        getPartEntities(): $Collection<$PartEntity<never>>;
        getMaxEntityRadius(): number;
        getDescriptionKey(): string;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): T;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity): T;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_): T;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: C): T;
        invalidateCapabilities(arg0: $ChunkPos): void;
        invalidateCapabilities(arg0: $BlockPos_): void;
        getModelDataManager(): $ModelDataManager;
        get description(): $Component;
        get partEntities(): $Collection<$PartEntity<never>>;
        get maxEntityRadius(): number;
        get descriptionKey(): string;
        get modelDataManager(): $ModelDataManager;
    }
    export class $IPackResourcesExtension {
    }
    export interface $IPackResourcesExtension {
        isHidden(): boolean;
        get hidden(): boolean;
    }
    export class $IAttributeExtension {
        static isNullOrAddition(arg0: $AttributeModifier$Operation_): boolean;
        static FORMAT: $DecimalFormat;
    }
    export interface $IAttributeExtension {
        getBaseId(): $ResourceLocation;
        getMergedStyle(arg0: boolean): $TextColor;
        toValueComponent(arg0: $AttributeModifier$Operation_, arg1: number, arg2: $TooltipFlag): $MutableComponent;
        getDebugInfo(arg0: $AttributeModifier_, arg1: $TooltipFlag): $Component;
        toComponent(arg0: $AttributeModifier_, arg1: $TooltipFlag): $MutableComponent;
        toBaseComponent(arg0: number, arg1: number, arg2: boolean, arg3: $TooltipFlag): $MutableComponent;
        get baseId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IAttributeExtension}.
     */
    export type $IAttributeExtension_ = ((arg0: boolean) => $TextColor_);
    export class $IItemPropertiesExtensions {
    }
    export interface $IItemPropertiesExtensions {
        component<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): $Item$Properties;
    }
    export class $IBlockExtension {
    }
    export interface $IBlockExtension extends $FabricBlock, $IBlockExtensionMixin {
        isEmpty(arg0: $BlockState_): boolean;
        rotate(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $Rotation_): $BlockState;
        shouldHideAdjacentFluidFace(arg0: $BlockState_, arg1: $Direction_, arg2: $FluidState): boolean;
        getCloneItemStack(arg0: $BlockState_, arg1: $HitResult, arg2: $LevelReader, arg3: $BlockPos_, arg4: $Player): $ItemStack;
        onBlockExploded(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Explosion): void;
        canConnectRedstone(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): void;
        getLightEmission(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        isSlimeBlock(arg0: $BlockState_): boolean;
        getAppearance(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_, arg5: $BlockPos_): $BlockState;
        isFireSource(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Direction_): boolean;
        getWeakChanges(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getFireSpreadSpeed(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        canHarvestBlock(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Player): boolean;
        isFlammable(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        onCaughtFire(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_, arg4: $LivingEntity): void;
        onNeighborChange(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): void;
        isStickyBlock(arg0: $BlockState_): boolean;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $Direction_): boolean;
        canBeHydrated(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $FluidState, arg4: $BlockPos_): boolean;
        canEntityDestroy(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Entity): boolean;
        getRespawnPosition(arg0: $BlockState_, arg1: $EntityType_<never>, arg2: $LevelReader, arg3: $BlockPos_, arg4: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        canSustainPlant(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_): $TriState;
        ignitedByLava(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        isPortalFrame(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        getFlammability(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        isConduitFrame(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        getBlockPathType(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob): $PathType;
        getMapColor(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $MapColor): $MapColor;
        addLandingEffects(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockState_, arg4: $LivingEntity, arg5: number): boolean;
        getSoundType(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): $SoundType;
        getFriction(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): number;
        isScaffolding(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        setBedOccupied(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $LivingEntity, arg4: boolean): void;
        getBedDirection(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): $Direction;
        collisionExtendsVertically(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Entity): boolean;
        getPistonPushReaction(arg0: $BlockState_): $PushReaction;
        isBed(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        onTreeGrow(arg0: $BlockState_, arg1: $LevelReader, arg2: $BiConsumer_<$BlockPos, $BlockState>, arg3: $RandomSource, arg4: $BlockPos_, arg5: $TreeConfiguration): boolean;
        canStickTo(arg0: $BlockState_, arg1: $BlockState_): boolean;
        isFertile(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        getExpDrop(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockEntity, arg4: $Entity, arg5: $ItemStack_): number;
        isBurning(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        isLadder(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        addRunningEffects(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): boolean;
        getStateAtViewpoint(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Vec3_): $BlockState;
        hasDynamicLightEmission(arg0: $BlockState_): boolean;
        getBeaconColorMultiplier(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): number;
        getExplosionResistance(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): number;
        getEnchantPowerBonus(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): number;
        shouldCheckWeakPower(arg0: $BlockState_, arg1: $SignalGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        shouldDisplayFluidOverlay(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $FluidState): boolean;
        getToolModifiedState(arg0: $BlockState_, arg1: $UseOnContext, arg2: $ItemAbility_, arg3: boolean): $BlockState;
        supportsExternalFaceHiding(arg0: $BlockState_): boolean;
        getBubbleColumnDirection(arg0: $BlockState_): $BubbleColumnDirection;
        getAdjacentBlockPathType(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: $PathType_): $PathType;
        onDestroyedByPlayer(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: boolean, arg5: $FluidState): boolean;
        onDestroyedByPushReaction(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_, arg4: $FluidState): void;
        canDropFromExplosion(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): boolean;
        makesOpenTrapdoorAboveClimbable(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockState_): boolean;
    }
    export class $IHolderExtension<T> {
    }
    export interface $IHolderExtension<T> extends $IWithData<T> {
        getKey(): $ResourceKey<T>;
        getDelegate(): $Holder<T>;
        unwrapLookup(): $HolderLookup$RegistryLookup<T>;
        get key(): $ResourceKey<T>;
        get delegate(): $Holder<T>;
    }
    export class $IAbstractMinecartExtension {
        static DEFAULT_AIR_DRAG: number;
        static DEFAULT_MAX_SPEED_AIR_VERTICAL: number;
        static DEFAULT_MAX_SPEED_AIR_LATERAL: number;
    }
    export interface $IAbstractMinecartExtension {
        getComparatorLevel(): number;
        canBeRidden(): boolean;
        setCanUseRail(arg0: boolean): void;
        moveMinecartOnRail(arg0: $BlockPos_): void;
        getSlopeAdjustment(): number;
        isPoweredCart(): boolean;
        canUseRail(): boolean;
        getDragAir(): number;
        setDragAir(arg0: number): void;
        setCurrentCartSpeedCapOnRail(arg0: number): void;
        getCurrentCartSpeedCapOnRail(): number;
        setMaxSpeedAirVertical(arg0: number): void;
        getMaxSpeedAirLateral(): number;
        shouldDoRailFunctions(): boolean;
        setMaxSpeedAirLateral(arg0: number): void;
        getMaxCartSpeedOnRail(): number;
        getCurrentRailPosition(): $BlockPos;
        getMaxSpeedAirVertical(): number;
        getMaxSpeedWithRail(): number;
        get comparatorLevel(): number;
        get slopeAdjustment(): number;
        get poweredCart(): boolean;
        get maxCartSpeedOnRail(): number;
        get currentRailPosition(): $BlockPos;
        get maxSpeedWithRail(): number;
    }
    export class $IPacketFlowExtension {
    }
    export interface $IPacketFlowExtension {
        self(): $PacketFlow;
        isServerbound(): boolean;
        isClientbound(): boolean;
        getReceptionSide(): $LogicalSide;
        get serverbound(): boolean;
        get clientbound(): boolean;
        get receptionSide(): $LogicalSide;
    }
    export class $IBaseRailBlockExtension {
    }
    export interface $IBaseRailBlockExtension {
        canMakeSlopes(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        getRailMaxSpeed(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $AbstractMinecart): number;
        isFlexibleRail(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        onMinecartPass(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $AbstractMinecart): void;
        isValidRailShape(arg0: $RailShape_): boolean;
        getRailDirection(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $AbstractMinecart): $RailShape;
    }
    export class $IDispensibleContainerItemExtension {
    }
    export interface $IDispensibleContainerItemExtension {
        emptyContents(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockHitResult, arg4: $ItemStack_): boolean;
    }
    export class $ITagBuilderExtension {
    }
    export interface $ITagBuilderExtension {
        /**
         * @deprecated
         */
        remove(arg0: $TagEntry, arg1: string): $TagBuilder;
        /**
         * @deprecated
         */
        removeElement(arg0: $ResourceLocation_, arg1: string): $TagBuilder;
        removeElement(arg0: $ResourceLocation_): $TagBuilder;
        /**
         * @deprecated
         */
        removeTag(arg0: $ResourceLocation_, arg1: string): $TagBuilder;
        removeTag(arg0: $ResourceLocation_): $TagBuilder;
        getRawBuilder(): $TagBuilder;
        get rawBuilder(): $TagBuilder;
    }
    export class $IEntityExtension {
    }
    export interface $IEntityExtension extends $INBTSerializable<$CompoundTag> {
        revive(): void;
        getPickedResult(arg0: $HitResult): $ItemStack;
        isInFluidType(arg0: $FluidType_): boolean;
        isInFluidType(): boolean;
        isInFluidType(arg0: $FluidState): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>, arg1: boolean): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>): boolean;
        captureDrops(arg0: $Collection_<$ItemEntity>): $Collection<$ItemEntity>;
        captureDrops(): $Collection<$ItemEntity>;
        getFluidTypeHeight(arg0: $FluidType_): number;
        canFluidExtinguish(arg0: $FluidType_): boolean;
        canStartSwimming(): boolean;
        getClassification(arg0: boolean): $MobCategory;
        isMultipartEntity(): boolean;
        /**
         * @deprecated
         */
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        onAddedToLevel(): void;
        onRemovedFromLevel(): void;
        isEyeInFluidType(arg0: $FluidType_): boolean;
        isPushedByFluid(arg0: $FluidType_): boolean;
        getEyeInFluidType(): $FluidType;
        canSwimInFluidType(arg0: $FluidType_): boolean;
        shouldRiderSit(): boolean;
        canRiderInteract(): boolean;
        isAddedToLevel(): boolean;
        sendPairingData(arg0: $ServerPlayer, arg1: $Consumer_<$CustomPacketPayload>): void;
        getPersistentData(): $CompoundTag;
        /**
         * @deprecated
         */
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getMaxHeightFluidType(): $FluidType;
        getSoundFromFluidType(arg0: $FluidType_, arg1: $SoundAction): $SoundEvent;
        canBeRiddenUnderFluidType(arg0: $FluidType_, arg1: $Entity): boolean;
        getFluidMotionScale(arg0: $FluidType_): number;
        canHydrateInFluidType(arg0: $FluidType_): boolean;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        copyAttachmentsFrom(arg0: $Entity, arg1: boolean): void;
        getFluidFallDistanceModifier(arg0: $FluidType_): number;
        getParts(): $PartEntity<never>[];
        canTrample(arg0: $BlockState_, arg1: $BlockPos_, arg2: number): boolean;
        get multipartEntity(): boolean;
        get addedToLevel(): boolean;
        get persistentData(): $CompoundTag;
        get maxHeightFluidType(): $FluidType;
        get parts(): $PartEntity<never>[];
    }
    export class $IClientCommonPacketListenerExtension {
    }
    export interface $IClientCommonPacketListenerExtension extends $ICommonPacketListener {
        send(arg0: $CustomPacketPayload_): void;
        disconnect(arg0: $Component_): void;
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $IAdvancementBuilderExtension {
    }
    export interface $IAdvancementBuilderExtension {
        save(arg0: $Consumer_<$AdvancementHolder>, arg1: $ResourceLocation_, arg2: $ExistingFileHelper): $AdvancementHolder;
    }
    export class $IOwnedSpawner {
    }
    export interface $IOwnedSpawner {
        getOwner(): $Either<$BlockEntity, $Entity>;
        get owner(): $Either<$BlockEntity, $Entity>;
    }
    /**
     * Values that may be interpreted as {@link $IOwnedSpawner}.
     */
    export type $IOwnedSpawner_ = (() => $Either<$BlockEntity, $Entity>);
    export class $IMobEffectExtension {
    }
    export interface $IMobEffectExtension {
        getSortOrder(arg0: $MobEffectInstance): number;
        fillEffectCures(arg0: $Set_<$EffectCure>, arg1: $MobEffectInstance): void;
    }
    export class $IFluidExtension {
    }
    export interface $IFluidExtension {
        move(arg0: $FluidState, arg1: $LivingEntity, arg2: $Vec3_, arg3: number): boolean;
        getBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: boolean): $PathType;
        getFluidType(): $FluidType;
        canExtinguish(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        canHydrate(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        getExplosionResistance(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): number;
        getAdjacentBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: $PathType_): $PathType;
        canConvertToSource(arg0: $FluidState, arg1: $Level_, arg2: $BlockPos_): boolean;
        supportsBoating(arg0: $FluidState, arg1: $Boat): boolean;
        get fluidType(): $FluidType;
    }
    /**
     * Values that may be interpreted as {@link $IFluidExtension}.
     */
    export type $IFluidExtension_ = (() => $FluidType_);
    export class $IHolderLookupProviderExtension {
    }
    export interface $IHolderLookupProviderExtension {
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
    }
    export class $IRecipeOutputExtension {
    }
    export interface $IRecipeOutputExtension {
        accept(arg0: $ResourceLocation_, arg1: $Recipe<never>, arg2: $AdvancementHolder_, ...arg3: $ICondition[]): void;
        withConditions(...arg0: $ICondition[]): $RecipeOutput;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeOutputExtension}.
     */
    export type $IRecipeOutputExtension_ = ((arg0: $ResourceLocation, arg1: $Recipe<never>, arg2: $AdvancementHolder, arg3: $ICondition[]) => void);
    export class $ILevelReaderExtension {
    }
    export interface $ILevelReaderExtension {
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        isAreaLoaded(arg0: $BlockPos_, arg1: number): boolean;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
    }
    export class $IServerConfigurationPacketListenerExtension {
    }
    export interface $IServerConfigurationPacketListenerExtension extends $IServerCommonPacketListenerExtension {
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
    }
    export class $IItemExtension {
    }
    export interface $IItemExtension extends $FabricItem {
        createEntity(arg0: $Level_, arg1: $Entity, arg2: $ItemStack_): $Entity;
        getSweepHitBox(arg0: $ItemStack_, arg1: $Player, arg2: $Entity): $AABB;
        getCraftingRemainingItem(arg0: $ItemStack_): $ItemStack;
        hasCraftingRemainingItem(arg0: $ItemStack_): boolean;
        canGrindstoneRepair(arg0: $ItemStack_): boolean;
        getEnchantmentLevel(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): number;
        getEnchantmentValue(arg0: $ItemStack_): number;
        canFitInsideContainerItems(arg0: $ItemStack_): boolean;
        shouldCauseBlockBreakReset(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        supportsEnchantment(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): boolean;
        isDamaged(arg0: $ItemStack_): boolean;
        damageItem<T extends $LivingEntity>(arg0: $ItemStack_, arg1: number, arg2: T, arg3: $Consumer_<$Item>): number;
        setDamage(arg0: $ItemStack_, arg1: number): void;
        canEquip(arg0: $ItemStack_, arg1: $EquipmentSlot_, arg2: $LivingEntity): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        getEquipmentSlot(arg0: $ItemStack_): $EquipmentSlot;
        /**
         * @deprecated
         */
        onEntitySwing(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
        onEntitySwing(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $InteractionHand_): boolean;
        canElytraFly(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
        canContinueUsing(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        elytraFlightTick(arg0: $ItemStack_, arg1: $LivingEntity, arg2: number): boolean;
        canPerformAction(arg0: $ItemStack_, arg1: $ItemAbility_): boolean;
        onStopUsing(arg0: $ItemStack_, arg1: $LivingEntity, arg2: number): void;
        canDisableShield(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $LivingEntity): boolean;
        getFoodProperties(arg0: $ItemStack_, arg1: $LivingEntity): $FoodProperties;
        canWalkOnPowderedSnow(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
        makesPiglinsNeutral(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
        modifyReturnValue$eam000$fabric_item_api_v1$shouldCauseReequipAnimation(arg0: boolean, arg1: $ItemStack_, arg2: $ItemStack_, arg3: boolean): boolean;
        handler$fan000$connector$redirectIsPiglinCurrency(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        handler$eah000$fabric_item_api_v1$getEquipmentSlot(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        getDamage(arg0: $ItemStack_): number;
        handler$eam000$fabric_item_api_v1$shouldCauseBlockBreakReset(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $CallbackInfoReturnable<any>): void;
        onDestroyed(arg0: $ItemEntity, arg1: $DamageSource_): void;
        getMaxDamage(arg0: $ItemStack_): number;
        handler$eah000$fabric_item_api_v1$getCraftingRemainingItem(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        handler$eah000$fabric_item_api_v1$hasCraftingRemainingItem(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        getDefaultAttributeModifiers(arg0: $ItemStack_): $ItemAttributeModifiers;
        shouldCauseReequipAnimation(arg0: $ItemStack_, arg1: $ItemStack_, arg2: boolean): boolean;
        isNotReplaceableByPickAction(arg0: $ItemStack_, arg1: $Player, arg2: number): boolean;
        canBeHurtBy(arg0: $ItemStack_, arg1: $DamageSource_): boolean;
        applyEnchantments(arg0: $ItemStack_, arg1: $List_<$EnchantmentInstance>): $ItemStack;
        hasCustomEntity(arg0: $ItemStack_): boolean;
        isPiglinCurrency(arg0: $ItemStack_): boolean;
        getBurnTime(arg0: $ItemStack_, arg1: $RecipeType_<never>): number;
        onItemUseFirst(arg0: $ItemStack_, arg1: $UseOnContext): $InteractionResult;
        onAnimalArmorTick(arg0: $ItemStack_, arg1: $Level_, arg2: $Mob): void;
        getCreatorModId(arg0: $ItemStack_): string;
        getAllEnchantments(arg0: $ItemStack_, arg1: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        isRepairable(arg0: $ItemStack_): boolean;
        isDamageable(arg0: $ItemStack_): boolean;
        onLeftClickEntity(arg0: $ItemStack_, arg1: $Player, arg2: $Entity): boolean;
        getXpRepairRatio(arg0: $ItemStack_): number;
        getEntityLifespan(arg0: $ItemStack_, arg1: $Level_): number;
        getHighlightTip(arg0: $ItemStack_, arg1: $Component_): $Component;
        doesSneakBypassUse(arg0: $ItemStack_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): boolean;
        isPrimaryItemFor(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): boolean;
        onEntityItemUpdate(arg0: $ItemStack_, arg1: $ItemEntity): boolean;
        onDroppedByPlayer(arg0: $ItemStack_, arg1: $Player): boolean;
        isEnderMask(arg0: $ItemStack_, arg1: $Player, arg2: $EnderMan): boolean;
        isBookEnchantable(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getArmorTexture(arg0: $ItemStack_, arg1: $Entity, arg2: $EquipmentSlot_, arg3: $ArmorMaterial$Layer, arg4: boolean): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IItemExtension}.
     */
    export type $IItemExtension_ = ((arg0: $ItemStack) => boolean);
    export class $IDataComponentMapBuilderExtensions {
    }
    export interface $IDataComponentMapBuilderExtensions {
        set<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): $DataComponentMap$Builder;
    }
    export class $IDataComponentHolderExtension {
    }
    export interface $IDataComponentHolderExtension {
        get<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        getOrDefault<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): T;
        has(arg0: $Supplier_<$DataComponentType<never>>): boolean;
        addToTooltip<T extends $TooltipProvider>(arg0: $DataComponentType_<T>, arg1: $Item$TooltipContext, arg2: $Consumer_<$Component>, arg3: $TooltipFlag): void;
        addToTooltip<T extends $TooltipProvider>(arg0: $Supplier_<$DataComponentType<T>>, arg1: $Item$TooltipContext, arg2: $Consumer_<$Component>, arg3: $TooltipFlag): void;
    }
    export class $IBlockEntityExtension {
    }
    export interface $IBlockEntityExtension {
        onLoad(): void;
        getModelData(): $ModelData;
        onDataPacket(arg0: $Connection, arg1: $ClientboundBlockEntityDataPacket, arg2: $HolderLookup$Provider): void;
        onChunkUnloaded(): void;
        handleUpdateTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getPersistentData(): $CompoundTag;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        invalidateCapabilities(): void;
        requestModelDataUpdate(): void;
        get modelData(): $ModelData;
        get persistentData(): $CompoundTag;
    }
    /**
     * Values that may be interpreted as {@link $IBlockEntityExtension}.
     */
    export type $IBlockEntityExtension_ = (() => $CompoundTag_);
    export class $IItemStackExtension {
    }
    export interface $IItemStackExtension {
        getSweepHitBox(arg0: $Player, arg1: $Entity): $AABB;
        getCapability<T>(arg0: $ItemCapability<T, void>): T;
        getCapability<T, C>(arg0: $ItemCapability<T, C>, arg1: C): T;
        getCraftingRemainingItem(): $ItemStack;
        hasCraftingRemainingItem(): boolean;
        canGrindstoneRepair(): boolean;
        getEnchantmentLevel(arg0: $Holder_<$Enchantment>): number;
        getEnchantmentValue(): number;
        canFitInsideContainerItems(): boolean;
        shouldCauseBlockBreakReset(arg0: $ItemStack_): boolean;
        supportsEnchantment(arg0: $Holder_<$Enchantment>): boolean;
        canEquip(arg0: $EquipmentSlot_, arg1: $LivingEntity): boolean;
        getEquipmentSlot(): $EquipmentSlot;
        /**
         * @deprecated
         */
        onEntitySwing(arg0: $LivingEntity): boolean;
        onEntitySwing(arg0: $LivingEntity, arg1: $InteractionHand_): boolean;
        canElytraFly(arg0: $LivingEntity): boolean;
        elytraFlightTick(arg0: $LivingEntity, arg1: number): boolean;
        canPerformAction(arg0: $ItemAbility_): boolean;
        onStopUsing(arg0: $LivingEntity, arg1: number): void;
        canDisableShield(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $LivingEntity): boolean;
        getFoodProperties(arg0: $LivingEntity): $FoodProperties;
        canWalkOnPowderedSnow(arg0: $LivingEntity): boolean;
        makesPiglinsNeutral(arg0: $LivingEntity): boolean;
        onDestroyed(arg0: $ItemEntity, arg1: $DamageSource_): void;
        isNotReplaceableByPickAction(arg0: $Player, arg1: number): boolean;
        isPiglinCurrency(): boolean;
        getBurnTime(arg0: $RecipeType_<never>): number;
        onItemUseFirst(arg0: $UseOnContext): $InteractionResult;
        onAnimalArmorTick(arg0: $Level_, arg1: $Mob): void;
        getAllEnchantments(arg0: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        isRepairable(): boolean;
        getXpRepairRatio(): number;
        getEntityLifespan(arg0: $Level_): number;
        getHighlightTip(arg0: $Component_): $Component;
        doesSneakBypassUse(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Player): boolean;
        isPrimaryItemFor(arg0: $Holder_<$Enchantment>): boolean;
        onEntityItemUpdate(arg0: $ItemEntity): boolean;
        onDroppedByPlayer(arg0: $Player): boolean;
        isEnderMask(arg0: $Player, arg1: $EnderMan): boolean;
        isBookEnchantable(arg0: $ItemStack_): boolean;
        getAttributeModifiers(): $ItemAttributeModifiers;
        handler$cfl000$fabric_entity_events_v1$canElytraFly(arg0: $LivingEntity, arg1: $CallbackInfoReturnable<any>): void;
        get craftingRemainingItem(): $ItemStack;
        get enchantmentValue(): number;
        get equipmentSlot(): $EquipmentSlot;
        get piglinCurrency(): boolean;
        get repairable(): boolean;
        get xpRepairRatio(): number;
        get attributeModifiers(): $ItemAttributeModifiers;
    }
    export class $IBoatExtension {
    }
    export interface $IBoatExtension {
        canBoatInFluid(arg0: $FluidState): boolean;
        canBoatInFluid(arg0: $FluidType_): boolean;
    }
    export class $IFriendlyByteBufExtension {
    }
    export interface $IFriendlyByteBufExtension {
        writeByte(arg0: number): $FriendlyByteBuf;
        writeMap<K, V>(arg0: $Map_<K, V>, arg1: $StreamEncoder_<$FriendlyByteBuf, K>, arg2: $TriConsumer_<$FriendlyByteBuf, K, V>): void;
        readArray<T>(arg0: $IntFunction_<T[]>, arg1: $StreamDecoder_<$FriendlyByteBuf, T>): T[];
        readMap<K, V>(arg0: $StreamDecoder_<$FriendlyByteBuf, K>, arg1: $BiFunction_<$FriendlyByteBuf, K, V>): $Map<K, V>;
        writeArray<T>(arg0: T[], arg1: $StreamEncoder_<$FriendlyByteBuf, T>): $FriendlyByteBuf;
        writeObjectCollection<T>(arg0: $Collection_<T>, arg1: $BiConsumer_<T, $FriendlyByteBuf>): void;
    }
    export class $IPlayerListExtension {
    }
    export interface $IPlayerListExtension {
        self(): $PlayerList;
        broadcast(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ResourceKey_<$Level>, arg5: $CustomPacketPayload_): void;
        broadcast(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $ResourceKey_<$Level>, arg6: $CustomPacketPayload_): void;
        broadcastAll(arg0: $CustomPacketPayload_): void;
        broadcastAll(arg0: $CustomPacketPayload_, arg1: $ResourceKey_<$Level>): void;
    }
    export class $ITagAppenderExtension<T> {
    }
    export interface $ITagAppenderExtension<T> {
        remove(arg0: $TagKey_<T>, ...arg1: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceLocation_, ...arg1: $ResourceLocation_[]): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceKey_<T>, ...arg1: $ResourceKey_<T>[]): $TagsProvider$TagAppender<T>;
        remove(arg0: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceLocation_): $TagsProvider$TagAppender<T>;
        replace(arg0: boolean): $TagsProvider$TagAppender<T>;
        replace(): $TagsProvider$TagAppender<T>;
        addTags(...arg0: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        addOptionalTag(arg0: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        addOptionalTags(...arg0: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
    }
    export class $IFluidStateExtension {
    }
    export interface $IFluidStateExtension {
        move(arg0: $LivingEntity, arg1: $Vec3_, arg2: number): boolean;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: boolean): $PathType;
        getFluidType(): $FluidType;
        canExtinguish(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        canHydrate(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockPos_): boolean;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        canConvertToSource(arg0: $Level_, arg1: $BlockPos_): boolean;
        supportsBoating(arg0: $Boat): boolean;
        get fluidType(): $FluidType;
    }
    export class $ILivingEntityExtension {
    }
    export interface $ILivingEntityExtension extends $IEntityExtension {
        self(): $LivingEntity;
        onDamageTaken(arg0: $DamageContainer): void;
        moveInFluid(arg0: $FluidState, arg1: $Vec3_, arg2: number): boolean;
        sinkInFluid(arg0: $FluidType_): void;
        jumpInFluid(arg0: $FluidType_): void;
        canSwimInFluidType(arg0: $FluidType_): boolean;
        canDrownInFluidType(arg0: $FluidType_): boolean;
    }
    export class $IPlayerExtension {
    }
    export interface $IPlayerExtension {
        isFakePlayer(): boolean;
        isCloseEnough(arg0: $Entity, arg1: number): boolean;
        handler$fgf000$create_hypertube$createHypertube$mayFly(arg0: $CallbackInfoReturnable<any>): void;
        openMenu(arg0: $MenuProvider, arg1: $Consumer_<$RegistryFriendlyByteBuf>): $OptionalInt;
        openMenu(arg0: $MenuProvider, arg1: $BlockPos_): $OptionalInt;
        mayFly(): boolean;
        get fakePlayer(): boolean;
    }
    export class $IServerGamePacketListenerExtension {
    }
    export interface $IServerGamePacketListenerExtension extends $IServerCommonPacketListenerExtension {
        sendBundled(...arg0: $CustomPacketPayload_[]): void;
        sendBundled(arg0: $Iterable_<$CustomPacketPayload>): void;
    }
    export class $IHolderSetExtension<T> {
    }
    export interface $IHolderSetExtension<T> {
        serializationType(): $IHolderSetExtension$SerializationType;
        addInvalidationListener(arg0: $Runnable_): void;
    }
    export class $IServerChunkCacheExtension {
    }
    export interface $IServerChunkCacheExtension {
        self(): $ServerChunkCache;
        broadcast(arg0: $Entity, arg1: $CustomPacketPayload_): void;
        broadcastAndSend(arg0: $Entity, arg1: $CustomPacketPayload_): void;
    }
    export class $ICommonPacketListener {
    }
    export interface $ICommonPacketListener extends $PacketListener {
        getConnection(): $Connection;
        send(arg0: $Packet<never>): void;
        send(arg0: $CustomPacketPayload_): void;
        disconnect(arg0: $Component_): void;
        hasChannel(arg0: $ResourceLocation_): boolean;
        hasChannel(arg0: $CustomPacketPayload$Type_<never>): boolean;
        hasChannel(arg0: $CustomPacketPayload_): boolean;
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        getConnectionType(): $ConnectionType;
        get connection(): $Connection;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        get connectionType(): $ConnectionType;
    }
    export class $IBlockGetterExtension {
    }
    export interface $IBlockGetterExtension {
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getModelData(arg0: $BlockPos_): $ModelData;
    }
    export class $IIntrinsicHolderTagAppenderExtension<T> {
    }
    export interface $IIntrinsicHolderTagAppenderExtension<T> extends $ITagAppenderExtension<T> {
        remove(arg0: $ResourceKey_<T>, ...arg1: $ResourceKey_<T>[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: $ResourceKey_<T>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: T, ...arg1: T[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        replace(arg0: boolean): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        getKey(arg0: T): $ResourceKey<T>;
        addTags(...arg0: $TagKey_<T>[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        replace(): $TagsProvider$TagAppender<T>;
    }
    /**
     * Values that may be interpreted as {@link $IIntrinsicHolderTagAppenderExtension}.
     */
    export type $IIntrinsicHolderTagAppenderExtension_<T> = ((arg0: T) => $ResourceKey_<T>);
    export class $IBlockStateExtension {
    }
    export interface $IBlockStateExtension extends $IBlockStateExtensionMixin, $FabricBlockState {
        isEmpty(): boolean;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Rotation_): $BlockState;
        shouldHideAdjacentFluidFace(arg0: $Direction_, arg1: $FluidState): boolean;
        getCloneItemStack(arg0: $HitResult, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): $ItemStack;
        onBlockExploded(arg0: $Level_, arg1: $BlockPos_, arg2: $Explosion): void;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): void;
        getLightEmission(arg0: $BlockGetter, arg1: $BlockPos_): number;
        isSlimeBlock(): boolean;
        getAppearance(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_, arg4: $BlockPos_): $BlockState;
        isFireSource(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getWeakChanges(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        canHarvestBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Player): boolean;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        onCaughtFire(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $LivingEntity): void;
        onNeighborChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): void;
        isStickyBlock(): boolean;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        canBeHydrated(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockPos_): boolean;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        getRespawnPosition(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_, arg3: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        ignitedByLava(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        isPortalFrame(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isConduitFrame(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob): $PathType;
        addLandingEffects(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $LivingEntity, arg4: number): boolean;
        getSoundType(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): $SoundType;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): number;
        isScaffolding(arg0: $LivingEntity): boolean;
        setBedOccupied(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: boolean): void;
        getBedDirection(arg0: $LevelReader, arg1: $BlockPos_): $Direction;
        collisionExtendsVertically(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        handler$zjg000$fabric_rendering_fluids_v1$shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $CallbackInfoReturnable<any>): void;
        isBed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        onTreeGrow(arg0: $LevelReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $TreeConfiguration): boolean;
        canStickTo(arg0: $BlockState_): boolean;
        isFertile(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getExpDrop(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $Entity, arg4: $ItemStack_): number;
        isBurning(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        isLadder(arg0: $LevelReader, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        addRunningEffects(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): boolean;
        getStateAtViewpoint(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Vec3_): $BlockState;
        hasDynamicLightEmission(): boolean;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        getEnchantPowerBonus(arg0: $LevelReader, arg1: $BlockPos_): number;
        shouldCheckWeakPower(arg0: $SignalGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        getToolModifiedState(arg0: $UseOnContext, arg1: $ItemAbility_, arg2: boolean): $BlockState;
        canRedstoneConnectTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        supportsExternalFaceHiding(): boolean;
        getBubbleColumnDirection(): $BubbleColumnDirection;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        onDestroyedByPlayer(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: boolean, arg4: $FluidState): boolean;
        onDestroyedByPushReaction(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $FluidState): void;
        canDropFromExplosion(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): boolean;
        get empty(): boolean;
        get slimeBlock(): boolean;
        get stickyBlock(): boolean;
        get bubbleColumnDirection(): $BubbleColumnDirection;
    }
    export class $ITransformationExtension {
    }
    export interface $ITransformationExtension {
        isIdentity(): boolean;
        rotateTransform(arg0: $Direction_): $Direction;
        applyOrigin(arg0: $Vector3f): $Transformation;
        transformPosition(arg0: $Vector4f): void;
        transformNormal(arg0: $Vector3f): void;
        blockCornerToCenter(): $Transformation;
        blockCenterToCorner(): $Transformation;
        get identity(): boolean;
    }
    export class $IBucketPickupExtension {
    }
    export interface $IBucketPickupExtension {
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
    }
    export class $ICommandSourceStackExtension {
    }
    export interface $ICommandSourceStackExtension {
        getRecipeManager(): $RecipeManager;
        getScoreboard(): $Scoreboard;
        getAdvancement(arg0: $ResourceLocation_): $AdvancementHolder;
        getUnsidedLevel(): $Level;
        get recipeManager(): $RecipeManager;
        get scoreboard(): $Scoreboard;
        get unsidedLevel(): $Level;
    }
    export class $IBlockAndTintGetterExtension {
    }
    export interface $IBlockAndTintGetterExtension {
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
    }
    export class $IHolderSetExtension$SerializationType extends $Enum<$IHolderSetExtension$SerializationType> {
        static values(): $IHolderSetExtension$SerializationType[];
        static valueOf(arg0: string): $IHolderSetExtension$SerializationType;
        static STRING: $IHolderSetExtension$SerializationType;
        static UNKNOWN: $IHolderSetExtension$SerializationType;
        static OBJECT: $IHolderSetExtension$SerializationType;
        static LIST: $IHolderSetExtension$SerializationType;
    }
    /**
     * Values that may be interpreted as {@link $IHolderSetExtension$SerializationType}.
     */
    export type $IHolderSetExtension$SerializationType_ = "unknown" | "string" | "list" | "object";
    export class $IMenuTypeExtension<T> {
        static create<T extends $AbstractContainerMenu>(arg0: $IContainerFactory_<T>): $MenuType<T>;
    }
    export interface $IMenuTypeExtension<T> {
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
    }
    /**
     * Values that may be interpreted as {@link $IMenuTypeExtension}.
     */
    export type $IMenuTypeExtension_<T> = ((arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf) => T);
}
