import { $BlockAndTintGetter, $Level, $BlockGetter, $Explosion, $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapColor, $FluidState } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List_ } from "@package/java/util";
import { $IBlockType } from "@package/xfacthd/framedblocks/api/type";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $CamoContainer } from "@package/xfacthd/framedblocks/api/camo";
import { $BlueprintData, $BlueprintData_ } from "@package/xfacthd/framedblocks/api/blueprint";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IFramedBlock } from "@package/xfacthd/framedblocks/api/block";
import { $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/xfacthd/framedblocks/api/block/blockentity" {
    export class $FramedBlockEntity extends $BlockEntity {
        getModelData(arg0: boolean): $ModelData;
        getBlock(): $IFramedBlock;
        setCamo(arg0: $CamoContainer<never, never>, arg1: $BlockHitResult, arg2: $Player): void;
        setCamo(arg0: $CamoContainer<never, never>, arg1: boolean): void;
        getCamo(arg0: $BlockHitResult, arg1: $Vec3_, arg2: $Vec3_): $CamoContainer<never, never>;
        getCamo(): $CamoContainer<never, never>;
        getCamo(arg0: $Direction_): $CamoContainer<never, never>;
        getCamo(arg0: $BlockState_): $CamoContainer<never, never>;
        getCamo(arg0: $Direction_, arg1: $Direction_): $CamoContainer<never, never>;
        getCamo(arg0: $BlockHitResult, arg1: $Player): $CamoContainer<never, never>;
        setGlowing(arg0: boolean): void;
        isGlowing(): boolean;
        applyBlueprintData(arg0: $BlueprintData_): void;
        writeToBlueprint(): $BlueprintData;
        isSolidSide(arg0: $Direction_): boolean;
        isMarkedIntangible(): boolean;
        isReinforced(): boolean;
        setReinforced(arg0: boolean): void;
        setIntangible(arg0: boolean): void;
        getMapColor(): $MapColor;
        getCamoFireSpreadSpeed(arg0: $Direction_): number;
        getCamoExplosionResistance(arg0: $Explosion): number;
        canEntityDestroyCamo(arg0: $Entity): boolean;
        /**
         * @deprecated
         */
        canCamoSustainPlant(arg0: $Direction_, arg1: $BlockState_): $TriState;
        canCamoSustainPlant(arg0: $BlockGetter, arg1: $Direction_, arg2: $BlockState_): $TriState;
        getCamoShadeBrightness(arg0: number): number;
        getCamoFlammability(arg0: $Direction_): number;
        getCamoFriction(arg0: $BlockState_, arg1: $Entity, arg2: number): number;
        checkCamoSolid(): void;
        isCamoFlammable(arg0: $Direction_): boolean;
        updateCulling(arg0: boolean, arg1: boolean): void;
        handleInteraction(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockHitResult): $ItemInteractionResult;
        addAdditionalDrops(arg0: $List_<$ItemStack_>, arg1: boolean): void;
        isIntangible(arg0: $CollisionContext): boolean;
        getBlockType(): $IBlockType;
        shouldCamoDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        canAutoApplyCamoOnPlacement(): boolean;
        getCamoBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        canTriviallyDropAllCamos(): boolean;
        static MSG_BLOCK_ENTITY: $Component;
        worldPosition: $BlockPos;
        static MSG_BLACKLISTED: $Component;
        static MSG_NON_SOLID: $Component;
        level: $Level;
        static CAMO_NBT_KEY: string;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get block(): $IFramedBlock;
        get markedIntangible(): boolean;
        get mapColor(): $MapColor;
        get blockType(): $IBlockType;
    }
}
