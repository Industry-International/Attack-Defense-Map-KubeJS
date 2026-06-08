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
        getDisplayName(): $Component;
        getName(): $Component;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        rayTrace(distance: number): $KubeRayTraceResult;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
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
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        setX(x: number): void;
        setY(y: number): void;
        setZ(z: number): void;
        getNbt(): $CompoundTag;
        setNbt(nbt: $CompoundTag_): void;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         */
        attack(source: $DamageSource_, hp: number): boolean;
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
        spawn(): void;
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
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        setPosition(x: number, y: number, z: number): void;
        setPosition(block: $LevelBlock): void;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        setMotionZ(z: number): void;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        getMotionZ(): number;
        getLevel(): $Level;
        getType(): string;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
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
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        getMotionY(): number;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        getScriptType(): $ScriptType;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        getMotionX(): number;
        setMotionY(y: number): void;
        setMotionX(x: number): void;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        setRotation(yaw: number, pitch: number): void;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        mergeNbt(tag: $CompoundTag_): $Entity;
        getServer(): $MinecraftServer;
        get displayName(): $Component;
        get name(): $Component;
        get living(): boolean;
        get ambientCreature(): boolean;
        get peacefulCreature(): boolean;
        get waterCreature(): boolean;
        get self(): boolean;
        set x(value: number);
        set y(value: number);
        set z(value: number);
        get clientPlayer(): boolean;
        get frame(): boolean;
        get block(): $LevelBlock;
        get level(): $Level;
        get type(): string;
        get profile(): $GameProfile;
        get player(): boolean;
        get teamName(): string;
        get animal(): boolean;
        get scriptType(): $ScriptType;
        get serverPlayer(): boolean;
        get username(): string;
        get monster(): boolean;
        get passengers(): $EntityArrayList;
        get teamId(): string;
        get facing(): $Direction;
        get server(): $MinecraftServer;
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
        getCodec(): $Codec<never>;
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        kjs$isEmpty(): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        kjs$self(): $FluidStack;
        kjs$getKey(): $ResourceKey<$Fluid>;
        kjs$copy(amount: number): $FluidLike;
        kjs$asHolder(): $Holder<$Fluid>;
        kjs$getIdLocation(): $ResourceLocation;
        kjs$getRegistry(): $Registry<$Fluid>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        kjs$getId(): string;
        kjs$getMod(): string;
        kjs$getFluid(): $Fluid;
        kjs$getAmount(): number;
        kjs$equalsIgnoringCount(stack: $FluidStack_): boolean;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<never>;
    }
    export class $EntityGetterKJS {
    }
    export interface $EntityGetterKJS extends $EntityCollectionKJS {
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        self(): $EntityGetter;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
    }
    export class $SizedIngredientKJS {
    }
    export interface $SizedIngredientKJS extends $Replaceable, $IngredientSupplierKJS, $ItemMatch {
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        kjs$toFlatJson(): $JsonElement;
        kjs$toNestedJson(): $JsonElement;
        kjs$self(): $SizedIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$asIngredient(): $Ingredient;
    }
    export class $RegistryObjectKJS<T> {
    }
    export interface $RegistryObjectKJS<T> extends $SpecialEquality {
        specialEquals(o: $Object, shallow: boolean): boolean;
        getKey(): $ResourceKey<T>;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<T>>;
        asHolder(): $Holder<T>;
        getIdLocation(): $ResourceLocation;
        getRegistry(): $Registry<T>;
        getRegistryId(): $ResourceKey<$Registry<T>>;
        getId(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        get key(): $ResourceKey<T>;
        get tags(): $List<$ResourceLocation>;
        get tagKeys(): $List<$TagKey<T>>;
        get idLocation(): $ResourceLocation;
        get registry(): $Registry<T>;
        get registryId(): $ResourceKey<$Registry<T>>;
        get id(): string;
        get mod(): string;
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
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getEntities(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        get entities(): $EntityArrayList;
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
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$getRegistry(): $Registry<T>;
        kjs$init(resources: $ReloadableServerResourcesKJS, registry: $Registry<T>): void;
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
        getKey(): $ResourceKey<$Block>;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getId(): string;
        getBlock(): $Block;
        getTypeData(): $Map<string, $Object>;
        get key(): $ResourceKey<$Block>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get id(): string;
        get block(): $Block;
        get typeData(): $Map<string, $Object>;
    }
    /**
     * Values that may be interpreted as {@link $BlockProviderKJS}.
     */
    export type $BlockProviderKJS_ = (() => $Block_);
    export class $LivingEntityKJS {
        static KJS_PLAYER_CUSTOM_SPEED: $ResourceLocation;
    }
    export interface $LivingEntityKJS extends $EntityKJS {
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        rayTrace(): $KubeRayTraceResult;
        isLiving(): this is $LivingEntity;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        setHeadArmorItem(item: $ItemStack_): void;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        setLegsArmorItem(item: $ItemStack_): void;
        setChestArmorItem(item: $ItemStack_): void;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        setMainHandItem(item: $ItemStack_): void;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        getLegsArmorItem(): $ItemStack;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        getMainHandItem(): $ItemStack;
        damageEquipment(slot: $EquipmentSlot_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        getChestArmorItem(): $ItemStack;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        getPotionEffects(): $EntityPotionEffectsJS;
        getHeadArmorItem(): $ItemStack;
        getFeetArmorItem(): $ItemStack;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        getReachDistance(): number;
        getTotalMovementSpeed(): number;
        setFeetArmorItem(item: $ItemStack_): void;
        setMovementSpeedAddition(speed: number): void;
        getDefaultMovementSpeed(): number;
        setDefaultMovementSpeed(speed: number): void;
        swing(): void;
        swing(hand: $InteractionHand_): void;
        isUndead(): boolean;
        getOffHandItem(): $ItemStack;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        setOffHandItem(item: $ItemStack_): void;
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
        get living(): boolean;
        get potionEffects(): $EntityPotionEffectsJS;
        get reachDistance(): number;
        get totalMovementSpeed(): number;
        set movementSpeedAddition(value: number);
        get undead(): boolean;
        set maxHealth(value: number);
    }
    export class $ServerLevelKJS {
    }
    export interface $ServerLevelKJS extends $LevelKJS, $WithPersistentData {
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        self(): $EntityGetter;
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
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        sendData(channel: string, data: $CompoundTag_): void;
        self(): $MinecraftServer;
        tell(message: $Component_): void;
        restoreInventories(): $Map<$UUID, $Map<number, $ItemStack>>;
        getOverworld(): $ServerLevel;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getName(): $Component;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        get overworld(): $ServerLevel;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get name(): $Component;
    }
    export class $MenuTypeKJS {
    }
    export interface $MenuTypeKJS extends $RegistryObjectKJS<$MenuType<never>> {
        kjs$getRegistry(): $Registry<$MenuType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
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
        getMod(): string;
        getType(): $ResourceLocation;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        getGroup(): string;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getSerializer(): $RecipeSerializer<never>;
        setGroup(group: string): void;
        getOrCreateId(): $ResourceLocation;
        getSchema(): $RecipeSchema;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        get mod(): string;
        get type(): $ResourceLocation;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get serializer(): $RecipeSerializer<never>;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
    }
    export class $LevelKJS {
    }
    export interface $LevelKJS extends $WithAttachedData<$Level>, $ScriptTypeHolder, $EntityGetterKJS {
        getDimension(): $ResourceLocation;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        spawnEntity(type: $EntityType_<never>, callback: $Consumer_<$Entity>): void;
        createEntity(type: $EntityType_<never>): $Entity;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        isOverworld(): boolean;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        setTime(time: number): void;
        self(): $EntityGetter;
        tell(message: $Component_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getName(): $Component;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getBlock(pos: $BlockPos_): $LevelBlock;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        getBlock(entity: $BlockEntity): $LevelBlock;
        getSide(): $ScriptType;
        get dimension(): $ResourceLocation;
        get overworld(): boolean;
        set time(value: number);
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get name(): $Component;
        get side(): $ScriptType;
    }
    /**
     * Values that may be interpreted as {@link $LevelKJS}.
     */
    export type $LevelKJS_ = (() => void);
    export class $FluidIngredientKJS {
    }
    export interface $FluidIngredientKJS extends $WithCodec, $FluidMatch {
        getCodec(): $Codec<never>;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        withAmount(amount: number): $SizedFluidIngredient;
        self(): $FluidIngredient;
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
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        getStats(): $PlayerStatsJS;
        sendData(channel: string, data: $CompoundTag_): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
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
        notify(notification: $NotificationToastData_): void;
        getMinecraft(): $Minecraft;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        set activePostShader(value: $ResourceLocation_);
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
        kjs$canBeUsedForMatching(): boolean;
        kjs$getDisplayStacks(): $ItemStackSet;
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
        getRegistry(): $Registry<$Fluid>;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getFluid(): $Fluid;
        getAmount(): number;
        get empty(): boolean;
        get registry(): $Registry<$Fluid>;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get fluid(): $Fluid;
        get amount(): number;
    }
    export class $GameRulesKJS {
    }
    export interface $GameRulesKJS {
        kjs$getInt(rule: string): number;
        kjs$getString(rule: string): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$set(rule: string, value: string): void;
        kjs$get(rule: string): $GameRules$Value<never>;
    }
    export class $PlayerKJS {
    }
    export interface $PlayerKJS extends $LivingEntityKJS, $DataSenderKJS, $WithAttachedData<$Player> {
        getCraftingGrid(): $InventoryKJS;
        getOpenInventory(): $AbstractContainerMenu;
        setSelectedSlot(index: number): void;
        sendInventoryUpdate(): void;
        boostElytraFlight(): void;
        addItemCooldown(item: $Item_, ticks: number): void;
        getSelectedSlot(): number;
        getInventory(): $InventoryKJS;
        getStages(): $Stages;
        giveInHand(item: $ItemStack_): void;
        getMouseItem(): $ItemStack;
        setSaturation(saturation: number): void;
        addXPLevels(levels: number): void;
        setXpLevel(levels: number): void;
        getFoodLevel(): number;
        setFoodLevel(foodLevel: number): void;
        addExhaustion(exhaustion: number): void;
        getXpLevel(): number;
        isMiningBlock(): boolean;
        setMouseItem(item: $ItemStack_): void;
        getStats(): $PlayerStatsJS;
        addFood(hunger: number, saturation: number): void;
        getSaturation(): number;
        setStatusMessage(message: $Component_): void;
        spawn(): void;
        /**
         * Gets the player's profile.
         */
        getProfile(): $GameProfile;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Gets the player's username.
         */
        getUsername(): string;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        /**
         * Checks if the player is fake.
         */
        isFake(): this is $FakePlayer;
        give(item: $ItemStack_): void;
        addXP(xp: number): void;
        notify(builder: $NotificationToastData_): void;
        notify(title: $Component_, text: $Component_): void;
        getXp(): number;
        setXp(xp: number): void;
        get craftingGrid(): $InventoryKJS;
        get openInventory(): $AbstractContainerMenu;
        get inventory(): $InventoryKJS;
        get stages(): $Stages;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        set statusMessage(value: $Component_);
        get profile(): $GameProfile;
        get player(): boolean;
        get username(): string;
        get inventoryChangeListener(): $KubeJSInventoryListener;
        get fake(): boolean;
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
        toFlatJson(): $JsonElement;
        toNestedJson(): $JsonElement;
        self(): $SizedFluidIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
    }
    export class $RecipeHolderKJS {
    }
    export interface $RecipeHolderKJS extends $RecipeLikeKJS {
        self(): $RecipeHolder<never>;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        getRecipe(): $Recipe<never>;
        getGroup(): string;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getSerializer(): $RecipeSerializer<never>;
        setGroup(group: string): void;
        getOrCreateId(): $ResourceLocation;
        getSchema(): $RecipeSchema;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        get recipe(): $Recipe<never>;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get serializer(): $RecipeSerializer<never>;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
    }
    export class $ReloadableServerResourcesKJS {
    }
    export interface $ReloadableServerResourcesKJS {
        kjs$getTagManager(): $TagManager;
        kjs$getServerScriptManager(): $ServerScriptManager;
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
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getDisplayName(): $Component;
        getName(): $Component;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get displayName(): $Component;
        get name(): $Component;
    }
    export class $AdvancementNodeKJS {
    }
    export interface $AdvancementNodeKJS {
        self(): $AdvancementNode;
        getTitle(): $Component;
        getId(): $ResourceLocation;
        getDescription(): $Component;
        getDisplay(): $DisplayInfo;
        getDisplayText(): $Component;
        getChildren(): $Set<$AdvancementNode>;
        hasDisplay(): boolean;
        addChild(a: $AdvancementNode): void;
        getParent(): $AdvancementNode;
        get title(): $Component;
        get id(): $ResourceLocation;
        get description(): $Component;
        get display(): $DisplayInfo;
        get displayText(): $Component;
        get children(): $Set<$AdvancementNode>;
        get parent(): $AdvancementNode;
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
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        getStackInSlot(slot: number): $ItemStack;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getHeight(): number;
        asContainer(): $Container;
        isEmpty(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
        get height(): number;
        get empty(): boolean;
    }
    export class $BlockKJS {
    }
    export interface $BlockKJS extends $BlockBuilderProvider, $BlockBehaviourKJS, $Replaceable {
        setBlockBuilder(b: $BlockBuilder): void;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getBlock(): $Block;
        setDestroySpeed(v: number): void;
        setLightEmission(v: number): void;
        setRequiresTool(v: boolean): void;
        setNameKey(key: string): void;
        getBlockStates(): $List<$BlockState>;
        set blockBuilder(value: $BlockBuilder);
        get block(): $Block;
        set destroySpeed(value: number);
        set lightEmission(value: number);
        set requiresTool(value: boolean);
        set nameKey(value: string);
        get blockStates(): $List<$BlockState>;
    }
    export class $EntityTypeKJS {
    }
    export interface $EntityTypeKJS extends $RegistryObjectKJS<$EntityType<never>> {
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
    }
    export class $ServerPlayerKJS {
    }
    export interface $ServerPlayerKJS extends $PlayerKJS {
        setSelectedSlot(index: number): void;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        setMouseItem(item: $ItemStack_): void;
        getStats(): $PlayerStatsJS;
        sendData(channel: string, data: $CompoundTag_): void;
        unlockAdvancement(id: $ResourceLocation_): void;
        setSpawnLocation(c: $LevelBlock): void;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        revokeAdvancement(id: $ResourceLocation_): void;
        getSpawnLocation(): $LevelBlock;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(mode: boolean): void;
        captureInventory(autoRestore: boolean): $Container;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         */
        kick(): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(reason: $Component_): void;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         */
        heal(): void;
        /**
         * Checks, whether the player is a server operator.
         */
        isOp(): boolean;
        setActivePostShader(id: $ResourceLocation_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        notify(builder: $NotificationToastData_): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        set selectedSlot(value: number);
        get miningBlock(): boolean;
        set mouseItem(value: $ItemStack_);
        get stats(): $PlayerStatsJS;
        set creativeMode(value: boolean);
        get op(): boolean;
        set activePostShader(value: $ResourceLocation_);
        get serverPlayer(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayerKJS}.
     */
    export type $ServerPlayerKJS_ = (() => void);
    export class $BlockStateKJS {
    }
    export interface $BlockStateKJS extends $RegistryObjectKJS<$Block>, $Replaceable {
        getKey(): $ResourceKey<$Block>;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getWebIconURL(size: number): $RelativeURL;
        toString(): string;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getId(): string;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        setDestroySpeed(v: number): void;
        setLightEmission(v: number): void;
        setRequiresTool(v: boolean): void;
        get key(): $ResourceKey<$Block>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get id(): string;
        set destroySpeed(value: number);
        set lightEmission(value: number);
        set requiresTool(value: boolean);
    }
    export class $MinecraftEnvironmentKJS {
    }
    export interface $MinecraftEnvironmentKJS extends $MessageSenderKJS {
        getScheduledEvents(): $ScheduledEvents;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
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
        setExplosionResistance(v: number): void;
        setRandomTickCallback(callback: $Consumer_<$RandomTickCallback>): void;
        setHasCollision(v: boolean): void;
        setIsRandomlyTicking(v: boolean): void;
        setSpeedFactor(v: number): void;
        setJumpFactor(v: number): void;
        setSoundType(v: $SoundType_): void;
        setFriction(v: number): void;
        set explosionResistance(value: number);
        set randomTickCallback(value: $Consumer_<$RandomTickCallback>);
        set hasCollision(value: boolean);
        set isRandomlyTicking(value: boolean);
        set speedFactor(value: number);
        set jumpFactor(value: number);
        set soundType(value: $SoundType_);
        set friction(value: number);
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourKJS}.
     */
    export type $BlockBehaviourKJS_ = (() => void);
    export class $ItemKJS {
    }
    export interface $ItemKJS extends $IngredientSupplierKJS, $RegistryObjectKJS<$Item> {
        getItem(): $Item;
        getTypeItemStackKey(): $ItemStackKey;
        setCraftingRemainder(i: $Item_): void;
        getRegistry(): $Registry<$Item>;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getItemBuilder(): $ItemBuilder;
        getTypeData(): $Map<string, $Object>;
        setNameKey(key: string): void;
        setCanRepair(repairable: boolean): void;
        setItemBuilder(b: $ItemBuilder): void;
        get item(): $Item;
        get typeItemStackKey(): $ItemStackKey;
        set craftingRemainder(value: $Item_);
        get registry(): $Registry<$Item>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get typeData(): $Map<string, $Object>;
        set nameKey(value: string);
        set canRepair(value: boolean);
    }
    export class $ComponentKJS {
    }
    export interface $ComponentKJS extends $Component, $WithCodec, $WrappedJS {
        getCodec(): $Codec<never>;
        forEach(action: $Consumer_<$Component>): void;
        noColor(): $MutableComponent;
        insertion(s: string): $MutableComponent;
        clickOpenFile(path: string): $MutableComponent;
        darkGray(): $MutableComponent;
        /**
         * @deprecated
         */
        rawCopy(): $MutableComponent;
        clickCopy(text: string): $MutableComponent;
        /**
         * @deprecated
         */
        rawComponent(): $MutableComponent;
        /**
         * @deprecated
         */
        component(): $Component;
        underlined(): $MutableComponent;
        underlined(value: boolean): $MutableComponent;
        clickOpenUrl(url: string): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        obfuscated(): $MutableComponent;
        darkGreen(): $MutableComponent;
        hasSiblings(): boolean;
        hasStyle(): boolean;
        asIterable(): $Iterable<$Component>;
        darkAqua(): $MutableComponent;
        darkRed(): $MutableComponent;
        darkPurple(): $MutableComponent;
        lightPurple(): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        strikethrough(): $MutableComponent;
        darkBlue(): $MutableComponent;
        isEmpty(): boolean;
        self(): $MutableComponent;
        hover(s: $Component_): $MutableComponent;
        blue(): $MutableComponent;
        white(): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        color(c: $KubeColor_): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        bold(): $MutableComponent;
        black(): $MutableComponent;
        aqua(): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        italic(): $MutableComponent;
        green(): $MutableComponent;
        red(): $MutableComponent;
        yellow(): $MutableComponent;
        gray(): $MutableComponent;
        gold(): $MutableComponent;
        clickRunCommand(command: string): $MutableComponent;
        clickChangePage(page: string): $MutableComponent;
        clickSuggestCommand(command: string): $MutableComponent;
        get codec(): $Codec<never>;
    }
    export class $MinecraftClientKJS {
    }
    export interface $MinecraftClientKJS extends $MinecraftEnvironmentKJS {
        self(): $Minecraft;
        tell(message: $Component_): void;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getCurrentScreen(): $Screen;
        getCurrentWorldName(): string;
        getKeyBindPressedTicks(id: string): number;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        setCurrentScreen(gui: $Screen): void;
        isKeyMappingDown(key: $KeyMapping): boolean;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getTitle(): string;
        isAltDown(): boolean;
        isShiftDown(): boolean;
        isCtrlDown(): boolean;
        getName(): $Component;
        setTitle(t: string): void;
        isKeyBindDown(id: string): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        isKeyDown(keyName: string): boolean;
        isKeyDown(key: number): boolean;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get currentWorldName(): string;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get altDown(): boolean;
        get shiftDown(): boolean;
        get ctrlDown(): boolean;
        get name(): $Component;
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
        get mutable(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
    }
    export class $IngredientKJS {
    }
    export interface $IngredientKJS extends $ItemPredicate, $Replaceable, $WithCodec, $ItemMatch {
        getCodec(): $Codec<never>;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        isWildcard(): boolean;
        self(): $Ingredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        withCount(count: number): $SizedIngredient;
        asIngredient(): $Ingredient;
        getTagKey(): $TagKey<$Item>;
        asStack(): $SizedIngredient;
        containsAnyTag(): boolean;
        getStackArray(): $ItemStack[];
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        except(subtracted: $Ingredient_): $Ingredient;
        or(ingredient: $Ingredient_): $Ingredient;
        and(ingredient: $Ingredient_): $Ingredient;
        get codec(): $Codec<never>;
        get wildcard(): boolean;
        get tagKey(): $TagKey<$Item>;
        get stackArray(): $ItemStack[];
    }
    /**
     * Values that may be interpreted as {@link $IngredientKJS}.
     */
    export type $IngredientKJS_ = (() => void);
    export class $ItemEntityKJS {
    }
    export interface $ItemEntityKJS extends $EntityKJS {
        isItem(): this is $ItemEntity;
        /**
         * Gets the item stack corresponding to the item contained in the item entity.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        setNoPickUpDelay(): void;
        getTicksUntilDespawn(): number;
        setDefaultPickUpDelay(): void;
        setTicksUntilDespawn(ticks: number): void;
        setInfinitePickUpDelay(): void;
        setNoDespawn(): void;
        getLifespan(): number;
        setLifespan(lifespan: number): void;
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
        getCodec(): $Codec<$ItemStack>;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $ItemStack_, exact: boolean): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        self(): $ItemStack;
        getKey(): $ResourceKey<$Item>;
        asHolder(): $Holder<$Item>;
        getIdLocation(): $ResourceLocation;
        getRegistry(): $Registry<$Item>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        toItemString0(dynamicOps: $DynamicOps<$Tag_>): string;
        withCount(c: number): this;
        withCustomName(name: $Component_): this;
        hasEnchantment(enchantment: $Holder_<$Enchantment>, level: number): boolean;
        toItemString(): string;
        /**
         * @deprecated
         */
        withChance(chance: number): $ItemStack;
        enchant(enchantments: $ItemEnchantments_): this;
        enchant(enchantment: $Holder_<$Enchantment>, level: number): this;
        withLore(lines: $Component_[], styledLines: $Component_[]): this;
        withLore(lines: $Component_[]): this;
        areItemsEqual(other: $ItemStack_): boolean;
        getId(): string;
        getMod(): string;
        getBlock(): $Block;
        asIngredient(): $Ingredient;
        getTypeData(): $Map<string, $Object>;
        getComponentString(): string;
        toStringJS(): string;
        equalsIgnoringCount(stack: $ItemStack_): boolean;
        getHarvestSpeed(): number;
        getHarvestSpeed(block: $LevelBlock): number;
        getEnchantments(): $ItemEnchantments;
        areComponentsEqual(other: $ItemStack_): boolean;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<$ItemStack>;
        get key(): $ResourceKey<$Item>;
        get idLocation(): $ResourceLocation;
        get registry(): $Registry<$Item>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get id(): string;
        get mod(): string;
        get block(): $Block;
        get typeData(): $Map<string, $Object>;
        get componentString(): string;
        get enchantments(): $ItemEnchantments;
    }
    export class $ClientPlayerKJS {
    }
    export interface $ClientPlayerKJS extends $PlayerKJS {
        isMiningBlock(): boolean;
        getStats(): $PlayerStatsJS;
        sendData(channel: string, data: $CompoundTag_): void;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is $AbstractClientPlayer;
        notify(notification: $NotificationToastData_): void;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        get clientPlayer(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientPlayerKJS}.
     */
    export type $ClientPlayerKJS_ = (() => void);
}
