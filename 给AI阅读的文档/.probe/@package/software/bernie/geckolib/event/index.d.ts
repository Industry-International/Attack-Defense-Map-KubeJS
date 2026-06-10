import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $EquipmentSlot, $Entity } from "@package/net/minecraft/world/entity";
import { $GeoRenderLayer } from "@package/software/bernie/geckolib/renderer/layer";
import { $BakedGeoModel_, $BakedGeoModel } from "@package/software/bernie/geckolib/cache/object";
import { $GeoItemRenderer, $GeoRenderer, $GeoEntityRenderer, $GeoObjectRenderer, $GeoBlockRenderer, $GeoArmorRenderer, $GeoReplacedEntityRenderer } from "@package/software/bernie/geckolib/renderer";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/software/bernie/geckolib/event" {
    export class $GeoRenderEvent$Armor$CompileRenderLayers extends $GeoRenderEvent$Armor {
        addLayer(arg0: $GeoRenderLayer<any>): void;
        getRenderer(): $GeoArmorRenderer<never>;
        constructor(arg0: $GeoArmorRenderer<never>);
        get renderer(): $GeoArmorRenderer<never>;
    }
    export class $GeoRenderEvent$Armor extends $Event implements $GeoRenderEvent {
        getEntity(): $Entity;
        getEquipmentSlot(): $EquipmentSlot;
        getItemStack(): $ItemStack;
        getRenderer(): $GeoArmorRenderer<never>;
        constructor(arg0: $GeoArmorRenderer<never>);
        get entity(): $Entity;
        get equipmentSlot(): $EquipmentSlot;
        get itemStack(): $ItemStack;
        get renderer(): $GeoArmorRenderer<never>;
    }
    export class $GeoRenderEvent$Armor$Post extends $GeoRenderEvent$Armor {
        getPartialTick(): number;
        getPackedLight(): number;
        getModel(): $BakedGeoModel;
        getPoseStack(): $PoseStack;
        getBufferSource(): $MultiBufferSource;
        getRenderer(): $GeoArmorRenderer<never>;
        constructor(arg0: $GeoArmorRenderer<never>, arg1: $PoseStack, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: number, arg5: number);
        get partialTick(): number;
        get packedLight(): number;
        get model(): $BakedGeoModel;
        get poseStack(): $PoseStack;
        get bufferSource(): $MultiBufferSource;
        get renderer(): $GeoArmorRenderer<never>;
    }
    export class $GeoRenderEvent$Block$Post extends $GeoRenderEvent$Block {
        getPartialTick(): number;
        getPackedLight(): number;
        getModel(): $BakedGeoModel;
        getPoseStack(): $PoseStack;
        getBufferSource(): $MultiBufferSource;
        getRenderer(): $GeoBlockRenderer<never>;
        constructor(arg0: $GeoBlockRenderer<never>, arg1: $PoseStack, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: number, arg5: number);
        get partialTick(): number;
        get packedLight(): number;
        get model(): $BakedGeoModel;
        get poseStack(): $PoseStack;
        get bufferSource(): $MultiBufferSource;
        get renderer(): $GeoBlockRenderer<never>;
    }
    export class $GeoRenderEvent$Item$CompileRenderLayers extends $GeoRenderEvent$Item {
        addLayer(arg0: $GeoRenderLayer<any>): void;
        getRenderer(): $GeoItemRenderer<never>;
        constructor(arg0: $GeoItemRenderer<never>);
        get renderer(): $GeoItemRenderer<never>;
    }
    export class $GeoRenderEvent$Object extends $Event implements $GeoRenderEvent {
        getRenderer(): $GeoObjectRenderer<never>;
        constructor(arg0: $GeoObjectRenderer<never>);
        get renderer(): $GeoObjectRenderer<never>;
    }
    export class $GeoRenderEvent$Entity$Pre extends $GeoRenderEvent$Entity implements $ICancellableEvent {
        getPartialTick(): number;
        getPackedLight(): number;
        getModel(): $BakedGeoModel;
        getPoseStack(): $PoseStack;
        getBufferSource(): $MultiBufferSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        getRenderer(): $GeoEntityRenderer<never>;
        constructor(arg0: $GeoEntityRenderer<never>, arg1: $PoseStack, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: number, arg5: number);
        get partialTick(): number;
        get packedLight(): number;
        get model(): $BakedGeoModel;
        get poseStack(): $PoseStack;
        get bufferSource(): $MultiBufferSource;
        get renderer(): $GeoEntityRenderer<never>;
    }
    export class $GeoRenderEvent$Object$CompileRenderLayers extends $GeoRenderEvent$Object {
        addLayer(arg0: $GeoRenderLayer<any>): void;
        getRenderer(): $GeoObjectRenderer<never>;
        constructor(arg0: $GeoObjectRenderer<never>);
        get renderer(): $GeoObjectRenderer<never>;
    }
    export class $GeoRenderEvent$Item extends $Event implements $GeoRenderEvent {
        getItemStack(): $ItemStack;
        getRenderer(): $GeoItemRenderer<never>;
        constructor(arg0: $GeoItemRenderer<never>);
        get itemStack(): $ItemStack;
        get renderer(): $GeoItemRenderer<never>;
    }
    export class $GeoRenderEvent$Block extends $Event implements $GeoRenderEvent {
        getBlockEntity(): $BlockEntity;
        getRenderer(): $GeoBlockRenderer<never>;
        constructor(arg0: $GeoBlockRenderer<never>);
        get blockEntity(): $BlockEntity;
        get renderer(): $GeoBlockRenderer<never>;
    }
    export class $GeoRenderEvent$Object$Pre extends $GeoRenderEvent$Object implements $ICancellableEvent {
        getPartialTick(): number;
        getPackedLight(): number;
        getModel(): $BakedGeoModel;
        getPoseStack(): $PoseStack;
        getBufferSource(): $MultiBufferSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        getRenderer(): $GeoObjectRenderer<never>;
        constructor(arg0: $GeoObjectRenderer<never>, arg1: $PoseStack, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: number, arg5: number);
        get partialTick(): number;
        get packedLight(): number;
        get model(): $BakedGeoModel;
        get poseStack(): $PoseStack;
        get bufferSource(): $MultiBufferSource;
        get renderer(): $GeoObjectRenderer<never>;
    }
    export class $GeoRenderEvent$Armor$Pre extends $GeoRenderEvent$Armor implements $ICancellableEvent {
        getPartialTick(): number;
        getPackedLight(): number;
        getModel(): $BakedGeoModel;
        getPoseStack(): $PoseStack;
        getBufferSource(): $MultiBufferSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        getRenderer(): $GeoArmorRenderer<never>;
        constructor(arg0: $GeoArmorRenderer<never>, arg1: $PoseStack, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: number, arg5: number);
        get partialTick(): number;
        get packedLight(): number;
        get model(): $BakedGeoModel;
        get poseStack(): $PoseStack;
        get bufferSource(): $MultiBufferSource;
        get renderer(): $GeoArmorRenderer<never>;
    }
    export class $GeoRenderEvent$ReplacedEntity$CompileRenderLayers extends $GeoRenderEvent$ReplacedEntity {
        addLayer(arg0: $GeoRenderLayer<any>): void;
        getRenderer(): $GeoRenderer<never>;
        constructor(arg0: $GeoReplacedEntityRenderer<never, never>);
        get renderer(): $GeoRenderer<never>;
    }
    export class $GeoRenderEvent$Item$Pre extends $GeoRenderEvent$Item implements $ICancellableEvent {
        getPartialTick(): number;
        getPackedLight(): number;
        getModel(): $BakedGeoModel;
        getPoseStack(): $PoseStack;
        getBufferSource(): $MultiBufferSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        getRenderer(): $GeoItemRenderer<never>;
        constructor(arg0: $GeoItemRenderer<never>, arg1: $PoseStack, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: number, arg5: number);
        get partialTick(): number;
        get packedLight(): number;
        get model(): $BakedGeoModel;
        get poseStack(): $PoseStack;
        get bufferSource(): $MultiBufferSource;
        get renderer(): $GeoItemRenderer<never>;
    }
    export class $GeoRenderEvent$Block$CompileRenderLayers extends $GeoRenderEvent$Block {
        addLayer(arg0: $GeoRenderLayer<any>): void;
        getRenderer(): $GeoBlockRenderer<never>;
        constructor(arg0: $GeoBlockRenderer<never>);
        get renderer(): $GeoBlockRenderer<never>;
    }
    export class $GeoRenderEvent$ReplacedEntity extends $Event implements $GeoRenderEvent {
        getReplacedEntity(): $Entity;
        getRenderer(): $GeoRenderer<never>;
        constructor(arg0: $GeoReplacedEntityRenderer<never, never>);
        get replacedEntity(): $Entity;
        get renderer(): $GeoRenderer<never>;
    }
    export class $GeoRenderEvent$ReplacedEntity$Pre extends $GeoRenderEvent$ReplacedEntity implements $ICancellableEvent {
        getPartialTick(): number;
        getPackedLight(): number;
        getModel(): $BakedGeoModel;
        getPoseStack(): $PoseStack;
        getBufferSource(): $MultiBufferSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        getRenderer(): $GeoRenderer<never>;
        constructor(arg0: $GeoReplacedEntityRenderer<never, never>, arg1: $PoseStack, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: number, arg5: number);
        get partialTick(): number;
        get packedLight(): number;
        get model(): $BakedGeoModel;
        get poseStack(): $PoseStack;
        get bufferSource(): $MultiBufferSource;
        get renderer(): $GeoRenderer<never>;
    }
    export class $GeoRenderEvent$Entity extends $Event implements $GeoRenderEvent {
        getEntity(): $Entity;
        getRenderer(): $GeoEntityRenderer<never>;
        constructor(arg0: $GeoEntityRenderer<never>);
        get entity(): $Entity;
        get renderer(): $GeoEntityRenderer<never>;
    }
    export class $GeoRenderEvent$ReplacedEntity$Post extends $GeoRenderEvent$ReplacedEntity {
        getPartialTick(): number;
        getPackedLight(): number;
        getModel(): $BakedGeoModel;
        getPoseStack(): $PoseStack;
        getBufferSource(): $MultiBufferSource;
        getRenderer(): $GeoRenderer<never>;
        constructor(arg0: $GeoReplacedEntityRenderer<never, never>, arg1: $PoseStack, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: number, arg5: number);
        get partialTick(): number;
        get packedLight(): number;
        get model(): $BakedGeoModel;
        get poseStack(): $PoseStack;
        get bufferSource(): $MultiBufferSource;
        get renderer(): $GeoRenderer<never>;
    }
    export class $GeoRenderEvent$Block$Pre extends $GeoRenderEvent$Block implements $ICancellableEvent {
        getPartialTick(): number;
        getPackedLight(): number;
        getModel(): $BakedGeoModel;
        getPoseStack(): $PoseStack;
        getBufferSource(): $MultiBufferSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        getRenderer(): $GeoBlockRenderer<never>;
        constructor(arg0: $GeoBlockRenderer<never>, arg1: $PoseStack, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: number, arg5: number);
        get partialTick(): number;
        get packedLight(): number;
        get model(): $BakedGeoModel;
        get poseStack(): $PoseStack;
        get bufferSource(): $MultiBufferSource;
        get renderer(): $GeoBlockRenderer<never>;
    }
    export class $GeoRenderEvent$Object$Post extends $GeoRenderEvent$Object {
        getPartialTick(): number;
        getPackedLight(): number;
        getModel(): $BakedGeoModel;
        getPoseStack(): $PoseStack;
        getBufferSource(): $MultiBufferSource;
        getRenderer(): $GeoObjectRenderer<never>;
        constructor(arg0: $GeoObjectRenderer<never>, arg1: $PoseStack, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: number, arg5: number);
        get partialTick(): number;
        get packedLight(): number;
        get model(): $BakedGeoModel;
        get poseStack(): $PoseStack;
        get bufferSource(): $MultiBufferSource;
        get renderer(): $GeoObjectRenderer<never>;
    }
    export class $GeoRenderEvent$Entity$CompileRenderLayers extends $GeoRenderEvent$Entity {
        addLayer(arg0: $GeoRenderLayer<any>): void;
        getRenderer(): $GeoEntityRenderer<never>;
        constructor(arg0: $GeoEntityRenderer<never>);
        get renderer(): $GeoEntityRenderer<never>;
    }
    export class $GeoRenderEvent$Item$Post extends $GeoRenderEvent$Item {
        getPartialTick(): number;
        getPackedLight(): number;
        getModel(): $BakedGeoModel;
        getPoseStack(): $PoseStack;
        getBufferSource(): $MultiBufferSource;
        getRenderer(): $GeoItemRenderer<never>;
        constructor(arg0: $GeoItemRenderer<never>, arg1: $PoseStack, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: number, arg5: number);
        get partialTick(): number;
        get packedLight(): number;
        get model(): $BakedGeoModel;
        get poseStack(): $PoseStack;
        get bufferSource(): $MultiBufferSource;
        get renderer(): $GeoItemRenderer<never>;
    }
    export class $GeoRenderEvent {
    }
    export interface $GeoRenderEvent {
        getRenderer(): $GeoRenderer<never>;
        get renderer(): $GeoRenderer<never>;
    }
    /**
     * Values that may be interpreted as {@link $GeoRenderEvent}.
     */
    export type $GeoRenderEvent_ = (() => $GeoRenderer<never>);
    export class $GeoRenderEvent$Entity$Post extends $GeoRenderEvent$Entity {
        getPartialTick(): number;
        getPackedLight(): number;
        getModel(): $BakedGeoModel;
        getPoseStack(): $PoseStack;
        getBufferSource(): $MultiBufferSource;
        getRenderer(): $GeoEntityRenderer<never>;
        constructor(arg0: $GeoEntityRenderer<never>, arg1: $PoseStack, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: number, arg5: number);
        get partialTick(): number;
        get packedLight(): number;
        get model(): $BakedGeoModel;
        get poseStack(): $PoseStack;
        get bufferSource(): $MultiBufferSource;
        get renderer(): $GeoEntityRenderer<never>;
    }
}
