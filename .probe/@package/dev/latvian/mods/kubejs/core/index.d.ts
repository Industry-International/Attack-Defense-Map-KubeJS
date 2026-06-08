import { $MinecraftServer } from "@package/net/minecraft/server";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder, $Ingredient, $Ingredient_, $RecipeSerializer, $RecipeHolder_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $EquipmentSlot_, $EntityType, $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $KeyMapping, $Minecraft } from "@package/net/minecraft/client";
import { $IoSupplier, $IoSupplier_ } from "@package/net/minecraft/server/packs/resources";
import { $ExplosionProperties_, $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_, $ItemPredicate, $ItemBuilder, $ItemStackKey, $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $RandomSource } from "@package/net/minecraft/util";
import { $DisplayInfo, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $ScheduledEvents$ScheduledEvent, $SlotFilter_, $WrappedJS, $ScheduledEvents, $NotificationToastData_, $ScheduledEvents$Callback_, $WithCodec, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { DataComponentTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $SpecialEquality, $ToStringJS } from "@package/dev/latvian/mods/rhino/util";
import { $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ScriptType, $ScriptTypeHolder } from "@package/dev/latvian/mods/kubejs/script";
import { $SizedIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $MutableComponent, $Component_, $ClickEvent_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $Duration_ } from "@package/java/time";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $SoundType_, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $JsonElement } from "@package/com/google/gson";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $AttributeModifier$Operation_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Map, $Set, $UUID, $List, $Map_, $List_ } from "@package/java/util";
import { $EntityArrayList, $PlayerStatsJS, $KubeJSInventoryListener } from "@package/dev/latvian/mods/kubejs/player";
import { $SizedFluidIngredient, $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Consumer_, $Predicate_, $Function, $Supplier } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Registry, $Holder_, $Holder, $Direction } from "@package/net/minecraft/core";
import { $Enchantment, $ItemEnchantments_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $ItemMatch, $FluidMatch, $Replaceable, $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Iterable, $Iterable_, $Record, $Object, $IllegalStateException } from "@package/java/lang";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $InputStream } from "@package/java/io";
import { $Explosion, $ItemLike_, $EntityGetter, $GameRules$Value, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagManager, $TagKey, $TagLoader$EntryWithSource_, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { AbstractClientPlayer, $AbstractClientPlayer, LocalPlayer } from "@package/net/minecraft/client/player";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $BufferedImage } from "@package/java/awt/image";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $EntityPotionEffectsJS, $KubeRayTraceResult } from "@package/dev/latvian/mods/kubejs/entity";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $Stream } from "@package/java/util/stream";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MutableDataComponentHolderFunctions, $ItemComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as mixin from "@package/dev/latvian/mods/kubejs/core/mixin";

declare module "@package/dev/latvian/mods/kubejs/core" {
    export class $EntityKJS {
    }
    export interface $EntityKJS extends $WithPersistentData, $MessageSenderKJS, $ScriptTypeHolder {
        getType(): string;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        rayTrace(distance: number): $KubeRayTraceResult;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        getLevel(): $Level;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        setPosition(block: $LevelBlock): void;
        setPosition(x: number, y: number, z: number): void;
        getScriptType(): $ScriptType;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        getServer(): $MinecraftServer;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, z: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        setMotionX(x: number): void;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        setRotation(yaw: number, pitch: number): void;
        getMotionY(): number;
        getMotionX(): number;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        getMotionZ(): number;
        mergeNbt(tag: $CompoundTag_): $Entity;
        setMotionZ(z: number): void;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         */
        getDistanceSq(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        setMotionY(y: number): void;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Checks if the entity is a water creature.
         */
        isWaterCreature(): boolean;
        /**
         * Checks, whether the entity is part of any team.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(teamName: string): boolean;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        getName(): $Component;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getDisplayName(): $Component;
        getNbt(): $CompoundTag;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         */
        attack(source: $DamageSource_, hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        setX(x: number): void;
        setNbt(nbt: $CompoundTag_): void;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        setZ(z: number): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        setY(y: number): void;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        spawn(): void;
        get type(): string;
        get profile(): $GameProfile;
        get serverPlayer(): boolean;
        get clientPlayer(): boolean;
        get frame(): boolean;
        get level(): $Level;
        get living(): boolean;
        get scriptType(): $ScriptType;
        get username(): string;
        get teamName(): string;
        get player(): boolean;
        get monster(): boolean;
        get server(): $MinecraftServer;
        get block(): $LevelBlock;
        get animal(): boolean;
        get teamId(): string;
        get passengers(): $EntityArrayList;
        get facing(): $Direction;
        get waterCreature(): boolean;
        get ambientCreature(): boolean;
        get peacefulCreature(): boolean;
        get name(): $Component;
        get displayName(): $Component;
        set x(value: number);
        set z(value: number);
        get self(): boolean;
        set y(value: number);
    }
    export class $IngredientSupplierKJS {
    }
    export interface $IngredientSupplierKJS {
        kjs$asIngredient(): $Ingredient;
    }
    export class $FluidStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $FluidStackKJS extends $Replaceable, $SpecialEquality, $WithCodec, $FluidLike, $FluidMatch, $MutableDataComponentHolderFunctions, $RegistryObjectKJS<$Fluid> {
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        kjs$isEmpty(): boolean;
        getCodec(): $Codec<never>;
        kjs$getFluid(): $Fluid;
        kjs$getAmount(): number;
        kjs$self(): $FluidStack;
        kjs$getKey(): $ResourceKey<$Fluid>;
        kjs$getMod(): string;
        kjs$copy(amount: number): $FluidLike;
        kjs$getId(): string;
        kjs$equalsIgnoringCount(stack: $FluidStack_): boolean;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        kjs$getIdLocation(): $ResourceLocation;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        kjs$asHolder(): $Holder<$Fluid>;
        kjs$getRegistry(): $Registry<$Fluid>;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<never>;
    }
    export class $EntityGetterKJS {
    }
    export interface $EntityGetterKJS extends $EntityCollectionKJS {
        self(): $EntityGetter;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
    }
    export class $SizedIngredientKJS {
    }
    export interface $SizedIngredientKJS extends $Replaceable, $IngredientSupplierKJS, $ItemMatch {
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        kjs$asIngredient(): $Ingredient;
        kjs$self(): $SizedIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$toNestedJson(): $JsonElement;
        kjs$toFlatJson(): $JsonElement;
    }
    export class $RegistryObjectKJS<T> {
    }
    export interface $RegistryObjectKJS<T> extends $SpecialEquality {
        specialEquals(o: $Object, shallow: boolean): boolean;
        getKey(): $ResourceKey<T>;
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getId(): string;
        getIdLocation(): $ResourceLocation;
        getRegistryId(): $ResourceKey<$Registry<T>>;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        asHolder(): $Holder<T>;
        getRegistry(): $Registry<T>;
        get key(): $ResourceKey<T>;
        get mod(): string;
        get id(): string;
        get idLocation(): $ResourceLocation;
        get registryId(): $ResourceKey<$Registry<T>>;
        get tagKeys(): $List<$TagKey<T>>;
        get tags(): $List<$ResourceLocation>;
        get registry(): $Registry<T>;
    }
    export class $DiggerItemKJS {
    }
    export interface $DiggerItemKJS {
        kjs$getMineableTag(): $TagKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $DiggerItemKJS}.
     */
    export type $DiggerItemKJS_ = (() => $TagKey_<$Block>);
    export class $EntityCollectionKJS {
    }
    export interface $EntityCollectionKJS {
        getPlayers(): $EntityArrayList;
        getEntities(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        getEntityByNetworkID(id: number): $Entity;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getEntityByUUID(id: $UUID_): $Entity;
        get players(): $EntityArrayList;
        get entities(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
    }
    /**
     * Values that may be interpreted as {@link $EntityCollectionKJS}.
     */
    export type $EntityCollectionKJS_ = (() => $Iterable_<$Entity>);
    export class $CreativeModeTabKJS {
    }
    export interface $CreativeModeTabKJS {
        kjs$setDisplayName(component: $Component_): void;
        kjs$setIcon(icon: $ItemStack_): void;
    }
    export class $WithPersistentData {
    }
    export interface $WithPersistentData extends $MessageSenderKJS {
        getPersistentData(): $CompoundTag;
        get persistentData(): $CompoundTag;
    }
    export class $TagLoaderKJS<T> {
    }
    export interface $TagLoaderKJS<T> {
        kjs$init(resources: $ReloadableServerResourcesKJS, registry: $Registry<T>): void;
        kjs$getRegistry(): $Registry<T>;
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$customTags(kjs$resources: $ReloadableServerResourcesKJS, map: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): void;
    }
    export class $ItemFrameEntityKJS {
    }
    export interface $ItemFrameEntityKJS extends $EntityKJS {
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Gets the item stack corresponding to the item in the item frame.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        get frame(): boolean;
        get item(): $ItemStack;
    }
    export class $BlockProviderKJS {
    }
    export interface $BlockProviderKJS extends $RegistryObjectKJS<$Block> {
        getBlock(): $Block;
        getTypeData(): $Map<string, $Object>;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        get block(): $Block;
        get typeData(): $Map<string, $Object>;
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockProviderKJS}.
     */
    export type $BlockProviderKJS_ = (() => $Block_);
    export class $LivingEntityKJS {
        static KJS_PLAYER_CUSTOM_SPEED: $ResourceLocation;
    }
    export interface $LivingEntityKJS extends $EntityKJS {
        setDefaultMovementSpeed(speed: number): void;
        getDefaultMovementSpeed(): number;
        setMovementSpeedAddition(speed: number): void;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        rayTrace(): $KubeRayTraceResult;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        isLiving(): this is $LivingEntity;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        getOffHandItem(): $ItemStack;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        setOffHandItem(item: $ItemStack_): void;
        isUndead(): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        getHeadArmorItem(): $ItemStack;
        damageEquipment(slot: $EquipmentSlot_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        setMainHandItem(item: $ItemStack_): void;
        setHeadArmorItem(item: $ItemStack_): void;
        getLegsArmorItem(): $ItemStack;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        getReachDistance(): number;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        getChestArmorItem(): $ItemStack;
        setChestArmorItem(item: $ItemStack_): void;
        setLegsArmorItem(item: $ItemStack_): void;
        getPotionEffects(): $EntityPotionEffectsJS;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        getTotalMovementSpeed(): number;
        getMainHandItem(): $ItemStack;
        getFeetArmorItem(): $ItemStack;
        setFeetArmorItem(item: $ItemStack_): void;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        swing(): void;
        swing(hand: $InteractionHand_): void;
        set movementSpeedAddition(value: number);
        set maxHealth(value: number);
        get living(): boolean;
        get undead(): boolean;
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
        get reachDistance(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        get totalMovementSpeed(): number;
    }
    export class $ServerLevelKJS {
    }
    export interface $ServerLevelKJS extends $LevelKJS, $WithPersistentData {
        self(): $EntityGetter;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelKJS}.
     */
    export type $ServerLevelKJS_ = (() => void);
    export class $ClientPacketListenerKJS {
    }
    export interface $ClientPacketListenerKJS {
        kjs$sessionData(): $KubeSessionData;
    }
    export class $TagManagerKJS {
    }
    export interface $TagManagerKJS extends $ReloadableServerResourceHolderKJS {
    }
    export class $MinecraftServerKJS {
    }
    export interface $MinecraftServerKJS extends $WithAttachedData<$MinecraftServer>, $WithPersistentData, $DataSenderKJS, $MinecraftEnvironmentKJS, $EntityCollectionKJS {
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        self(): $MinecraftServer;
        tell(message: $Component_): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        sendData(channel: string, data: $CompoundTag_): void;
        getName(): $Component;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        restoreInventories(): $Map<$UUID, $Map<number, $ItemStack>>;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getOverworld(): $ServerLevel;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get name(): $Component;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get overworld(): $ServerLevel;
    }
    export class $MenuTypeKJS {
    }
    export interface $MenuTypeKJS extends $RegistryObjectKJS<$MenuType<never>> {
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
    }
    export class $DataSenderKJS {
    }
    export interface $DataSenderKJS {
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
    }
    export class $RecipeLikeKJS {
    }
    export interface $RecipeLikeKJS {
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getSerializer(): $RecipeSerializer<never>;
        setGroup(group: string): void;
        getSchema(): $RecipeSchema;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getOrCreateId(): $ResourceLocation;
        getGroup(): string;
        getType(): $ResourceLocation;
        getMod(): string;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get serializer(): $RecipeSerializer<never>;
        get schema(): $RecipeSchema;
        get orCreateId(): $ResourceLocation;
        get type(): $ResourceLocation;
        get mod(): string;
    }
    export class $LevelKJS {
    }
    export interface $LevelKJS extends $WithAttachedData<$Level>, $ScriptTypeHolder, $EntityGetterKJS {
        getSide(): $ScriptType;
        getBlock(pos: $BlockPos_): $LevelBlock;
        getBlock(entity: $BlockEntity): $LevelBlock;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        self(): $EntityGetter;
        tell(message: $Component_): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        getName(): $Component;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        setTime(time: number): void;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        getDimension(): $ResourceLocation;
        createEntity(type: $EntityType_<never>): $Entity;
        spawnEntity(type: $EntityType_<never>, callback: $Consumer_<$Entity>): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        isOverworld(): boolean;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        get side(): $ScriptType;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get name(): $Component;
        set time(value: number);
        get dimension(): $ResourceLocation;
        get overworld(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelKJS}.
     */
    export type $LevelKJS_ = (() => void);
    export class $FluidIngredientKJS {
    }
    export interface $FluidIngredientKJS extends $WithCodec, $FluidMatch {
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        self(): $FluidIngredient;
        withAmount(amount: number): $SizedFluidIngredient;
        get codec(): $Codec<never>;
    }
    export class $WindowKJS$KJSScaledIconProvider extends $Record implements $Supplier<number[]> {
        target(): number;
        original(): $BufferedImage;
        get(): number[];
        constructor(original: $BufferedImage, target: number);
    }
    export class $PlayerSelector {
        static name(name: string): $PlayerSelector;
        static wrap(o: $Object): $PlayerSelector;
        static identity(player: $ServerPlayer): $PlayerSelector;
        static uuid(uuid: $UUID_): $PlayerSelector;
        static fuzzyName(name: string): $PlayerSelector;
        static TYPE_INFO: $TypeInfo;
    }
    export interface $PlayerSelector {
        or(fallback: $PlayerSelector_): $PlayerSelector;
        getPlayer(server: $MinecraftServer): $ServerPlayer;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSelector}.
     */
    export type $PlayerSelector_ = ((server: $MinecraftServer) => $ServerPlayer);
    export class $LocalClientPlayerKJS {
    }
    export interface $LocalClientPlayerKJS extends $ClientPlayerKJS {
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        notify(notification: $NotificationToastData_): void;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        getStats(): $PlayerStatsJS;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        getMinecraft(): $Minecraft;
        set activePostShader(value: $ResourceLocation_);
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        get self(): boolean;
        get minecraft(): $Minecraft;
    }
    /**
     * Values that may be interpreted as {@link $LocalClientPlayerKJS}.
     */
    export type $LocalClientPlayerKJS_ = (() => void);
    export class $WithAttachedData<T> {
    }
    export interface $WithAttachedData<T> extends $MessageSenderKJS {
        getData(): $AttachedData<T>;
        get data(): $AttachedData<T>;
    }
    /**
     * Values that may be interpreted as {@link $WithAttachedData}.
     */
    export type $WithAttachedData_<T> = (() => $AttachedData<T>);
    export class $LazyComponentKJS {
    }
    export interface $LazyComponentKJS extends $Supplier<$Component> {
        get(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $LazyComponentKJS}.
     */
    export type $LazyComponentKJS_ = (() => $Component_);
    export class $CustomIngredientKJS {
    }
    export interface $CustomIngredientKJS extends $ItemPredicate {
        kjs$asIngredient(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        getItems(): $Stream<$ItemStack>;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$canBeUsedForMatching(): boolean;
        get items(): $Stream<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $CustomIngredientKJS}.
     */
    export type $CustomIngredientKJS_ = (() => void);
    export class $FluidKJS {
    }
    export interface $FluidKJS extends $RegistryObjectKJS<$Fluid>, $FluidLike {
        isEmpty(): boolean;
        getFluid(): $Fluid;
        getAmount(): number;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getRegistry(): $Registry<$Fluid>;
        get empty(): boolean;
        get fluid(): $Fluid;
        get amount(): number;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get registry(): $Registry<$Fluid>;
    }
    export class $GameRulesKJS {
    }
    export interface $GameRulesKJS {
        kjs$get(rule: string): $GameRules$Value<never>;
        kjs$set(rule: string, value: string): void;
        kjs$getString(rule: string): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$getInt(rule: string): number;
    }
    export class $PlayerKJS {
    }
    export interface $PlayerKJS extends $LivingEntityKJS, $DataSenderKJS, $WithAttachedData<$Player> {
        getInventoryChangeListener(): $KubeJSInventoryListener;
        /**
         * Gets the player's profile.
         */
        getProfile(): $GameProfile;
        /**
         * Gets the player's username.
         */
        getUsername(): string;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        setStatusMessage(message: $Component_): void;
        notify(builder: $NotificationToastData_): void;
        notify(title: $Component_, text: $Component_): void;
        getXp(): number;
        /**
         * Checks if the player is fake.
         */
        isFake(): this is $FakePlayer;
        addXP(xp: number): void;
        give(item: $ItemStack_): void;
        setXp(xp: number): void;
        getMouseItem(): $ItemStack;
        getStages(): $Stages;
        setFoodLevel(foodLevel: number): void;
        addFood(hunger: number, saturation: number): void;
        getFoodLevel(): number;
        addXPLevels(levels: number): void;
        giveInHand(item: $ItemStack_): void;
        setXpLevel(levels: number): void;
        setSaturation(saturation: number): void;
        getXpLevel(): number;
        getInventory(): $InventoryKJS;
        setMouseItem(item: $ItemStack_): void;
        isMiningBlock(): boolean;
        addExhaustion(exhaustion: number): void;
        getStats(): $PlayerStatsJS;
        getSaturation(): number;
        spawn(): void;
        addItemCooldown(item: $Item_, ticks: number): void;
        boostElytraFlight(): void;
        setSelectedSlot(index: number): void;
        getCraftingGrid(): $InventoryKJS;
        sendInventoryUpdate(): void;
        getSelectedSlot(): number;
        getOpenInventory(): $AbstractContainerMenu;
        get inventoryChangeListener(): $KubeJSInventoryListener;
        get profile(): $GameProfile;
        get username(): string;
        get player(): boolean;
        set statusMessage(value: $Component_);
        get fake(): boolean;
        get stages(): $Stages;
        get inventory(): $InventoryKJS;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        get craftingGrid(): $InventoryKJS;
        get openInventory(): $AbstractContainerMenu;
    }
    /**
     * Values that may be interpreted as {@link $PlayerKJS}.
     */
    export type $PlayerKJS_ = (() => void);
    export class $FireworkRocketEntityKJS {
    }
    export interface $FireworkRocketEntityKJS {
        setLifetimeKJS(lifetime: number): void;
        set lifetimeKJS(value: number);
    }
    /**
     * Values that may be interpreted as {@link $FireworkRocketEntityKJS}.
     */
    export type $FireworkRocketEntityKJS_ = ((lifetime: number) => void);
    export class $SizedFluidIngredientKJS {
    }
    export interface $SizedFluidIngredientKJS extends $Replaceable, $FluidMatch {
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        self(): $SizedFluidIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        toNestedJson(): $JsonElement;
        toFlatJson(): $JsonElement;
    }
    export class $RecipeHolderKJS {
    }
    export interface $RecipeHolderKJS extends $RecipeLikeKJS {
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getSerializer(): $RecipeSerializer<never>;
        setGroup(group: string): void;
        getSchema(): $RecipeSchema;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getOrCreateId(): $ResourceLocation;
        getRecipe(): $Recipe<never>;
        getGroup(): string;
        self(): $RecipeHolder<never>;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get serializer(): $RecipeSerializer<never>;
        get schema(): $RecipeSchema;
        get orCreateId(): $ResourceLocation;
        get recipe(): $Recipe<never>;
    }
    export class $ReloadableServerResourcesKJS {
    }
    export interface $ReloadableServerResourcesKJS {
        kjs$getServerScriptManager(): $ServerScriptManager;
        kjs$getTagManager(): $TagManager;
    }
    export class $MessageSenderKJS {
    }
    export interface $MessageSenderKJS {
        /**
         * Sends a message in chat to something.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        getName(): $Component;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getDisplayName(): $Component;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $AdvancementNodeKJS {
    }
    export interface $AdvancementNodeKJS {
        self(): $AdvancementNode;
        getTitle(): $Component;
        getId(): $ResourceLocation;
        getDisplay(): $DisplayInfo;
        getParent(): $AdvancementNode;
        hasDisplay(): boolean;
        getChildren(): $Set<$AdvancementNode>;
        addChild(a: $AdvancementNode): void;
        getDisplayText(): $Component;
        getDescription(): $Component;
        get title(): $Component;
        get id(): $ResourceLocation;
        get display(): $DisplayInfo;
        get parent(): $AdvancementNode;
        get children(): $Set<$AdvancementNode>;
        get displayText(): $Component;
        get description(): $Component;
    }
    export class $BlockBuilderProvider {
    }
    export interface $BlockBuilderProvider {
        getBlockBuilder(): $BlockBuilder;
        get blockBuilder(): $BlockBuilder;
    }
    export class $RecipeInputKJS {
    }
    export interface $RecipeInputKJS {
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
    }
    export class $InventoryKJS {
    }
    export interface $InventoryKJS {
        isEmpty(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        find(match: $ItemPredicate_): number;
        find(): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        count(): number;
        count(match: $ItemPredicate_): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        getWidth(): number;
        getAllItems(): $List<$ItemStack>;
        setChanged(): void;
        asContainer(): $Container;
        getSlotLimit(slot: number): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        get empty(): boolean;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
    }
    export class $BlockKJS {
    }
    export interface $BlockKJS extends $BlockBuilderProvider, $BlockBehaviourKJS, $Replaceable {
        getBlock(): $Block;
        setNameKey(key: string): void;
        getBlockStates(): $List<$BlockState>;
        setBlockBuilder(b: $BlockBuilder): void;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        setRequiresTool(v: boolean): void;
        setLightEmission(v: number): void;
        setDestroySpeed(v: number): void;
        get block(): $Block;
        set nameKey(value: string);
        get blockStates(): $List<$BlockState>;
        set blockBuilder(value: $BlockBuilder);
        set requiresTool(value: boolean);
        set lightEmission(value: number);
        set destroySpeed(value: number);
    }
    export class $EntityTypeKJS {
    }
    export interface $EntityTypeKJS extends $RegistryObjectKJS<$EntityType<never>> {
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
    }
    export class $ServerPlayerKJS {
    }
    export interface $ServerPlayerKJS extends $PlayerKJS {
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        setActivePostShader(id: $ResourceLocation_): void;
        notify(builder: $NotificationToastData_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        setMouseItem(item: $ItemStack_): void;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        getStats(): $PlayerStatsJS;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        getSpawnLocation(): $LevelBlock;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(mode: boolean): void;
        revokeAdvancement(id: $ResourceLocation_): void;
        setSpawnLocation(c: $LevelBlock): void;
        captureInventory(autoRestore: boolean): $Container;
        unlockAdvancement(id: $ResourceLocation_): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(reason: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         */
        kick(): void;
        /**
         * Checks, whether the player is a server operator.
         */
        isOp(): boolean;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         */
        heal(): void;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        setSelectedSlot(index: number): void;
        get serverPlayer(): boolean;
        set activePostShader(value: $ResourceLocation_);
        set mouseItem(value: $ItemStack_);
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        set creativeMode(value: boolean);
        get op(): boolean;
        set selectedSlot(value: number);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayerKJS}.
     */
    export type $ServerPlayerKJS_ = (() => void);
    export class $BlockStateKJS {
    }
    export interface $BlockStateKJS extends $RegistryObjectKJS<$Block>, $Replaceable {
        getKey(): $ResourceKey<$Block>;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        getId(): string;
        getWebIconURL(size: number): $RelativeURL;
        toString(): string;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        setRequiresTool(v: boolean): void;
        setLightEmission(v: number): void;
        setDestroySpeed(v: number): void;
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        set requiresTool(value: boolean);
        set lightEmission(value: number);
        set destroySpeed(value: number);
    }
    export class $MinecraftEnvironmentKJS {
    }
    export interface $MinecraftEnvironmentKJS extends $MessageSenderKJS {
        getScheduledEvents(): $ScheduledEvents;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        get scheduledEvents(): $ScheduledEvents;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftEnvironmentKJS}.
     */
    export type $MinecraftEnvironmentKJS_ = (() => $ScheduledEvents);
    export class $ClientLevelKJS {
    }
    export interface $ClientLevelKJS extends $LevelKJS {
        self(): $EntityGetter;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelKJS}.
     */
    export type $ClientLevelKJS_ = (() => void);
    export class $BlockBehaviourKJS {
    }
    export interface $BlockBehaviourKJS extends $BlockProviderKJS {
        setJumpFactor(v: number): void;
        setFriction(v: number): void;
        setSoundType(v: $SoundType_): void;
        setSpeedFactor(v: number): void;
        setHasCollision(v: boolean): void;
        setExplosionResistance(v: number): void;
        setIsRandomlyTicking(v: boolean): void;
        setRandomTickCallback(callback: $Consumer_<$RandomTickCallback>): void;
        set jumpFactor(value: number);
        set friction(value: number);
        set soundType(value: $SoundType_);
        set speedFactor(value: number);
        set hasCollision(value: boolean);
        set explosionResistance(value: number);
        set isRandomlyTicking(value: boolean);
        set randomTickCallback(value: $Consumer_<$RandomTickCallback>);
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourKJS}.
     */
    export type $BlockBehaviourKJS_ = (() => void);
    export class $ItemKJS {
    }
    export interface $ItemKJS extends $IngredientSupplierKJS, $RegistryObjectKJS<$Item> {
        getItemBuilder(): $ItemBuilder;
        setNameKey(key: string): void;
        getTypeData(): $Map<string, $Object>;
        setItemBuilder(b: $ItemBuilder): void;
        setCanRepair(repairable: boolean): void;
        getItem(): $Item;
        setCraftingRemainder(i: $Item_): void;
        getTypeItemStackKey(): $ItemStackKey;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getRegistry(): $Registry<$Item>;
        set nameKey(value: string);
        get typeData(): $Map<string, $Object>;
        set canRepair(value: boolean);
        get item(): $Item;
        set craftingRemainder(value: $Item_);
        get typeItemStackKey(): $ItemStackKey;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get registry(): $Registry<$Item>;
    }
    export class $ComponentKJS {
    }
    export interface $ComponentKJS extends $Component, $WithCodec, $WrappedJS {
        forEach(action: $Consumer_<$Component>): void;
        asIterable(): $Iterable<$Component>;
        underlined(value: boolean): $MutableComponent;
        underlined(): $MutableComponent;
        strikethrough(): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        obfuscated(): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        /**
         * @deprecated
         */
        rawComponent(): $MutableComponent;
        noColor(): $MutableComponent;
        /**
         * @deprecated
         */
        rawCopy(): $MutableComponent;
        hasSiblings(): boolean;
        clickOpenUrl(url: string): $MutableComponent;
        insertion(s: string): $MutableComponent;
        darkRed(): $MutableComponent;
        hasStyle(): boolean;
        clickCopy(text: string): $MutableComponent;
        darkBlue(): $MutableComponent;
        darkGray(): $MutableComponent;
        darkAqua(): $MutableComponent;
        isEmpty(): boolean;
        lightPurple(): $MutableComponent;
        /**
         * @deprecated
         */
        component(): $Component;
        darkPurple(): $MutableComponent;
        darkGreen(): $MutableComponent;
        clickOpenFile(path: string): $MutableComponent;
        getCodec(): $Codec<never>;
        self(): $MutableComponent;
        clickRunCommand(command: string): $MutableComponent;
        clickChangePage(page: string): $MutableComponent;
        clickSuggestCommand(command: string): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        bold(): $MutableComponent;
        color(c: $KubeColor_): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        italic(): $MutableComponent;
        black(): $MutableComponent;
        gold(): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        gray(): $MutableComponent;
        green(): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        blue(): $MutableComponent;
        hover(s: $Component_): $MutableComponent;
        aqua(): $MutableComponent;
        red(): $MutableComponent;
        white(): $MutableComponent;
        yellow(): $MutableComponent;
        get codec(): $Codec<never>;
    }
    export class $MinecraftClientKJS {
    }
    export interface $MinecraftClientKJS extends $MinecraftEnvironmentKJS {
        self(): $Minecraft;
        tell(message: $Component_): void;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getCurrentScreen(): $Screen;
        setStatusMessage(message: $Component_): void;
        isKeyMappingDown(key: $KeyMapping): boolean;
        setCurrentScreen(gui: $Screen): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getKeyBindPressedTicks(id: string): number;
        getCurrentWorldName(): string;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getTitle(): string;
        isKeyDown(key: number): boolean;
        isKeyDown(keyName: string): boolean;
        setTitle(t: string): void;
        isKeyBindDown(id: string): boolean;
        isShiftDown(): boolean;
        getName(): $Component;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        isCtrlDown(): boolean;
        isAltDown(): boolean;
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get currentWorldName(): string;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get shiftDown(): boolean;
        get name(): $Component;
        get ctrlDown(): boolean;
        get altDown(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftClientKJS}.
     */
    export type $MinecraftClientKJS_ = (() => void);
    export class $WindowKJS {
    }
    export interface $WindowKJS {
        kjs$loadIcons(original: $List_<$IoSupplier_<$InputStream>>): $List<$IoSupplier<$InputStream>>;
    }
    export class $RecipeManagerKJS {
    }
    export interface $RecipeManagerKJS extends $ReloadableServerResourceHolderKJS {
        kjs$getRecipeIdMap(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        kjs$replaceRecipes(byName: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
    }
    export class $ContainerKJS {
    }
    export interface $ContainerKJS extends $InventoryKJS {
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        clear(): void;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        getWidth(): number;
        setChanged(): void;
        asContainer(): $Container;
        getSlotLimit(slot: number): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
    }
    export class $IngredientKJS {
    }
    export interface $IngredientKJS extends $ItemPredicate, $Replaceable, $WithCodec, $ItemMatch {
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        asIngredient(): $Ingredient;
        self(): $Ingredient;
        getStackArray(): $ItemStack[];
        containsAnyTag(): boolean;
        asStack(): $SizedIngredient;
        getTagKey(): $TagKey<$Item>;
        isWildcard(): boolean;
        withCount(count: number): $SizedIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        except(subtracted: $Ingredient_): $Ingredient;
        and(ingredient: $Ingredient_): $Ingredient;
        or(ingredient: $Ingredient_): $Ingredient;
        get codec(): $Codec<never>;
        get stackArray(): $ItemStack[];
        get tagKey(): $TagKey<$Item>;
        get wildcard(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IngredientKJS}.
     */
    export type $IngredientKJS_ = (() => void);
    export class $ItemEntityKJS {
    }
    export interface $ItemEntityKJS extends $EntityKJS {
        /**
         * Gets the item stack corresponding to the item contained in the item entity.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        getLifespan(): number;
        setLifespan(lifespan: number): void;
        setNoDespawn(): void;
        isItem(): this is $ItemEntity;
        setTicksUntilDespawn(ticks: number): void;
        setInfinitePickUpDelay(): void;
        getTicksUntilDespawn(): number;
        setDefaultPickUpDelay(): void;
        setNoPickUpDelay(): void;
    }
    export class $NoMixinException extends $IllegalStateException {
        constructor();
    }
    export class $ReloadableServerResourceHolderKJS {
    }
    export interface $ReloadableServerResourceHolderKJS {
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
        kjs$getResources(): $ReloadableServerResourcesKJS;
    }
    export class $ItemStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $ItemStackKJS extends $SpecialEquality, $WithCodec, $IngredientSupplierKJS, $ToStringJS, $Replaceable, $ItemComponentFunctions, $MutableDataComponentHolderFunctions, $ItemMatch, $RegistryObjectKJS<$Item> {
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $ItemStack_, exact: boolean): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getBlock(): $Block;
        getCodec(): $Codec<$ItemStack>;
        getTypeData(): $Map<string, $Object>;
        asIngredient(): $Ingredient;
        self(): $ItemStack;
        getKey(): $ResourceKey<$Item>;
        toStringJS(): string;
        getMod(): string;
        getId(): string;
        equalsIgnoringCount(stack: $ItemStack_): boolean;
        getEnchantments(): $ItemEnchantments;
        areComponentsEqual(other: $ItemStack_): boolean;
        getHarvestSpeed(block: $LevelBlock): number;
        getHarvestSpeed(): number;
        withCount(c: number): this;
        withCustomName(name: $Component_): this;
        enchant(enchantments: $ItemEnchantments_): this;
        enchant(enchantment: $Holder_<$Enchantment>, level: number): this;
        toItemString(): string;
        toItemString0(dynamicOps: $DynamicOps<$Tag_>): string;
        /**
         * @deprecated
         */
        withChance(chance: number): $ItemStack;
        areItemsEqual(other: $ItemStack_): boolean;
        withLore(lines: $Component_[], styledLines: $Component_[]): this;
        withLore(lines: $Component_[]): this;
        hasEnchantment(enchantment: $Holder_<$Enchantment>, level: number): boolean;
        getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        getIdLocation(): $ResourceLocation;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        asHolder(): $Holder<$Item>;
        getRegistry(): $Registry<$Item>;
        getComponentString(): string;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get block(): $Block;
        get codec(): $Codec<$ItemStack>;
        get typeData(): $Map<string, $Object>;
        get key(): $ResourceKey<$Item>;
        get mod(): string;
        get id(): string;
        get enchantments(): $ItemEnchantments;
        get idLocation(): $ResourceLocation;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get registry(): $Registry<$Item>;
        get componentString(): string;
    }
    export class $ClientPlayerKJS {
    }
    export interface $ClientPlayerKJS extends $PlayerKJS {
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is $AbstractClientPlayer;
        notify(notification: $NotificationToastData_): void;
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        getStats(): $PlayerStatsJS;
        get clientPlayer(): boolean;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
    }
    /**
     * Values that may be interpreted as {@link $ClientPlayerKJS}.
     */
    export type $ClientPlayerKJS_ = (() => void);
}
