import { $SideSkipPredicate_ } from "@package/xfacthd/framedblocks/api/predicate/cull";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $List_ } from "@package/java/util";
import { $Supplier_ } from "@package/java/util/function";
import { $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlueprintData_ } from "@package/xfacthd/framedblocks/api/blueprint";
import { $IBlockExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $CamoList } from "@package/xfacthd/framedblocks/api/util";
import { $Class } from "@package/java/lang";
import { $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockAndTintGetter, $BlockGetter, $Explosion, $LevelAccessor, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapColor, $FluidState } from "@package/net/minecraft/world/level/material";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IBlockType } from "@package/xfacthd/framedblocks/api/type";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ShapeProvider } from "@package/xfacthd/framedblocks/api/shapes";
import { $StateCache } from "@package/xfacthd/framedblocks/api/block/cache";
import { $Rotation_, $SoundType, $EntityBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as cache from "@package/xfacthd/framedblocks/api/block/cache";
export * as blockentity from "@package/xfacthd/framedblocks/api/block/blockentity";

declare module "@package/xfacthd/framedblocks/api/block" {
    export class $IFramedBlock {
        static createProperties(arg0: $IBlockType): $BlockBehaviour$Properties;
        static isCamoEmissiveRendering(arg0: $ModelData): boolean;
        static toggleYSlope(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): boolean;
        static LOCK_MESSAGE: string;
        static CAMO_LABEL: string;
        static STATE_UNLOCKED: $Component;
        static STATE_LOCKED: $Component;
    }
    export interface $IFramedBlock extends $EntityBlock, $IBlockExtension {
        rotate(arg0: $BlockState_, arg1: $BlockHitResult, arg2: $Rotation_): $BlockState;
        rotate(arg0: $BlockState_, arg1: $Direction_, arg2: $Rotation_): $BlockState;
        getCache(arg0: $BlockState_): $StateCache;
        initCache(arg0: $BlockState_): $StateCache;
        lockState(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $ItemStack_): boolean;
        handleUse(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_, arg5: $BlockHitResult): $ItemInteractionResult;
        getBlockType(): $IBlockType;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        runOcclusionTestAndGetLookupState(arg0: $SideSkipPredicate_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockState_, arg5: $Direction_): $BlockState;
        shouldApplyGuiTransformFromModel(): boolean;
        shouldRenderAsBlockInJadeTooltip(): boolean;
        getComponentBySkipPredicate(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $Direction_): $BlockState;
        shouldPreventNeighborCulling(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockState_): boolean;
        useCamoOcclusionShapeForLightOcclusion(arg0: $BlockState_): boolean;
        addRunningEffects(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): boolean;
        isSuffocating(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        unpackNestedModelData(arg0: $ModelData, arg1: $BlockState_, arg2: $BlockState_): $ModelData;
        handleBlockLeftClick(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): boolean;
        appendCamoHoverText(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        updateShapeLockable(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $Supplier_<$BlockState>): $BlockState;
        doesBlockOccludeBeaconBeam(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getCamoShadeBrightness(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: number): number;
        tryApplyCamoImmediately(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: $ItemStack_): void;
        isCamoEmissiveRendering(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        getCamoOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getCamoOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $ShapeProvider): $VoxelShape;
        addLandingEffects(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockState_, arg4: $LivingEntity, arg5: number): boolean;
        getSoundType(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): $SoundType;
        getFriction(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): number;
        updateCulling(arg0: $LevelReader, arg1: $BlockPos_): void;
        isIntangible(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): boolean;
        getItemModelSource(): $BlockState;
        getCamoDrops(arg0: $List_<$ItemStack_>, arg1: $LootParams$Builder): $List<$ItemStack>;
        getJadeTargetClass(): $Class<$Block>;
        printCamoData(arg0: $CamoList, arg1: boolean): ($MutableComponent) | undefined;
        printCamoBlock(arg0: $BlueprintData_): ($MutableComponent) | undefined;
        createBlockItem(): $BlockItem;
        getComponentAtEdge(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $Direction_): $BlockState;
        getJadeRenderState(arg0: $BlockState_): $BlockState;
        getCamoVisualShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getJadeRenderScale(arg0: $BlockState_): number;
        hasDynamicLightEmission(arg0: $BlockState_): boolean;
        getBeaconColorMultiplier(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): number;
        getExplosionResistance(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): number;
        shouldDisplayFluidOverlay(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $FluidState): boolean;
        getFireSpreadSpeed(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $Direction_): boolean;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): void;
        getAppearance(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_, arg5: $BlockPos_): $BlockState;
        getFlammability(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        isFireSource(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Direction_): boolean;
        canEntityDestroy(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Entity): boolean;
        canSustainPlant(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_): $TriState;
        getLightEmission(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        isFlammable(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        getMapColor(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $MapColor): $MapColor;
        get blockType(): $IBlockType;
        get itemModelSource(): $BlockState;
        get jadeTargetClass(): $Class<$Block>;
    }
}
