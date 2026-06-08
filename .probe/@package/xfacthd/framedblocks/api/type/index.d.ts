import { $SideSkipPredicate } from "@package/xfacthd/framedblocks/api/predicate/cull";
import { $FullFacePredicate } from "@package/xfacthd/framedblocks/api/predicate/fullface";
import { $ShapeProvider } from "@package/xfacthd/framedblocks/api/shapes";
import { $ConTexMode, $ConnectionPredicate } from "@package/xfacthd/framedblocks/api/predicate/contex";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ImmutableList } from "@package/com/google/common/collect";

declare module "@package/xfacthd/framedblocks/api/type" {
    export class $IBlockType {
    }
    export interface $IBlockType {
        getName(): string;
        compareTo(arg0: $IBlockType): number;
        supportsConnectedTextures(): boolean;
        isDoubleBlock(): boolean;
        consumesTwoCamosInCamoApplicationRecipe(): boolean;
        hasBlockItem(): boolean;
        hasSpecialTile(): boolean;
        generateShapes(arg0: $ImmutableList<$BlockState_>): $ShapeProvider;
        hasSpecialHitbox(): boolean;
        getFullFacePredicate(): $FullFacePredicate;
        getConnectionPredicate(): $ConnectionPredicate;
        getSideSkipPredicate(): $SideSkipPredicate;
        allowMakingIntangible(): boolean;
        supportsWaterLogging(): boolean;
        canOccludeWithSolidCamo(): boolean;
        canLockState(): boolean;
        generateOcclusionShapes(arg0: $ImmutableList<$BlockState_>, arg1: $ShapeProvider): $ShapeProvider;
        getMinimumConTexMode(): $ConTexMode;
        get name(): string;
        get doubleBlock(): boolean;
        get fullFacePredicate(): $FullFacePredicate;
        get connectionPredicate(): $ConnectionPredicate;
        get sideSkipPredicate(): $SideSkipPredicate;
        get minimumConTexMode(): $ConTexMode;
    }
}
