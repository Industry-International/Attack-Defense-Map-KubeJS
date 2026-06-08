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
        getLevel(): $Level;
        getType(): string;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        rayTrace(distance: number): $KubeRayTraceResult;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        setRotation(yaw: number, pitch: number): void;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        getMotionX(): number;
        getMotionY(): number;
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
        setPosition(block: $LevelBlock): void;
        setPosition(x: number, y: number, z: number): void;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        getMotionZ(): number;
        mergeNbt(tag: $CompoundTag_): $Entity;
        setMotionY(y: number): void;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
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
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        getServer(): $MinecraftServer;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        setMotionZ(z: number): void;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        getScriptType(): $ScriptType;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        setMotionX(x: number): void;
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
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, z: number): void;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        setY(y: number): void;
        setX(x: number): void;
        setZ(z: number): void;
        getNbt(): $CompoundTag;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        spawn(): void;
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
        setNbt(nbt: $CompoundTag_): void;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
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
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
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
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        get level(): $Level;
        get type(): string;
        get living(): boolean;
        get teamName(): string;
        get passengers(): $EntityArrayList;
        get facing(): $Direction;
        get username(): string;
        get animal(): boolean;
        get teamId(): string;
        get player(): boolean;
        get server(): $MinecraftServer;
        get clientPlayer(): boolean;
        get serverPlayer(): boolean;
        get scriptType(): $ScriptType;
        get profile(): $GameProfile;
        get monster(): boolean;
        get frame(): boolean;
        get block(): $LevelBlock;
        set y(value: number);
        set x(value: number);
        set z(value: number);
        get self(): boolean;
        get peacefulCreature(): boolean;
        get ambientCreature(): boolean;
        get waterCreature(): boolean;
        get name(): $Component;
        get displayName(): $Component;
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
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        kjs$getFluid(): $Fluid;
        kjs$getAmount(): number;
        kjs$equalsIgnoringCount(stack: $FluidStack_): boolean;
        kjs$getMod(): string;
        kjs$getRegistry(): $Registry<$Fluid>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$asHolder(): $Holder<$Fluid>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        kjs$getIdLocation(): $ResourceLocation;
        kjs$isEmpty(): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        kjs$self(): $FluidStack;
        kjs$getKey(): $ResourceKey<$Fluid>;
        kjs$getId(): string;
        kjs$copy(amount: number): $FluidLike;
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
        self(): $EntityGetter;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
    }
    export class $SizedIngredientKJS {
    }
    export interface $SizedIngredientKJS extends $Replaceable, $IngredientSupplierKJS, $ItemMatch {
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        kjs$asIngredient(): $Ingredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$self(): $SizedIngredient;
        kjs$toNestedJson(): $JsonElement;
        kjs$toFlatJson(): $JsonElement;
    }
    export class $RegistryObjectKJS<T> {
    }
    export interface $RegistryObjectKJS<T> extends $SpecialEquality {
        getMod(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getRegistry(): $Registry<T>;
        asHolder(): $Holder<T>;
        getTagKeys(): $List<$TagKey<T>>;
        getRegistryId(): $ResourceKey<$Registry<T>>;
        getIdLocation(): $ResourceLocation;
        getTags(): $List<$ResourceLocation>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getKey(): $ResourceKey<T>;
        getId(): string;
        get mod(): string;
        get registry(): $Registry<T>;
        get tagKeys(): $List<$TagKey<T>>;
        get registryId(): $ResourceKey<$Registry<T>>;
        get idLocation(): $ResourceLocation;
        get tags(): $List<$ResourceLocation>;
        get key(): $ResourceKey<T>;
        get id(): string;
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
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getPlayers(): $EntityArrayList;
        getEntities(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
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
        kjs$setIcon(icon: $ItemStack_): void;
        kjs$setDisplayName(component: $Component_): void;
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
        kjs$getRegistry(): $Registry<T>;
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$customTags(kjs$resources: $ReloadableServerResourcesKJS, map: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): void;
        kjs$init(resources: $ReloadableServerResourcesKJS, registry: $Registry<T>): void;
    }
    export class $ItemFrameEntityKJS {
    }
    export interface $ItemFrameEntityKJS extends $EntityKJS {
        /**
         * Gets the item stack corresponding to the item in the item frame.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        get item(): $ItemStack;
        get frame(): boolean;
    }
    export class $BlockProviderKJS {
    }
    export interface $BlockProviderKJS extends $RegistryObjectKJS<$Block> {
        getTypeData(): $Map<string, $Object>;
        getBlock(): $Block;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        get typeData(): $Map<string, $Object>;
        get block(): $Block;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get key(): $ResourceKey<$Block>;
        get id(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockProviderKJS}.
     */
    export type $BlockProviderKJS_ = (() => $Block_);
    export class $LivingEntityKJS {
        static KJS_PLAYER_CUSTOM_SPEED: $ResourceLocation;
    }
    export interface $LivingEntityKJS extends $EntityKJS {
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        setOffHandItem(item: $ItemStack_): void;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        isLiving(): this is $LivingEntity;
        getOffHandItem(): $ItemStack;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        rayTrace(): $KubeRayTraceResult;
        isUndead(): boolean;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        swing(hand: $InteractionHand_): void;
        swing(): void;
        setDefaultMovementSpeed(speed: number): void;
        getDefaultMovementSpeed(): number;
        setMovementSpeedAddition(speed: number): void;
        getFeetArmorItem(): $ItemStack;
        setLegsArmorItem(item: $ItemStack_): void;
        getReachDistance(): number;
        getChestArmorItem(): $ItemStack;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        getLegsArmorItem(): $ItemStack;
        setFeetArmorItem(item: $ItemStack_): void;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        getMainHandItem(): $ItemStack;
        setMainHandItem(item: $ItemStack_): void;
        getHeadArmorItem(): $ItemStack;
        setChestArmorItem(item: $ItemStack_): void;
        getTotalMovementSpeed(): number;
        setHeadArmorItem(item: $ItemStack_): void;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        getPotionEffects(): $EntityPotionEffectsJS;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        set maxHealth(value: number);
        get living(): boolean;
        get undead(): boolean;
        set movementSpeedAddition(value: number);
        get reachDistance(): number;
        get totalMovementSpeed(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
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
        restoreInventories(): $Map<$UUID, $Map<number, $ItemStack>>;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        getOverworld(): $ServerLevel;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        sendData(channel: string, data: $CompoundTag_): void;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        self(): $MinecraftServer;
        tell(message: $Component_): void;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        get overworld(): $ServerLevel;
        get name(): $Component;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
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
        getType(): $ResourceLocation;
        getMod(): string;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        setGroup(group: string): void;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getOrCreateId(): $ResourceLocation;
        getSchema(): $RecipeSchema;
        getGroup(): string;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get type(): $ResourceLocation;
        get mod(): string;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
        get serializer(): $RecipeSerializer<never>;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
    }
    export class $LevelKJS {
    }
    export interface $LevelKJS extends $WithAttachedData<$Level>, $ScriptTypeHolder, $EntityGetterKJS {
        getSide(): $ScriptType;
        getBlock(entity: $BlockEntity): $LevelBlock;
        getBlock(pos: $BlockPos_): $LevelBlock;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        self(): $Level;
        tell(message: $Component_): void;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        setTime(time: number): void;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        isOverworld(): boolean;
        getDimension(): $ResourceLocation;
        spawnEntity(type: $EntityType_<never>, callback: $Consumer_<$Entity>): void;
        createEntity(type: $EntityType_<never>): $Entity;
        get side(): $ScriptType;
        get name(): $Component;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        set time(value: number);
        get overworld(): boolean;
        get dimension(): $ResourceLocation;
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
        getMinecraft(): $Minecraft;
        getStats(): $PlayerStatsJS;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        notify(notification: $NotificationToastData_): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        get minecraft(): $Minecraft;
        get stats(): $PlayerStatsJS;
        get miningBlock(): boolean;
        get self(): boolean;
        set activePostShader(value: $ResourceLocation_);
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
        kjs$getStackArray(): $ItemStack[];
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$canBeUsedForMatching(): boolean;
        kjs$asIngredient(): $Ingredient;
        getItems(): $Stream<$ItemStack>;
        get items(): $Stream<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $CustomIngredientKJS}.
     */
    export type $CustomIngredientKJS_ = (() => void);
    export class $FluidKJS {
    }
    export interface $FluidKJS extends $RegistryObjectKJS<$Fluid>, $FluidLike {
        getFluid(): $Fluid;
        getAmount(): number;
        getRegistry(): $Registry<$Fluid>;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        isEmpty(): boolean;
        get fluid(): $Fluid;
        get amount(): number;
        get registry(): $Registry<$Fluid>;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get empty(): boolean;
    }
    export class $GameRulesKJS {
    }
    export interface $GameRulesKJS {
        kjs$getInt(rule: string): number;
        kjs$getString(rule: string): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$get(rule: string): $GameRules$Value<never>;
        kjs$set(rule: string, value: string): void;
    }
    export class $PlayerKJS {
    }
    export interface $PlayerKJS extends $LivingEntityKJS, $DataSenderKJS, $WithAttachedData<$Player> {
        /**
         * Gets the player's username.
         */
        getUsername(): string;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Gets the player's profile.
         */
        getProfile(): $GameProfile;
        getStats(): $PlayerStatsJS;
        getInventory(): $InventoryKJS;
        isMiningBlock(): boolean;
        giveInHand(item: $ItemStack_): void;
        getMouseItem(): $ItemStack;
        setMouseItem(item: $ItemStack_): void;
        addFood(hunger: number, saturation: number): void;
        getStages(): $Stages;
        getFoodLevel(): number;
        setXpLevel(levels: number): void;
        setFoodLevel(foodLevel: number): void;
        addExhaustion(exhaustion: number): void;
        setSaturation(saturation: number): void;
        getSaturation(): number;
        getXpLevel(): number;
        addXPLevels(levels: number): void;
        spawn(): void;
        /**
         * Checks if the player is fake.
         */
        isFake(): this is $FakePlayer;
        give(item: $ItemStack_): void;
        getXp(): number;
        notify(title: $Component_, text: $Component_): void;
        notify(builder: $NotificationToastData_): void;
        addXP(xp: number): void;
        setXp(xp: number): void;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        addItemCooldown(item: $Item_, ticks: number): void;
        getSelectedSlot(): number;
        sendInventoryUpdate(): void;
        boostElytraFlight(): void;
        getOpenInventory(): $AbstractContainerMenu;
        setSelectedSlot(index: number): void;
        getCraftingGrid(): $InventoryKJS;
        setStatusMessage(message: $Component_): void;
        get username(): string;
        get player(): boolean;
        get profile(): $GameProfile;
        get stats(): $PlayerStatsJS;
        get inventory(): $InventoryKJS;
        get miningBlock(): boolean;
        get stages(): $Stages;
        get fake(): boolean;
        get inventoryChangeListener(): $KubeJSInventoryListener;
        get openInventory(): $AbstractContainerMenu;
        get craftingGrid(): $InventoryKJS;
        set statusMessage(value: $Component_);
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
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        self(): $SizedFluidIngredient;
        toNestedJson(): $JsonElement;
        toFlatJson(): $JsonElement;
    }
    export class $RecipeHolderKJS {
    }
    export interface $RecipeHolderKJS extends $RecipeLikeKJS {
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        self(): $RecipeHolder<never>;
        setGroup(group: string): void;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getOrCreateId(): $ResourceLocation;
        getSchema(): $RecipeSchema;
        getGroup(): string;
        getRecipe(): $Recipe<never>;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getSerializer(): $RecipeSerializer<never>;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
        get recipe(): $Recipe<never>;
        get serializer(): $RecipeSerializer<never>;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
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
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        /**
         * Sends a message in chat to something.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        get name(): $Component;
        get displayName(): $Component;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
    }
    export class $AdvancementNodeKJS {
    }
    export interface $AdvancementNodeKJS {
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
        get title(): $Component;
        get id(): $ResourceLocation;
        get parent(): $AdvancementNode;
        get display(): $DisplayInfo;
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
        findAll(): $List<$ItemStack>;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        self(): $RecipeInput;
    }
    export class $InventoryKJS {
    }
    export interface $InventoryKJS {
        getBlock(level: $Level_): $LevelBlock;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        setChanged(): void;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        getSlotLimit(slot: number): number;
        asContainer(): $Container;
        getSlots(): number;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        isMutable(): boolean;
        getWidth(): number;
        getHeight(): number;
        getStackInSlot(slot: number): $ItemStack;
        count(): number;
        count(match: $ItemPredicate_): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        get allItems(): $List<$ItemStack>;
        get slots(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get empty(): boolean;
    }
    export class $BlockKJS {
    }
    export interface $BlockKJS extends $BlockBuilderProvider, $BlockBehaviourKJS, $Replaceable {
        setNameKey(key: string): void;
        getBlockStates(): $List<$BlockState>;
        getBlock(): $Block;
        setDestroySpeed(v: number): void;
        setRequiresTool(v: boolean): void;
        setLightEmission(v: number): void;
        setBlockBuilder(b: $BlockBuilder): void;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        set nameKey(value: string);
        get blockStates(): $List<$BlockState>;
        get block(): $Block;
        set destroySpeed(value: number);
        set requiresTool(value: boolean);
        set lightEmission(value: number);
        set blockBuilder(value: $BlockBuilder);
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
        unlockAdvancement(id: $ResourceLocation_): void;
        getSpawnLocation(): $LevelBlock;
        setSpawnLocation(c: $LevelBlock): void;
        captureInventory(autoRestore: boolean): $Container;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(mode: boolean): void;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        revokeAdvancement(id: $ResourceLocation_): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
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
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        getStats(): $PlayerStatsJS;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        setMouseItem(item: $ItemStack_): void;
        sendData(channel: string, data: $CompoundTag_): void;
        notify(builder: $NotificationToastData_): void;
        setSelectedSlot(index: number): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        setActivePostShader(id: $ResourceLocation_): void;
        set creativeMode(value: boolean);
        get op(): boolean;
        get serverPlayer(): boolean;
        get stats(): $PlayerStatsJS;
        get miningBlock(): boolean;
        set mouseItem(value: $ItemStack_);
        set selectedSlot(value: number);
        set activePostShader(value: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayerKJS}.
     */
    export type $ServerPlayerKJS_ = (() => void);
    export class $BlockStateKJS {
    }
    export interface $BlockStateKJS extends $RegistryObjectKJS<$Block>, $Replaceable {
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        setDestroySpeed(v: number): void;
        setRequiresTool(v: boolean): void;
        setLightEmission(v: number): void;
        getRegistry(): $Registry<$Block>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        asHolder(): $Holder<$Block>;
        toString(): string;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getWebIconURL(size: number): $RelativeURL;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        set destroySpeed(value: number);
        set requiresTool(value: boolean);
        set lightEmission(value: number);
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get key(): $ResourceKey<$Block>;
        get id(): string;
    }
    export class $MinecraftEnvironmentKJS {
    }
    export interface $MinecraftEnvironmentKJS extends $MessageSenderKJS {
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getScheduledEvents(): $ScheduledEvents;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        get scheduledEvents(): $ScheduledEvents;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftEnvironmentKJS}.
     */
    export type $MinecraftEnvironmentKJS_ = (() => $ScheduledEvents);
    export class $ClientLevelKJS {
    }
    export interface $ClientLevelKJS extends $LevelKJS {
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        self(): $EntityGetter;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelKJS}.
     */
    export type $ClientLevelKJS_ = (() => void);
    export class $BlockBehaviourKJS {
    }
    export interface $BlockBehaviourKJS extends $BlockProviderKJS {
        setSpeedFactor(v: number): void;
        setFriction(v: number): void;
        setSoundType(v: $SoundType_): void;
        setJumpFactor(v: number): void;
        setHasCollision(v: boolean): void;
        setIsRandomlyTicking(v: boolean): void;
        setRandomTickCallback(callback: $Consumer_<$RandomTickCallback>): void;
        setExplosionResistance(v: number): void;
        set speedFactor(value: number);
        set friction(value: number);
        set soundType(value: $SoundType_);
        set jumpFactor(value: number);
        set hasCollision(value: boolean);
        set isRandomlyTicking(value: boolean);
        set randomTickCallback(value: $Consumer_<$RandomTickCallback>);
        set explosionResistance(value: number);
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourKJS}.
     */
    export type $BlockBehaviourKJS_ = (() => void);
    export class $ItemKJS {
    }
    export interface $ItemKJS extends $IngredientSupplierKJS, $RegistryObjectKJS<$Item> {
        setCraftingRemainder(i: $Item_): void;
        getTypeItemStackKey(): $ItemStackKey;
        setNameKey(key: string): void;
        getTypeData(): $Map<string, $Object>;
        getItemBuilder(): $ItemBuilder;
        setCanRepair(repairable: boolean): void;
        setItemBuilder(b: $ItemBuilder): void;
        getRegistry(): $Registry<$Item>;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getItem(): $Item;
        set craftingRemainder(value: $Item_);
        get typeItemStackKey(): $ItemStackKey;
        set nameKey(value: string);
        get typeData(): $Map<string, $Object>;
        set canRepair(value: boolean);
        get registry(): $Registry<$Item>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get item(): $Item;
    }
    export class $ComponentKJS {
    }
    export interface $ComponentKJS extends $Component, $WithCodec, $WrappedJS {
        forEach(action: $Consumer_<$Component>): void;
        getCodec(): $Codec<never>;
        clickChangePage(page: string): $MutableComponent;
        clickSuggestCommand(command: string): $MutableComponent;
        clickRunCommand(command: string): $MutableComponent;
        obfuscated(): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        strikethrough(): $MutableComponent;
        darkRed(): $MutableComponent;
        noColor(): $MutableComponent;
        asIterable(): $Iterable<$Component>;
        underlined(): $MutableComponent;
        underlined(value: boolean): $MutableComponent;
        darkPurple(): $MutableComponent;
        darkGreen(): $MutableComponent;
        darkBlue(): $MutableComponent;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        rawComponent(): $MutableComponent;
        /**
         * @deprecated
         */
        rawCopy(): $MutableComponent;
        lightPurple(): $MutableComponent;
        hasSiblings(): boolean;
        hasStyle(): boolean;
        darkGray(): $MutableComponent;
        clickOpenUrl(url: string): $MutableComponent;
        clickOpenFile(path: string): $MutableComponent;
        /**
         * @deprecated
         */
        component(): $Component;
        insertion(s: string): $MutableComponent;
        darkAqua(): $MutableComponent;
        clickCopy(text: string): $MutableComponent;
        self(): $MutableComponent;
        hover(s: $Component_): $MutableComponent;
        green(): $MutableComponent;
        color(c: $KubeColor_): $MutableComponent;
        yellow(): $MutableComponent;
        red(): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        aqua(): $MutableComponent;
        black(): $MutableComponent;
        gray(): $MutableComponent;
        blue(): $MutableComponent;
        white(): $MutableComponent;
        italic(): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        gold(): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        bold(): $MutableComponent;
        get codec(): $Codec<never>;
    }
    export class $MinecraftClientKJS {
    }
    export interface $MinecraftClientKJS extends $MinecraftEnvironmentKJS {
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getTitle(): string;
        isKeyDown(key: number): boolean;
        isKeyDown(keyName: string): boolean;
        setTitle(t: string): void;
        isShiftDown(): boolean;
        isCtrlDown(): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        isKeyBindDown(id: string): boolean;
        isAltDown(): boolean;
        getCurrentScreen(): $Screen;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        setCurrentScreen(gui: $Screen): void;
        getKeyBindPressedTicks(id: string): number;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        isKeyMappingDown(key: $KeyMapping): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        getCurrentWorldName(): string;
        self(): $Minecraft;
        tell(message: $Component_): void;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get shiftDown(): boolean;
        get ctrlDown(): boolean;
        get name(): $Component;
        get altDown(): boolean;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get currentWorldName(): string;
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
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        setChanged(): void;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        asContainer(): $Container;
        getSlots(): number;
        isMutable(): boolean;
        getWidth(): number;
        getHeight(): number;
        getStackInSlot(slot: number): $ItemStack;
        clear(): void;
        self(): $Container;
        get slots(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
    }
    export class $IngredientKJS {
    }
    export interface $IngredientKJS extends $ItemPredicate, $Replaceable, $WithCodec, $ItemMatch {
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        getStackArray(): $ItemStack[];
        asStack(): $SizedIngredient;
        getTagKey(): $TagKey<$Item>;
        containsAnyTag(): boolean;
        getCodec(): $Codec<never>;
        isWildcard(): boolean;
        withCount(count: number): $SizedIngredient;
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        asIngredient(): $Ingredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        except(subtracted: $Ingredient_): $Ingredient;
        or(ingredient: $Ingredient_): $Ingredient;
        and(ingredient: $Ingredient_): $Ingredient;
        self(): $Ingredient;
        get stackArray(): $ItemStack[];
        get tagKey(): $TagKey<$Item>;
        get codec(): $Codec<never>;
        get wildcard(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IngredientKJS}.
     */
    export type $IngredientKJS_ = (() => void);
    export class $ItemEntityKJS {
    }
    export interface $ItemEntityKJS extends $EntityKJS {
        getLifespan(): number;
        setNoDespawn(): void;
        setLifespan(lifespan: number): void;
        /**
         * Gets the item stack corresponding to the item contained in the item entity.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        isItem(): this is $ItemEntity;
        setInfinitePickUpDelay(): void;
        getTicksUntilDespawn(): number;
        setNoPickUpDelay(): void;
        setDefaultPickUpDelay(): void;
        setTicksUntilDespawn(ticks: number): void;
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
        matches(cx: $RecipeMatchContext, s: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        getCodec(): $Codec<$ItemStack>;
        getTypeData(): $Map<string, $Object>;
        toStringJS(): string;
        getBlock(): $Block;
        enchant(enchantments: $ItemEnchantments_): this;
        enchant(enchantment: $Holder_<$Enchantment>, level: number): this;
        /**
         * @deprecated
         */
        withChance(chance: number): $ItemStack;
        toItemString0(dynamicOps: $DynamicOps<$Tag_>): string;
        toItemString(): string;
        withCustomName(name: $Component_): this;
        withLore(lines: $Component_[]): this;
        withLore(lines: $Component_[], styledLines: $Component_[]): this;
        areItemsEqual(other: $ItemStack_): boolean;
        hasEnchantment(enchantment: $Holder_<$Enchantment>, level: number): boolean;
        withCount(c: number): this;
        areComponentsEqual(other: $ItemStack_): boolean;
        getEnchantments(): $ItemEnchantments;
        getHarvestSpeed(): number;
        getHarvestSpeed(block: $LevelBlock): number;
        equalsIgnoringCount(stack: $ItemStack_): boolean;
        getMod(): string;
        asIngredient(): $Ingredient;
        getRegistry(): $Registry<$Item>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        asHolder(): $Holder<$Item>;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        getIdLocation(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getComponentString(): string;
        self(): $ItemStack;
        getKey(): $ResourceKey<$Item>;
        getId(): string;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<$ItemStack>;
        get typeData(): $Map<string, $Object>;
        get block(): $Block;
        get enchantments(): $ItemEnchantments;
        get mod(): string;
        get registry(): $Registry<$Item>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get idLocation(): $ResourceLocation;
        get componentString(): string;
        get key(): $ResourceKey<$Item>;
        get id(): string;
    }
    export class $ClientPlayerKJS {
    }
    export interface $ClientPlayerKJS extends $PlayerKJS {
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is $AbstractClientPlayer;
        getStats(): $PlayerStatsJS;
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        notify(notification: $NotificationToastData_): void;
        get clientPlayer(): boolean;
        get stats(): $PlayerStatsJS;
        get miningBlock(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientPlayerKJS}.
     */
    export type $ClientPlayerKJS_ = (() => void);
}
