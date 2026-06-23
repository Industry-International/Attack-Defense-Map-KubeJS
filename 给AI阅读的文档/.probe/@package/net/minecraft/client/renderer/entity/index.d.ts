import { $ItemInHandRenderer, $BlockEntityWithoutLevelRenderer, $MultiBufferSource_, $RenderType, $ItemModelShaper } from "@package/net/minecraft/client/renderer";
import { $LivingEntityRendererAccessor } from "@package/net/fabricmc/fabric/mixin/client/rendering";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $LightningBolt, $EntityType_, $Display, $Display$BlockDisplay, $Display$ItemDisplay, $Entity, $GlowSquid, $Display$ItemDisplay$ItemRenderState_, $EntityType, $Display$BlockDisplay$BlockRenderState, $ExperienceOrb, $Display$ItemDisplay$ItemRenderState, $LivingEntity, $Mob, $Display$BlockDisplay$BlockRenderState_, $Display$RenderState, $Display$TextDisplay$TextRenderState, $Display$TextDisplay, $OminousItemSpawner, $Display$TextDisplay$TextRenderState_ } from "@package/net/minecraft/world/entity";
import { $AbstractWindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $Camera, $Options } from "@package/net/minecraft/client";
import { $ResourceManagerReloadListener, $ResourceManager, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $AccessorLivingEntityRenderer } from "@package/com/railwayteam/railways/mixin/client";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Parrot$Variant_, $Turtle, $Salmon, $Panda, $Fox, $SnowGolem, $Wolf, $Cod, $Chicken, $Pufferfish, $IronGolem, $Ocelot, $Cat, $Squid, $PolarBear, $Sheep, $Cow, $Pig, $Bee, $TropicalFish, $Dolphin, $MushroomCow, $Rabbit, $Parrot } from "@package/net/minecraft/world/entity/animal";
import { $ItemRendererAccessor as $ItemRendererAccessor$2 } from "@package/net/caffeinemc/mods/sodium/mixin/features/render/frapi";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $DyeColor_, $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $FireworkRocketEntity, $ShulkerBullet, $Arrow, $AbstractArrow, $FishingHook, $WitherSkull, $DragonFireball, $ThrownTrident, $EvokerFangs, $SpectralArrow, $LlamaSpit } from "@package/net/minecraft/world/entity/projectile";
import { $PlayerSkin$Model } from "@package/net/minecraft/client/resources";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $Stray, $Silverfish, $Drowned, $WitherSkeleton, $Zoglin, $Creeper, $Shulker, $CaveSpider, $Endermite, $Spider, $Blaze, $Illusioner, $EnderMan, $AbstractSkeleton, $MagmaCube, $SpellcasterIllager, $Witch, $Bogged, $Vindicator, $Zombie, $ZombieVillager, $Pillager, $Strider, $Guardian, $Ravager, $Phantom, $Vex, $AbstractIllager, $Ghast, $Slime, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $AbstractMinecart, $MinecartTNT, $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $ItemRendererAccessor } from "@package/com/replaymod/render/blend/mixin";
import { $Quaternionf } from "@package/org/joml";
import { $EndCrystal, $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $BakedModel, $ModelResourceLocation, $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $EntityRenderDispatcherAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $Map, $List, $List_, $Collection } from "@package/java/util";
import { $ItemFrame, $Painting, $LeashFenceKnotEntity, $ArmorStand } from "@package/net/minecraft/world/entity/decoration";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $AbstractHorse, $Llama, $Horse, $AbstractChestedHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $PiglinModel, $ZombieModel, $RavagerModel, $SkeletonModel, $SalmonModel, $GhastModel, $CodModel, $VillagerModel, $TurtleModel, $IronGolemModel, $BlazeModel, $VexModel, $LlamaModel, $TadpoleModel, $SnifferModel, $CatModel, $PolarBearModel, $EndermiteModel, $ZombieVillagerModel, $ArmorStandArmorModel, $CowModel, $FoxModel, $SheepModel, $SnowGolemModel, $DolphinModel, $EntityModel, $ChestedHorseModel, $OcelotModel, $ArmadilloModel, $WolfModel, $ColorableHierarchicalModel, $SquidModel, $ParrotModel, $ChickenModel, $EndermanModel, $DrownedModel, $BatModel, $RabbitModel, $WitherBossModel, $WardenModel, $IllagerModel, $PandaModel, $SlimeModel, $GoatModel, $SpiderModel, $HorseModel, $StriderModel, $FrogModel, $AxolotlModel, $WitchModel, $BeeModel, $CamelModel, $SilverfishModel, $CreeperModel, $LavaSlimeModel, $AllayModel, $ListModel, $PhantomModel, $HumanoidModel, $PigModel, $HoglinModel, $ShulkerModel, $BreezeModel, $GuardianModel } from "@package/net/minecraft/client/model";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $EntityRendererInter } from "@package/dev/tr7zw/entityculling/access";
import { $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Object } from "@package/java/lang";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $EntityModelSet, $ModelPart, $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $PrimedTnt, $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $Villager, $WanderingTrader } from "@package/net/minecraft/world/entity/npc";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $ItemRendererAccessor as $ItemRendererAccessor$1 } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $MinecartRendererAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $Frog, $Tadpole } from "@package/net/minecraft/world/entity/animal/frog";
import { $VertexConsumer, $PoseStack$Pose, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Font } from "@package/net/minecraft/client/gui";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
export * as layers from "@package/net/minecraft/client/renderer/entity/layers";
export * as player from "@package/net/minecraft/client/renderer/entity/player";

declare module "@package/net/minecraft/client/renderer/entity" {
    export class $EnderDragonRenderer$DragonModel extends $EntityModel<$EnderDragon> {
        handler$dfj002$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        prepareMobModel(entity: $EnderDragon, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $EnderDragon, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        entity: $EnderDragon;
        constructor(root: $ModelPart);
    }
    export class $NoopRenderer<T extends $Entity> extends $EntityRenderer<T> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $UndeadHorseRenderer extends $AbstractHorseRenderer<$AbstractHorse, $HorseModel<$AbstractHorse>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $AbstractHorse): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$AbstractHorse, $HorseModel<$AbstractHorse>>>;
        shadowStrength: number;
        model: $HorseModel<$AbstractHorse>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, layer: $ModelLayerLocation);
    }
    export class $WolfRenderer extends $MobRenderer<$Wolf, $WolfModel<$Wolf>> {
        render(entity: $Wolf, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Wolf): $ResourceLocation;
        /**
         * Defines what float the third param in setRotationAngles of ModelBase is
         */
        getBob(livingBase: $Wolf, partialTicks: number): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Wolf, $WolfModel<$Wolf>>>;
        shadowStrength: number;
        model: $WolfModel<$Wolf>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $VindicatorRenderer extends $IllagerRenderer<$Vindicator> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Vindicator): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Vindicator, $IllagerModel<$Vindicator>>>;
        shadowStrength: number;
        model: $IllagerModel<$Vindicator>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $VillagerRenderer extends $MobRenderer<$Villager, $VillagerModel<$Villager>> {
        scale(livingEntity: $Villager, poseStack: $PoseStack, partialTickTime: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Villager): $ResourceLocation;
        getShadowRadius(entity: $Villager): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Villager, $VillagerModel<$Villager>>>;
        shadowStrength: number;
        model: $VillagerModel<$Villager>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ThrownTridentRenderer extends $EntityRenderer<$ThrownTrident> {
        render(entity: $ThrownTrident, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $ThrownTrident): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        static TRIDENT_LOCATION: $ResourceLocation;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $TntRenderer extends $EntityRenderer<$PrimedTnt> {
        render(entity: $PrimedTnt, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $PrimedTnt): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EntityRendererProvider$Context {
        bakeLayer(layer: $ModelLayerLocation): $ModelPart;
        getItemRenderer(): $ItemRenderer;
        getItemInHandRenderer(): $ItemInHandRenderer;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        getModelSet(): $EntityModelSet;
        getResourceManager(): $ResourceManager;
        getFont(): $Font;
        getModelManager(): $ModelManager;
        getBlockRenderDispatcher(): $BlockRenderDispatcher;
        constructor(entityRenderDispatcher: $EntityRenderDispatcher, itemRenderer: $ItemRenderer, blockRenderDispatcher: $BlockRenderDispatcher, itemInHandRenderer: $ItemInHandRenderer, resourceManager: $ResourceManager, modelSet: $EntityModelSet, font: $Font);
        get itemRenderer(): $ItemRenderer;
        get itemInHandRenderer(): $ItemInHandRenderer;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get modelSet(): $EntityModelSet;
        get resourceManager(): $ResourceManager;
        get font(): $Font;
        get modelManager(): $ModelManager;
        get blockRenderDispatcher(): $BlockRenderDispatcher;
    }
    export class $TropicalFishRenderer extends $MobRenderer<$TropicalFish, $ColorableHierarchicalModel<$TropicalFish>> {
        render(entity: $TropicalFish, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $TropicalFish): $ResourceLocation;
        setupRotations(entity: $TropicalFish, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$TropicalFish, $ColorableHierarchicalModel<$TropicalFish>>>;
        shadowStrength: number;
        model: $ColorableHierarchicalModel<$TropicalFish>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $PigRenderer extends $MobRenderer<$Pig, $PigModel<$Pig>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Pig): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Pig, $PigModel<$Pig>>>;
        shadowStrength: number;
        model: $PigModel<$Pig>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EntityRenderer<T extends $Entity> implements $EntityRendererInter<any> {
        getBlockLightLevel(entity: $Object, pos: $BlockPos_): number;
        entityCullingGetCullingBox(entity: $Entity): $AABB;
        render(entity: $Object, entityYaw: number, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number): void;
        modifyReturnValue$hce000$sable$getPackedLightCoords(arg0: number, arg1: $Entity, arg2: number): number;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Object): $ResourceLocation;
        getRenderOffset(entity: $Object, partialTicks: number): $Vec3;
        /**
         * Returns the font renderer from the set render manager
         */
        getFont(): $Font;
        getSkyLightLevel(entity: $Object, pos: $BlockPos_): number;
        renderNameTag(entity: $Object, displayName: $Component_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, partialTick: number): void;
        getShadowRadius(entity: $Object): number;
        shadowRenderNameTag(entity: $Entity, displayName: $Component_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, partialTick: number): void;
        shadowShouldShowName(entity: $Entity): boolean;
        handler$zpg000$reforgedplaymod$replayModExtras_isPlayerHidden(entity: $Entity, camera: $Object, camX: number, camY: number, camZ: number, ci: $CallbackInfoReturnable<any>): void;
        entityCullingIgnoresCulling(entity: $Entity): boolean;
        shouldRender(livingEntity: $Object, camera: $Frustum, camX: number, arg3: number, camY: number): boolean;
        shouldShowName(entity: $Object): boolean;
        getPackedLightCoords(entity: $Object, partialTicks: number): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
        get font(): $Font;
    }
    export class $PaintingRenderer extends $EntityRenderer<$Painting> {
        render(entity: $Painting, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Painting): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SquidRenderer<T extends $Squid> extends $MobRenderer<T, $SquidModel<T>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        setupRotations(entity: T, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        /**
         * Defines what float the third param in setRotationAngles of ModelBase is
         */
        getBob(livingBase: T, partialTicks: number): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, $SquidModel<T>>>;
        shadowStrength: number;
        model: $SquidModel<T>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, model: $SquidModel<T>);
    }
    export class $OminousItemSpawnerRenderer extends $EntityRenderer<$OminousItemSpawner> {
        render(arg0: $OminousItemSpawner, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        getTextureLocation(arg0: $OminousItemSpawner): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $PolarBearRenderer extends $MobRenderer<$PolarBear, $PolarBearModel<$PolarBear>> {
        scale(livingEntity: $PolarBear, poseStack: $PoseStack, partialTickTime: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $PolarBear): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$PolarBear, $PolarBearModel<$PolarBear>>>;
        shadowStrength: number;
        model: $PolarBearModel<$PolarBear>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ArmorStandRenderer extends $LivingEntityRenderer<$ArmorStand, $ArmorStandArmorModel> {
        getRenderType(livingEntity: $ArmorStand, bodyVisible: boolean, translucent: boolean, glowing: boolean): $RenderType;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $ArmorStand): $ResourceLocation;
        setupRotations(entity: $ArmorStand, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        shouldShowName(entity: $ArmorStand): boolean;
        static DEFAULT_SKIN_LOCATION: $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$ArmorStand, $ArmorStandArmorModel>>;
        shadowStrength: number;
        model: $ArmorStandArmorModel;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ZombieRenderer extends $AbstractZombieRenderer<$Zombie, $ZombieModel<$Zombie>> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Zombie, $ZombieModel<$Zombie>>>;
        shadowStrength: number;
        model: $ZombieModel<$Zombie>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
        constructor(context: $EntityRendererProvider$Context, zombieLayer: $ModelLayerLocation, innerArmor: $ModelLayerLocation, outerArmor: $ModelLayerLocation);
    }
    export class $IllusionerRenderer extends $IllagerRenderer<$Illusioner> {
        render(entity: $Illusioner, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Illusioner): $ResourceLocation;
        isBodyVisible(livingEntity: $Illusioner): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Illusioner, $IllagerModel<$Illusioner>>>;
        shadowStrength: number;
        model: $IllagerModel<$Illusioner>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $RabbitRenderer extends $MobRenderer<$Rabbit, $RabbitModel<$Rabbit>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Rabbit): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Rabbit, $RabbitModel<$Rabbit>>>;
        shadowStrength: number;
        model: $RabbitModel<$Rabbit>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $CowRenderer extends $MobRenderer<$Cow, $CowModel<$Cow>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Cow): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Cow, $CowModel<$Cow>>>;
        shadowStrength: number;
        model: $CowModel<$Cow>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DolphinRenderer extends $MobRenderer<$Dolphin, $DolphinModel<$Dolphin>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Dolphin): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Dolphin, $DolphinModel<$Dolphin>>>;
        shadowStrength: number;
        model: $DolphinModel<$Dolphin>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $WindChargeRenderer extends $EntityRenderer<$AbstractWindCharge> {
        render(entity: $AbstractWindCharge, entityYaw: number, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number): void;
        xOffset(tickCount: number): number;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $AbstractWindCharge): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SheepRenderer extends $MobRenderer<$Sheep, $SheepModel<$Sheep>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Sheep): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Sheep, $SheepModel<$Sheep>>>;
        shadowStrength: number;
        model: $SheepModel<$Sheep>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $GhastRenderer extends $MobRenderer<$Ghast, $GhastModel<$Ghast>> {
        scale(livingEntity: $Ghast, poseStack: $PoseStack, partialTickTime: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Ghast): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Ghast, $GhastModel<$Ghast>>>;
        shadowStrength: number;
        model: $GhastModel<$Ghast>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ShulkerBulletRenderer extends $EntityRenderer<$ShulkerBullet> {
        getBlockLightLevel(entity: $ShulkerBullet, pos: $BlockPos_): number;
        render(entity: $ShulkerBullet, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $ShulkerBullet): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $LightningBoltRenderer extends $EntityRenderer<$LightningBolt> {
        render(entity: $LightningBolt, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $LightningBolt): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ThrownItemRenderer<T extends $Entity> extends $EntityRenderer<T> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, scale: number, fullBright: boolean);
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ChestedHorseRenderer<T extends $AbstractChestedHorse> extends $AbstractHorseRenderer<T, $ChestedHorseModel<T>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, $ChestedHorseModel<T>>>;
        shadowStrength: number;
        model: $ChestedHorseModel<T>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, scale: number, layer: $ModelLayerLocation);
    }
    export class $LlamaRenderer extends $MobRenderer<$Llama, $LlamaModel<$Llama>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Llama): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Llama, $LlamaModel<$Llama>>>;
        shadowStrength: number;
        model: $LlamaModel<$Llama>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, layer: $ModelLayerLocation);
    }
    export class $ParrotRenderer extends $MobRenderer<$Parrot, $ParrotModel> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Parrot): $ResourceLocation;
        static getVariantTexture(variant: $Parrot$Variant_): $ResourceLocation;
        /**
         * Defines what float the third param in setRotationAngles of ModelBase is
         */
        getBob(livingBase: $Parrot, partialTicks: number): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Parrot, $ParrotModel>>;
        shadowStrength: number;
        model: $ParrotModel;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SlimeRenderer extends $MobRenderer<$Slime, $SlimeModel<$Slime>> {
        scale(livingEntity: $Slime, poseStack: $PoseStack, partialTickTime: number): void;
        render(entity: $Slime, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Slime): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Slime, $SlimeModel<$Slime>>>;
        shadowStrength: number;
        model: $SlimeModel<$Slime>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $GlowSquidRenderer extends $SquidRenderer<$GlowSquid> {
        getBlockLightLevel(arg0: $GlowSquid, arg1: $BlockPos_): number;
        getTextureLocation(arg0: $GlowSquid): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$GlowSquid, $SquidModel<$GlowSquid>>>;
        shadowStrength: number;
        model: $SquidModel<$GlowSquid>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $SquidModel<$GlowSquid>);
    }
    export class $StrayRenderer extends $SkeletonRenderer<$Stray> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Stray): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Stray, $SkeletonModel<$Stray>>>;
        shadowStrength: number;
        model: $SkeletonModel<$Stray>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $PiglinRenderer extends $HumanoidMobRenderer<$Mob, $PiglinModel<$Mob>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Mob): $ResourceLocation;
        isShaking(entity: $Mob): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Mob, $PiglinModel<$Mob>>>;
        shadowStrength: number;
        model: $PiglinModel<$Mob>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, layer: $ModelLayerLocation, arg2: $ModelLayerLocation, arg3: $ModelLayerLocation, noRightEar: boolean);
    }
    export class $TippableArrowRenderer extends $ArrowRenderer<$Arrow> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Arrow): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        static TIPPED_ARROW_LOCATION: $ResourceLocation;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NORMAL_ARROW_LOCATION: $ResourceLocation;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $HoglinRenderer extends $MobRenderer<$Hoglin, $HoglinModel<$Hoglin>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Hoglin): $ResourceLocation;
        isShaking(entity: $Hoglin): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Hoglin, $HoglinModel<$Hoglin>>>;
        shadowStrength: number;
        model: $HoglinModel<$Hoglin>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $CreeperRenderer extends $MobRenderer<$Creeper, $CreeperModel<$Creeper>> {
        scale(livingEntity: $Creeper, poseStack: $PoseStack, partialTickTime: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Creeper): $ResourceLocation;
        getWhiteOverlayProgress(livingEntity: $Creeper, partialTicks: number): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Creeper, $CreeperModel<$Creeper>>>;
        shadowStrength: number;
        model: $CreeperModel<$Creeper>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $PufferfishRenderer extends $MobRenderer<$Pufferfish, $EntityModel<$Pufferfish>> {
        render(entity: $Pufferfish, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Pufferfish): $ResourceLocation;
        setupRotations(entity: $Pufferfish, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Pufferfish, $EntityModel<$Pufferfish>>>;
        shadowStrength: number;
        model: $EntityModel<$Pufferfish>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $PandaRenderer extends $MobRenderer<$Panda, $PandaModel<$Panda>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Panda): $ResourceLocation;
        setupRotations(entity: $Panda, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Panda, $PandaModel<$Panda>>>;
        shadowStrength: number;
        model: $PandaModel<$Panda>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $WitchRenderer extends $MobRenderer<$Witch, $WitchModel<$Witch>> {
        scale(livingEntity: $Witch, poseStack: $PoseStack, partialTickTime: number): void;
        render(entity: $Witch, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Witch): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Witch, $WitchModel<$Witch>>>;
        shadowStrength: number;
        model: $WitchModel<$Witch>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $AbstractZombieRenderer<T extends $Zombie, M extends $ZombieModel<T>> extends $HumanoidMobRenderer<T, M> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Zombie): $ResourceLocation;
        isShaking(entity: T): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, M>>;
        shadowStrength: number;
        model: M;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, model: M, innerModel: M, outerModel: M);
    }
    export class $EntityRendererProvider<T extends $Entity> {
    }
    export interface $EntityRendererProvider<T extends $Entity> {
        create(context: $EntityRendererProvider$Context): $EntityRenderer<T>;
    }
    /**
     * Values that may be interpreted as {@link $EntityRendererProvider}.
     */
    export type $EntityRendererProvider_<T> = ((arg0: $EntityRendererProvider$Context) => $EntityRenderer<T>);
    export class $PhantomRenderer extends $MobRenderer<$Phantom, $PhantomModel<$Phantom>> {
        scale(livingEntity: $Phantom, poseStack: $PoseStack, partialTickTime: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Phantom): $ResourceLocation;
        setupRotations(entity: $Phantom, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Phantom, $PhantomModel<$Phantom>>>;
        shadowStrength: number;
        model: $PhantomModel<$Phantom>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SalmonRenderer extends $MobRenderer<$Salmon, $SalmonModel<$Salmon>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Salmon): $ResourceLocation;
        setupRotations(entity: $Salmon, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Salmon, $SalmonModel<$Salmon>>>;
        shadowStrength: number;
        model: $SalmonModel<$Salmon>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EvokerFangsRenderer extends $EntityRenderer<$EvokerFangs> {
        render(entity: $EvokerFangs, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $EvokerFangs): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DragonFireballRenderer extends $EntityRenderer<$DragonFireball> {
        getBlockLightLevel(entity: $DragonFireball, pos: $BlockPos_): number;
        render(entity: $DragonFireball, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $DragonFireball): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EndermanRenderer extends $MobRenderer<$EnderMan, $EndermanModel<$EnderMan>> {
        render(entity: $EnderMan, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $EnderMan): $ResourceLocation;
        getRenderOffset(entity: $EnderMan, partialTicks: number): $Vec3;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$EnderMan, $EndermanModel<$EnderMan>>>;
        shadowStrength: number;
        model: $EndermanModel<$EnderMan>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EntityRenderDispatcher implements $ResourceManagerReloadListener, $EntityRenderDispatcherAccessor {
        prepare(level: $Level_, activeRenderInfo: $Camera, entity: $Entity): void;
        /**
         * World sets this RenderManager's worldObj to the world provided
         */
        setLevel(level: $Level_ | null): void;
        getSkinMap(): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        overrideCameraOrientation(cameraOrientation: $Quaternionf): void;
        render<E extends $Entity>(entity: E, x: number, arg2: number, y: number, arg4: number, z: number, arg6: $PoseStack, rotationYaw: $MultiBufferSource_, partialTicks: number): void;
        setRenderShadow(debugBoundingBox: boolean): void;
        cameraOrientation(): $Quaternionf;
        setRenderHitBoxes(debugBoundingBox: boolean): void;
        getItemInHandRenderer(): $ItemInHandRenderer;
        distanceToSqr(x: number, arg1: number, y: number): number;
        distanceToSqr(entity: $Entity): number;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        getRenderer<T extends $Entity>(entity: T): $EntityRenderer<T>;
        shouldRenderHitBoxes(): boolean;
        handler$fom000$chloride$inject$shouldRender(arg0: $Entity, arg1: $Frustum, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfoReturnable<any>): void;
        shouldRender<E extends $Entity>(entity: E, frustum: $Frustum, camX: number, arg3: number, camY: number): boolean;
        getPackedLightCoords<E extends $Entity>(entity: E, partialTicks: number): number;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        create$getRenderers(): $Map<$EntityType<never>, $EntityRenderer<never>>;
        crosshairPickEntity: $Entity;
        renderers: $Map<$EntityType<never>, $EntityRenderer<never>>;
        options: $Options;
        textureManager: $TextureManager;
        camera: $Camera;
        constructor(minecraft: $Minecraft, textureManager: $TextureManager, itemRenderer: $ItemRenderer, blockRenderDispatcher: $BlockRenderDispatcher, font: $Font, options: $Options, entityModels: $EntityModelSet);
        set level(value: $Level_ | null);
        get skinMap(): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        set renderShadow(value: boolean);
        set renderHitBoxes(value: boolean);
        get itemInHandRenderer(): $ItemInHandRenderer;
        get name(): string;
    }
    export class $MagmaCubeRenderer extends $MobRenderer<$MagmaCube, $LavaSlimeModel<$MagmaCube>> {
        scale(livingEntity: $MagmaCube, poseStack: $PoseStack, partialTickTime: number): void;
        getBlockLightLevel(entity: $MagmaCube, pos: $BlockPos_): number;
        render(entity: $MagmaCube, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $MagmaCube): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$MagmaCube, $LavaSlimeModel<$MagmaCube>>>;
        shadowStrength: number;
        model: $LavaSlimeModel<$MagmaCube>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $TurtleRenderer extends $MobRenderer<$Turtle, $TurtleModel<$Turtle>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Turtle): $ResourceLocation;
        getShadowRadius(entity: $Turtle): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Turtle, $TurtleModel<$Turtle>>>;
        shadowStrength: number;
        model: $TurtleModel<$Turtle>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $PillagerRenderer extends $IllagerRenderer<$Pillager> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Pillager): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Pillager, $IllagerModel<$Pillager>>>;
        shadowStrength: number;
        model: $IllagerModel<$Pillager>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer$TextDisplayRenderer extends $DisplayRenderer<$Display$TextDisplay, $Display$TextDisplay$TextRenderState> {
        renderInner(textDisplay: $Display$TextDisplay, renderState: $Display$TextDisplay$TextRenderState_, poseStack: $PoseStack, buffer: $MultiBufferSource_, lightmapUV: number, partialTick: number): void;
        getSubState(textDisplay: $Display$TextDisplay): $Display$TextDisplay$TextRenderState;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $FrogRenderer extends $MobRenderer<$Frog, $FrogModel<$Frog>> {
        getTextureLocation(arg0: $Frog): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Frog, $FrogModel<$Frog>>>;
        shadowStrength: number;
        model: $FrogModel<$Frog>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ZoglinRenderer extends $MobRenderer<$Zoglin, $HoglinModel<$Zoglin>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Zoglin): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Zoglin, $HoglinModel<$Zoglin>>>;
        shadowStrength: number;
        model: $HoglinModel<$Zoglin>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer$ItemDisplayRenderer extends $DisplayRenderer<$Display$ItemDisplay, $Display$ItemDisplay$ItemRenderState> {
        renderInner(arg0: $Display$ItemDisplay, arg1: $Display$ItemDisplay$ItemRenderState_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getSubState(arg0: $Display$ItemDisplay): $Display$ItemDisplay$ItemRenderState;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $FoxRenderer extends $MobRenderer<$Fox, $FoxModel<$Fox>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Fox): $ResourceLocation;
        setupRotations(entity: $Fox, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Fox, $FoxModel<$Fox>>>;
        shadowStrength: number;
        model: $FoxModel<$Fox>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ZombieVillagerRenderer extends $HumanoidMobRenderer<$ZombieVillager, $ZombieVillagerModel<$ZombieVillager>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $ZombieVillager): $ResourceLocation;
        isShaking(entity: $ZombieVillager): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$ZombieVillager, $ZombieVillagerModel<$ZombieVillager>>>;
        shadowStrength: number;
        model: $ZombieVillagerModel<$ZombieVillager>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $VexRenderer extends $MobRenderer<$Vex, $VexModel> {
        getBlockLightLevel(entity: $Vex, pos: $BlockPos_): number;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Vex): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Vex, $VexModel>>;
        shadowStrength: number;
        model: $VexModel;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EndCrystalRenderer extends $EntityRenderer<$EndCrystal> {
        static getY(endCrystal: $EndCrystal, partialTick: number): number;
        render(entity: $EndCrystal, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        static createBodyLayer(): $LayerDefinition;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $EndCrystal): $ResourceLocation;
        shouldRender(livingEntity: $EndCrystal, camera: $Frustum, camX: number, arg3: number, camY: number): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $AbstractHorseRenderer<T extends $AbstractHorse, M extends $HorseModel<T>> extends $MobRenderer<T, M> {
        scale(livingEntity: T, poseStack: $PoseStack, partialTickTime: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, M>>;
        shadowStrength: number;
        model: M;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, model: M, scale: number);
    }
    export class $WanderingTraderRenderer extends $MobRenderer<$WanderingTrader, $VillagerModel<$WanderingTrader>> {
        scale(livingEntity: $WanderingTrader, poseStack: $PoseStack, partialTickTime: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $WanderingTrader): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$WanderingTrader, $VillagerModel<$WanderingTrader>>>;
        shadowStrength: number;
        model: $VillagerModel<$WanderingTrader>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ExperienceOrbRenderer extends $EntityRenderer<$ExperienceOrb> {
        getBlockLightLevel(entity: $ExperienceOrb, pos: $BlockPos_): number;
        render(entity: $ExperienceOrb, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $ExperienceOrb): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SkeletonRenderer<T extends $AbstractSkeleton> extends $HumanoidMobRenderer<T, $SkeletonModel<T>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        isShaking(entity: T): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, $SkeletonModel<T>>>;
        shadowStrength: number;
        model: $SkeletonModel<T>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, skeletonLayer: $ModelLayerLocation, innerModelLayer: $ModelLayerLocation, model: $SkeletonModel<T>);
        constructor(context: $EntityRendererProvider$Context, skeletonLayer: $ModelLayerLocation, innerModelLayer: $ModelLayerLocation, outerModelLayer: $ModelLayerLocation);
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $GoatRenderer extends $MobRenderer<$Goat, $GoatModel<$Goat>> {
        getTextureLocation(arg0: $Goat): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Goat, $GoatModel<$Goat>>>;
        shadowStrength: number;
        model: $GoatModel<$Goat>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EndermiteRenderer extends $MobRenderer<$Endermite, $EndermiteModel<$Endermite>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Endermite): $ResourceLocation;
        getFlipDegrees(livingEntity: $Endermite): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Endermite, $EndermiteModel<$Endermite>>>;
        shadowStrength: number;
        model: $EndermiteModel<$Endermite>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $IllagerRenderer<T extends $AbstractIllager> extends $MobRenderer<T, $IllagerModel<T>> {
        scale(livingEntity: T, poseStack: $PoseStack, partialTickTime: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, $IllagerModel<T>>>;
        shadowStrength: number;
        model: $IllagerModel<T>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, model: $IllagerModel<T>, shadowRadius: number);
    }
    export class $BeeRenderer extends $MobRenderer<$Bee, $BeeModel<$Bee>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Bee): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Bee, $BeeModel<$Bee>>>;
        shadowStrength: number;
        model: $BeeModel<$Bee>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $RenderLayerParent<T extends $Entity, M extends $EntityModel<T>> {
    }
    export interface $RenderLayerParent<T extends $Entity, M extends $EntityModel<T>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        getModel(): M;
        get model(): M;
    }
    export class $AllayRenderer extends $MobRenderer<$Allay, $AllayModel> {
        getBlockLightLevel(arg0: $Allay, arg1: $BlockPos_): number;
        getTextureLocation(arg0: $Allay): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Allay, $AllayModel>>;
        shadowStrength: number;
        model: $AllayModel;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $LeashKnotRenderer extends $EntityRenderer<$LeashFenceKnotEntity> {
        render(entity: $LeashFenceKnotEntity, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $LeashFenceKnotEntity): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $AxolotlRenderer extends $MobRenderer<$Axolotl, $AxolotlModel<$Axolotl>> {
        getTextureLocation(arg0: $Axolotl): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Axolotl, $AxolotlModel<$Axolotl>>>;
        shadowStrength: number;
        model: $AxolotlModel<$Axolotl>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SpectralArrowRenderer extends $ArrowRenderer<$SpectralArrow> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $SpectralArrow): $ResourceLocation;
        shadowRadius: number;
        static SPECTRAL_ARROW_LOCATION: $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $CatRenderer extends $MobRenderer<$Cat, $CatModel<$Cat>> {
        scale(livingEntity: $Cat, poseStack: $PoseStack, partialTickTime: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Cat): $ResourceLocation;
        setupRotations(entity: $Cat, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Cat, $CatModel<$Cat>>>;
        shadowStrength: number;
        model: $CatModel<$Cat>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SilverfishRenderer extends $MobRenderer<$Silverfish, $SilverfishModel<$Silverfish>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Silverfish): $ResourceLocation;
        getFlipDegrees(livingEntity: $Silverfish): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Silverfish, $SilverfishModel<$Silverfish>>>;
        shadowStrength: number;
        model: $SilverfishModel<$Silverfish>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $StriderRenderer extends $MobRenderer<$Strider, $StriderModel<$Strider>> {
        scale(livingEntity: $Strider, poseStack: $PoseStack, partialTickTime: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Strider): $ResourceLocation;
        isShaking(entity: $Strider): boolean;
        getShadowRadius(entity: $Strider): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Strider, $StriderModel<$Strider>>>;
        shadowStrength: number;
        model: $StriderModel<$Strider>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $LivingEntityRenderer<T extends $LivingEntity, M extends $EntityModel<T>> extends $EntityRenderer<T> implements $RenderLayerParent<T, M>, $LivingEntityRendererAccessor<any, any>, $AccessorLivingEntityRenderer<any> {
        scale(livingEntity: T, poseStack: $PoseStack, partialTickTime: number): void;
        getRenderType(livingEntity: T, bodyVisible: boolean, translucent: boolean, glowing: boolean): $RenderType;
        render(entity: T, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        handler$edc000$superbwarfare$setupRotations(arg0: $LivingEntity, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        static getOverlayCoords(livingEntity: $LivingEntity, u: number): number;
        /**
         * Returns where in the swing animation the living entity is (from 0 to 1).  Args : entity, partialTickTime
         */
        getWhiteOverlayProgress(livingBase: T, partialTickTime: number): number;
        getModel(): M;
        getFlipDegrees(livingEntity: T): number;
        static isEntityUpsideDown(livingEntity: $LivingEntity): boolean;
        isBodyVisible(livingEntity: T): boolean;
        setupRotations(entity: T, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        handler$edc000$superbwarfare$isBodyVisible(arg0: $LivingEntity, arg1: $CallbackInfoReturnable<any>): void;
        isShaking(livingEntity: T): boolean;
        getShadowRadius(livingEntity: T): number;
        addLayer(layer: $RenderLayer<T, M>): boolean;
        shouldShowName(livingEntity: T): boolean;
        /**
         * Returns where in the swing animation the living entity is (from 0 to 1).  Args : entity, partialTickTime
         */
        getAttackAnim(livingBase: T, partialTickTime: number): number;
        /**
         * Returns where in the swing animation the living entity is (from 0 to 1).  Args : entity, partialTickTime
         */
        getBob(livingBase: T, partialTickTime: number): number;
        callAddFeature(layer: $RenderLayer<T, M>): boolean;
        callSetupRotations(entity: T, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, M>>;
        shadowStrength: number;
        model: M;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, model: M, shadowRadius: number);
    }
    export class $BoatRenderer extends $EntityRenderer<$Boat> {
        render(entity: $Boat, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * @deprecated
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Boat): $ResourceLocation;
        getModelWithLocation(arg0: $Boat): $Pair<$ResourceLocation, $ListModel<$Boat>>;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, chestBoat: boolean);
    }
    export class $MobRenderer<T extends $Mob, M extends $EntityModel<T>> extends $LivingEntityRenderer<T, M> {
        getShadowRadius(entity: T): number;
        shouldShowName(entity: T): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, M>>;
        shadowStrength: number;
        model: M;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, model: M, shadowRadius: number);
    }
    export class $BreezeRenderer extends $MobRenderer<$Breeze, $BreezeModel<$Breeze>> {
        static enable(model: $BreezeModel<$Breeze>, ...parts: $ModelPart[]): $BreezeModel<$Breeze>;
        render(entity: $Breeze, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Breeze): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Breeze, $BreezeModel<$Breeze>>>;
        shadowStrength: number;
        model: $BreezeModel<$Breeze>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $RavagerRenderer extends $MobRenderer<$Ravager, $RavagerModel> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Ravager): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Ravager, $RavagerModel>>;
        shadowStrength: number;
        model: $RavagerModel;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $IronGolemRenderer extends $MobRenderer<$IronGolem, $IronGolemModel<$IronGolem>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $IronGolem): $ResourceLocation;
        setupRotations(entity: $IronGolem, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$IronGolem, $IronGolemModel<$IronGolem>>>;
        shadowStrength: number;
        model: $IronGolemModel<$IronGolem>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $HuskRenderer extends $ZombieRenderer {
        scale(livingEntity: $Zombie, poseStack: $PoseStack, partialTickTime: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Zombie, $ZombieModel<$Zombie>>>;
        shadowStrength: number;
        model: $ZombieModel<$Zombie>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $GiantMobRenderer extends $MobRenderer<$Giant, $HumanoidModel<$Giant>> {
        scale(livingEntity: $Giant, poseStack: $PoseStack, partialTickTime: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Giant): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Giant, $HumanoidModel<$Giant>>>;
        shadowStrength: number;
        model: $HumanoidModel<$Giant>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, scale: number);
    }
    export class $WitherBossRenderer extends $MobRenderer<$WitherBoss, $WitherBossModel<$WitherBoss>> {
        scale(livingEntity: $WitherBoss, poseStack: $PoseStack, partialTickTime: number): void;
        getBlockLightLevel(entity: $WitherBoss, pos: $BlockPos_): number;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $WitherBoss): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$WitherBoss, $WitherBossModel<$WitherBoss>>>;
        shadowStrength: number;
        model: $WitherBossModel<$WitherBoss>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $WitherSkullRenderer extends $EntityRenderer<$WitherSkull> {
        getBlockLightLevel(entity: $WitherSkull, pos: $BlockPos_): number;
        render(entity: $WitherSkull, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $WitherSkull): $ResourceLocation;
        static createSkullLayer(): $LayerDefinition;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ArrowRenderer<T extends $AbstractArrow> extends $EntityRenderer<T> {
        render(entity: T, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        vertex(pose: $PoseStack$Pose, consumer: $VertexConsumer, x: number, y: number, z: number, u: number, v: number, normalX: number, normalY: number, normalZ: number, packedLight: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $FishingHookRenderer extends $EntityRenderer<$FishingHook> {
        render(entity: $FishingHook, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $FishingHook): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $FallingBlockRenderer extends $EntityRenderer<$FallingBlockEntity> {
        render(entity: $FallingBlockEntity, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $FallingBlockEntity): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ElderGuardianRenderer extends $GuardianRenderer {
        scale(livingEntity: $Guardian, poseStack: $PoseStack, partialTickTime: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Guardian, $GuardianModel>>;
        shadowStrength: number;
        static GUARDIAN_ELDER_LOCATION: $ResourceLocation;
        model: $GuardianModel;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $CodRenderer extends $MobRenderer<$Cod, $CodModel<$Cod>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Cod): $ResourceLocation;
        setupRotations(entity: $Cod, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Cod, $CodModel<$Cod>>>;
        shadowStrength: number;
        model: $CodModel<$Cod>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SpiderRenderer<T extends $Spider> extends $MobRenderer<T, $SpiderModel<T>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        getFlipDegrees(livingEntity: T): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, $SpiderModel<T>>>;
        shadowStrength: number;
        model: $SpiderModel<T>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
        constructor(context: $EntityRendererProvider$Context, layer: $ModelLayerLocation);
    }
    export class $TadpoleRenderer extends $MobRenderer<$Tadpole, $TadpoleModel<$Tadpole>> {
        getTextureLocation(arg0: $Tadpole): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Tadpole, $TadpoleModel<$Tadpole>>>;
        shadowStrength: number;
        model: $TadpoleModel<$Tadpole>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $BlazeRenderer extends $MobRenderer<$Blaze, $BlazeModel<$Blaze>> {
        getBlockLightLevel(entity: $Blaze, pos: $BlockPos_): number;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Blaze): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Blaze, $BlazeModel<$Blaze>>>;
        shadowStrength: number;
        model: $BlazeModel<$Blaze>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ItemFrameRenderer<T extends $ItemFrame> extends $EntityRenderer<T> {
        getBlockLightLevel(entity: T, pos: $BlockPos_): number;
        render(entity: T, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        getRenderOffset(entity: T, partialTicks: number): $Vec3;
        renderNameTag(entity: T, displayName: $Component_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, partialTick: number): void;
        shouldShowName(entity: T): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static BRIGHT_MAP_LIGHT_ADJUSTMENT: number;
        static GLOW_FRAME_BRIGHTNESS: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer<T extends $Display, S> extends $EntityRenderer<T> {
        render(entity: T, entityYaw: number, partialTick: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        renderInner(textDisplay: T, renderState: S, poseStack: $PoseStack, buffer: $MultiBufferSource_, lightmapUV: number, partialTick: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        getSubState(textDisplay: T): S;
        redirect$jfe000$axiom$render_renderState(instance: $Display): $Display$RenderState;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $HorseRenderer extends $AbstractHorseRenderer<$Horse, $HorseModel<$Horse>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Horse): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Horse, $HorseModel<$Horse>>>;
        shadowStrength: number;
        model: $HorseModel<$Horse>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ShulkerRenderer extends $MobRenderer<$Shulker, $ShulkerModel<$Shulker>> {
        static getTextureLocation(color: $DyeColor_ | null): $ResourceLocation;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Shulker): $ResourceLocation;
        getRenderOffset(entity: $Shulker, partialTicks: number): $Vec3;
        setupRotations(entity: $Shulker, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        shouldRender(livingEntity: $Shulker, camera: $Frustum, camX: number, arg3: number, camY: number): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Shulker, $ShulkerModel<$Shulker>>>;
        shadowStrength: number;
        model: $ShulkerModel<$Shulker>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $WitherSkeletonRenderer extends $SkeletonRenderer<$WitherSkeleton> {
        scale(livingEntity: $WitherSkeleton, poseStack: $PoseStack, partialTickTime: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $WitherSkeleton): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$WitherSkeleton, $SkeletonModel<$WitherSkeleton>>>;
        shadowStrength: number;
        model: $SkeletonModel<$WitherSkeleton>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $CaveSpiderRenderer extends $SpiderRenderer<$CaveSpider> {
        scale(livingEntity: $CaveSpider, poseStack: $PoseStack, partialTickTime: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $CaveSpider): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$CaveSpider, $SpiderModel<$CaveSpider>>>;
        shadowStrength: number;
        model: $SpiderModel<$CaveSpider>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $BoggedRenderer extends $SkeletonRenderer<$Bogged> {
        getTextureLocation(arg0: $Bogged): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Bogged, $SkeletonModel<$Bogged>>>;
        shadowStrength: number;
        model: $SkeletonModel<$Bogged>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $EnderDragonRenderer extends $EntityRenderer<$EnderDragon> {
        render(entity: $EnderDragon, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        static createBodyLayer(): $LayerDefinition;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $EnderDragon): $ResourceLocation;
        static renderCrystalBeams(x: number, y: number, z: number, partialTick: number, tickCount: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        static CRYSTAL_BEAM_LOCATION: $ResourceLocation;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $SnifferRenderer extends $MobRenderer<$Sniffer, $SnifferModel<$Sniffer>> {
        getTextureLocation(arg0: $Sniffer): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Sniffer, $SnifferModel<$Sniffer>>>;
        shadowStrength: number;
        model: $SnifferModel<$Sniffer>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $MinecartRenderer<T extends $AbstractMinecart> extends $EntityRenderer<T> implements $MinecartRendererAccess {
        render(entity: T, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        renderMinecartContents(entity: T, partialTicks: number, state: $BlockState_, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        getModel(): $EntityModel<never>;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        model: $EntityModel<T>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, layer: $ModelLayerLocation);
    }
    export class $TntMinecartRenderer extends $MinecartRenderer<$MinecartTNT> {
        renderMinecartContents(entity: $MinecartTNT, partialTicks: number, state: $BlockState_, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        static renderWhiteSolidBlock(blockRenderDispatcher: $BlockRenderDispatcher, state: $BlockState_, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, whiteOverlay: boolean): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        model: $EntityModel<$MinecartTNT>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $MushroomCowRenderer extends $MobRenderer<$MushroomCow, $CowModel<$MushroomCow>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $MushroomCow): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$MushroomCow, $CowModel<$MushroomCow>>>;
        shadowStrength: number;
        model: $CowModel<$MushroomCow>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ArmadilloRenderer extends $MobRenderer<$Armadillo, $ArmadilloModel> {
        getTextureLocation(arg0: $Armadillo): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Armadillo, $ArmadilloModel>>;
        shadowStrength: number;
        model: $ArmadilloModel;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $HumanoidMobRenderer<T extends $Mob, M extends $HumanoidModel<T>> extends $MobRenderer<T, M> {
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, M>>;
        shadowStrength: number;
        model: M;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, model: M, shadowRadius: number);
        constructor(context: $EntityRendererProvider$Context, model: M, shadowRadius: number, scaleX: number, scaleY: number, scaleZ: number);
    }
    export class $LlamaSpitRenderer extends $EntityRenderer<$LlamaSpit> {
        render(entity: $LlamaSpit, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $LlamaSpit): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DrownedRenderer extends $AbstractZombieRenderer<$Drowned, $DrownedModel<$Drowned>> {
        setupRotations(entity: $Drowned, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Drowned, $DrownedModel<$Drowned>>>;
        shadowStrength: number;
        model: $DrownedModel<$Drowned>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EntityRenderers {
        static register<T extends $Entity>(entityType: $EntityType_<T>, provider: $EntityRendererProvider_<T>): void;
        static validateRegistrations(): boolean;
        static createPlayerRenderers(context: $EntityRendererProvider$Context): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        static createEntityRenderers(context: $EntityRendererProvider$Context): $Map<$EntityType<never>, $EntityRenderer<never>>;
        constructor();
    }
    export class $OcelotRenderer extends $MobRenderer<$Ocelot, $OcelotModel<$Ocelot>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Ocelot): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Ocelot, $OcelotModel<$Ocelot>>>;
        shadowStrength: number;
        model: $OcelotModel<$Ocelot>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $FireworkEntityRenderer extends $EntityRenderer<$FireworkRocketEntity> {
        render(entity: $FireworkRocketEntity, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $FireworkRocketEntity): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ItemRenderer implements $ResourceManagerReloadListener, $ItemRendererAccessor, $ItemRendererAccessor$2, $ItemRendererAccessor$1, $IdentifiableResourceReloadListener {
        render(itemStack: $ItemStack_, displayContext: $ItemDisplayContext_, leftHand: boolean, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, combinedLight: number, combinedOverlay: number, model: $BakedModel): void;
        handler$jhe000$flerovium$renderModelLists(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer, arg6: $CallbackInfo): void;
        static hasAnimatedTexture$sodium_$md$dd6cb9$0(stack: $ItemStack_): boolean;
        handler$cah000$ldlib2$injectRenderItem(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: boolean, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: $BakedModel, arg8: $CallbackInfo): void;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        renderStatic(entity: $LivingEntity | null, itemStack: $ItemStack_, diplayContext: $ItemDisplayContext_, leftHand: boolean, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, level: $Level_ | null, combinedLight: number, combinedOverlay: number, seed: number): void;
        renderStatic(stack: $ItemStack_, displayContext: $ItemDisplayContext_, combinedLight: number, combinedOverlay: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, level: $Level_ | null, seed: number): void;
        getItemModelShaper(): $ItemModelShaper;
        renderModelLists(model: $BakedModel, stack: $ItemStack_, combinedLight: number, combinedOverlay: number, poseStack: $PoseStack, buffer: $VertexConsumer): void;
        static getArmorFoilBuffer(bufferSource: $MultiBufferSource_, renderType: $RenderType, hasFoil: boolean): $VertexConsumer;
        static getFoilBuffer(bufferSource: $MultiBufferSource_, renderType: $RenderType, isItem: boolean, glint: boolean): $VertexConsumer;
        renderQuadList(poseStack: $PoseStack, buffer: $VertexConsumer, quads: $List_<$BakedQuad>, itemStack: $ItemStack_, combinedLight: number, combinedOverlay: number): void;
        getModel(stack: $ItemStack_, level: $Level_ | null, entity: $LivingEntity | null, seed: number): $BakedModel;
        modify$jhe000$flerovium$onRrenderModelLists(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer, arg6: $BakedModel, arg7: $ItemDisplayContext_): $BakedModel;
        getFabricDependencies(): $Collection<any>;
        getFabricId(): $ResourceLocation;
        getBlockEntityRenderer(): $BlockEntityWithoutLevelRenderer;
        static getCompassFoilBuffer(bufferSource: $MultiBufferSource_, renderType: $RenderType, pose: $PoseStack$Pose): $VertexConsumer;
        static getFoilBufferDirect(bufferSource: $MultiBufferSource_, renderType: $RenderType, isItem: boolean, glint: boolean): $VertexConsumer;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        getItemColors(): $ItemColors;
        catnip$getTextureManager(): $TextureManager;
        static GUI_SLOT_CENTER_X: number;
        static COMPASS_FOIL_UI_SCALE: number;
        static COMPASS_FOIL_FIRST_PERSON_SCALE: number;
        static COMPASS_FOIL_TEXTURE_SCALE: number;
        static ENCHANTED_GLINT_ENTITY: $ResourceLocation;
        blockEntityRenderer: $BlockEntityWithoutLevelRenderer;
        static GUI_SLOT_CENTER_Y: number;
        static ITEM_COUNT_BLIT_OFFSET: number;
        static ENCHANTED_GLINT_ITEM: $ResourceLocation;
        static SPYGLASS_IN_HAND_MODEL: $ModelResourceLocation;
        textureManager: $TextureManager;
        static TRIDENT_IN_HAND_MODEL: $ModelResourceLocation;
        constructor(minecraft: $Minecraft, textureManager: $TextureManager, modelManager: $ModelManager, itemColors: $ItemColors, blockEntityRenderer: $BlockEntityWithoutLevelRenderer);
        get itemModelShaper(): $ItemModelShaper;
        get fabricDependencies(): $Collection<any>;
        get fabricId(): $ResourceLocation;
        get name(): string;
        get itemColors(): $ItemColors;
    }
    export class $WardenRenderer extends $MobRenderer<$Warden, $WardenModel<$Warden>> {
        getTextureLocation(arg0: $Warden): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Warden, $WardenModel<$Warden>>>;
        shadowStrength: number;
        model: $WardenModel<$Warden>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SnowGolemRenderer extends $MobRenderer<$SnowGolem, $SnowGolemModel<$SnowGolem>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $SnowGolem): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$SnowGolem, $SnowGolemModel<$SnowGolem>>>;
        shadowStrength: number;
        model: $SnowGolemModel<$SnowGolem>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ItemEntityRenderer extends $EntityRenderer<$ItemEntity> {
        render(entity: $ItemEntity, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $ItemEntity): $ResourceLocation;
        static getRenderedAmount(count: number): number;
        static renderMultipleFromCount(itemRenderer: $ItemRenderer, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, item: $ItemStack_, model: $BakedModel, isGui3d: boolean, random: $RandomSource): void;
        static renderMultipleFromCount(itemRenderer: $ItemRenderer, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, item: $ItemStack_, random: $RandomSource, level: $Level_): void;
        static getSeedForItemStack(stack: $ItemStack_): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $BatRenderer extends $MobRenderer<$Bat, $BatModel> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Bat): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Bat, $BatModel>>;
        shadowStrength: number;
        model: $BatModel;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $DisplayRenderer$BlockDisplayRenderer extends $DisplayRenderer<$Display$BlockDisplay, $Display$BlockDisplay$BlockRenderState> {
        renderInner(arg0: $Display$BlockDisplay, arg1: $Display$BlockDisplay$BlockRenderState_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getSubState(arg0: $Display$BlockDisplay): $Display$BlockDisplay$BlockRenderState;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $CamelRenderer extends $MobRenderer<$Camel, $CamelModel<$Camel>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Camel): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Camel, $CamelModel<$Camel>>>;
        shadowStrength: number;
        model: $CamelModel<$Camel>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, layerLocation: $ModelLayerLocation);
    }
    export class $GuardianRenderer extends $MobRenderer<$Guardian, $GuardianModel> {
        render(entity: $Guardian, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Guardian): $ResourceLocation;
        shouldRender(livingEntity: $Guardian, camera: $Frustum, camX: number, arg3: number, camY: number): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Guardian, $GuardianModel>>;
        shadowStrength: number;
        model: $GuardianModel;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
        constructor(context: $EntityRendererProvider$Context, shadowRadius: number, layer: $ModelLayerLocation);
    }
    export class $EvokerRenderer<T extends $SpellcasterIllager> extends $IllagerRenderer<T> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<T, $IllagerModel<T>>>;
        shadowStrength: number;
        model: $IllagerModel<T>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $ChickenRenderer extends $MobRenderer<$Chicken, $ChickenModel<$Chicken>> {
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Chicken): $ResourceLocation;
        /**
         * Defines what float the third param in setRotationAngles of ModelBase is
         */
        getBob(livingBase: $Chicken, partialTicks: number): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$Chicken, $ChickenModel<$Chicken>>>;
        shadowStrength: number;
        model: $ChickenModel<$Chicken>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context);
    }
}
