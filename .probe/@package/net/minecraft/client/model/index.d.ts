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
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        static createBodyLayer(): $LayerDefinition;
        handler$dkj004$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $BoatModel extends $ListModel<$Boat> implements $WaterPatchModel {
        static createBodyModel(): $LayerDefinition;
        setupAnim(arg0: $Boat, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        waterPatch(): $ModelPart;
        static createChildren(arg0: $PartDefinition): void;
        createPartsBuilder(arg0: $ModelPart): $ImmutableList$Builder<$ModelPart>;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $EndermiteModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $RaftModel extends $ListModel<$Boat> {
        parts(): $ImmutableList<$ModelPart>;
        static createBodyModel(): $LayerDefinition;
        setupAnim(arg0: $Boat, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static createChildren(arg0: $PartDefinition): void;
        createPartsBuilder(arg0: $ModelPart): $ImmutableList$Builder<$ModelPart>;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $ShieldModel extends $Model {
        handle(): $ModelPart;
        plate(): $ModelPart;
        static createLayer(): $LayerDefinition;
        constructor(arg0: $ModelPart);
    }
    export class $QuadrupedModel<T extends $Entity> extends $AgeableListModel<T> {
        static createBodyMesh(arg0: number, arg1: $CubeDeformation): $MeshDefinition;
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
        constructor(arg0: $ModelPart, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $AbstractZombieModel<T extends $Monster> extends $HumanoidModel<T> {
        isAggressive(arg0: T): boolean;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
    export class $HumanoidArmorModel<T extends $LivingEntity> extends $HumanoidModel<T> {
        static createBodyLayer(arg0: $CubeDeformation): $MeshDefinition;
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
    export class $OcelotModel<T extends $Entity> extends $AgeableListModel<T> {
        static createBodyMesh(arg0: $CubeDeformation): $MeshDefinition;
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
        constructor(arg0: $ModelPart);
    }
    export class $ArmedModel {
    }
    export interface $ArmedModel {
        translateToHand(arg0: $HumanoidArm_, arg1: $PoseStack): void;
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
        constructor(arg0: $ModelPart);
    }
    export class $VexModel extends $HierarchicalModel<$Vex> implements $ArmedModel {
        static createBodyLayer(): $LayerDefinition;
        translateToHand(arg0: $HumanoidArm_, arg1: $PoseStack): void;
        setupAnim(arg0: $Vex, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $TurtleModel<T extends $Turtle> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(arg0: $ModelPart);
    }
    export class $CatModel<T extends $Cat> extends $OcelotModel<T> {
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(arg0: $ModelPart);
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
        static bobModelPart(arg0: $ModelPart, arg1: number, arg2: number): void;
        static animateZombieArms(arg0: $ModelPart, arg1: $ModelPart, arg2: boolean, arg3: number, arg4: number): void;
        static swingWeaponDown<T extends $Mob>(arg0: $ModelPart, arg1: $ModelPart, arg2: T, arg3: number, arg4: number): void;
        static animateCrossbowCharge(arg0: $ModelPart, arg1: $ModelPart, arg2: $LivingEntity, arg3: boolean): void;
        static animateCrossbowHold(arg0: $ModelPart, arg1: $ModelPart, arg2: $ModelPart, arg3: boolean): void;
        static bobArms(arg0: $ModelPart, arg1: $ModelPart, arg2: number): void;
        constructor();
    }
    export class $BlazeModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $ZombieVillagerModel<T extends $Zombie> extends $HumanoidModel<T> implements $VillagerHeadModel {
        static createBodyLayer(): $LayerDefinition;
        hatVisible(arg0: boolean): void;
        static createArmorLayer(arg0: $CubeDeformation): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
    export class $FoxModel<T extends $Fox> extends $AgeableListModel<T> {
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(arg0: $ModelPart);
    }
    export class $EvokerFangsModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $AgeableHierarchicalModel<E extends $Entity> extends $HierarchicalModel<E> {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $HierarchicalModel<E extends $Entity> extends $EntityModel<E> {
        root(): $ModelPart;
        animate(arg0: $AnimationState, arg1: $AnimationDefinition_, arg2: number, arg3: number): void;
        animate(arg0: $AnimationState, arg1: $AnimationHolder, arg2: number): void;
        animate(arg0: $AnimationState, arg1: $AnimationDefinition_, arg2: number): void;
        animate(arg0: $AnimationState, arg1: $AnimationHolder, arg2: number, arg3: number): void;
        handler$dkk005$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        animateWalk(arg0: $AnimationHolder, arg1: number, arg2: number, arg3: number, arg4: number): void;
        animateWalk(arg0: $AnimationDefinition_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        applyStatic(arg0: $AnimationHolder): void;
        applyStatic(arg0: $AnimationDefinition_): void;
        static getAnimation(arg0: $ResourceLocation_): $AnimationHolder;
        getAnyDescendantWithName(arg0: string): ($ModelPart) | undefined;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        constructor(arg0: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $AgeableListModel<E extends $Entity> extends $EntityModel<E> implements $AgeableListModelAccessor, $AgeableListModelAccessor$1 {
        headParts(): $Iterable<$ModelPart>;
        bodyParts(): $Iterable<$ModelPart>;
        handler$djp000$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        create$callHeadParts(): $Iterable<$ModelPart>;
        create$callBodyParts(): $Iterable<$ModelPart>;
        getBabyHeadScale(): number;
        getBabyYHeadOffset(): number;
        getBabyZHeadOffset(): number;
        getScaleHead(): boolean;
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
        constructor(arg0: $Function_<$ResourceLocation, $RenderType>, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: boolean, arg1: number, arg2: number);
    }
    export class $ArmorStandModel extends $ArmorStandArmorModel {
        prepareMobModel(arg0: $ArmorStand, arg1: number, arg2: number, arg3: number): void;
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
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $SilverfishModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $HoglinModel<T extends $Mob> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $RavagerModel extends $HierarchicalModel<$Ravager> {
        prepareMobModel(arg0: $Ravager, arg1: number, arg2: number, arg3: number): void;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: $Ravager, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $SnowGolemModel<T extends $Entity> extends $HierarchicalModel<T> {
        getHead(): $ModelPart;
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
        get head(): $ModelPart;
    }
    export class $ChestedHorseModel<T extends $AbstractChestedHorse> extends $HorseModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(arg0: $ModelPart);
    }
    export class $GuardianModel extends $HierarchicalModel<$Guardian> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: $Guardian, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $SheepModel<T extends $Sheep> extends $QuadrupedModel<T> {
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(arg0: $ModelPart);
    }
    export class $SquidModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $ColorableAgeableListModel<E extends $Entity> extends $AgeableListModel<E> {
        setColor(arg0: number): void;
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
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getTendrilsLayerModelParts(): $List<$ModelPart>;
        getHeartLayerModelParts(): $List<$ModelPart>;
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
        constructor(arg0: $ModelPart);
        get bioluminescentLayerModelParts(): $List<$ModelPart>;
        get pulsatingSpotsLayerModelParts(): $List<$ModelPart>;
        get tendrilsLayerModelParts(): $List<$ModelPart>;
        get heartLayerModelParts(): $List<$ModelPart>;
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
        constructor(arg0: $ModelPart);
    }
    export class $HorseModel<T extends $AbstractHorse> extends $AgeableListModel<T> {
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        static createBodyMesh(arg0: $CubeDeformation): $MeshDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(arg0: $ModelPart);
    }
    export class $AllayModel extends $HierarchicalModel<$Allay> implements $ArmedModel {
        static createBodyLayer(): $LayerDefinition;
        translateToHand(arg0: $HumanoidArm_, arg1: $PoseStack): void;
        setupAnim(arg0: $Allay, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $AxolotlModel<T extends $Axolotl> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(arg0: $ModelPart);
    }
    export class $EntityModel<T extends $Entity> extends $Model {
        copyPropertiesTo(arg0: $EntityModel<T>): void;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        constructor(arg0: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $ArmadilloModel extends $AgeableHierarchicalModel<$Armadillo> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: $Armadillo, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
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
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static createMeshDefinition(arg0: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $ChestBoatModel extends $BoatModel {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $BatModel extends $HierarchicalModel<$Bat> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: $Bat, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $SlimeModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createOuterBodyLayer(): $LayerDefinition;
        static createInnerBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $SkullModel extends $SkullModelBase {
        static createHumanoidHeadLayer(): $LayerDefinition;
        static createMobHeadLayer(): $LayerDefinition;
        static createHeadModel(): $MeshDefinition;
        head: $ModelPart;
        constructor(arg0: $ModelPart);
    }
    export class $SheepFurModel<T extends $Sheep> extends $QuadrupedModel<T> {
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(arg0: $ModelPart);
    }
    export class $PiglinModel<T extends $Mob> extends $PlayerModel<T> {
        static createMesh(arg0: $CubeDeformation): $MeshDefinition;
        setupAttackAnimation(arg0: T, arg1: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static addHead(arg0: $CubeDeformation, arg1: $MeshDefinition): void;
        scaleHead: boolean;
        young: boolean;
        leftSleeve: $ModelPart;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
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
        constructor(arg0: $ModelPart);
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
        constructor(arg0: $ModelPart);
    }
    export class $Model {
        renderToBuffer(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number): void;
        renderToBuffer(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number): void;
        renderType(arg0: $ResourceLocation_): $RenderType;
        constructor(arg0: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $PufferfishBigModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $BeeModel<T extends $Bee> extends $AgeableListModel<T> {
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $GoatModel<T extends $Goat> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(arg0: $ModelPart);
    }
    export class $SalmonModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $VillagerModel<T extends $Entity> extends $HierarchicalModel<T> implements $HeadedModel, $VillagerHeadModel {
        getHead(): $ModelPart;
        hatVisible(arg0: boolean): void;
        static createBodyModel(): $MeshDefinition;
        nose: $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
        get head(): $ModelPart;
    }
    export class $TropicalFishModelA<T extends $Entity> extends $ColorableHierarchicalModel<T> {
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $TropicalFishModelB<T extends $Entity> extends $ColorableHierarchicalModel<T> {
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $PigModel<T extends $Entity> extends $QuadrupedModel<T> {
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
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
        constructor(arg0: $ModelPart);
    }
    export class $IllagerModel<T extends $AbstractIllager> extends $HierarchicalModel<T> implements $ArmedModel, $HeadedModel {
        getHead(): $ModelPart;
        static createBodyLayer(): $LayerDefinition;
        translateToHand(arg0: $HumanoidArm_, arg1: $PoseStack): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getHat(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
        get head(): $ModelPart;
        get hat(): $ModelPart;
    }
    export class $SnifferModel<T extends $Sniffer> extends $AgeableHierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $BookModel extends $Model {
        render(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number): void;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: number, arg1: number, arg2: number, arg3: number): void;
        constructor(arg0: $ModelPart);
    }
    export class $DrownedModel<T extends $Zombie> extends $ZombieModel<T> {
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
    export class $HumanoidModel<T extends $LivingEntity> extends $AgeableListModel<T> implements $ArmedModel, $HeadedModel {
        copyPropertiesTo(arg0: $HumanoidModel<T>): void;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        getHead(): $ModelPart;
        getArm(arg0: $HumanoidArm_): $ModelPart;
        static createMesh(arg0: $CubeDeformation, arg1: number): $MeshDefinition;
        rotlerpRad(arg0: number, arg1: number, arg2: number): number;
        translateToHand(arg0: $HumanoidArm_, arg1: $PoseStack): void;
        setAllVisible(arg0: boolean): void;
        handler$ckn000$createbigcannons$setupAnimHead(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$ckn000$createbigcannons$setupAnimNearTail(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$goh001$moonlight$setupAnim(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        setupAttackAnimation(arg0: T, arg1: number): void;
        handler$dgb000$immersiveengineering$rotationAngleCallback(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        handler$goh000$moonlight$poseLeftArm(arg0: $LivingEntity, arg1: $CallbackInfo): void;
        handler$goh000$moonlight$poseRightArm(arg0: $LivingEntity, arg1: $CallbackInfo): void;
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
        constructor(arg0: $ModelPart, arg1: $Function_<$ResourceLocation, $RenderType>);
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
        constructor(arg0: $ModelPart);
    }
    export class $CreeperModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $PlayerModel<T extends $LivingEntity> extends $HumanoidModel<T> implements $PlayerModelAccessor {
        static createMesh(arg0: $CubeDeformation, arg1: boolean): $MeshDefinition;
        renderEars(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number): void;
        renderCloak(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number): void;
        getRandomModelPart(arg0: $RandomSource): $ModelPart;
        createHypertube$getCloak(): $ModelPart;
        scaleHead: boolean;
        young: boolean;
        leftSleeve: $ModelPart;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
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
        constructor(arg0: $ModelPart, arg1: boolean);
    }
    export class $StriderModel<T extends $Strider> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: $Strider, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $MinecartModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $SpiderModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createSpiderBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $WitchModel<T extends $Entity> extends $VillagerModel<T> {
        static createBodyLayer(): $LayerDefinition;
        getNose(): $ModelPart;
        setHoldingItem(arg0: boolean): void;
        nose: $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
        set holdingItem(value: boolean);
    }
    export class $ShulkerModel<T extends $Shulker> extends $ListModel<T> {
        getHead(): $ModelPart;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getLid(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
        get head(): $ModelPart;
        get lid(): $ModelPart;
    }
    export class $TridentModel extends $Model {
        static createLayer(): $LayerDefinition;
        static TEXTURE: $ResourceLocation;
        constructor(arg0: $ModelPart);
    }
    export class $CodModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $ListModel<E extends $Entity> extends $EntityModel<E> {
        parts(): $Iterable<$ModelPart>;
        handler$dke001$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        constructor(arg0: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $SkeletonModel<T extends $Mob> extends $HumanoidModel<T> {
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static createDefaultSkeletonMesh(arg0: $PartDefinition): void;
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
    export class $ModelUtils {
        static rotlerpRad(arg0: number, arg1: number, arg2: number): number;
        constructor();
    }
    export class $ElytraModel<T extends $LivingEntity> extends $AgeableListModel<T> {
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(arg0: $ModelPart);
    }
    export class $DolphinModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $CamelModel<T extends $Camel> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $BreezeModel<T extends $Breeze> extends $HierarchicalModel<T> {
        head(): $ModelPart;
        static createBodyLayer(arg0: number, arg1: number): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        wind(): $ModelPart;
        rods(): $ModelPart;
        eyes(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $PolarBearModel<T extends $PolarBear> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(arg0: $ModelPart);
    }
    export class $ArmorStandArmorModel extends $HumanoidModel<$ArmorStand> {
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        setupAnim(arg0: $ArmorStand, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
    export class $LeashKnotModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $PiglinHeadModel extends $SkullModelBase {
        static createHeadModel(): $MeshDefinition;
        constructor(arg0: $ModelPart);
    }
    export class $ColorableHierarchicalModel<E extends $Entity> extends $HierarchicalModel<E> {
        setColor(arg0: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        set color(value: number);
    }
    export class $ParrotModel extends $HierarchicalModel<$Parrot> {
        prepareMobModel(arg0: $Parrot, arg1: number, arg2: number, arg3: number): void;
        static createBodyLayer(): $LayerDefinition;
        renderOnShoulder(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        setupAnim(arg0: $Parrot, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $LlamaModel<T extends $AbstractChestedHorse> extends $EntityModel<T> {
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        handler$dkh003$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $FrogModel<T extends $Frog> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $VillagerHeadModel {
    }
    export interface $VillagerHeadModel {
        hatVisible(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $VillagerHeadModel}.
     */
    export type $VillagerHeadModel_ = ((arg0: boolean) => void);
    export class $TadpoleModel<T extends $Tadpole> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(arg0: $ModelPart);
    }
    export class $IronGolemModel<T extends $IronGolem> extends $HierarchicalModel<T> {
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getFlowerHoldingArm(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
        get flowerHoldingArm(): $ModelPart;
    }
    export class $LavaSlimeModel<T extends $Slime> extends $HierarchicalModel<T> {
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $WitherBossModel<T extends $WitherBoss> extends $HierarchicalModel<T> {
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        static createBodyLayer(arg0: $CubeDeformation): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $SkullModelBase extends $Model {
        setupAnim(arg0: number, arg1: number, arg2: number): void;
        constructor();
    }
    export class $PhantomModel<T extends $Phantom> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $GiantZombieModel extends $AbstractZombieModel<$Giant> {
        isAggressive(arg0: $Giant): boolean;
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
    export class $ZombieModel<T extends $Zombie> extends $AbstractZombieModel<T> {
        isAggressive(arg0: T): boolean;
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
    export class $WindChargeModel extends $HierarchicalModel<$AbstractWindCharge> {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: $AbstractWindCharge, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
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
        constructor(arg0: $ModelPart);
    }
    export class $PandaModel<T extends $Panda> extends $QuadrupedModel<T> {
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(arg0: $ModelPart);
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
        constructor(arg0: $ModelPart);
    }
    export class $PufferfishSmallModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $ShulkerBulletModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
}
