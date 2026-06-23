import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $HumanoidArm, $LivingEntity, $HumanoidArm_, $Mob, $Entity, $AnimationState } from "@package/net/minecraft/world/entity";
import { $AbstractWindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AgeableListModelAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $ArmorStand } from "@package/net/minecraft/world/entity/decoration";
import { $List } from "@package/java/util";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AbstractHorse, $AbstractChestedHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $Turtle, $Cat, $Panda, $Fox, $PolarBear, $Sheep, $Wolf, $Bee, $Rabbit, $Parrot, $IronGolem } from "@package/net/minecraft/world/entity/animal";
import { $Function_ } from "@package/java/util/function";
import { $AnimationHolder } from "@package/net/neoforged/neoforge/client/entity/animation/json";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $Enum, $Iterable } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $PlayerModelAccessor } from "@package/com/pedrorok/hypertube/mixin/core";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $AgeableListModelAccessor as $AgeableListModelAccessor$1 } from "@package/com/jesz/createdieselgenerators/mixins";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $ImmutableList, $ImmutableList$Builder } from "@package/com/google/common/collect";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $MeshDefinition, $LayerDefinition, $CubeDeformation, $PartDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $AnimationDefinition_ } from "@package/net/minecraft/client/animation";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Frog, $Tadpole } from "@package/net/minecraft/world/entity/animal/frog";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Bogged, $Zombie, $Monster, $Strider, $Guardian, $Shulker, $Ravager, $Phantom, $Vex, $AbstractIllager, $Slime, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
export * as geom from "@package/net/minecraft/client/model/geom";
export * as dragon from "@package/net/minecraft/client/model/dragon";

declare module "@package/net/minecraft/client/model" {
    export class $WaterPatchModel {
    }
    export interface $WaterPatchModel {
        waterPatch(): $ModelPart;
    }
    /**
     * Values that may be interpreted as {@link $WaterPatchModel}.
     */
    export type $WaterPatchModel_ = (() => $ModelPart);
    export class $RabbitModel<T extends $Rabbit> extends $EntityModel<T> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        handler$dfn004$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $BoatModel extends $ListModel<$Boat> implements $WaterPatchModel {
        waterPatch(): $ModelPart;
        static createBodyModel(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Boat, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        createPartsBuilder(root: $ModelPart): $ImmutableList$Builder<$ModelPart>;
        static createChildren(root: $PartDefinition): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $EndermiteModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $RaftModel extends $ListModel<$Boat> {
        parts(): $ImmutableList<$ModelPart>;
        static createBodyModel(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Boat, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        createPartsBuilder(root: $ModelPart): $ImmutableList$Builder<$ModelPart>;
        static createChildren(root: $PartDefinition): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $ShieldModel extends $Model {
        handle(): $ModelPart;
        plate(): $ModelPart;
        static createLayer(): $LayerDefinition;
        constructor(root: $ModelPart);
    }
    export class $QuadrupedModel<T extends $Entity> extends $AgeableListModel<T> {
        static createBodyMesh(yOffset: number, cubeDeformation: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart, scaleHead: boolean, babyYHeadOffset: number, babyZHeadOffset: number, babyHeadScale: number, babyBodyScale: number, bodyYOffset: number);
    }
    export class $AbstractZombieModel<T extends $Monster> extends $HumanoidModel<T> {
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        isAggressive(entity: T): boolean;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $HumanoidArmorModel<T extends $LivingEntity> extends $HumanoidModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $OcelotModel<T extends $Entity> extends $AgeableListModel<T> {
        static createBodyMesh(cubeDeformation: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        static SITTING_STATE: number;
        static BACK_LEG_Z: number;
        body: $ModelPart;
        static BACK_LEG_Y: number;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        tail1: $ModelPart;
        static FRONT_LEG_Y: number;
        tail2: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        state: number;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $ArmedModel {
    }
    export interface $ArmedModel {
        translateToHand(side: $HumanoidArm_, poseStack: $PoseStack): void;
    }
    /**
     * Values that may be interpreted as {@link $ArmedModel}.
     */
    export type $ArmedModel_ = ((arg0: $HumanoidArm, arg1: $PoseStack) => void);
    export class $PufferfishMidModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $VexModel extends $HierarchicalModel<$Vex> implements $ArmedModel {
        static createBodyLayer(): $LayerDefinition;
        translateToHand(side: $HumanoidArm_, poseStack: $PoseStack): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Vex, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $TurtleModel<T extends $Turtle> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $CatModel<T extends $Cat> extends $OcelotModel<T> {
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        static SITTING_STATE: number;
        static BACK_LEG_Z: number;
        body: $ModelPart;
        static BACK_LEG_Y: number;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        tail1: $ModelPart;
        static FRONT_LEG_Y: number;
        tail2: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        state: number;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $HeadedModel {
    }
    export interface $HeadedModel {
        getHead(): $ModelPart;
        get head(): $ModelPart;
    }
    /**
     * Values that may be interpreted as {@link $HeadedModel}.
     */
    export type $HeadedModel_ = (() => $ModelPart);
    export class $AnimationUtils {
        static animateCrossbowCharge(rightArm: $ModelPart, leftArm: $ModelPart, livingEntity: $LivingEntity, rightHanded: boolean): void;
        static animateCrossbowHold(rightArm: $ModelPart, leftArm: $ModelPart, head: $ModelPart, rightHanded: boolean): void;
        static bobModelPart(modelPart: $ModelPart, ageInTicks: number, multiplier: number): void;
        static animateZombieArms(leftArm: $ModelPart, rightArm: $ModelPart, isAggressive: boolean, attackTime: number, ageInTicks: number): void;
        static swingWeaponDown<T extends $Mob>(rightArm: $ModelPart, leftArm: $ModelPart, mob: T, attackTime: number, ageInTicks: number): void;
        static bobArms(rightArm: $ModelPart, leftArm: $ModelPart, ageInTicks: number): void;
        constructor();
    }
    export class $BlazeModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $ZombieVillagerModel<T extends $Zombie> extends $HumanoidModel<T> implements $VillagerHeadModel {
        static createBodyLayer(): $LayerDefinition;
        hatVisible(visible: boolean): void;
        static createArmorLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $FoxModel<T extends $Fox> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        head: $ModelPart;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $EvokerFangsModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $AgeableHierarchicalModel<E extends $Entity> extends $HierarchicalModel<E> {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(youngScaleFactor: number, bodyYOffset: number);
        constructor(youngScaleFactor: number, bodyYOffset: number, renderType: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $HierarchicalModel<E extends $Entity> extends $EntityModel<E> {
        root(): $ModelPart;
        animate(animationState: $AnimationState, animationDefinition: $AnimationDefinition_, ageInTicks: number, speed: number): void;
        animate(arg0: $AnimationState, arg1: $AnimationHolder, arg2: number): void;
        animate(arg0: $AnimationState, arg1: $AnimationHolder, arg2: number, arg3: number): void;
        animate(animationState: $AnimationState, animationDefinition: $AnimationDefinition_, ageInTicks: number): void;
        applyStatic(arg0: $AnimationHolder): void;
        applyStatic(animationDefinition: $AnimationDefinition_): void;
        animateWalk(arg0: $AnimationHolder, arg1: number, arg2: number, arg3: number, arg4: number): void;
        animateWalk(animationDefinition: $AnimationDefinition_, limbSwing: number, limbSwingAmount: number, maxAnimationSpeed: number, animationScaleFactor: number): void;
        static getAnimation(arg0: $ResourceLocation_): $AnimationHolder;
        getAnyDescendantWithName(name: string): ($ModelPart) | undefined;
        handler$dfo005$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        constructor(renderType: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $AgeableListModel<E extends $Entity> extends $EntityModel<E> implements $AgeableListModelAccessor, $AgeableListModelAccessor$1 {
        handler$dfd000$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        headParts(): $Iterable<$ModelPart>;
        bodyParts(): $Iterable<$ModelPart>;
        getScaleHead(): boolean;
        getBabyZHeadOffset(): number;
        getBabyHeadScale(): number;
        getBabyYHeadOffset(): number;
        create$callHeadParts(): $Iterable<$ModelPart>;
        create$callBodyParts(): $Iterable<$ModelPart>;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor();
        constructor(renderType: $Function_<$ResourceLocation, $RenderType>, scaleHead: boolean, babyYHeadOffset: number, babyZHeadOffset: number, babyHeadScale: number, babyBodyScale: number, bodyYOffset: number);
        constructor(scaleHead: boolean, babyYHeadOffset: number, babyZHeadOffset: number, babyHeadScale: number, babyBodyScale: number, bodyYOffset: number);
        constructor(scaleHead: boolean, babyYHeadOffset: number, babyZHeadOffset: number);
    }
    export class $ArmorStandModel extends $ArmorStandArmorModel {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(entity: $ArmorStand, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $SilverfishModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $HoglinModel<T extends $Mob> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $RavagerModel extends $HierarchicalModel<$Ravager> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(entity: $Ravager, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Ravager, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $SnowGolemModel<T extends $Entity> extends $HierarchicalModel<T> {
        getHead(): $ModelPart;
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
        get head(): $ModelPart;
    }
    export class $ChestedHorseModel<T extends $AbstractChestedHorse> extends $HorseModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        static HEAD_PARTS: string;
        babyYHeadOffset: number;
        babyBodyScale: number;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $GuardianModel extends $HierarchicalModel<$Guardian> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Guardian, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $SheepModel<T extends $Sheep> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $SquidModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $ColorableAgeableListModel<E extends $Entity> extends $AgeableListModel<E> {
        setColor(color: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor();
        set color(value: number);
    }
    export class $WardenModel<T extends $Warden> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        getBioluminescentLayerModelParts(): $List<$ModelPart>;
        getPulsatingSpotsLayerModelParts(): $List<$ModelPart>;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        getHeartLayerModelParts(): $List<$ModelPart>;
        getTendrilsLayerModelParts(): $List<$ModelPart>;
        leftRibcage: $ModelPart;
        rightRibcage: $ModelPart;
        attackTime: number;
        leftTendril: $ModelPart;
        young: boolean;
        rightArm: $ModelPart;
        bone: $ModelPart;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        head: $ModelPart;
        rightLeg: $ModelPart;
        leftArm: $ModelPart;
        rightTendril: $ModelPart;
        constructor(root: $ModelPart);
        get bioluminescentLayerModelParts(): $List<$ModelPart>;
        get pulsatingSpotsLayerModelParts(): $List<$ModelPart>;
        get heartLayerModelParts(): $List<$ModelPart>;
        get tendrilsLayerModelParts(): $List<$ModelPart>;
    }
    export class $EndermanModel<T extends $LivingEntity> extends $HumanoidModel<T> {
        static createBodyLayer(): $LayerDefinition;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        creepy: boolean;
        carrying: boolean;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $HorseModel<T extends $AbstractHorse> extends $AgeableListModel<T> {
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        static createBodyMesh(cubeDeformation: $CubeDeformation): $MeshDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        static HEAD_PARTS: string;
        babyYHeadOffset: number;
        babyBodyScale: number;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $AllayModel extends $HierarchicalModel<$Allay> implements $ArmedModel {
        static createBodyLayer(): $LayerDefinition;
        translateToHand(side: $HumanoidArm_, poseStack: $PoseStack): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Allay, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $AxolotlModel<T extends $Axolotl> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        static SWIMMING_LEG_XROT: number;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $EntityModel<T extends $Entity> extends $Model {
        copyPropertiesTo(otherModel: $EntityModel<T>): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        constructor(renderType: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $ArmadilloModel extends $AgeableHierarchicalModel<$Armadillo> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Armadillo, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $ParrotModel$State extends $Enum<$ParrotModel$State> {
        static values(): $ParrotModel$State[];
        static valueOf(arg0: string): $ParrotModel$State;
        static PARTY: $ParrotModel$State;
        static SITTING: $ParrotModel$State;
        static FLYING: $ParrotModel$State;
        static ON_SHOULDER: $ParrotModel$State;
        static STANDING: $ParrotModel$State;
    }
    /**
     * Values that may be interpreted as {@link $ParrotModel$State}.
     */
    export type $ParrotModel$State_ = "flying" | "standing" | "sitting" | "party" | "on_shoulder";
    export class $WolfModel<T extends $Wolf> extends $ColorableAgeableListModel<T> {
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        static createMeshDefinition(cubeDeformation: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $ChestBoatModel extends $BoatModel {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $BatModel extends $HierarchicalModel<$Bat> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Bat, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $SlimeModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createOuterBodyLayer(): $LayerDefinition;
        static createInnerBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $SkullModel extends $SkullModelBase {
        static createMobHeadLayer(): $LayerDefinition;
        static createHeadModel(): $MeshDefinition;
        static createHumanoidHeadLayer(): $LayerDefinition;
        head: $ModelPart;
        constructor(root: $ModelPart);
    }
    export class $SheepFurModel<T extends $Sheep> extends $QuadrupedModel<T> {
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        static createFurLayer(): $LayerDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $PiglinModel<T extends $Mob> extends $PlayerModel<T> {
        setupAttackAnimation(livingEntity: T, ageInTicks: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        static createMesh(cubeDeformation: $CubeDeformation): $MeshDefinition;
        static addHead(cubeDeformation: $CubeDeformation, mesh: $MeshDefinition): void;
        scaleHead: boolean;
        young: boolean;
        leftSleeve: $ModelPart;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        slim: boolean;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        rightPants: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        jacket: $ModelPart;
        leftPants: $ModelPart;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightSleeve: $ModelPart;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightEar: $ModelPart;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $HumanoidModel$ArmPose extends $Enum<$HumanoidModel$ArmPose> implements $IExtensibleEnum {
        static values(): $HumanoidModel$ArmPose[];
        static valueOf(arg0: string): $HumanoidModel$ArmPose;
        static getExtensionInfo(): $ExtensionInfo;
        isTwoHanded(): boolean;
        applyTransform<T extends $LivingEntity>(arg0: $HumanoidModel<T>, arg1: T, arg2: $HumanoidArm_): void;
        static BOW_AND_ARROW: $HumanoidModel$ArmPose;
        static CROSSBOW_HOLD: $HumanoidModel$ArmPose;
        static SUPERBWARFARE_SUPER_STAR_SHOOTER_POSE: $HumanoidModel$ArmPose;
        static SUPERBWARFARE_MINIGUN_POSE: $HumanoidModel$ArmPose;
        static BLOCK: $HumanoidModel$ArmPose;
        static SUPERBWARFARE_LUNGE_MINE_POSE: $HumanoidModel$ArmPose;
        static THROW_SPEAR: $HumanoidModel$ArmPose;
        static ITEM: $HumanoidModel$ArmPose;
        static BRUSH: $HumanoidModel$ArmPose;
        static TOOT_HORN: $HumanoidModel$ArmPose;
        static CROSSBOW_CHARGE: $HumanoidModel$ArmPose;
        static SUPERBWARFARE_M2_POSE: $HumanoidModel$ArmPose;
        static EMPTY: $HumanoidModel$ArmPose;
        static SPYGLASS: $HumanoidModel$ArmPose;
        static get extensionInfo(): $ExtensionInfo;
        get twoHanded(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $HumanoidModel$ArmPose}.
     */
    export type $HumanoidModel$ArmPose_ = "empty" | "item" | "block" | "bow_and_arrow" | "throw_spear" | "crossbow_charge" | "crossbow_hold" | "spyglass" | "toot_horn" | "brush" | "superbwarfare_lunge_mine_pose" | "superbwarfare_m2_pose" | "superbwarfare_minigun_pose" | "superbwarfare_super_star_shooter_pose";
    export class $GhastModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $Model {
        renderType(location: $ResourceLocation_): $RenderType;
        renderToBuffer(poseStack: $PoseStack, vertexConsumer: $VertexConsumer, packedLight: number, packedOverlay: number): void;
        renderToBuffer(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number, color: number): void;
        constructor(renderType: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $PufferfishBigModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $BeeModel<T extends $Bee> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $GoatModel<T extends $Goat> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $SalmonModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $VillagerModel<T extends $Entity> extends $HierarchicalModel<T> implements $HeadedModel, $VillagerHeadModel {
        getHead(): $ModelPart;
        hatVisible(visible: boolean): void;
        static createBodyModel(): $MeshDefinition;
        nose: $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
        get head(): $ModelPart;
    }
    export class $TropicalFishModelA<T extends $Entity> extends $ColorableHierarchicalModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $TropicalFishModelB<T extends $Entity> extends $ColorableHierarchicalModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $PigModel<T extends $Entity> extends $QuadrupedModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $IllagerModel<T extends $AbstractIllager> extends $HierarchicalModel<T> implements $ArmedModel, $HeadedModel {
        getHat(): $ModelPart;
        getHead(): $ModelPart;
        static createBodyLayer(): $LayerDefinition;
        translateToHand(side: $HumanoidArm_, poseStack: $PoseStack): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
        get hat(): $ModelPart;
        get head(): $ModelPart;
    }
    export class $SnifferModel<T extends $Sniffer> extends $AgeableHierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $BookModel extends $Model {
        render(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number, color: number): void;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(time: number, rightPageFlipAmount: number, leftPageFlipAmount: number, bookOpenAmount: number): void;
        constructor(root: $ModelPart);
    }
    export class $DrownedModel<T extends $Zombie> extends $ZombieModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $HumanoidModel<T extends $LivingEntity> extends $AgeableListModel<T> implements $ArmedModel, $HeadedModel {
        getHead(): $ModelPart;
        handler$gkh001$moonlight$setupAnim(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        wrapMethod$cgi000$createbigcannons$setupAnimHead(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Operation_<any>): void;
        copyPropertiesTo(model: $HumanoidModel<T>): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        setupAttackAnimation(livingEntity: T, ageInTicks: number): void;
        handler$dbg000$immersiveengineering$rotationAngleCallback(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        setAllVisible(visible: boolean): void;
        translateToHand(side: $HumanoidArm_, poseStack: $PoseStack): void;
        handler$gkh000$moonlight$poseLeftArm(arg0: $LivingEntity, arg1: $CallbackInfo): void;
        handler$gkh000$moonlight$poseRightArm(arg0: $LivingEntity, arg1: $CallbackInfo): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        rotlerpRad(angle: number, maxAngle: number, mul: number): number;
        getArm(side: $HumanoidArm_): $ModelPart;
        static createMesh(cubeDeformation: $CubeDeformation, yOffset: number): $MeshDefinition;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
        constructor(root: $ModelPart, renderType: $Function_<$ResourceLocation, $RenderType>);
        set allVisible(value: boolean);
    }
    export class $CowModel<T extends $Entity> extends $QuadrupedModel<T> {
        getHead(): $ModelPart;
        static createBodyLayer(): $LayerDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $CreeperModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $PlayerModel<T extends $LivingEntity> extends $HumanoidModel<T> implements $PlayerModelAccessor {
        static createMesh(cubeDeformation: $CubeDeformation, slim: boolean): $MeshDefinition;
        getRandomModelPart(random: $RandomSource): $ModelPart;
        renderCloak(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number): void;
        renderEars(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number): void;
        createHypertube$getCloak(): $ModelPart;
        scaleHead: boolean;
        young: boolean;
        leftSleeve: $ModelPart;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        slim: boolean;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        rightPants: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        jacket: $ModelPart;
        leftPants: $ModelPart;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightSleeve: $ModelPart;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart, slim: boolean);
    }
    export class $StriderModel<T extends $Strider> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Strider, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $MinecartModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $SpiderModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createSpiderBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $WitchModel<T extends $Entity> extends $VillagerModel<T> {
        static createBodyLayer(): $LayerDefinition;
        getNose(): $ModelPart;
        setHoldingItem(holdingItem: boolean): void;
        nose: $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
        set holdingItem(value: boolean);
    }
    export class $ShulkerModel<T extends $Shulker> extends $ListModel<T> {
        getHead(): $ModelPart;
        static createBodyLayer(): $LayerDefinition;
        getLid(): $ModelPart;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
        get head(): $ModelPart;
        get lid(): $ModelPart;
    }
    export class $TridentModel extends $Model {
        static createLayer(): $LayerDefinition;
        static TEXTURE: $ResourceLocation;
        constructor(root: $ModelPart);
    }
    export class $CodModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $ListModel<E extends $Entity> extends $EntityModel<E> {
        parts(): $Iterable<$ModelPart>;
        handler$dfi001$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        constructor(arg0: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $SkeletonModel<T extends $Mob> extends $HumanoidModel<T> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        static createDefaultSkeletonMesh(partDefinition: $PartDefinition): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $ModelUtils {
        static rotlerpRad(min: number, max: number, delta: number): number;
        constructor();
    }
    export class $ElytraModel<T extends $LivingEntity> extends $AgeableListModel<T> {
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        static createLayer(): $LayerDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $DolphinModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $CamelModel<T extends $Camel> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $BreezeModel<T extends $Breeze> extends $HierarchicalModel<T> {
        head(): $ModelPart;
        wind(): $ModelPart;
        static createBodyLayer(width: number, height: number): $LayerDefinition;
        eyes(): $ModelPart;
        rods(): $ModelPart;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $PolarBearModel<T extends $PolarBear> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $ArmorStandArmorModel extends $HumanoidModel<$ArmorStand> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $ArmorStand, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $LeashKnotModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $PiglinHeadModel extends $SkullModelBase {
        static createHeadModel(): $MeshDefinition;
        constructor(root: $ModelPart);
    }
    export class $ColorableHierarchicalModel<E extends $Entity> extends $HierarchicalModel<E> {
        setColor(color: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        set color(value: number);
    }
    export class $ParrotModel extends $HierarchicalModel<$Parrot> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(entity: $Parrot, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        renderOnShoulder(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number, limbSwing: number, limbSwingAmount: number, netHeadYaw: number, headPitch: number, tickCount: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Parrot, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $LlamaModel<T extends $AbstractChestedHorse> extends $EntityModel<T> {
        handler$dfl003$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $FrogModel<T extends $Frog> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $VillagerHeadModel {
    }
    export interface $VillagerHeadModel {
        hatVisible(visible: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $VillagerHeadModel}.
     */
    export type $VillagerHeadModel_ = ((arg0: boolean) => void);
    export class $TadpoleModel<T extends $Tadpole> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $IronGolemModel<T extends $IronGolem> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        getFlowerHoldingArm(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
        get flowerHoldingArm(): $ModelPart;
    }
    export class $LavaSlimeModel<T extends $Slime> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $WitherBossModel<T extends $WitherBoss> extends $HierarchicalModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $SkullModelBase extends $Model {
        setupAnim(mouthAnimation: number, yRot: number, xRot: number): void;
        constructor();
    }
    export class $PhantomModel<T extends $Phantom> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $GiantZombieModel extends $AbstractZombieModel<$Giant> {
        isAggressive(entity: $Giant): boolean;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $ZombieModel<T extends $Zombie> extends $AbstractZombieModel<T> {
        isAggressive(entity: T): boolean;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $WindChargeModel extends $HierarchicalModel<$AbstractWindCharge> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $AbstractWindCharge, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $BoggedModel extends $SkeletonModel<$Bogged> {
        prepareMobModel(arg0: $Bogged, arg1: number, arg2: number, arg3: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $ChestRaftModel extends $RaftModel {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $LlamaSpitModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $PandaModel<T extends $Panda> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $ChickenModel<T extends $Entity> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        scaleHead: boolean;
        static RED_THING: string;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $PufferfishSmallModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $ShulkerBulletModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
}
