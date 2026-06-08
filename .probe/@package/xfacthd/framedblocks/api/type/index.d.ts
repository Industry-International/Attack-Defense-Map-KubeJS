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
        isDoubleBlock(): boolean;
        supportsWaterLogging(): boolean;
        getSideSkipPredicate(): $SideSkipPredicate;
        allowMakingIntangible(): boolean;
        canOccludeWithSolidCamo(): boolean;
        getFullFacePredicate(): $FullFacePredicate;
        supportsConnectedTextures(): boolean;
        getConnectionPredicate(): $ConnectionPredicate;
        canLockState(): boolean;
        hasBlockItem(): boolean;
        hasSpecialTile(): boolean;
        hasSpecialHitbox(): boolean;
        generateShapes(arg0: $ImmutableList<$BlockState_>): $ShapeProvider;
        consumesTwoCamosInCamoApplicationRecipe(): boolean;
        generateOcclusionShapes(arg0: $ImmutableList<$BlockState_>, arg1: $ShapeProvider): $ShapeProvider;
        getMinimumConTexMode(): $ConTexMode;
        get name(): string;
        get doubleBlock(): boolean;
        get sideSkipPredicate(): $SideSkipPredicate;
        get fullFacePredicate(): $FullFacePredicate;
        get connectionPredicate(): $ConnectionPredicate;
        get minimumConTexMode(): $ConTexMode;
    }
}
