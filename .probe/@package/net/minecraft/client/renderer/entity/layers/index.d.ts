import { $ItemInHandRenderer, $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $VillagerMetaDataSection$Hat, $VillagerMetaDataSection$Hat_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $EquipmentSlot_, $Entity, $LivingEntity, $HumanoidArm_, $Mob } from "@package/net/minecraft/world/entity";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $HumanoidArmorLayerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $List, $List_, $Map } from "@package/java/util";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $TropicalFish, $Dolphin, $MushroomCow, $Cat, $Panda, $Fox, $Sheep, $SnowGolem, $Wolf, $IronGolem } from "@package/net/minecraft/world/entity/animal";
import { $Llama, $Horse } from "@package/net/minecraft/world/entity/animal/horse";
import { $CowModel, $FoxModel, $WitchModel, $EndermanModel, $SheepModel, $DrownedModel, $SnowGolemModel, $CreeperModel, $Model, $WitherBossModel, $WardenModel, $DolphinModel, $EntityModel, $PlayerModel, $PhantomModel, $HumanoidModel, $PandaModel, $SlimeModel, $IronGolemModel, $SpiderModel, $LlamaModel, $HorseModel, $ShulkerModel, $WolfModel, $BreezeModel, $ColorableHierarchicalModel, $CatModel } from "@package/net/minecraft/client/model";
import { $DefaultedRegistry } from "@package/net/minecraft/core";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $LivingEntityRenderer, $EntityRendererProvider$Context, $ItemRenderer, $RenderLayerParent } from "@package/net/minecraft/client/renderer/entity";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $ModelLayerLocation, $EntityModelSet, $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Drowned, $EnderMan, $Creeper, $Shulker, $Phantom } from "@package/net/minecraft/world/entity/monster";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";

declare module "@package/net/minecraft/client/renderer/entity/layers" {
    export class $StuckInBodyLayer<T extends $LivingEntity, M extends $PlayerModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        renderStuckItem(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Entity, arg4: number, arg5: number, arg6: number, arg7: number): void;
        numStuck(arg0: T): number;
        constructor(arg0: $LivingEntityRenderer<T, M>);
    }
    export class $IronGolemFlowerLayer extends $RenderLayer<$IronGolem, $IronGolemModel<$IronGolem>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $IronGolem, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$IronGolem, $IronGolemModel<$IronGolem>>, arg1: $BlockRenderDispatcher);
    }
    export class $VillagerProfessionLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getHatData<K>(arg0: $Object2ObjectMap<K, $VillagerMetaDataSection$Hat_>, arg1: string, arg2: $DefaultedRegistry<K>, arg3: K): $VillagerMetaDataSection$Hat;
        constructor(arg0: $RenderLayerParent<T, M>, arg1: $ResourceManager, arg2: string);
    }
    export class $LlamaDecorLayer extends $RenderLayer<$Llama, $LlamaModel<$Llama>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Llama, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$Llama, $LlamaModel<$Llama>>, arg1: $EntityModelSet);
    }
    export class $ArrowLayer<T extends $LivingEntity, M extends $PlayerModel<T>> extends $StuckInBodyLayer<T, M> {
        constructor(arg0: $EntityRendererProvider$Context, arg1: $LivingEntityRenderer<T, M>);
    }
    export class $PhantomEyesLayer<T extends $Phantom> extends $EyesLayer<T, $PhantomModel<T>> {
        constructor(arg0: $RenderLayerParent<T, $PhantomModel<T>>);
    }
    export class $SlimeOuterLayer<T extends $LivingEntity> extends $RenderLayer<T, $SlimeModel<T>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, $SlimeModel<T>>, arg1: $EntityModelSet);
    }
    export class $BreezeEyesLayer extends $RenderLayer<$Breeze, $BreezeModel<$Breeze>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Breeze, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$Breeze, $BreezeModel<$Breeze>>);
    }
    export class $ParrotOnShoulderLayer<T extends $Player> extends $RenderLayer<T, $PlayerModel<T>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, $PlayerModel<T>>, arg1: $EntityModelSet);
    }
    export class $WitchItemLayer<T extends $LivingEntity> extends $CrossedArmsItemLayer<T, $WitchModel<T>> {
        constructor(arg0: $RenderLayerParent<T, $WitchModel<T>>, arg1: $ItemInHandRenderer);
    }
    export class $ItemInHandLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        renderArmWithItem(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemDisplayContext_, arg3: $HumanoidArm_, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number): void;
        constructor(arg0: $RenderLayerParent<T, M>, arg1: $ItemInHandRenderer);
    }
    export class $DolphinCarryingItemLayer extends $RenderLayer<$Dolphin, $DolphinModel<$Dolphin>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Dolphin, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$Dolphin, $DolphinModel<$Dolphin>>, arg1: $ItemInHandRenderer);
    }
    export class $HorseArmorLayer extends $RenderLayer<$Horse, $HorseModel<$Horse>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Horse, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$Horse, $HorseModel<$Horse>>, arg1: $EntityModelSet);
    }
    export class $ShulkerHeadLayer extends $RenderLayer<$Shulker, $ShulkerModel<$Shulker>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Shulker, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$Shulker, $ShulkerModel<$Shulker>>);
    }
    export class $SpiderEyesLayer<T extends $Entity, M extends $SpiderModel<T>> extends $EyesLayer<T, M> {
        constructor(arg0: $RenderLayerParent<T, M>);
    }
    export class $SpinAttackEffectLayer<T extends $LivingEntity> extends $RenderLayer<T, $PlayerModel<T>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        static createLayer(): $LayerDefinition;
        static TEXTURE: $ResourceLocation;
        static BOX: string;
        constructor(arg0: $RenderLayerParent<T, $PlayerModel<T>>, arg1: $EntityModelSet);
    }
    export class $TropicalFishPatternLayer extends $RenderLayer<$TropicalFish, $ColorableHierarchicalModel<$TropicalFish>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $TropicalFish, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$TropicalFish, $ColorableHierarchicalModel<$TropicalFish>>, arg1: $EntityModelSet);
    }
    export class $BreezeWindLayer extends $RenderLayer<$Breeze, $BreezeModel<$Breeze>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Breeze, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $RenderLayerParent<$Breeze, $BreezeModel<$Breeze>>);
    }
    export class $WardenEmissiveLayer<T extends $Warden, M extends $WardenModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, M>, arg1: $ResourceLocation_, arg2: $WardenEmissiveLayer$AlphaFunction_<T>, arg3: $WardenEmissiveLayer$DrawSelector_<T, M>);
    }
    export class $CrossedArmsItemLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, M>, arg1: $ItemInHandRenderer);
    }
    export class $HumanoidArmorLayer<T extends $LivingEntity, M extends $HumanoidModel<T>, A extends $HumanoidModel<T>> extends $RenderLayer<T, M> implements $HumanoidArmorLayerAccessor {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        static getArmorLocationCache$create_$md$5bc4b9$0(): $Map<any, any>;
        wrapWithCondition$eaa000$geckolib$wrapArmorPieceRender(arg0: $HumanoidArmorLayer<any, any, any>, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: $LivingEntity, arg4: $EquipmentSlot_, arg5: number, arg6: $HumanoidModel<any>, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): boolean;
        getArmorModelHook(arg0: T, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: A): $Model;
        setPartVisibility(arg0: A, arg1: $EquipmentSlot_): void;
        create$callSetPartVisibility(arg0: $HumanoidModel<never>, arg1: $EquipmentSlot_): void;
        create$getInnerModel(): $HumanoidModel<never>;
        create$getOuterModel(): $HumanoidModel<never>;
        constructor(arg0: $RenderLayerParent<T, M>, arg1: A, arg2: A, arg3: $ModelManager);
        static get armorLocationCache$create_$md$5bc4b9$0(): $Map<any, any>;
    }
    export class $EnderEyesLayer<T extends $LivingEntity> extends $EyesLayer<T, $EndermanModel<T>> {
        constructor(arg0: $RenderLayerParent<T, $EndermanModel<T>>);
    }
    export class $PlayerItemInHandLayer<T extends $Player, M extends $EntityModel<T>> extends $ItemInHandLayer<T, M> {
        handler$gog000$moonlight$poseRightArm(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemDisplayContext_, arg3: $HumanoidArm_, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: $CallbackInfo): void;
        handler$eii000$superbwarfare$renderArmWithItem(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemDisplayContext_, arg3: $HumanoidArm_, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: $CallbackInfo): void;
        constructor(arg0: $RenderLayerParent<T, M>, arg1: $ItemInHandRenderer);
    }
    export class $ElytraLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        shouldRender(arg0: $ItemStack_, arg1: T): boolean;
        getElytraTexture(arg0: $ItemStack_, arg1: T): $ResourceLocation;
        constructor(arg0: $RenderLayerParent<T, M>, arg1: $EntityModelSet);
    }
    export class $CreeperPowerLayer extends $EnergySwirlLayer<$Creeper, $CreeperModel<$Creeper>> {
        constructor(arg0: $RenderLayerParent<$Creeper, $CreeperModel<$Creeper>>, arg1: $EntityModelSet);
    }
    export class $DrownedOuterLayer<T extends $Drowned> extends $RenderLayer<T, $DrownedModel<T>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, $DrownedModel<T>>, arg1: $EntityModelSet);
    }
    export class $SnowGolemHeadLayer extends $RenderLayer<$SnowGolem, $SnowGolemModel<$SnowGolem>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $SnowGolem, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$SnowGolem, $SnowGolemModel<$SnowGolem>>, arg1: $BlockRenderDispatcher, arg2: $ItemRenderer);
    }
    export class $WolfArmorLayer extends $RenderLayer<$Wolf, $WolfModel<$Wolf>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Wolf, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$Wolf, $WolfModel<$Wolf>>, arg1: $EntityModelSet);
    }
    export class $Deadmau5EarsLayer extends $RenderLayer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>>);
    }
    export class $MushroomCowMushroomLayer<T extends $MushroomCow> extends $RenderLayer<T, $CowModel<T>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, $CowModel<T>>, arg1: $BlockRenderDispatcher);
    }
    export class $HorseMarkingLayer extends $RenderLayer<$Horse, $HorseModel<$Horse>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Horse, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$Horse, $HorseModel<$Horse>>);
    }
    export class $IronGolemCrackinessLayer extends $RenderLayer<$IronGolem, $IronGolemModel<$IronGolem>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $IronGolem, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$IronGolem, $IronGolemModel<$IronGolem>>);
    }
    export class $PandaHoldsItemLayer extends $RenderLayer<$Panda, $PandaModel<$Panda>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Panda, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$Panda, $PandaModel<$Panda>>, arg1: $ItemInHandRenderer);
    }
    export class $EnergySwirlLayer<T extends $Entity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        model(): $EntityModel<T>;
        getTextureLocation(): $ResourceLocation;
        xOffset(arg0: number): number;
        constructor(arg0: $RenderLayerParent<T, M>);
        get textureLocation(): $ResourceLocation;
    }
    export class $BeeStingerLayer<T extends $LivingEntity, M extends $PlayerModel<T>> extends $StuckInBodyLayer<T, M> {
        constructor(arg0: $LivingEntityRenderer<T, M>);
    }
    export class $CapeLayer extends $RenderLayer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        handler$cno000$fabric_rendering_v1$injectCapeRenderCheck(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $CallbackInfo): void;
        constructor(arg0: $RenderLayerParent<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>>);
    }
    export class $SkeletonClothingLayer<T extends $Mob, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, M>, arg1: $EntityModelSet, arg2: $ModelLayerLocation, arg3: $ResourceLocation_);
    }
    export class $WardenEmissiveLayer$DrawSelector<T extends $Warden, M extends $EntityModel<T>> {
    }
    export interface $WardenEmissiveLayer$DrawSelector<T extends $Warden, M extends $EntityModel<T>> {
        getPartsToDraw(arg0: M): $List<$ModelPart>;
    }
    /**
     * Values that may be interpreted as {@link $WardenEmissiveLayer$DrawSelector}.
     */
    export type $WardenEmissiveLayer$DrawSelector_<T, M> = ((arg0: M) => $List_<$ModelPart>);
    export class $CustomHeadLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        static translateToHead(arg0: $PoseStack, arg1: boolean): void;
        constructor(arg0: $RenderLayerParent<T, M>, arg1: $EntityModelSet, arg2: $ItemInHandRenderer);
        constructor(arg0: $RenderLayerParent<T, M>, arg1: $EntityModelSet, arg2: number, arg3: number, arg4: number, arg5: $ItemInHandRenderer);
    }
    export class $CarriedBlockLayer extends $RenderLayer<$EnderMan, $EndermanModel<$EnderMan>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $EnderMan, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$EnderMan, $EndermanModel<$EnderMan>>, arg1: $BlockRenderDispatcher);
    }
    export class $WardenEmissiveLayer$AlphaFunction<T extends $Warden> {
    }
    export interface $WardenEmissiveLayer$AlphaFunction<T extends $Warden> {
        apply(arg0: T, arg1: number, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $WardenEmissiveLayer$AlphaFunction}.
     */
    export type $WardenEmissiveLayer$AlphaFunction_<T> = ((arg0: T, arg1: number, arg2: number) => number);
    export class $SheepFurLayer extends $RenderLayer<$Sheep, $SheepModel<$Sheep>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Sheep, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$Sheep, $SheepModel<$Sheep>>, arg1: $EntityModelSet);
    }
    export class $RenderLayer<T extends $Entity, M extends $EntityModel<T>> {
        static renderColoredCutoutModel<T extends $LivingEntity>(arg0: $EntityModel<T>, arg1: $ResourceLocation_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: T, arg6: number): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getTextureLocation(arg0: T): $ResourceLocation;
        getParentModel(): M;
        static coloredCutoutModelCopyLayerRender<T extends $LivingEntity>(arg0: $EntityModel<T>, arg1: $EntityModel<T>, arg2: $ResourceLocation_, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: T, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        constructor(arg0: $RenderLayerParent<T, M>);
        get parentModel(): M;
    }
    export class $FoxHeldItemLayer extends $RenderLayer<$Fox, $FoxModel<$Fox>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Fox, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$Fox, $FoxModel<$Fox>>, arg1: $ItemInHandRenderer);
    }
    export class $WitherArmorLayer extends $EnergySwirlLayer<$WitherBoss, $WitherBossModel<$WitherBoss>> {
        constructor(arg0: $RenderLayerParent<$WitherBoss, $WitherBossModel<$WitherBoss>>, arg1: $EntityModelSet);
    }
    export class $EyesLayer<T extends $Entity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        renderType(): $RenderType;
        constructor(arg0: $RenderLayerParent<T, M>);
    }
    export class $CatCollarLayer extends $RenderLayer<$Cat, $CatModel<$Cat>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Cat, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$Cat, $CatModel<$Cat>>, arg1: $EntityModelSet);
    }
    export class $SaddleLayer<T extends $Entity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        constructor(arg0: $RenderLayerParent<T, M>, arg1: M, arg2: $ResourceLocation_);
    }
    export class $WolfCollarLayer extends $RenderLayer<$Wolf, $WolfModel<$Wolf>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Wolf, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$Wolf, $WolfModel<$Wolf>>);
    }
}
